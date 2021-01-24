(window.webpackJsonp=window.webpackJsonp||[]).push([[945],{1014:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),b=a(7),r=(a(0),a(1253)),c={id:"core.entityfactory",title:"Class: EntityFactory",sidebar_label:"EntityFactory",hide_title:!0},p={unversionedId:"api/classes/core.entityfactory",id:"api/classes/core.entityfactory",isDocsHomePage:!1,title:"Class: EntityFactory",description:"Class: EntityFactory",source:"@site/docs/api/classes/core.entityfactory.md",slug:"/api/classes/core.entityfactory",permalink:"/docs/next/api/classes/core.entityfactory",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/core.entityfactory.md",version:"current",sidebar_label:"EntityFactory",sidebar:"API",previous:{title:"Class: EntityComparator",permalink:"/docs/next/api/classes/core.entitycomparator"},next:{title:"Class: EntityHelper",permalink:"/docs/next/api/classes/core.entityhelper"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"driver",id:"driver",children:[]},{value:"eventManager",id:"eventmanager",children:[]},{value:"hydrator",id:"hydrator",children:[]},{value:"metadata",id:"metadata",children:[]},{value:"platform",id:"platform",children:[]}]},{value:"Methods",id:"methods",children:[{value:"create",id:"create",children:[]},{value:"createEntity",id:"createentity",children:[]},{value:"createReference",id:"createreference",children:[]},{value:"denormalizePrimaryKey",id:"denormalizeprimarykey",children:[]},{value:"extractConstructorParams",id:"extractconstructorparams",children:[]},{value:"findEntity",id:"findentity",children:[]},{value:"hydrate",id:"hydrate",children:[]},{value:"processDiscriminatorColumn",id:"processdiscriminatorcolumn",children:[]}]}],m={toc:i};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"class-entityfactory"},"Class: EntityFactory"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".EntityFactory"),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"EntityFactory"))),Object(r.b)("h2",{id:"constructors"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new EntityFactory"),"(",Object(r.b)("inlineCode",{parentName:"p"},"unitOfWork"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.unitofwork"}),Object(r.b)("em",{parentName:"a"},"UnitOfWork")),", ",Object(r.b)("inlineCode",{parentName:"p"},"em"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(r.b)("em",{parentName:"a"},"EntityManager")),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(r.b)("em",{parentName:"a"},"Connection")),">",">","): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entityfactory"}),Object(r.b)("em",{parentName:"a"},"EntityFactory"))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"unitOfWork")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.unitofwork"}),Object(r.b)("em",{parentName:"a"},"UnitOfWork")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"em")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(r.b)("em",{parentName:"a"},"EntityManager")),"<",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(r.b)("em",{parentName:"a"},"Connection")),">",">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entityfactory"}),Object(r.b)("em",{parentName:"a"},"EntityFactory"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/entity/EntityFactory.ts#L22"}),"packages/core/src/entity/EntityFactory.ts:22")),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"config"},"config"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"config"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.configuration"}),Object(r.b)("em",{parentName:"a"},"Configuration")),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(r.b)("em",{parentName:"a"},"Connection")),">",">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/entity/EntityFactory.ts#L19"}),"packages/core/src/entity/EntityFactory.ts:19")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"driver"},"driver"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"driver"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(r.b)("em",{parentName:"a"},"Connection")),">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/entity/EntityFactory.ts#L17"}),"packages/core/src/entity/EntityFactory.ts:17")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"eventmanager"},"eventManager"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"eventManager"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.eventmanager"}),Object(r.b)("em",{parentName:"a"},"EventManager"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/entity/EntityFactory.ts#L22"}),"packages/core/src/entity/EntityFactory.ts:22")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"hydrator"},"hydrator"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"hydrator"),": IHydrator"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/entity/EntityFactory.ts#L21"}),"packages/core/src/entity/EntityFactory.ts:21")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"metadata"},"metadata"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"metadata"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.metadatastorage"}),Object(r.b)("em",{parentName:"a"},"MetadataStorage"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/entity/EntityFactory.ts#L20"}),"packages/core/src/entity/EntityFactory.ts:20")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"platform"},"platform"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"platform"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(r.b)("em",{parentName:"a"},"Platform"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/entity/EntityFactory.ts#L18"}),"packages/core/src/entity/EntityFactory.ts:18")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"create"},"create"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"create"),"<T, P",">","(",Object(r.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entityname"}),Object(r.b)("em",{parentName:"a"},"EntityName")),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.factoryoptions"}),Object(r.b)("em",{parentName:"a"},"FactoryOptions")),"): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#loaded"}),Object(r.b)("em",{parentName:"a"},"Loaded")),"<T, P",">"),Object(r.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<T",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"P")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#populate"}),Object(r.b)("em",{parentName:"a"},"Populate")),"<T",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"))))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entityName")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#entityname"}),Object(r.b)("em",{parentName:"a"},"EntityName")),"<T",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.factoryoptions"}),Object(r.b)("em",{parentName:"a"},"FactoryOptions"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"...")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#loaded"}),Object(r.b)("em",{parentName:"a"},"Loaded")),"<T, P",">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/entity/EntityFactory.ts#L27"}),"packages/core/src/entity/EntityFactory.ts:27")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"createentity"},"createEntity"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"createEntity"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(r.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"options"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.factoryoptions"}),Object(r.b)("em",{parentName:"a"},"FactoryOptions")),"): T"),Object(r.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"meta")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(r.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.factoryoptions"}),Object(r.b)("em",{parentName:"a"},"FactoryOptions")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," T"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/entity/EntityFactory.ts#L88"}),"packages/core/src/entity/EntityFactory.ts:88")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"createreference"},"createReference"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"createReference"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entityname"}),Object(r.b)("em",{parentName:"a"},"EntityName")),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"id"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#primary"}),Object(r.b)("em",{parentName:"a"},"Primary")),"<T",">"," | ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#primary"}),Object(r.b)("em",{parentName:"a"},"Primary")),"<T",">","[] | ",Object(r.b)("em",{parentName:"p"},"Record"),"<",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#primary"}),Object(r.b)("em",{parentName:"a"},"Primary")),"<T",">",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(r.b)("em",{parentName:"p"},"Pick"),"<",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.factoryoptions"}),Object(r.b)("em",{parentName:"a"},"FactoryOptions")),", ",Object(r.b)("em",{parentName:"p"},"convertCustomTypes")," | ",Object(r.b)("em",{parentName:"p"},"merge"),">","): T"),Object(r.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entityName")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#entityname"}),Object(r.b)("em",{parentName:"a"},"EntityName")),"<T",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"id")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#primary"}),Object(r.b)("em",{parentName:"a"},"Primary")),"<T",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#primary"}),Object(r.b)("em",{parentName:"a"},"Primary")),"<T",">","[]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"Pick"),"<",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.factoryoptions"}),Object(r.b)("em",{parentName:"a"},"FactoryOptions")),", ",Object(r.b)("em",{parentName:"td"},"convertCustomTypes")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"merge"),">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," T"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/entity/EntityFactory.ts#L64"}),"packages/core/src/entity/EntityFactory.ts:64")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"denormalizeprimarykey"},"denormalizePrimaryKey"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"denormalizePrimaryKey"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"primaryKey"),": ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<T",">","): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"denormalize PK to value required by driver (e.g. ObjectId)"),Object(r.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"primaryKey")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prop")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(r.b)("em",{parentName:"a"},"EntityProperty")),"<T",">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/entity/EntityFactory.ts#L153"}),"packages/core/src/entity/EntityFactory.ts:153")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"extractconstructorparams"},"extractConstructorParams"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"extractConstructorParams"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(r.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">","): T","[keyof T][]"),Object(r.b)("p",null,"returns parameters for entity constructor, creating references from plain ids"),Object(r.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"meta")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(r.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," T","[keyof T][]"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/entity/EntityFactory.ts#L171"}),"packages/core/src/entity/EntityFactory.ts:171")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"findentity"},"findEntity"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"findEntity"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(r.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"convertCustomTypes?"),": ",Object(r.b)("em",{parentName:"p"},"boolean"),"): ",Object(r.b)("em",{parentName:"p"},"undefined")," | T"),Object(r.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-6"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"meta")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(r.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"convertCustomTypes?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"boolean"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"undefined")," | T"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/entity/EntityFactory.ts#L118"}),"packages/core/src/entity/EntityFactory.ts:118")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"hydrate"},"hydrate"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"hydrate"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(r.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(r.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"options"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.factoryoptions"}),Object(r.b)("em",{parentName:"a"},"FactoryOptions")),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("h4",{id:"type-parameters-6"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-7"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"meta")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(r.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.factoryoptions"}),Object(r.b)("em",{parentName:"a"},"FactoryOptions")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/entity/EntityFactory.ts#L110"}),"packages/core/src/entity/EntityFactory.ts:110")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"processdiscriminatorcolumn"},"processDiscriminatorColumn"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"processDiscriminatorColumn"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(r.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">","): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(r.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),Object(r.b)("h4",{id:"type-parameters-7"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-8"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"meta")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(r.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(r.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/entity/EntityFactory.ts#L132"}),"packages/core/src/entity/EntityFactory.ts:132")))}o.isMDXComponent=!0},1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var m=b.a.createContext({}),o=function(e){var t=b.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=o(e.components);return b.a.createElement(m.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),l=o(a),j=n,d=l["".concat(c,".").concat(j)]||l[j]||O[j]||r;return a?b.a.createElement(d,p(p({ref:t},m),{},{components:a})):b.a.createElement(d,p({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=j;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var m=2;m<r;m++)c[m]=a[m];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);