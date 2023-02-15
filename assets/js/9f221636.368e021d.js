"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[2819],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,y=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"PIXI.StartupSystem.pixi_core",title:"Class: PIXI.StartupSystem",sidebar_label:"PIXI.StartupSystem",custom_edit_url:null},l=void 0,s={unversionedId:"api/classes/PIXI.StartupSystem.pixi_core",id:"api/classes/PIXI.StartupSystem.pixi_core",title:"Class: PIXI.StartupSystem",description:"@pixi/core.StartupSystem",source:"@site/docs/api/classes/PIXI.StartupSystem.pixi_core.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.StartupSystem.pixi_core",permalink:"/api/classes/PIXI.StartupSystem.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.StartupSystem.pixi_core",title:"Class: PIXI.StartupSystem",sidebar_label:"PIXI.StartupSystem",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.Spritesheet",permalink:"/api/classes/PIXI.Spritesheet.pixi_spritesheet"},next:{title:"PIXI.State",permalink:"/api/classes/PIXI.State.pixi_core"}},o={},p=[{value:"new PIXI()",id:"new-pixi",level:3},{value:"Methods",id:"methods",level:2},{value:"run: <span><code>(options: StartupOptions) -&gt; void</code></span>",id:"run-options-startupoptions---void",level:3},{value:"Parameters:",id:"parameters",level:4}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".StartupSystem"),(0,a.kt)("p",null,"A simple system responsible for initiating the renderer."),(0,a.kt)("p",null,"// TODO: @see"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"new-pixi"},"new PIXI()")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"run-options-startupoptions---void"},"run: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"(options",":"," StartupOptions) -",">"," void"))),(0,a.kt)("p",null,"It all starts here! This initiates every system, passing in the options for any system by name."),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"StartupOptions")),(0,a.kt)("td",{parentName:"tr",align:null},"the config for the renderer and all its systems"))))),(0,a.kt)("hr",null))}c.isMDXComponent=!0}}]);