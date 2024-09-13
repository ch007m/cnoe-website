"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[8323],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1,description:"integrate with flux CD and tofu controller for terraform modules",title:"Terraform Modules",index:1},i=void 0,l={unversionedId:"reference-implementation/integrations/terraform/terraform",id:"reference-implementation/integrations/terraform/terraform",title:"Terraform Modules",description:"integrate with flux CD and tofu controller for terraform modules",source:"@site/docs/reference-implementation/integrations/terraform/terraform.md",sourceDirName:"reference-implementation/integrations/terraform",slug:"/reference-implementation/integrations/terraform/",permalink:"/docs/reference-implementation/integrations/terraform/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference-implementation/integrations/terraform/terraform.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"integrate with flux CD and tofu controller for terraform modules",title:"Terraform Modules",index:1},sidebar:"tutorialSidebar",previous:{title:"Local Stack",permalink:"/docs/reference-implementation/integrations/localstack"},next:{title:"Amazon S3 Bucket",permalink:"/docs/reference-implementation/integrations/terraform/s3-bucket"}},c={},s=[{value:"Enable the Integration",id:"enable-the-integration",level:2},{value:"Setup",id:"setup",level:2}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"enable-the-integration"},"Enable the Integration"),(0,o.kt)("p",null,"Use the below command to deploy ",(0,o.kt)("inlineCode",{parentName:"p"},"idpbuilder")," to make sure backstage terraform integration Argo application is deployed as part of your setup."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"idpbuilder create \\\n  --use-path-routing \\\n  --package https://github.com/cnoe-io/stacks//ref-implementation \\\n  --package https://github.com/cnoe-io/stacks//terraform-integrations\n")),(0,o.kt)("p",null,"As you see above, this add-on to ",(0,o.kt)("inlineCode",{parentName:"p"},"idpbuilder")," has a dependency on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/stacks/tree/main/ref-implementation"},"reference implementation"),". This command primarily does the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Installs the ",(0,o.kt)("inlineCode",{parentName:"li"},"Source Controller")," from Flux CD to clone the terraform modules to Install"),(0,o.kt)("li",{parentName:"ol"},"Installs the ",(0,o.kt)("inlineCode",{parentName:"li"},"Tofu Controller")," to run pull terraform values files and run ",(0,o.kt)("inlineCode",{parentName:"li"},"terraform apply")," on the pulled modules")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Follow the instruction on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/backstage-terraform-integrations"},"Backstage Terraform Integrations")," repo to enable the modules on the Backstage environment."))}m.isMDXComponent=!0}}]);