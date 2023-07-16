"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[1391],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7366),i=(n(9496),n(9613));const a={sidebar_position:1,title:"Binding"},o=void 0,s={unversionedId:"concepts/binding",id:"version-0.5.0/concepts/binding",title:"Binding",description:"Represents a relation between an injectable element and a binding context. The binding contain things such as the scope of a service or the value of the service. Whenever a service is requested, its binding is read to know what to inject and how to inject the service. Any binding has these properties:",source:"@site/versioned_docs/version-0.5.0/concepts/binding.md",sourceDirName:"concepts",slug:"/concepts/binding",permalink:"/iocuak-docs/docs/concepts/binding",draft:!1,tags:[],version:"0.5.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Binding"},sidebar:"sidebar",previous:{title:"Loading modules from metadata",permalink:"/iocuak-docs/docs/tutorial/container-modules/loading-modules-from-metadata"},next:{title:"Class metadata",permalink:"/iocuak-docs/docs/concepts/class-metadata"}},c={},l=[{value:"TypeBinding",id:"typebinding",level:2},{value:"Binding scope",id:"binding-scope",level:3}],p={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents a relation between an injectable element and a binding context. The binding contain things such as the scope of a service or the value of the service. Whenever a service is requested, its binding is read to know what to inject and how to inject the service. Any binding has these properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"id"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Service id. Any attempt to create a service matching this service id is going to use this binding."),(0,i.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string ","|"," symbol")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"tags"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Tags associated. Any attempt to create a service matching one of these tags is going to use this binding."),(0,i.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string ","|"," symbol")))),(0,i.kt)("p",null,"There are two kinds of bindings:"),(0,i.kt)("h2",{id:"typebinding"},"TypeBinding"),(0,i.kt)("p",null,"A class based binding. A type binding relies on a class constructor to instantiate the service."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"scope"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Binding scope to determine wheter or not a service should be reused."),(0,i.kt)("td",{parentName:"tr",align:"center"},"BindingScope")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"type"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Class to be used to call its constructor"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Newable")))),(0,i.kt)("h3",{id:"binding-scope"},"Binding scope"),(0,i.kt)("p",null,"When the container creates an instance, it may reuse an existing instance instead if its scope allows it. These are the current scopes of a binding:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Transient: An instance of this service is never reused."),(0,i.kt)("li",{parentName:"ul"},"Request: An instance of this service is reused if service is requested under the same ",(0,i.kt)("inlineCode",{parentName:"li"},"Container.get")," request.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),": Given the services ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"C"),", both ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," services depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"C"),". In addition, ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," services depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," is injected on request scope, a request to the ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," service results in the same ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," instance being injected to both ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," services."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Singleton: An instance of this service is always reused.")))}m.isMDXComponent=!0}}]);