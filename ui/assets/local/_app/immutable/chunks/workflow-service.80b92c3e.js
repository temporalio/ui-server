import{W as B,n as k}from"./index.c37b9eda.js";import{b as U}from"./decode-payload.2cadbe84.js";import{c as p}from"./is.b521dabf.js";import{s as Q}from"./settings.97ab587b.js";import{s as R}from"./simplify-attributes.b3ed3198.js";import{B as $}from"./route-for.3d5f7292.js";import{b as q,p as N,a as u,r as w,c as _,i as j,d as D}from"./route-for-api.9ab667e2.js";import{s as y}from"./parse-with-big-int.02af2f95.js";import{t as L}from"./list-workflow-query.c11c8f30.js";import{v as G}from"./toaster.7027624d.js";const H=(o=Q)=>!B(o).disableWriteActions,J=(o=[])=>o.map(t=>{const n=R(t,!0),r=t.activityId;return{...n,id:r}}),K=o=>p(o)||p(o.indexedFields)?{}:{indexedFields:Object.entries(o.indexedFields).reduce((n,[r,e])=>({...n,[r]:U(e)}),{})},x=o=>{var I,g,b,T,W,A;const t=K(o.workflowExecutionInfo.searchAttributes),n=o.workflowExecutionInfo.type.name,r=o.workflowExecutionInfo.execution.workflowId,e=o.workflowExecutionInfo.execution.runId,i=o.workflowExecutionInfo.startTime,c=o.workflowExecutionInfo.closeTime,a=o.workflowExecutionInfo.executionTime,l=o.workflowExecutionInfo.status,f=o.workflowExecutionInfo.status==="Running",d=o.workflowExecutionInfo.historyLength,E=o.workflowExecutionInfo.historySizeBytes,s=`/workflows/${r}/${e}`,m=((g=(I=o==null?void 0:o.executionConfig)==null?void 0:I.taskQueue)==null?void 0:g.name)||((b=o==null?void 0:o.workflowExecutionInfo)==null?void 0:b.taskQueue),h=(T=o==null?void 0:o.workflowExecutionInfo)==null?void 0:T.parentNamespaceId,S=(W=o==null?void 0:o.workflowExecutionInfo)==null?void 0:W.parentExecution,v=o.workflowExecutionInfo.stateTransitionCount,C=(A=o.executionConfig)==null?void 0:A.defaultWorkflowTaskTimeout,O=J(o.pendingActivities),z=(o==null?void 0:o.pendingChildren)??[];return{name:n,id:r,runId:e,startTime:i,endTime:c,executionTime:a,status:l,historyEvents:d,historySizeBytes:E,searchAttributes:t,url:s,taskQueue:m,pendingActivities:O,pendingChildren:z,parentNamespaceId:h,parent:S,stateTransitionCount:v,isRunning:f,defaultWorkflowTaskTimeout:C,get canBeTerminated(){return f&&H()}}},P=o=>(o.executions||[]).map(t=>x({workflowExecutionInfo:t})),M=o=>window.btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g,(t,n)=>String.fromCharCode(parseInt(n,16)))),F=(o,t=$)=>t?M(o):o,ao=async(o,t,n=fetch)=>{let r=0,e=0;try{const i=w("workflows.count",{namespace:o});if(t){const c=u(i,{params:{query:t},onError:k,handleError:k,request:n}),a=u(i,{params:{query:""},onError:k,handleError:k,request:n}),[l,f]=await Promise.all([c,a]);e=parseInt((l==null?void 0:l.count)??"0"),r=parseInt(f==null?void 0:f.count)}else{const c=await u(i,{params:{},onError:k,handleError:k,request:n});r=parseInt(c==null?void 0:c.count)}}catch{}return{count:e,totalCount:r}},V=async(o,t,n=fetch,r=!1)=>{const e=t.query||L(t,r);let i;try{i=decodeURIComponent(e)}catch{i=e}const c=r?"workflows.archived":"workflows";let a="";const l=s=>{var m,h;_(s),(m=s==null?void 0:s.body)!=null&&m.message||s!=null&&s.status?a=((h=s==null?void 0:s.body)==null?void 0:h.message)??`Error fetching workflows: ${s.status}: ${s.statusText}`:a="Error fetching workflows: Server failed to respond"},f=w(c,{namespace:o}),{executions:d,nextPageToken:E}=await u(f,{params:{query:i},onError:l,handleError:l,request:n})??{executions:[],nextPageToken:""};return{workflows:P({executions:d}),nextPageToken:String(E),error:a}},so=async({namespace:o,workflowId:t,url:n},r=fetch)=>{var d;const e="workflows",i=n??q(o),c=N(e,{namespace:o}),a=i+c,{executions:l}=await u(a,{params:{query:`WorkflowId="${t}"`,pageSize:"1"},request:r})??{executions:[]},f=(d=P({executions:l}))==null?void 0:d[0];return{runId:f==null?void 0:f.runId}},fo=async(o,t=fetch,n=!1)=>{const r=n?"workflows.archived":"workflows";let e=!0;const i=a=>{(j(a)||D(a))&&(e=!1)},c=w(r,{namespace:o});return await u(c,{params:{pageSize:"1"},onError:i,handleError:i,request:t}),{authorized:e}},uo=async(o,t,n=fetch)=>V(o,t,n,!0);async function lo(o,t=fetch){const n=w("workflow",o);return u(n,{request:t}).then(x)}async function wo({workflow:o,namespace:t,reason:n,identity:r}){const e=w("workflow.terminate",{namespace:t,workflowId:o.id,runId:o.runId});return await u(e,{options:{method:"POST",body:y({reason:n,...r&&{identity:r}})},notifyOnError:!1})}async function ko({namespace:o,workflowId:t,runId:n},r=fetch){const e=w("workflow.cancel",{namespace:o,workflowId:t,runId:n});return u(e,{request:r,notifyOnError:!1,options:{method:"POST"}})}async function mo({namespace:o,workflowId:t,runId:n,signalName:r,signalInput:e}){const i=w("workflow.signal",{namespace:o,workflowId:t,runId:n});return u(i,{notifyOnError:!1,options:{method:"POST",body:y({signalName:r,input:{payloads:e?[{metadata:{encoding:F("json/plain")},data:F(e)}]:null}})}})}async function ho({namespace:o,workflowId:t,runId:n,eventId:r,reason:e,resetReapplyType:i}){const c=w("workflow.reset",{namespace:o,workflowId:t,runId:n}),a={workflowExecution:{workflowId:t,runId:n},workflowTaskFinishEventId:r,resetReapplyType:i,requestId:G(),reason:e};return u(c,{notifyOnError:!1,options:{method:"POST",body:y(a)}})}async function Eo(o,t=fetch){const n=e=>{console.error(e)},r=w("workflow",o);return u(r,{request:t,onError:n,handleError:n}).then(x)}export{V as a,ao as b,ko as c,fo as d,uo as e,lo as f,Eo as g,so as h,ho as r,mo as s,wo as t,H as w};