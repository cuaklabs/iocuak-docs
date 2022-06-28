"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[6352],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,v=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(v,o(o({ref:t},s),{},{components:n})):a.createElement(v,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var a=n(665),i=(n(9496),n(9613));const r={sidebar_position:1,title:"Container API"},o=void 0,d={unversionedId:"api/container",id:"version-0.3.0/api/container",title:"Container API",description:"bind(type)",source:"@site/versioned_docs/version-0.3.0/api/container.md",sourceDirName:"api",slug:"/api/container",permalink:"/iocuak-docs/docs/api/container",draft:!1,tags:[],version:"0.3.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Container API"},sidebar:"sidebar",previous:{title:"Class metadata",permalink:"/iocuak-docs/docs/concepts/class-metadata"},next:{title:"injectable",permalink:"/iocuak-docs/docs/api/injection/injectable-decorator"}},l={},c=[{value:"<code>bind(type)</code>",id:"bindtype",level:3},{value:"<code>bindToValue(options)</code>",id:"bindtovalueoptions",level:3},{value:"<code>get(serviceId)</code>",id:"getserviceid",level:3},{value:"<code>getByTag(tag)</code>",id:"getbytagtag",level:3},{value:"<code>getAllBindinds()</code>",id:"getallbindinds",level:3},{value:"<code>load(containerModule)</code>",id:"loadcontainermodule",level:3},{value:"<code>loadMetadata(containerModuleMetadata)</code>",id:"loadmetadatacontainermodulemetadata",level:3},{value:"<code>unbind(serviceId)</code>",id:"unbindserviceid",level:3}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"bindtype"},(0,i.kt)("inlineCode",{parentName:"h3"},"bind(type)")),(0,i.kt)("p",null,"Binds a type. The container takes any binding associated to that type and process it."),(0,i.kt)("h3",{id:"bindtovalueoptions"},(0,i.kt)("inlineCode",{parentName:"h3"},"bindToValue(options)")),(0,i.kt)("p",null,"Binds a value. The options parameter is described as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"serviceId"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Service id to associate"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string ","|"," symbol")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"tags"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Tags to associate"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string ","|"," symbol ","|"," (number ","|"," string ","|"," symbol)[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"value"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Value to bind"),(0,i.kt)("td",{parentName:"tr",align:"center"},"unknown")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Values are always bound in singleton scope"))),(0,i.kt)("h3",{id:"getserviceid"},(0,i.kt)("inlineCode",{parentName:"h3"},"get(serviceId)")),(0,i.kt)("p",null,"Returns a service by its id. If necessary, the service is instantiated."),(0,i.kt)("p",null,"Consider the ",(0,i.kt)("a",{parentName:"p",href:"/iocuak-docs/docs/concepts/binding"},"binding")," page as reference to know more about instance details."),(0,i.kt)("h3",{id:"getbytagtag"},(0,i.kt)("inlineCode",{parentName:"h3"},"getByTag(tag)")),(0,i.kt)("p",null,"Returns all the services associated to a tag. If necessary, services are instantiated."),(0,i.kt)("h3",{id:"getallbindinds"},(0,i.kt)("inlineCode",{parentName:"h3"},"getAllBindinds()")),(0,i.kt)("p",null,"Returns all the bindings registered in the container."),(0,i.kt)("h3",{id:"loadcontainermodule"},(0,i.kt)("inlineCode",{parentName:"h3"},"load(containerModule)")),(0,i.kt)("p",null,"Loads a container module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { ContainerModule, ContainerModuleBindingService } from '@cuaklabs/iocuak';\n\nconst container: Container = Container.build();\n\nconst containerModule: ContainerModule = {\n  load: (containerModuleBindingService: ContainerModuleBindingService): void => {\n      containerModuleBindingService.bind(Dummy);\n  },\n};\n\ncontainer.load(containerModule);\n")),(0,i.kt)("h3",{id:"loadmetadatacontainermodulemetadata"},(0,i.kt)("inlineCode",{parentName:"h3"},"loadMetadata(containerModuleMetadata)")),(0,i.kt)("p",null,"Loads container module metadata"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Container,\n  ContainerModuleBindingService,\n  ContainerModuleMetadata,\n} from '@cuaklabs/iocuak';\n\nimport { someContainerModuleMetadataDependency } from 'some/path';\n\nasync function entryPoint(): Promise<void> {\n  const container: Container = Container.build();\n\n  const containerModuleMetadata: ContainerModuleMetadata = {\n    factory: (someServiceDependency: Dependency) => ({\n      load: (containerModuleBindingService: ContainerModuleBindingService) => {\n        containerModuleBindingService.bindToValue({\n          serviceId: 'service-id',\n          value: someServiceDependency.someValue,\n        });\n      }\n    }),\n    imports: [someContainerModuleMetadataDependency],\n    injects: [Dependency],\n  }\n\n  await container.loadMetadata(containerModuleMetadata);\n}\n \n")),(0,i.kt)("h3",{id:"unbindserviceid"},(0,i.kt)("inlineCode",{parentName:"h3"},"unbind(serviceId)")),(0,i.kt)("p",null,"Unbinds a bound service by its id."))}p.isMDXComponent=!0}}]);