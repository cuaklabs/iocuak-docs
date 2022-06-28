"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[4191],{9613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=s(a),u=r,v=l["".concat(c,".").concat(u)]||l[u]||m[u]||i;return a?n.createElement(v,o(o({ref:t},p),{},{components:a})):n.createElement(v,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=l;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}l.displayName="MDXCreateElement"},2451:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=a(665),r=(a(9496),a(9613));const i={sidebar_position:2,title:"Metadata provider"},o=void 0,d={unversionedId:"api/metadata/metadata-provider",id:"version-0.3.0/api/metadata/metadata-provider",title:"Metadata provider",description:"The MetadataProvider class is provided to easily extract metadata of a given type",source:"@site/versioned_docs/version-0.3.0/api/metadata/metadata-provider.md",sourceDirName:"api/metadata",slug:"/api/metadata/metadata-provider",permalink:"/iocuak-docs/docs/api/metadata/metadata-provider",draft:!1,tags:[],version:"0.3.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Metadata provider"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/iocuak-docs/docs/api/metadata/introduction"}},c={},s=[{value:"<code>getBindingMetadata(type)</code>",id:"getbindingmetadatatype",level:2},{value:"<code>getClassMetadata(type)</code>",id:"getclassmetadatatype",level:2}],p={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MetadataProvider")," class is provided to easily extract metadata of a given type"),(0,r.kt)("h2",{id:"getbindingmetadatatype"},(0,r.kt)("inlineCode",{parentName:"h2"},"getBindingMetadata(type)")),(0,r.kt)("p",null,"Provides binding metadata associated to that type."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Values (bound by ",(0,r.kt)("inlineCode",{parentName:"p"},"Container.bindToValue()"),") do not have metadata directly associated. Those bindings can be accessed via ",(0,r.kt)("inlineCode",{parentName:"p"},"Container.getAllBindings()"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  inject,\n  injectable,\n  BindingScope,\n  ClassMetadata,\n  MetadataProvider,\n  TypeBinding,\n} from '@cuaklabs/iocuak';\n\nimport { dummyDummyServiceId, dummyFooServiceId } from 'some/path';\n\n@injectable({\n  id: dummyDummyServiceId,\n  scope: BindingScope.singleton,\n})\nclass Dummy {\n  @inject(dummyFooServiceId)\n  public foo: unknown;\n}\n\nconst metadataProvider: MetadataProvider = new MetadataProvider();\n\nconst typeBindingMetadata: TypeBinding<MetadataProvider, []> = metadataProvider.getBindingMetadata(Dummy);\n")),(0,r.kt)("h2",{id:"getclassmetadatatype"},(0,r.kt)("inlineCode",{parentName:"h2"},"getClassMetadata(type)")),(0,r.kt)("p",null,"Provides class metadata associated to that type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  inject,\n  injectable,\n  BindingScope,\n  ClassMetadata,\n  MetadataProvider,\n  TypeBinding,\n} from '@cuaklabs/iocuak';\n\nimport { dummyDummyServiceId, dummyFooServiceId } from 'some/path';\n\n@injectable({\n  id: dummyDummyServiceId,\n  scope: BindingScope.singleton,\n})\nclass Dummy {\n  @inject(dummyFooServiceId)\n  public foo: unknown;\n}\n\nconst metadataProvider: MetadataProvider = new MetadataProvider();\n\nconst classMetadata: ClassMetadata = metadataProvider.getClassMetadata(Dummy);\n")))}m.isMDXComponent=!0}}]);