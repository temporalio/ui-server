import{s as K,e as j,b as S,d as C,g as $,k as b,c as W,v as m,T as x,a as L,h as U,j as B,l as D,U as ee,x as z,y as te,t as O,f as R}from"../chunks/scheduler.pu1Jb5n4.js";import{S as M,i as X,t as g,b as _,c as w,a as v,m as y,d as I,h as ne,g as oe,e as re}from"../chunks/index.ApG6QRGr.js";import{p as Y}from"../chunks/stores.MnHfCJ5f.js";import{P as le}from"../chunks/page-title.7B0a8Lyi.js";import{t as q}from"../chunks/translate.5hbiS85r.js";import{h as F,u as Z}from"../chunks/await_block.HT617CmP.js";import{e as A}from"../chunks/each.5ZqNeK5Q.js";import{B as ae}from"../chunks/button.uxSt6gnV.js";import{C as se}from"../chunks/code-block.X4fcIOC7.js";import{E as ce}from"../chunks/empty-state.TK0x07Go.js";import{L as ie}from"../chunks/loading.3xKQ74Zq.js";import{S as ue,a as fe}from"../chunks/simple-select.BirDBA-_.js";import{T as me}from"../chunks/toggle-switch.5L8DAGly.js";import{a as pe,b as $e}from"../chunks/query-service.sNjodg8v.js";import{a as ge}from"../chunks/auth-user.Y45qpg9S.js";import{s as _e}from"../chunks/parse-with-big-int.e3oI4SEy.js";function G(l){const t=typeof l[15]!="string"?_e(l[15]):l[15];l[16]=t}function H(l,t,o){const e=l.slice();return e[17]=t[o],e}function he(l){var e,n;let t,o;return t=new ce({props:{title:q("common.error-occurred"),content:q("workflows.no-workers-running-message"),error:(n=(e=l[20])==null?void 0:e.body)==null?void 0:n.message}}),{c(){w(t.$$.fragment)},l(r){v(t.$$.fragment,r)},m(r,a){y(t,r,a),o=!0},p:m,i(r){o||(g(t.$$.fragment,r),o=!0)},o(r){_(t.$$.fragment,r),o=!1},d(r){I(t,r)}}}function de(l){let t,o,e,n,r,a,i,s,u,k,h,E,T;function Q(c){l[5](c)}let N={id:"query-select",label:q("workflows.query-type"),"data-testid":"query-select",$$slots:{default:[be]},$$scope:{ctx:l}};l[0]!==void 0&&(N.value=l[0]),e=new ue({props:N}),x.push(()=>ne(e,"value",Q)),a=new ae({props:{leadingIcon:"retry",loading:Te,$$slots:{default:[we]},$$scope:{ctx:l}}}),a.$on("click",l[6]),u=new me({props:{label:q("workflows.json-formatting"),labelPosition:"left",id:"json-formatting",checked:l[2]}}),u.$on("change",l[7]);let p={ctx:l,current:null,token:null,hasCatch:!1,pending:Ie,then:ye,catch:ve,value:15,blocks:[,,,]};return F(E=l[1],p),{c(){t=j("div"),o=j("div"),w(e.$$.fragment),r=L(),w(a.$$.fragment),i=L(),s=j("div"),w(u.$$.fragment),k=L(),h=j("div"),p.block.c(),this.h()},l(c){t=S(c,"DIV",{class:!0});var f=C(t);o=S(f,"DIV",{class:!0});var d=C(o);v(e.$$.fragment,d),r=U(d),v(a.$$.fragment,d),d.forEach($),i=U(f),s=S(f,"DIV",{class:!0});var P=C(s);v(u.$$.fragment,P),P.forEach($),f.forEach($),k=U(c),h=S(c,"DIV",{class:!0});var V=C(h);p.block.l(V),V.forEach($),this.h()},h(){B(o,"class","flex items-center gap-4"),B(s,"class","flex justify-end"),B(t,"class","flex justify-between"),B(h,"class","my-2 flex h-full items-start")},m(c,f){b(c,t,f),D(t,o),y(e,o,null),D(o,r),y(a,o,null),D(t,i),D(t,s),y(u,s,null),b(c,k,f),b(c,h,f),p.block.m(h,p.anchor=null),p.mount=()=>h,p.anchor=null,T=!0},p(c,f){l=c;const d={};f&2097152&&(d.$$scope={dirty:f,ctx:l}),!n&&f&1&&(n=!0,d.value=l[0],ee(()=>n=!1)),e.$set(d);const P={};f&2097152&&(P.$$scope={dirty:f,ctx:l}),a.$set(P);const V={};f&4&&(V.checked=l[2]),u.$set(V),p.ctx=l,f&2&&E!==(E=l[1])&&F(E,p)||Z(p,l,f)},i(c){T||(g(e.$$.fragment,c),g(a.$$.fragment,c),g(u.$$.fragment,c),g(p.block),T=!0)},o(c){_(e.$$.fragment,c),_(a.$$.fragment,c),_(u.$$.fragment,c);for(let f=0;f<3;f+=1){const d=p.blocks[f];_(d)}T=!1},d(c){c&&($(t),$(k),$(h)),I(e),I(a),I(u),p.block.d(),p.token=null,p=null}}}function ke(l){let t=l[17]+"",o;return{c(){o=O(t)},l(e){o=R(e,t)},m(e,n){b(e,o,n)},p:m,d(e){e&&$(o)}}}function J(l){let t,o;return t=new fe({props:{value:l[17],$$slots:{default:[ke]},$$scope:{ctx:l}}}),{c(){w(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,n){y(t,e,n),o=!0},p(e,n){const r={};n&2097152&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){o||(g(t.$$.fragment,e),o=!0)},o(e){_(t.$$.fragment,e),o=!1},d(e){I(t,e)}}}function be(l){let t,o,e=A(l[14]),n=[];for(let a=0;a<e.length;a+=1)n[a]=J(H(l,e,a));const r=a=>_(n[a],1,1,()=>{n[a]=null});return{c(){for(let a=0;a<n.length;a+=1)n[a].c();t=z()},l(a){for(let i=0;i<n.length;i+=1)n[i].l(a);t=z()},m(a,i){for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(a,i);b(a,t,i),o=!0},p(a,i){if(i&8){e=A(a[14]);let s;for(s=0;s<e.length;s+=1){const u=H(a,e,s);n[s]?(n[s].p(u,i),g(n[s],1)):(n[s]=J(u),n[s].c(),g(n[s],1),n[s].m(t.parentNode,t))}for(oe(),s=e.length;s<n.length;s+=1)r(s);re()}},i(a){if(!o){for(let i=0;i<e.length;i+=1)g(n[i]);o=!0}},o(a){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)_(n[i]);o=!1},d(a){a&&$(t),te(n,a)}}}function we(l){let t=q("common.refresh")+"",o;return{c(){o=O(t)},l(e){o=R(e,t)},m(e,n){b(e,o,n)},p:m,d(e){e&&$(o)}}}function ve(l){return{c:m,l:m,m,p:m,i:m,o:m,d:m}}function ye(l){G(l);let t,o;return t=new se({props:{content:l[16],language:l[2]?"json":"text",copyIconTitle:q("common.copy-icon-title"),copySuccessIconTitle:q("common.copy-success-icon-title")}}),{c(){w(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,n){y(t,e,n),o=!0},p(e,n){G(e);const r={};n&2&&(r.content=e[16]),n&4&&(r.language=e[2]?"json":"text"),t.$set(r)},i(e){o||(g(t.$$.fragment,e),o=!0)},o(e){_(t.$$.fragment,e),o=!1},d(e){I(t,e)}}}function Ie(l){return{c:m,l:m,m,p:m,i:m,o:m,d:m}}function qe(l){let t,o,e,n,r=q("workflows.no-workers-failure-message")+"",a,i;return o=new ie({}),{c(){t=j("div"),w(o.$$.fragment),e=L(),n=j("p"),a=O(r),this.h()},l(s){t=S(s,"DIV",{class:!0});var u=C(t);v(o.$$.fragment,u),e=U(u),n=S(u,"P",{});var k=C(n);a=R(k,r),k.forEach($),u.forEach($),this.h()},h(){B(t,"class","text-center")},m(s,u){b(s,t,u),y(o,t,null),D(t,e),D(t,n),D(n,a),i=!0},p:m,i(s){i||(g(o.$$.fragment,s),i=!0)},o(s){_(o.$$.fragment,s),i=!1},d(s){s&&$(t),I(o)}}}function Ee(l){let t,o,e={ctx:l,current:null,token:null,hasCatch:!0,pending:qe,then:de,catch:he,value:14,error:20,blocks:[,,,]};return F(l[3],e),{c(){t=j("section"),e.block.c()},l(n){t=S(n,"SECTION",{});var r=C(t);e.block.l(r),r.forEach($)},m(n,r){b(n,t,r),e.block.m(t,e.anchor=null),e.mount=()=>t,e.anchor=null,o=!0},p(n,[r]){l=n,Z(e,l,r)},i(n){o||(g(e.block),o=!0)},o(n){for(let r=0;r<3;r+=1){const a=e.blocks[r];_(a)}o=!1},d(n){n&&$(t),e.block.d(),e.token=null,e=null}}}let Te=!1;function je(l,t,o){let e,n;W(l,ge,c=>o(8,e=c)),W(l,Y,c=>o(9,n=c));const{namespace:r,workflow:a,run:i}=n.params,s={id:a,runId:i};let u,k=pe({namespace:r,workflow:s}).then(c=>(o(0,u=u||c[0]),c)),h;const E=c=>{var f;o(1,h=$e({namespace:r,workflow:s,queryType:c},(f=n.data)===null||f===void 0?void 0:f.settings,e==null?void 0:e.accessToken))};let T=!0;function Q(c){u=c,o(0,u)}const N=()=>E(u),p=()=>o(2,T=!T);return l.$$.update=()=>{l.$$.dirty&1&&u&&E(u)},[u,h,T,k,E,Q,N,p]}class Se extends M{constructor(t){super(),X(this,t,je,Ee,K,{})}}function Ce(l){let t,o,e,n;return t=new le({props:{title:`${q("workflows.queries-tab")} | ${l[1]}`,url:l[0].url.href}}),e=new Se({}),{c(){w(t.$$.fragment),o=L(),w(e.$$.fragment)},l(r){v(t.$$.fragment,r),o=U(r),v(e.$$.fragment,r)},m(r,a){y(t,r,a),b(r,o,a),y(e,r,a),n=!0},p(r,[a]){const i={};a&1&&(i.url=r[0].url.href),t.$set(i)},i(r){n||(g(t.$$.fragment,r),g(e.$$.fragment,r),n=!0)},o(r){_(t.$$.fragment,r),_(e.$$.fragment,r),n=!1},d(r){r&&$(o),I(t,r),I(e,r)}}}function De(l,t,o){let e;W(l,Y,r=>o(0,e=r));const n=e.params.workflow;return[e,n]}class Ke extends M{constructor(t){super(),X(this,t,De,Ce,K,{})}}export{Ke as component};