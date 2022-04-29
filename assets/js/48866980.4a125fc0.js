"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[6230],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9252:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:1,title:"The injectable decorator"},s=void 0,l={unversionedId:"decorating-classes/injectable-decorator",id:"decorating-classes/injectable-decorator",title:"The injectable decorator",description:"This decorator targets a class and allows to provide metadata about it.",source:"@site/docs/decorating-classes/injectable-decorator.md",sourceDirName:"decorating-classes",slug:"/decorating-classes/injectable-decorator",permalink:"/iocuak-docs/docs/next/decorating-classes/injectable-decorator",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"The injectable decorator"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/iocuak-docs/docs/next/introduction"},next:{title:"The inject decorator",permalink:"/iocuak-docs/docs/next/decorating-classes/inject-decorator"}},p={},d=[],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This decorator targets a class and allows to provide metadata about it."),(0,i.kt)("p",null,"First of all, let's talk about metadata we may provide:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Scope: when the container creates an instance, it may reuse an existing instance instead if its scope allows it. These are the current scopes of a binding:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Transient: An instance of this service is never reused.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request: An instance of this service is reused if service is requested under the same ",(0,i.kt)("inlineCode",{parentName:"p"},"Container.get")," request."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Example"),": Given the services ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"C"),", both ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," services depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"C"),". In addition, ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," services depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," is injected on request scope, a request to the ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," service results in the same ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," instance being injected to both ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," services.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Singleton: An instance of this service is allways reused."))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { injectable, BindingScope } from '@cuaklabs/iocuak';\n\n/**\n * Foo is injectable on transient scope and its service id is the type Foo itself\n */\n@injectable()\nclass Foo {}\n\nconst barSymbol: symbol = Symbol();\n\n/** \n * Bar is injectable on singleton scope. Its service id is the barSymbol symbol\n */\n@injectable({\n  id: barSymbol,\n  scope: BindingScope.singleton,\n})\nclass Bar {}\n\n")))}m.isMDXComponent=!0}}]);