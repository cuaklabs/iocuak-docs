"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[8129],{9613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),o=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=o(a),u=r,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||s;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var o=2;o<s;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3405:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var n=a(4778),r=(a(9496),a(9613));const s={sidebar_position:2,title:"Class metadata"},l=void 0,i={unversionedId:"concepts/class-metadata",id:"version-0.3.1/concepts/class-metadata",title:"Class metadata",description:"Represents a relation between an injectable element and its dependencies. Whenever a type service is attempted to be instantiated, it's class metadata is used to determine which services should be used as dependencies.",source:"@site/versioned_docs/version-0.3.1/concepts/class-metadata.md",sourceDirName:"concepts",slug:"/concepts/class-metadata",permalink:"/iocuak-docs/docs/0.3.1/concepts/class-metadata",draft:!1,tags:[],version:"0.3.1",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Class metadata"},sidebar:"sidebar",previous:{title:"Binding",permalink:"/iocuak-docs/docs/0.3.1/concepts/binding"},next:{title:"Container API",permalink:"/iocuak-docs/docs/0.3.1/api/container"}},c={},o=[{value:"ClassElementMetadata",id:"classelementmetadata",level:2},{value:"ClassElementServiceIdMetadata",id:"classelementserviceidmetadata",level:3},{value:"ClassElementTagMetadataApi",id:"classelementtagmetadataapi",level:3}],p={toc:o},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Represents a relation between an injectable element and its dependencies. Whenever a type service is attempted to be instantiated, it's class metadata is used to determine which services should be used as dependencies."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"constructorArguments"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Constructor arguments metadata"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ClassElementMetadata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"properties"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Properties metadata."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Map<string ","|"," symbol, ClassElementMetadata>")))),(0,r.kt)("h2",{id:"classelementmetadata"},"ClassElementMetadata"),(0,r.kt)("p",null,"Class element metadata can be of two different kinds:"),(0,r.kt)("h3",{id:"classelementserviceidmetadata"},"ClassElementServiceIdMetadata"),(0,r.kt)("p",null,"Represents a service dependency"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Class element metadata type"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ClassElementMetadatApi.serviceId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Service id associated to the element"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string ","|"," symbol")))),(0,r.kt)("h3",{id:"classelementtagmetadataapi"},"ClassElementTagMetadataApi"),(0,r.kt)("p",null,"Represents services associated to a tag dependency"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Class element metadata type"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ClassElementMetadatApi.tag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Tag associated to the element"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string ","|"," symbol")))))}m.isMDXComponent=!0}}]);