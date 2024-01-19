import{t as C}from"./translate.d23a91ae.js";import{s as W,b as S}from"./data-encoder-config.a15f3ca0.js";import{h as i,i as x}from"./has.183130b0.js";import{v as q,a as k}from"./is-http.7eda3176.js";import{s as w,p as O}from"./parse-with-big-int.0036a80a.js";async function B({payloads:e,namespace:s,settings:c,accessToken:r,encode:o=!1}){var l,j,P;const n=(l=c==null?void 0:c.codec)==null?void 0:l.endpoint,d=(j=c==null?void 0:c.codec)==null?void 0:j.passAccessToken,t=(P=c==null?void 0:c.codec)==null?void 0:P.includeCredentials,f={"Content-Type":"application/json","X-Namespace":s};if(d)if(q(n))f.Authorization=`Bearer ${r}`;else return W(),e;const m=t?{headers:f,credentials:"include",method:"POST",body:w(e)}:{headers:f,method:"POST",body:w(e)};return fetch(n+(o?"/encode":"/decode"),m).then(a=>{if(i(a,"ok")&&!a.ok)throw{statusCode:a.status,statusText:a.statusText,response:a,message:o?C("common.encode-failed"):C("common.decode-failed")};return a.json()}).then(a=>(S(),a)).catch(a=>(W(a),e))}const E=e=>Array.isArray(e)?e:[e];function h(e,s=!0){var r;if(e===null)return e;const c=k(String(((r=e==null?void 0:e.metadata)==null?void 0:r.encoding)??""));if(e!=null&&e.metadata&&(e.metadata.encodingDecoded=c),c!=null&&c.startsWith("json/"))try{const o=O(k(String((e==null?void 0:e.data)??"")));return s?o:{...e,data:o}}catch(o){console.warn("Could not parse payload: ",o)}return c==="binary/null"?s?null:{...e,data:null}:e}const K=(e,s=!0)=>{if(i(e,"searchAttributes")&&i(e.searchAttributes,"indexedFields")){const c=e.searchAttributes.indexedFields;Object.entries(c).forEach(([r,o])=>{c[r]=h(o,s)})}else if(i(e,"searchAttributes")){const c=e.searchAttributes;Object.entries(c).forEach(([r,o])=>{c[r]=h(o,s)})}if(i(e,"memo")&&i(e.memo,"fields")){const c=e.memo.fields;Object.entries(c).forEach(([r,o])=>{c[r]=h(o,s)})}if(i(e,"header")&&i(e.header,"fields")){const c=e.header.fields;Object.entries(c).forEach(([r,o])=>{c[r]=h(o,s)})}if(i(e,"queryResult")){const c=e==null?void 0:e.queryResult;Object.entries(c).forEach(([r,o])=>{c[r]=h(o,s)})}return e},T=(e,s,c)=>async(r,o=!0)=>{var n;if((n=s==null?void 0:s.codec)!=null&&n.endpoint){const d=await B({payloads:{payloads:r},namespace:e,settings:s,accessToken:c});return((d==null?void 0:d.payloads)??[]).map(t=>h(t,o))}else return r.map(d=>h(d,o))},u=(e,...s)=>{for(const c of s)if(e===c)return!0;return!1},R=async(e,s,c,r)=>{const o=T(s,c,r);if(e)for(const n of Object.keys(e))if(u(n,"payloads","encodedAttributes")&&e[n]){const d=E(e[n]),t=await o(d);e[n]=u(n,"encodedAttributes")?t[0]:t}else{const d=e[n];x(d)&&(e[n]=await R(d,s,c,r))}return e},F=async(e,s,c,r,o=!0)=>{if(!e)return e;const n=T(s,c,r),d={...e};if(e)for(const t of Object.keys(d))if(u(t,"payloads","encodedAttributes")&&d[t]){const f=E(d[t]),m=await n(f,o);d[t]=u(t,"encodedAttributes")?m[0]:m}else{const f=d[t];x(f)&&(d[t]=await F(f,s,c,r,o))}return d},N=async({attributes:e,namespace:s,settings:c,accessToken:r})=>await R(e,s,c,r);export{h as a,B as b,N as c,K as d,F as e};