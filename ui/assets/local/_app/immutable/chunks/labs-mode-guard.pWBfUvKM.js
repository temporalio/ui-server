import{s as P,x as m,k as S,g as q,c as b,w as d,p as g,u as h,q as y,r as M}from"./scheduler.AWtTlMeO.js";import{S as L,i as O,g as w,b as f,e as C,t as _}from"./index.91lpp7Ff.js";import{p as N}from"./stores.gLdPbctP.js";import{p as j}from"./persist-store.48U-w8AD.js";const p=j("labsMode",!1,!0),z=o=>({}),k=o=>({});function A(o){let s;const l=o[5].fallback,e=g(l,o,o[4],k);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,r){e&&e.m(t,r),s=!0},p(t,r){e&&e.p&&(!s||r&16)&&h(e,l,t,t[4],s?M(l,t[4],r,z):y(t[4]),k)},i(t){s||(_(e,t),s=!0)},o(t){f(e,t),s=!1},d(t){e&&e.d(t)}}}function B(o){let s;const l=o[5].default,e=g(l,o,o[4],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,r){e&&e.m(t,r),s=!0},p(t,r){e&&e.p&&(!s||r&16)&&h(e,l,t,t[4],s?M(l,t[4],r,null):y(t[4]),null)},i(t){s||(_(e,t),s=!0)},o(t){f(e,t),s=!1},d(t){e&&e.d(t)}}}function D(o){let s,l,e,t;const r=[B,A],n=[];function c(a,i){return a[0]?0:1}return s=c(o),l=n[s]=r[s](o),{c(){l.c(),e=m()},l(a){l.l(a),e=m()},m(a,i){n[s].m(a,i),S(a,e,i),t=!0},p(a,[i]){let u=s;s=c(a),s===u?n[s].p(a,i):(w(),f(n[u],1,1,()=>{n[u]=null}),C(),l=n[s],l?l.p(a,i):(l=n[s]=r[s](a),l.c()),_(l,1),l.m(e.parentNode,e))},i(a){t||(_(l),t=!0)},o(a){f(l),t=!1},d(a){a&&q(e),n[s].d(a)}}}function E(o,s,l){let e,t,r,n;b(o,p,i=>l(0,r=i)),b(o,N,i=>l(3,n=i));let{$$slots:c={},$$scope:a}=s;return o.$$set=i=>{"$$scope"in i&&l(4,a=i.$$scope)},o.$$.update=()=>{o.$$.dirty&8&&l(2,e=n.url.searchParams.get("labs")==="true"),o.$$.dirty&8&&l(1,t=n.url.searchParams.get("labs")==="false"),o.$$.dirty&6&&(e?d(p,r=!0,r):t&&d(p,r=!1,r))},[r,t,e,n,a,c]}class J extends L{constructor(s){super(),O(this,s,E,D,P,{})}}export{J as L,p as l};