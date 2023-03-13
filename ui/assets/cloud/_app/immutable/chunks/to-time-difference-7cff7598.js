const s=(e,r=Date.now())=>{if(!e)return"";const n=String(e);try{const t=(Number(new Date(n))-r)/1e3;return isNaN(t)?"":`${t}s`}catch{return""}};export{s as t};
