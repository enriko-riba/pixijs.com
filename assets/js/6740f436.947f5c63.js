"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[2861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),k=l,v=s["".concat(i,".").concat(k)]||s[k]||c[k]||r;return n?a.createElement(v,d(d({ref:t},u),{},{components:n})):a.createElement(v,d({ref:t},u))}));function v(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,d=new Array(r);d[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:l,d[1]=o;for(var p=2;p<r;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},71245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={id:"PIXI.FederatedEvent.pixi_events",title:"Class: PIXI.FederatedEvent",sidebar_label:"PIXI.FederatedEvent",custom_edit_url:null},d=void 0,o={unversionedId:"api/classes/PIXI.FederatedEvent.pixi_events",id:"api/classes/PIXI.FederatedEvent.pixi_events",title:"Class: PIXI.FederatedEvent",description:"@pixi/events.FederatedEvent",source:"@site/docs/api/classes/PIXI.FederatedEvent.pixi_events.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.FederatedEvent.pixi_events",permalink:"/api/classes/PIXI.FederatedEvent.pixi_events",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.FederatedEvent.pixi_events",title:"Class: PIXI.FederatedEvent",sidebar_label:"PIXI.FederatedEvent",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.FXAAFilter",permalink:"/api/classes/PIXI.FXAAFilter.pixi_filter_fxaa"},next:{title:"PIXI.FederatedMouseEvent",permalink:"/api/classes/PIXI.FederatedMouseEvent.pixi_events"}},i={},p=[{value:"new PIXI.FederatedEvent: <span><code>(manager: EventBoundary) </code></span>",id:"new-pixifederatedevent-manager-eventboundary-",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"bubbles: <span><code>boolean</code></span>",id:"bubbles-boolean",level:3},{value:"cancelable: <span><code>boolean</code></span>",id:"cancelable-boolean",level:3},{value:'cancelBubble: <span><code>boolean</code></span><span class="deprecated-tag"> Deprecated: since 7.0.0</span>',id:"cancelbubble-boolean-deprecated-since-700",level:3},{value:"composed: <span><code>boolean</code></span>",id:"composed-boolean",level:3},{value:"currentTarget: <span><code>FederatedEventTarget</code></span>",id:"currenttarget-federatedeventtarget",level:3},{value:'data: <span><code>this</code></span><span class="deprecated-tag"> Deprecated: since 7.0.0</span>',id:"data-this-deprecated-since-700",level:3},{value:"defaultPrevented: <span><code>boolean</code></span>",id:"defaultprevented-boolean",level:3},{value:"detail: <span><code>number</code></span>",id:"detail-number",level:3},{value:"eventPhase: <span><code>unknown</code></span>",id:"eventphase-unknown",level:3},{value:"isTrusted: <span><code>boolean</code></span>",id:"istrusted-boolean",level:3},{value:"layer: <span><code>Point</code></span>",id:"layer-point",level:3},{value:"layerX: <span><code>number</code></span>",id:"layerx-number",level:3},{value:"layerY: <span><code>number</code></span>",id:"layery-number",level:3},{value:"manager: <span><code>EventBoundary</code></span>",id:"manager-eventboundary",level:3},{value:"nativeEvent: <span><code>N</code></span>",id:"nativeevent-n",level:3},{value:"originalEvent: <span><code>FederatedEvent&lt;N&gt;</code></span>",id:"originalevent-federatedeventn",level:3},{value:"page: <span><code>Point</code></span>",id:"page-point",level:3},{value:"pageX: <span><code>number</code></span>",id:"pagex-number",level:3},{value:"pageY: <span><code>number</code></span>",id:"pagey-number",level:3},{value:"path: <span><code>FederatedEventTarget[]</code></span>",id:"path-federatedeventtarget",level:3},{value:"propagationImmediatelyStopped: <span><code>boolean</code></span>",id:"propagationimmediatelystopped-boolean",level:3},{value:"propagationStopped: <span><code>boolean</code></span>",id:"propagationstopped-boolean",level:3},{value:'returnValue: <span><code>boolean</code></span><span class="deprecated-tag"> Deprecated: since 7.0.0</span>',id:"returnvalue-boolean-deprecated-since-700",level:3},{value:'srcElement: <span><code>EventTarget</code></span><span class="deprecated-tag"> Deprecated: since 7.0.0</span>',id:"srcelement-eventtarget-deprecated-since-700",level:3},{value:"target: <span><code>FederatedEventTarget</code></span>",id:"target-federatedeventtarget",level:3},{value:"timeStamp: <span><code>number</code></span>",id:"timestamp-number",level:3},{value:"type: <span><code>string</code></span>",id:"type-string",level:3},{value:"view: <span><code>WindowProxy</code></span>",id:"view-windowproxy",level:3},{value:'which: <span><code>number</code></span><span class="deprecated-tag"> Deprecated: since 7.0.0</span>',id:"which-number-deprecated-since-700",level:3},{value:"Methods",id:"methods",level:2},{value:"composedPath: <span><code>() -&gt; FederatedEventTarget[]</code></span>",id:"composedpath----federatedeventtarget",level:3},{value:"Returns:",id:"returns",level:4},{value:'initEvent: <span><code>(_type: string, _bubbles: boolean, _cancelable: boolean) -&gt; void</code></span><span class="deprecated-tag"> Deprecated: </span>',id:"initevent-_type-string-_bubbles-boolean-_cancelable-boolean---void-deprecated-",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:'initUIEvent: <span><code>(_typeArg: string, _bubblesArg: boolean, _cancelableArg: boolean, _viewArg: Window | null, _detailArg: number) -&gt; void</code></span><span class="deprecated-tag"> Deprecated: </span>',id:"inituievent-_typearg-string-_bubblesarg-boolean-_cancelablearg-boolean-_viewarg-window--null-_detailarg-number---void-deprecated-",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"preventDefault: <span><code>() -&gt; void</code></span>",id:"preventdefault----void",level:3},{value:"stopImmediatePropagation: <span><code>() -&gt; void</code></span>",id:"stopimmediatepropagation----void",level:3},{value:"stopPropagation: <span><code>() -&gt; void</code></span>",id:"stoppropagation----void",level:3}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../modules/pixi_events"},"@pixi/events"),".FederatedEvent"),(0,l.kt)("p",null,'An DOM-compatible synthetic event implementation that is "forwarded" on behalf of an original FederatedEvent or native ',(0,l.kt)("a",{parentName:"p",href:"https://dom.spec.whatwg.org/#event"},"Event"),"."),(0,l.kt)("p",null,"// TODO: @see"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"new-pixifederatedevent-manager-eventboundary-"},"new PIXI.FederatedEvent: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(manager",":"," EventBoundary) "))),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manager"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"EventBoundary")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null)),(0,l.kt)("td",{parentName:"tr",align:null},"The event boundary which manages this event. Propagation can only occur within the boundary's jurisdiction."))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"members"},"Members"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"bubbles-boolean"},"bubbles: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"boolean"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"true"))),(0,l.kt)("p",null,"Flags whether this event bubbles. This will take effect only if it is set before propagation.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"cancelable-boolean"},"cancelable: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"boolean"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"false"))),(0,l.kt)("p",null,"Flags whether this event can be canceled using ",(0,l.kt)("a",{parentName:"p",href:"../classes/PIXI.FederatedEvent.pixi_events#preventDefault"},"PIXI.FederatedEvent.preventDefault"),". This is always false (for now).")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"cancelbubble-boolean-deprecated-since-700"},"cancelBubble: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("span",{class:"deprecated-tag"}," Deprecated: since 7.0.0")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"true")))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"composed-boolean"},"composed: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"boolean"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"false"))),(0,l.kt)("p",null,"Flag added for compatibility with DOM ",(0,l.kt)("inlineCode",{parentName:"p"},"Event"),". It is not used in the Federated Events API.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"currenttarget-federatedeventtarget"},"currentTarget: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"FederatedEventTarget"))),(0,l.kt)("p",null,"The listeners of the event target that are being notified.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"data-this-deprecated-since-700"},"data: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"this")),(0,l.kt)("span",{class:"deprecated-tag"}," Deprecated: since 7.0.0")),(0,l.kt)("p",null,"Fallback for the deprecated ","@","code","{","PIXI.InteractionEvent.data","}",".")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"defaultprevented-boolean"},"defaultPrevented: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"boolean"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"false"))),(0,l.kt)("p",null,"Flags whether the default response of the user agent was prevent through this event.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"detail-number"},"detail: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("p",null,"Event-specific detail")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"eventphase-unknown"},"eventPhase: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"unknown"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"{","@","link PIXI.FederatedEvent.NONE","}"))),(0,l.kt)("p",null,"The propagation phase.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"istrusted-boolean"},"isTrusted: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"boolean"))),(0,l.kt)("p",null,"Flags whether this is a user-trusted event")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"layer-point"},"layer: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"Point"))),(0,l.kt)("p",null,"The coordinates of the evnet relative to the nearest DOM layer. This is a non-standard property.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"layerx-number"},"layerX: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number")))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"layery-number"},"layerY: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number")))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"manager-eventboundary"},"manager: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"EventBoundary"))),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"../classes/PIXI.EventBoundary.pixi_events"},"PIXI.EventBoundary")," that manages this event. Null for root events.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"nativeevent-n"},"nativeEvent: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"N"))),(0,l.kt)("p",null,"The native event that caused the foremost original event.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"originalevent-federatedeventn"},"originalEvent: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"FederatedEvent","<","N",">"))),(0,l.kt)("p",null,"The original event that caused this event, if any.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"page-point"},"page: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"Point"))),(0,l.kt)("p",null,"The coordinates of the event relative to the DOM document. This is a non-standard property.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"pagex-number"},"pageX: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number")))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"pagey-number"},"pageY: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number")))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"path-federatedeventtarget"},"path: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"FederatedEventTarget[]"))),(0,l.kt)("p",null,"The composed path of the event's propagation. The ",(0,l.kt)("inlineCode",{parentName:"p"},"target")," is at the end.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"propagationimmediatelystopped-boolean"},"propagationImmediatelyStopped: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"boolean"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"false"))),(0,l.kt)("p",null,"Flags whether propagation was immediately stopped.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"propagationstopped-boolean"},"propagationStopped: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"boolean"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"false"))),(0,l.kt)("p",null,"Flags whether propagation was stopped.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"returnvalue-boolean-deprecated-since-700"},"returnValue: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("span",{class:"deprecated-tag"}," Deprecated: since 7.0.0"))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"srcelement-eventtarget-deprecated-since-700"},"srcElement: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"EventTarget")),(0,l.kt)("span",{class:"deprecated-tag"}," Deprecated: since 7.0.0"))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"target-federatedeventtarget"},"target: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"FederatedEventTarget"))),(0,l.kt)("p",null,"The event target that this will be dispatched to.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"timestamp-number"},"timeStamp: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("p",null,"The timestamp of when the event was created.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"type-string"},"type: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"string"))),(0,l.kt)("p",null,"The type of event, e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},'"mouseup"'),".")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"view-windowproxy"},"view: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"WindowProxy"))),(0,l.kt)("p",null,"The global Window object.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"which-number-deprecated-since-700"},"which: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number")),(0,l.kt)("span",{class:"deprecated-tag"}," Deprecated: since 7.0.0")),(0,l.kt)("p",null,"Not supported.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"composedpath----federatedeventtarget"},"composedPath: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"() -",">"," FederatedEventTarget[]"))),(0,l.kt)("p",null,"The propagation path for this event. Alias for ",(0,l.kt)("a",{parentName:"p",href:"../classes/PIXI.EventBoundary.pixi_events#propagationPath"},"PIXI.EventBoundary.propagationPath"),"."),(0,l.kt)("h4",{id:"returns"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"FederatedEventTarget[]")),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"initevent-_type-string-_bubbles-boolean-_cancelable-boolean---void-deprecated-"},"initEvent: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(_type",":"," string, _bubbles",":"," boolean, _cancelable",":"," boolean) -",">"," void")),(0,l.kt)("span",{class:"deprecated-tag"}," Deprecated: ")),(0,l.kt)("p",null,"Unimplemented method included for implementing the DOM interface ",(0,l.kt)("inlineCode",{parentName:"p"},"Event"),". It will throw an ",(0,l.kt)("inlineCode",{parentName:"p"},"Error"),"."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_bubbles"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_cancelable"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"inituievent-_typearg-string-_bubblesarg-boolean-_cancelablearg-boolean-_viewarg-window--null-_detailarg-number---void-deprecated-"},"initUIEvent: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(_typeArg",":"," string, _bubblesArg",":"," boolean, _cancelableArg",":"," boolean, _viewArg",":"," Window ","|"," null, _detailArg",":"," number) -",">"," void")),(0,l.kt)("span",{class:"deprecated-tag"}," Deprecated: ")),(0,l.kt)("p",null,"Unimplemented method included for implementing the DOM interface ",(0,l.kt)("inlineCode",{parentName:"p"},"UIEvent"),". It will throw an ",(0,l.kt)("inlineCode",{parentName:"p"},"Error"),"."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_typeArg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_bubblesArg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_cancelableArg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_viewArg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Window ","|"," null")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_detailArg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"preventdefault----void"},"preventDefault: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"() -",">"," void"))),(0,l.kt)("p",null,"Prevent default behavior of PixiJS and the user agent.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"stopimmediatepropagation----void"},"stopImmediatePropagation: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"() -",">"," void"))),(0,l.kt)("p",null,"Stop this event from propagating to any addition listeners, including on the ",(0,l.kt)("a",{parentName:"p",href:"../interfaces/PIXI.FederatedEventTarget.pixi_events#currentTarget"},"currentTarget")," and also the following event targets on the propagation path.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"stoppropagation----void"},"stopPropagation: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"() -",">"," void"))),(0,l.kt)("p",null,"Stop this event from propagating to the next ",(0,l.kt)("a",{parentName:"p",href:"../interfaces/PIXI.FederatedEventTarget.pixi_events"},"PIXI.FederatedEventTarget"),". The rest of the listeners on the ",(0,l.kt)("a",{parentName:"p",href:"../interfaces/PIXI.FederatedEventTarget.pixi_events#currentTarget"},"currentTarget")," will still be notified.")),(0,l.kt)("hr",null))}s.isMDXComponent=!0}}]);