(window.webpackJsonp=window.webpackJsonp||[]).push([[603],{1253:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(i,".").concat(d)]||u[d]||s[d]||c;return t?r.a.createElement(m,l(l({ref:n},b),{},{components:t})):r.a.createElement(m,l({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<c;b++)i[b]=t[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},673:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),c=(t(0),t(1253)),i={id:"knex.knex-1.joincallback",title:"Interface: JoinCallback",sidebar_label:"JoinCallback",hide_title:!0},l={unversionedId:"api/interfaces/knex.knex-1.joincallback",id:"api/interfaces/knex.knex-1.joincallback",isDocsHomePage:!1,title:"Interface: JoinCallback",description:"Interface: JoinCallback",source:"@site/docs/api/interfaces/knex.knex-1.joincallback.md",slug:"/api/interfaces/knex.knex-1.joincallback",permalink:"/docs/next/api/interfaces/knex.knex-1.joincallback",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/interfaces/knex.knex-1.joincallback.md",version:"current",sidebar_label:"JoinCallback",sidebar:"API",previous:{title:"Interface: Join<TRecord, TResult>",permalink:"/docs/next/api/interfaces/knex.knex-1.join"},next:{title:"Interface: JoinClause",permalink:"/docs/next/api/interfaces/knex.knex-1.joinclause"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],b={toc:o};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-joincallback"},"Interface: JoinCallback"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/modules/knex"}),"knex"),".",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1"}),"Knex"),".JoinCallback"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"JoinCallback"))),Object(c.b)("h2",{id:"callable"},"Callable"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"JoinCallback"),"(",Object(c.b)("inlineCode",{parentName:"p"},"join"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.joinclause"}),Object(c.b)("em",{parentName:"a"},"JoinClause")),"): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"join")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/next/api/interfaces/knex.knex-1.joinclause"}),Object(c.b)("em",{parentName:"a"},"JoinClause")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1029"))}p.isMDXComponent=!0}}]);