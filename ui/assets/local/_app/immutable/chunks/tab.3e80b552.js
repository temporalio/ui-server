import{S as O,i as S,s as N,K as q,Z as h,k as A,l as L,m as V,h as g,_ as T,D as v,b as P,L as B,M as F,N as H,$ as K,g as z,d as D,a0 as C,a1 as I,ah as Y,a4 as R,e as U,ag as y,C as p,q as w,a as x,r as $,c as ee,ai as Z,F as j,H as te,u as le,R as se}from"./index.bac36631.js";import{b as ae}from"./has.d2b0b725.js";import{w as G}from"./singletons.aaa1dcca.js";function ie(s){let e,a,o;const t=s[4].default,i=q(t,s,s[3],null);let f=[{class:a="tab-list "+s[1]},{role:"tablist"},{"aria-label":s[0]},s[2]],n={};for(let l=0;l<f.length;l+=1)n=h(n,f[l]);return{c(){e=A("div"),i&&i.c(),this.h()},l(l){e=L(l,"DIV",{class:!0,role:!0,"aria-label":!0});var r=V(e);i&&i.l(r),r.forEach(g),this.h()},h(){T(e,n),v(e,"svelte-zg0616",!0)},m(l,r){P(l,e,r),i&&i.m(e,null),o=!0},p(l,[r]){i&&i.p&&(!o||r&8)&&B(i,t,l,l[3],o?H(t,l[3],r,null):F(l[3]),null),T(e,n=K(f,[(!o||r&2&&a!==(a="tab-list "+l[1]))&&{class:a},{role:"tablist"},(!o||r&1)&&{"aria-label":l[0]},r&4&&l[2]])),v(e,"svelte-zg0616",!0)},i(l){o||(z(i,l),o=!0)},o(l){D(i,l),o=!1},d(l){l&&g(e),i&&i.d(l)}}}function ne(s,e,a){const o=["label","class"];let t=C(e,o),{$$slots:i={},$$scope:f}=e,{label:n}=e,{class:l=""}=e;return s.$$set=r=>{e=h(h({},e),I(r)),a(2,t=C(e,o)),"label"in r&&a(0,n=r.label),"class"in r&&a(1,l=r.class),"$$scope"in r&&a(3,f=r.$$scope)},[n,l,t,f,i]}class be extends O{constructor(e){super(),S(this,e,ne,ie,N,{label:0,class:1})}}function ue(s){let e,a;const o=s[2].default,t=q(o,s,s[1],null);let i=[{class:"tabs"},s[0]],f={};for(let n=0;n<i.length;n+=1)f=h(f,i[n]);return{c(){e=A("div"),t&&t.c(),this.h()},l(n){e=L(n,"DIV",{class:!0});var l=V(e);t&&t.l(l),l.forEach(g),this.h()},h(){T(e,f)},m(n,l){P(n,e,l),t&&t.m(e,null),a=!0},p(n,[l]){t&&t.p&&(!a||l&2)&&B(t,o,n,n[1],a?H(o,n[1],l,null):F(n[1]),null),T(e,f=K(i,[{class:"tabs"},l&1&&n[0]]))},i(n){a||(z(t,n),a=!0)},o(n){D(t,n),a=!1},d(n){n&&g(e),t&&t.d(n)}}}const J={};function fe(s,e,a){const o=[];let t=C(e,o),{$$slots:i={},$$scope:f}=e;const n=[],l=[],r=G(null),d=G(null);return Y(J,{registerTab:c=>{n.push(c),r.update(_=>_||c),R(()=>{const _=n.indexOf(c);n.splice(_,1),r.update(u=>u===c?n[_]||n[n.length-1]:u)})},registerPanel:c=>{l.push(c),d.update(_=>_||c),R(()=>{const _=l.indexOf(c);l.splice(_,1),d.update(u=>u===c?l[_]||l[l.length-1]:u)})},selectTab:c=>{const _=n.indexOf(c);r.set(c),d.set(l[_])},activeTab:r,activePanel:d}),s.$$set=c=>{e=h(h({},e),I(c)),a(0,t=C(e,o)),"$$scope"in c&&a(1,f=c.$$scope)},[t,f,i]}class me extends O{constructor(e){super(),S(this,e,fe,ue,N,{})}}function E(s){let e,a,o,t,i,f,n,l;const r=s[14].default,d=q(r,s,s[13],null);let c=[{role:"tab"},{class:"tab"},{"aria-selected":s[5]},{"aria-controls":s[3]},{tabindex:t=s[5]?0:-1},{id:s[1]},{href:s[2]},{"data-testid":i=s[1]??s[8]["data-testid"]},s[9]],_={};for(let u=0;u<c.length;u+=1)_=h(_,c[u]);return{c(){e=A(s[2]?"a":"button"),a=w(s[0]),o=x(),d&&d.c(),this.h()},l(u){e=L(u,((s[2]?"a":"button")||"null").toUpperCase(),{role:!0,class:!0,"aria-selected":!0,"aria-controls":!0,tabindex:!0,id:!0,href:!0,"data-testid":!0});var b=V(e);a=$(b,s[0]),o=ee(b),d&&d.l(b),b.forEach(g),this.h()},h(){/-/.test(s[2]?"a":"button")?Z(e,_):T(e,_),v(e,"active",s[5]),v(e,"disabled",s[4]),v(e,"svelte-ksdfzl",!0)},m(u,b){P(u,e,b),j(e,a),j(e,o),d&&d.m(e,null),f=!0,n||(l=te(e,"click",s[7]),n=!0)},p(u,b){(!f||b&1)&&le(a,u[0]),d&&d.p&&(!f||b&8192)&&B(d,r,u,u[13],f?H(r,u[13],b,null):F(u[13]),null),_=K(c,[{role:"tab"},{class:"tab"},(!f||b&32)&&{"aria-selected":u[5]},(!f||b&8)&&{"aria-controls":u[3]},(!f||b&32&&t!==(t=u[5]?0:-1))&&{tabindex:t},(!f||b&2)&&{id:u[1]},(!f||b&4)&&{href:u[2]},(!f||b&258&&i!==(i=u[1]??u[8]["data-testid"]))&&{"data-testid":i},b&512&&u[9]]),/-/.test(u[2]?"a":"button")?Z(e,_):T(e,_),v(e,"active",u[5]),v(e,"disabled",u[4]),v(e,"svelte-ksdfzl",!0)},i(u){f||(z(d,u),f=!0)},o(u){D(d,u),f=!1},d(u){u&&g(e),d&&d.d(u),n=!1,l()}}}function oe(s){let e=s[2]?"a":"button",a,o,t=(s[2]?"a":"button")&&E(s);return{c(){t&&t.c(),a=U()},l(i){t&&t.l(i),a=U()},m(i,f){t&&t.m(i,f),P(i,a,f),o=!0},p(i,[f]){i[2],e?N(e,i[2]?"a":"button")?(t.d(1),t=E(i),t.c(),t.m(a.parentNode,a)):t.p(i,f):(t=E(i),t.c(),t.m(a.parentNode,a)),e=i[2]?"a":"button"},i(i){o||(z(t),o=!0)},o(i){D(t),o=!1},d(i){i&&g(a),t&&t.d(i)}}}function re(s,e,a){let o;const t=["label","id","href","panelId","disabled","active","onClick"];let i=C(e,t),f,{$$slots:n={},$$scope:l}=e,{label:r}=e,{id:d}=e,{href:c=null}=e,{panelId:_=null}=e,{disabled:u=!1}=e,{active:b=null}=e,{onClick:k=se}=e;const{registerTab:Q,selectTab:W,activeTab:M}=y(J);p(s,M,m=>a(12,f=m)),Q(d);const X=()=>{W(d),k&&k()};return s.$$set=m=>{a(8,e=h(h({},e),I(m))),a(9,i=C(e,t)),"label"in m&&a(0,r=m.label),"id"in m&&a(1,d=m.id),"href"in m&&a(2,c=m.href),"panelId"in m&&a(3,_=m.panelId),"disabled"in m&&a(4,u=m.disabled),"active"in m&&a(10,b=m.active),"onClick"in m&&a(11,k=m.onClick),"$$scope"in m&&a(13,l=m.$$scope)},s.$$.update=()=>{s.$$.dirty&5122&&a(5,o=ae(b)?f===d:b)},e=I(e),[r,d,c,_,u,o,M,X,e,i,b,k,f,l,n]}class he extends O{constructor(e){super(),S(this,e,re,oe,N,{label:0,id:1,href:2,panelId:3,disabled:4,active:10,onClick:11})}}export{me as T,be as a,he as b,J as c};