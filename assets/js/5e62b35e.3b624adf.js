(window.webpackJsonp=window.webpackJsonp||[]).push([[413],{1253:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),b=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=b(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(t),d=r,m=p["".concat(c,".").concat(d)]||p[d]||s[d]||a;return t?i.a.createElement(m,o(o({ref:n},u),{},{components:t})):i.a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<a;u++)c[u]=t[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},482:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(3),i=t(7),a=(t(0),t(1253)),c={id:"knex.knex-1.multikeyforeignconstraintbuilder",title:"Interface: MultikeyForeignConstraintBuilder",sidebar_label:"MultikeyForeignConstraintBuilder",hide_title:!0},o={unversionedId:"api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder",id:"api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder",isDocsHomePage:!1,title:"Interface: MultikeyForeignConstraintBuilder",description:"Interface: MultikeyForeignConstraintBuilder",source:"@site/docs/api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder.md",slug:"/api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder",permalink:"/docs/next/api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder.md",version:"current",sidebar_label:"MultikeyForeignConstraintBuilder",sidebar:"API",previous:{title:"Interface: MsSqlConnectionConfig",permalink:"/docs/next/api/interfaces/knex.knex-1.mssqlconnectionconfig"},next:{title:"Interface: MySql2ConnectionConfig",permalink:"/docs/next/api/interfaces/knex.knex-1.mysql2connectionconfig"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"references",id:"references",children:[]}]}],u={toc:l};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-multikeyforeignconstraintbuilder"},"Interface: MultikeyForeignConstraintBuilder"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/knex"}),"knex"),".",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1"}),"Knex"),".MultikeyForeignConstraintBuilder"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"MultikeyForeignConstraintBuilder"))),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"references"},"references"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"references"),"(",Object(a.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ",Object(a.b)("em",{parentName:"p"},"string"),"[]): ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.referencingcolumnbuilder"}),Object(a.b)("em",{parentName:"a"},"ReferencingColumnBuilder"))),Object(a.b)("h4",{id:"parameters"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"columnNames")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"readonly ",Object(a.b)("em",{parentName:"td"},"string"),"[]")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.referencingcolumnbuilder"}),Object(a.b)("em",{parentName:"a"},"ReferencingColumnBuilder"))),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1820"))}b.isMDXComponent=!0}}]);