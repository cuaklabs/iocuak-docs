"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[6186],{9613:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},634:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=t(5443),o=t(3010),i=(t(9496),t(9613)),a=["components"],c={sidebar_position:3,title:"Creating instances"},s=void 0,u={unversionedId:"the-container-object/creating-instances",id:"version-0.1.0/the-container-object/creating-instances",title:"Creating instances",description:"Once a service and all its dependencies are bound, its possible to create an instance if all the classes involved are properly decorated",source:"@site/versioned_docs/version-0.1.0/the-container-object/creating-instances.md",sourceDirName:"the-container-object",slug:"/the-container-object/creating-instances",permalink:"/iocuak-docs/docs/0.1.0/the-container-object/creating-instances",draft:!1,tags:[],version:"0.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Creating instances"},sidebar:"tutorialSidebar",previous:{title:"Binding a service",permalink:"/iocuak-docs/docs/0.1.0/the-container-object/binding-a-service"},next:{title:"Child containers",permalink:"/iocuak-docs/docs/0.1.0/the-container-object/child-containers"}},l={},p=[],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once a service and all its dependencies are bound, its possible to create an instance if all the classes involved are properly decorated"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Container, injectable } from '@cuaklabs/iocuak';\n\n@injectable()\nclass Dummy {}\n\nconst container: Container = Container.build();\ncontainer.bind(Dummy);\n\nconst dummyInstance: Dummy = container.get(Dummy);\n")))}f.isMDXComponent=!0}}]);