import{S as A,i as T,s as U,x,a as _,l as v,r as L,y as C,c as b,m as y,n as P,u as q,h as l,p as g,z as I,b as S,N as f,f as N,t as O,C as H,O as G,F as J}from"../../chunks/index-1224340f.js";import{f as K}from"../../chunks/settings-service-b9ebef3d.js";import{p as z,q as M}from"../../chunks/route-for-eb94bd05.js";import{B as Q}from"../../chunks/button-8c67fb82.js";import{p as R}from"../../chunks/stores-adfbca94.js";import{N as X,H as Y}from"../../chunks/hamburger-header-ae9f7a82.js";import{P as Z}from"../../chunks/page-title-fe597709.js";import"../../chunks/settings-4278fc5a.js";import"../../chunks/index-019e1760.js";import"../../chunks/route-for-api-d38f666e.js";import"../../chunks/auth-user-2eeec619.js";import"../../chunks/persist-store-721c1042.js";import"../../chunks/parse-with-big-int-561ccb8b.js";import"../../chunks/notifications-9f0b8b94.js";import"../../chunks/is-network-error-5f9e2367.js";import"../../chunks/icon-d2dae9e1.js";import"../../chunks/badge-383e9a31.js";import"../../chunks/has-c7a26a56.js";import"../../chunks/is-44021919.js";import"../../chunks/data-encoder-status-84c50937.js";import"../../chunks/data-converter-config-9f05f49d.js";import"../../chunks/is-http-8e240f23.js";import"../../chunks/tooltip-d52ca85b.js";import"../../chunks/copyable-a561be55.js";import"../../chunks/copy-to-clipboard-95f1820f.js";import"../../chunks/modal-adae5d9c.js";import"../../chunks/index-22da1e3a.js";function tt(i){let e;return{c(){e=L("Continue to SSO")},l(s){e=q(s,"Continue to SSO")},m(s,a){S(s,e,a)},d(s){s&&l(e)}}}function et(i){let e,s,a;return{c(){e=v("div"),s=v("p"),a=L(i[2]),this.h()},l(m){e=y(m,"DIV",{class:!0});var o=P(e);s=y(o,"P",{class:!0});var p=P(s);a=q(p,i[2]),p.forEach(l),o.forEach(l),this.h()},h(){g(s,"class","rounded-md border-2 border-orange-500 bg-orange-100 p-5 text-center"),g(e,"class","my-12 flex flex-col items-center justify-start gap-2")},m(m,o){S(m,e,o),f(e,s),f(s,a)},p:J,d(m){m&&l(e)}}}function rt(i){let e,s,a,m,o,p,n,$,B,D,d,F,V,h,c,W,E;e=new Z({props:{title:"Login",url:i[1].url.href}}),a=new X({props:{href:z+"/",user:void 0}}),o=new Y({props:{href:z+"/",user:void 0}}),c=new Q({props:{dataCy:"login-button",variant:"login",icon:"lock",$$slots:{default:[tt]},$$scope:{ctx:i}}}),c.$on("click",i[3]);let u=i[2]&&et(i);return{c(){x(e.$$.fragment),s=_(),x(a.$$.fragment),m=_(),x(o.$$.fragment),p=_(),n=v("section"),$=v("h1"),B=L("Welcome back."),D=_(),d=v("p"),F=L("Let's get you signed in."),V=_(),h=v("div"),x(c.$$.fragment),W=_(),u&&u.c(),this.h()},l(t){C(e.$$.fragment,t),s=b(t),C(a.$$.fragment,t),m=b(t),C(o.$$.fragment,t),p=b(t),n=y(t,"SECTION",{class:!0});var r=P(n);$=y(r,"H1",{class:!0,"data-cy":!0});var k=P($);B=q(k,"Welcome back."),k.forEach(l),D=b(r),d=y(r,"P",{class:!0,"data-cy":!0});var w=P(d);F=q(w,"Let's get you signed in."),w.forEach(l),V=b(r),h=y(r,"DIV",{class:!0});var j=P(h);C(c.$$.fragment,j),j.forEach(l),W=b(r),u&&u.l(r),r.forEach(l),this.h()},h(){g($,"class","text-8xl font-semibold"),g($,"data-cy","login-title"),g(d,"class","my-7"),g(d,"data-cy","login-info"),g(h,"class","mx-auto"),g(n,"class","my-[20vh] text-center")},m(t,r){I(e,t,r),S(t,s,r),I(a,t,r),S(t,m,r),I(o,t,r),S(t,p,r),S(t,n,r),f(n,$),f($,B),f(n,D),f(n,d),f(d,F),f(n,V),f(n,h),I(c,h,null),f(n,W),u&&u.m(n,null),E=!0},p(t,[r]){const k={};r&2&&(k.url=t[1].url.href),e.$set(k);const w={};r&16&&(w.$$scope={dirty:r,ctx:t}),c.$set(w),t[2]&&u.p(t,r)},i(t){E||(N(e.$$.fragment,t),N(a.$$.fragment,t),N(o.$$.fragment,t),N(c.$$.fragment,t),E=!0)},o(t){O(e.$$.fragment,t),O(a.$$.fragment,t),O(o.$$.fragment,t),O(c.$$.fragment,t),E=!1},d(t){H(e,t),t&&l(s),H(a,t),t&&l(m),H(o,t),t&&l(p),t&&l(n),H(c),u&&u.d()}}}const Ot=async function({fetch:i}){const e=await K(i);return e.auth.enabled?{props:{settings:e},stuff:{settings:e}}:{status:404}};function st(i,e,s){let a;G(i,R,n=>s(1,a=n));const m=a.url.searchParams.get("error");let{settings:o}=e;const p=()=>{window.location.assign(M({settings:o,searchParams:a.url.searchParams,originUrl:a.url.origin}))};return i.$$set=n=>{"settings"in n&&s(0,o=n.settings)},[o,a,m,p]}class Ht extends A{constructor(e){super(),T(this,e,st,rt,U,{settings:0})}}export{Ht as default,Ot as load};