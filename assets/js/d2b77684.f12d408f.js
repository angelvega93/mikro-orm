(window.webpackJsonp=window.webpackJsonp||[]).push([[963],{1033:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(1256)),o={title:"Inheritance Mapping"},s={unversionedId:"inheritance-mapping",id:"version-4.0/inheritance-mapping",isDocsHomePage:!1,title:"Inheritance Mapping",description:"Mapped Superclasses",source:"@site/versioned_docs/version-4.0/inheritance-mapping.md",slug:"/inheritance-mapping",permalink:"/docs/4.0/inheritance-mapping",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.0/inheritance-mapping.md",version:"4.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612454853,sidebar:"version-4.0/docs",previous:{title:"Transactions and Concurrency",permalink:"/docs/4.0/transactions"},next:{title:"Cascading persist, merge and remove",permalink:"/docs/4.0/cascading"}},c=[{value:"Mapped Superclasses",id:"mapped-superclasses",children:[]},{value:"Single Table Inheritance",id:"single-table-inheritance",children:[{value:"Using <code>discriminatorValue</code> instead of <code>discriminatorMap</code>",id:"using-discriminatorvalue-instead-of-discriminatormap",children:[]},{value:"Explicit discriminator column",id:"explicit-discriminator-column",children:[]},{value:"Design-time considerations",id:"design-time-considerations",children:[]},{value:"Performance impact",id:"performance-impact",children:[]},{value:"SQL Schema considerations",id:"sql-schema-considerations",children:[]}]}],l={toc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"mapped-superclasses"},"Mapped Superclasses"),Object(r.b)("p",null,"A mapped superclass is an abstract or concrete class that provides persistent entity state and\nmapping information for its subclasses, but which is not itself an entity. Typically, the purpose\nof such a mapped superclass is to define state and mapping information that is common to multiple\nentity classes."),Object(r.b)("p",null,"Mapped superclasses, just as regular, non-mapped classes, can appear in the middle of an otherwise\nmapped inheritance hierarchy (through Single Table Inheritance)."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A mapped superclass cannot be an entity, it is not query-able and persistent relationships defined\nby a mapped superclass must be unidirectional (with an owning side only). This means that One-To-Many\nassociations are not possible on a mapped superclass at all. Furthermore Many-To-Many associations\nare only possible if the mapped superclass is only used in exactly one entity at the moment. For\nfurther support of inheritance, the single table inheritance features have to be used.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// do not use @Entity decorator on base classes (mapped superclasses)\nexport abstract class Person {\n\n  @Property()\n  mapped1!: number;\n\n  @Property()\n  mapped2!: string;\n \n  @OneToOne()\n  toothbrush!: Toothbrush;\n\n  // ... more fields and methods\n}\n\n@Entity()\nexport class Employee extends Person {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  // ... more fields and methods\n\n}\n\n@Entity()\nexport class Toothbrush {\n  \n  @PrimaryKey()\n  id!: number;\n\n  // ... more fields and methods\n\n}\n")),Object(r.b)("p",null,"The DDL for the corresponding database schema would look something like this (this is for SQLite):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"create table `employee` (\n  `id` int unsigned not null auto_increment primary key,\n  `name` varchar(255) not null, `mapped1` integer not null,\n  `mapped2` varchar(255) not null,\n  `toothbrush_id` integer not null\n);\n")),Object(r.b)("p",null,"As you can see from this DDL snippet, there is only a single table for the entity\nsubclass. All the mappings from the mapped superclass were inherited to the subclass\nas if they had been defined on that class directly."),Object(r.b)("h2",{id:"single-table-inheritance"},"Single Table Inheritance"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Support for STI was added in version 4.0")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://martinfowler.com/eaaCatalog/singleTableInheritance.html"}),"Single Table Inheritance"),"\nis an inheritance mapping strategy where all classes of a hierarchy are mapped to a single\ndatabase table. In order to distinguish which row represents which type in the hierarchy\na so-called discriminator column is used."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity({\n  discriminatorColumn: 'discr',\n  discriminatorMap: { person: 'Person', employee: 'Employee' },\n})\nexport class Person {\n  // ...\n}\n\n@Entity()\nexport class Employee extends Person {\n  // ...\n}\n")),Object(r.b)("p",null,"Things to note:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"discriminatorColumn")," option must be specified on the topmost class that is\npart of the mapped entity hierarchy."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"discriminatorMap")," specifies which values of the discriminator column identify\na row as being of a certain type. In the case above a value of ",Object(r.b)("inlineCode",{parentName:"li"},"person")," identifies\na row as being of type ",Object(r.b)("inlineCode",{parentName:"li"},"Person")," and ",Object(r.b)("inlineCode",{parentName:"li"},"employee")," identifies a row as being of type\n",Object(r.b)("inlineCode",{parentName:"li"},"Employee"),"."),Object(r.b)("li",{parentName:"ul"},"All entity classes that are part of the mapped entity hierarchy (including the topmost\nclass) should be specified in the ",Object(r.b)("inlineCode",{parentName:"li"},"discriminatorMap"),". In the case above ",Object(r.b)("inlineCode",{parentName:"li"},"Person")," class\nincluded."),Object(r.b)("li",{parentName:"ul"},"We can use abstract class as the root entity - then the root class should not be part\nof the discriminator map"),Object(r.b)("li",{parentName:"ul"},"If no discriminator map is provided, then the map is generated automatically.\nThe automatically generated discriminator map contains the table names that would be\notherwise used in case of regular entities. ")),Object(r.b)("h3",{id:"using-discriminatorvalue-instead-of-discriminatormap"},"Using ",Object(r.b)("inlineCode",{parentName:"h3"},"discriminatorValue")," instead of ",Object(r.b)("inlineCode",{parentName:"h3"},"discriminatorMap")),Object(r.b)("p",null,"As noted above, the discriminator map can be auto-generated. In that case, we might\nwant to control the tokens that will be used in the map. To do so, we can use\n",Object(r.b)("inlineCode",{parentName:"p"},"discriminatorValue")," on the child entities:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@Entity({\n  discriminatorColumn: 'discr',\n  discriminatorValue: 'person',\n})\nexport class Person {\n  // ...\n}\n\n@Entity({\n  discriminatorValue: 'employee',\n})\nexport class Employee extends Person {\n  // ...\n}\n")),Object(r.b)("h3",{id:"explicit-discriminator-column"},"Explicit discriminator column"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"discriminatorColumn")," specifies the name of special column that will be used to\ndefine what type of class should given row be represented with. It will be defined\nautomatically for you and it will stay hidden (it won't by hydrated as regular property). "),Object(r.b)("p",null,"On the other hand, it is perfectly fine to define the column explicitly. Doing so,\nyou will be able to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"querying by the type, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"em.find(Person, { type: { $ne: 'employee' } }")),Object(r.b)("li",{parentName:"ul"},"the column will be part of the serialized response")),Object(r.b)("p",null,"Following example shows how we can define the discriminator explicitly, as well\nas a version where root entity is abstract class."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@Entity({\n  discriminatorColumn: 'discr',\n  discriminatorMap: { person: 'Person', employee: 'Employee' },\n})\nexport abstract class BasePerson {\n\n  @Enum()\n  type!: 'person' | 'employee';\n\n}\n\n@Entity()\nexport class Person extends BasePerson {\n  // ...\n}\n\n@Entity()\nexport class Employee extends Person {\n  // ...\n}\n")),Object(r.b)("h3",{id:"design-time-considerations"},"Design-time considerations"),Object(r.b)("p",null,"This mapping approach works well when the type hierarchy is fairly simple and stable.\nAdding a new type to the hierarchy and adding fields to existing supertypes simply\ninvolves adding new columns to the table, though in large deployments this may have\nan adverse impact on the index and column layout inside the database."),Object(r.b)("h3",{id:"performance-impact"},"Performance impact"),Object(r.b)("p",null,"This strategy is very efficient for querying across all types in the hierarchy or\nfor specific types. No table joins are required, only a WHERE clause listing the\ntype identifiers. In particular, relationships involving types that employ this\nmapping strategy are very performing."),Object(r.b)("h3",{id:"sql-schema-considerations"},"SQL Schema considerations"),Object(r.b)("p",null,"For Single-Table-Inheritance to work in scenarios where you are using either a legacy\ndatabase schema or a self-written database schema you have to make sure that all\ncolumns that are not in the root entity but in any of the different sub-entities\nhas to allow null values. Columns that have NOT NULL constraints have to be on the\nroot entity of the single-table inheritance hierarchy."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.doctrine-project.org/projects/doctrine-orm/en/latest/reference/inheritance-mapping.html"}),"doctrine docs"),"\nas the behaviour here is pretty much the same.")))}p.isMDXComponent=!0},1256:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,b=d["".concat(o,".").concat(u)]||d[u]||m[u]||r;return t?i.a.createElement(b,s(s({ref:n},l),{},{components:t})):i.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);