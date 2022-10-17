import{C as O,H as S,ak as v}from"./index-de024f11.js";function m(t){const e=t-1;return e*e*e+1}function M(t){return--t*t*t*t*t+1}/*! *****************************************************************************
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
***************************************************************************** */function j(t,e){var c={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(c[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(c[n[o]]=t[n[o]]);return c}function P(t,{delay:e=0,duration:c=400,easing:n=v}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:c,easing:n,css:y=>`opacity: ${y*o}`}}function B(t,{delay:e=0,duration:c=400,easing:n=m,x:o=0,y=0,opacity:f=0}={}){const s=getComputedStyle(t),a=+s.opacity,u=s.transform==="none"?"":s.transform,i=a*(1-f);return{delay:e,duration:c,easing:n,css:(r,l)=>`
			transform: ${u} translate(${(1-r)*o}px, ${(1-r)*y}px);
			opacity: ${a-i*l}`}}function R(t,{delay:e=0,duration:c=400,easing:n=m,start:o=0,opacity:y=0}={}){const f=getComputedStyle(t),s=+f.opacity,a=f.transform==="none"?"":f.transform,u=1-o,i=s*(1-y);return{delay:e,duration:c,easing:n,css:(r,l)=>`
			transform: ${a} scale(${1-u*l});
			opacity: ${s-i*l}
		`}}function E(t){var{fallback:e}=t,c=j(t,["fallback"]);const n=new Map,o=new Map;function y(s,a,u){const{delay:i=0,duration:r=d=>Math.sqrt(d)*30,easing:l=m}=O(O({},c),u),p=a.getBoundingClientRect(),g=s.left-p.left,$=s.top-p.top,k=s.width/p.width,w=s.height/p.height,x=Math.sqrt(g*g+$*$),h=getComputedStyle(a),C=h.transform==="none"?"":h.transform,_=+h.opacity;return{delay:i,duration:S(r)?r(x):r,easing:l,css:(d,b)=>`
				opacity: ${d*_};
				transform-origin: top left;
				transform: ${C} translate(${b*g}px,${b*$}px) scale(${d+(1-d)*k}, ${d+(1-d)*w});
			`}}function f(s,a,u){return(i,r)=>(s.set(r.key,{rect:i.getBoundingClientRect()}),()=>{if(a.has(r.key)){const{rect:l}=a.get(r.key);return a.delete(r.key),y(l,i,r)}return s.delete(r.key),e&&e(i,r,u)})}return[f(o,n,!1),f(n,o,!0)]}export{E as a,P as b,m as c,B as f,M as q,R as s};
