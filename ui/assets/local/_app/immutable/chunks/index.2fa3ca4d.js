import{ai as m}from"./index.0942deb7.js";function d(o){const t=o-1;return t*t*t+1}function $(o,{delay:t=0,duration:n=400,easing:r=m}={}){const s=+getComputedStyle(o).opacity;return{delay:t,duration:n,easing:r,css:a=>`opacity: ${a*s}`}}function g(o,{delay:t=0,duration:n=400,easing:r=d,x:s=0,y:a=0,opacity:f=0}={}){const c=getComputedStyle(o),e=+c.opacity,p=c.transform==="none"?"":c.transform,u=e*(1-f);return{delay:t,duration:n,easing:r,css:(i,y)=>`
			transform: ${p} translate(${(1-i)*s}px, ${(1-i)*a}px);
			opacity: ${e-u*y}`}}export{$ as a,g as f};
