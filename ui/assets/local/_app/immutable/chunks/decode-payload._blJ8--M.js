import{D as m}from"./scheduler.GSXCNEL-.js";import{p as u}from"./stores.tduZ0Vrc.js";import{g as C,d as W}from"./data-encoder.KvVJccW8.js";import{a as x}from"./auth-user.LqAeECic.js";import{a as g}from"./atob.b0eKAuwS.js";import{i as j,h as i}from"./has.Hk4nWl3x.js";import{p as R}from"./parse-with-big-int.e3oI4SEy.js";const P=e=>Array.isArray(e)?e:[e];function l(e,c=!0){var o;if(e===null)return e;const s=g(String(((o=e==null?void 0:e.metadata)==null?void 0:o.encoding)??""));if(e!=null&&e.metadata&&(e.metadata.encodingDecoded=s),s!=null&&s.startsWith("json/"))try{const r=R(g(String((e==null?void 0:e.data)??"")));return c?r:{...e,data:r}}catch(r){console.warn("Could not parse payload: ",r)}return s==="binary/null"?c?null:{...e,data:null}:e}const O=(e,c=!0)=>{if(i(e,"searchAttributes")&&i(e.searchAttributes,"indexedFields")){const s=e.searchAttributes.indexedFields;Object.entries(s).forEach(([o,r])=>{s[o]=l(r,c)})}else if(i(e,"searchAttributes")){const s=e.searchAttributes;Object.entries(s).forEach(([o,r])=>{s[o]=l(r,c)})}if(i(e,"memo")&&i(e.memo,"fields")){const s=e.memo.fields;Object.entries(s).forEach(([o,r])=>{s[o]=l(r,c)})}if(i(e,"header")&&i(e.header,"fields")){const s=e.header.fields;Object.entries(s).forEach(([o,r])=>{s[o]=l(r,c)})}if(i(e,"queryResult")){const s=e==null?void 0:e.queryResult;Object.entries(s).forEach(([o,r])=>{s[o]=l(r,c)})}return e},k=e=>async(c,s=!0)=>{if(C(e)){const o=await W({payloads:{payloads:c},settings:e});return((o==null?void 0:o.payloads)??[]).map(r=>l(r,s))}else return c.map(o=>l(o,s))},b=e=>async c=>{if(C(e)){const s=await W({payloads:{payloads:c},settings:e});return(s==null?void 0:s.payloads)??[]}else return c},h=(e,...c)=>{for(const s of c)if(e===s)return!0;return!1},U=async(e,c=m(u).data.settings)=>{try{return(await k(c)([e]))[0]||""}catch{return""}},E=async(e,c=m(u).params.namespace,s=m(u).data.settings,o=m(x).accessToken)=>{const r=k(s);if(e)for(const a of Object.keys(e))if(h(a,"payloads","encodedAttributes")&&e[a]){const f=P(e[a]),d=await r(f);e[a]=h(a,"encodedAttributes")?d[0]:d}else{const f=e[a];j(f)&&(e[a]=await E(f,c,s,o))}return e},q=e=>{if(!j(e))return!1;const c=Object.keys(e);return c.length===2&&c.includes("metadata")&&c.includes("data")},S=async(e,c,s,o,r="readable",a=!0)=>{if(!e)return e;const f=r==="readable"?k(s):b(s),d={...e};if(e){if(q(d)){const t=P(d),n=await f(t,a);return(n==null?void 0:n[0])||d}for(const t of Object.keys(d))if(h(t,"payloads","encodedAttributes")&&d[t]){const n=P(d[t]),w=await f(n,a);d[t]=h(t,"encodedAttributes")?w[0]:w}else{const n=d[t];j(n)&&(d[t]=await S(n,c,s,o,r,a))}}return d},p=async({attributes:e,namespace:c,settings:s,accessToken:o})=>await E(e,c,s,o);export{O as a,p as b,S as c,U as d,l as e,q as i};