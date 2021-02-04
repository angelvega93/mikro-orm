(window.webpackJsonp=window.webpackJsonp||[]).push([[455],{1256:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=o,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||a;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},524:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(1256)),i={title:"Quick Start"},s={unversionedId:"quick-start",id:"version-4.0/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"First install the module via yarn or npm and do not forget to install the",source:"@site/versioned_docs/version-4.0/quick-start.md",slug:"/quick-start",permalink:"/docs/4.0/quick-start",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.0/quick-start.md",version:"4.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612454853,sidebar:"version-4.0/docs",previous:{title:"Usage with MongoDB",permalink:"/docs/4.0/usage-with-mongo"},next:{title:"Using MikroORM with NestJS framework",permalink:"/docs/4.0/usage-with-nestjs"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"First install the module via ",Object(a.b)("inlineCode",{parentName:"p"},"yarn")," or ",Object(a.b)("inlineCode",{parentName:"p"},"npm")," and do not forget to install the\ndatabase driver as well:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"yarn add @mikro-orm/core @mikro-orm/mongodb     # for mongo\nyarn add @mikro-orm/core @mikro-orm/mysql       # for mysql/mariadb\nyarn add @mikro-orm/core @mikro-orm/mariadb     # for mysql/mariadb\nyarn add @mikro-orm/core @mikro-orm/postgresql  # for postgresql\nyarn add @mikro-orm/core @mikro-orm/sqlite      # for sqlite\n")),Object(a.b)("p",null,"or"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm i -s @mikro-orm/core @mikro-orm/mongodb     # for mongo\nnpm i -s @mikro-orm/core @mikro-orm/mysql       # for mysql/mariadb\nnpm i -s @mikro-orm/core @mikro-orm/mariadb     # for mysql/mariadb\nnpm i -s @mikro-orm/core @mikro-orm/postgresql  # for postgresql\nnpm i -s @mikro-orm/core @mikro-orm/sqlite      # for sqlite\n")),Object(a.b)("p",null,"Next you will need to enable support for ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/decorators.html"}),"decorators"),"\nas well as ",Object(a.b)("inlineCode",{parentName:"p"},"esModuleInterop")," in ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," via:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"experimentalDecorators": true,\n"emitDecoratorMetadata": true,\n"esModuleInterop": true\n')),Object(a.b)("p",null,"Then call ",Object(a.b)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  entities: ['./dist/entities'], // path to your JS entities (dist), relative to `baseDir`\n  dbName: 'my-db-name',\n  type: 'mongo',\n  clientUrl: '...', // defaults to 'mongodb://localhost:27017' for mongodb driver\n});\nconsole.log(orm.em); // access EntityManager via `em` property\n")),Object(a.b)("p",null,"There are more ways to configure your entities, take a look at\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://mikro-orm.io/installation/"}),"installation page"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Read more about all the possible configuration options in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://mikro-orm.io/docs/configuration"}),"Advanced Configuration")," section.")),Object(a.b)("p",null,"Then you will need to fork entity manager for each request so their\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://mikro-orm.io/identity-map/"}),"identity maps")," will not collide.\nTo do so, use the ",Object(a.b)("inlineCode",{parentName:"p"},"RequestContext")," helper:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const app = express();\n\napp.use((req, res, next) => {\n  RequestContext.create(orm.em, next);\n});\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You should register this middleware as the last one just before request handlers and before\nany of your custom middleware that is using the ORM. There might be issues when you register\nit before request processing middleware like ",Object(a.b)("inlineCode",{parentName:"p"},"queryParser")," or ",Object(a.b)("inlineCode",{parentName:"p"},"bodyParser"),", so definitely\nregister the context after them. ")),Object(a.b)("p",null,"More info about ",Object(a.b)("inlineCode",{parentName:"p"},"RequestContext")," is described ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://mikro-orm.io/identity-map/#request-context"}),"here"),"."),Object(a.b)("p",null,"Now you can start defining your entities (in one of the ",Object(a.b)("inlineCode",{parentName:"p"},"entities")," folders). This is how\nsimple entity can look like in mongo driver:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="./entities/MongoBook.ts"',title:'"./entities/MongoBook.ts"'}),"@Entity()\nexport class MongoBook {\n\n  @PrimaryKey()\n  _id: ObjectID;\n\n  @SerializedPrimaryKey()\n  id: string;\n\n  @Property()\n  title: string;\n\n  @ManyToOne()\n  author: Author;\n\n  @ManyToMany()\n  tags = new Collection<BookTag>(this);\n\n  constructor(title: string, author: Author) {\n    this.title = title;\n    this.author = author;\n  }\n\n}\n")),Object(a.b)("p",null,"For SQL drivers, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"id: number")," PK:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="./entities/SqlBook.ts"',title:'"./entities/SqlBook.ts"'}),"@Entity()\nexport class SqlBook {\n\n  @PrimaryKey()\n  id: number;\n\n}\n")),Object(a.b)("p",null,"Or if you want to use UUID primary keys:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="./entities/UuidBook.ts"',title:'"./entities/UuidBook.ts"'}),"import { v4 } from 'uuid';\n\n@Entity()\nexport class UuidBook {\n\n  @PrimaryKey()\n  uuid = v4();\n\n}\n")),Object(a.b)("p",null,"More information can be found in\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://mikro-orm.io/defining-entities/"}),"defining entities section")," in docs."),Object(a.b)("p",null,"When you have your entities defined, you can start using ORM either via ",Object(a.b)("inlineCode",{parentName:"p"},"EntityManager"),"\nor via ",Object(a.b)("inlineCode",{parentName:"p"},"EntityRepository"),"s."),Object(a.b)("p",null,"To save entity state to database, you need to persist it. Persist determines\nwhether to use ",Object(a.b)("inlineCode",{parentName:"p"},"insert")," or ",Object(a.b)("inlineCode",{parentName:"p"},"update")," and computes appropriate change-set. Entity references\nthat are not persisted yet (does not have identifier) will be cascade persisted automatically. "),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// use constructors in your entities for required parameters\nconst author = new Author('Jon Snow', 'snow@wall.st');\nauthor.born = new Date();\n\nconst publisher = new Publisher('7K publisher');\n\nconst book1 = new Book('My Life on The Wall, part 1', author);\nbook1.publisher = publisher;\nconst book2 = new Book('My Life on The Wall, part 2', author);\nbook2.publisher = publisher;\nconst book3 = new Book('My Life on The Wall, part 3', author);\nbook3.publisher = publisher;\n\n// just persist books, author and publisher will be automatically cascade persisted\nawait orm.em.persistAndFlush([book1, book2, book3]);\n")),Object(a.b)("p",null,"To fetch entities from database you can use ",Object(a.b)("inlineCode",{parentName:"p"},"find()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"findOne()")," of ",Object(a.b)("inlineCode",{parentName:"p"},"EntityManager"),": "),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const authors = orm.em.find(Author, {});\n\nfor (const author of authors) {\n  console.log(author); // instance of Author entity\n  console.log(author.name); // Jon Snow\n\n  for (const book of author.books) { // iterating books collection\n    console.log(book); // instance of Book entity\n    console.log(book.title); // My Life on The Wall, part 1/2/3\n  }\n}\n")),Object(a.b)("p",null,"More convenient way of fetching entities from database is by using ",Object(a.b)("inlineCode",{parentName:"p"},"EntityRepository"),", that\ncarries the entity name so you do not have to pass it to every ",Object(a.b)("inlineCode",{parentName:"p"},"find")," and ",Object(a.b)("inlineCode",{parentName:"p"},"findOne")," calls:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const booksRepository = orm.em.getRepository(Book);\n\n// with sorting, limit and offset parameters, populating author references\nconst books = await booksRepository.find({ author: '...' }, ['author'], { title: QueryOrder.DESC }, 2, 1);\n\n// or with options object\nconst books = await booksRepository.find({ author: '...' }, { \n  populate: ['author'],\n  limit: 1,\n  offset: 2,\n  sort: { title: QueryOrder.DESC },\n});\n\nconsole.log(books); // Book[]\n")),Object(a.b)("p",null,"Take a look at docs about ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://mikro-orm.io/entity-manager/"}),"working with ",Object(a.b)("inlineCode",{parentName:"a"},"EntityManager")),"\nor ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://mikro-orm.io/repositories/"}),"using ",Object(a.b)("inlineCode",{parentName:"a"},"EntityRepository")," instead"),"."))}p.isMDXComponent=!0}}]);