import{s as V,a as T,u as v,g as E,e as I,c as h}from"./scheduler.1T9hOnFr.js";import{S,i as U,t as W,b as q}from"./index.cVovwi_s.js";import{p as w}from"./stores._S6Dyz3e.js";import{a as B}from"./auth-user.KLtNNHhK.js";import{c as j,d as z}from"./decode-payload.eIEWigKc.js";import{g as F,a as G,b as H}from"./data-encoder.yyI2yTBS.js";import{s as m}from"./parse-with-big-int.e3oI4SEy.js";const J=e=>({decodedValue:e&1}),C=e=>({decodedValue:e[0]});function K(e){let n;const s=e[10].default,o=T(s,e,e[9],C);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,d){o&&o.m(t,d),n=!0},p(t,[d]){o&&o.p&&(!n||d&513)&&v(o,s,t,t[9],n?I(s,t[9],d,J):E(t[9]),C)},i(t){n||(W(o,t),n=!0)},o(t){q(o,t),n=!1},d(t){o&&o.d(t)}}}function L(e,n,s){let o,t,d,g,y,c;h(e,B,a=>s(12,y=a)),h(e,w,a=>s(8,c=a));let{$$slots:P={},$$scope:k}=n;var r;let{value:i}=n,{key:l=""}=n,{onDecode:u=void 0}=n,A=l&&(i!=null&&i[l])?i[l]:i,f=m(A);const D=async a=>{try{const p=await j(a,c.params.namespace,g,y.accessToken),_=z(p),b=l&&(_==null?void 0:_[l]);b?s(0,f=m(b)):s(0,f=m(_)),u&&u(f)}catch{console.error("Could not decode payloads")}};return e.$$set=a=>{"value"in a&&s(1,i=a.value),"key"in a&&s(2,l=a.key),"onDecode"in a&&s(3,u=a.onDecode),"$$scope"in a&&s(9,k=a.$$scope)},e.$$.update=()=>{e.$$.dirty&256&&s(7,o=F(c.data.settings)),e.$$.dirty&256&&s(6,t=G(c.data.settings)),e.$$.dirty&256&&s(5,d=H(c.data.settings)),e.$$.dirty&496&&(g={...c.data.settings,codec:{...s(4,r=c.data.settings)===null||r===void 0?void 0:r.codec,endpoint:o,passAccessToken:t,includeCredentials:d}}),e.$$.dirty&2&&D(i)},[f,i,l,u,r,d,t,o,c,k,P]}class Z extends S{constructor(n){super(),U(this,n,L,K,V,{value:1,key:2,onDecode:3})}}export{Z as P};