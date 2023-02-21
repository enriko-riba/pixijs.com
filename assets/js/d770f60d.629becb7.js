"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[8932],{3905:(t,e,r)=>{r.d(e,{Zo:()=>o,kt:()=>c});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),u=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},o=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),m=u(r),s=n,c=m["".concat(d,".").concat(s)]||m[s]||k[s]||l;return r?a.createElement(c,i(i({ref:e},o),{},{components:r})):a.createElement(c,i({ref:e},o))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=s;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[m]="string"==typeof t?t:n,i[1]=p;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},66368:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={id:"PIXI.ParticleRenderer.pixi_particle_container",title:"Class: PIXI.ParticleRenderer",sidebar_label:"PIXI.ParticleRenderer",custom_edit_url:null},i=void 0,p={unversionedId:"api/classes/PIXI.ParticleRenderer.pixi_particle_container",id:"api/classes/PIXI.ParticleRenderer.pixi_particle_container",title:"Class: PIXI.ParticleRenderer",description:"@pixi/particle-container.ParticleRenderer",source:"@site/docs/api/classes/PIXI.ParticleRenderer.pixi_particle_container.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.ParticleRenderer.pixi_particle_container",permalink:"/api/classes/PIXI.ParticleRenderer.pixi_particle_container",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.ParticleRenderer.pixi_particle_container",title:"Class: PIXI.ParticleRenderer",sidebar_label:"PIXI.ParticleRenderer",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.ParticleContainer",permalink:"/api/classes/PIXI.ParticleContainer.pixi_particle_container"},next:{title:"PIXI.PlaneGeometry",permalink:"/api/classes/PIXI.PlaneGeometry.pixi_mesh_extras"}},d={},u=[{value:"Constructor:",id:"constructor",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Extends",id:"extends",level:2},{value:"Members",id:"members",level:2},{value:"shader",id:"shader",level:3},{value:"state",id:"state",level:3},{value:"renderer",id:"renderer",level:3},{value:"Methods",id:"methods",level:2},{value:"destroy",id:"destroy",level:3},{value:"flush",id:"flush",level:3},{value:"render",id:"render",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"start",id:"start",level:3},{value:"stop",id:"stop",level:3},{value:"uploadPosition",id:"uploadposition",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"uploadRotation",id:"uploadrotation",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"uploadTint",id:"uploadtint",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"uploadUvs",id:"uploaduvs",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"uploadVertices",id:"uploadvertices",level:3},{value:"Parameters:",id:"parameters-6",level:4}],o={toc:u};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("div",{class:"package-name"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../modules/pixi_particle_container"},"@pixi/particle-container"),".ParticleRenderer")),(0,n.kt)("p",null,"Renderer for Particles that is designer for speed over feature set."),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"constructor"},"Constructor:"),(0,n.kt)("h4",null,(0,n.kt)("code",null,"new PIXI.ParticleRenderer(renderer: Renderer) ")),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"renderer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Renderer")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null)),(0,n.kt)("td",{parentName:"tr",align:null},"The renderer this sprite batch works for."))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"extends"},"Extends"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../classes/PIXI.ObjectRenderer.pixi_core"},"PIXI.ObjectRenderer"))),(0,n.kt)("h2",{id:"members"},"Members"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"shader"},"shader"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"Shader")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," The default shader that is used if a sprite doesn't have a more specific one.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"state"},"state"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"State")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," The WebGL state in which this renderer will work.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"renderer"},"renderer"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"Renderer")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," The renderer this manager works for.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"destroy"},"destroy"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"() -",">"," void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Destroys the ParticleRenderer.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"flush"},"flush"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"() -",">"," void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Stub method that should be used to empty the current batch by rendering objects now.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"render"},"render"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"(container",":"," ParticleContainer) -",">"," void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Renders the particle container object."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"container"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"ParticleContainer")),(0,n.kt)("td",{parentName:"tr",align:null},"The container to render using this ParticleRenderer."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"start"},"start"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"() -",">"," void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Stub method that initializes any state required before rendering starts. It is different from the ",(0,n.kt)("inlineCode",{parentName:"p"},"prerender"),"signal, which occurs every frame, in that it is called whenever an object requests ",(0,n.kt)("em",{parentName:"p"},"this")," renderer specifically.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"stop"},"stop"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"() -",">"," void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Stops the renderer. It should free up any state and become dormant.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"uploadposition"},"uploadPosition"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"(children",":"," Sprite[], startIndex",":"," number, amount",":"," number, array",":"," number[], stride",":"," number, offset",":"," number) -",">"," void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Uploads the position."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"children"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Sprite[]")),(0,n.kt)("td",{parentName:"tr",align:null},"the array of sprites to render")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"startIndex"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"the index to start from in the children array")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"amount"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"the amount of children that will have their positions uploaded")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"array"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number[]")),(0,n.kt)("td",{parentName:"tr",align:null},"The vertices to upload.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stride"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"Stride to use for iteration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offset"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"Offset to start at."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"uploadrotation"},"uploadRotation"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"(children",":"," Sprite[], startIndex",":"," number, amount",":"," number, array",":"," number[], stride",":"," number, offset",":"," number) -",">"," void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Uploads the rotation."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"children"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Sprite[]")),(0,n.kt)("td",{parentName:"tr",align:null},"the array of sprites to render")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"startIndex"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"the index to start from in the children array")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"amount"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"the amount of children that will have their rotation uploaded")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"array"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number[]")),(0,n.kt)("td",{parentName:"tr",align:null},"The vertices to upload.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stride"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"Stride to use for iteration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offset"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"Offset to start at."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"uploadtint"},"uploadTint"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"(children",":"," Sprite[], startIndex",":"," number, amount",":"," number, array",":"," number[], stride",":"," number, offset",":"," number) -",">"," void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Uploads the tint."),(0,n.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"children"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Sprite[]")),(0,n.kt)("td",{parentName:"tr",align:null},"the array of sprites to render")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"startIndex"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"the index to start from in the children array")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"amount"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"the amount of children that will have their rotation uploaded")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"array"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number[]")),(0,n.kt)("td",{parentName:"tr",align:null},"The vertices to upload.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stride"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"Stride to use for iteration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offset"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"Offset to start at."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"uploaduvs"},"uploadUvs"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"(children",":"," Sprite[], startIndex",":"," number, amount",":"," number, array",":"," number[], stride",":"," number, offset",":"," number) -",">"," void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Uploads the UVs."),(0,n.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"children"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Sprite[]")),(0,n.kt)("td",{parentName:"tr",align:null},"the array of sprites to render")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"startIndex"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"the index to start from in the children array")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"amount"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"the amount of children that will have their rotation uploaded")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"array"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number[]")),(0,n.kt)("td",{parentName:"tr",align:null},"The vertices to upload.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stride"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"Stride to use for iteration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offset"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"Offset to start at."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"uploadvertices"},"uploadVertices"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"(children",":"," Sprite[], startIndex",":"," number, amount",":"," number, array",":"," number[], stride",":"," number, offset",":"," number) -",">"," void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Uploads the vertices."),(0,n.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"children"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Sprite[]")),(0,n.kt)("td",{parentName:"tr",align:null},"the array of sprites to render")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"startIndex"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"the index to start from in the children array")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"amount"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"the amount of children that will have their vertices uploaded")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"array"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number[]")),(0,n.kt)("td",{parentName:"tr",align:null},"The vertices to upload.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stride"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"Stride to use for iteration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offset"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"Offset to start at."))))),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);