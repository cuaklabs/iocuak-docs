"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[3095],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(b,o(o({ref:t},s),{},{components:n})):a.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:r,o[1]=d;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=n(2564),r=(n(9496),n(9613));const i={sidebar_position:1,title:"Container API"},o=void 0,d={unversionedId:"api/container",id:"version-0.4.0/api/container",title:"Container API",description:"bind(type, options)",source:"@site/versioned_docs/version-0.4.0/api/container.md",sourceDirName:"api",slug:"/api/container",permalink:"/iocuak-docs/docs/0.4.0/api/container",draft:!1,tags:[],version:"0.4.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Container API"},sidebar:"sidebar",previous:{title:"Class metadata",permalink:"/iocuak-docs/docs/0.4.0/concepts/class-metadata"},next:{title:"injectable",permalink:"/iocuak-docs/docs/0.4.0/api/injection/injectable-decorator"}},l={},c=[{value:"<code>bind(type, options)</code>",id:"bindtype-options",level:3},{value:"<code>bindToValue(options)</code>",id:"bindtovalueoptions",level:3},{value:"<code>get(serviceId)</code>",id:"getserviceid",level:3},{value:"<code>getByTag(tag)</code>",id:"getbytagtag",level:3},{value:"<code>getAllBindinds()</code>",id:"getallbindinds",level:3},{value:"<code>load(containerModule)</code>",id:"loadcontainermodule",level:3},{value:"<code>loadMetadata(containerModuleMetadata)</code>",id:"loadmetadatacontainermodulemetadata",level:3},{value:"<code>unbind(serviceId)</code>",id:"unbindserviceid",level:3}],s={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"bindtype-options"},(0,r.kt)("inlineCode",{parentName:"h3"},"bind(type, options)")),(0,r.kt)("p",null,"Binds a type. The container takes any binding associated to that type and process it. Optionally, it receives an options parameter:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"scope"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Binding scope to apply"),(0,r.kt)("td",{parentName:"tr",align:"center"},"BindingScope")))),(0,r.kt)("h3",{id:"bindtovalueoptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"bindToValue(options)")),(0,r.kt)("p",null,"Binds a value. The options parameter is described as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"serviceId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Service id to associate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string ","|"," symbol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tags"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Tags to associate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string ","|"," symbol ","|"," (number ","|"," string ","|"," symbol)[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Value to bind"),(0,r.kt)("td",{parentName:"tr",align:"center"},"unknown")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Values are always bound in singleton scope")),(0,r.kt)("h3",{id:"getserviceid"},(0,r.kt)("inlineCode",{parentName:"h3"},"get(serviceId)")),(0,r.kt)("p",null,"Returns a service by its id. If necessary, the service is instantiated."),(0,r.kt)("p",null,"Consider the ",(0,r.kt)("a",{parentName:"p",href:"/iocuak-docs/docs/0.4.0/concepts/binding"},"binding")," page as reference to know more about instance details."),(0,r.kt)("h3",{id:"getbytagtag"},(0,r.kt)("inlineCode",{parentName:"h3"},"getByTag(tag)")),(0,r.kt)("p",null,"Returns all the services associated to a tag. If necessary, services are instantiated."),(0,r.kt)("h3",{id:"getallbindinds"},(0,r.kt)("inlineCode",{parentName:"h3"},"getAllBindinds()")),(0,r.kt)("p",null,"Returns all the bindings registered in the container."),(0,r.kt)("h3",{id:"loadcontainermodule"},(0,r.kt)("inlineCode",{parentName:"h3"},"load(containerModule)")),(0,r.kt)("p",null,"Loads a container module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { ContainerModule, ContainerModuleBindingService } from '@cuaklabs/iocuak';\n\nconst container: Container = Container.build();\n\nconst containerModule: ContainerModule = {\n  load: (containerModuleBindingService: ContainerModuleBindingService): void => {\n      containerModuleBindingService.bind(Dummy);\n  },\n};\n\ncontainer.load(containerModule);\n")),(0,r.kt)("h3",{id:"loadmetadatacontainermodulemetadata"},(0,r.kt)("inlineCode",{parentName:"h3"},"loadMetadata(containerModuleMetadata)")),(0,r.kt)("p",null,"Loads container module metadata"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Container,\n  ContainerModuleBindingService,\n  ContainerModuleMetadata,\n} from '@cuaklabs/iocuak';\n\nimport { someContainerModuleMetadataDependency } from 'some/path';\n\nasync function entryPoint(): Promise<void> {\n  const container: Container = Container.build();\n\n  const containerModuleMetadata: ContainerModuleMetadata = {\n    factory: (someServiceDependency: Dependency) => ({\n      load: (containerModuleBindingService: ContainerModuleBindingService) => {\n        containerModuleBindingService.bindToValue({\n          serviceId: 'service-id',\n          value: someServiceDependency.someValue,\n        });\n      }\n    }),\n    imports: [someContainerModuleMetadataDependency],\n    injects: [Dependency],\n  }\n\n  await container.loadMetadata(containerModuleMetadata);\n}\n \n")),(0,r.kt)("h3",{id:"unbindserviceid"},(0,r.kt)("inlineCode",{parentName:"h3"},"unbind(serviceId)")),(0,r.kt)("p",null,"Unbinds a bound service by its id."))}u.isMDXComponent=!0}}]);