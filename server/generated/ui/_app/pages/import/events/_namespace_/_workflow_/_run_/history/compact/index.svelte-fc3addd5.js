import{S as a,i as u,s as c,w as f,x as g,y as _,q as l,o as y,B as E,N as s}from"../../../../../../../../chunks/index-a913e400.js";import{p as $}from"../../../../../../../../chunks/stores-34c141af.js";import{a as d}from"../../../../../../../../chunks/import-events-bcb1fec4.js";import{E as h}from"../../../../../../../../chunks/event-summary-3d3a199a.js";import"../../../../../../../../chunks/index-de429506.js";import"../../../../../../../../chunks/event-view-b42103cd.js";import"../../../../../../../../chunks/persist-store-1373753b.js";import"../../../../../../../../chunks/is-function-b969a126.js";import"../../../../../../../../chunks/settings-08e784c0.js";import"../../../../../../../../chunks/version-check-b520d17f.js";import"../../../../../../../../chunks/is-419a79e8.js";import"../../../../../../../../chunks/pagination-aa845135.js";import"../../../../../../../../chunks/index-a3c1a3fb.js";import"../../../../../../../../chunks/filter-select-8eafafb1.js";import"../../../../../../../../chunks/update-query-parameters-94043e37.js";import"../../../../../../../../chunks/navigation-6709cf39.js";import"../../../../../../../../chunks/singletons-d1fb5791.js";import"../../../../../../../../chunks/select-bbb68799.js";import"../../../../../../../../chunks/dropdown-menu-39b09122.js";import"../../../../../../../../chunks/index-3e3c0d77.js";import"../../../../../../../../chunks/get-event-categorization-754b07cc.js";import"../../../../../../../../chunks/time-format-5183e5c2.js";import"../../../../../../../../chunks/index-d27505fa.js";import"../../../../../../../../chunks/has-b7e06397.js";import"../../../../../../../../chunks/format-date-ecf4453c.js";import"../../../../../../../../chunks/to-duration-6d22e6d2.js";import"../../../../../../../../chunks/format-event-attributes-3b33ccba.js";import"../../../../../../../../chunks/route-for-0fcfcb54.js";import"../../../../../../../../chunks/code-block-eaebee40.js";import"../../../../../../../../chunks/copy-to-clipboard-e19b63bd.js";import"../../../../../../../../chunks/link-9ef98c23.js";import"../../../../../../../../chunks/copyable-5068be77.js";import"../../../../../../../../chunks/empty-state-69c5161e.js";function v(o){let r,m;return r=new h({props:{items:o[1],groups:o[0],compact:!0}}),{c(){f(r.$$.fragment)},l(t){g(r.$$.fragment,t)},m(t,p){_(r,t,p),m=!0},p(t,[p]){const e={};p&2&&(e.items=t[1]),p&1&&(e.groups=t[0]),r.$set(e)},i(t){m||(l(r.$$.fragment,t),m=!0)},o(t){y(r.$$.fragment,t),m=!1},d(t){E(r,t)}}}function G(o,r,m){let t,p,e,n;return s(o,d,i=>m(0,e=i)),s(o,$,i=>m(3,n=i)),o.$$.update=()=>{o.$$.dirty&8&&m(2,t=n.url.searchParams.get("category")),o.$$.dirty&5&&m(1,p=e.filter(i=>t?i.category===t:i))},[e,p,t,n]}class ot extends a{constructor(r){super(),u(this,r,G,v,c,{})}}export{ot as default};