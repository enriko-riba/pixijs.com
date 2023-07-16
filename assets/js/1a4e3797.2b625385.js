"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[7920],{8824:(e,t,r)=>{r.d(t,{c:()=>u});var s=r(7294),a=r(2263);const n=["zero","one","two","few","many","other"];function c(e){return n.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return s[Math.min(n,s.length-1)]}(r,t,e)}}},1473:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var s=r(7294),a=r(2263),n=r(902),c=r(5742),l=r(9960),o=r(5999),u=r(8824),h=r(6010),i=r(6550),d=r(412);const m=function(){const e=(0,i.k6)(),t=(0,i.TH)(),{siteConfig:{baseUrl:r}}=(0,a.Z)(),s=d.Z.canUseDOM?new URLSearchParams(t.search):null,n=s?.get("q")||"",c=s?.get("ctx")||"",l=s?.get("version")||"",o=e=>{const r=new URLSearchParams(t.search);return e?r.set("q",e):r.delete("q"),r};return{searchValue:n,searchContext:c,searchVersion:l,updateSearchPath:t=>{const r=o(t);e.replace({search:r.toString()})},updateSearchContext:r=>{const s=new URLSearchParams(t.search);s.set("ctx",r),e.replace({search:s.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${r}search?${t.toString()}`}}};var p=r(22),g=r(8202),x=r(2539),f=r(726),y=r(1073),j=r(311),S=r(3926),v=r(1029);const w="searchContextInput_mXoe",C="searchQueryInput_CFBF",I="searchResultItem_U687",P="searchResultItemPath_uIbk",_="searchResultItemSummary_oZHr",b="searchQueryColumn_q7nx",F="searchContextColumn_oWAF";var R=r(5893);function $(){const{siteConfig:{baseUrl:e}}=(0,a.Z)(),{selectMessage:t}=(0,u.c)(),{searchValue:r,searchContext:n,searchVersion:l,updateSearchPath:i,updateSearchContext:d}=m(),[x,f]=(0,s.useState)(r),[y,S]=(0,s.useState)(),[I,P]=(0,s.useState)(),_=`${e}${l}`,$=(0,s.useMemo)((()=>x?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:x}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[x]);(0,s.useEffect)((()=>{i(x),y&&(x?y(x,(e=>{P(e)})):P(void 0))}),[x,y]);const k=(0,s.useCallback)((e=>{f(e.target.value)}),[]);return(0,s.useEffect)((()=>{r&&r!==x&&f(r)}),[r]),(0,s.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,p.w)(_,n);S((()=>(0,g.v)(e,t,100)))}()}),[n,_]),(0,R.jsxs)(s.Fragment,{children:[(0,R.jsxs)(c.Z,{children:[(0,R.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,R.jsx)("title",{children:$})]}),(0,R.jsxs)("div",{className:"container margin-vert--lg",children:[(0,R.jsx)("h1",{children:$}),(0,R.jsxs)("div",{className:"row",children:[(0,R.jsx)("div",{className:(0,h.Z)("col",{[b]:Array.isArray(v.Kc),"col--9":Array.isArray(v.Kc),"col--12":!Array.isArray(v.Kc)}),children:(0,R.jsx)("input",{type:"search",name:"q",className:C,"aria-label":"Search",onChange:k,value:x,autoComplete:"off",autoFocus:!0})}),Array.isArray(v.Kc)?(0,R.jsx)("div",{className:(0,h.Z)("col","col--3","padding-left--none",F),children:(0,R.jsxs)("select",{name:"search-context",className:w,id:"context-selector",value:n,onChange:e=>d(e.target.value),children:[(0,R.jsx)("option",{value:"",children:v.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""}),v.Kc.map((e=>(0,R.jsx)("option",{value:e,children:e},e)))]})}):null]}),!y&&x&&(0,R.jsx)("div",{children:(0,R.jsx)(j.Z,{})}),I&&(I.length>0?(0,R.jsx)("p",{children:t(I.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:I.length}))}):(0,R.jsx)("p",{children:(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,R.jsx)("section",{children:I&&I.map((e=>(0,R.jsx)(Z,{searchResult:e},e.document.i)))})]})]})}function Z(e){let{searchResult:{document:t,type:r,page:s,tokens:a,metadata:n}}=e;const c=0===r,o=2===r,u=(c?t.b:s.b).slice(),h=o?t.s:t.t;c||u.push(s.t);let i="";if(v.vc&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);i=`?${e.toString()}`}return(0,R.jsxs)("article",{className:I,children:[(0,R.jsx)("h2",{children:(0,R.jsx)(l.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,x.C)(h,a):(0,f.o)(h,(0,y.m)(n,"t"),a,100)}})}),u.length>0&&(0,R.jsx)("p",{className:P,children:(0,S.e)(u)}),o&&(0,R.jsx)("p",{className:_,dangerouslySetInnerHTML:{__html:(0,f.o)(t.t,(0,y.m)(n,"t"),a,100)}})]})}const k=function(){return(0,R.jsx)(n.Z,{children:(0,R.jsx)($,{})})}}}]);