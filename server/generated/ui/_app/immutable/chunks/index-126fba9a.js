import{D as m,I as C}from"./index-7e739eea.js";function j(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function b(t){const r=t-1;return r*r*r+1}function q(t){return--t*t*t*t*t+1}/*! *****************************************************************************
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
***************************************************************************** */function M(t,r){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(t);c<n.length;c++)r.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(a[n[c]]=t[n[c]]);return a}function I(t,{delay:r=0,duration:a=400,easing:n=b,x:c=0,y:p=0,opacity:i=0}={}){const e=getComputedStyle(t),s=+e.opacity,u=e.transform==="none"?"":e.transform,f=s*(1-i);return{delay:r,duration:a,easing:n,css:(o,l)=>`
			transform: ${u} translate(${(1-o)*c}px, ${(1-o)*p}px);
			opacity: ${s-f*l}`}}function P(t,{delay:r=0,duration:a=400,easing:n=b,start:c=0,opacity:p=0}={}){const i=getComputedStyle(t),e=+i.opacity,s=i.transform==="none"?"":i.transform,u=1-c,f=e*(1-p);return{delay:r,duration:a,easing:n,css:(o,l)=>`
			transform: ${s} scale(${1-u*l});
			opacity: ${e-f*l}
		`}}function B(t){var{fallback:r}=t,a=M(t,["fallback"]);const n=new Map,c=new Map;function p(e,s,u){const{delay:f=0,duration:o=y=>Math.sqrt(y)*30,easing:l=b}=m(m({},a),u),d=s.getBoundingClientRect(),g=e.left-d.left,h=e.top-d.top,w=e.width/d.width,x=e.height/d.height,k=Math.sqrt(g*g+h*h),$=getComputedStyle(s),_=$.transform==="none"?"":$.transform,v=+$.opacity;return{delay:f,duration:C(o)?o(k):o,easing:l,css:(y,O)=>`
				opacity: ${y*v};
				transform-origin: top left;
				transform: ${_} translate(${O*g}px,${O*h}px) scale(${y+(1-y)*w}, ${y+(1-y)*x});
			`}}function i(e,s,u){return(f,o)=>(e.set(o.key,{rect:f.getBoundingClientRect()}),()=>{if(s.has(o.key)){const{rect:l}=s.get(o.key);return s.delete(o.key),p(l,f,o)}return e.delete(o.key),r&&r(f,o,u)})}return[i(c,n,!1),i(n,c,!0)]}export{j as a,b,B as c,I as f,q,P as s};
