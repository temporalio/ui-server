import{S as O,i as R,s as U,k as q,a as A,l as v,m as E,c as H,h as m,n as o,D as c,b as N,F as r,H as P,R as L,J as Z,Z as T,a1 as B,q as C,r as D,u as I,O as j}from"./index.bac36631.js";function F(s){let e,a;return{c(){e=q("span"),a=C(s[3]),this.h()},l(l){e=v(l,"SPAN",{class:!0});var n=E(e);a=D(n,s[3]),n.forEach(m),this.h()},h(){o(e,"class","label left svelte-1mqzinz"),c(e,"sr-only",s[5])},m(l,n){N(l,e,n),r(e,a)},p(l,n){n&8&&I(a,l[3]),n&32&&c(e,"sr-only",l[5])},d(l){l&&m(e)}}}function M(s){let e,a;return{c(){e=q("span"),a=C(s[3]),this.h()},l(l){e=v(l,"SPAN",{class:!0});var n=E(e);a=D(n,s[3]),n.forEach(m),this.h()},h(){o(e,"class","label right svelte-1mqzinz"),c(e,"sr-only",s[5])},m(l,n){N(l,e,n),r(e,a)},p(l,n){n&8&&I(a,l[3]),n&32&&c(e,"sr-only",l[5])},d(l){l&&m(e)}}}function G(s){let e,a,l,n,f,b,g,_,k,z,d=s[4]==="left"&&F(s),h=s[4]==="right"&&M(s);return{c(){e=q("label"),d&&d.c(),a=A(),l=q("input"),n=A(),f=q("span"),b=q("span"),g=A(),h&&h.c(),this.h()},l(t){e=v(t,"LABEL",{class:!0,"data-testid":!0});var i=E(e);d&&d.l(i),a=H(i),l=v(i,"INPUT",{id:!0,type:!0,class:!0,role:!0}),n=H(i),f=v(i,"SPAN",{class:!0});var S=E(f);b=v(S,"SPAN",{class:!0}),E(b).forEach(m),S.forEach(m),g=H(i),h&&h.l(i),i.forEach(m),this.h()},h(){o(l,"id",s[1]),l.disabled=s[2],o(l,"type","checkbox"),o(l,"class","checkbox svelte-1mqzinz"),o(l,"role","switch"),o(b,"class","thumb svelte-1mqzinz"),c(b,"checked",s[0]),o(f,"class","slider svelte-1mqzinz"),c(f,"disabled",s[2]),c(f,"checked",s[0]),c(f,"focused",s[6]),c(f,"hovered",s[7]),o(e,"class","switch svelte-1mqzinz"),o(e,"data-testid",_=s[12]["data-testid"]),c(e,"disabled",s[2])},m(t,i){N(t,e,i),d&&d.m(e,null),r(e,a),r(e,l),l.checked=s[0],r(e,n),r(e,f),r(f,b),r(e,g),h&&h.m(e,null),k||(z=[P(l,"change",s[13]),P(l,"change",s[14]),P(l,"focus",s[8]),P(l,"blur",s[9]),P(f,"mouseenter",s[10]),P(f,"mouseleave",s[11])],k=!0)},p(t,[i]){t[4]==="left"?d?d.p(t,i):(d=F(t),d.c(),d.m(e,a)):d&&(d.d(1),d=null),i&2&&o(l,"id",t[1]),i&4&&(l.disabled=t[2]),i&1&&(l.checked=t[0]),i&1&&c(b,"checked",t[0]),i&4&&c(f,"disabled",t[2]),i&1&&c(f,"checked",t[0]),i&64&&c(f,"focused",t[6]),i&128&&c(f,"hovered",t[7]),t[4]==="right"?h?h.p(t,i):(h=M(t),h.c(),h.m(e,null)):h&&(h.d(1),h=null),i&4096&&_!==(_=t[12]["data-testid"])&&o(e,"data-testid",_),i&4&&c(e,"disabled",t[2])},i:L,o:L,d(t){t&&m(e),d&&d.d(),h&&h.d(),k=!1,Z(z)}}}function K(s,e,a){let{checked:l=!1}=e,{id:n}=e,{disabled:f=!1}=e,{label:b}=e,{labelPosition:g="right"}=e,{labelHidden:_=!1}=e,k=!1,z=!1;const d=()=>{a(6,k=!0)},h=()=>{a(6,k=!1)},t=()=>{a(7,z=!0)},i=()=>{a(7,z=!1)};function S(u){j.call(this,s,u)}function J(){l=this.checked,a(0,l)}return s.$$set=u=>{a(12,e=T(T({},e),B(u))),"checked"in u&&a(0,l=u.checked),"id"in u&&a(1,n=u.id),"disabled"in u&&a(2,f=u.disabled),"label"in u&&a(3,b=u.label),"labelPosition"in u&&a(4,g=u.labelPosition),"labelHidden"in u&&a(5,_=u.labelHidden)},e=B(e),[l,n,f,b,g,_,k,z,d,h,t,i,e,S,J]}class V extends O{constructor(e){super(),R(this,e,K,G,U,{checked:0,id:1,disabled:2,label:3,labelPosition:4,labelHidden:5})}}export{V as T};