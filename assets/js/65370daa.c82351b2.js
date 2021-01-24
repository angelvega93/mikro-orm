(window.webpackJsonp=window.webpackJsonp||[]).push([[448],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return i}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=s(a),j=r,i=m["".concat(c,".").concat(j)]||m[j]||O[j]||b;return a?n.a.createElement(i,p(p({ref:t},l),{},{components:a})):n.a.createElement(i,p({ref:t},l))}));function i(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=j;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var l=2;l<b;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},517:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),b=(a(0),a(1253)),c={id:"core.jsontype",title:"Class: JsonType",sidebar_label:"JsonType",hide_title:!0},p={unversionedId:"api/classes/core.jsontype",id:"api/classes/core.jsontype",isDocsHomePage:!1,title:"Class: JsonType",description:"Class: JsonType",source:"@site/docs/api/classes/core.jsontype.md",slug:"/api/classes/core.jsontype",permalink:"/docs/next/api/classes/core.jsontype",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/core.jsontype.md",version:"current",sidebar_label:"JsonType",sidebar:"API",previous:{title:"Class: JavaScriptMetadataProvider",permalink:"/docs/next/api/classes/core.javascriptmetadataprovider"},next:{title:"Class: LockWaitTimeoutException",permalink:"/docs/next/api/classes/core.lockwaittimeoutexception"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"compareAsType",id:"compareastype",children:[]},{value:"convertToDatabaseValue",id:"converttodatabasevalue",children:[]},{value:"convertToJSValue",id:"converttojsvalue",children:[]},{value:"getColumnType",id:"getcolumntype",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"getType",id:"gettype",children:[]}]}],l={toc:o};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-jsontype"},"Class: JsonType"),Object(b.b)("p",null,Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".JsonType"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(b.b)("em",{parentName:"a"},"Type")),"<",Object(b.b)("em",{parentName:"p"},"unknown"),", ",Object(b.b)("em",{parentName:"p"},"string")," | ",Object(b.b)("em",{parentName:"p"},"null"),">"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"JsonType")))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new JsonType"),"(): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.jsontype"}),Object(b.b)("em",{parentName:"a"},"JsonType"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.jsontype"}),Object(b.b)("em",{parentName:"a"},"JsonType"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"compareastype"},"compareAsType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"compareAsType"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"How should the raw database values be compared? Used in ",Object(b.b)("inlineCode",{parentName:"p"},"EntityComparator"),".\nPossible values: string | number | boolean | date | any | buffer | array"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/types/Type.ts#L26"}),"packages/core/src/types/Type.ts:26")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"converttodatabasevalue"},"convertToDatabaseValue"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"convertToDatabaseValue"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"unknown"),", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(b.b)("em",{parentName:"a"},"Platform")),"): ",Object(b.b)("em",{parentName:"p"},"null")," | ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"unknown"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(b.b)("em",{parentName:"a"},"Platform")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"null")," | ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Overrides: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/types/JsonType.ts#L8"}),"packages/core/src/types/JsonType.ts:8")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"converttojsvalue"},"convertToJSValue"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"convertToJSValue"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"unknown"),", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(b.b)("em",{parentName:"a"},"Platform")),"): ",Object(b.b)("em",{parentName:"p"},"unknown")),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"unknown"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(b.b)("em",{parentName:"a"},"Platform")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"unknown")),Object(b.b)("p",null,"Overrides: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/types/JsonType.ts#L16"}),"packages/core/src/types/JsonType.ts:16")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getcolumntype"},"getColumnType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getColumnType"),"(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(b.b)("em",{parentName:"p"},"any"),">",", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(b.b)("em",{parentName:"a"},"Platform")),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(b.b)("em",{parentName:"td"},"any"),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(b.b)("em",{parentName:"a"},"Platform")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Overrides: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/types/JsonType.ts#L24"}),"packages/core/src/types/JsonType.ts:24")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tojson"},"toJSON"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toJSON"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"unknown"),", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(b.b)("em",{parentName:"a"},"Platform")),"): ",Object(b.b)("em",{parentName:"p"},"unknown")),Object(b.b)("p",null,"Converts a value from its JS representation to its serialized JSON form of this type.\nBy default uses the runtime value."),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"unknown"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(b.b)("em",{parentName:"a"},"Platform")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"unknown")),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/types/Type.ts#L34"}),"packages/core/src/types/Type.ts:34")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettype"},"getType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getType"),"<JSType, DBType",">","(",Object(b.b)("inlineCode",{parentName:"p"},"cls"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core#constructor"}),Object(b.b)("em",{parentName:"a"},"Constructor")),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(b.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">",">","): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(b.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"JSType"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"DBType"))))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cls")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/modules/core#constructor"}),Object(b.b)("em",{parentName:"a"},"Constructor")),"<",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.type"}),Object(b.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(b.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/types/Type.ts#L46"}),"packages/core/src/types/Type.ts:46")))}s.isMDXComponent=!0}}]);