import{g}from"./navigation.e0acbb14.js";const m={keepFocus:!0,noScroll:!0},h=async({parameter:n,value:a,url:e,goto:c=g,allowEmpty:i=!1})=>{const f=String(a),r={};e.searchParams.forEach((o,s)=>{s!==n&&(r[s]=o)});const t=new URLSearchParams(r);a?t.set(n,f):i&&t.set(n,"");{const o=t==null?void 0:t.toString(),s=o?`${e.pathname}?${o}`:e.pathname;c(s,m)}return a};export{h as u};