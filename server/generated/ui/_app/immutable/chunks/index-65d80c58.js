import{af as l}from"./index-9c2f34db.js";function u(o){const t=o-1;return t*t*t+1}function $(o,{delay:t=0,duration:s=400,easing:c=l}={}){const r=+getComputedStyle(o).opacity;return{delay:t,duration:s,easing:c,css:a=>`opacity: ${a*r}`}}function g(o,{delay:t=0,duration:s=400,easing:c=u,x:r=0,y:a=0,opacity:e=0}={}){const n=getComputedStyle(o),f=+n.opacity,p=n.transform==="none"?"":n.transform,y=f*(1-e);return{delay:t,duration:s,easing:c,css:(m,i)=>`
			transform: ${p} translate(${(1-m)*r}px, ${(1-m)*a}px);
			opacity: ${f-y*i}`}}function x(o,{delay:t=0,duration:s=400,easing:c=u,start:r=0,opacity:a=0}={}){const e=getComputedStyle(o),n=+e.opacity,f=e.transform==="none"?"":e.transform,p=1-r,y=n*(1-a);return{delay:t,duration:s,easing:c,css:(m,i)=>`
			transform: ${f} scale(${1-p*i});
			opacity: ${n-y*i}
		`}}export{$ as a,g as f,x as s};
