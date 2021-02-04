(window.webpackJsonp=window.webpackJsonp||[]).push([[582],{1256:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),m=function(e){var r=a.a.useContext(b),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=m(e.components);return a.a.createElement(b.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},l=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=m(t),l=n,d=p["".concat(o,".").concat(l)]||p[l]||u[l]||c;return t?a.a.createElement(d,i(i({ref:r},b),{},{components:t})):a.a.createElement(d,i({ref:r},b))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=l;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=t[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},652:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return m}));var n=t(3),a=t(7),c=(t(0),t(1256)),o={id:"cascade",title:"Enumeration: Cascade",sidebar_label:"Cascade"},i={unversionedId:"api/enums/cascade",id:"version-4.3/api/enums/cascade",isDocsHomePage:!1,title:"Enumeration: Cascade",description:"Enumeration members",source:"@site/versioned_docs/version-4.3/api/enums/cascade.md",slug:"/api/enums/cascade",permalink:"/docs/4.3/api/enums/cascade",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/enums/cascade.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612454853,sidebar_label:"Cascade",sidebar:"version-4.3/API",previous:{title:"Overview",permalink:"/docs/4.3/api"},next:{title:"Enumeration: ChangeSetType",permalink:"/docs/4.3/api/enums/changesettype"}},s=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"ALL",id:"all",children:[]},{value:"MERGE",id:"merge",children:[]},{value:"PERSIST",id:"persist",children:[]},{value:"REMOVE",id:"remove",children:[]}]}],b={toc:s};function m(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(c.b)("h3",{id:"all"},"ALL"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"ALL"),':  = "all"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/enums.ts#L80"}),"packages/core/src/enums.ts:80"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"merge"},"MERGE"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"MERGE"),':  = "merge"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/enums.ts#L78"}),"packages/core/src/enums.ts:78"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"persist"},"PERSIST"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"PERSIST"),':  = "persist"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/enums.ts#L77"}),"packages/core/src/enums.ts:77"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"remove"},"REMOVE"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"REMOVE"),':  = "remove"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/enums.ts#L79"}),"packages/core/src/enums.ts:79"))))}m.isMDXComponent=!0}}]);