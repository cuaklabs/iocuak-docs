"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[8884],{9613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),s=r,k=u["".concat(d,".").concat(s)]||u[s]||m[s]||o;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},546:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(8864),r=(a(9496),a(9613));const o={sidebar_position:3,title:"Container module metadata"},i=void 0,l={unversionedId:"concepts/container-module-metadata",id:"version-0.5.0/concepts/container-module-metadata",title:"Container module metadata",description:"Represents configuration to build and load a container module.",source:"@site/versioned_docs/version-0.5.0/concepts/container-module-metadata.md",sourceDirName:"concepts",slug:"/concepts/container-module-metadata",permalink:"/iocuak-docs/docs/concepts/container-module-metadata",draft:!1,tags:[],version:"0.5.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Container module metadata"},sidebar:"sidebar",previous:{title:"Class metadata",permalink:"/iocuak-docs/docs/concepts/class-metadata"},next:{title:"Container API",permalink:"/iocuak-docs/docs/api/container"}},d={},c=[{value:"ContainerModuleFactoryMetadata",id:"containermodulefactorymetadata",level:3},{value:"ContainerModuleClassMetadata",id:"containermoduleclassmetadata",level:3},{value:"ContainerModule",id:"containermodule",level:3},{value:"Newable&lt;ContainerModule&gt;",id:"newablecontainermodule",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Represents configuration to build and load a container module."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ContainerModuleMetadata")," can be of four different different kinds:"),(0,r.kt)("h3",{id:"containermodulefactorymetadata"},"ContainerModuleFactoryMetadata"),(0,r.kt)("p",null,"Represents a container module to be built using a factory."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ContainerModuleMetadata id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ContainerModuleMetadataId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"imports"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Dependencies required to build the module"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ContainerModuleMetadata[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"factory"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function to build the module"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"injects"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Services to be passed as arguments"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ServiceId[]")))),(0,r.kt)("h3",{id:"containermoduleclassmetadata"},"ContainerModuleClassMetadata"),(0,r.kt)("p",null,"Represents a container module to be built using a decorated ContainerModule class."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ContainerModuleMetadata id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ContainerModuleMetadataId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"imports"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Dependencies required to build the module"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ContainerModuleMetadata[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"module"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ContainerModuleMetadaClass to be loaded"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Newable","<","ContainerModuleMetadata",">")))),(0,r.kt)("h3",{id:"containermodule"},"ContainerModule"),(0,r.kt)("p",null,"Represents a ContainerModule instance to be loaded. Equivalent to a ",(0,r.kt)("inlineCode",{parentName:"p"},"ContainerModuleFactoryMetadata")," with a factory with no arguments returning the module."),(0,r.kt)("h3",{id:"newablecontainermodule"},"Newable","<","ContainerModule",">"),(0,r.kt)("p",null,"Represents a ",(0,r.kt)("inlineCode",{parentName:"p"},"ContainerModule")," class to be instantiated in order to load a container module. Equivalent to a ",(0,r.kt)("inlineCode",{parentName:"p"},"ContainerModuleClassMetadata")," with no the class as module."))}m.isMDXComponent=!0}}]);