import{s as _,z as i,E as m,A as b,B as g}from"./scheduler.IHo1m08M.js";import{S as h,i as d,c as p,a as k,m as I,t as B,b as S,d as j}from"./index.4UXyTqh8.js";import{g as q,a as z}from"./spread.rEx3vLA9.js";import{B as A}from"./button.dp1ICUDc.js";import{t as u}from"./tw-merge.NbP7EmZe.js";function C(a){let e,s;const l=[{variant:"ghost"},{leadingIcon:a[1]},{class:u("h-9 w-9 shrink-0 rounded-full p-0",a[0])},{"aria-label":a[2]},a[3]];let r={};for(let t=0;t<l.length;t+=1)r=i(r,l[t]);return e=new A({props:r}),e.$on("click",a[4]),{c(){p(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,n){I(e,t,n),s=!0},p(t,[n]){const c=n&15?q(l,[l[0],n&2&&{leadingIcon:t[1]},n&1&&{class:u("h-9 w-9 shrink-0 rounded-full p-0",t[0])},n&4&&{"aria-label":t[2]},n&8&&z(t[3])]):{};e.$set(c)},i(t){s||(B(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){j(e,t)}}}function E(a,e,s){const l=["class","icon","label"];let r=m(e,l),{class:t=""}=e,{icon:n}=e,{label:c}=e;function f(o){g.call(this,a,o)}return a.$$set=o=>{e=i(i({},e),b(o)),s(3,r=m(e,l)),"class"in o&&s(0,t=o.class),"icon"in o&&s(1,n=o.icon),"label"in o&&s(2,c=o.label)},[t,n,c,r,f]}class F extends h{constructor(e){super(),d(this,e,E,C,_,{class:0,icon:1,label:2})}}export{F as I};