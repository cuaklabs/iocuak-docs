"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[1784],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),b=a,u=d["".concat(s,".").concat(b)]||d[b]||m[b]||o;return n?r.createElement(u,i(i({ref:t},p),{},{components:n})):r.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(1163),a=(n(9496),n(9613));const o={sidebar_position:1,title:"injectable"},i=void 0,c={unversionedId:"api/injection/injectable-decorator",id:"version-0.3.1/api/injection/injectable-decorator",title:"injectable",description:"This decorator targets a class and allows to provide options to set its binding.",source:"@site/versioned_docs/version-0.3.1/api/injection/injectable-decorator.md",sourceDirName:"api/injection",slug:"/api/injection/injectable-decorator",permalink:"/iocuak-docs/docs/0.3.1/api/injection/injectable-decorator",draft:!1,tags:[],version:"0.3.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"injectable"},sidebar:"sidebar",previous:{title:"Container API",permalink:"/iocuak-docs/docs/0.3.1/api/container"},next:{title:"inject",permalink:"/iocuak-docs/docs/0.3.1/api/injection/inject-decorator"}},s={},l=[],p={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This decorator targets a class and allows to provide options to set its binding."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { injectable, BindingScope } from '@cuaklabs/iocuak';\n\n/**\n * Foo is injectable on transient scope and its service id is the type Foo itself\n */\n@injectable()\nclass Foo {}\n\nconst bazSymbol: symbol = Symbol();\n\n/** \n * Bar is injectable on request scope. Its service id is the bazSymbol symbol.\n * It's associated to the providers tag\n */\n@injectable({\n  id: bazSymbol,\n  scope: BindingScope.request,\n  tags: [providers]\n})\nclass Baz {}\n")),(0,a.kt)("p",null,"The options parameter is described as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"serviceId"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Service id to associate"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string ","|"," symbol")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tags"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Tags to associate"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string ","|"," symbol ","|"," (number ","|"," string ","|"," symbol)[]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"scope"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Binding scope"),(0,a.kt)("td",{parentName:"tr",align:"center"},"BindingScope")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Consider ",(0,a.kt)("a",{parentName:"p",href:"../../concepts/binding"},"binding docs")," as reference.")))}m.isMDXComponent=!0}}]);