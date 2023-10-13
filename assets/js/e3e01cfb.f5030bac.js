"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[6024],{9613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),l=p(a),u=r,y=l["".concat(c,".").concat(u)]||l[u]||m[u]||i;return a?n.createElement(y,o(o({ref:t},s),{},{components:a})):n.createElement(y,o({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[l]="string"==typeof e?e:r,o[1]=d;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=a(7605),r=(a(9496),a(9613));const i={sidebar_position:2,title:"Metadata provider"},o=void 0,d={unversionedId:"api/metadata/metadata-provider",id:"version-0.4.0/api/metadata/metadata-provider",title:"Metadata provider",description:"The MetadataProvider class is provided to easily extract metadata of a given type",source:"@site/versioned_docs/version-0.4.0/api/metadata/metadata-provider.md",sourceDirName:"api/metadata",slug:"/api/metadata/metadata-provider",permalink:"/iocuak-docs/docs/0.4.0/api/metadata/metadata-provider",draft:!1,tags:[],version:"0.4.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Metadata provider"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/iocuak-docs/docs/0.4.0/api/metadata/introduction"}},c={},p=[{value:"<code>getBindingMetadata(type)</code>",id:"getbindingmetadatatype",level:2},{value:"<code>getClassMetadata(type)</code>",id:"getclassmetadatatype",level:2}],s={toc:p},l="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MetadataProvider")," class is provided to easily extract metadata of a given type"),(0,r.kt)("h2",{id:"getbindingmetadatatype"},(0,r.kt)("inlineCode",{parentName:"h2"},"getBindingMetadata(type)")),(0,r.kt)("p",null,"Provides binding metadata associated to that type."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Values (bound by ",(0,r.kt)("inlineCode",{parentName:"p"},"Container.bindToValue()"),") do not have metadata directly associated. Those bindings can be accessed via ",(0,r.kt)("inlineCode",{parentName:"p"},"Container.getAllBindings()"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  inject,\n  injectable,\n  BindingScope,\n  ClassMetadata,\n  MetadataProvider,\n  TypeBinding,\n} from '@cuaklabs/iocuak';\n\nimport { dummyDummyServiceId, dummyFooServiceId } from 'some/path';\n\n@injectable({\n  id: dummyDummyServiceId,\n  scope: BindingScope.singleton,\n})\nclass Dummy {\n  @inject(dummyFooServiceId)\n  public foo: unknown;\n}\n\nconst metadataProvider: MetadataProvider = new MetadataProvider();\n\nconst typeBindingMetadata: TypeBinding<MetadataProvider, []> = metadataProvider.getBindingMetadata(Dummy);\n")),(0,r.kt)("h2",{id:"getclassmetadatatype"},(0,r.kt)("inlineCode",{parentName:"h2"},"getClassMetadata(type)")),(0,r.kt)("p",null,"Provides class metadata associated to that type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  inject,\n  injectable,\n  BindingScope,\n  ClassMetadata,\n  MetadataProvider,\n  TypeBinding,\n} from '@cuaklabs/iocuak';\n\nimport { dummyDummyServiceId, dummyFooServiceId } from 'some/path';\n\n@injectable({\n  id: dummyDummyServiceId,\n  scope: BindingScope.singleton,\n})\nclass Dummy {\n  @inject(dummyFooServiceId)\n  public foo: unknown;\n}\n\nconst metadataProvider: MetadataProvider = new MetadataProvider();\n\nconst classMetadata: ClassMetadata = metadataProvider.getClassMetadata(Dummy);\n")))}m.isMDXComponent=!0}}]);