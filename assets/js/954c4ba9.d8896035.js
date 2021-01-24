(window.webpackJsonp=window.webpackJsonp||[]).push([[673],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),m=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=m(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=m(a),O=r,j=d["".concat(b,".").concat(O)]||d[O]||l[O]||c;return a?n.a.createElement(j,p(p({ref:t},o),{},{components:a})):n.a.createElement(j,p({ref:t},o))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=O;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,b[1]=p;for(var o=2;o<c;o++)b[o]=a[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},743:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return m}));var r=a(3),n=a(7),c=(a(0),a(1253)),b={id:"core.reflectmetadataprovider",title:"Class: ReflectMetadataProvider",sidebar_label:"ReflectMetadataProvider",hide_title:!0},p={unversionedId:"api/classes/core.reflectmetadataprovider",id:"api/classes/core.reflectmetadataprovider",isDocsHomePage:!1,title:"Class: ReflectMetadataProvider",description:"Class: ReflectMetadataProvider",source:"@site/docs/api/classes/core.reflectmetadataprovider.md",slug:"/api/classes/core.reflectmetadataprovider",permalink:"/docs/next/api/classes/core.reflectmetadataprovider",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/core.reflectmetadataprovider.md",version:"current",sidebar_label:"ReflectMetadataProvider",sidebar:"API",previous:{title:"Class: Reference<T>",permalink:"/docs/next/api/classes/core.reference"},next:{title:"Class: RequestContext",permalink:"/docs/next/api/classes/core.requestcontext"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]}]},{value:"Methods",id:"methods",children:[{value:"initProperties",id:"initproperties",children:[]},{value:"initPropertyType",id:"initpropertytype",children:[]},{value:"loadEntityMetadata",id:"loadentitymetadata",children:[]},{value:"loadFromCache",id:"loadfromcache",children:[]},{value:"useCache",id:"usecache",children:[]}]}],o={toc:i};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-reflectmetadataprovider"},"Class: ReflectMetadataProvider"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".ReflectMetadataProvider"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.metadataprovider"}),Object(c.b)("em",{parentName:"a"},"MetadataProvider"))),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"ReflectMetadataProvider")))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new ReflectMetadataProvider"),"(",Object(c.b)("inlineCode",{parentName:"p"},"config"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.iconfiguration"}),Object(c.b)("em",{parentName:"a"},"IConfiguration")),"): ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.reflectmetadataprovider"}),Object(c.b)("em",{parentName:"a"},"ReflectMetadataProvider"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"config")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.iconfiguration"}),Object(c.b)("em",{parentName:"a"},"IConfiguration")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.reflectmetadataprovider"}),Object(c.b)("em",{parentName:"a"},"ReflectMetadataProvider"))),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.metadataprovider"}),"MetadataProvider")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/metadata/MetadataProvider.ts#L9"}),"packages/core/src/metadata/MetadataProvider.ts:9")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"config"},"config"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"config"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.iconfiguration"}),Object(c.b)("em",{parentName:"a"},"IConfiguration"))),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.metadataprovider"}),"MetadataProvider"),".",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.metadataprovider#config"}),"config")),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"initproperties"},"initProperties"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected"),Object(c.b)("strong",{parentName:"p"},"initProperties"),"(",Object(c.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(c.b)("em",{parentName:"p"},"any"),">",", ",Object(c.b)("inlineCode",{parentName:"p"},"fallback"),": (",Object(c.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(c.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(c.b)("em",{parentName:"p"},"any"),">",") => ",Object(c.b)("em",{parentName:"p"},"void")," | ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">","): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"meta")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(c.b)("em",{parentName:"td"},"any"),">")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"fallback")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(",Object(c.b)("inlineCode",{parentName:"td"},"prop"),": ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(c.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(c.b)("em",{parentName:"td"},"any"),">",") => ",Object(c.b)("em",{parentName:"td"},"void"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.metadataprovider"}),"MetadataProvider")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/metadata/MetadataProvider.ts#L23"}),"packages/core/src/metadata/MetadataProvider.ts:23")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"initpropertytype"},"initPropertyType"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected"),Object(c.b)("strong",{parentName:"p"},"initPropertyType"),"(",Object(c.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(c.b)("em",{parentName:"p"},"any"),">",", ",Object(c.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(c.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(c.b)("em",{parentName:"p"},"any"),">","): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"meta")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(c.b)("em",{parentName:"td"},"any"),">")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"prop")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(c.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(c.b)("em",{parentName:"td"},"any"),">")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/metadata/ReflectMetadataProvider.ts#L12"}),"packages/core/src/metadata/ReflectMetadataProvider.ts:12")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"loadentitymetadata"},"loadEntityMetadata"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"loadEntityMetadata"),"(",Object(c.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(c.b)("em",{parentName:"p"},"any"),">",", ",Object(c.b)("inlineCode",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("h4",{id:"parameters-3"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"meta")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(c.b)("em",{parentName:"td"},"any"),">")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("p",null,"Overrides: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.metadataprovider"}),"MetadataProvider")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/metadata/ReflectMetadataProvider.ts#L8"}),"packages/core/src/metadata/ReflectMetadataProvider.ts:8")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"loadfromcache"},"loadFromCache"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"loadFromCache"),"(",Object(c.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(c.b)("em",{parentName:"p"},"any"),">",", ",Object(c.b)("inlineCode",{parentName:"p"},"cache"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(c.b)("em",{parentName:"p"},"any"),">","): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("h4",{id:"parameters-4"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"meta")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(c.b)("em",{parentName:"td"},"any"),">")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"cache")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymetadata"}),Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(c.b)("em",{parentName:"td"},"any"),">")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.metadataprovider"}),"MetadataProvider")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/metadata/MetadataProvider.ts#L15"}),"packages/core/src/metadata/MetadataProvider.ts:15")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"usecache"},"useCache"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"useCache"),"(): ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.metadataprovider"}),"MetadataProvider")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/21d7bc4/packages/core/src/metadata/MetadataProvider.ts#L19"}),"packages/core/src/metadata/MetadataProvider.ts:19")))}m.isMDXComponent=!0}}]);