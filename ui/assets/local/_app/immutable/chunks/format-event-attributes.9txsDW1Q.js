import{z as w}from"./scheduler.1-F21fJx.js";import{t as u}from"./translate.u3aqOlwm.js";import{f as I,r as b,t as S}from"./time-format.AOvg-xGG.js";import{c as y}from"./format-camel-case.fLJT6RhQ.js";import{i as g}from"./index.7nnP_h51.js";import{e as D}from"./decode-payload.36LSP659.js";import{h as l,a as h}from"./has._Y9Lh-nL.js";import{a as R}from"./is-event-type.XwNs8XWo.js";const j={key:"",value:""},A=new Set(["activityId","attempt","binaryChecksum","identity","parentInitiatedEventId","requestId","scheduledEventId","startedEventId","lastHeartbeatTime","scheduledTime","expirationTime"]),rt=t=>A.has(t),O=new Set(["suggestContinueAsNew","historySizeBytes"]),m=(t,e)=>!(e===null||e===void 0||e===""||e==="0s"||t==="type"||(!e||e==="0")&&O.has(t)),v=t=>!(t===null||t===void 0||t===""||Array.isArray(t)&&!t.length),ot=t=>typeof t=="string"?t:[t==null?void 0:t.payloads,t==null?void 0:t.indexedFields,t==null?void 0:t.points,t].find(e=>e!==void 0),L=t=>{if(h(t)){if(l(t,"stackTrace")&&t.stackTrace)return t.stackTrace;for(const e in t)if(h(t[e]))return L(t[e])}},G=["baseRunId","continuedExecutionRunId","firstExecutionRunId","newExecutionRunId","newRunId","originalExecutionRunId"],st=t=>{for(const e of G)if(t===e)return!0;return!1},K=["taskQueueName"],it=t=>{for(const e of K)if(t===e)return!0;return!1},Q=["workflowExecutionWorkflowId","workflowExecutionRunId"],nt=(t,e)=>{const r=!!(e!=null&&e.workflowExecutionWorkflowId&&(e!=null&&e.workflowExecutionRunId));for(const o of Q)if(t===o&&r)return!0;return!1},f=(t,e)=>{if(typeof e=="object"){const[r]=Object.keys(e);return r==="payloads"?{key:t,value:e}:{key:t+y(r),value:e[r]}}else return{key:t,value:e.toString()}},F=["failure","input","activityType","parentInitiatedEventId","workflowExecution","workflowType","taskQueue"],N=({attributes:t})=>{for(const[e,r]of Object.entries(t))if(m(e,r))return f(e,r)},W=t=>{if(l(t,"ActivityType"))return t.ActivityType;if(l(t,"activity_type"))return t.activity_type},P=t=>{var e,r,o;return!!((o=(r=(e=t.markerRecordedEventAttributes)==null?void 0:e.details)==null?void 0:r.type)!=null&&o.payloads)},T=t=>{var r,o,s,i,d,k;const e=N(t);if(R(t)){const n=(((s=(o=(r=t.markerRecordedEventAttributes)==null?void 0:r.details)==null?void 0:o.data)==null?void 0:s.payloads)||((k=(d=(i=t.markerRecordedEventAttributes)==null?void 0:i.details)==null?void 0:d.type)==null?void 0:k.payloads)||[]).map(x=>D(x)),a=n==null?void 0:n[0];if(P(t)&&a)return f("ActivityType",a);const p=W(a);if(p)return f("ActivityType",p)}for(const[c,n]of Object.entries(t.attributes))for(const a of F)if(c===a&&m(c,n))return f(c,n);return e},C=({lastEvent:t})=>T(t),at=t=>t?g(t)?C(t):T(t):j,V=new Set(["header"]),_=new Set(["taskQueue","retryPolicy","parentWorkflowExecution","workflowExecution","meta"]),$=new Set(["maximumAttempts"]),ct=(t,e)=>t===0?u("workflows.no-expiration"):e,ft=(t,e)=>t?t-e:u("workflows.unlimited"),ut=t=>t||u("workflows.unlimited"),z=(t,e)=>t==="maximumAttempts"&&!e?u("workflows.unlimited"):e,B=(t,e)=>{if(_.has(e)&&typeof t[e]=="object"){for(const[r,o]of Object.entries(t[e]))v(o)&&($.has(r)?t[`${e}${y(r)}`]=z(r,o):t[`${e}${y(r)}`]=o);delete t[e]}},yt=(t,{compact:e}={compact:!1})=>{const r={};e&&(r.eventTime=I(t.eventTime,w(S),{relative:w(b)}));for(const[o,s]of Object.entries(t.attributes)){const i=m(o,s);!V.has(o)&&i&&(r[o]=s),B(r,o)}return r},E=["summary","parent","activity","taskQueue","schedule","retryPolicy","workflow","searchAttributes"],lt={activity:{label:"events.attribute-group.activity"},parent:{label:"events.attribute-group.parent"},retryPolicy:{label:"events.attribute-group.retry-policy"},schedule:{label:"events.attribute-group.schedule"},searchAttributes:{label:"events.attribute-group.search-attributes"},summary:{label:"events.attribute-group.summary"},taskQueue:{label:"events.attribute-group.task-queue"},workflow:{label:"events.attribute-group.workflow"}},q=(t,e)=>{var r,o;t.category==="activity"&&((r=e==null?void 0:e.activity)!=null&&r.length)&&(e.summary=[...e.activity,...e.summary],e.activity=[]),t.category==="activity"&&((o=e==null?void 0:e.workflow)!=null&&o.length)&&(e.summary=[...e.summary,...e.workflow],e.workflow=[])},M=t=>{const e=new Set(["summary","searchAttributes"]);for(const[r,o]of Object.entries(t))o.length===1&&!e.has(r)&&(t.summary=[...t.summary,...o],t[r]=[])},mt=(t,e)=>{const r={};E.forEach(o=>{o==="summary"?r[o]=Object.keys(e):r[o]=[]});for(const o in e){const s=E.find(i=>o.includes(i));s&&(r[s]=[o,...r[s]],r.summary=r.summary.filter(i=>i!==o))}return q(t,r),M(r),r};export{ut as a,ct as b,lt as c,ot as d,L as e,ft as f,T as g,nt as h,it as i,rt as j,yt as k,mt as l,at as m,st as s};