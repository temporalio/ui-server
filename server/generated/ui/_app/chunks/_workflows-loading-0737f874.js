import{S as se,i as ne,s as oe,K as Ce,e as h,t as S,k as y,c as v,a as g,h as F,d as u,m as V,b as _,g as A,L as c,M as We,N as Ae,O as ze,q as T,o as C,w as L,x as R,y as q,j as ae,B,I as ue,P as Pe,ar as Ne,as as we,W as de,at as Oe,n as me,p as _e,au as Se,F as Le,G as Re,H as qe,T as X,l as ce,J as ye}from"./vendor-426d11b3.js";import{f as ie}from"./format-date-2b9fdbbd.js";import{n as Be}from"./namespace-6122aeb7.js";import{W as Ue,d as be}from"./workflow-status-f6e8f334.js";import{a as je}from"./route-for-f402e023.js";import{p as Fe}from"./stores-d09229ea.js";import{g as Ve}from"./navigation-093db9e2.js";import{S as Qe,O as re}from"./select-d9bfa88a.js";import{u as He,F as ke}from"./filter-select-de7fe7ec.js";function Ge(o){let e,a,t,l,i,s,r,n,f,$,p,w,d,E,m,b,N,U,z,j,M,Q,H,G;const J=o[1].default,W=Ce(J,o,o[0],null);return{c(){e=h("section"),a=h("div"),t=h("div"),l=h("div"),i=S("Status"),s=y(),r=h("div"),n=S("Workflow ID"),f=y(),$=h("div"),p=S("Type"),w=y(),d=h("div"),E=S("Started"),m=y(),b=h("div"),N=S("End"),U=y(),z=h("div"),j=h("div"),M=S("Summary"),Q=y(),H=h("div"),W&&W.c(),this.h()},l(D){e=v(D,"SECTION",{class:!0});var P=g(e);a=v(P,"DIV",{class:!0});var O=g(a);t=v(O,"DIV",{class:!0});var k=g(t);l=v(k,"DIV",{class:!0});var I=g(l);i=F(I,"Status"),I.forEach(u),s=V(k),r=v(k,"DIV",{class:!0});var K=g(r);n=F(K,"Workflow ID"),K.forEach(u),f=V(k),$=v(k,"DIV",{class:!0});var Y=g($);p=F(Y,"Type"),Y.forEach(u),w=V(k),d=v(k,"DIV",{class:!0});var Z=g(d);E=F(Z,"Started"),Z.forEach(u),m=V(k),b=v(k,"DIV",{class:!0});var x=g(b);N=F(x,"End"),x.forEach(u),k.forEach(u),O.forEach(u),U=V(P),z=v(P,"DIV",{class:!0});var ee=g(z);j=v(ee,"DIV",{class:!0});var te=g(j);M=F(te,"Summary"),te.forEach(u),ee.forEach(u),Q=V(P),H=v(P,"DIV",{class:!0});var le=g(H);W&&W.l(le),le.forEach(u),P.forEach(u),this.h()},h(){_(l,"class","table-header rounded-tl-lg svelte-11xf5ac"),_(r,"class","table-header svelte-11xf5ac"),_($,"class","table-header svelte-11xf5ac"),_(d,"class","table-header svelte-11xf5ac"),_(b,"class","table-header rounded-tr-lg svelte-11xf5ac"),_(t,"class","md:table-row hidden"),_(a,"class","md:table-header-group bg-gray-100 rounded-t-lg"),_(j,"class","bg-gray-100 p-2 border-b rounded-t-lg"),_(z,"class","md:hidden"),_(H,"class","overflow-y-auto md:table-row-group"),_(e,"class","workflow-table svelte-11xf5ac")},m(D,P){A(D,e,P),c(e,a),c(a,t),c(t,l),c(l,i),c(t,s),c(t,r),c(r,n),c(t,f),c(t,$),c($,p),c(t,w),c(t,d),c(d,E),c(t,m),c(t,b),c(b,N),c(e,U),c(e,z),c(z,j),c(j,M),c(e,Q),c(e,H),W&&W.m(H,null),G=!0},p(D,[P]){W&&W.p&&(!G||P&1)&&We(W,J,D,D[0],G?ze(J,D[0],P,null):Ae(D[0]),null)},i(D){G||(T(W,D),G=!0)},o(D){C(W,D),G=!1},d(D){D&&u(e),W&&W.d(D)}}}function Je(o,e,a){let{$$slots:t={},$$scope:l}=e;return o.$$set=i=>{"$$scope"in i&&a(0,l=i.$$scope)},[l,t]}class It extends se{constructor(e){super();ne(this,e,Je,Ge,oe,{})}}function Ke(o){let e,a,t,l,i,s,r,n=o[0].id+"",f,$,p,w,d,E=o[0].name+"",m,b,N,U,z=ie(o[0].startTime,o[1])+"",j,M,Q,H,G,J,W,D=ie(o[0].endTime,o[1])+"",P,O;return l=new Ue({props:{status:o[0].status}}),{c(){e=h("article"),a=h("div"),t=h("div"),L(l.$$.fragment),i=y(),s=h("div"),r=h("a"),f=S(n),$=y(),p=h("div"),w=h("h3"),d=h("a"),m=S(E),b=y(),N=h("div"),U=h("p"),j=S(z),M=y(),Q=h("span"),H=S("-"),G=y(),J=h("div"),W=h("p"),P=S(D),this.h()},l(k){e=v(k,"ARTICLE",{class:!0});var I=g(e);a=v(I,"DIV",{class:!0});var K=g(a);t=v(K,"DIV",{});var Y=g(t);R(l.$$.fragment,Y),Y.forEach(u),K.forEach(u),i=V(I),s=v(I,"DIV",{class:!0});var Z=g(s);r=v(Z,"A",{href:!0,class:!0});var x=g(r);f=F(x,n),x.forEach(u),Z.forEach(u),$=V(I),p=v(I,"DIV",{class:!0});var ee=g(p);w=v(ee,"H3",{});var te=g(w);d=v(te,"A",{href:!0,class:!0});var le=g(d);m=F(le,E),le.forEach(u),te.forEach(u),ee.forEach(u),b=V(I),N=v(I,"DIV",{class:!0});var pe=g(N);U=v(pe,"P",{});var he=g(U);j=F(he,z),he.forEach(u),pe.forEach(u),M=V(I),Q=v(I,"SPAN",{class:!0});var ve=g(Q);H=F(ve,"-"),ve.forEach(u),G=V(I),J=v(I,"DIV",{class:!0});var $e=g(J);W=v($e,"P",{});var ge=g(W);P=F(ge,D),ge.forEach(u),$e.forEach(u),I.forEach(u),this.h()},h(){_(a,"class","cell svelte-zzw2vo"),_(r,"href",o[2]),_(r,"class","underline"),_(s,"class","cell links font-medium md:font-normal svelte-zzw2vo"),_(d,"href",o[2]),_(d,"class","underline"),_(p,"class","cell links svelte-zzw2vo"),_(N,"class","inline-block cell svelte-zzw2vo"),_(Q,"class","md:hidden"),_(J,"class","inline-block cell svelte-zzw2vo"),_(e,"class","row svelte-zzw2vo")},m(k,I){A(k,e,I),c(e,a),c(a,t),q(l,t,null),c(e,i),c(e,s),c(s,r),c(r,f),c(e,$),c(e,p),c(p,w),c(w,d),c(d,m),c(e,b),c(e,N),c(N,U),c(U,j),c(e,M),c(e,Q),c(Q,H),c(e,G),c(e,J),c(J,W),c(W,P),O=!0},p(k,[I]){const K={};I&1&&(K.status=k[0].status),l.$set(K),(!O||I&1)&&n!==(n=k[0].id+"")&&ae(f,n),(!O||I&4)&&_(r,"href",k[2]),(!O||I&1)&&E!==(E=k[0].name+"")&&ae(m,E),(!O||I&4)&&_(d,"href",k[2]),(!O||I&3)&&z!==(z=ie(k[0].startTime,k[1])+"")&&ae(j,z),(!O||I&3)&&D!==(D=ie(k[0].endTime,k[1])+"")&&ae(P,D)},i(k){O||(T(l.$$.fragment,k),O=!0)},o(k){C(l.$$.fragment,k),O=!1},d(k){k&&u(e),B(l)}}}function Me(o,e,a){let t,l;ue(o,Be,r=>a(3,l=r));let{workflow:i}=e,{timeFormat:s}=e;return o.$$set=r=>{"workflow"in r&&a(0,i=r.workflow),"timeFormat"in r&&a(1,s=r.timeFormat)},o.$$.update=()=>{o.$$.dirty&9&&a(2,t=je({namespace:l,workflow:i.id,run:i.runId}))},[i,s,t,l]}class Tt extends se{constructor(e){super();ne(this,e,Me,Ke,oe,{workflow:0,timeFormat:1})}}function Xe(o){let e,a,t,l,i,s,r,n,f,$,p;return s=new Pe({props:{icon:Ne,scale:.9,color:"gray",class:"flex items-center"}}),{c(){e=h("div"),a=h("label"),t=S(o[0]),l=y(),i=h("span"),L(s.$$.fragment),r=y(),n=h("input"),this.h()},l(w){e=v(w,"DIV",{class:!0});var d=g(e);a=v(d,"LABEL",{for:!0,class:!0});var E=g(a);t=F(E,o[0]),E.forEach(u),l=V(d),i=v(d,"SPAN",{class:!0});var m=g(i);R(s.$$.fragment,m),m.forEach(u),r=V(d),n=v(d,"INPUT",{class:!0,placeholder:!0,id:!0}),d.forEach(u),this.h()},h(){_(a,"for",o[2]),_(a,"class","hidden"),_(i,"class","svelte-fxm0nn"),_(n,"class","block w-full"),_(n,"placeholder",o[0]),_(n,"id",o[2]),_(e,"class","input-container svelte-fxm0nn")},m(w,d){A(w,e,d),c(e,a),c(a,t),c(e,l),c(e,i),q(s,i,null),c(e,r),c(e,n),we(n,o[1]),f=!0,$||(p=de(n,"input",o[6]),$=!0)},p(w,[d]){(!f||d&1)&&ae(t,w[0]),(!f||d&1)&&_(n,"placeholder",w[0]),d&2&&n.value!==w[1]&&we(n,w[1])},i(w){f||(T(s.$$.fragment,w),f=!0)},o(w){C(s.$$.fragment,w),f=!1},d(w){w&&u(e),B(s),$=!1,p()}}}function Ye(o,e,a){let t;ue(o,Fe,p=>a(5,t=p));let{parameter:l}=e,{name:i}=e,{value:s}=e,r=l&&t.url.searchParams.get(l)||s;const n=`${l||i}-filter`,f=Oe(He,300);function $(){r=this.value,a(1,r)}return o.$$set=p=>{"parameter"in p&&a(3,l=p.parameter),"name"in p&&a(0,i=p.name),"value"in p&&a(4,s=p.value)},o.$$.update=()=>{o.$$.dirty&42&&f({parameter:l,value:r,url:t.url,goto:Ve})},[i,r,n,l,s,t,$]}class fe extends se{constructor(e){super();ne(this,e,Ye,Xe,oe,{parameter:3,name:0,value:4})}}function Ee(o,e,a){const t=o.slice();return t[6]=e[a][0],t[7]=e[a][1],t}function Ie(o,e,a){const t=o.slice();return t[7]=e[a],t}function Ze(o){let e,a,t,l,i;return{c(){e=h("a"),a=S("Advanced Search"),this.h()},l(s){e=v(s,"A",{href:!0,class:!0});var r=g(e);a=F(r,"Advanced Search"),r.forEach(u),this.h()},h(){_(e,"href",t=o[2].url.pathname+"?query=''"),_(e,"class","text-blue-700")},m(s,r){A(s,e,r),c(e,a),l||(i=de(e,"click",Se(o[4]("advanced"))),l=!0)},p(s,r){r&4&&t!==(t=s[2].url.pathname+"?query=''")&&_(e,"href",t)},d(s){s&&u(e),l=!1,i()}}}function xe(o){let e,a,t,l,i;return{c(){e=h("a"),a=S("Basic Search"),this.h()},l(s){e=v(s,"A",{href:!0,class:!0});var r=g(e);a=F(r,"Basic Search"),r.forEach(u),this.h()},h(){_(e,"href",t=o[2].url.pathname),_(e,"class","text-blue-700")},m(s,r){A(s,e,r),c(e,a),l||(i=de(e,"click",Se(o[4]("basic"))),l=!0)},p(s,r){r&4&&t!==(t=s[2].url.pathname)&&_(e,"href",t)},d(s){s&&u(e),l=!1,i()}}}function et(o){let e,a,t,l,i,s,r,n,f,$,p,w;a=new fe({props:{parameter:"workflow-id",name:"Workflow ID",value:ut}}),l=new fe({props:{parameter:"workflow-type",name:"Workflow Type",value:dt}}),s=new ke({props:{label:"Time Range",parameter:"time-range",value:"24 hours",$$slots:{default:[at]},$$scope:{ctx:o}}}),n=new ke({props:{label:"Workflow Status",parameter:"status",value:null,$$slots:{default:[st]},$$scope:{ctx:o}}});function d(m){o[5](m)}let E={id:"filter-by-relative-time",$$slots:{default:[ct]},$$scope:{ctx:o}};return o[0]!==void 0&&(E.value=o[0]),$=new Qe({props:E}),Le.push(()=>Re($,"value",d)),{c(){e=h("div"),L(a.$$.fragment),t=y(),L(l.$$.fragment),i=y(),L(s.$$.fragment),r=y(),L(n.$$.fragment),f=y(),L($.$$.fragment),this.h()},l(m){e=v(m,"DIV",{class:!0});var b=g(e);R(a.$$.fragment,b),t=V(b),R(l.$$.fragment,b),i=V(b),R(s.$$.fragment,b),r=V(b),R(n.$$.fragment,b),f=V(b),R($.$$.fragment,b),b.forEach(u),this.h()},h(){_(e,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4")},m(m,b){A(m,e,b),q(a,e,null),c(e,t),q(l,e,null),c(e,i),q(s,e,null),c(e,r),q(n,e,null),c(e,f),q($,e,null),w=!0},p(m,b){const N={};b&4096&&(N.$$scope={dirty:b,ctx:m}),s.$set(N);const U={};b&4096&&(U.$$scope={dirty:b,ctx:m}),n.$set(U);const z={};b&4096&&(z.$$scope={dirty:b,ctx:m}),!p&&b&1&&(p=!0,z.value=m[0],qe(()=>p=!1)),$.$set(z)},i(m){w||(T(a.$$.fragment,m),T(l.$$.fragment,m),T(s.$$.fragment,m),T(n.$$.fragment,m),T($.$$.fragment,m),w=!0)},o(m){C(a.$$.fragment,m),C(l.$$.fragment,m),C(s.$$.fragment,m),C(n.$$.fragment,m),C($.$$.fragment,m),w=!1},d(m){m&&u(e),B(a),B(l),B(s),B(n),B($)}}}function tt(o){let e,a;return e=new fe({props:{parameter:"query",name:"Query",value:""}}),{c(){L(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,l){q(e,t,l),a=!0},p:X,i(t){a||(T(e.$$.fragment,t),a=!0)},o(t){C(e.$$.fragment,t),a=!1},d(t){B(e,t)}}}function lt(o){let e=o[7]+"",a;return{c(){a=S(e)},l(t){a=F(t,e)},m(t,l){A(t,a,l)},p:X,d(t){t&&u(a)}}}function Te(o){let e,a;return e=new re({props:{value:o[7],$$slots:{default:[lt]},$$scope:{ctx:o}}}),{c(){L(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,l){q(e,t,l),a=!0},p(t,l){const i={};l&4096&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){a||(T(e.$$.fragment,t),a=!0)},o(t){C(e.$$.fragment,t),a=!1},d(t){B(e,t)}}}function at(o){let e,a,t=be,l=[];for(let s=0;s<t.length;s+=1)l[s]=Te(Ie(o,t,s));const i=s=>C(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=ce()},l(s){for(let r=0;r<l.length;r+=1)l[r].l(s);e=ce()},m(s,r){for(let n=0;n<l.length;n+=1)l[n].m(s,r);A(s,e,r),a=!0},p(s,r){if(r&0){t=be;let n;for(n=0;n<t.length;n+=1){const f=Ie(s,t,n);l[n]?(l[n].p(f,r),T(l[n],1)):(l[n]=Te(f),l[n].c(),T(l[n],1),l[n].m(e.parentNode,e))}for(me(),n=t.length;n<l.length;n+=1)i(n);_e()}},i(s){if(!a){for(let r=0;r<t.length;r+=1)T(l[r]);a=!0}},o(s){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)C(l[r]);a=!1},d(s){ye(l,s),s&&u(e)}}}function rt(o){let e=o[6]+"",a;return{c(){a=S(e)},l(t){a=F(t,e)},m(t,l){A(t,a,l)},p:X,d(t){t&&u(a)}}}function De(o){let e,a;return e=new re({props:{value:o[7],$$slots:{default:[rt]},$$scope:{ctx:o}}}),{c(){L(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,l){q(e,t,l),a=!0},p(t,l){const i={};l&4096&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){a||(T(e.$$.fragment,t),a=!0)},o(t){C(e.$$.fragment,t),a=!1},d(t){B(e,t)}}}function st(o){let e,a,t=Object.entries(o[3]),l=[];for(let s=0;s<t.length;s+=1)l[s]=De(Ee(o,t,s));const i=s=>C(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=ce()},l(s){for(let r=0;r<l.length;r+=1)l[r].l(s);e=ce()},m(s,r){for(let n=0;n<l.length;n+=1)l[n].m(s,r);A(s,e,r),a=!0},p(s,r){if(r&8){t=Object.entries(s[3]);let n;for(n=0;n<t.length;n+=1){const f=Ee(s,t,n);l[n]?(l[n].p(f,r),T(l[n],1)):(l[n]=De(f),l[n].c(),T(l[n],1),l[n].m(e.parentNode,e))}for(me(),n=t.length;n<l.length;n+=1)i(n);_e()}},i(s){if(!a){for(let r=0;r<t.length;r+=1)T(l[r]);a=!0}},o(s){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)C(l[r]);a=!1},d(s){ye(l,s),s&&u(e)}}}function nt(o){let e;return{c(){e=S("Relative")},l(a){e=F(a,"Relative")},m(a,t){A(a,e,t)},d(a){a&&u(e)}}}function ot(o){let e;return{c(){e=S("UTC")},l(a){e=F(a,"UTC")},m(a,t){A(a,e,t)},d(a){a&&u(e)}}}function it(o){let e;return{c(){e=S("Local")},l(a){e=F(a,"Local")},m(a,t){A(a,e,t)},d(a){a&&u(e)}}}function ct(o){let e,a,t,l,i,s;return e=new re({props:{value:"relative",$$slots:{default:[nt]},$$scope:{ctx:o}}}),t=new re({props:{value:"UTC",$$slots:{default:[ot]},$$scope:{ctx:o}}}),i=new re({props:{value:"local",$$slots:{default:[it]},$$scope:{ctx:o}}}),{c(){L(e.$$.fragment),a=y(),L(t.$$.fragment),l=y(),L(i.$$.fragment)},l(r){R(e.$$.fragment,r),a=V(r),R(t.$$.fragment,r),l=V(r),R(i.$$.fragment,r)},m(r,n){q(e,r,n),A(r,a,n),q(t,r,n),A(r,l,n),q(i,r,n),s=!0},p(r,n){const f={};n&4096&&(f.$$scope={dirty:n,ctx:r}),e.$set(f);const $={};n&4096&&($.$$scope={dirty:n,ctx:r}),t.$set($);const p={};n&4096&&(p.$$scope={dirty:n,ctx:r}),i.$set(p)},i(r){s||(T(e.$$.fragment,r),T(t.$$.fragment,r),T(i.$$.fragment,r),s=!0)},o(r){C(e.$$.fragment,r),C(t.$$.fragment,r),C(i.$$.fragment,r),s=!1},d(r){B(e,r),r&&u(a),B(t,r),r&&u(l),B(i,r)}}}function ft(o){let e,a,t,l,i,s;function r(d,E){return d[1]?xe:Ze}let n=r(o),f=n(o);const $=[tt,et],p=[];function w(d,E){return d[1]?0:1}return l=w(o),i=p[l]=$[l](o),{c(){e=h("section"),a=h("p"),f.c(),t=y(),i.c(),this.h()},l(d){e=v(d,"SECTION",{class:!0});var E=g(e);a=v(E,"P",{class:!0});var m=g(a);f.l(m),m.forEach(u),t=V(E),i.l(E),E.forEach(u),this.h()},h(){_(a,"class","text-right text-xs"),_(e,"class","flex flex-col gap-2")},m(d,E){A(d,e,E),c(e,a),f.m(a,null),c(e,t),p[l].m(e,null),s=!0},p(d,[E]){n===(n=r(d))&&f?f.p(d,E):(f.d(1),f=n(d),f&&(f.c(),f.m(a,null)));let m=l;l=w(d),l===m?p[l].p(d,E):(me(),C(p[m],1,1,()=>{p[m]=null}),_e(),i=p[l],i?i.p(d,E):(i=p[l]=$[l](d),i.c()),T(i,1),i.m(e,null))},i(d){s||(T(i),s=!0)},o(d){C(i),s=!1},d(d){d&&u(e),f.d(),p[l].d()}}}let ut="",dt="";function mt(o,e,a){let t;ue(o,Fe,f=>a(2,t=f));let{timeFormat:l="UTC"}=e;const i={All:null,Running:"Running","Timed Out":"TimedOut",Completed:"Completed",Failed:"Failed","Continued as New":"ContinuedAsNew",Canceled:"Canceled",Terminated:"Terminated"};let s=t.url.searchParams.has("query");const r=f=>$=>{const p=$.target;a(1,s=f==="advanced"),s||t.url.searchParams.delete("query"),Ve(p.href)};function n(f){l=f,a(0,l)}return o.$$set=f=>{"timeFormat"in f&&a(0,l=f.timeFormat)},[l,s,t,i,r,n]}class Dt extends se{constructor(e){super();ne(this,e,mt,ft,oe,{timeFormat:0})}}function _t(o){let e,a,t;return{c(){e=h("tr"),a=h("td"),t=S("Loading"),this.h()},l(l){e=v(l,"TR",{});var i=g(e);a=v(i,"TD",{colspan:!0,class:!0});var s=g(a);t=F(s,"Loading"),s.forEach(u),i.forEach(u),this.h()},h(){_(a,"colspan","5"),_(a,"class","m-auto p-12 text-center font-extralight text-2xl")},m(l,i){A(l,e,i),c(e,a),c(a,t)},p:X,i:X,o:X,d(l){l&&u(e)}}}class St extends se{constructor(e){super();ne(this,e,null,_t,oe,{})}}export{Dt as W,St as a,It as b,Tt as c};