import{C as s}from"./scheduler.DugrFyli.js";import{e as r}from"./data-encoder.C5dLXKAc.js";import{d as i}from"./data-encoder.CCyKb8vb.js";import{B as d}from"./prod-browser.CoG0geaG.js";import{p as c,s as p}from"./parse-with-big-int.BKSBwM2t.js";const l=o=>window.btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g,(n,t)=>String.fromCharCode(parseInt(t,16)))),e=(o,n=d)=>n?l(o):o,I=o=>{if(o){const n=c(o),t=n==null?void 0:n[0];if(t)return p(t)}return""},f=o=>({metadata:{encoding:e("json/plain")},data:e(JSON.stringify(o))}),P=async o=>{let n=null;if(o){const t=JSON.parse(o);if(n=[f(t)],s(i).endpoint){const a=await r({payloads:{payloads:n}});n=(a==null?void 0:a.payloads)??null}}return n};export{P as e,I as g,f as s};