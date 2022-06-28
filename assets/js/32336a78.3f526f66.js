"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[5735],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(665),o=(n(9496),n(9613));const a={sidebar_position:4,title:"injectFromBase"},i=void 0,c={unversionedId:"api/injection/injectFromBase-decorator",id:"api/injection/injectFromBase-decorator",title:"injectFromBase",description:"@injectabe and @inject metadata are not propagated to child classes. @injectFromBase decorator exists for that purpose.",source:"@site/docs/api/injection/injectFromBase-decorator.md",sourceDirName:"api/injection",slug:"/api/injection/injectFromBase-decorator",permalink:"/iocuak-docs/docs/next/api/injection/injectFromBase-decorator",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"injectFromBase"},sidebar:"sidebar",previous:{title:"injectTag",permalink:"/iocuak-docs/docs/next/api/injection/inject-tag-decorator"},next:{title:"Introduction",permalink:"/iocuak-docs/docs/next/api/metadata/introduction"}},s={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@injectabe")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@inject")," metadata are not propagated to child classes. ",(0,o.kt)("inlineCode",{parentName:"p"},"@injectFromBase")," decorator exists for that purpose."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { inject, injectable } from '@cuaklabs/iocuak';\n\nimport { dummyFooServiceId, dummyBarServiceId } from 'some/path';\n\n@injectable()\nclass Dummy {\n  @inject(dummyFooServiceId)\n  public foo: unknown;\n}\n\n/*\n * @injectFromBase() allows DummyChild to have a foo property with\n * the same metadata as if decorated with @inject(dummyFooServiceId\n */\n\n@injectable()\n@injectFromBase()\nclass DummyChild extends Dummy {\n  @inject(dummyBarServiceId)\n  public bar: unknown;\n}\n\n")))}u.isMDXComponent=!0}}]);