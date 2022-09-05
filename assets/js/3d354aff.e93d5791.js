"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[8141],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=o,m=u["".concat(s,".").concat(b)]||u[b]||p[b]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(6600),o=(n(9496),n(9613));const a={sidebar_position:1,title:"The injectable decorator"},i=void 0,c={unversionedId:"tutorial/decorating-classes/injectable-decorator",id:"tutorial/decorating-classes/injectable-decorator",title:"The injectable decorator",description:"This decorator targets a class and allows to provide options to set its binding.",source:"@site/docs/tutorial/decorating-classes/injectable-decorator.md",sourceDirName:"tutorial/decorating-classes",slug:"/tutorial/decorating-classes/injectable-decorator",permalink:"/iocuak-docs/docs/next/tutorial/decorating-classes/injectable-decorator",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"The injectable decorator"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/iocuak-docs/docs/next/tutorial/introduction"},next:{title:"The inject decorator",permalink:"/iocuak-docs/docs/next/tutorial/decorating-classes/inject-decorator"}},s={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This decorator targets a class and allows to provide options to set its binding."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { injectable, BindingScope } from '@cuaklabs/iocuak';\n\n/**\n * Foo is injectable on transient scope and its service id is the type Foo itself\n */\n@injectable()\nclass Foo {}\n\nconst barSymbol: symbol = Symbol();\n\n/** \n * Bar is injectable on singleton scope. Its service id is the barSymbol symbol\n */\n@injectable({\n  id: barSymbol,\n  scope: BindingScope.singleton,\n})\nclass Bar {}\n\nconst bazSymbol: symbol = Symbol();\n\n/** \n * Bar is injectable on request scope. Its service id is the bazSymbol symbol.\n * It's associated to the providers tag\n */\n@injectable({\n  id: bazSymbol,\n  scope: BindingScope.request,\n  tags: [providers]\n})\nclass Baz {}\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Consider ",(0,o.kt)("a",{parentName:"p",href:"../../concepts/binding"},"binding docs")," as reference.")))}p.isMDXComponent=!0}}]);