import"./data-encoder-config.b5b7b570.js";import"./index.e31b9884.js";import"./parse-with-big-int.b38462f3.js";import{b as c}from"./format-date.71526e4c.js";import"./index.09834243.js";import{F as m}from"./is-event-type.4dbe973b.js";import{g as d}from"./get-event-categorization.3ec93a88.js";import{s as l}from"./simplify-attributes.560f55a5.js";const p=["Unspecified","Scheduled","Open","New","Started","Initiated","Running","Completed","Fired","CancelRequested","TimedOut","Signaled","Canceled","Failed","Terminated"],f=t=>{if(t.includes("RequestCancel"))return"CancelRequested";for(const e of p)if(t.includes(e))return e},u=async t=>{const e=String(t.eventId),i=t.eventType,n=c(String(t.eventTime)),s=f(i),a=d(i),{key:o,attributes:r}=m(t);return{...t,name:i,id:e,eventType:i,timestamp:n,classification:s,category:a,attributes:l({type:o,...r})}},q=async t=>await Promise.all(t.map(u));export{q as t};