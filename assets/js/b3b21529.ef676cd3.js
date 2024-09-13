"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[1802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1,description:"launch the CNOE IDP with a single binary",title:"idpBuilder on Local Machine",index:1},o=void 0,l={unversionedId:"reference-implementation/installations/idpbuilder/idpbuilder",id:"reference-implementation/installations/idpbuilder/idpbuilder",title:"idpBuilder on Local Machine",description:"launch the CNOE IDP with a single binary",source:"@site/docs/reference-implementation/installations/idpbuilder/idpbuilder.md",sourceDirName:"reference-implementation/installations/idpbuilder",slug:"/reference-implementation/installations/idpbuilder/",permalink:"/docs/reference-implementation/installations/idpbuilder/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference-implementation/installations/idpbuilder/idpbuilder.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"launch the CNOE IDP with a single binary",title:"idpBuilder on Local Machine",index:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/category/getting-started"},next:{title:"Quick Start",permalink:"/docs/reference-implementation/installations/idpbuilder/quick-start"}},c={},p=[{value:"About",id:"about",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"about"},"About"),(0,i.kt)("admonition",{title:"GitHub Repo",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/idpbuilder"},"cnoe-io/idpbuilder"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"WORK IN PROGRESS"),": This tool is in a pre-release stage and is under active development.")),(0,i.kt)("p",null,"Spin up a complete internal developer platform using industry standard technologies like Kubernetes, Argo, and backstage with only Docker required as a dependency."),(0,i.kt)("p",null,"This can be useful in several ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a single binary which can demonstrate an IDP reference implementation."),(0,i.kt)("li",{parentName:"ul"},"Use within CI to perform integration testing."),(0,i.kt)("li",{parentName:"ul"},"Use as a local development environment for IDP engineers.")))}u.isMDXComponent=!0}}]);