"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[3918],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(6600),a=(n(9496),n(9613));const i={sidebar_position:1,title:"The injectable decorator"},o=void 0,s={unversionedId:"decorating-classes/injectable-decorator",id:"version-0.2.0/decorating-classes/injectable-decorator",title:"The injectable decorator",description:"This decorator targets a class and allows to provide metadata about it.",source:"@site/versioned_docs/version-0.2.0/decorating-classes/injectable-decorator.md",sourceDirName:"decorating-classes",slug:"/decorating-classes/injectable-decorator",permalink:"/iocuak-docs/docs/0.2.0/decorating-classes/injectable-decorator",draft:!1,tags:[],version:"0.2.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"The injectable decorator"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/iocuak-docs/docs/0.2.0/introduction"},next:{title:"The inject decorator",permalink:"/iocuak-docs/docs/0.2.0/decorating-classes/inject-decorator"}},c={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This decorator targets a class and allows to provide metadata about it."),(0,a.kt)("p",null,"First of all, let's talk about metadata we may provide:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Scope: when the container creates an instance, it may reuse an existing instance instead if its scope allows it. These are the current scopes of a binding:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Transient: An instance of this service is never reused.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Request: An instance of this service is reused if service is requested under the same ",(0,a.kt)("inlineCode",{parentName:"p"},"Container.get")," request."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Example"),": Given the services ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"B")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"C"),", both ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"B")," services depends on ",(0,a.kt)("inlineCode",{parentName:"p"},"C"),". In addition, ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," services depends on ",(0,a.kt)("inlineCode",{parentName:"p"},"B"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"C")," is injected on request scope, a request to the ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," service results in the same ",(0,a.kt)("inlineCode",{parentName:"p"},"C")," instance being injected to both ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"B")," services.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Singleton: An instance of this service is always reused."))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { injectable, BindingScope } from '@cuaklabs/iocuak';\n\n/**\n * Foo is injectable on transient scope and its service id is the type Foo itself\n */\n@injectable()\nclass Foo {}\n\nconst barSymbol: symbol = Symbol();\n\n/** \n * Bar is injectable on singleton scope. Its service id is the barSymbol symbol\n */\n@injectable({\n  id: barSymbol,\n  scope: BindingScope.singleton,\n})\nclass Bar {}\n\n")))}d.isMDXComponent=!0}}]);