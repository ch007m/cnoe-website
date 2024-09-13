"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[4159],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,g=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return a?o.createElement(g,r(r({ref:t},u),{},{components:a})):o.createElement(g,r({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3089:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=a(7462),n=(a(7294),a(3905));const i={slug:"optimizing-data-quality-in-dev-portals",title:"Optimizing for Data Quality in your Developer Portal",authors:["ghaynes","ksmith","bromano","nabuskey","jsanford","nimak"],tags:["backstage","dev portal","data ingestion"],image:"https://cnoe.io/assets/images/ci-as-sot-aab3827d5d0bf81df84c59e6f703b5c1.png",hide_table_of_contents:!1},r=void 0,s={permalink:"/blog/optimizing-data-quality-in-dev-portals",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-15-idp-data-preso/index.md",source:"@site/blog/2023-11-15-idp-data-preso/index.md",title:"Optimizing for Data Quality in your Developer Portal",description:"Disclaimer: CNOE makes strong assumptions about using a subset of open source technologies when building Internal Developer Platforms (IDPs). Recommendations made and patterns discussed are hence centered around the exact tooling that CNOE adopts to implement a capability within an IDP. In this particular post, we assume Kubernetes as the orchestrator platform, Backstage as the technology that implements the developer portal capability, Argo CD for continuous delivery, and Crossplane or Terraform for infrastructure as code (IaC). Capability and technology names may be used interchangeably in the blog post but practices discussed are primarily around the specific set of technologies named earlier.",date:"2023-11-15T00:00:00.000Z",formattedDate:"November 15, 2023",tags:[{label:"backstage",permalink:"/blog/tags/backstage"},{label:"dev portal",permalink:"/blog/tags/dev-portal"},{label:"data ingestion",permalink:"/blog/tags/data-ingestion"}],readingTime:8.285,hasTruncateMarker:!1,authors:[{name:"Greg Haynes",title:"Architect, Autodesk",url:"https://github.com/greghaynes",imageURL:"https://ca.slack-edge.com/T08PSQ7BQ-UCG7862LR-ga2857bd677e-512",key:"ghaynes"},{name:"Kyle Smith",title:"Software Engineer, Twilio Segment",url:"https://github.com/knksmith57",imageURL:"https://ca.slack-edge.com/T08PSQ7BQ-U0603GCLFDX-gfed2e6b32b1-512",key:"ksmith"},{name:"Blake Romano",title:"Software Engineer, Imagine Learning",url:"https://github.com/blakeromano",imageURL:"https://ca.slack-edge.com/T08PSQ7BQ-U03M80Q624F-f11d0924baa7-512",key:"bromano"},{name:"Manabu McCloskey",title:"Architect, AWS",url:"https://github.com/nabuskey",imageURL:"https://ca.slack-edge.com/T08PSQ7BQ-U02TMF8N4DS-95b679f8ca22-512",key:"nabuskey"},{name:"Jesse Sanford",title:"Architect, Autodesk",url:"https://github.com/jessesanford",imageURL:"https://ca.slack-edge.com/T08PSQ7BQ-U01ER012APQ-f9a54950e6ed-512",key:"jsanford"},{name:"Nima Kaviani",title:"Architect, AWS",url:"https://github.com/nimakaviani",imageURL:"https://pbs.twimg.com/profile_images/1432858285321773058/-fiwrTaO_400x400.jpg",key:"nimak"}],frontMatter:{slug:"optimizing-data-quality-in-dev-portals",title:"Optimizing for Data Quality in your Developer Portal",authors:["ghaynes","ksmith","bromano","nabuskey","jsanford","nimak"],tags:["backstage","dev portal","data ingestion"],image:"https://cnoe.io/assets/images/ci-as-sot-aab3827d5d0bf81df84c59e6f703b5c1.png",hide_table_of_contents:!1},prevItem:{title:"Argo CD Benchmarking - Pushing the Limits and Sharding Deep Dive",permalink:"/blog/argo-cd-application-scalability"},nextItem:{title:"CNOE - A Joint Effort to Share Internal Developer Platform Tools and Best Practices.",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0,void 0]},c=[{value:"Establishing the source of truth",id:"establishing-the-source-of-truth",level:2},{value:"Use your existing CI/CD pipelines to construct the source of truth",id:"use-your-existing-cicd-pipelines-to-construct-the-source-of-truth",level:2},{value:"Use a central control plane as the source of truth",id:"use-a-central-control-plane-as-the-source-of-truth",level:2},{value:"Use Backstage as the source of truth",id:"use-backstage-as-the-source-of-truth",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Disclaimer: CNOE makes strong assumptions about using a subset of open source technologies when building Internal Developer Platforms (IDPs). Recommendations made and patterns discussed are hence centered around the exact tooling that CNOE adopts to implement a capability within an IDP. In this particular post, we assume Kubernetes as the orchestrator platform, Backstage as the technology that implements the developer portal capability, Argo CD for continuous delivery, and Crossplane or Terraform for infrastructure as code (IaC). Capability and technology names may be used interchangeably in the blog post but practices discussed are primarily around the specific set of technologies named earlier.")),(0,n.kt)("h2",{id:"establishing-the-source-of-truth"},"Establishing the source of truth"),(0,n.kt)("p",null,"There are different approaches to representing entities like Kubernetes objects and cloud resources in Backstage. In such context, ",(0,n.kt)("em",{parentName:"p"},"platform engineers need to optimize for creation of reliable data"),". The last thing you as a platform provider want to see happen is to lose trust of end users because you are displaying incorrect information. There are however, a number of key decisions to be made when building entity representations in Backstage. Particularly:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"What gets represented in Backstage and what doesn't"),(0,n.kt)("li",{parentName:"ol"},"How to ensure the Backstage entity offers an accurate representation of its real world counterpart"),(0,n.kt)("li",{parentName:"ol"},"What establishes the source of truth for an entity")),(0,n.kt)("p",null,"Embracing GitOps practices, the answer to that last question may sound rather trivial: ",(0,n.kt)("em",{parentName:"p"},"GIT, git is obviously the source of truth, since, you know ... GitOps!")),(0,n.kt)("p",null,"However, while git represents the intended source of truth, truth is actually realized where the resource is deployed, revealing its beloved ",(0,n.kt)("em",{parentName:"p"},"resource status"),". That is why you may hear people sarcastically refer to git as the ",(0,n.kt)("em",{parentName:"p"},"source of hope")," in GitOps."),(0,n.kt)("p",null,"Our current collective of practices reveals that there is no silver bullet when deciding entity representations in a developer portal. What establishes the actual source of truth, from which Backstage entity representations to be drawn, primarily depends on company practices and tools DevOps teams have available to them."),(0,n.kt)("p",null,"If you operate a Hub and Spoke model, where a single control plane cluster is responsible for handling platform requirements and separate compute clusters handle the actual workload, the hub cluster could very well become the data source for the Backstage entities. On the other hand, if you operate a federated environment where control plane and data plane workloads are scattered across multiple clusters, Backstage could become the unifier that implements custom entity providers to pull and consolidate data from multiple data sources (i.e. the set of clusters with the right data). In a third approach, the CI may take on the job of hydrating entity definitions with metadata and status information it collects from several data sources, eventually pushing the constructed entity to another repository where it can be observed."),(0,n.kt)("p",null,"Next we discuss these approaches in more details."),(0,n.kt)("h2",{id:"use-your-existing-cicd-pipelines-to-construct-the-source-of-truth"},"Use your existing CI/CD pipelines to construct the source of truth"),(0,n.kt)("p",null,"Starting from the specification of entities and infrastructure resources in a\ngit repository, this approach utilizes tasks in the CI to hydrate entities with\ninformation on entity relations, extra metadata, and status of deployed\nresources. To avoid conflating user changes and automated CI changes, the\nhydrated entities are often kept in a separate git repository that mirrors and\nexpands entities in the original git repository with intended application\nspecifications."),(0,n.kt)("p",null,"On the positive side:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This is a relatively simple approach and works for smaller teams with smaller number of applications or systems"),(0,n.kt)("li",{parentName:"ul"},"Having a second git repository to capture the end state of an entity stays closer to the core GitOps practices"),(0,n.kt)("li",{parentName:"ul"},"Does not require significant modification to the developer portal")),(0,n.kt)("p",null,"On the negative side:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There is inherent duplications that are happening"),(0,n.kt)("li",{parentName:"ul"},"Adding custom metadata by application teams is not as trivial as it requires making changes to the integration workflow, thus bringing load and demand to the DevOps teams"),(0,n.kt)("li",{parentName:"ul"},"Less abstraction in place as end application users are directly exposed to the yaml specification of the entities"),(0,n.kt)("li",{parentName:"ul"},"Does not scale well as the number of systems and entities grow")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ci-as-source-of-truth",src:a(4718).Z,width:"1904",height:"848"})),(0,n.kt)("h2",{id:"use-a-central-control-plane-as-the-source-of-truth"},"Use a central control plane as the source of truth"),(0,n.kt)("p",null,"The hub and spoke model is the most advocated for model when applying GitOps practices. Your control plane cluster runs and manages your platform tools, your CI, your CD, developer portal, infrastructure as code tooling, etc."),(0,n.kt)("p",null,"On the positive side:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There really is a single place to inspect the status of entities. E.g., Argo applications can tell you the status of deployed applications. You can also inspect the status of workflows, infrastructure resources, and any other entity that the control plane cluster manages."),(0,n.kt)("li",{parentName:"ul"},"You can use the Backstage Kubernetes plugin seamlessly and maybe with some little tweaks. Alternatively this can be achieved by introducing fairly light-weight Backstage custom entity providers which pull and show the status of entities in the Backstage portal."),(0,n.kt)("li",{parentName:"ul"},"In an organization with a diverse set of distributed systems, the control plane cluster can be used as the integration layer by wrapping legacy APIs and or implementing native controllers.")),(0,n.kt)("p",null,"On the negative side:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Most organizations do not have a central control plane and adopting one as the source of truth is often a significant change, especially if an organization is early in their GitOps transition."),(0,n.kt)("li",{parentName:"ul"},"For organizations deep into a federated model of operation with different teams running and managing their platforms separately and rather independently, it could be challenging to offer a single control plane that aggregates data across all teams."),(0,n.kt)("li",{parentName:"ul"},"Management of change could become cumbersome. Existence of a single control plane could create bottlenecks where changes occur to a set of entities or practices. Changes in organizations or systems may result in changes to various entities managed across several teams. Bringing GitOps practices to the mix, this requires chains of approvals to happen across multiple entities and across several repositories for deployments to start flowing. Depending on the size of the organization, this could lead to organizational nightmares."),(0,n.kt)("li",{parentName:"ul"},"You may need to jump through a few hoops before getting from the representation of the application, to the actual deployment of it, e.g., going from git to your continuous delivery and from there to your target cluster.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"controlplane-as-source-of-truth",src:a(6873).Z,width:"2578",height:"1146"})),(0,n.kt)("h2",{id:"use-backstage-as-the-source-of-truth"},"Use Backstage as the source of truth"),(0,n.kt)("p",null,"Where control planes and compute workloads are scattered, the unifying layer lies in the developer portal, i.e. Backstage. Hence, it is reasonable to construct an entity by collecting and aggregating data from various data sources, each providing partial data on the entity, making Backstage be the source of truth. This generally starts with Backstage querying git for the entities that exist. Then using the identifiers for the entities to collect metadata on how the entity contributes to a system. This could involve querying the control plane clusters and the workload clusters via some custom entity provider that looks for certain information and putting collected pieces together to come close to the core promise of a developer portal, ",(0,n.kt)("em",{parentName:"p"},"providing reliable information")," on the entities."),(0,n.kt)("p",null,"On the positive side:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This model copes better with legacy systems"),(0,n.kt)("li",{parentName:"ul"},"Users are not exposed to and often times not even aware of the underlying platforms, hence underlying platform and tooling is more rigorously abstracted away"),(0,n.kt)("li",{parentName:"ul"},"Changes to the system are only isolated to the entities of the particular system as managed by the underlying resources and platform. This causes less chaos when definitions, metadata, or properties of entities need to change.")),(0,n.kt)("p",null,"On the negative side:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The git service may not be able to scale, technically or financially.  This is particularly because Backstage may hit the git service endpoints too frequently and exceed the API limits. This could cause delays in displaying data for end users or display wrong information if partially available data is mishandled. This can be mitigated via approaches like using an eventing mechanism to notify Backstage of changes, or alternatively to store entity definitions in an alternative storage space (e.g. Amazon S3). There are challenges to such approaches too, for example when using Amazon S3, change history will be lost. Also, using an eventing mechanism could introduce security challenges that we discuss next."),(0,n.kt)("li",{parentName:"ul"},"Securing Backstage could be a challenge. For Backstage to proactively receive updates on entity changes, it would work best to configure event hooks to provide callbacks to Backstage when changes occur. Backstage, being the entry point for user workflows, sits on the critical path of platform operations. As such, platform engineers need to solve for a chicken and egg problem by deciding how to expose Backstage endpoints to receive events and yet to limit access for security reasons. The authentication methods that GitHub supports may not satisfy the security standards that an organization requires."),(0,n.kt)("li",{parentName:"ul"},"Changes to entities may not be as trivial. DevOps engineers need to manage entities that they may not control. For example, if a new mandatory field is introduced to a catalog file, DevOps engineers may need to talk to the respective repository owners, create a PR, then get approval for all affected repositories.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"backstage-as-source-of-truth",src:a(1519).Z,width:"2342",height:"984"})),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"We discussed multiple approaches to creating reliable representation of system entities in the developer portals. We do not necessarily recommend one approach over another, but it is important to find the right approach given the patterns and practices in your organization. It is also worth noting that you can choose to combine multiple approaches depending on the requirements of your teams. For example, while continuous integration can still be used to construct the actual state of the world by collecting status data and other related information, Backstage extensions can be introduced to expand on entity relations, providing better representation of a system. Stating the obvious here, but your proper selection of patterns that work for you will go a long way in increasing your overall team velocity down the road."),(0,n.kt)("p",null,"Reach out on ",(0,n.kt)("a",{parentName:"p",href:"https://cloud-native.slack.com/archives/C05TN9WFN5S"},"#cnoe-interest")," CNCF slack channel to share thoughts and get involved in developing CNOE."))}p.isMDXComponent=!0},1519:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/bg-as-sot-aa6d086d3fe6ab09d3e266c149266c76.png"},4718:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/ci-as-sot-aab3827d5d0bf81df84c59e6f703b5c1.png"},6873:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/cp-as-sot-3f037de15fbbdfc86df959d57029b7d3.png"}}]);