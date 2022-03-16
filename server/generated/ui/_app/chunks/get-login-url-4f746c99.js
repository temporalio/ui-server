const c=(s,e)=>{var o;const t=new URL("/auth/sso",s.baseUrl);return((o=s.auth.options)!=null?o:[]).forEach(a=>{const r=e.get(a);r&&t.searchParams.set(a,r)}),t.toString()};export{c as g};
