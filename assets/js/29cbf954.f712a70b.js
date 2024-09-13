"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[9629],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,k=p["".concat(s,".").concat(m)]||p[m]||g[m]||r;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3169:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const r={sidebar_position:2,description:"Enabling Continuous Integration",title:"Argo Workflows Plugin"},i="CNOE Argo Workflows Backstage Plugin",l={unversionedId:"reference-implementation/plugins/argo-workflows",id:"reference-implementation/plugins/argo-workflows",title:"Argo Workflows Plugin",description:"Enabling Continuous Integration",source:"@site/docs/reference-implementation/plugins/argo-workflows.md",sourceDirName:"reference-implementation/plugins",slug:"/reference-implementation/plugins/argo-workflows",permalink:"/docs/reference-implementation/plugins/argo-workflows",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference-implementation/plugins/argo-workflows.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Enabling Continuous Integration",title:"Argo Workflows Plugin"},sidebar:"tutorialSidebar",previous:{title:"Terraform Plugin",permalink:"/docs/reference-implementation/plugins/terraform-plugin"},next:{title:"Scaffolder Backend Plugin",permalink:"/docs/reference-implementation/plugins/scaffolder-backend"}},s={},c=[{value:"Getting started",id:"getting-started",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Annotations",id:"annotations",level:4},{value:"Authentication",id:"authentication",level:3},{value:"Through Argo API with Service Account Token",id:"through-argo-api-with-service-account-token",level:4},{value:"Using configured Kubernetes API",id:"using-configured-kubernetes-api",level:4}],u={toc:c};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cnoe-argo-workflows-backstage-plugin"},"CNOE Argo Workflows Backstage Plugin"),(0,o.kt)("admonition",{title:"github repo",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/plugin-argo-workflows"},"cnoe-io/plugin-argo-workflows"))),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GIF",src:t(8238).Z,width:"640",height:"338"})),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Entities must be annotated with Kubernetes annotations. An example component\nwould look like the following where you can configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec")," to your\nliking. Information specific to Argo Workflows goes under ",(0,o.kt)("inlineCode",{parentName:"p"},"annotations")," as\nshown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: backstage.io/v1alpha1\nkind: Component\nmetadata:\n  name: backstage\n  annotations:\n    backstage.io/kubernetes-namespace: default\n    backstage.io/kubernetes-label-selector: env=dev,my=label\nspec:\n  type: service\n  lifecycle: experimental\n  owner: user1\n  system: system1\n")),(0,o.kt)("p",null,"Configure your Argo Workflows' instance base URL. This is optional. If defined, workflows will have links to Argo Workflows UI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"argoWorkflows:\n  baseUrl: https://my-argo-workflows.url\n")),(0,o.kt)("p",null,"Update your Entity page. For example: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// in packages/app/src/components/catalog/EntityPage.tsx\nimport {\n    EntityArgoWorkflowsOverviewCard,\n    isArgoWorkflowsAvailable,\n} from \'@internal/plugin-argo-workflows\';\n\n\nconst overviewContent = (\n<Grid container spacing={3} alignItems="stretch">\n    {entityWarningContent}\n    <Grid item md={6}>\n        <EntityAboutCard variant="gridItem" />\n    </Grid>\n    <EntitySwitch>\n        <EntitySwitch.Case if={e => isArgoWorkflowsAvailable(e)}>\n        <Grid item md={6}>\n            <EntityArgoWorkflowsOverviewCard />\n        </Grid>\n        <Grid item md={6}>\n            <EntityArgoWorkflowsTemplateOverviewCard />\n        </Grid>\n        </EntitySwitch.Case>\n    </EntitySwitch>\n        ...\n</Grid>\n);\n')),(0,o.kt)("h4",{id:"annotations"},"Annotations"),(0,o.kt)("p",null,"As shown in the example above, the following annotations could go under\n",(0,o.kt)("inlineCode",{parentName:"p"},"annotations")," in the backstage ",(0,o.kt)("inlineCode",{parentName:"p"},"Component")," and will be recognized by this plugin."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"backstage.io/kubernetes-namespace"),": Optional. The namespace to be search for finding Argo workflows. Defaults to the ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," namespace."),(0,o.kt)("li",{parentName:"ul"},"Conditionally, one of the two labels below are required:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"backstage.io/kubernetes-label-selector"),": the backstage default label\nselector to choose workflows that carry the label."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"argo-workflows/label-selector"),": Same as the above, except internal to Argo machinery. This value takes precedent over the one above if both are defined."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"argo-workflows/cluster-name"),": Optional. Specifies the name of the Kubernetes cluster to retrieve information from. If missing chooses the Kubernetes context available to backstage at runtime.")),(0,o.kt)("h3",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"This plugin supports two methods of authentication."),(0,o.kt)("h4",{id:"through-argo-api-with-service-account-token"},"Through Argo API with Service Account Token"),(0,o.kt)("p",null,"This method uses a service account token to retrieve information from Argo API through the configured proxy endpoint."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a service account and associated permissions. For this plugin to work, you need list, get, and watch verbs.\nfor example create a file called ",(0,o.kt)("inlineCode",{parentName:"li"},"sa.yaml")," with the following contents:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ServiceAccount\nmetadata:\nname: backstage-argo-workflows-plugin\nnamespace: argo\n    ---\n    # This is a long-lived token intended to be used by the backstage proxy.\n    apiVersion: v1\n    kind: Secret\n    metadata:\n    name: backstage-argo-workflows-plugin-token\n    annotations:\n    kubernetes.io/service-account.name: backstage-argo-workflows-plugin\n    namespace: argo\n    type: kubernetes.io/service-account-token\n    ---\n    apiVersion: rbac.authorization.k8s.io/v1\n    kind: ClusterRole\n    metadata:\n    name: backstage-argo-workflows-plugin\n    rules:\n    - apiGroups: ["argoproj.io"]\n      resources: ["workflows"]\n      verbs: [ "get", "watch", "list"]\n    ---\n    apiVersion: rbac.authorization.k8s.io/v1\n    kind: ClusterRoleBinding\n    metadata:\n    name: backstage-argo-workflows-plugin\n    roleRef:\n    apiGroup: rbac.authorization.k8s.io\n    kind: ClusterRole\n    name: backstage-argo-workflows-plugin\n    subjects:\n    - kind: ServiceAccount\n      name: backstage-argo-workflows-plugin\n      namespace: argo\n    ```\n'))),(0,o.kt)("li",{parentName:"ol"},"Apply them to your cluster",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f sa.yaml\n"))),(0,o.kt)("li",{parentName:"ol"},"Configure ",(0,o.kt)("a",{parentName:"li",href:"https://backstage.io/docs/plugins/proxying"},"Backstage Proxy"),". In this example we are instructing Backstage to get the token value from environment variable called ",(0,o.kt)("inlineCode",{parentName:"li"},"ARGO_WORKFLOWS_AUTH_TOKEN"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'proxy:\n  "/argo-workflows/api":\n    target: https://argo.a1.mccloman.people.aws.dev\n    changeOrigin: true\n    secure: true\n    headers:\n      Authorization:\n        $env: ARGO_WORKFLOWS_AUTH_TOKEN\n'))),(0,o.kt)("li",{parentName:"ol"},"Grab the token value and make it available as an environment variable for your backstage backend.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export ARGO_WORKFLOWS_AUTH_TOKEN=\"Bearer $(kubectl get secret -n argo backstage-argo-workflows-plugin-token -o=jsonpath='{.data.token}' | base64 --decode)\"\n")),"If this is running in Kubernetes see this ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/inject-data-application/distribute-credentials-secure/#define-container-environment-variables-using-secret-data"},"documentation"),".")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://argoproj.github.io/argo-workflows/access-token/"},"this documentation")," for more information on getting your token."),(0,o.kt)("h4",{id:"using-configured-kubernetes-api"},"Using configured Kubernetes API"),(0,o.kt)("p",null,"The plugin can use configured Kubernetes clusters to fetch resources instead of going through the Argo Workflows API\nThe entity must be annotated correctly for it to work."),(0,o.kt)("p",null,"For example, for a Kubernetes cluster given in your ",(0,o.kt)("inlineCode",{parentName:"p"},"app-config.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'kubernetes:\n  serviceLocatorMethod:\n    type: "multiTenant"\n  clusterLocatorMethods:\n    - type: "config"\n      clusters:\n        - url: https://abcd.gr7.us-west-2.eks.amazonaws.com:443\n          name: my-cluster-1\n          authProvider: "serviceAccount"\n          serviceAccountToken: eyJh\n          caData: LS0t\n')),(0,o.kt)("p",null,"For this configuration, the ",(0,o.kt)("inlineCode",{parentName:"p"},"argo-workflows/cluster-name")," annotaton value must be ",(0,o.kt)("inlineCode",{parentName:"p"},"my-cluster-1")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: backstage.io/v1alpha1\nkind: Component\nmetadata:\n  name: backstage\n  annotations:\n    backstage.io/kubernetes-namespace: default\n    backstage.io/kubernetes-label-selector: env=dev,my=label\n    argo-workflows/cluster-name: my-cluster-1\nspec:\n  type: service\n  lifecycle: experimental\n  owner: user1\n  system: system1\n")))}p.isMDXComponent=!0},8238:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/argo-demo-6f488b573230ec90c7ba6ebbd235b58a.gif"}}]);