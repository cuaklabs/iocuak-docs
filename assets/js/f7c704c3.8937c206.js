"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[941],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},402:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={sidebar_position:2,title:"The inject decorator"},s=void 0,p={unversionedId:"decorating-classes/inject-decorator",id:"version-0.1.0/decorating-classes/inject-decorator",title:"The inject decorator",description:"This decorator targets a property or a parameter and provides the service id associated to that property or parameter.",source:"@site/versioned_docs/version-0.1.0/decorating-classes/inject-decorator.md",sourceDirName:"decorating-classes",slug:"/decorating-classes/inject-decorator",permalink:"/iocuak-docs/docs/decorating-classes/inject-decorator",tags:[],version:"0.1.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"The inject decorator"},sidebar:"tutorialSidebar",previous:{title:"The injectable decorator",permalink:"/iocuak-docs/docs/decorating-classes/injectable-decorator"},next:{title:"The injectFromBase decorator",permalink:"/iocuak-docs/docs/decorating-classes/injectFromBase-decorator"}},u={},l=[],d={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This decorator targets a property or a parameter and provides the service id associated to that property or parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { inject } from '@cuaklabs/iocuak';\n\nimport { dummyFooServiceId } from 'some/path';\n\nclass Dummy {\n  @inject(dummyFooServiceId)\n  public foo: unknown;\n}\n\n")),(0,a.kt)("p",null,"This way the IoC container knows the property ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," should be injected with the service associated to ",(0,a.kt)("inlineCode",{parentName:"p"},"dummyFooServiceId"),"."))}f.isMDXComponent=!0}}]);