"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[4381],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5375:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={sidebar_position:3,title:"The injectFromBase decorator"},s=void 0,u={unversionedId:"decorating-classes/injectFromBase-decorator",id:"version-0.1.0/decorating-classes/injectFromBase-decorator",title:"The injectFromBase decorator",description:"@injectabe and @inject metadata is not propagated to child classes. The purpose of @injectFromBase decorator exists for that purpose.",source:"@site/versioned_docs/version-0.1.0/decorating-classes/injectFromBase-decorator.md",sourceDirName:"decorating-classes",slug:"/decorating-classes/injectFromBase-decorator",permalink:"/iocuak-docs/docs/0.1.0/decorating-classes/injectFromBase-decorator",tags:[],version:"0.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"The injectFromBase decorator"},sidebar:"tutorialSidebar",previous:{title:"The inject decorator",permalink:"/iocuak-docs/docs/0.1.0/decorating-classes/inject-decorator"},next:{title:"Introduction",permalink:"/iocuak-docs/docs/0.1.0/the-container-object/introduction"}},l={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@injectabe")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@inject")," metadata is not propagated to child classes. The purpose of ",(0,a.kt)("inlineCode",{parentName:"p"},"@injectFromBase")," decorator exists for that purpose."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { inject, injectable } from '@cuaklabs/iocuak';\n\nimport { dummyFooServiceId, dummyBarServiceId } from 'some/path';\n\n@injectable()\nclass Dummy {\n  @inject(dummyFooServiceId)\n  public foo: unknown;\n}\n\n/*\n * @injectFromBase() allows DummyChild to have a foo property with\n * the same metadata as if decorated with @inject(dummyFooServiceId\n */\n\n@injectable()\n@injectFromBase()\nclass DummyChild extends Dummy {\n  @inject(dummyBarServiceId)\n  public bar: unknown;\n}\n\n")))}m.isMDXComponent=!0}}]);