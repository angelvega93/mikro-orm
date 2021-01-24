(window.webpackJsonp=window.webpackJsonp||[]).push([[557],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),o=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},i=function(e){var t=o(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),i=o(a),O=n,j=i["".concat(c,".").concat(O)]||i[O]||s[O]||b;return a?r.a.createElement(j,p(p({ref:t},m),{},{components:a})):r.a.createElement(j,p({ref:t},m))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var m=2;m<b;m++)c[m]=a[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},627:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),b=(a(0),a(1253)),c={id:"core.biginttype",title:"Class: BigIntType",sidebar_label:"BigIntType",hide_title:!0},p={unversionedId:"api/classes/core.biginttype",id:"api/classes/core.biginttype",isDocsHomePage:!1,title:"Class: BigIntType",description:"Class: BigIntType",source:"@site/docs/api/classes/core.biginttype.md",slug:"/api/classes/core.biginttype",permalink:"/docs/next/api/classes/core.biginttype",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/core.biginttype.md",version:"current",sidebar_label:"BigIntType",sidebar:"API",previous:{title:"Class: BaseEntity<T, PK, P>",permalink:"/docs/next/api/classes/core.baseentity"},next:{title:"Class: BlobType",permalink:"/docs/next/api/classes/core.blobtype"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"compareAsType",id:"compareastype",children:[]},{value:"convertToDatabaseValue",id:"converttodatabasevalue",children:[]},{value:"convertToJSValue",id:"converttojsvalue",children:[]},{value:"getColumnType",id:"getcolumntype",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"getType",id:"gettype",children:[]}]}],m={toc:l};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-biginttype"},"Class: BigIntType"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".BigIntType"),Object(b.b)("p",null,"This type will automatically convert string values returned from the database to native JS bigints."),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(b.b)("em",{parentName:"a"},"Type")),"<",Object(b.b)("em",{parentName:"p"},"string")," | ",Object(b.b)("em",{parentName:"p"},"bigint")," | ",Object(b.b)("em",{parentName:"p"},"null")," | ",Object(b.b)("em",{parentName:"p"},"undefined"),", ",Object(b.b)("em",{parentName:"p"},"string")," | ",Object(b.b)("em",{parentName:"p"},"null")," | ",Object(b.b)("em",{parentName:"p"},"undefined"),">"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"BigIntType")))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new BigIntType"),"(): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.biginttype"}),Object(b.b)("em",{parentName:"a"},"BigIntType"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.biginttype"}),Object(b.b)("em",{parentName:"a"},"BigIntType"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"compareastype"},"compareAsType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"compareAsType"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"How should the raw database values be compared? Used in ",Object(b.b)("inlineCode",{parentName:"p"},"EntityComparator"),".\nPossible values: string | number | boolean | date | any | buffer | array"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/types/Type.ts#L26"}),"packages/core/src/types/Type.ts:26")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"converttodatabasevalue"},"convertToDatabaseValue"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"convertToDatabaseValue"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," | ",Object(b.b)("em",{parentName:"p"},"null")," | ",Object(b.b)("em",{parentName:"p"},"string")," | ",Object(b.b)("em",{parentName:"p"},"bigint"),"): ",Object(b.b)("em",{parentName:"p"},"undefined")," | ",Object(b.b)("em",{parentName:"p"},"null")," | ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"undefined"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"undefined")," | ",Object(b.b)("em",{parentName:"p"},"null")," | ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Overrides: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/types/BigIntType.ts#L10"}),"packages/core/src/types/BigIntType.ts:10")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"converttojsvalue"},"convertToJSValue"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"convertToJSValue"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," | ",Object(b.b)("em",{parentName:"p"},"null")," | ",Object(b.b)("em",{parentName:"p"},"string")," | ",Object(b.b)("em",{parentName:"p"},"bigint"),"): ",Object(b.b)("em",{parentName:"p"},"undefined")," | ",Object(b.b)("em",{parentName:"p"},"null")," | ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"undefined"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"undefined")," | ",Object(b.b)("em",{parentName:"p"},"null")," | ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Overrides: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/types/BigIntType.ts#L18"}),"packages/core/src/types/BigIntType.ts:18")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getcolumntype"},"getColumnType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getColumnType"),"(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(b.b)("em",{parentName:"p"},"any"),">",", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(b.b)("em",{parentName:"a"},"Platform")),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(b.b)("em",{parentName:"td"},"any"),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(b.b)("em",{parentName:"a"},"Platform")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Overrides: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/types/BigIntType.ts#L26"}),"packages/core/src/types/BigIntType.ts:26")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tojson"},"toJSON"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toJSON"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," | ",Object(b.b)("em",{parentName:"p"},"null")," | ",Object(b.b)("em",{parentName:"p"},"string")," | ",Object(b.b)("em",{parentName:"p"},"bigint"),", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(b.b)("em",{parentName:"a"},"Platform")),"): ",Object(b.b)("em",{parentName:"p"},"undefined")," | ",Object(b.b)("em",{parentName:"p"},"null")," | ",Object(b.b)("em",{parentName:"p"},"string")," | ",Object(b.b)("em",{parentName:"p"},"bigint")),Object(b.b)("p",null,"Converts a value from its JS representation to its serialized JSON form of this type.\nBy default uses the runtime value."),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"undefined"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(b.b)("em",{parentName:"a"},"Platform")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"undefined")," | ",Object(b.b)("em",{parentName:"p"},"null")," | ",Object(b.b)("em",{parentName:"p"},"string")," | ",Object(b.b)("em",{parentName:"p"},"bigint")),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/types/Type.ts#L34"}),"packages/core/src/types/Type.ts:34")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettype"},"getType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getType"),"<JSType, DBType",">","(",Object(b.b)("inlineCode",{parentName:"p"},"cls"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#constructor"}),Object(b.b)("em",{parentName:"a"},"Constructor")),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(b.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">",">","): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(b.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"JSType"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"DBType"))))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cls")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#constructor"}),Object(b.b)("em",{parentName:"a"},"Constructor")),"<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.type"}),Object(b.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(b.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/types/Type.ts#L46"}),"packages/core/src/types/Type.ts:46")))}o.isMDXComponent=!0}}]);