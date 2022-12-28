"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[5360],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=o,f=s["".concat(l,".").concat(m)]||s[m]||p[m]||i;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},978:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(5882),o=(t(9496),t(9613));const i={sidebar_position:2,title:"Creating modules"},a=void 0,c={unversionedId:"tutorial/container-modules/creating-modules",id:"version-0.3.1/tutorial/container-modules/creating-modules",title:"Creating modules",description:"A container module declares a load method receiving a ContainerModuleBindingService. This service allows us to bind types and values.",source:"@site/versioned_docs/version-0.3.1/tutorial/container-modules/creating-modules.md",sourceDirName:"tutorial/container-modules",slug:"/tutorial/container-modules/creating-modules",permalink:"/iocuak-docs/docs/tutorial/container-modules/creating-modules",draft:!1,tags:[],version:"0.3.1",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Creating modules"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/iocuak-docs/docs/tutorial/container-modules/introduction"},next:{title:"Loading modules from metadata",permalink:"/iocuak-docs/docs/tutorial/container-modules/loading-modules-from-metadata"}},l={},u=[],d={toc:u};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A container module declares a ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," method receiving a ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerModuleBindingService"),". This service allows us to bind types and values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ContainerModule, ContainerModuleBindingService } from '@cuaklabs/iocuak';\n\nconst container: Container = Container.build();\n\nconst containerModule: ContainerModule = {\n  load: (containerModuleBindingService: ContainerModuleBindingService): void => {\n      containerModuleBindingService.bind(Dummy);\n  },\n};\n\ncontainer.load(containerModule);\n")),(0,o.kt)("p",null,"This way different service bindings can be grouped."))}s.isMDXComponent=!0}}]);