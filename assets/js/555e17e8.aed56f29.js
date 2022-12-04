"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[6052],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(f,c(c({ref:t},p),{},{components:r})):o.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(7161),n=(r(9496),r(9613));const a={sidebar_position:2,title:"The inject decorator"},c=void 0,i={unversionedId:"tutorial/decorating-classes/inject-decorator",id:"tutorial/decorating-classes/inject-decorator",title:"The inject decorator",description:"This decorator targets a property or a parameter and provides the service associated.",source:"@site/docs/tutorial/decorating-classes/inject-decorator.md",sourceDirName:"tutorial/decorating-classes",slug:"/tutorial/decorating-classes/inject-decorator",permalink:"/iocuak-docs/docs/next/tutorial/decorating-classes/inject-decorator",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"The inject decorator"},sidebar:"sidebar",previous:{title:"The injectable decorator",permalink:"/iocuak-docs/docs/next/tutorial/decorating-classes/injectable-decorator"},next:{title:"Introduction",permalink:"/iocuak-docs/docs/next/tutorial/the-container-object/introduction"}},s={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This decorator targets a property or a parameter and provides the service associated."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { inject } from '@cuaklabs/iocuak';\n\nimport { dummyFooServiceId } from 'some/path';\n\nclass Dummy {\n  @inject(dummyFooServiceId)\n  public foo: unknown;\n}\n\n")),(0,n.kt)("p",null,"This way the IoC container knows the property ",(0,n.kt)("inlineCode",{parentName:"p"},"foo")," should be injected with the service associated to ",(0,n.kt)("inlineCode",{parentName:"p"},"dummyFooServiceId"),"."))}u.isMDXComponent=!0}}]);