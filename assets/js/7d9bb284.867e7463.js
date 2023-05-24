"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[4074],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(t),p=o,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||r;return t?a.createElement(f,i(i({ref:n},s),{},{components:t})):a.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d[u]="string"==typeof e?e:o,i[1]=d;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7089:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=t(2564),o=(t(9496),t(9613));const r={sidebar_position:2,title:"Loading modules from metadata"},i=void 0,d={unversionedId:"tutorial/container-modules/loading-modules-from-metadata",id:"version-0.4.0/tutorial/container-modules/loading-modules-from-metadata",title:"Loading modules from metadata",description:"Some more complex scenarios could require containers to be injected in a certain order. Some others could require certain dependencies to perform bindings, such as config to establish a connection to a database.",source:"@site/versioned_docs/version-0.4.0/tutorial/container-modules/loading-modules-from-metadata.md",sourceDirName:"tutorial/container-modules",slug:"/tutorial/container-modules/loading-modules-from-metadata",permalink:"/iocuak-docs/docs/0.4.0/tutorial/container-modules/loading-modules-from-metadata",draft:!1,tags:[],version:"0.4.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Loading modules from metadata"},sidebar:"sidebar",previous:{title:"Creating modules",permalink:"/iocuak-docs/docs/0.4.0/tutorial/container-modules/creating-modules"},next:{title:"Binding",permalink:"/iocuak-docs/docs/0.4.0/concepts/binding"}},c={},l=[{value:"Container Module Factory Metatada",id:"container-module-factory-metatada",level:3},{value:"Container Module Class Metadata",id:"container-module-class-metadata",level:3}],s={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some more complex scenarios could require containers to be injected in a certain order. Some others could require certain dependencies to perform bindings, such as config to establish a connection to a database."),(0,o.kt)("p",null,"Container module metadata is provided for those purposes."),(0,o.kt)("h3",{id:"container-module-factory-metatada"},"Container Module Factory Metatada"),(0,o.kt)("p",null,"This approach uses a factory to create the module. This metadata can receive an ",(0,o.kt)("inlineCode",{parentName:"p"},"injects")," property to receive injected dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Container,\n  ContainerModuleBindingService,\n  ContainerModuleMetadata,\n} from '@cuaklabs/iocuak';\n\nimport { someContainerModuleMetadataDependency } from 'some/path';\n\nasync function entryPoint(): Promise<void> {\n  const container: Container = Container.build();\n\n  const containerModuleMetadata: ContainerModuleMetadata = {\n    factory: (someServiceDependency: Dependency) => ({\n      load: (containerModuleBindingService: ContainerModuleBindingService) => {\n        containerModuleBindingService.bindToValue({\n          serviceId: 'service-id',\n          value: someServiceDependency.someValue,\n        });\n      }\n    }),\n    imports: [someContainerModuleMetadataDependency],\n    injects: [Dependency],\n  }\n\n  await container.loadMetadata(containerModuleMetadata);\n}\n \n")),(0,o.kt)("p",null,"Optionally, a container module to be loaded can be passed instead. This is equivalent to a factory metadata with no imports and a factory with no params that returns the module."),(0,o.kt)("h3",{id:"container-module-class-metadata"},"Container Module Class Metadata"),(0,o.kt)("p",null,"This approach receives a class which is used to create the module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Container,\n  ContainerModule,\n  ContainerModuleBindingService,\n  ContainerModuleMetadata,\n} from '@cuaklabs/iocuak';\n\nimport { someContainerModuleMetadataDependency } from 'some/path';\n\n@injectable()\nclass MyContainerModule implements ContainerModule {\n\n  constructor(\n    @inject(Dependency)\n    public readonly someServiceDependency: Dependency,\n  ) {}\n\n  public load: (containerModuleBindingService: ContainerModuleBindingService) => {\n    containerModuleBindingService.bindToValue({\n      serviceId: 'service-id',\n      value: someServiceDependency.someValue,\n    });\n  }\n}\n\nasync function entryPoint(): Promise<void> {\n  const container: Container = Container.build();\n\n  const containerModuleMetadata: ContainerModuleMetadata = {\n    imports: [someContainerModuleMetadataDependency],\n    module: MyContainerModule,\n  }\n\n  await container.loadMetadata(containerModuleMetadata);\n}\n \n")),(0,o.kt)("p",null,"Optionally, a container module metadata class can be passed insted. This is equivalent to a metadata with the class as module and no imports."),(0,o.kt)("p",null,"This approach is highly inspired on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/fundamentals/dynamic-modules"},"NestJs modules"),"."))}m.isMDXComponent=!0}}]);