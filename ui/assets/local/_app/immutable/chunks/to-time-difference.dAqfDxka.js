const c=({date:e,now:n=Date.now(),negativeDefault:t})=>{if(!e)return"";const o=String(e);try{const r=(Number(new Date(o))-n)/1e3;return t&&r<0?t:isNaN(r)?"":`${r}s`}catch{return""}};export{c as t};
