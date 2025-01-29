'use client'
"use strict";var _=Object.defineProperty;var we=Object.getOwnPropertyDescriptor;var ve=Object.getOwnPropertyNames;var ke=Object.prototype.hasOwnProperty;var Se=(e,n)=>{for(var o in n)_(e,o,{get:n[o],enumerable:!0})},Pe=(e,n,o,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of ve(n))!ke.call(e,t)&&t!==o&&_(e,t,{get:()=>n[t],enumerable:!(r=we(n,t))||r.enumerable});return e};var Te=e=>Pe(_({},"__esModule",{value:!0}),e);var jt={};Se(jt,{FOOTER_3_META:()=>Ft});module.exports=Te(jt);var I=require("react"),se=Object.freeze({left:0,top:0,width:16,height:16}),M=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),V=Object.freeze({...se,...M}),U=Object.freeze({...V,body:"",hidden:!1});function Ce(e,n){let o={};!e.hFlip!=!n.hFlip&&(o.hFlip=!0),!e.vFlip!=!n.vFlip&&(o.vFlip=!0);let r=((e.rotate||0)+(n.rotate||0))%4;return r&&(o.rotate=r),o}function J(e,n){let o=Ce(e,n);for(let r in U)r in M?r in e&&!(r in o)&&(o[r]=M[r]):r in n?o[r]=n[r]:r in e&&(o[r]=e[r]);return o}function Fe(e,n){let o=e.icons,r=e.aliases||Object.create(null),t=Object.create(null);function i(s){if(o[s])return t[s]=[];if(!(s in t)){t[s]=null;let l=r[s]&&r[s].parent,c=l&&i(l);c&&(t[s]=[l].concat(c))}return t[s]}return Object.keys(o).concat(Object.keys(r)).forEach(i),t}function je(e,n,o){let r=e.icons,t=e.aliases||Object.create(null),i={};function s(l){i=J(r[l]||t[l],i)}return s(n),o.forEach(s),J(e,i)}function ce(e,n){let o=[];if(typeof e!="object"||typeof e.icons!="object")return o;e.not_found instanceof Array&&e.not_found.forEach(t=>{n(t,null),o.push(t)});let r=Fe(e);for(let t in r){let i=r[t];i&&(n(t,je(e,t,i)),o.push(t))}return o}var Ee={provider:"",aliases:{},not_found:{},...se};function H(e,n){for(let o in n)if(o in e&&typeof e[o]!=typeof n[o])return!1;return!0}function le(e){if(typeof e!="object"||e===null)return null;let n=e;if(typeof n.prefix!="string"||!e.icons||typeof e.icons!="object"||!H(e,Ee))return null;let o=n.icons;for(let t in o){let i=o[t];if(!t||typeof i.body!="string"||!H(i,U))return null}let r=n.aliases||Object.create(null);for(let t in r){let i=r[t],s=i.parent;if(!t||typeof s!="string"||!o[s]&&!r[s]||!H(i,U))return null}return n}var fe=/^[a-z0-9]+(-[a-z0-9]+)*$/,R=(e,n,o,r="")=>{let t=e.split(":");if(e.slice(0,1)==="@"){if(t.length<2||t.length>3)return null;r=t.shift().slice(1)}if(t.length>3||!t.length)return null;if(t.length>1){let l=t.pop(),c=t.pop(),f={provider:t.length>0?t[0]:r,prefix:c,name:l};return n&&!A(f)?null:f}let i=t[0],s=i.split("-");if(s.length>1){let l={provider:r,prefix:s.shift(),name:s.join("-")};return n&&!A(l)?null:l}if(o&&r===""){let l={provider:r,prefix:"",name:i};return n&&!A(l,o)?null:l}return null},A=(e,n)=>e?!!((n&&e.prefix===""||e.prefix)&&e.name):!1,K=Object.create(null);function Oe(e,n){return{provider:e,prefix:n,icons:Object.create(null),missing:new Set}}function T(e,n){let o=K[e]||(K[e]=Object.create(null));return o[n]||(o[n]=Oe(e,n))}function ae(e,n){return le(n)?ce(n,(o,r)=>{r?e.icons[o]=r:e.missing.add(o)}):[]}function Le(e,n,o){try{if(typeof o.body=="string")return e.icons[n]={...o},!0}catch{}return!1}var O=!1;function ue(e){return typeof e=="boolean"&&(O=e),O}function X(e){let n=typeof e=="string"?R(e,!0,O):e;if(n){let o=T(n.provider,n.prefix),r=n.name;return o.icons[r]||(o.missing.has(r)?null:void 0)}}function Ae(e,n){let o=R(e,!0,O);if(!o)return!1;let r=T(o.provider,o.prefix);return n?Le(r,o.name,n):(r.missing.add(o.name),!0)}function Ne(e,n){if(typeof e!="object")return!1;if(typeof n!="string"&&(n=e.provider||""),O&&!n&&!e.prefix){let t=!1;return le(e)&&(e.prefix="",ce(e,(i,s)=>{Ae(i,s)&&(t=!0)})),t}let o=e.prefix;if(!A({provider:n,prefix:o,name:"a"}))return!1;let r=T(n,o);return!!ae(r,e)}var de=Object.freeze({width:null,height:null}),pe=Object.freeze({...de,...M}),Me=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Re=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Y(e,n,o){if(n===1)return e;if(o=o||100,typeof e=="number")return Math.ceil(e*n*o)/o;if(typeof e!="string")return e;let r=e.split(Me);if(r===null||!r.length)return e;let t=[],i=r.shift(),s=Re.test(i);for(;;){if(s){let l=parseFloat(i);isNaN(l)?t.push(i):t.push(Math.ceil(l*n*o)/o)}else t.push(i);if(i=r.shift(),i===void 0)return t.join("");s=!s}}function De(e,n="defs"){let o="",r=e.indexOf("<"+n);for(;r>=0;){let t=e.indexOf(">",r),i=e.indexOf("</"+n);if(t===-1||i===-1)break;let s=e.indexOf(">",i);if(s===-1)break;o+=e.slice(t+1,i).trim(),e=e.slice(0,r).trim()+e.slice(s+1)}return{defs:o,content:e}}function _e(e,n){return e?"<defs>"+e+"</defs>"+n:n}function He(e,n,o){let r=De(e);return _e(r.defs,n+r.content+o)}var Qe=e=>e==="unset"||e==="undefined"||e==="none";function Ue(e,n){let o={...V,...e},r={...pe,...n},t={left:o.left,top:o.top,width:o.width,height:o.height},i=o.body;[o,r].forEach(x=>{let u=[],p=x.hFlip,S=x.vFlip,b=x.rotate;p?S?b+=2:(u.push("translate("+(t.width+t.left).toString()+" "+(0-t.top).toString()+")"),u.push("scale(-1 1)"),t.top=t.left=0):S&&(u.push("translate("+(0-t.left).toString()+" "+(t.height+t.top).toString()+")"),u.push("scale(1 -1)"),t.top=t.left=0);let w;switch(b<0&&(b-=Math.floor(b/4)*4),b=b%4,b){case 1:w=t.height/2+t.top,u.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:u.unshift("rotate(180 "+(t.width/2+t.left).toString()+" "+(t.height/2+t.top).toString()+")");break;case 3:w=t.width/2+t.left,u.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}b%2===1&&(t.left!==t.top&&(w=t.left,t.left=t.top,t.top=w),t.width!==t.height&&(w=t.width,t.width=t.height,t.height=w)),u.length&&(i=He(i,'<g transform="'+u.join(" ")+'">',"</g>"))});let s=r.width,l=r.height,c=t.width,f=t.height,a,d;s===null?(d=l===null?"1em":l==="auto"?f:l,a=Y(d,c/f)):(a=s==="auto"?c:s,d=l===null?Y(a,f/c):l==="auto"?f:l);let h={},g=(x,u)=>{Qe(u)||(h[x]=u.toString())};g("width",a),g("height",d);let y=[t.left,t.top,c,f];return h.viewBox=y.join(" "),{attributes:h,viewBox:y,body:i}}var qe=/\sid="(\S+)"/g,ze="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16),$e=0;function Ve(e,n=ze){let o=[],r;for(;r=qe.exec(e);)o.push(r[1]);if(!o.length)return e;let t="suffix"+(Math.random()*16777216|Date.now()).toString(16);return o.forEach(i=>{let s=typeof n=="function"?n(i):n+($e++).toString(),l=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+s+t+"$3")}),e=e.replace(new RegExp(t,"g"),""),e}var q=Object.create(null);function Ge(e,n){q[e]=n}function z(e){return q[e]||q[""]}function G(e){let n;if(typeof e.resources=="string")n=[e.resources];else if(n=e.resources,!(n instanceof Array)||!n.length)return null;return{resources:n,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}var B=Object.create(null),F=["https://api.simplesvg.com","https://api.unisvg.com"],N=[];for(;F.length>0;)F.length===1||Math.random()>.5?N.push(F.shift()):N.push(F.pop());B[""]=G({resources:["https://api.iconify.design"].concat(N)});function Be(e,n){let o=G(n);return o===null?!1:(B[e]=o,!0)}function W(e){return B[e]}var We=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}},Z=We();function Je(e,n){let o=W(e);if(!o)return 0;let r;if(!o.maxURL)r=0;else{let t=0;o.resources.forEach(s=>{t=Math.max(t,s.length)});let i=n+".json?icons=";r=o.maxURL-t-o.path.length-i.length}return r}function Ke(e){return e===404}var Xe=(e,n,o)=>{let r=[],t=Je(e,n),i="icons",s={type:i,provider:e,prefix:n,icons:[]},l=0;return o.forEach((c,f)=>{l+=c.length+1,l>=t&&f>0&&(r.push(s),s={type:i,provider:e,prefix:n,icons:[]},l=c.length),s.icons.push(c)}),r.push(s),r};function Ye(e){if(typeof e=="string"){let n=W(e);if(n)return n.path}return"/"}var Ze=(e,n,o)=>{if(!Z){o("abort",424);return}let r=Ye(n.provider);switch(n.type){case"icons":{let i=n.prefix,l=n.icons.join(","),c=new URLSearchParams({icons:l});r+=i+".json?"+c.toString();break}case"custom":{let i=n.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:o("abort",400);return}let t=503;Z(e+r).then(i=>{let s=i.status;if(s!==200){setTimeout(()=>{o(Ke(s)?"abort":"next",s)});return}return t=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?o("abort",i):o("next",t)});return}setTimeout(()=>{o("success",i)})}).catch(()=>{o("next",t)})},et={prepare:Xe,send:Ze};function tt(e){let n={loaded:[],missing:[],pending:[]},o=Object.create(null);e.sort((t,i)=>t.provider!==i.provider?t.provider.localeCompare(i.provider):t.prefix!==i.prefix?t.prefix.localeCompare(i.prefix):t.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(t=>{if(r.name===t.name&&r.prefix===t.prefix&&r.provider===t.provider)return;r=t;let i=t.provider,s=t.prefix,l=t.name,c=o[i]||(o[i]=Object.create(null)),f=c[s]||(c[s]=T(i,s)),a;l in f.icons?a=n.loaded:s===""||f.missing.has(l)?a=n.missing:a=n.pending;let d={provider:i,prefix:s,name:l};a.push(d)}),n}function he(e,n){e.forEach(o=>{let r=o.loaderCallbacks;r&&(o.loaderCallbacks=r.filter(t=>t.id!==n))})}function nt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;let n=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!n.length)return;let o=!1,r=e.provider,t=e.prefix;n.forEach(i=>{let s=i.icons,l=s.pending.length;s.pending=s.pending.filter(c=>{if(c.prefix!==t)return!0;let f=c.name;if(e.icons[f])s.loaded.push({provider:r,prefix:t,name:f});else if(e.missing.has(f))s.missing.push({provider:r,prefix:t,name:f});else return o=!0,!0;return!1}),s.pending.length!==l&&(o||he([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}var ot=0;function rt(e,n,o){let r=ot++,t=he.bind(null,o,r);if(!n.pending.length)return t;let i={id:r,icons:n,callback:e,abort:t};return o.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),t}function it(e,n=!0,o=!1){let r=[];return e.forEach(t=>{let i=typeof t=="string"?R(t,n,o):t;i&&r.push(i)}),r}var st={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ct(e,n,o,r){let t=e.resources.length,i=e.random?Math.floor(Math.random()*t):e.index,s;if(e.random){let m=e.resources.slice(0);for(s=[];m.length>1;){let v=Math.floor(Math.random()*m.length);s.push(m[v]),m=m.slice(0,v).concat(m.slice(v+1))}s=s.concat(m)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));let l=Date.now(),c="pending",f=0,a,d=null,h=[],g=[];typeof r=="function"&&g.push(r);function y(){d&&(clearTimeout(d),d=null)}function x(){c==="pending"&&(c="aborted"),y(),h.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),h=[]}function u(m,v){v&&(g=[]),typeof m=="function"&&g.push(m)}function p(){return{startTime:l,payload:n,status:c,queriesSent:f,queriesPending:h.length,subscribe:u,abort:x}}function S(){c="failed",g.forEach(m=>{m(void 0,a)})}function b(){h.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),h=[]}function w(m,v,C){let L=v!=="success";switch(h=h.filter(P=>P!==m),c){case"pending":break;case"failed":if(L||!e.dataAfterTimeout)return;break;default:return}if(v==="abort"){a=C,S();return}if(L){a=C,h.length||(s.length?D():S());return}if(y(),b(),!e.random){let P=e.resources.indexOf(m.resource);P!==-1&&P!==e.index&&(e.index=P)}c="completed",g.forEach(P=>{P(C)})}function D(){if(c!=="pending")return;y();let m=s.shift();if(m===void 0){if(h.length){d=setTimeout(()=>{y(),c==="pending"&&(b(),S())},e.timeout);return}S();return}let v={status:"pending",resource:m,callback:(C,L)=>{w(v,C,L)}};h.push(v),f++,d=setTimeout(D,e.rotate),o(m,n,v.callback)}return setTimeout(D),p}function ge(e){let n={...st,...e},o=[];function r(){o=o.filter(l=>l().status==="pending")}function t(l,c,f){let a=ct(n,l,c,(d,h)=>{r(),f&&f(d,h)});return o.push(a),a}function i(l){return o.find(c=>l(c))||null}return{query:t,find:i,setIndex:l=>{n.index=l},getIndex:()=>n.index,cleanup:r}}function ee(){}var Q=Object.create(null);function lt(e){if(!Q[e]){let n=W(e);if(!n)return;let o=ge(n),r={config:n,redundancy:o};Q[e]=r}return Q[e]}function ft(e,n,o){let r,t;if(typeof e=="string"){let i=z(e);if(!i)return o(void 0,424),ee;t=i.send;let s=lt(e);s&&(r=s.redundancy)}else{let i=G(e);if(i){r=ge(i);let s=e.resources?e.resources[0]:"",l=z(s);l&&(t=l.send)}}return!r||!t?(o(void 0,424),ee):r.query(n,t,o)().abort}function te(){}function at(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,nt(e)}))}function ut(e){let n=[],o=[];return e.forEach(r=>{(r.match(fe)?n:o).push(r)}),{valid:n,invalid:o}}function j(e,n,o){function r(){let t=e.pendingIcons;n.forEach(i=>{t&&t.delete(i),e.icons[i]||e.missing.add(i)})}if(o&&typeof o=="object")try{if(!ae(e,o).length){r();return}}catch(t){console.error(t)}r(),at(e)}function ne(e,n){e instanceof Promise?e.then(o=>{n(o)}).catch(()=>{n(null)}):n(e)}function dt(e,n){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(n).sort():e.iconsToLoad=n,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;let{provider:o,prefix:r}=e,t=e.iconsToLoad;if(delete e.iconsToLoad,!t||!t.length)return;let i=e.loadIcon;if(e.loadIcons&&(t.length>1||!i)){ne(e.loadIcons(t,r,o),a=>{j(e,t,a)});return}if(i){t.forEach(a=>{let d=i(a,r,o);ne(d,h=>{let g=h?{prefix:r,icons:{[a]:h}}:null;j(e,[a],g)})});return}let{valid:s,invalid:l}=ut(t);if(l.length&&j(e,l,null),!s.length)return;let c=r.match(fe)?z(o):null;if(!c){j(e,s,null);return}c.prepare(o,r,s).forEach(a=>{ft(o,a,d=>{j(e,a.icons,d)})})}))}var pt=(e,n)=>{let o=it(e,!0,ue()),r=tt(o);if(!r.pending.length){let c=!0;return n&&setTimeout(()=>{c&&n(r.loaded,r.missing,r.pending,te)}),()=>{c=!1}}let t=Object.create(null),i=[],s,l;return r.pending.forEach(c=>{let{provider:f,prefix:a}=c;if(a===l&&f===s)return;s=f,l=a,i.push(T(f,a));let d=t[f]||(t[f]=Object.create(null));d[a]||(d[a]=[])}),r.pending.forEach(c=>{let{provider:f,prefix:a,name:d}=c,h=T(f,a),g=h.pendingIcons||(h.pendingIcons=new Set);g.has(d)||(g.add(d),t[f][a].push(d))}),i.forEach(c=>{let f=t[c.provider][c.prefix];f.length&&dt(c,f)}),n?rt(n,r,i):te};function ht(e,n){let o={...e};for(let r in n){let t=n[r],i=typeof t;r in de?(t===null||t&&(i==="string"||i==="number"))&&(o[r]=t):i===typeof o[r]&&(o[r]=r==="rotate"?t%4:t)}return o}var gt=/[\s,]+/;function mt(e,n){n.split(gt).forEach(o=>{switch(o.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function yt(e,n=0){let o=e.replace(/^-?[0-9.]*/,"");function r(t){for(;t<0;)t+=4;return t%4}if(o===""){let t=parseInt(e);return isNaN(t)?0:r(t)}else if(o!==e){let t=0;switch(o){case"%":t=25;break;case"deg":t=90}if(t){let i=parseFloat(e.slice(0,e.length-o.length));return isNaN(i)?0:(i=i/t,i%1===0?r(i):0)}}return n}function xt(e,n){let o=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(let r in n)o+=" "+r+'="'+n[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+e+"</svg>"}function bt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function It(e){return"data:image/svg+xml,"+bt(e)}function wt(e){return'url("'+It(e)+'")'}var E;function vt(){try{E=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{E=null}}function kt(e){return E===void 0&&vt(),E?E.createHTML(e):e}var me={...pe,inline:!1},St={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Pt={display:"inline-block"},$={backgroundColor:"currentColor"},ye={backgroundColor:"transparent"},oe={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},re={WebkitMask:$,mask:$,background:ye};for(let e in re){let n=re[e];for(let o in oe)n[e+o]=oe[o]}var Tt={...me,inline:!0};function ie(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}var Ct=(e,n,o)=>{let r=n.inline?Tt:me,t=ht(r,n),i=n.mode||"svg",s={},l=n.style||{},c={...i==="svg"?St:{}};if(o){let u=R(o,!1,!0);if(u){let p=["iconify"],S=["provider","prefix"];for(let b of S)u[b]&&p.push("iconify--"+u[b]);c.className=p.join(" ")}}for(let u in n){let p=n[u];if(p!==void 0)switch(u){case"icon":case"style":case"children":case"onLoad":case"mode":case"ssr":break;case"_ref":c.ref=p;break;case"className":c[u]=(c[u]?c[u]+" ":"")+p;break;case"inline":case"hFlip":case"vFlip":t[u]=p===!0||p==="true"||p===1;break;case"flip":typeof p=="string"&&mt(t,p);break;case"color":s.color=p;break;case"rotate":typeof p=="string"?t[u]=yt(p):typeof p=="number"&&(t[u]=p);break;case"ariaHidden":case"aria-hidden":p!==!0&&p!=="true"&&delete c["aria-hidden"];break;default:r[u]===void 0&&(c[u]=p)}}let f=Ue(e,t),a=f.attributes;if(t.inline&&(s.verticalAlign="-0.125em"),i==="svg"){c.style={...s,...l},Object.assign(c,a);let u=0,p=n.id;return typeof p=="string"&&(p=p.replace(/-/g,"_")),c.dangerouslySetInnerHTML={__html:kt(Ve(f.body,p?()=>p+"ID"+u++:"iconifyReact"))},(0,I.createElement)("svg",c)}let{body:d,width:h,height:g}=e,y=i==="mask"||(i==="bg"?!1:d.indexOf("currentColor")!==-1),x=xt(d,{...a,width:h+"",height:g+""});return c.style={...s,"--svg":wt(x),width:ie(a.width),height:ie(a.height),...Pt,...y?$:ye,...l},(0,I.createElement)("span",c)};ue(!0);Ge("",et);if(typeof document<"u"&&typeof window<"u"){let e=window;if(e.IconifyPreload!==void 0){let n=e.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof n=="object"&&n!==null&&(n instanceof Array?n:[n]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Ne(r))&&console.error(o)}catch{console.error(o)}})}if(e.IconifyProviders!==void 0){let n=e.IconifyProviders;if(typeof n=="object"&&n!==null)for(let o in n){let r="IconifyProviders["+o+"] is invalid.";try{let t=n[o];if(typeof t!="object"||!t||t.resources===void 0)continue;Be(o,t)||console.error(r)}catch{console.error(r)}}}}function xe(e){let[n,o]=(0,I.useState)(!!e.ssr),[r,t]=(0,I.useState)({});function i(g){if(g){let y=e.icon;if(typeof y=="object")return{name:"",data:y};let x=X(y);if(x)return{name:y,data:x}}return{name:""}}let[s,l]=(0,I.useState)(i(!!e.ssr));function c(){let g=r.callback;g&&(g(),t({}))}function f(g){if(JSON.stringify(s)!==JSON.stringify(g))return c(),l(g),!0}function a(){var g;let y=e.icon;if(typeof y=="object"){f({name:"",data:y});return}let x=X(y);if(f({name:y,data:x}))if(x===void 0){let u=pt([y],a);t({callback:u})}else x&&((g=e.onLoad)===null||g===void 0||g.call(e,y))}(0,I.useEffect)(()=>(o(!0),c),[]),(0,I.useEffect)(()=>{n&&a()},[e.icon,n]);let{name:d,data:h}=s;return h?Ct({...V,...h},e,d):e.children?e.children:(0,I.createElement)("span",{})}var be=(0,I.forwardRef)((e,n)=>xe({...e,_ref:n})),Ot=(0,I.forwardRef)((e,n)=>xe({inline:!0,...e,_ref:n}));var k=require("react/jsx-runtime");function Ie(e){let{disableLink:n,links:o,socials:r,copyright:t}=e;return(0,k.jsx)("div",{className:"pc-bg-white pc-pt-4 sm:pc-pt-10 lg:pc-pt-12",children:(0,k.jsxs)("footer",{className:"pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8",children:[(0,k.jsxs)("div",{className:"pc-flex pc-flex-col pc-items-center pc-justify-between pc-gap-4 pc-border-b pc-border-t pc-py-6 md:pc-flex-row",children:[(0,k.jsx)("nav",{className:"pc-flex pc-flex-wrap pc-justify-center pc-gap-x-4 pc-gap-y-2 md:pc-justify-start md:pc-gap-6",children:o?.map((i,s)=>(0,k.jsx)("a",{href:n?void 0:i?.link,className:"pc-text-gray-500 pc-transition pc-duration-100 hover:pc-text-indigo-500 active:pc-text-indigo-600",children:i?.label},s))}),r&&(0,k.jsx)("div",{className:"pc-flex pc-gap-4",children:r.map((i,s)=>(0,k.jsx)("a",{href:n?void 0:i?.link,target:"_blank",rel:"noreferrer noopener",className:"pc-text-gray-400 pc-transition pc-duration-100 hover:pc-text-gray-500 active:pc-text-gray-600",children:i?.slug&&(0,k.jsx)(be,{icon:i.slug})},s))})]}),(0,k.jsx)("div",{className:"pc-py-8 pc-text-center pc-text-sm pc-text-gray-400",children:t})]})})}var Ft={slug:"footer-3",component:Ie};0&&(module.exports={FOOTER_3_META});
