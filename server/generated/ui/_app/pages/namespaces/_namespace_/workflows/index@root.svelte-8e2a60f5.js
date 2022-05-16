import{S as Y,i as Z,s as x,I as Be,e as P,c as C,a as N,d as g,b,$ as we,g as v,J as Oe,K as Ve,L as Qe,q as d,o as k,t as j,k as A,w as S,h as D,m as L,x as q,M as W,y as E,ab as ke,T as X,j as pe,B as R,G as Ue,V as be,n as z,p as G,N as V,ap as Pe,W as Q,X as U,Y as M,l as F,Z as Ce,a8 as Me,ah as He,E as le}from"../../../../chunks/index-e4881ae7.js";import{b as Ke,t as Ae}from"../../../../chunks/workflow-status-3e81cae9.js";import{j as ze,k as Ge,l as Je,m as Xe,n as Ye,o as Ze,p as xe,q as et,e as te}from"../../../../chunks/format-date-4b1bc9ef.js";import{t as me}from"../../../../chunks/time-format-98c684f3.js";import{d as _e,r as tt,w as Le}from"../../../../chunks/index-1910a742.js";import{p as re}from"../../../../chunks/stores-7881199b.js";import{w as nt}from"../../../../chunks/with-loading-724ad3cf.js";import{E as lt}from"../../../../chunks/empty-state-b1427443.js";import{u as ue,P as rt}from"../../../../chunks/pagination-398410a3.js";import{j as at,S as st,W as ot,a as it}from"../../../../chunks/search-b51cbe62.js";import{g as fe}from"../../../../chunks/navigation-3f1ea447.js";import{S as ce,O as H}from"../../../../chunks/select-3be5a91a.js";import{F as Ne,w as ut,h as ft}from"../../../../chunks/index.es-2b23329e.js";import"../../../../chunks/simplify-attributes-6710d3ed.js";import"../../../../chunks/route-for-api-35baa078.js";import"../../../../chunks/notifications-0d3ffac1.js";import"../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../chunks/route-for-9a2d1abe.js";import"../../../../chunks/persist-store-9945befd.js";import"../../../../chunks/tooltip-c83fc3d4.js";import"../../../../chunks/copyable-5827f997.js";import"../../../../chunks/button-2b025179.js";import"../../../../chunks/singletons-d1fb5791.js";const ct=l=>ze(l)?l==="basic"||l==="advanced":!1,mt=l=>{const e=l.searchParams.get("search");return ct(e)?e:(l.searchParams.set("search","basic"),"basic")},pt=_e([re],([l])=>l.params.namespace),_t=_e([re],([l])=>l.url.searchParams.get("query")),gt=_e([pt,_t],([l,e])=>({namespace:l,query:e})),ht=l=>gt.subscribe(({namespace:e,query:n})=>{nt(De,je,async()=>{const{workflows:t}=await Ke(e,{query:n});l(t)})}),je=Le(!0),De=Le(!0),$t=tt([],ht);function dt(l){let e,n,t;const a=l[2].default,s=Be(a,l,l[1],null);return{c(){e=P("div"),s&&s.c(),this.h()},l(o){e=C(o,"DIV",{class:!0});var r=N(e);s&&s.l(r),r.forEach(g),this.h()},h(){b(e,"class",n=we(`${l[0]}     
        rounded-sm
        text-center 
        inline-block
        px-1
        ml-1
        text-sm
        align-middle`)+" svelte-1agj3i6")},m(o,r){v(o,e,r),s&&s.m(e,null),t=!0},p(o,[r]){s&&s.p&&(!t||r&2)&&Oe(s,a,o,o[1],t?Qe(a,o[1],r,null):Ve(o[1]),null),(!t||r&1&&n!==(n=we(`${o[0]}     
        rounded-sm
        text-center 
        inline-block
        px-1
        ml-1
        text-sm
        align-middle`)+" svelte-1agj3i6"))&&b(e,"class",n)},i(o){t||(d(s,o),t=!0)},o(o){k(s,o),t=!1},d(o){o&&g(e),s&&s.d(o)}}}function wt(l,e,n){let{$$slots:t={},$$scope:a}=e,{type:s}=e;return l.$$set=o=>{"type"in o&&n(0,s=o.type),"$$scope"in o&&n(1,a=o.$$scope)},[s,a,t]}class kt extends Y{constructor(e){super(),Z(this,e,wt,dt,x,{type:0})}}const bt=l=>{const e=[],n=()=>{t&&(e.push(t),t="")};let t="",a=0;for(;a<l.length;){const s=l[a];if(Ge(s)){n(),t+=s,a++;continue}if(Je(s)||Xe(s)){n(),a++;continue}t+=s,a++}return n(),e},ae=l=>e=>e.toLowerCase()===l.toLowerCase(),ne=(l,e)=>l[e+2],vt=l=>{for(const e of et)if(l[e])return{[e]:l[e]}},yt=ae("WorkflowType"),Tt=ae("WorkflowId"),St=ae("StartTime"),qt=ae("ExecutionStatus"),ve=l=>{const e=bt(l),n={workflowId:"",workflowType:"",executionStatus:null,timeRange:null};return e.forEach((t,a)=>{if(Tt(t)&&(n.workflowId=ne(e,a)),yt(t)&&(n.workflowType=ne(e,a)),qt(t)){const s=ne(e,a);Ye(s)&&(n.executionStatus=s)}if(St(t)){const s=ne(e,a);try{const o=Ze(s),r=vt(o);n.timeRange=xe(r)}catch(o){console.error("Error parsing StartTime from query",o)}}}),n};function Et(l){let e,n,t,a,s,o,r,i,f,h,u;return o=new Ne({props:{icon:ut,scale:.9,color:"gray",class:"flex items-center"}}),{c(){e=P("div"),n=P("label"),t=j(l[2]),a=A(),s=P("span"),S(o.$$.fragment),r=A(),i=P("input"),this.h()},l(m){e=C(m,"DIV",{class:!0});var p=N(e);n=C(p,"LABEL",{for:!0,class:!0});var c=N(n);t=D(c,l[2]),c.forEach(g),a=L(p),s=C(p,"SPAN",{class:!0});var T=N(s);q(o.$$.fragment,T),T.forEach(g),r=L(p),i=C(p,"INPUT",{class:!0,placeholder:!0,id:!0,name:!0}),p.forEach(g),this.h()},h(){b(n,"for",l[1]),b(n,"class","hidden"),b(s,"class","svelte-fxm0nn"),b(i,"class","block w-full focus:outline-none"),b(i,"placeholder",l[3]),b(i,"id",l[1]),b(i,"name",l[4]),b(e,"class","input-container focus-within:border-blue-700 svelte-fxm0nn")},m(m,p){v(m,e,p),W(e,n),W(n,t),W(e,a),W(e,s),E(o,s,null),W(e,r),W(e,i),ke(i,l[0]),f=!0,h||(u=[X(i,"input",l[7]),X(i,"input",l[5]),X(i,"change",l[6])],h=!0)},p(m,[p]){(!f||p&4)&&pe(t,m[2]),(!f||p&2)&&b(n,"for",m[1]),(!f||p&8)&&b(i,"placeholder",m[3]),(!f||p&2)&&b(i,"id",m[1]),(!f||p&16)&&b(i,"name",m[4]),p&1&&i.value!==m[0]&&ke(i,m[0])},i(m){f||(d(o.$$.fragment,m),f=!0)},o(m){k(o.$$.fragment,m),f=!1},d(m){m&&g(e),R(o),h=!1,Ue(u)}}}function Rt(l,e,n){let{id:t}=e,{label:a}=e,{value:s}=e,{placeholder:o=a}=e,{name:r=t}=e;function i(u){be.call(this,l,u)}function f(u){be.call(this,l,u)}function h(){s=this.value,n(0,s)}return l.$$set=u=>{"id"in u&&n(1,t=u.id),"label"in u&&n(2,a=u.label),"value"in u&&n(0,s=u.value),"placeholder"in u&&n(3,o=u.placeholder),"name"in u&&n(4,r=u.name)},[s,t,a,o,r,i,f,h]}class ye extends Y{constructor(e){super(),Z(this,e,Rt,Et,x,{id:1,label:2,value:0,placeholder:3,name:4})}}function Te(l,e,n){const t=l.slice();return t[14]=e[n][0],t[15]=e[n][1],t}function Se(l,e,n){const t=l.slice();return t[15]=e[n],t}function It(l){let e,n,t,a,s;return{c(){e=P("a"),n=j("Advanced Search"),this.h()},l(o){e=C(o,"A",{href:!0,class:!0});var r=N(e);n=D(r,"Advanced Search"),r.forEach(g),this.h()},h(){b(e,"href",t=l[3].url.pathname+"?searchType=advanced"),b(e,"class","text-blue-700")},m(o,r){v(o,e,r),W(e,n),a||(s=X(e,"click",Pe(l[6]("advanced"))),a=!0)},p(o,r){r&8&&t!==(t=o[3].url.pathname+"?searchType=advanced")&&b(e,"href",t)},d(o){o&&g(e),a=!1,s()}}}function Wt(l){let e,n,t,a,s;return{c(){e=P("a"),n=j("Basic Search"),this.h()},l(o){e=C(o,"A",{href:!0,class:!0});var r=N(e);n=D(r,"Basic Search"),r.forEach(g),this.h()},h(){b(e,"href",t=l[3].url.pathname+"?searchType=basic"),b(e,"class","text-blue-700")},m(o,r){v(o,e,r),W(e,n),a||(s=X(e,"click",Pe(l[6]("basic"))),a=!0)},p(o,r){r&8&&t!==(t=o[3].url.pathname+"?searchType=basic")&&b(e,"href",t)},d(o){o&&g(e),a=!1,s()}}}function Pt(l){let e,n,t,a,s,o,r,i,f,h,u,m,p,c,T,B;function $(w){l[9](w)}let O={id:"workflow-id-filter",label:"Workflow ID"};l[2].workflowId!==void 0&&(O.value=l[2].workflowId),n=new ye({props:O}),Q.push(()=>U(n,"value",$)),n.$on("input",l[8]);function _(w){l[10](w)}let I={id:"workflow-type-filter",label:"Workflow Type"};l[2].workflowType!==void 0&&(I.value=l[2].workflowType),s=new ye({props:I}),Q.push(()=>U(s,"value",_)),s.$on("input",l[8]);function ee(w){l[11](w)}let K={id:"time-range-filter",label:"Time Range",$$slots:{default:[jt]},$$scope:{ctx:l}};l[2].timeRange!==void 0&&(K.value=l[2].timeRange),i=new ce({props:K}),Q.push(()=>U(i,"value",ee)),i.$on("change",l[8]);function J(w){l[12](w)}let ge={id:"execution-status-filter",label:"Workflow Status",$$slots:{default:[Ft]},$$scope:{ctx:l}};l[2].executionStatus!==void 0&&(ge.value=l[2].executionStatus),u=new ce({props:ge}),Q.push(()=>U(u,"value",J)),u.$on("change",l[8]);function Fe(w){l[13](w)}let he={id:"filter-by-relative-time",$$slots:{default:[Qt]},$$scope:{ctx:l}};return l[4]!==void 0&&(he.value=l[4]),c=new ce({props:he}),Q.push(()=>U(c,"value",Fe)),{c(){e=P("div"),S(n.$$.fragment),a=A(),S(s.$$.fragment),r=A(),S(i.$$.fragment),h=A(),S(u.$$.fragment),p=A(),S(c.$$.fragment),this.h()},l(w){e=C(w,"DIV",{class:!0});var y=N(e);q(n.$$.fragment,y),a=L(y),q(s.$$.fragment,y),r=L(y),q(i.$$.fragment,y),h=L(y),q(u.$$.fragment,y),p=L(y),q(c.$$.fragment,y),y.forEach(g),this.h()},h(){b(e,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4")},m(w,y){v(w,e,y),E(n,e,null),W(e,a),E(s,e,null),W(e,r),E(i,e,null),W(e,h),E(u,e,null),W(e,p),E(c,e,null),B=!0},p(w,y){const $e={};!t&&y&4&&(t=!0,$e.value=w[2].workflowId,M(()=>t=!1)),n.$set($e);const de={};!o&&y&4&&(o=!0,de.value=w[2].workflowType,M(()=>o=!1)),s.$set(de);const se={};y&1048580&&(se.$$scope={dirty:y,ctx:w}),!f&&y&4&&(f=!0,se.value=w[2].timeRange,M(()=>f=!1)),i.$set(se);const oe={};y&1048576&&(oe.$$scope={dirty:y,ctx:w}),!m&&y&4&&(m=!0,oe.value=w[2].executionStatus,M(()=>m=!1)),u.$set(oe);const ie={};y&1048576&&(ie.$$scope={dirty:y,ctx:w}),!T&&y&16&&(T=!0,ie.value=w[4],M(()=>T=!1)),c.$set(ie)},i(w){B||(d(n.$$.fragment,w),d(s.$$.fragment,w),d(i.$$.fragment,w),d(u.$$.fragment,w),d(c.$$.fragment,w),B=!0)},o(w){k(n.$$.fragment,w),k(s.$$.fragment,w),k(i.$$.fragment,w),k(u.$$.fragment,w),k(c.$$.fragment,w),B=!1},d(w){w&&g(e),R(n),R(s),R(i),R(u),R(c)}}}function Ct(l){let e,n;return e=new st({props:{icon:!0,id:"advanced-search",placeholder:"Query\u2026",value:l[1]}}),e.$on("submit",l[7]),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p(t,a){const s={};a&2&&(s.value=t[1]),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function At(l){let e;return{c(){e=j("All")},l(n){e=D(n,"All")},m(n,t){v(n,e,t)},d(n){n&&g(e)}}}function qe(l){let e,n;return e=new H({props:{value:l[2].timeRange,$$slots:{default:[Lt]},$$scope:{ctx:l}}}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p(t,a){const s={};a&4&&(s.value=t[2].timeRange),a&1048580&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Lt(l){let e=l[2].timeRange+"",n;return{c(){n=j(e)},l(t){n=D(t,e)},m(t,a){v(t,n,a)},p(t,a){a&4&&e!==(e=t[2].timeRange+"")&&pe(n,e)},d(t){t&&g(n)}}}function Nt(l){let e=l[15]+"",n;return{c(){n=j(e)},l(t){n=D(t,e)},m(t,a){v(t,n,a)},p:le,d(t){t&&g(n)}}}function Ee(l){let e,n;return e=new H({props:{value:l[15],$$slots:{default:[Nt]},$$scope:{ctx:l}}}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p(t,a){const s={};a&1048576&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function jt(l){let e,n,t=l[2].timeRange&&!te.includes(l[2].timeRange),a,s,o;e=new H({props:{value:null,$$slots:{default:[At]},$$scope:{ctx:l}}});let r=t&&qe(l),i=te,f=[];for(let u=0;u<i.length;u+=1)f[u]=Ee(Se(l,i,u));const h=u=>k(f[u],1,1,()=>{f[u]=null});return{c(){S(e.$$.fragment),n=A(),r&&r.c(),a=A();for(let u=0;u<f.length;u+=1)f[u].c();s=F()},l(u){q(e.$$.fragment,u),n=L(u),r&&r.l(u),a=L(u);for(let m=0;m<f.length;m+=1)f[m].l(u);s=F()},m(u,m){E(e,u,m),v(u,n,m),r&&r.m(u,m),v(u,a,m);for(let p=0;p<f.length;p+=1)f[p].m(u,m);v(u,s,m),o=!0},p(u,m){const p={};if(m&1048576&&(p.$$scope={dirty:m,ctx:u}),e.$set(p),m&4&&(t=u[2].timeRange&&!te.includes(u[2].timeRange)),t?r?(r.p(u,m),m&4&&d(r,1)):(r=qe(u),r.c(),d(r,1),r.m(a.parentNode,a)):r&&(z(),k(r,1,1,()=>{r=null}),G()),m&0){i=te;let c;for(c=0;c<i.length;c+=1){const T=Se(u,i,c);f[c]?(f[c].p(T,m),d(f[c],1)):(f[c]=Ee(T),f[c].c(),d(f[c],1),f[c].m(s.parentNode,s))}for(z(),c=i.length;c<f.length;c+=1)h(c);G()}},i(u){if(!o){d(e.$$.fragment,u),d(r);for(let m=0;m<i.length;m+=1)d(f[m]);o=!0}},o(u){k(e.$$.fragment,u),k(r),f=f.filter(Boolean);for(let m=0;m<f.length;m+=1)k(f[m]);o=!1},d(u){R(e,u),u&&g(n),r&&r.d(u),u&&g(a),Ce(f,u),u&&g(s)}}}function Dt(l){let e=l[14]+"",n;return{c(){n=j(e)},l(t){n=D(t,e)},m(t,a){v(t,n,a)},p:le,d(t){t&&g(n)}}}function Re(l,e){let n,t,a;return t=new H({props:{value:e[15],$$slots:{default:[Dt]},$$scope:{ctx:e}}}),{key:l,first:null,c(){n=F(),S(t.$$.fragment),this.h()},l(s){n=F(),q(t.$$.fragment,s),this.h()},h(){this.first=n},m(s,o){v(s,n,o),E(t,s,o),a=!0},p(s,o){e=s;const r={};o&1048576&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(s){a||(d(t.$$.fragment,s),a=!0)},o(s){k(t.$$.fragment,s),a=!1},d(s){s&&g(n),R(t,s)}}}function Ft(l){let e=[],n=new Map,t,a,s=Object.entries(l[5]);const o=r=>r[14];for(let r=0;r<s.length;r+=1){let i=Te(l,s,r),f=o(i);n.set(f,e[r]=Re(f,i))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();t=F()},l(r){for(let i=0;i<e.length;i+=1)e[i].l(r);t=F()},m(r,i){for(let f=0;f<e.length;f+=1)e[f].m(r,i);v(r,t,i),a=!0},p(r,i){i&32&&(s=Object.entries(r[5]),z(),e=Me(e,i,o,1,r,s,n,t.parentNode,He,Re,t,Te),G())},i(r){if(!a){for(let i=0;i<s.length;i+=1)d(e[i]);a=!0}},o(r){for(let i=0;i<e.length;i+=1)k(e[i]);a=!1},d(r){for(let i=0;i<e.length;i+=1)e[i].d(r);r&&g(t)}}}function Bt(l){let e;return{c(){e=j("Relative")},l(n){e=D(n,"Relative")},m(n,t){v(n,e,t)},d(n){n&&g(e)}}}function Ot(l){let e;return{c(){e=j("UTC")},l(n){e=D(n,"UTC")},m(n,t){v(n,e,t)},d(n){n&&g(e)}}}function Vt(l){let e;return{c(){e=j("Local")},l(n){e=D(n,"Local")},m(n,t){v(n,e,t)},d(n){n&&g(e)}}}function Qt(l){let e,n,t,a,s,o;return e=new H({props:{value:"relative",$$slots:{default:[Bt]},$$scope:{ctx:l}}}),t=new H({props:{value:"UTC",$$slots:{default:[Ot]},$$scope:{ctx:l}}}),s=new H({props:{value:"local",$$slots:{default:[Vt]},$$scope:{ctx:l}}}),{c(){S(e.$$.fragment),n=A(),S(t.$$.fragment),a=A(),S(s.$$.fragment)},l(r){q(e.$$.fragment,r),n=L(r),q(t.$$.fragment,r),a=L(r),q(s.$$.fragment,r)},m(r,i){E(e,r,i),v(r,n,i),E(t,r,i),v(r,a,i),E(s,r,i),o=!0},p(r,i){const f={};i&1048576&&(f.$$scope={dirty:i,ctx:r}),e.$set(f);const h={};i&1048576&&(h.$$scope={dirty:i,ctx:r}),t.$set(h);const u={};i&1048576&&(u.$$scope={dirty:i,ctx:r}),s.$set(u)},i(r){o||(d(e.$$.fragment,r),d(t.$$.fragment,r),d(s.$$.fragment,r),o=!0)},o(r){k(e.$$.fragment,r),k(t.$$.fragment,r),k(s.$$.fragment,r),o=!1},d(r){R(e,r),r&&g(n),R(t,r),r&&g(a),R(s,r)}}}function Ut(l){let e,n,t,a,s,o;function r(p,c){return p[0]==="advanced"?Wt:It}let i=r(l),f=i(l);const h=[Ct,Pt],u=[];function m(p,c){return p[0]==="advanced"?0:1}return a=m(l),s=u[a]=h[a](l),{c(){e=P("section"),n=P("p"),f.c(),t=A(),s.c(),this.h()},l(p){e=C(p,"SECTION",{class:!0});var c=N(e);n=C(c,"P",{class:!0});var T=N(n);f.l(T),T.forEach(g),t=L(c),s.l(c),c.forEach(g),this.h()},h(){b(n,"class","text-right text-xs"),b(e,"class","flex flex-col gap-2")},m(p,c){v(p,e,c),W(e,n),f.m(n,null),W(e,t),u[a].m(e,null),o=!0},p(p,[c]){i===(i=r(p))&&f?f.p(p,c):(f.d(1),f=i(p),f&&(f.c(),f.m(n,null)));let T=a;a=m(p),a===T?u[a].p(p,c):(z(),k(u[T],1,1,()=>{u[T]=null}),G(),s=u[a],s?s.p(p,c):(s=u[a]=h[a](p),s.c()),d(s,1),s.m(e,null))},i(p){o||(d(s),o=!0)},o(p){k(s),o=!1},d(p){p&&g(e),f.d(),u[a].d()}}}function Mt(l,e,n){let t,a;V(l,re,$=>n(3,t=$)),V(l,me,$=>n(4,a=$));let{searchType:s}=e,{query:o}=e,r=ve(o);const i={All:null,Running:"Running","Timed Out":"TimedOut",Completed:"Completed",Failed:"Failed","Continued as New":"ContinuedAsNew",Canceled:"Canceled",Terminated:"Terminated"},f=$=>()=>{n(0,s=$),ue({parameter:"search",value:s,url:t.url,goto:fe})},h=$=>{const O=new FormData($.target);n(1,o=String(O.get("query"))),n(2,r=ve(o)),ue({url:t.url,parameter:"query",value:o,goto:fe})},u=at(()=>{n(1,o=Ae(r)),ue({url:t.url,parameter:"query",value:o,allowEmpty:!0,goto:fe})},300);function m($){l.$$.not_equal(r.workflowId,$)&&(r.workflowId=$,n(2,r))}function p($){l.$$.not_equal(r.workflowType,$)&&(r.workflowType=$,n(2,r))}function c($){l.$$.not_equal(r.timeRange,$)&&(r.timeRange=$,n(2,r))}function T($){l.$$.not_equal(r.executionStatus,$)&&(r.executionStatus=$,n(2,r))}function B($){a=$,me.set(a)}return l.$$set=$=>{"searchType"in $&&n(0,s=$.searchType),"query"in $&&n(1,o=$.query)},[s,o,r,t,a,i,f,h,u,m,p,c,T,B]}class Ht extends Y{constructor(e){super(),Z(this,e,Mt,Ut,x,{searchType:0,query:1})}}function Kt(l){let e,n,t,a,s,o,r;return t=new Ne({props:{icon:ft,scale:1.2,class:"block w-full h-full animate-spin"}}),{c(){e=P("div"),n=P("div"),S(t.$$.fragment),a=A(),s=P("h2"),o=j(l[0]),this.h()},l(i){e=C(i,"DIV",{class:!0});var f=N(e);n=C(f,"DIV",{class:!0});var h=N(n);q(t.$$.fragment,h),h.forEach(g),a=L(f),s=C(f,"H2",{class:!0});var u=N(s);o=D(u,l[0]),u.forEach(g),f.forEach(g),this.h()},h(){b(n,"class","flex rounded-full items-center justify-center w-16 h-16 bg-gray-200"),b(s,"class","text-xl font-medium"),b(e,"class","my-12 flex flex-col justify-start items-center gap-2")},m(i,f){v(i,e,f),W(e,n),E(t,n,null),W(e,a),W(e,s),W(s,o),r=!0},p(i,[f]){(!r||f&1)&&pe(o,i[0])},i(i){r||(d(t.$$.fragment,i),r=!0)},o(i){k(t.$$.fragment,i),r=!1},d(i){i&&g(e),R(t)}}}function zt(l,e,n){let{title:t="Loading\u2026"}=e;return l.$$set=a=>{"title"in a&&n(0,t=a.title)},[t]}class Gt extends Y{constructor(e){super(),Z(this,e,zt,Kt,x,{title:0})}}function Ie(l,e,n){const t=l.slice();return t[12]=e[n],t}function Jt(l){let e;return{c(){e=j("Beta")},l(n){e=D(n,"Beta")},m(n,t){v(n,e,t)},d(n){n&&g(e)}}}function Xt(l){let e,n;return e=new lt({props:{title:"No Workflows Found",content:l[7]}}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p:le,i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Yt(l){let e,n;return e=new rt({props:{items:l[4],updating:l[5],$$slots:{default:[en,({visibleItems:t})=>({11:t}),({visibleItems:t})=>t?2048:0]},$$scope:{ctx:l}}}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p(t,a){const s={};a&16&&(s.items=t[4]),a&32&&(s.updating=t[5]),a&34881&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Zt(l){let e,n;return e=new Gt({}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p:le,i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function We(l){let e,n;return e=new it({props:{workflow:l[12],namespace:l[0],timeFormat:l[6]}}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p(t,a){const s={};a&2048&&(s.workflow=t[12]),a&1&&(s.namespace=t[0]),a&64&&(s.timeFormat=t[6]),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function xt(l){let e,n,t=l[11],a=[];for(let o=0;o<t.length;o+=1)a[o]=We(Ie(l,t,o));const s=o=>k(a[o],1,1,()=>{a[o]=null});return{c(){for(let o=0;o<a.length;o+=1)a[o].c();e=F()},l(o){for(let r=0;r<a.length;r+=1)a[r].l(o);e=F()},m(o,r){for(let i=0;i<a.length;i+=1)a[i].m(o,r);v(o,e,r),n=!0},p(o,r){if(r&2113){t=o[11];let i;for(i=0;i<t.length;i+=1){const f=Ie(o,t,i);a[i]?(a[i].p(f,r),d(a[i],1)):(a[i]=We(f),a[i].c(),d(a[i],1),a[i].m(e.parentNode,e))}for(z(),i=t.length;i<a.length;i+=1)s(i);G()}},i(o){if(!n){for(let r=0;r<t.length;r+=1)d(a[r]);n=!0}},o(o){a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)k(a[r]);n=!1},d(o){Ce(a,o),o&&g(e)}}}function en(l){let e,n;return e=new ot({props:{$$slots:{default:[xt]},$$scope:{ctx:l}}}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p(t,a){const s={};a&34881&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function tn(l){let e,n,t,a,s,o,r,i,f,h,u,m;t=new kt({props:{type:"beta",$$slots:{default:[Jt]},$$scope:{ctx:l}}});function p(_){l[8](_)}function c(_){l[9](_)}let T={};l[1]!==void 0&&(T.searchType=l[1]),l[2]!==void 0&&(T.query=l[2]),s=new Ht({props:T}),Q.push(()=>U(s,"searchType",p)),Q.push(()=>U(s,"query",c));const B=[Zt,Yt,Xt],$=[];function O(_,I){return _[3]?0:_[4].length?1:2}return f=O(l),h=$[f]=B[f](l),{c(){e=P("h2"),n=j("Recent Workflows "),S(t.$$.fragment),a=A(),S(s.$$.fragment),i=A(),h.c(),u=F(),this.h()},l(_){e=C(_,"H2",{class:!0});var I=N(e);n=D(I,"Recent Workflows "),q(t.$$.fragment,I),I.forEach(g),a=L(_),q(s.$$.fragment,_),i=L(_),h.l(_),u=F(),this.h()},h(){b(e,"class","text-2xl")},m(_,I){v(_,e,I),W(e,n),E(t,e,null),v(_,a,I),E(s,_,I),v(_,i,I),$[f].m(_,I),v(_,u,I),m=!0},p(_,[I]){const ee={};I&32768&&(ee.$$scope={dirty:I,ctx:_}),t.$set(ee);const K={};!o&&I&2&&(o=!0,K.searchType=_[1],M(()=>o=!1)),!r&&I&4&&(r=!0,K.query=_[2],M(()=>r=!1)),s.$set(K);let J=f;f=O(_),f===J?$[f].p(_,I):(z(),k($[J],1,1,()=>{$[J]=null}),G(),h=$[f],h?h.p(_,I):(h=$[f]=B[f](_),h.c()),d(h,1),h.m(u.parentNode,u))},i(_){m||(d(t.$$.fragment,_),d(s.$$.fragment,_),d(h),m=!0)},o(_){k(t.$$.fragment,_),k(s.$$.fragment,_),k(h),m=!1},d(_){_&&g(e),R(t),_&&g(a),R(s,_),_&&g(i),$[f].d(_),_&&g(u)}}}const nn=Ae({timeRange:"1 day"}),Rn=async function({params:l,url:e}){e.searchParams.has("query")||e.searchParams.set("query",nn);const{namespace:n}=l;return{props:{namespace:n}}};function ln(l,e,n){let t,a,s,o,r;V(l,re,c=>n(10,t=c)),V(l,De,c=>n(3,a=c)),V(l,$t,c=>n(4,s=c)),V(l,je,c=>n(5,o=c)),V(l,me,c=>n(6,r=c));let{namespace:i}=e,f=mt(t.url),h=t.url.searchParams.get("query");const u=f==="advanced"?"Please check your syntax and try again.":"If you have filters applied, try adjusting them.";function m(c){f=c,n(1,f)}function p(c){h=c,n(2,h)}return l.$$set=c=>{"namespace"in c&&n(0,i=c.namespace)},[i,f,h,a,s,o,r,u,m,p]}class In extends Y{constructor(e){super(),Z(this,e,ln,tn,x,{namespace:0})}}export{In as default,Rn as load};