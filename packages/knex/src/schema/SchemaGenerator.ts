import { Knex } from 'knex';
import { CommitOrderCalculator, Dictionary, EntityMetadata } from '@mikro-orm/core';
import { Column, ForeignKey, Index, TableDifference } from '../typings';
import { DatabaseSchema } from './DatabaseSchema';
import { DatabaseTable } from './DatabaseTable';
import { SqlEntityManager } from '../SqlEntityManager';
import { SchemaComparator } from './SchemaComparator';

export class SchemaGenerator {

  private readonly config = this.em.config;
  private readonly driver = this.em.getDriver();
  private readonly metadata = this.em.getMetadata();
  private readonly platform = this.driver.getPlatform();
  private readonly helper = this.platform.getSchemaHelper()!;
  private readonly connection = this.driver.getConnection();
  private readonly knex = this.connection.getKnex();

  constructor(private readonly em: SqlEntityManager) { }

  async generate(): Promise<string> {
    const [dropSchema, createSchema] = await Promise.all([
      this.getDropSchemaSQL(false),
      this.getCreateSchemaSQL(false),
    ]);

    return this.wrapSchema(dropSchema + createSchema);
  }

  async createSchema(wrap = true): Promise<void> {
    await this.ensureDatabase();
    const sql = await this.getCreateSchemaSQL(wrap);
    await this.execute(sql);
  }

  async ensureDatabase() {
    const dbName = this.config.get('dbName')!;
    const exists = await this.helper.databaseExists(this.connection, dbName);

    if (!exists) {
      this.config.set('dbName', this.helper.getManagementDbName());
      await this.driver.reconnect();
      await this.createDatabase(dbName);
    }
  }

  async getCreateSchemaSQL(wrap = true): Promise<string> {
    const metadata = this.getOrderedMetadata();
    const toSchema = DatabaseSchema.fromMetadata(metadata, this.platform, this.config);
    let ret = '';

    for (const tableDef of toSchema.getTables()) {
      ret += await this.dump(this.createTable(tableDef));
    }

    for (const tableDef of toSchema.getTables()) {
      ret += await this.dump(this.knex.schema.alterTable(tableDef.name, table => this.createForeignKeys(table, tableDef)));
    }

    return this.wrapSchema(ret, wrap);
  }

  async dropSchema(wrap = true, dropMigrationsTable = false, dropDb = false): Promise<void> {
    if (dropDb) {
      const name = this.config.get('dbName')!;
      return this.dropDatabase(name);
    }

    const sql = await this.getDropSchemaSQL(wrap, dropMigrationsTable);
    await this.execute(sql);
  }

  async getDropSchemaSQL(wrap = true, dropMigrationsTable = false): Promise<string> {
    const metadata = this.getOrderedMetadata().reverse();
    let ret = '';

    for (const meta of metadata) {
      ret += await this.dump(this.dropTable(meta.collection), '\n');
    }

    if (dropMigrationsTable) {
      ret += await this.dump(this.dropTable(this.config.get('migrations').tableName!), '\n');
    }

    return this.wrapSchema(ret + '\n', wrap);
  }

  async updateSchema(wrap = true, safe = false, dropTables = true): Promise<void> {
    const sql = await this.getUpdateSchemaSQL(wrap, safe, dropTables);
    await this.execute(sql);
  }

  async getUpdateSchemaSQL(wrap = true, safe = false, dropTables = true): Promise<string> {
    const metadata = this.getOrderedMetadata();
    const toSchema = DatabaseSchema.fromMetadata(metadata, this.platform, this.config);
    const fromSchema = await DatabaseSchema.create(this.connection, this.platform, this.config);
    const comparator = new SchemaComparator(this.platform);
    const schemaDiff = comparator.compare(fromSchema, toSchema);
    let ret = '';

    // TODO
    // if (platform.supportsSchemas()) {
    //   for (const newNamespace of schemaDiff.newNamespaces) {
    //     sql[] = platform.getCreateSchemaSQL($newNamespace);
    //   }
    // }

    if (!safe) {
      for (const orphanedForeignKey of schemaDiff.orphanedForeignKeys) {
        ret += await this.dump(this.knex.schema.alterTable(orphanedForeignKey.localTableName, table => table.dropForeign(orphanedForeignKey.columnNames, orphanedForeignKey.constraintName)));
      }
    }

    for (const newTable of Object.values(schemaDiff.newTables)) {
      ret += await this.dump(this.createTable(newTable));
    }

    for (const newTable of Object.values(schemaDiff.newTables)) {
      ret += await this.dump(this.knex.schema.alterTable(newTable.name, table => this.createForeignKeys(table, newTable)));
    }

    if (dropTables && !safe) {
      for (const table of Object.values(schemaDiff.removedTables)) {
        ret += await this.dump(this.dropTable(table.name, table.schema));
      }
    }

    for (const changedTable of Object.values(schemaDiff.changedTables)) {
      for (const builder of this.preAlterTable(changedTable, safe)) {
        ret += await this.dump(builder);
        // const dump = await this.dump(builder);
        // const tmp = dump.replace(/pragma table_.+/ig, '').replace(/\n\n+/g, '\n').trim();
        // ret += tmp ? tmp + '\n\n' : '';
      }
    }

    for (const changedTable of Object.values(schemaDiff.changedTables)) {
      for (const builder of this.alterTable(changedTable, safe)) {
        const dump = await this.dump(builder);
        // TODO move to some method, handle mysql too, and verify it works (and is in the right place) - probably not
        const tmp = dump.replace(/pragma table_.+/ig, '').replace(/\n\n+/g, '\n').trim();
        ret += tmp ? tmp + '\n\n' : '';
      }
    }

    return this.wrapSchema(ret, wrap);
  }

  private createForeignKey(table: Knex.CreateTableBuilder, foreignKey: ForeignKey) {
    const builder = table
      .foreign(foreignKey.columnNames, foreignKey.constraintName)
      .references(foreignKey.referencedColumnNames)
      .inTable(foreignKey.referencedTableName)
      .withKeyName(foreignKey.constraintName);

    if (foreignKey.updateRule) {
      builder.onUpdate(foreignKey.updateRule);
    }

    if (foreignKey.deleteRule) {
      builder.onDelete(foreignKey.deleteRule);
    }
  }

  /**
   * We need to drop foreign keys first for all tables to allow dropping PK constraints.
   */
  private preAlterTable(diff: TableDifference, safe: boolean): Knex.SchemaBuilder[] {
    const ret: Knex.SchemaBuilder[] = [];
    const push = (sql: string) => sql ? ret.push(this.knex.schema.raw(sql)) : undefined;
    push(this.helper.getPreAlterTable(diff, safe));

    ret.push(this.knex.schema.alterTable(diff.name, table => {
      for (const foreignKey of Object.values(diff.removedForeignKeys)) {
        table.dropForeign(foreignKey.columnNames, foreignKey.constraintName);
      }

      for (const foreignKey of Object.values(diff.changedForeignKeys)) {
        table.dropForeign(foreignKey.columnNames, foreignKey.constraintName);
      }
    }));

    return ret;
  }

  private alterTable(diff: TableDifference, safe: boolean): Knex.SchemaBuilder[] {
    const ret: Knex.SchemaBuilder[] = [];

    ret.push(this.knex.schema.alterTable(diff.name, table => {
      for (const index of Object.values(diff.removedIndexes)) {
        this.dropIndex(table, index);
      }

      for (const index of Object.values(diff.changedIndexes)) {
        this.dropIndex(table, index);
      }

      for (const column of Object.values(diff.addedColumns)) {
        const col = this.helper.createTableColumn(table, column, diff.fromTable);
        this.configureColumn(column, col);
        const foreignKey = Object.values(diff.addedForeignKeys).find(fk => fk.columnNames.length === 1 && fk.columnNames[0] === column.name);

        if (foreignKey) {
          delete diff.addedForeignKeys[foreignKey.constraintName];
          col.references(foreignKey.referencedColumnNames[0])
            .inTable(foreignKey.referencedTableName)
            .withKeyName(foreignKey.constraintName)
            .onUpdate(foreignKey.updateRule!)
            .onDelete(foreignKey.deleteRule!);
        }
      }

      /* istanbul ignore else */
      if (!safe) {
        for (const column of Object.values(diff.removedColumns)) {
          table.dropColumn(column.name);
        }
      }

      for (const { column, changedProperties } of Object.values(diff.changedColumns)) {
        if (changedProperties.size === 1 && changedProperties.has('comment')) {
          continue;
        }

        const col = this.helper.createTableColumn(table, column, diff.fromTable, changedProperties).alter();
        this.configureColumn(column, col, changedProperties);
      }

      for (const { column } of Object.values(diff.changedColumns).filter(diff => diff.changedProperties.has('autoincrement'))) {
        this.helper.pushTableQuery(table, this.helper.getAlterColumnAutoincrement(diff.name, column));
      }

      for (const { column } of Object.values(diff.changedColumns).filter(diff => diff.changedProperties.has('comment'))) {
        this.helper.pushTableQuery(table, this.helper.getChangeColumnCommentSQL(diff.name, column));
      }

      for (const [oldColumnName, column] of Object.entries(diff.renamedColumns)) {
        this.helper.pushTableQuery(table, this.helper.getRenameColumnSQL(diff.name, oldColumnName, column));
      }

      for (const foreignKey of Object.values(diff.addedForeignKeys)) {
        this.createForeignKey(table, foreignKey);
      }

      for (const foreignKey of Object.values(diff.changedForeignKeys)) {
        this.createForeignKey(table, foreignKey);
      }

      for (const index of Object.values(diff.addedIndexes)) {
        this.createIndex(table, index, diff.name);
      }

      for (const index of Object.values(diff.changedIndexes)) {
        this.createIndex(table, index, diff.name, true);
      }

      for (const [oldIndexName, index] of Object.entries(diff.renamedIndexes)) {
        if (index.unique) {
          this.dropIndex(table, index, oldIndexName);
          this.createIndex(table, index, diff.name);
        } else {
          this.helper.pushTableQuery(table, this.helper.getRenameIndexSQL(diff.name, index, oldIndexName));
        }
      }

      if ('changedComment' in diff) {
        table.comment(diff.changedComment ?? '');
      }
    }));

    return ret;
  }

  /**
   * creates new database and connects to it
   */
  async createDatabase(name: string): Promise<void> {
    await this.driver.execute(this.helper.getCreateDatabaseSQL('' + this.knex.ref(name)));
    this.config.set('dbName', name);
    await this.driver.reconnect();
  }

  async dropDatabase(name: string): Promise<void> {
    this.config.set('dbName', this.helper.getManagementDbName());
    await this.driver.reconnect();
    await this.driver.execute(this.helper.getDropDatabaseSQL('' + this.knex.ref(name)));
  }

  async execute(sql: string, wrap = false) {
    const lines = this.wrapSchema(sql, wrap).split('\n').filter(i => i.trim());

    for (const line of lines) {
      await this.driver.execute(line);
    }
  }

  private wrapSchema(sql: string, wrap = true): string {
    if (!wrap) {
      return sql;
    }

    let ret = this.helper.getSchemaBeginning(this.config.get('charset'));
    ret += sql;
    ret += this.helper.getSchemaEnd();

    return ret;
  }

  private createTable(tableDef: DatabaseTable): Knex.SchemaBuilder {
    return this.knex.schema.createTable(tableDef.name, table => {
      tableDef.getColumns().forEach(column => {
        const col = this.helper.createTableColumn(table, column, tableDef);
        this.configureColumn(column, col);
      });

      for (const index of tableDef.getIndexes()) {
        this.createIndex(table, index, tableDef.name, !tableDef.getColumns().some(c => c.autoincrement));
      }

      if (tableDef.comment) {
        table.comment(tableDef.comment);
      }

      if (!this.helper.supportsSchemaConstraints()) {
        for (const fk of Object.values(tableDef.getForeignKeys())) {
          this.createForeignKey(table, fk);
        }
      }

      this.helper.finalizeTable(table, this.config.get('charset'), this.config.get('collate'));
    });
  }

  private createIndex(table: Knex.CreateTableBuilder, index: Index, tableName: string, createPrimary = false) {
    if (index.primary && !createPrimary) {
      return;
    }

    if (index.primary) {
      const keyName = tableName.includes('.') ? tableName.split('.').pop()! + '_pkey' : undefined;
      table.primary(index.columnNames, keyName);
    } else if (index.unique) {
      table.unique(index.columnNames, index.keyName);
    } else if (index.expression) {
      this.helper.pushTableQuery(table, index.expression);
    } else {
      table.index(index.columnNames, index.keyName, index.type);
    }
  }

  private dropIndex(table: Knex.CreateTableBuilder, index: Index, oldIndexName = index.keyName) {
    if (index.primary) {
      table.dropPrimary(oldIndexName);
    } else if (index.unique) {
      table.dropUnique(index.columnNames, oldIndexName);
    } else {
      table.dropIndex(index.columnNames, oldIndexName);
    }
  }

  private dropTable(name: string, schema?: string): Knex.SchemaBuilder {
    /* istanbul ignore next */
    let builder = this.knex.schema.dropTableIfExists(schema ? `${schema}.${name}` : name);

    if (this.platform.usesCascadeStatement()) {
      builder = this.knex.schema.raw(builder.toQuery() + ' cascade');
    }

    return builder;
  }

  private configureColumn<T>(column: Column, col: Knex.ColumnBuilder, changedProperties?: Set<string>) {
    return this.helper.configureColumn(column, col, this.knex, changedProperties);
  }

  private createForeignKeys(table: Knex.CreateTableBuilder, tableDef: DatabaseTable): void {
    if (!this.helper.supportsSchemaConstraints()) {
      return;
    }

    for (const fk of Object.values(tableDef.getForeignKeys())) {
      this.createForeignKey(table, fk);
    }
  }

  private getOrderedMetadata(): EntityMetadata[] {
    const metadata = Object.values(this.metadata.getAll()).filter(meta => {
      const isRootEntity = meta.root.className === meta.className;
      return isRootEntity && !meta.embeddable;
    });
    const calc = new CommitOrderCalculator();
    metadata.forEach(meta => calc.addNode(meta.root.className));
    let meta = metadata.pop();

    while (meta) {
      for (const prop of meta.props) {
        calc.discoverProperty(prop, meta.root.className);
      }

      meta = metadata.pop();
    }

    return calc.sort().map(cls => this.metadata.find(cls)!);
  }

  private async dump(builder: Knex.SchemaBuilder, append = '\n\n'): Promise<string> {
    const sql = await builder.generateDdlCommands();
    const queries = [...sql.pre, ...sql.sql, ...sql.post];

    return queries.length > 0 ? `${queries.map(q => typeof q === 'object' ? (q as Dictionary).sql : q).join(';\n')};${append}` : '';
  }

}
