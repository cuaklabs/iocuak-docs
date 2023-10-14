"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[9514,7807],{8754:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var a=n(9496),o=n(5924),l=n(9315),r=n(3988),c=n(7587),i=n(4520),s=n(5997),d=n(9377),m=n(7517),u=n(5417),b=n(9294),p=n(874);const h={backToTopButton:"backToTopButton_WskB",backToTopButtonShow:"backToTopButtonShow_wmpn"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(l.current?l.current=!1:a>=r?(c(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,p.S)((e=>{e.location.hash&&(l.current=!0,o(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",r.k.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var f=n(4841),g=n(3442),k=n(6045),v=n(3274),_=n(8925),C=n(7605);function I(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S={collapseSidebarButton:"collapseSidebarButton_C157",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_UcXS"};function N(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t},a.createElement(I,{className:S.collapseSidebarButtonIcon}))}var x=n(6158),T=n(8856);const Z=Symbol("EmptyContext"),B=a.createContext(Z);function w(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),l=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(B.Provider,{value:l},t)}var y=n(2604),A=n(6775),L=n(1385),P=n(4471);function H(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function F(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,v.L)(),f=function(e){const t=(0,P.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),g=(0,i._F)(t,l),k=(0,A.Mg)(h,l),{collapsed:_,setCollapsed:I}=(0,y.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:S,setExpandedItem:N}=function(){const e=(0,a.useContext)(B);if(e===Z)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),x=function(e){void 0===e&&(e=!_),N(e?null:s),I(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const l=(0,T.D9)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n,o])}({isActive:g,collapsed:_,updateCollapsed:x}),(0,a.useEffect)((()=>{b&&null!=S&&S!==s&&E&&I(!0)}),[b,S,s,I,E]),a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":_},p)},a.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},a.createElement(L.Z,(0,C.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{n?.(t),h?x(!1):(e.preventDefault(),x())}:()=>{n?.(t)},"aria-current":k?"page":void 0,"aria-expanded":b?!_:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),x()}})),a.createElement(y.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},a.createElement(Y,{items:m,tabIndex:_?-1:0,onItemClick:n,activePath:l,level:c+1})))}var M=n(640),W=n(7219);const D={menuExternalLink:"menuExternalLink_WDLZ"};function R(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i._F)(t,l),E=(0,M.Z)(m);return a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(L.Z,(0,C.Z)({className:(0,o.Z)("menu__link",!E&&D.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(W.Z,null)))}const V={menuHtmlItem:"menuHtmlItem__P0e"};function z(e){let{item:t,level:n,index:l}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(n),i&&[V.menuHtmlItem,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:c}})}function q(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(F,(0,C.Z)({item:t},n));case"html":return a.createElement(z,(0,C.Z)({item:t},n));default:return a.createElement(R,(0,C.Z)({item:t},n))}}function U(e){let{items:t,...n}=e;return a.createElement(w,null,t.map(((e,t)=>a.createElement(q,(0,C.Z)({key:t,item:e,index:t},n)))))}const Y=(0,a.memo)(U),G={menu:"menu_l1ou",menuWithAnnouncementBar:"menuWithAnnouncementBar_QXmP"};function Q(e){let{path:t,sidebar:n,className:l}=e;const c=function(){const{isActive:e}=(0,x.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",G.menu,c&&G.menuWithAnnouncementBar,l)},a.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(Y,{items:n,activePath:t,level:1})))}const K="sidebar_uk_I",X="sidebarWithHideableNavbar_roY8",O="sidebarHidden_GbHP",j="sidebarLogo_B87G";function J(e){let{path:t,sidebar:n,onCollapse:l,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,v.L)();return a.createElement("div",{className:(0,o.Z)(K,c&&X,r&&O)},c&&a.createElement(_.Z,{tabIndex:-1,className:j}),a.createElement(Q,{path:t,sidebar:n}),i&&a.createElement(N,{onClick:l}))}const $=a.memo(J);var ee=n(6783),te=n(9669);const ne=e=>{let{sidebar:t,path:n}=e;const l=(0,te.e)();return a.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(Y,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function ae(e){return a.createElement(ee.Zo,{component:ne,props:e})}const oe=a.memo(ae);function le(e){const t=(0,k.i)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement($,e),o&&a.createElement(oe,e))}const re={expandButton:"expandButton_mNIx",expandButtonIcon:"expandButtonIcon_pzbA"};function ce(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:re.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(I,{className:re.expandButtonIcon}))}const ie={docSidebarContainer:"docSidebarContainer_qwQk",docSidebarContainerHidden:"docSidebarContainerHidden_Bqzt",sidebarViewport:"sidebarViewport_uxQu"};function se(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function de(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:c}=(0,g.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),!i&&(0,f.n)()&&s(!0),l((e=>!e))}),[l,i]);return a.createElement("aside",{className:(0,o.Z)(r.k.docs.docSidebarContainer,ie.docSidebarContainer,n&&ie.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie.docSidebarContainer)&&n&&s(!0)}},a.createElement(se,null,a.createElement("div",{className:(0,o.Z)(ie.sidebarViewport,i&&ie.sidebarViewportHidden)},a.createElement(le,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&a.createElement(ce,{toggleSidebar:d}))))}const me={docMainContainer:"docMainContainer_Ia8V",docMainContainerEnhanced:"docMainContainerEnhanced_ubwm",docItemWrapperEnhanced:"docItemWrapperEnhanced_hEEI"};function ue(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,d.V)();return a.createElement("main",{className:(0,o.Z)(me.docMainContainer,(t||!l)&&me.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",me.docItemWrapper,t&&me.docItemWrapperEnhanced)},n))}const be={docPage:"docPage_kvSd",docsWrapper:"docsWrapper_KAb6","themedComponent--light":"themedComponent--light_F30c"};function pe(e){let{children:t}=e;const n=(0,d.V)(),[o,l]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:be.docsWrapper},a.createElement(E,null),a.createElement("div",{className:be.docPage},n&&a.createElement(de,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(ue,{hiddenSidebarContainer:o},t)))}var he=n(7807),Ee=n(9474);function fe(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(Ee.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(l.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function ge(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(he.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(fe,e),a.createElement(l.FG,{className:(0,o.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(pe,null,c)))))}},7807:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(9496),o=n(5417),l=n(9315),r=n(7517);function c(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},5997:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>r});var a=n(9496),o=n(8856);const l=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new o.i6("DocsVersionProvider");return e}}}]);