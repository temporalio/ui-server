import{H as C,C as $}from"./index-4f955b1f.js";function w(t){const o=t-1;return o*o*o+1}function M(t){return--t*t*t*t*t+1}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function j(t,o){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&o.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]]);return a}function S(t,{delay:o=0,duration:a=400,easing:n=w,start:r=0,opacity:p=0}={}){const l=getComputedStyle(t),c=+l.opacity,s=l.transform==="none"?"":l.transform,y=1-r,i=c*(1-p);return{delay:o,duration:a,easing:n,css:(e,u)=>`
			transform: ${s} scale(${1-y*u});
			opacity: ${c-i*u}
		`}}function P(t){var{fallback:o}=t,a=j(t,["fallback"]);const n=new Map,r=new Map;function p(c,s,y){const{delay:i=0,duration:e=f=>Math.sqrt(f)*30,easing:u=w}=$($({},a),y),d=s.getBoundingClientRect(),g=c.left-d.left,h=c.top-d.top,k=c.width/d.width,m=c.height/d.height,x=Math.sqrt(g*g+h*h),O=getComputedStyle(s),_=O.transform==="none"?"":O.transform,v=+O.opacity;return{delay:i,duration:C(e)?e(x):e,easing:u,css:(f,b)=>`
				opacity: ${f*v};
				transform-origin: top left;
				transform: ${_} translate(${b*g}px,${b*h}px) scale(${f+(1-f)*k}, ${f+(1-f)*m});
			`}}function l(c,s,y){return(i,e)=>(c.set(e.key,{rect:i.getBoundingClientRect()}),()=>{if(s.has(e.key)){const{rect:u}=s.get(e.key);return s.delete(e.key),p(u,i,e)}return c.delete(e.key),o&&o(i,e,y)})}return[l(r,n,!1),l(n,r,!0)]}export{P as a,w as c,M as q,S as s};
