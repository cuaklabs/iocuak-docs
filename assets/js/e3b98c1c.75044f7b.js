"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[8731],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,b=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(5882),r=(n(9496),n(9613));const i={sidebar_position:2,title:"Binding metadata"},o=void 0,l={unversionedId:"metadata-api/binding",id:"version-0.2.0/metadata-api/binding",title:"Binding metadata",description:"The Binding metadata provides a relation between an injectable element and a binding context. There are two kinds of Binding metadata:",source:"@site/versioned_docs/version-0.2.0/metadata-api/binding.md",sourceDirName:"metadata-api",slug:"/metadata-api/binding",permalink:"/iocuak-docs/docs/0.2.0/metadata-api/binding",draft:!1,tags:[],version:"0.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Binding metadata"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/iocuak-docs/docs/0.2.0/metadata-api/introduction"},next:{title:"ClassMetadata metadata",permalink:"/iocuak-docs/docs/0.2.0/metadata-api/class-metadata"}},c={},d=[],p={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Binding")," metadata provides a relation between an injectable element and a binding context. There are two kinds of ",(0,r.kt)("inlineCode",{parentName:"p"},"Binding")," metadata:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"TypeBinding")," metadata: establish a relation between:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"An injectable element: a type."),(0,r.kt)("li",{parentName:"ul"},"A binding context: a service id and a scope."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ValueBinding")," metadata: establish a relation between:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"An injectable element: an object."),(0,r.kt)("li",{parentName:"ul"},"A binding context: a service id.")))))}s.isMDXComponent=!0}}]);