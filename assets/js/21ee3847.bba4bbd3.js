(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var l=b.a.createContext({}),o=function(e){var t=b.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return b.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=o(a),j=n,d=m["".concat(c,".").concat(j)]||m[j]||O[j]||r;return a?b.a.createElement(d,p(p({ref:t},l),{},{components:a})):b.a.createElement(d,p({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=j;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<r;l++)c[l]=a[l];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},210:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),b=a(7),r=(a(0),a(1256)),c={id:"core.iwrappedentity",title:"Interface: IWrappedEntity<T, PK, P>",sidebar_label:"IWrappedEntity",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/interfaces/core.iwrappedentity",id:"api/interfaces/core.iwrappedentity",isDocsHomePage:!1,title:"Interface: IWrappedEntity<T, PK, P>",description:"Interface: IWrappedEntity",source:"@site/docs/api/interfaces/core.iwrappedentity.md",slug:"/api/interfaces/core.iwrappedentity",permalink:"/docs/next/api/interfaces/core.iwrappedentity",editUrl:null,version:"current",sidebar_label:"IWrappedEntity",sidebar:"API",previous:{title:"Interface: IDatabaseDriver<C>",permalink:"/docs/next/api/interfaces/core.idatabasedriver"},next:{title:"Interface: IndexOptions<T>",permalink:"/docs/next/api/interfaces/core.indexoptions"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implemented by",id:"implemented-by",children:[]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]},{value:"init",id:"init",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"populated",id:"populated",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"toObject",id:"toobject",children:[]},{value:"toPOJO",id:"topojo",children:[]},{value:"toReference",id:"toreference",children:[]}]}],l={toc:i};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"interface-iwrappedentityt-pk-p"},"Interface: IWrappedEntity<T, PK, P",">"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".IWrappedEntity"),Object(r.b)("h2",{id:"type-parameters"},"Type parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<T",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"PK")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"keyof T"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"P")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#populate"}),Object(r.b)("em",{parentName:"a"},"Populate")),"<T",">"," ","|"," ",Object(r.b)("em",{parentName:"td"},"unknown")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"unknown"))))),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"IWrappedEntity"))),Object(r.b)("h2",{id:"implemented-by"},"Implemented by"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/classes/core.baseentity"}),Object(r.b)("em",{parentName:"a"},"BaseEntity")))),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"assign"},"assign"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"assign"),"(",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(r.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.assignoptions"}),Object(r.b)("em",{parentName:"a"},"AssignOptions")),"): T"),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"boolean")," ","|"," ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.assignoptions"}),Object(r.b)("em",{parentName:"a"},"AssignOptions")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," T"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5151b21/packages/core/src/typings.ts#L87"}),"packages/core/src/typings.ts:87")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"init"},"init"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"init"),"<P",">","(",Object(r.b)("inlineCode",{parentName:"p"},"populated?"),": ",Object(r.b)("em",{parentName:"p"},"boolean"),", ",Object(r.b)("inlineCode",{parentName:"p"},"populate?"),": P, ",Object(r.b)("inlineCode",{parentName:"p"},"lockMode?"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/enums/core.lockmode#none"}),Object(r.b)("em",{parentName:"a"},"NONE"))," ","|"," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/enums/core.lockmode#optimistic"}),Object(r.b)("em",{parentName:"a"},"OPTIMISTIC"))," ","|"," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/enums/core.lockmode#pessimistic_read"}),Object(r.b)("em",{parentName:"a"},"PESSIMISTIC","_","READ"))," ","|"," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/enums/core.lockmode#pessimistic_write"}),Object(r.b)("em",{parentName:"a"},"PESSIMISTIC","_","WRITE")),"): ",Object(r.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(r.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"P")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#populate"}),Object(r.b)("em",{parentName:"a"},"Populate")),"<T",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#populate"}),Object(r.b)("em",{parentName:"a"},"Populate")),"<T",">")))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"populated?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"boolean"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"populate?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"P")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"lockMode?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/enums/core.lockmode#none"}),Object(r.b)("em",{parentName:"a"},"NONE"))," ","|"," ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/enums/core.lockmode#optimistic"}),Object(r.b)("em",{parentName:"a"},"OPTIMISTIC"))," ","|"," ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/enums/core.lockmode#pessimistic_read"}),Object(r.b)("em",{parentName:"a"},"PESSIMISTIC","_","READ"))," ","|"," ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/enums/core.lockmode#pessimistic_write"}),Object(r.b)("em",{parentName:"a"},"PESSIMISTIC","_","WRITE")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5151b21/packages/core/src/typings.ts#L82"}),"packages/core/src/typings.ts:82")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isinitialized"},"isInitialized"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"isInitialized"),"(): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5151b21/packages/core/src/typings.ts#L80"}),"packages/core/src/typings.ts:80")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"populated"},"populated"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"populated"),"(",Object(r.b)("inlineCode",{parentName:"p"},"populated?"),": ",Object(r.b)("em",{parentName:"p"},"boolean"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"populated?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"boolean"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5151b21/packages/core/src/typings.ts#L81"}),"packages/core/src/typings.ts:81")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"tojson"},"toJSON"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"toJSON"),"(...",Object(r.b)("inlineCode",{parentName:"p"},"args"),": ",Object(r.b)("em",{parentName:"p"},"any"),"[]): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("em",{parentName:"p"},"any"),">"),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"...args")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"),"[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("em",{parentName:"p"},"any"),">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5151b21/packages/core/src/typings.ts#L85"}),"packages/core/src/typings.ts:85")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"toobject"},"toObject"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"toObject"),"(",Object(r.b)("inlineCode",{parentName:"p"},"ignoreFields?"),": ",Object(r.b)("em",{parentName:"p"},"string"),"[]): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("em",{parentName:"p"},"any"),">"),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ignoreFields?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"),"[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("em",{parentName:"p"},"any"),">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5151b21/packages/core/src/typings.ts#L84"}),"packages/core/src/typings.ts:84")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"topojo"},"toPOJO"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"toPOJO"),"(): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5151b21/packages/core/src/typings.ts#L86"}),"packages/core/src/typings.ts:86")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"toreference"},"toReference"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"toReference"),"<PK2, P2",">","(): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#identifiedreference"}),Object(r.b)("em",{parentName:"a"},"IdentifiedReference")),"<T, PK2",">"," & ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.loadedreference"}),Object(r.b)("em",{parentName:"a"},"LoadedReference")),"<T, P2",">"),Object(r.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"PK2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"unknown")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#primaryproperty"}),Object(r.b)("em",{parentName:"a"},"PrimaryProperty")),"<T",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"P2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"unknown")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"unknown"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#identifiedreference"}),Object(r.b)("em",{parentName:"a"},"IdentifiedReference")),"<T, PK2",">"," & ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.loadedreference"}),Object(r.b)("em",{parentName:"a"},"LoadedReference")),"<T, P2",">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5151b21/packages/core/src/typings.ts#L83"}),"packages/core/src/typings.ts:83")))}o.isMDXComponent=!0}}]);