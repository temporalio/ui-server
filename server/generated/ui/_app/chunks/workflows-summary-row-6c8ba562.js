var Ye=Object.defineProperty,Ze=Object.defineProperties;var $e=Object.getOwnPropertyDescriptors;var Oe=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable;var Re=(t,e,s)=>e in t?Ye(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,Ue=(t,e)=>{for(var s in e||(e={}))xe.call(e,s)&&Re(t,s,e[s]);if(Oe)for(var s of Oe(e))et.call(e,s)&&Re(t,s,e[s]);return t},Be=(t,e)=>Ze(t,$e(e));import{S as Se,i as We,s as ke,I as De,e as p,t as P,k as C,c as w,a as k,h as N,d as u,m as F,b as y,a4 as ge,g as oe,M as r,as as ye,J as Ve,K as ze,L as qe,q as K,o as j,N as te,l as Me,n as Ge,p as Je,w as ue,x as ce,y as me,B as de,R as $,T as he,U as ve,at as pe,H as tt,E as Qe,G as lt,j as se}from"./index-fbba58ee.js";import{b as Ee,c as Te,d as Ie,g as we}from"./get-truncated-word-34ae053e.js";import{p as st}from"./stores-c599ed87.js";import{g as ot}from"./navigation-6709cf39.js";import{c as at,f as x,g as He}from"./format-date-cc1b1b48.js";import{l as rt}from"./route-for-e4b4dbdd.js";import{u as nt}from"./update-query-parameters-08bf783c.js";import{l as it,m as ft,n as ut,o as ct,p as mt,q as dt}from"./to-duration-271d3946.js";import{W as _t,t as Ke}from"./workflow-status-ae8cd6b3.js";import{T as ht}from"./tooltip-c612d686.js";import{I as Xe}from"./index-fb69d39c.js";function vt(t){let e,s,l,o,a,n,i,c,d,I,_,W,g,h,f,R,D,A,T,S,b,E,L,U,Q,B,M;const G=t[4].default,q=De(G,t,t[3],null);return{c(){e=p("section"),s=p("div"),l=p("div"),o=p("div"),a=P("Status"),n=C(),i=p("div"),c=P("Workflow ID"),I=C(),_=p("div"),W=P("Type"),h=C(),f=p("div"),R=P("Start"),D=C(),A=p("div"),T=P("End"),S=C(),b=p("div"),E=p("div"),L=P("Summary"),Q=C(),B=p("div"),q&&q.c(),this.h()},l(V){e=w(V,"SECTION",{class:!0});var z=k(e);s=w(z,"DIV",{class:!0});var Z=k(s);l=w(Z,"DIV",{class:!0});var O=k(l);o=w(O,"DIV",{class:!0});var ee=k(o);a=N(ee,"Status"),ee.forEach(u),n=F(O),i=w(O,"DIV",{class:!0});var H=k(i);c=N(H,"Workflow ID"),H.forEach(u),I=F(O),_=w(O,"DIV",{class:!0});var ae=k(_);W=N(ae,"Type"),ae.forEach(u),h=F(O),f=w(O,"DIV",{class:!0});var re=k(f);R=N(re,"Start"),re.forEach(u),D=F(O),A=w(O,"DIV",{class:!0});var ne=k(A);T=N(ne,"End"),ne.forEach(u),O.forEach(u),Z.forEach(u),S=F(z),b=w(z,"DIV",{class:!0});var m=k(b);E=w(m,"DIV",{class:!0});var v=k(E);L=N(v,"Summary"),v.forEach(u),m.forEach(u),Q=F(z),B=w(z,"DIV",{class:!0});var X=k(B);q&&q.l(X),X.forEach(u),z.forEach(u),this.h()},h(){y(o,"class","table-header table-cell w-28 rounded-tl-md svelte-qkbvym"),y(i,"class","table-header table-cell md:w-60 xl:w-auto svelte-qkbvym"),ge(()=>t[5].call(i)),y(_,"class","table-header table-cell md:w-60 xl:w-80 svelte-qkbvym"),ge(()=>t[6].call(_)),y(f,"class","table-header hidden text-sm xl:table-cell xl:w-64 xl:text-base svelte-qkbvym"),y(A,"class","table-header hidden rounded-tr-md xl:table-cell xl:w-64 svelte-qkbvym"),y(l,"class","hidden md:table-row"),y(s,"class","table-header-row md:table-header-group svelte-qkbvym"),y(E,"class","rounded-t-md border-b p-2"),y(b,"class","table-header-row md:hidden svelte-qkbvym"),ge(()=>t[7].call(b)),y(B,"class","overflow-y-auto md:table-row-group"),y(e,"class","workflow-table svelte-qkbvym")},m(V,z){oe(V,e,z),r(e,s),r(s,l),r(l,o),r(o,a),r(l,n),r(l,i),r(i,c),d=ye(i,t[5].bind(i)),r(l,I),r(l,_),r(_,W),g=ye(_,t[6].bind(_)),r(l,h),r(l,f),r(f,R),r(l,D),r(l,A),r(A,T),r(e,S),r(e,b),r(b,E),r(E,L),U=ye(b,t[7].bind(b)),r(e,Q),r(e,B),q&&q.m(B,null),M=!0},p(V,[z]){q&&q.p&&(!M||z&8)&&Ve(q,G,V,V[3],M?qe(G,V[3],z,null):ze(V[3]),null)},i(V){M||(K(q,V),M=!0)},o(V){j(q,V),M=!1},d(V){V&&u(e),d(),g(),U(),q&&q.d(V)}}}function pt(t,e,s){let l,o,a;te(t,Ee,_=>s(0,l=_)),te(t,Te,_=>s(1,o=_)),te(t,Ie,_=>s(2,a=_));let{$$slots:n={},$$scope:i}=e;function c(){l=this.offsetWidth,Ee.set(l)}function d(){o=this.offsetWidth,Te.set(o)}function I(){a=this.offsetWidth,Ie.set(a)}return t.$$set=_=>{"$$scope"in _&&s(3,i=_.$$scope)},[l,o,a,i,n,c,d,I]}class jt extends Se{constructor(e){super(),We(this,e,pt,vt,ke,{})}}const wt=t=>{const e=[],s=()=>{l&&(e.push(l),l="")};let l="",o=0;for(;o<t.length;){const a=t[o];if(it(a)){s(),l+=a,o++;continue}if(ft(a)||ut(a)){s(),o++;continue}l+=a,o++}return s(),e},be=t=>e=>e.toLowerCase()===t.toLowerCase(),_e=(t,e)=>t[e+2],kt=t=>{for(const e of dt)if(t[e])return{[e]:t[e]}},bt=be("WorkflowType"),gt=be("WorkflowId"),yt=be("StartTime"),Et=be("ExecutionStatus"),Tt=t=>{const e=wt(t),s={workflowId:"",workflowType:"",executionStatus:null,timeRange:null};return e.forEach((l,o)=>{if(gt(l)&&(s.workflowId=_e(e,o)),bt(l)&&(s.workflowType=_e(e,o)),Et(l)){const a=_e(e,o);ct(a)&&(s.executionStatus=a)}if(yt(l)){const a=_e(e,o);try{const n=mt(a),i=kt(n);s.timeRange=at(i)}catch(n){console.error("Error parsing StartTime from query",n)}}}),s};function It(t){let e,s,l,o,a,n=t[6],i,c,d,I,_,W,g,h,f,R,D;const A=t[11].default,T=De(A,t,t[10],null);let S=je(t);return g=new Xe({props:{name:t[7]?"checkMark":"copy",stroke:"#fff",class:"inline h-4"}}),{c(){e=p("div"),T&&T.c(),s=C(),l=p("div"),o=p("div"),a=p("button"),S.c(),i=P(`
          Filter`),c=C(),d=p("span"),I=P("|"),_=C(),W=p("button"),ue(g.$$.fragment),h=P(`
          Copy`),this.h()},l(b){e=w(b,"DIV",{class:!0});var E=k(e);T&&T.l(E),s=F(E),l=w(E,"DIV",{class:!0});var L=k(l);o=w(L,"DIV",{class:!0});var U=k(o);a=w(U,"BUTTON",{class:!0});var Q=k(a);S.l(Q),i=N(Q,`
          Filter`),Q.forEach(u),c=F(U),d=w(U,"SPAN",{});var B=k(d);I=N(B,"|"),B.forEach(u),_=F(U),W=w(U,"BUTTON",{});var M=k(W);ce(g.$$.fragment,M),h=N(M,`
          Copy`),M.forEach(u),U.forEach(u),L.forEach(u),E.forEach(u),this.h()},h(){y(a,"class","mr-1"),y(o,"class","inline-block rounded-lg bg-gray-800 px-2 py-2 text-gray-100"),y(l,"class","tooltip svelte-1i7cfg1"),$(l,"left",t[3]),$(l,"right",t[1]),$(l,"bottom",t[2]),$(l,"top",t[0]),y(e,"class","wrapper relative inline-block svelte-1i7cfg1")},m(b,E){oe(b,e,E),T&&T.m(e,null),r(e,s),r(e,l),r(l,o),r(o,a),S.m(a,null),r(a,i),r(o,c),r(o,d),r(d,I),r(o,_),r(o,W),me(g,W,null),r(W,h),f=!0,R||(D=[he(a,"click",ve(pe(function(){tt(t[5])&&t[5].apply(this,arguments)}))),he(W,"click",ve(pe(t[8]))),he(e,"click",ve(pe(Qe)))],R=!0)},p(b,E){t=b,T&&T.p&&(!f||E&1024)&&Ve(T,A,t,t[10],f?qe(A,t[10],E,null):ze(t[10]),null),E&64&&ke(n,n=t[6])?(Ge(),j(S,1,1,Qe),Je(),S=je(t),S.c(),K(S,1),S.m(a,i)):S.p(t,E);const L={};E&128&&(L.name=t[7]?"checkMark":"copy"),g.$set(L),E&8&&$(l,"left",t[3]),E&2&&$(l,"right",t[1]),E&4&&$(l,"bottom",t[2]),E&1&&$(l,"top",t[0])},i(b){f||(K(T,b),K(S),K(g.$$.fragment,b),f=!0)},o(b){j(T,b),j(S),j(g.$$.fragment,b),f=!1},d(b){b&&u(e),T&&T.d(b),S.d(b),de(g),R=!1,lt(D)}}}function St(t){let e;const s=t[11].default,l=De(s,t,t[10],null);return{c(){l&&l.c()},l(o){l&&l.l(o)},m(o,a){l&&l.m(o,a),e=!0},p(o,a){l&&l.p&&(!e||a&1024)&&Ve(l,s,o,o[10],e?qe(s,o[10],a,null):ze(o[10]),null)},i(o){e||(K(l,o),e=!0)},o(o){j(l,o),e=!1},d(o){l&&l.d(o)}}}function je(t){let e,s;return e=new Xe({props:{name:"filter",stroke:"#fff",fill:t[6]?"#fff":"",class:"inline h-4"}}),{c(){ue(e.$$.fragment)},l(l){ce(e.$$.fragment,l)},m(l,o){me(e,l,o),s=!0},p(l,o){const a={};o&64&&(a.fill=l[6]?"#fff":""),e.$set(a)},i(l){s||(K(e.$$.fragment,l),s=!0)},o(l){j(e.$$.fragment,l),s=!1},d(l){de(e,l)}}}function Wt(t){let e,s,l,o;const a=[St,It],n=[];function i(c,d){return c[4]?0:1}return e=i(t),s=n[e]=a[e](t),{c(){s.c(),l=Me()},l(c){s.l(c),l=Me()},m(c,d){n[e].m(c,d),oe(c,l,d),o=!0},p(c,[d]){let I=e;e=i(c),e===I?n[e].p(c,d):(Ge(),j(n[I],1,1,()=>{n[I]=null}),Je(),s=n[e],s?s.p(c,d):(s=n[e]=a[e](c),s.c()),K(s,1),s.m(l.parentNode,l))},i(c){o||(K(s),o=!0)},o(c){j(s),o=!1},d(c){n[e].d(c),c&&u(l)}}}function Dt(t,e,s){let{$$slots:l={},$$scope:o}=e,{content:a}=e,{top:n=!1}=e,{right:i=!1}=e,{bottom:c=!1}=e,{left:d=!1}=e,{hide:I=!1}=e,{onFilter:_}=e,{filtered:W}=e,g=!1;const h=()=>{navigator.clipboard.writeText(a).then(()=>{s(7,g=!g),setTimeout(()=>s(7,g=!1),500)}).catch(f=>console.error(f))};return t.$$set=f=>{"content"in f&&s(9,a=f.content),"top"in f&&s(0,n=f.top),"right"in f&&s(1,i=f.right),"bottom"in f&&s(2,c=f.bottom),"left"in f&&s(3,d=f.left),"hide"in f&&s(4,I=f.hide),"onFilter"in f&&s(5,_=f.onFilter),"filtered"in f&&s(6,W=f.filtered),"$$scope"in f&&s(10,o=f.$$scope)},[n,i,c,d,I,_,W,g,h,a,o,l]}class Vt extends Se{constructor(e){super(),We(this,e,Dt,Wt,ke,{content:9,top:0,right:1,bottom:2,left:3,hide:4,onFilter:5,filtered:6})}}function zt(t){let e,s=we(t[0].id,t[4]||t[5])+"",l;return{c(){e=p("span"),l=P(s),this.h()},l(o){e=w(o,"SPAN",{class:!0});var a=k(e);l=N(a,s),a.forEach(u),this.h()},h(){y(e,"class","table-link svelte-3bzomh")},m(o,a){oe(o,e,a),r(e,l)},p(o,a){a&49&&s!==(s=we(o[0].id,o[4]||o[5])+"")&&se(l,s)},d(o){o&&u(e)}}}function qt(t){let e,s=we(t[0].name,t[6]||t[5])+"",l,o,a;return{c(){e=p("span"),l=P(s),this.h()},l(n){e=w(n,"SPAN",{class:!0});var i=k(e);l=N(i,s),i.forEach(u),this.h()},h(){y(e,"class","table-link svelte-3bzomh")},m(n,i){oe(n,e,i),r(e,l),o||(a=he(e,"click",ve(pe(t[9]))),o=!0)},p(n,i){i&97&&s!==(s=we(n[0].name,n[6]||n[5])+"")&&se(l,s)},d(n){n&&u(e),o=!1,a()}}}function Ct(t){var ae,re,ne;let e,s,l,o,a,n,i,c,d,I=x(t[0].startTime,t[1])+"",_,W,g,h,f,R,D,A,T,S=x(t[0].endTime,t[1])+"",b,E,L,U,Q=x(t[0].startTime,t[1])+"",B,M,G,q,V,z,Z,O=x(t[0].endTime,t[1])+"",ee,H;return o=new _t({props:{status:t[0].status,delay:He(t[0].startTime)}}),i=new ht({props:{bottom:!0,copyable:!0,text:t[0].id,$$slots:{default:[zt]},$$scope:{ctx:t}}}),D=new Vt({props:{bottom:!0,content:t[0].name,onFilter:t[10],filtered:(ne=(re=(ae=t[3].url)==null?void 0:ae.searchParams)==null?void 0:re.get("query"))==null?void 0:ne.includes(t[0].name),$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){e=p("a"),s=p("div"),l=p("div"),ue(o.$$.fragment),a=C(),n=p("div"),ue(i.$$.fragment),c=C(),d=p("p"),_=P(I),W=C(),g=p("div"),h=p("h3"),f=P("Workflow Name:"),R=C(),ue(D.$$.fragment),A=C(),T=p("p"),b=P(S),E=C(),L=p("div"),U=p("p"),B=P(Q),M=C(),G=p("span"),q=P("-"),V=C(),z=p("div"),Z=p("p"),ee=P(O),this.h()},l(m){e=w(m,"A",{href:!0,class:!0});var v=k(e);s=w(v,"DIV",{class:!0});var X=k(s);l=w(X,"DIV",{});var le=k(l);ce(o.$$.fragment,le),le.forEach(u),X.forEach(u),a=F(v),n=w(v,"DIV",{class:!0});var J=k(n);ce(i.$$.fragment,J),c=F(J),d=w(J,"P",{class:!0});var ie=k(d);_=N(ie,I),ie.forEach(u),J.forEach(u),W=F(v),g=w(v,"DIV",{class:!0});var Y=k(g);h=w(Y,"H3",{class:!0});var fe=k(h);f=N(fe,"Workflow Name:"),fe.forEach(u),R=F(Y),ce(D.$$.fragment,Y),A=F(Y),T=w(Y,"P",{class:!0});var Ce=k(T);b=N(Ce,S),Ce.forEach(u),Y.forEach(u),E=F(v),L=w(v,"DIV",{class:!0});var Fe=k(L);U=w(Fe,"P",{});var Pe=k(U);B=N(Pe,Q),Pe.forEach(u),Fe.forEach(u),M=F(v),G=w(v,"SPAN",{class:!0});var Ne=k(G);q=N(Ne,"-"),Ne.forEach(u),V=F(v),z=w(v,"DIV",{class:!0});var Ae=k(z);Z=w(Ae,"P",{});var Le=k(Z);ee=N(Le,O),Le.forEach(u),Ae.forEach(u),v.forEach(u),this.h()},h(){y(s,"class","cell svelte-3bzomh"),y(d,"class","time-cell-inline svelte-3bzomh"),y(n,"class","cell overflow-cell links font-medium md:font-normal svelte-3bzomh"),y(h,"class","md:hidden"),y(T,"class","time-cell-inline svelte-3bzomh"),y(g,"class","cell links flex gap-2 font-medium md:font-normal svelte-3bzomh"),y(L,"class","time-cell font-normal svelte-3bzomh"),y(G,"class","md:hidden"),y(z,"class","time-cell font-medium md:font-normal svelte-3bzomh"),y(e,"href",t[2]),y(e,"class","row group svelte-3bzomh")},m(m,v){oe(m,e,v),r(e,s),r(s,l),me(o,l,null),r(e,a),r(e,n),me(i,n,null),r(n,c),r(n,d),r(d,_),r(e,W),r(e,g),r(g,h),r(h,f),r(g,R),me(D,g,null),r(g,A),r(g,T),r(T,b),r(e,E),r(e,L),r(L,U),r(U,B),r(e,M),r(e,G),r(G,q),r(e,V),r(e,z),r(z,Z),r(Z,ee),H=!0},p(m,[v]){var ie,Y,fe;const X={};v&1&&(X.status=m[0].status),v&1&&(X.delay=He(m[0].startTime)),o.$set(X);const le={};v&1&&(le.text=m[0].id),v&2097&&(le.$$scope={dirty:v,ctx:m}),i.$set(le),(!H||v&3)&&I!==(I=x(m[0].startTime,m[1])+"")&&se(_,I);const J={};v&1&&(J.content=m[0].name),v&1&&(J.onFilter=m[10]),v&9&&(J.filtered=(fe=(Y=(ie=m[3].url)==null?void 0:ie.searchParams)==null?void 0:Y.get("query"))==null?void 0:fe.includes(m[0].name)),v&2145&&(J.$$scope={dirty:v,ctx:m}),D.$set(J),(!H||v&3)&&S!==(S=x(m[0].endTime,m[1])+"")&&se(b,S),(!H||v&3)&&Q!==(Q=x(m[0].startTime,m[1])+"")&&se(B,Q),(!H||v&3)&&O!==(O=x(m[0].endTime,m[1])+"")&&se(ee,O),(!H||v&4)&&y(e,"href",m[2])},i(m){H||(K(o.$$.fragment,m),K(i.$$.fragment,m),K(D.$$.fragment,m),H=!0)},o(m){j(o.$$.fragment,m),j(i.$$.fragment,m),j(D.$$.fragment,m),H=!1},d(m){m&&u(e),de(o),de(i),de(D)}}}function Ft(t,e,s){let l,o,a,n,i;te(t,st,h=>s(3,o=h)),te(t,Ee,h=>s(4,a=h)),te(t,Ie,h=>s(5,n=h)),te(t,Te,h=>s(6,i=h));let{namespace:c}=e,{workflow:d}=e,{timeFormat:I}=e;const _=h=>{const f=Ke({timeRange:"All"}),R=o.url.searchParams.get("query"),D=Tt(R!=null?R:f),A=(D==null?void 0:D.workflowType)===h?"":h,T=Ke(Be(Ue({},D),{workflowType:A}));nt({url:o.url,parameter:"query",value:T,allowEmpty:!0,goto:ot})},W=()=>_(d.name),g=()=>_(d.name);return t.$$set=h=>{"namespace"in h&&s(8,c=h.namespace),"workflow"in h&&s(0,d=h.workflow),"timeFormat"in h&&s(1,I=h.timeFormat)},t.$$.update=()=>{t.$$.dirty&257&&s(2,l=rt({namespace:c,workflow:d.id,run:d.runId}))},[d,I,l,o,a,n,i,_,c,W,g]}class Gt extends Se{constructor(e){super(),We(this,e,Ft,Ct,ke,{namespace:8,workflow:0,timeFormat:1})}}export{jt as W,Gt as a,Tt as t};