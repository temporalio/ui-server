import{S as L,i as M,s as N,j as v,m as k,o as w,x as m,u as d,v as b,e as F,k as S,c as P,a as R,n as I,d as C,b as D,f as O,E as h,w as H,I as x,r as z}from"../../../../../../chunks/vendor-b03dee8a.js";import{n as X}from"../../../../../../chunks/namespace-009eb0fd.js";import{i as Y}from"../../../../../../chunks/full-screen-89e5fe1d.js";import{a as Z}from"../../../../../../chunks/workflow-execution-96f0dc0e.js";import{C as G}from"../../../../../../chunks/code-block-184469bd.js";import{T as ee,P as te,g as ne,a as se}from"../../../../../../chunks/get-started-and-completed-events-d3b26200.js";import{E as U}from"../../../../../../chunks/_execution-information-315b675e.js";import"../../../../../../chunks/stores-0cc7c5f3.js";import"../../../../../../chunks/format-date-34e4dc1a.js";function J(i){let n,e;return n=new G({props:{heading:"Input",content:i[3].input}}),{c(){v(n.$$.fragment)},l(t){k(n.$$.fragment,t)},m(t,l){w(n,t,l),e=!0},p(t,l){const u={};l&8&&(u.content=t[3].input),n.$set(u)},i(t){e||(m(n.$$.fragment,t),e=!0)},o(t){d(n.$$.fragment,t),e=!1},d(t){b(n,t)}}}function K(i){let n,e;return n=new G({props:{heading:"Result",content:i[3].result}}),{c(){v(n.$$.fragment)},l(t){k(n.$$.fragment,t)},m(t,l){w(n,t,l),e=!0},p(t,l){const u={};l&8&&(u.content=t[3].result),n.$set(u)},i(t){e||(m(n.$$.fragment,t),e=!0)},o(t){d(n.$$.fragment,t),e=!1},d(t){b(n,t)}}}function ie(i){let n,e,t,l,u,E,p,j,g,_,f,A,V,T,$,Q;t=new U({props:{title:"Start Time",value:i[0].startTime}}),u=new U({props:{title:"End Time",value:i[0].endTime}}),p=new ee({props:{title:"Task Queue",value:i[0].taskQueue,href:i[1]}});let a=i[3].input&&J(i),o=i[3].result&&K(i);return f=new U({props:{title:"History Events",value:i[0].historyEvents}}),$=new te({props:{activities:i[2]}}),{c(){n=F("div"),e=F("div"),v(t.$$.fragment),l=S(),v(u.$$.fragment),E=S(),v(p.$$.fragment),j=S(),a&&a.c(),g=S(),o&&o.c(),_=S(),v(f.$$.fragment),V=S(),T=F("div"),v($.$$.fragment),this.h()},l(s){n=P(s,"DIV",{class:!0});var r=R(n);e=P(r,"DIV",{class:!0});var c=R(e);k(t.$$.fragment,c),l=I(c),k(u.$$.fragment,c),E=I(c),k(p.$$.fragment,c),j=I(c),a&&a.l(c),g=I(c),o&&o.l(c),_=I(c),k(f.$$.fragment,c),c.forEach(C),V=I(r),T=P(r,"DIV",{class:!0});var q=R(T);k($.$$.fragment,q),q.forEach(C),r.forEach(C),this.h()},h(){D(e,"class",A=i[4]?"w-1/3":"w-full"),D(T,"class","pending-activities w-full"),D(n,"class","execution-information px-6 py-6 flex flex-col")},m(s,r){O(s,n,r),h(n,e),w(t,e,null),h(e,l),w(u,e,null),h(e,E),w(p,e,null),h(e,j),a&&a.m(e,null),h(e,g),o&&o.m(e,null),h(e,_),w(f,e,null),h(n,V),h(n,T),w($,T,null),Q=!0},p(s,[r]){const c={};r&1&&(c.value=s[0].startTime),t.$set(c);const q={};r&1&&(q.value=s[0].endTime),u.$set(q);const y={};r&1&&(y.value=s[0].taskQueue),r&2&&(y.href=s[1]),p.$set(y),s[3].input?a?(a.p(s,r),r&8&&m(a,1)):(a=J(s),a.c(),m(a,1),a.m(e,g)):a&&(z(),d(a,1,1,()=>{a=null}),H()),s[3].result?o?(o.p(s,r),r&8&&m(o,1)):(o=K(s),o.c(),m(o,1),o.m(e,_)):o&&(z(),d(o,1,1,()=>{o=null}),H());const W={};r&1&&(W.value=s[0].historyEvents),f.$set(W),(!Q||r&16&&A!==(A=s[4]?"w-1/3":"w-full"))&&D(e,"class",A);const B={};r&4&&(B.activities=s[2]),$.$set(B)},i(s){Q||(m(t.$$.fragment,s),m(u.$$.fragment,s),m(p.$$.fragment,s),m(a),m(o),m(f.$$.fragment,s),m($.$$.fragment,s),Q=!0)},o(s){d(t.$$.fragment,s),d(u.$$.fragment,s),d(p.$$.fragment,s),d(a),d(o),d(f.$$.fragment,s),d($.$$.fragment,s),Q=!1},d(s){s&&C(n),b(t),b(u),b(p),a&&a.d(),o&&o.d(),b(f),b($)}}}async function ge({stuff:i}){const{execution:n,events:e}=i;return{props:{execution:n,events:e}}}function ae(i,n,e){let t,l,u,E,p,j;x(i,X,f=>e(7,p=f)),x(i,Y,f=>e(4,j=f));let{execution:g}=n,{events:_}=n;return i.$$set=f=>{"execution"in f&&e(5,g=f.execution),"events"in f&&e(6,_=f.events)},i.$$.update=()=>{i.$$.dirty&32&&e(0,t=Z(g)),i.$$.dirty&64&&e(3,l=ne(_)),i.$$.dirty&1&&e(2,u=t.pendingActivities),i.$$.dirty&129&&e(1,E=se(p,t.taskQueue))},[t,E,u,l,j,g,_,p]}class _e extends L{constructor(n){super();M(this,n,ae,ie,N,{execution:5,events:6})}}export{_e as default,ge as load};