import{S as w,i as $,s as k,y as i,z as m,A as u,g as p,d as l,B as c,C as g,a as b,c as h,b as y,h as Q}from"../chunks/index.df672b57.js";import{p as P}from"../chunks/stores.a1fb7f80.js";import{P as W}from"../chunks/page-title.3b4d8116.js";import{t as C}from"../chunks/translate.fa4eeabe.js";import{W as R}from"../chunks/workers-list.efc9435a.js";import{w as S}from"../chunks/workflow-run.606a8ef9.js";function q(n){var s;let t,o;return t=new R({props:{taskQueue:(s=n[2])==null?void 0:s.taskQueue,workers:n[3],compatibility:n[1],reachability:n[0]}}),{c(){i(t.$$.fragment)},l(r){m(t.$$.fragment,r)},m(r,e){u(t,r,e),o=!0},p(r,[e]){var f;const a={};e&4&&(a.taskQueue=(f=r[2])==null?void 0:f.taskQueue),e&8&&(a.workers=r[3]),e&2&&(a.compatibility=r[1]),e&1&&(a.reachability=r[0]),t.$set(a)},i(r){o||(p(t.$$.fragment,r),o=!0)},o(r){l(t.$$.fragment,r),o=!1},d(r){c(t,r)}}}function z(n,t,o){let s,r,e,a,f;return g(n,S,_=>o(4,f=_)),n.$$.update=()=>{n.$$.dirty&16&&o(3,{workers:s,workflow:r,compatibility:e,reachability:a}=f,s,(o(2,r),o(4,f)),(o(1,e),o(4,f)),(o(0,a),o(4,f)))},[a,e,r,s,f]}class A extends w{constructor(t){super(),$(this,t,z,q,k,{})}}function B(n){let t,o,s,r;return t=new W({props:{title:`${C("workflows.workers-tab")} | ${n[1]}`,url:n[0].url.href}}),s=new A({}),{c(){i(t.$$.fragment),o=b(),i(s.$$.fragment)},l(e){m(t.$$.fragment,e),o=h(e),m(s.$$.fragment,e)},m(e,a){u(t,e,a),y(e,o,a),u(s,e,a),r=!0},p(e,[a]){const f={};a&1&&(f.url=e[0].url.href),t.$set(f)},i(e){r||(p(t.$$.fragment,e),p(s.$$.fragment,e),r=!0)},o(e){l(t.$$.fragment,e),l(s.$$.fragment,e),r=!1},d(e){c(t,e),e&&Q(o),c(s,e)}}}function j(n,t,o){let s;g(n,P,e=>o(0,s=e));const r=s.params.workflow;return[s,r]}class J extends w{constructor(t){super(),$(this,t,j,B,k,{})}}export{J as component};