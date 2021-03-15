import { Configuration, EntityMetadata, EntityProperty, ReferenceType } from '@mikro-orm/core';
import { DatabaseTable } from './DatabaseTable';
import { AbstractSqlConnection } from '../AbstractSqlConnection';
import { Table } from '../typings';
import { AbstractSqlPlatform } from '../AbstractSqlPlatform';

export class DatabaseSchema {

  private readonly tables: DatabaseTable[] = [];

  constructor(private readonly platform: AbstractSqlPlatform,
              readonly name: string) { }

  addTable(name: string, schema: string | undefined | null, meta?: EntityMetadata): DatabaseTable {
    const table = new DatabaseTable(this.platform, name, schema ?? undefined, meta);
    this.tables.push(table);

    return table;
  }

  getTables(): DatabaseTable[] {
    return this.tables;
  }

  getTable(name: string): DatabaseTable | undefined {
    return this.tables.find(t => t.name === name || `${t.schema}.${t.name}` === name);
  }

  hasTable(name: string) {
    return !!this.getTable(name);
  }

  static async create(connection: AbstractSqlConnection, platform: AbstractSqlPlatform, config: Configuration): Promise<DatabaseSchema> {
    const schema = new DatabaseSchema(platform, config.get('schema'));
    const tables = await connection.execute<Table[]>(platform.getSchemaHelper()!.getListTablesSQL());

    for (const t of tables) {
      if (t.table_name === config.get('migrations').tableName) {
        continue;
      }

      const table = schema.addTable(t.table_name, t.schema_name);
      table.comment = t.table_comment;
      const cols = await platform.getSchemaHelper()!.getColumns(connection, table.name, table.schema);
      const indexes = await platform.getSchemaHelper()!.getIndexes(connection, table.name, table.schema);
      const pks = await platform.getSchemaHelper()!.getPrimaryKeys(connection, indexes, table.name, table.schema);
      const fks = await platform.getSchemaHelper()!.getForeignKeys(connection, table.name, table.schema);
      const enums = await platform.getSchemaHelper()!.getEnumDefinitions(connection, table.name, table.schema);
      table.init(cols, indexes, pks, fks, enums);
    }

    return schema;
  }

  static fromMetadata(metadata: EntityMetadata[], platform: AbstractSqlPlatform, config: Configuration): DatabaseSchema {
    const schema = new DatabaseSchema(platform, config.get('schema'));

    for (const meta of metadata) {
      const table = schema.addTable(meta.collection, config.get('schema'), meta); // todo custom schema name via EntityOptions
      table.comment = meta.comment;
      meta.props
        .filter(prop => this.shouldHaveColumn(meta, prop))
        .forEach(prop => table.addColumnFromProperty(prop, meta));
      meta.indexes.forEach(index => table.addIndex(meta, index, 'index'));
      meta.uniques.forEach(index => table.addIndex(meta, index, 'unique'));
      table.addIndex(meta, { properties: meta.props.filter(prop => prop.primary).map(prop => prop.name) }, 'primary');
    }

    return schema;
  }

  private static shouldHaveColumn(meta: EntityMetadata, prop: EntityProperty): boolean {
    if (prop.persist === false || !prop.fieldNames) {
      return false;
    }

    if (meta.pivotTable || (ReferenceType.EMBEDDED && prop.object)) {
      return true;
    }

    const getRootProperty: (prop: EntityProperty) => EntityProperty = (prop: EntityProperty) => prop.embedded ? getRootProperty(meta.properties[prop.embedded[0]]) : prop;
    const rootProp = getRootProperty(prop);

    if (rootProp.reference === ReferenceType.EMBEDDED) {
      return prop === rootProp || !rootProp.object;
    }

    return [ReferenceType.SCALAR, ReferenceType.MANY_TO_ONE].includes(prop.reference) || (prop.reference === ReferenceType.ONE_TO_ONE && prop.owner);
  }

}
