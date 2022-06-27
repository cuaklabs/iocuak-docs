"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[3824],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),o=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=o(a),u=r,k=m["".concat(c,".").concat(u)]||m[u]||p[u]||l;return a?n.createElement(k,s(s({ref:t},d),{},{components:a})):n.createElement(k,s({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4093:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(665),r=(a(9496),a(9613));const l={sidebar_position:2,title:"Class metadata"},s=void 0,i={unversionedId:"concepts/class-metadata",id:"concepts/class-metadata",title:"Class metadata",description:"Represents a relation between an injectable element and its dependencies. Whenever a type service is attempted to be instantiated, it's class metadata is used to determine which services should be used as dependencies.",source:"@site/docs/concepts/class-metadata.md",sourceDirName:"concepts",slug:"/concepts/class-metadata",permalink:"/iocuak-docs/docs/next/concepts/class-metadata",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Class metadata"},sidebar:"tutorialSidebar",previous:{title:"Binding",permalink:"/iocuak-docs/docs/next/concepts/binding"},next:{title:"Introduction",permalink:"/iocuak-docs/docs/next/api/metadata-api/introduction"}},c={},o=[{value:"ClassElementMetadata",id:"classelementmetadata",level:2},{value:"ClassElementServiceIdMetadata",id:"classelementserviceidmetadata",level:3},{value:"ClassElementTagMetadataApi",id:"classelementtagmetadataapi",level:3}],d={toc:o};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Represents a relation between an injectable element and its dependencies. Whenever a type service is attempted to be instantiated, it's class metadata is used to determine which services should be used as dependencies."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"constructorArguments"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Constructor arguments metadata"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ClassElementMetadata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"properties"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Properties metadata."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Map<string ","|"," symbol, ClassElementMetadata>")))),(0,r.kt)("h2",{id:"classelementmetadata"},"ClassElementMetadata"),(0,r.kt)("p",null,"Class element metadata can be of two different kinds:"),(0,r.kt)("h3",{id:"classelementserviceidmetadata"},"ClassElementServiceIdMetadata"),(0,r.kt)("p",null,"Represents a service dependency"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Class element metadata type"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ClassElementMetadatApi.serviceId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Service id associated to the element"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string ","|"," symbol")))),(0,r.kt)("h3",{id:"classelementtagmetadataapi"},"ClassElementTagMetadataApi"),(0,r.kt)("p",null,"Represents services associated to a tag dependency"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Class element metadata type"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ClassElementMetadatApi.tag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Tag associated to the element"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string ","|"," symbol")))))}p.isMDXComponent=!0}}]);