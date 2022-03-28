"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[785],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,b=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(b,a(a({ref:n},s),{},{components:t})):r.createElement(b,a({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4743:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={sidebar_position:2,title:"Binding a service"},u=void 0,l={unversionedId:"the-container-object/binding-a-service",id:"version-0.1.0/the-container-object/binding-a-service",title:"Binding a service",description:"Services can be easily bound to the container calling it directly.",source:"@site/versioned_docs/version-0.1.0/the-container-object/binding-a-service.md",sourceDirName:"the-container-object",slug:"/the-container-object/binding-a-service",permalink:"/iocuak-docs/docs/the-container-object/binding-a-service",tags:[],version:"0.1.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Binding a service"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/iocuak-docs/docs/the-container-object/introduction"},next:{title:"Creating instances",permalink:"/iocuak-docs/docs/the-container-object/creating-instances"}},s={},p=[],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Services can be easily bound to the container calling it directly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Container } from '@cuaklabs/iocuak';\n\nclass Dummy {}\n\nconst container: Container = Container.build();\ncontainer.bind(Dummy);\n\n")),(0,i.kt)("p",null,"Services can also be bound through a ",(0,i.kt)("inlineCode",{parentName:"p"},"ContainerModule"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { ContainerModule, ContainerService } from '@cuaklabs/iocuak';\n\nconst container: Container = Container.build();\n\nconst containerModule: ContainerModule = {\n  load: (container: ContainerService): void => {\n      container.bind(Dummy);\n  },\n};\n\ncontainer.load(containerModule);\n")))}f.isMDXComponent=!0}}]);