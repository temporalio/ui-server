import{t as u}from"./index.be4d1d5b.js";import{b as y}from"./has.0120f47d.js";import{p as g}from"./paginated.debf51bd.js";import{r as d,a as p}from"./route-for-api.a9d6b585.js";const h=t=>!y(t)||t==="descending"?"events.descending":t==="ascending"?"events.ascending":"events.descending",A=async({namespace:t,workflowId:e,runId:n,sort:s,onStart:r,onUpdate:a,onComplete:o})=>{const c=h(s),i=d(c,{namespace:t,workflowId:e});return(await g(async f=>p(i,{token:f,request:fetch,params:{"execution.runId":n}}),{onStart:r,onUpdate:a,onComplete:o})).history.events},I=async({namespace:t,workflowId:e,runId:n,sort:s,onStart:r,onUpdate:a,onComplete:o})=>{const c=h(s),i=d(c,{namespace:t,workflowId:e}),v=await g(async w=>p(i,{token:w,request:fetch,params:{"execution.runId":n}}),{onStart:r,onUpdate:a,onComplete:o});return await u(v.history.events)},m=async({namespace:t,workflowId:e,runId:n,sort:s})=>{const r=d(`events.${s}`,{namespace:t,workflowId:e});try{return(await p(r,{request:fetch,params:{maximumPageSize:"20","execution.runId":n}})).history.events}catch{return[]}},P=async t=>{const e=await m({...t,sort:"ascending"}),n=await m({...t,sort:"descending"}),[s,r]=await Promise.all([u(e),u(n)]);return{start:s,end:r}};export{A as a,I as b,P as f};