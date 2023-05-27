"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[2855],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),b=o,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},6628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(8864),o=(t(9496),t(9613));const i={sidebar_position:2,title:"Binding a service"},a=void 0,c={unversionedId:"tutorial/the-container-object/binding-a-service",id:"version-0.4.0/tutorial/the-container-object/binding-a-service",title:"Binding a service",description:"Services can be easily bound to the container calling it directly.",source:"@site/versioned_docs/version-0.4.0/tutorial/the-container-object/binding-a-service.md",sourceDirName:"tutorial/the-container-object",slug:"/tutorial/the-container-object/binding-a-service",permalink:"/iocuak-docs/docs/0.4.0/tutorial/the-container-object/binding-a-service",draft:!1,tags:[],version:"0.4.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Binding a service"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/iocuak-docs/docs/0.4.0/tutorial/the-container-object/introduction"},next:{title:"Creating instances",permalink:"/iocuak-docs/docs/0.4.0/tutorial/the-container-object/creating-instances"}},l={},u=[],s={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Services can be easily bound to the container calling it directly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Container } from '@cuaklabs/iocuak';\n\nclass Dummy {}\n\nconst container: Container = Container.build();\ncontainer.bind(Dummy);\n\n")),(0,o.kt)("p",null,"Services can also be bound through a ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerModule"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ContainerModule, ContainerModuleBindingService } from '@cuaklabs/iocuak';\n\nconst container: Container = Container.build();\n\nconst containerModule: ContainerModule = {\n  load: (containerModuleBindingService: ContainerModuleBindingService): void => {\n      containerModuleBindingService.bind(Dummy);\n  },\n};\n\ncontainer.load(containerModule);\n")))}p.isMDXComponent=!0}}]);