const n=["Running","TimedOut","Completed","Failed","Completed","ContinuedAsNew","Canceled","Terminated"],o=["===","!==",">=","<=","==","!=","=",">","<","!","and","or","between","order by","in","(",")","starts_with"],a=["===","!==",">=","<=","==","!=","=",">","<","!","starts_with","is","is not"],i=["and","or"],u=["(",")"],r=e=>typeof e=="string",f=e=>e===null,c=e=>f(e)||Array.isArray(e)?!1:typeof e=="object",d=e=>{if(!r(e))return!1;for(const t of n)if(e===t)return!0;return!1},w=e=>e===" ",L=e=>e==="'"||e==='"',C=e=>e==="`",h=e=>{if(!r(e))return!1;e=e.toLocaleLowerCase();for(const t of o)if(e===t)return!0;return!1},y=e=>{if(!r(e))return!1;e=e.toLocaleLowerCase();for(const t of a)if(e===t)return!0;return!1},g=e=>{if(!r(e))return!1;e=e.toLocaleLowerCase();for(const t of u)if(e===t)return!0;return!1},m=e=>{if(!r(e))return!1;e=e.toLocaleLowerCase();for(const t of i)if(e===t)return!0;return!1},b=e=>r(e)?(e=e.toLocaleLowerCase(),e==="between"):!1,O=e=>r(e)?(e=e.toLocaleLowerCase(),e==="is"||e==="is not"):!1,j=e=>e==="ascending"||e==="descending",S=e=>l(e,"name","message"),A=e=>r(e)?e.toLocaleLowerCase()==="starts_with":!1,l=(e,...t)=>{if(!p(e))return!1;for(const s of t)if(!Object.prototype.hasOwnProperty.call(e,s))return!1;return!0},p=e=>c(e)?!!Object.getOwnPropertyNames(e).length:!1;export{g as a,y as b,L as c,w as d,h as e,c as f,r as g,l as h,C as i,j,f as k,O as l,A as m,b as n,m as o,S as p,d as q};