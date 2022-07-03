"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[9846],{9613:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var o=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(f,c(c({ref:t},l),{},{components:r})):o.createElement(f,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(665),n=(r(9496),r(9613));const a={sidebar_position:2,title:"The inject decorator"},c=void 0,i={unversionedId:"decorating-classes/inject-decorator",id:"version-0.2.0/decorating-classes/inject-decorator",title:"The inject decorator",description:"This decorator targets a property or a parameter and provides the service id associated to that property or parameter.",source:"@site/versioned_docs/version-0.2.0/decorating-classes/inject-decorator.md",sourceDirName:"decorating-classes",slug:"/decorating-classes/inject-decorator",permalink:"/iocuak-docs/docs/0.2.0/decorating-classes/inject-decorator",draft:!1,tags:[],version:"0.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"The inject decorator"},sidebar:"tutorialSidebar",previous:{title:"The injectable decorator",permalink:"/iocuak-docs/docs/0.2.0/decorating-classes/injectable-decorator"},next:{title:"The injectFromBase decorator",permalink:"/iocuak-docs/docs/0.2.0/decorating-classes/injectFromBase-decorator"}},s={},p=[],l={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This decorator targets a property or a parameter and provides the service id associated to that property or parameter."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { inject } from '@cuaklabs/iocuak';\n\nimport { dummyFooServiceId } from 'some/path';\n\nclass Dummy {\n  @inject(dummyFooServiceId)\n  public foo: unknown;\n}\n\n")),(0,n.kt)("p",null,"This way the IoC container knows the property ",(0,n.kt)("inlineCode",{parentName:"p"},"foo")," should be injected with the service associated to ",(0,n.kt)("inlineCode",{parentName:"p"},"dummyFooServiceId"),"."))}d.isMDXComponent=!0}}]);