"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[6352],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>b});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return t?a.createElement(b,o(o({ref:n},s),{},{components:t})):a.createElement(b,o({ref:n},s))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[p]="string"==typeof e?e:i,o[1]=d;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var a=t(4778),i=(t(9496),t(9613));const r={sidebar_position:1,title:"Container API"},o=void 0,d={unversionedId:"api/container",id:"version-0.3.0/api/container",title:"Container API",description:"bind(type)",source:"@site/versioned_docs/version-0.3.0/api/container.md",sourceDirName:"api",slug:"/api/container",permalink:"/iocuak-docs/docs/0.3.0/api/container",draft:!1,tags:[],version:"0.3.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Container API"},sidebar:"sidebar",previous:{title:"Class metadata",permalink:"/iocuak-docs/docs/0.3.0/concepts/class-metadata"},next:{title:"injectable",permalink:"/iocuak-docs/docs/0.3.0/api/injection/injectable-decorator"}},l={},c=[{value:"<code>bind(type)</code>",id:"bindtype",level:3},{value:"<code>bindToValue(options)</code>",id:"bindtovalueoptions",level:3},{value:"<code>get(serviceId)</code>",id:"getserviceid",level:3},{value:"<code>getByTag(tag)</code>",id:"getbytagtag",level:3},{value:"<code>getAllBindinds()</code>",id:"getallbindinds",level:3},{value:"<code>load(containerModule)</code>",id:"loadcontainermodule",level:3},{value:"<code>loadMetadata(containerModuleMetadata)</code>",id:"loadmetadatacontainermodulemetadata",level:3},{value:"<code>unbind(serviceId)</code>",id:"unbindserviceid",level:3}],s={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"bindtype"},(0,i.kt)("inlineCode",{parentName:"h3"},"bind(type)")),(0,i.kt)("p",null,"Binds a type. The container takes any binding associated to that type and process it."),(0,i.kt)("h3",{id:"bindtovalueoptions"},(0,i.kt)("inlineCode",{parentName:"h3"},"bindToValue(options)")),(0,i.kt)("p",null,"Binds a value. The options parameter is described as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"serviceId"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Service id to associate"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string ","|"," symbol")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"tags"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Tags to associate"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string ","|"," symbol ","|"," (number ","|"," string ","|"," symbol)[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"value"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Value to bind"),(0,i.kt)("td",{parentName:"tr",align:"center"},"unknown")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Values are always bound in singleton scope")),(0,i.kt)("h3",{id:"getserviceid"},(0,i.kt)("inlineCode",{parentName:"h3"},"get(serviceId)")),(0,i.kt)("p",null,"Returns a service by its id. If necessary, the service is instantiated."),(0,i.kt)("p",null,"Consider the ",(0,i.kt)("a",{parentName:"p",href:"/iocuak-docs/docs/0.3.0/concepts/binding"},"binding")," page as reference to know more about instance details."),(0,i.kt)("h3",{id:"getbytagtag"},(0,i.kt)("inlineCode",{parentName:"h3"},"getByTag(tag)")),(0,i.kt)("p",null,"Returns all the services associated to a tag. If necessary, services are instantiated."),(0,i.kt)("h3",{id:"getallbindinds"},(0,i.kt)("inlineCode",{parentName:"h3"},"getAllBindinds()")),(0,i.kt)("p",null,"Returns all the bindings registered in the container."),(0,i.kt)("h3",{id:"loadcontainermodule"},(0,i.kt)("inlineCode",{parentName:"h3"},"load(containerModule)")),(0,i.kt)("p",null,"Loads a container module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { ContainerModule, ContainerModuleBindingService } from '@cuaklabs/iocuak';\n\nconst container: Container = Container.build();\n\nconst containerModule: ContainerModule = {\n  load: (containerModuleBindingService: ContainerModuleBindingService): void => {\n      containerModuleBindingService.bind(Dummy);\n  },\n};\n\ncontainer.load(containerModule);\n")),(0,i.kt)("h3",{id:"loadmetadatacontainermodulemetadata"},(0,i.kt)("inlineCode",{parentName:"h3"},"loadMetadata(containerModuleMetadata)")),(0,i.kt)("p",null,"Loads container module metadata"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Container,\n  ContainerModuleBindingService,\n  ContainerModuleMetadata,\n} from '@cuaklabs/iocuak';\n\nimport { someContainerModuleMetadataDependency } from 'some/path';\n\nasync function entryPoint(): Promise<void> {\n  const container: Container = Container.build();\n\n  const containerModuleMetadata: ContainerModuleMetadata = {\n    factory: (someServiceDependency: Dependency) => ({\n      load: (containerModuleBindingService: ContainerModuleBindingService) => {\n        containerModuleBindingService.bindToValue({\n          serviceId: 'service-id',\n          value: someServiceDependency.someValue,\n        });\n      }\n    }),\n    imports: [someContainerModuleMetadataDependency],\n    injects: [Dependency],\n  }\n\n  await container.loadMetadata(containerModuleMetadata);\n}\n \n")),(0,i.kt)("h3",{id:"unbindserviceid"},(0,i.kt)("inlineCode",{parentName:"h3"},"unbind(serviceId)")),(0,i.kt)("p",null,"Unbinds a bound service by its id."))}u.isMDXComponent=!0}}]);