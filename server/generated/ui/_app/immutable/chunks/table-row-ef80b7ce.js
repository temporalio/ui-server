import{S as Q,i as Z,s as y,l as L,a as P,m as A,n as H,h as k,c as z,p as E,T as N,b as S,N as T,U as R,V as ue,g as U,t as g,d as V,f as m,H as he,P as _e,D as q,W as B,X as I,r as de,u as be,F as p,av as me,e as w,aw as ke,x as W,y as F,z as J,C as K,J as O,K as X,L as Y,M as G,a0 as x,a8 as $,a9 as ee,q as se}from"./index-e693a59e.js";import{I as oe}from"./icon-9e3c01e3.js";function ge(t){let e;return{c(){e=de("\xA0")},l(l){e=be(l,"\xA0")},m(l,a){S(l,e,a)},p,d(l){l&&k(e)}}}function ve(t){let e,l;return{c(){e=new me(!1),l=w(),this.h()},l(a){e=ke(a,!1),l=w(),this.h()},h(){e.a=l},m(a,r){e.m(t[2],a,r),S(a,l,r)},p(a,r){r&4&&e.p(a[2])},d(a){a&&k(l),a&&e.d()}}}function Ee(t){let e,l;return e=new oe({props:{class:"absolute top-0 left-0 h-4 w-4",name:"checkmark",strokeWidth:3}}),{c(){W(e.$$.fragment)},l(a){F(e.$$.fragment,a)},m(a,r){J(e,a,r),l=!0},i(a){l||(m(e.$$.fragment,a),l=!0)},o(a){g(e.$$.fragment,a),l=!1},d(a){K(e,a)}}}function Te(t){let e,l;return e=new oe({props:{class:"absolute top-0 left-0 h-4 w-4",name:"hyphen"}}),{c(){W(e.$$.fragment)},l(a){F(e.$$.fragment,a)},m(a,r){J(e,a,r),l=!0},i(a){l||(m(e.$$.fragment,a),l=!0)},o(a){g(e.$$.fragment,a),l=!1},d(a){K(e,a)}}}function De(t){let e,l,a,r,_,n,i,f,d,s,h,o;function u(b,D){return b[2]?ve:ge}let c=u(t),v=c(t);const M=[Te,Ee],C=[];function te(b,D){return b[4]?0:b[0]?1:-1}return~(i=te(t))&&(f=C[i]=M[i](t)),{c(){e=L("label"),l=L("span"),v.c(),a=P(),r=L("input"),_=P(),n=L("span"),f&&f.c(),this.h()},l(b){e=A(b,"LABEL",{class:!0});var D=H(e);l=A(D,"SPAN",{class:!0});var j=H(l);v.l(j),j.forEach(k),a=z(D),r=A(D,"INPUT",{id:!0,type:!0,class:!0}),_=z(D),n=A(D,"SPAN",{class:!0});var ae=H(n);f&&f.l(ae),ae.forEach(k),D.forEach(k),this.h()},h(){E(l,"class","label svelte-1755sw1"),E(r,"id",t[1]),E(r,"type","checkbox"),r.indeterminate=t[4],r.disabled=t[5],E(r,"class","svelte-1755sw1"),N(r,"indeterminate",t[4]),E(n,"class","checkmark svelte-1755sw1"),N(n,"on-dark",t[3]),E(e,"class",d="checkbox "+t[7].class+" svelte-1755sw1"),N(e,"disabled",t[5]),N(e,"on-dark",t[3])},m(b,D){S(b,e,D),T(e,l),v.m(l,null),T(e,a),T(e,r),r.checked=t[0],T(e,_),T(e,n),~i&&C[i].m(n,null),s=!0,h||(o=[R(r,"click",ue(t[9])),R(r,"change",t[6]),R(r,"change",t[10]),R(e,"click",t[8])],h=!0)},p(b,[D]){c===(c=u(b))&&v?v.p(b,D):(v.d(1),v=c(b),v&&(v.c(),v.m(l,null))),(!s||D&2)&&E(r,"id",b[1]),(!s||D&16)&&(r.indeterminate=b[4]),(!s||D&32)&&(r.disabled=b[5]),D&1&&(r.checked=b[0]),(!s||D&16)&&N(r,"indeterminate",b[4]);let j=i;i=te(b),i!==j&&(f&&(U(),g(C[j],1,1,()=>{C[j]=null}),V()),~i?(f=C[i],f||(f=C[i]=M[i](b),f.c()),m(f,1),f.m(n,null)):f=null),(!s||D&8)&&N(n,"on-dark",b[3]),(!s||D&128&&d!==(d="checkbox "+b[7].class+" svelte-1755sw1"))&&E(e,"class",d),(!s||D&160)&&N(e,"disabled",b[5]),(!s||D&136)&&N(e,"on-dark",b[3])},i(b){s||(m(f),s=!0)},o(b){g(f),s=!1},d(b){b&&k(e),v.d(),~i&&C[i].d(),h=!1,he(o)}}}function Le(t,e,l){let{id:a=""}=e,{checked:r=!1}=e,{label:_=null}=e,{onDark:n=!1}=e,{indeterminate:i=!1}=e,{disabled:f=!1}=e;const d=_e(),s=c=>{d("change",{checked:c.target.checked})};function h(c){I.call(this,t,c)}function o(c){I.call(this,t,c)}function u(){r=this.checked,l(0,r)}return t.$$set=c=>{l(7,e=q(q({},e),B(c))),"id"in c&&l(1,a=c.id),"checked"in c&&l(0,r=c.checked),"label"in c&&l(2,_=c.label),"onDark"in c&&l(3,n=c.onDark),"indeterminate"in c&&l(4,i=c.indeterminate),"disabled"in c&&l(5,f=c.disabled)},e=B(e),[r,a,_,n,i,f,s,e,h,o,u]}class le extends Q{constructor(e){super(),Z(this,e,Le,De,y,{id:1,checked:0,label:2,onDark:3,indeterminate:4,disabled:5})}}function ne(t){let e,l,a;function r(n){t[7](n)}let _={onDark:!0,indeterminate:t[3],label:t[2]};return t[0]!==void 0&&(_.checked=t[0]),e=new le({props:_}),x.push(()=>$(e,"checked",r)),e.$on("change",t[8]),{c(){W(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,i){J(e,n,i),a=!0},p(n,i){const f={};i&8&&(f.indeterminate=n[3]),i&4&&(f.label=n[2]),!l&&i&1&&(l=!0,f.checked=n[0],ee(()=>l=!1)),e.$set(f)},i(n){a||(m(e.$$.fragment,n),a=!0)},o(n){g(e.$$.fragment,n),a=!1},d(n){K(e,n)}}}function Ae(t){let e,l,a,r,_,n,i,f=t[1]&&ne(t);const d=t[6].default,s=O(d,t,t[5],null);return{c(){e=L("tr"),l=L("th"),f&&f.c(),a=P(),s&&s.c(),r=P(),_=L("th"),this.h()},l(h){e=A(h,"TR",{class:!0});var o=H(e);l=A(o,"TH",{});var u=H(l);f&&f.l(u),u.forEach(k),a=z(o),s&&s.l(o),r=z(o),_=A(o,"TH",{}),H(_).forEach(k),o.forEach(k),this.h()},h(){N(l,"selectable",t[1]),N(_,"selectable",t[1]),E(e,"class",n=t[4].class)},m(h,o){S(h,e,o),T(e,l),f&&f.m(l,null),T(e,a),s&&s.m(e,null),T(e,r),T(e,_),i=!0},p(h,[o]){h[1]?f?(f.p(h,o),o&2&&m(f,1)):(f=ne(h),f.c(),m(f,1),f.m(l,null)):f&&(U(),g(f,1,1,()=>{f=null}),V()),(!i||o&2)&&N(l,"selectable",h[1]),s&&s.p&&(!i||o&32)&&X(s,d,h,h[5],i?G(d,h[5],o,null):Y(h[5]),null),(!i||o&2)&&N(_,"selectable",h[1]),(!i||o&16&&n!==(n=h[4].class))&&E(e,"class",n)},i(h){i||(m(f),m(s,h),i=!0)},o(h){g(f),g(s,h),i=!1},d(h){h&&k(e),f&&f.d(),s&&s.d(h)}}}function He(t,e,l){let{$$slots:a={},$$scope:r}=e,{selectable:_=!1}=e,{selected:n=!1}=e,{checkboxLabel:i=null}=e,{indeterminate:f=!1}=e;function d(h){n=h,l(0,n)}function s(h){I.call(this,t,h)}return t.$$set=h=>{l(4,e=q(q({},e),B(h))),"selectable"in h&&l(1,_=h.selectable),"selected"in h&&l(0,n=h.selected),"checkboxLabel"in h&&l(2,i=h.checkboxLabel),"indeterminate"in h&&l(3,f=h.indeterminate),"$$scope"in h&&l(5,r=h.$$scope)},e=B(e),[n,_,i,f,e,r,a,d,s]}class We extends Q{constructor(e){super(),Z(this,e,He,Ae,y,{selectable:1,selected:0,checkboxLabel:2,indeterminate:3})}}function Ne(t){let e,l;return{c(){e=L("div"),l=L("span"),this.h()},l(a){e=A(a,"DIV",{class:!0});var r=H(e);l=A(r,"SPAN",{style:!0,class:!0}),H(l).forEach(k),r.forEach(k),this.h()},h(){se(l,"width",t[0]),E(l,"class","svelte-w1jq9g"),E(e,"class","meter svelte-w1jq9g")},m(a,r){S(a,e,r),T(e,l)},p(a,[r]){r&1&&se(l,"width",a[0])},i:p,o:p,d(a){a&&k(e)}}}function Pe(t,e,l){let{width:a="100%"}=e;return t.$$set=r=>{"width"in r&&l(0,a=r.width)},[a]}class ze extends Q{constructor(e){super(),Z(this,e,Pe,Ne,y,{width:0})}}const Se=t=>({}),ce=t=>({});function ie(t){let e,l;return e=new ze({}),{c(){W(e.$$.fragment)},l(a){F(e.$$.fragment,a)},m(a,r){J(e,a,r),l=!0},i(a){l||(m(e.$$.fragment,a),l=!0)},o(a){g(e.$$.fragment,a),l=!1},d(a){K(e,a)}}}function qe(t){let e,l,a,r,_,n,i;const f=t[4].headers,d=O(f,t,t[3],ce);let s=t[1]&&ie();const h=t[4].default,o=O(h,t,t[3],null);return{c(){e=L("table"),l=L("thead"),d&&d.c(),a=P(),s&&s.c(),r=P(),_=L("tbody"),o&&o.c(),this.h()},l(u){e=A(u,"TABLE",{class:!0});var c=H(e);l=A(c,"THEAD",{class:!0});var v=H(l);d&&d.l(v),a=z(v),s&&s.l(v),v.forEach(k),r=z(c),_=A(c,"TBODY",{class:!0});var M=H(_);o&&o.l(M),M.forEach(k),c.forEach(k),this.h()},h(){E(l,"class","svelte-ies9zf"),E(_,"class","svelte-ies9zf"),E(e,"class",n=t[0]+" "+t[2].class+" svelte-ies9zf")},m(u,c){S(u,e,c),T(e,l),d&&d.m(l,null),T(l,a),s&&s.m(l,null),T(e,r),T(e,_),o&&o.m(_,null),i=!0},p(u,[c]){d&&d.p&&(!i||c&8)&&X(d,f,u,u[3],i?G(f,u[3],c,Se):Y(u[3]),ce),u[1]?s?c&2&&m(s,1):(s=ie(),s.c(),m(s,1),s.m(l,null)):s&&(U(),g(s,1,1,()=>{s=null}),V()),o&&o.p&&(!i||c&8)&&X(o,h,u,u[3],i?G(h,u[3],c,null):Y(u[3]),null),(!i||c&5&&n!==(n=u[0]+" "+u[2].class+" svelte-ies9zf"))&&E(e,"class",n)},i(u){i||(m(d,u),m(s),m(o,u),i=!0)},o(u){g(d,u),g(s),g(o,u),i=!1},d(u){u&&k(e),d&&d.d(u),s&&s.d(),o&&o.d(u)}}}function Be(t,e,l){let{$$slots:a={},$$scope:r}=e,{variant:_="fancy"}=e,{updating:n=!1}=e;return t.$$set=i=>{l(2,e=q(q({},e),B(i))),"variant"in i&&l(0,_=i.variant),"updating"in i&&l(1,n=i.updating),"$$scope"in i&&l(3,r=i.$$scope)},e=B(e),[_,n,e,r,a]}class Fe extends Q{constructor(e){super(),Z(this,e,Be,qe,y,{variant:0,updating:1})}}function Ce(t){let e,l,a,r,_,n,i,f,d,s=t[2]&&fe(t);const h=t[5].default,o=O(h,t,t[4],null);return{c(){e=L("tr"),l=L("td"),s&&s.c(),a=P(),o&&o.c(),r=P(),_=L("td"),this.h()},l(u){e=A(u,"TR",{class:!0});var c=H(e);l=A(c,"TD",{});var v=H(l);s&&s.l(v),v.forEach(k),a=z(c),o&&o.l(c),r=z(c),_=A(c,"TD",{}),H(_).forEach(k),c.forEach(k),this.h()},h(){N(l,"selectable",t[2]),E(e,"class",n=t[3].class)},m(u,c){S(u,e,c),T(e,l),s&&s.m(l,null),T(e,a),o&&o.m(e,null),T(e,r),T(e,_),i=!0,f||(d=R(e,"click",t[7]),f=!0)},p(u,c){u[2]?s?(s.p(u,c),c&4&&m(s,1)):(s=fe(u),s.c(),m(s,1),s.m(l,null)):s&&(U(),g(s,1,1,()=>{s=null}),V()),(!i||c&4)&&N(l,"selectable",u[2]),o&&o.p&&(!i||c&16)&&X(o,h,u,u[4],i?G(h,u[4],c,null):Y(u[4]),null),(!i||c&8&&n!==(n=u[3].class))&&E(e,"class",n)},i(u){i||(m(s),m(o,u),i=!0)},o(u){g(s),g(o,u),i=!1},d(u){u&&k(e),s&&s.d(),o&&o.d(u),f=!1,d()}}}function Ie(t){let e,l,a,r,_,n,i,f,d,s=t[2]&&re(t);const h=t[5].default,o=O(h,t,t[4],null);return{c(){e=L("a"),l=L("td"),s&&s.c(),a=P(),o&&o.c(),r=P(),_=L("td"),this.h()},l(u){e=A(u,"A",{class:!0,href:!0});var c=H(e);l=A(c,"TD",{});var v=H(l);s&&s.l(v),v.forEach(k),a=z(c),o&&o.l(c),r=z(c),_=A(c,"TD",{}),H(_).forEach(k),c.forEach(k),this.h()},h(){N(l,"selectable",t[2]),E(e,"class",n="table-row align-middle "+t[3].class),E(e,"href",t[1])},m(u,c){S(u,e,c),T(e,l),s&&s.m(l,null),T(e,a),o&&o.m(e,null),T(e,r),T(e,_),i=!0,f||(d=R(l,"click",ue(t[6])),f=!0)},p(u,c){u[2]?s?(s.p(u,c),c&4&&m(s,1)):(s=re(u),s.c(),m(s,1),s.m(l,null)):s&&(U(),g(s,1,1,()=>{s=null}),V()),(!i||c&4)&&N(l,"selectable",u[2]),o&&o.p&&(!i||c&16)&&X(o,h,u,u[4],i?G(h,u[4],c,null):Y(u[4]),null),(!i||c&8&&n!==(n="table-row align-middle "+u[3].class))&&E(e,"class",n),(!i||c&2)&&E(e,"href",u[1])},i(u){i||(m(s),m(o,u),i=!0)},o(u){g(s),g(o,u),i=!1},d(u){u&&k(e),s&&s.d(),o&&o.d(u),f=!1,d()}}}function fe(t){let e,l,a;function r(n){t[10](n)}let _={};return t[0]!==void 0&&(_.checked=t[0]),e=new le({props:_}),x.push(()=>$(e,"checked",r)),e.$on("change",t[11]),{c(){W(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,i){J(e,n,i),a=!0},p(n,i){const f={};!l&&i&1&&(l=!0,f.checked=n[0],ee(()=>l=!1)),e.$set(f)},i(n){a||(m(e.$$.fragment,n),a=!0)},o(n){g(e.$$.fragment,n),a=!1},d(n){K(e,n)}}}function re(t){let e,l,a;function r(n){t[8](n)}let _={};return t[0]!==void 0&&(_.checked=t[0]),e=new le({props:_}),x.push(()=>$(e,"checked",r)),e.$on("change",t[9]),{c(){W(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,i){J(e,n,i),a=!0},p(n,i){const f={};!l&&i&1&&(l=!0,f.checked=n[0],ee(()=>l=!1)),e.$set(f)},i(n){a||(m(e.$$.fragment,n),a=!0)},o(n){g(e.$$.fragment,n),a=!1},d(n){K(e,n)}}}function je(t){let e,l,a,r;const _=[Ie,Ce],n=[];function i(f,d){return f[1]?0:1}return e=i(t),l=n[e]=_[e](t),{c(){l.c(),a=w()},l(f){l.l(f),a=w()},m(f,d){n[e].m(f,d),S(f,a,d),r=!0},p(f,[d]){let s=e;e=i(f),e===s?n[e].p(f,d):(U(),g(n[s],1,1,()=>{n[s]=null}),V(),l=n[e],l?l.p(f,d):(l=n[e]=_[e](f),l.c()),m(l,1),l.m(a.parentNode,a))},i(f){r||(m(l),r=!0)},o(f){g(l),r=!1},d(f){n[e].d(f),f&&k(a)}}}function Re(t,e,l){let{$$slots:a={},$$scope:r}=e,{href:_=""}=e,{selectable:n=!1}=e,{selected:i=!1}=e;function f(c){I.call(this,t,c)}function d(c){I.call(this,t,c)}function s(c){i=c,l(0,i)}function h(c){I.call(this,t,c)}function o(c){i=c,l(0,i)}function u(c){I.call(this,t,c)}return t.$$set=c=>{l(3,e=q(q({},e),B(c))),"href"in c&&l(1,_=c.href),"selectable"in c&&l(2,n=c.selectable),"selected"in c&&l(0,i=c.selected),"$$scope"in c&&l(4,r=c.$$scope)},e=B(e),[i,_,n,e,r,a,f,d,s,h,o,u]}class Je extends Q{constructor(e){super(),Z(this,e,Re,je,y,{href:1,selectable:2,selected:0})}}export{Fe as T,We as a,Je as b};