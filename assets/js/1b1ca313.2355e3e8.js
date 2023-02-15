"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[1495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=l.createContext({}),o=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=o(e.components);return l.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=o(n),s=a,k=c["".concat(d,".").concat(s)]||c[s]||m[s]||r;return n?l.createElement(k,u(u({ref:t},p),{},{components:n})):l.createElement(k,u({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,u=new Array(r);u[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:a,u[1]=i;for(var o=2;o<r;o++)u[o]=n[o];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},45276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var l=n(87462),a=(n(67294),n(3905));const r={id:"PIXI.RoundedRectangle.pixi_math",title:"Class: PIXI.RoundedRectangle",sidebar_label:"PIXI.RoundedRectangle",custom_edit_url:null},u=void 0,i={unversionedId:"api/classes/PIXI.RoundedRectangle.pixi_math",id:"api/classes/PIXI.RoundedRectangle.pixi_math",title:"Class: PIXI.RoundedRectangle",description:"@pixi/math.RoundedRectangle",source:"@site/docs/api/classes/PIXI.RoundedRectangle.pixi_math.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.RoundedRectangle.pixi_math",permalink:"/api/classes/PIXI.RoundedRectangle.pixi_math",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.RoundedRectangle.pixi_math",title:"Class: PIXI.RoundedRectangle",sidebar_label:"PIXI.RoundedRectangle",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.RopeGeometry",permalink:"/api/classes/PIXI.RopeGeometry.pixi_mesh_extras"},next:{title:"PIXI.Runner",permalink:"/api/classes/PIXI.Runner.pixi_runner"}},d={},o=[{value:"new PIXI.RoundedRectangle: <span><code>(x: number, y: number, width: number, height: number, radius: number) </code></span>",id:"new-pixiroundedrectangle-x-number-y-number-width-number-height-number-radius-number-",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"height: <span><code>number</code></span>",id:"height-number",level:3},{value:"radius: <span><code>number</code></span>",id:"radius-number",level:3},{value:"type: <span><code>SHAPES.RREC</code></span>",id:"type-shapesrrec",level:3},{value:"width: <span><code>number</code></span>",id:"width-number",level:3},{value:"x: <span><code>number</code></span>",id:"x-number",level:3},{value:"y: <span><code>number</code></span>",id:"y-number",level:3},{value:"Methods",id:"methods",level:2},{value:"clone: <span><code>() -&gt; RoundedRectangle</code></span>",id:"clone----roundedrectangle",level:3},{value:"Returns:",id:"returns",level:4},{value:"contains: <span><code>(x: number, y: number) -&gt; boolean</code></span>",id:"contains-x-number-y-number---boolean",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns-1",level:4}],p={toc:o};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_math"},"@pixi/math"),".RoundedRectangle"),(0,a.kt)("p",null,"The Rounded Rectangle object is an area that has nice rounded corners, as indicated by its top-left corner point (x, y) and by its width and its height and its radius."),(0,a.kt)("p",null,"// TODO: @see"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"new-pixiroundedrectangle-x-number-y-number-width-number-height-number-radius-number-"},"new PIXI.RoundedRectangle: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"(x",":"," number, y",":"," number, width",":"," number, height",":"," number, radius",":"," number) "))),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{parentName:"tr",align:null},"The X coordinate of the upper-left corner of the rounded rectangle")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"y"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{parentName:"tr",align:null},"The Y coordinate of the upper-left corner of the rounded rectangle")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"width"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{parentName:"tr",align:null},"The overall width of this rounded rectangle")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"height"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{parentName:"tr",align:null},"The overall height of this rounded rectangle")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"radius"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"20")),(0,a.kt)("td",{parentName:"tr",align:null},"Controls the radius of the rounded corners"))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"height-number"},"height: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"0")))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"radius-number"},"radius: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"20")))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"type-shapesrrec"},"type: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"SHAPES.RREC"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"PIXI.SHAPES.RREC"))),(0,a.kt)("p",null,"The type of the object, mainly used to avoid ",(0,a.kt)("inlineCode",{parentName:"p"},"instanceof")," checks")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"width-number"},"width: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"0")))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"x-number"},"x: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"0")))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"y-number"},"y: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"0")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"clone----roundedrectangle"},"clone: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"() -",">"," RoundedRectangle"))),(0,a.kt)("p",null,"Creates a clone of this Rounded Rectangle."),(0,a.kt)("h4",{id:"returns"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"RoundedRectangle")),(0,a.kt)("td",{parentName:"tr",align:null},"* A copy of the rounded rectangle."))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"contains-x-number-y-number---boolean"},"contains: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"(x",":"," number, y",":"," number) -",">"," boolean"))),(0,a.kt)("p",null,"Checks whether the x and y coordinates given are contained within this Rounded Rectangle"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The X coordinate of the point to test.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"y"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The Y coordinate of the point to test.")))),(0,a.kt)("h4",{id:"returns-1"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"* Whether the x/y coordinates are within this Rounded Rectangle."))))),(0,a.kt)("hr",null))}c.isMDXComponent=!0}}]);