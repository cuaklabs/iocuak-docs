"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[1216],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,c(c({ref:n},l),{},{components:t})):r.createElement(m,c({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7475:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),c=["components"],a={sidebar_position:3,title:"Creating instances"},s=void 0,u={unversionedId:"the-container-object/creating-instances",id:"version-0.2.0/the-container-object/creating-instances",title:"Creating instances",description:"Once a service and all its dependencies are bound, its possible to create an instance if all the classes involved are properly decorated",source:"@site/versioned_docs/version-0.2.0/the-container-object/creating-instances.md",sourceDirName:"the-container-object",slug:"/the-container-object/creating-instances",permalink:"/iocuak-docs/docs/the-container-object/creating-instances",tags:[],version:"0.2.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Creating instances"},sidebar:"tutorialSidebar",previous:{title:"Binding a service",permalink:"/iocuak-docs/docs/the-container-object/binding-a-service"},next:{title:"Child containers",permalink:"/iocuak-docs/docs/the-container-object/child-containers"}},l={},p=[],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once a service and all its dependencies are bound, its possible to create an instance if all the classes involved are properly decorated"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Container, injectable } from '@cuaklabs/iocuak';\n\n@injectable()\nclass Dummy {}\n\nconst container: Container = Container.build();\ncontainer.bind(Dummy);\n\nconst dummyInstance: Dummy = container.get(Dummy);\n")))}f.isMDXComponent=!0}}]);