(window.webpackJsonp=window.webpackJsonp||[]).push([[885],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return o}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),m=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},O=function(e){var t=m(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),O=m(a),d=r,o=O["".concat(c,".").concat(d)]||O[d]||j[d]||b;return a?n.a.createElement(o,p(p({ref:t},i),{},{components:a})):n.a.createElement(o,p({ref:t},i))}));function o(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<b;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},954:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return m}));var r=a(3),n=a(7),b=(a(0),a(1253)),c={id:"knex.knex.whereraw",title:"Interface: WhereRaw<TRecord, TResult>",sidebar_label:"WhereRaw",hide_title:!0},p={unversionedId:"api/interfaces/knex.knex.whereraw",id:"version-4.4/api/interfaces/knex.knex.whereraw",isDocsHomePage:!1,title:"Interface: WhereRaw<TRecord, TResult>",description:"Interface: WhereRaw",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.whereraw.md",slug:"/api/interfaces/knex.knex.whereraw",permalink:"/docs/api/interfaces/knex.knex.whereraw",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.whereraw.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1611508741,sidebar_label:"WhereRaw",sidebar:"version-4.4/API",previous:{title:"Interface: WhereNull<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.wherenull"},next:{title:"Interface: WhereWrapped<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.wherewrapped"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],i={toc:l};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-whererawtrecord-tresult"},"Interface: WhereRaw<TRecord, TResult",">"),Object(b.b)("p",null,Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".WhereRaw"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TRecord")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TResult")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"unknown"),"[]")))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.rawquerybuilder"}),Object(b.b)("em",{parentName:"a"},"RawQueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"WhereRaw")),Object(b.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.where"}),Object(b.b)("em",{parentName:"a"},"Where"))))),Object(b.b)("h2",{id:"callable"},"Callable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"WhereRaw"),"(",Object(b.b)("inlineCode",{parentName:"p"},"condition"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"condition")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"boolean"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1257"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"WhereRaw"),"<TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"sql"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"bindings?"),": ",Object(b.b)("em",{parentName:"p"},"null")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")," ","|"," Date ","|"," ",Object(b.b)("em",{parentName:"p"},"Buffer")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(b.b)("em",{parentName:"p"},"number"),"[] ","|"," Date[] ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean"),"[] ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<",Object(b.b)("em",{parentName:"p"},"any"),">"," ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.valuedict"}),Object(b.b)("em",{parentName:"a"},"ValueDict"))," ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("em",{parentName:"p"},"any"),">"," ","|"," readonly ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1#rawbinding"}),Object(b.b)("em",{parentName:"a"},"RawBinding")),"[]): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TResult")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"sql")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"bindings?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"null")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"number")," ","|"," ",Object(b.b)("em",{parentName:"td"},"boolean")," ","|"," Date ","|"," ",Object(b.b)("em",{parentName:"td"},"Buffer")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"),"[] ","|"," ",Object(b.b)("em",{parentName:"td"},"number"),"[] ","|"," Date[] ","|"," ",Object(b.b)("em",{parentName:"td"},"boolean"),"[] ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<",Object(b.b)("em",{parentName:"td"},"any"),">"," ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.valuedict"}),Object(b.b)("em",{parentName:"a"},"ValueDict"))," ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<",Object(b.b)("em",{parentName:"td"},"any"),", ",Object(b.b)("em",{parentName:"td"},"any"),">"," ","|"," readonly ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/knex.knex-1#rawbinding"}),Object(b.b)("em",{parentName:"a"},"RawBinding")),"[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1483"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"WhereRaw"),"<TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"raw"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<TResult2",">","): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TResult")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"raw")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<TResult2",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1487"))}m.isMDXComponent=!0}}]);