import{s as O,h as E,j as H,m as p,i as v,v as A,f as m,b as D,k as S,d as M,n as L,p as N,F,G as Q,D as G,r as ue,z as T,A as fe,a as he,E as R,u as be,g as ge,e as me,t as X,l as Y,q as Z,B as I,N as pe,H as U}from"./scheduler.DugrFyli.js";import{S as w,i as x,c as $,a as ee,m as re,t as y,b as C,d as te,g as _e,e as ve}from"./index.CckufFjv.js";import{g as ke}from"./spread.CgU5AtxT.js";import{I as qe}from"./icon.CgfdLX9U.js";import{o as V}from"./omit.C8ejR22J.js";import{L as ye}from"./label.BXohoUK7.js";import{t as P}from"./tw-merge.Ds6tgvmq.js";function Ee(t){let e;return{c(){e=E("hr"),this.h()},l(r){e=H(r,"HR",{tabindex:!0,"aria-hidden":!0,class:!0}),this.h()},h(){p(e,"tabindex","-1"),p(e,"aria-hidden","true"),p(e,"class","w-full border-subtle")},m(r,i){v(r,e,i)},p:A,i:A,o:A,d(r){r&&m(e)}}}class ze extends w{constructor(e){super(),x(this,e,null,Ee,O,{})}}const He=t=>({}),W=t=>({});function J(t){let e,r;return e=new qe({props:{class:"absolute left-0 top-0 h-4 w-4",name:t[4]?"hyphen":t[0]?"checkmark":null,strokeWidth:3}}),{c(){$(e.$$.fragment)},l(i){ee(e.$$.fragment,i)},m(i,l){re(e,i,l),r=!0},p(i,l){const b={};l&17&&(b.name=i[4]?"hyphen":i[0]?"checkmark":null),e.$set(b)},i(i){r||(y(e.$$.fragment,i),r=!0)},o(i){C(e.$$.fragment,i),r=!1},d(i){te(e,i)}}}function Ne(t){let e,r;return{c(){e=E("span"),r=X(t[2]),this.h()},l(i){e=H(i,"SPAN",{class:!0});var l=S(e);r=Y(l,t[2]),l.forEach(m),this.h()},h(){p(e,"class","label"),U(e,"sr-only",t[3])},m(i,l){v(i,e,l),L(e,r)},p(i,l){l&4&&Z(r,i[2]),l&8&&U(e,"sr-only",i[3])},d(i){i&&m(e)}}}function Ce(t){let e,r,i,l,b,f,_,o,c=[{id:t[1]},{__value:t[6]},{type:"checkbox"},{class:"peer sr-only"},{disabled:t[5]},{required:t[9]},V(t[13],"data-testid")],h={};for(let a=0;a<c.length;a+=1)h=T(h,c[a]);let s=(t[4]||t[0])&&J(t);const k=t[15].flex,g=he(k,t,t[21],W),u=g||Ne(t);return{c(){e=E("input"),r=D(),i=E("span"),s&&s.c(),b=D(),u&&u.c(),this.h()},l(a){e=H(a,"INPUT",{id:!0,type:!0,class:!0}),r=M(a),i=H(a,"SPAN",{class:!0});var d=S(i);s&&s.l(d),d.forEach(m),b=M(a),u&&u.l(a),this.h()},h(){R(e,h),p(i,"class",l=P(["relative","box-content","flex","h-4","w-4","flex-none","cursor-pointer","rounded-md","border-2","bg-transparent","text-inverse","bg-clip-padding","peer-indeterminate:bg-interactive","peer-indeterminate:border-interactive","peer-checked:bg-interactive","peer-checked:border-interactive"],!t[5]&&["group-hover:border-transparent","peer-focus-visible:border-transparent","group-hover:peer-checked:border-transparent","group-hover:peer-indeterminate:border-transparent","group-hover:bg-interactive-active","peer-focus-visible:bg-interactive-active","group-hover:peer-checked:bg-interactive-active","group-hover:peer-indeterminate:bg-interactive-active","group-hover:ring-4","group-hover:ring-primary/70","peer-focus-visible:ring-4","peer-focus-visible:ring-primary/70"],t[5]&&["cursor-not-allowed","opacity-50"],t[7]?"border-secondary":"border-danger peer-checked:border-danger"))},m(a,d){v(a,e,d),e.autofocus&&e.focus(),e.checked=t[0],t[20](e),v(a,r,d),v(a,i,d),s&&s.m(i,null),v(a,b,d),u&&u.m(a,d),f=!0,_||(o=[N(e,"click",t[18]),N(e,"change",t[12]),N(e,"change",t[19])],_=!0)},p(a,d){R(e,h=ke(c,[(!f||d&2)&&{id:a[1]},(!f||d&64)&&{__value:a[6]},{type:"checkbox"},{class:"peer sr-only"},(!f||d&32)&&{disabled:a[5]},(!f||d&512)&&{required:a[9]},d&8192&&V(a[13],"data-testid")])),d&1&&(e.checked=a[0]),a[4]||a[0]?s?(s.p(a,d),d&17&&y(s,1)):(s=J(a),s.c(),y(s,1),s.m(i,null)):s&&(_e(),C(s,1,1,()=>{s=null}),ve()),(!f||d&160&&l!==(l=P(["relative","box-content","flex","h-4","w-4","flex-none","cursor-pointer","rounded-md","border-2","bg-transparent","text-inverse","bg-clip-padding","peer-indeterminate:bg-interactive","peer-indeterminate:border-interactive","peer-checked:bg-interactive","peer-checked:border-interactive"],!a[5]&&["group-hover:border-transparent","peer-focus-visible:border-transparent","group-hover:peer-checked:border-transparent","group-hover:peer-indeterminate:border-transparent","group-hover:bg-interactive-active","peer-focus-visible:bg-interactive-active","group-hover:peer-checked:bg-interactive-active","group-hover:peer-indeterminate:bg-interactive-active","group-hover:ring-4","group-hover:ring-primary/70","peer-focus-visible:ring-4","peer-focus-visible:ring-primary/70"],a[5]&&["cursor-not-allowed","opacity-50"],a[7]?"border-secondary":"border-danger peer-checked:border-danger")))&&p(i,"class",l),g?g.p&&(!f||d&2097152)&&be(g,k,a,a[21],f?me(k,a[21],d,He):ge(a[21]),W):u&&u.p&&(!f||d&12)&&u.p(a,f?d:-1)},i(a){f||(y(s),y(u,a),f=!0)},o(a){C(s),C(u,a),f=!1},d(a){a&&(m(e),m(r),m(i),m(b)),t[20](null),s&&s.d(),u&&u.d(a),_=!1,Q(o)}}}function K(t){let e,r;return{c(){e=E("span"),r=X(t[8]),this.h()},l(i){e=H(i,"SPAN",{class:!0});var l=S(e);r=Y(l,t[8]),l.forEach(m),this.h()},h(){p(e,"class","text-xs text-danger")},m(i,l){v(i,e,l),L(e,r)},p(i,l){l&256&&Z(r,i[8])},d(i){i&&m(e)}}}function Pe(t){let e,r,i,l,b,f,_;r=new ye({props:{class:P(["flex","select-none","items-center","gap-3","text-sm","leading-[18px]","group"],t[5]&&"cursor-not-allowed",t[10]),$$slots:{default:[Ce]},$$scope:{ctx:t}}});let o=!t[7]&&t[8]&&K(t);return{c(){e=E("div"),$(r.$$.fragment),i=D(),o&&o.c(),this.h()},l(c){e=H(c,"DIV",{"data-testid":!0,role:!0});var h=S(e);ee(r.$$.fragment,h),i=M(h),o&&o.l(h),h.forEach(m),this.h()},h(){p(e,"data-testid",l=t[13]["data-testid"]??null),p(e,"role","none")},m(c,h){v(c,e,h),re(r,e,null),L(e,i),o&&o.m(e,null),b=!0,f||(_=[N(e,"click",F(t[16])),N(e,"keypress",F(t[17]))],f=!0)},p(c,[h]){const s={};h&1056&&(s.class=P(["flex","select-none","items-center","gap-3","text-sm","leading-[18px]","group"],c[5]&&"cursor-not-allowed",c[10])),h&2108159&&(s.$$scope={dirty:h,ctx:c}),r.$set(s),!c[7]&&c[8]?o?o.p(c,h):(o=K(c),o.c(),o.m(e,null)):o&&(o.d(1),o=null),(!b||h&8192&&l!==(l=c[13]["data-testid"]??null))&&p(e,"data-testid",l)},i(c){b||(y(r.$$.fragment,c),b=!0)},o(c){C(r.$$.fragment,c),b=!1},d(c){c&&m(e),te(r),o&&o.d(),f=!1,Q(_)}}}function Se(t,e,r){const i=["id","checked","label","labelHidden","indeterminate","disabled","value","group","valid","error","required","class"];let l=G(e,i),{$$slots:b={},$$scope:f}=e,{id:_=""}=e,{checked:o=!1}=e,{label:c=""}=e,{labelHidden:h=!1}=e,{indeterminate:s=!1}=e,{disabled:k=!1}=e,{value:g=void 0}=e,{group:u=void 0}=e,{valid:a=!0}=e,{error:d=""}=e,{required:j=!1}=e,{class:z=""}=e,q;const ie=ue(),ae=n=>{const{checked:B}=n.currentTarget;u!==void 0&&(B?r(14,u=[...u,g]):r(14,u=u.filter(de=>de!==g))),r(0,o=B),ie("change",{checked:n.currentTarget.checked,value:g})};function ne(n){I.call(this,t,n)}function le(n){I.call(this,t,n)}function se(n){I.call(this,t,n)}function oe(){o=this.checked,r(0,o),r(14,u),r(6,g)}function ce(n){pe[n?"unshift":"push"](()=>{q=n,r(11,q),r(4,s)})}return t.$$set=n=>{e=T(T({},e),fe(n)),r(13,l=G(e,i)),"id"in n&&r(1,_=n.id),"checked"in n&&r(0,o=n.checked),"label"in n&&r(2,c=n.label),"labelHidden"in n&&r(3,h=n.labelHidden),"indeterminate"in n&&r(4,s=n.indeterminate),"disabled"in n&&r(5,k=n.disabled),"value"in n&&r(6,g=n.value),"group"in n&&r(14,u=n.group),"valid"in n&&r(7,a=n.valid),"error"in n&&r(8,d=n.error),"required"in n&&r(9,j=n.required),"class"in n&&r(10,z=n.class),"$$scope"in n&&r(21,f=n.$$scope)},t.$$.update=()=>{t.$$.dirty&2064&&q!==void 0&&r(11,q.indeterminate=s,q),t.$$.dirty&16449&&r(0,o=u!==void 0?u.includes(g):o)},[o,_,c,h,s,k,g,a,d,j,z,q,ae,l,u,b,ne,le,se,oe,ce,f]}class Be extends w{constructor(e){super(),x(this,e,Se,Pe,O,{id:1,checked:0,label:2,labelHidden:3,indeterminate:4,disabled:5,value:6,group:14,valid:7,error:8,required:9,class:10})}}export{Be as C,ze as M};