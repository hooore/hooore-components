'use client'
"use strict";var _=Object.defineProperty;var we=Object.getOwnPropertyDescriptor;var Ie=Object.getOwnPropertyNames;var ve=Object.prototype.hasOwnProperty;var ke=(e,n)=>{for(var o in n)_(e,o,{get:n[o],enumerable:!0})},Se=(e,n,o,s)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of Ie(n))!ve.call(e,t)&&t!==o&&_(e,t,{get:()=>n[t],enumerable:!(s=we(n,t))||s.enumerable});return e};var Ce=e=>Se(_({},"__esModule",{value:!0}),e);var Tt={};ke(Tt,{Content6:()=>jt});module.exports=Ce(Tt);var I=require("react"),re=Object.freeze({left:0,top:0,width:16,height:16}),M=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),V=Object.freeze({...re,...M}),U=Object.freeze({...V,body:"",hidden:!1});function Pe(e,n){let o={};!e.hFlip!=!n.hFlip&&(o.hFlip=!0),!e.vFlip!=!n.vFlip&&(o.vFlip=!0);let s=((e.rotate||0)+(n.rotate||0))%4;return s&&(o.rotate=s),o}function J(e,n){let o=Pe(e,n);for(let s in U)s in M?s in e&&!(s in o)&&(o[s]=M[s]):s in n?o[s]=n[s]:s in e&&(o[s]=e[s]);return o}function je(e,n){let o=e.icons,s=e.aliases||Object.create(null),t=Object.create(null);function i(r){if(o[r])return t[r]=[];if(!(r in t)){t[r]=null;let l=s[r]&&s[r].parent,c=l&&i(l);c&&(t[r]=[l].concat(c))}return t[r]}return Object.keys(o).concat(Object.keys(s)).forEach(i),t}function Te(e,n,o){let s=e.icons,t=e.aliases||Object.create(null),i={};function r(l){i=J(s[l]||t[l],i)}return r(n),o.forEach(r),J(e,i)}function ce(e,n){let o=[];if(typeof e!="object"||typeof e.icons!="object")return o;e.not_found instanceof Array&&e.not_found.forEach(t=>{n(t,null),o.push(t)});let s=je(e);for(let t in s){let i=s[t];i&&(n(t,Te(e,t,i)),o.push(t))}return o}var Ee={provider:"",aliases:{},not_found:{},...re};function H(e,n){for(let o in n)if(o in e&&typeof e[o]!=typeof n[o])return!1;return!0}function le(e){if(typeof e!="object"||e===null)return null;let n=e;if(typeof n.prefix!="string"||!e.icons||typeof e.icons!="object"||!H(e,Ee))return null;let o=n.icons;for(let t in o){let i=o[t];if(!t||typeof i.body!="string"||!H(i,U))return null}let s=n.aliases||Object.create(null);for(let t in s){let i=s[t],r=i.parent;if(!t||typeof r!="string"||!o[r]&&!s[r]||!H(i,U))return null}return n}var ae=/^[a-z0-9]+(-[a-z0-9]+)*$/,R=(e,n,o,s="")=>{let t=e.split(":");if(e.slice(0,1)==="@"){if(t.length<2||t.length>3)return null;s=t.shift().slice(1)}if(t.length>3||!t.length)return null;if(t.length>1){let l=t.pop(),c=t.pop(),a={provider:t.length>0?t[0]:s,prefix:c,name:l};return n&&!A(a)?null:a}let i=t[0],r=i.split("-");if(r.length>1){let l={provider:s,prefix:r.shift(),name:r.join("-")};return n&&!A(l)?null:l}if(o&&s===""){let l={provider:s,prefix:"",name:i};return n&&!A(l,o)?null:l}return null},A=(e,n)=>e?!!((n&&e.prefix===""||e.prefix)&&e.name):!1,K=Object.create(null);function Ne(e,n){return{provider:e,prefix:n,icons:Object.create(null),missing:new Set}}function P(e,n){let o=K[e]||(K[e]=Object.create(null));return o[n]||(o[n]=Ne(e,n))}function fe(e,n){return le(n)?ce(n,(o,s)=>{s?e.icons[o]=s:e.missing.add(o)}):[]}function Oe(e,n,o){try{if(typeof o.body=="string")return e.icons[n]={...o},!0}catch{}return!1}var O=!1;function ue(e){return typeof e=="boolean"&&(O=e),O}function X(e){let n=typeof e=="string"?R(e,!0,O):e;if(n){let o=P(n.provider,n.prefix),s=n.name;return o.icons[s]||(o.missing.has(s)?null:void 0)}}function Le(e,n){let o=R(e,!0,O);if(!o)return!1;let s=P(o.provider,o.prefix);return n?Oe(s,o.name,n):(s.missing.add(o.name),!0)}function Ae(e,n){if(typeof e!="object")return!1;if(typeof n!="string"&&(n=e.provider||""),O&&!n&&!e.prefix){let t=!1;return le(e)&&(e.prefix="",ce(e,(i,r)=>{Le(i,r)&&(t=!0)})),t}let o=e.prefix;if(!A({provider:n,prefix:o,name:"a"}))return!1;let s=P(n,o);return!!fe(s,e)}var pe=Object.freeze({width:null,height:null}),de=Object.freeze({...pe,...M}),Fe=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Me=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Z(e,n,o){if(n===1)return e;if(o=o||100,typeof e=="number")return Math.ceil(e*n*o)/o;if(typeof e!="string")return e;let s=e.split(Fe);if(s===null||!s.length)return e;let t=[],i=s.shift(),r=Me.test(i);for(;;){if(r){let l=parseFloat(i);isNaN(l)?t.push(i):t.push(Math.ceil(l*n*o)/o)}else t.push(i);if(i=s.shift(),i===void 0)return t.join("");r=!r}}function Re(e,n="defs"){let o="",s=e.indexOf("<"+n);for(;s>=0;){let t=e.indexOf(">",s),i=e.indexOf("</"+n);if(t===-1||i===-1)break;let r=e.indexOf(">",i);if(r===-1)break;o+=e.slice(t+1,i).trim(),e=e.slice(0,s).trim()+e.slice(r+1)}return{defs:o,content:e}}function De(e,n){return e?"<defs>"+e+"</defs>"+n:n}function _e(e,n,o){let s=Re(e);return De(s.defs,n+s.content+o)}var He=e=>e==="unset"||e==="undefined"||e==="none";function Qe(e,n){let o={...V,...e},s={...de,...n},t={left:o.left,top:o.top,width:o.width,height:o.height},i=o.body;[o,s].forEach(b=>{let u=[],d=b.hFlip,S=b.vFlip,w=b.rotate;d?S?w+=2:(u.push("translate("+(t.width+t.left).toString()+" "+(0-t.top).toString()+")"),u.push("scale(-1 1)"),t.top=t.left=0):S&&(u.push("translate("+(0-t.left).toString()+" "+(t.height+t.top).toString()+")"),u.push("scale(1 -1)"),t.top=t.left=0);let v;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:v=t.height/2+t.top,u.unshift("rotate(90 "+v.toString()+" "+v.toString()+")");break;case 2:u.unshift("rotate(180 "+(t.width/2+t.left).toString()+" "+(t.height/2+t.top).toString()+")");break;case 3:v=t.width/2+t.left,u.unshift("rotate(-90 "+v.toString()+" "+v.toString()+")");break}w%2===1&&(t.left!==t.top&&(v=t.left,t.left=t.top,t.top=v),t.width!==t.height&&(v=t.width,t.width=t.height,t.height=v)),u.length&&(i=_e(i,'<g transform="'+u.join(" ")+'">',"</g>"))});let r=s.width,l=s.height,c=t.width,a=t.height,f,p;r===null?(p=l===null?"1em":l==="auto"?a:l,f=Z(p,c/a)):(f=r==="auto"?c:r,p=l===null?Z(f,a/c):l==="auto"?a:l);let h={},g=(b,u)=>{He(u)||(h[b]=u.toString())};g("width",f),g("height",p);let x=[t.left,t.top,c,a];return h.viewBox=x.join(" "),{attributes:h,viewBox:x,body:i}}var Ue=/\sid="(\S+)"/g,qe="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16),ze=0;function $e(e,n=qe){let o=[],s;for(;s=Ue.exec(e);)o.push(s[1]);if(!o.length)return e;let t="suffix"+(Math.random()*16777216|Date.now()).toString(16);return o.forEach(i=>{let r=typeof n=="function"?n(i):n+(ze++).toString(),l=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+r+t+"$3")}),e=e.replace(new RegExp(t,"g"),""),e}var q=Object.create(null);function Ve(e,n){q[e]=n}function z(e){return q[e]||q[""]}function B(e){let n;if(typeof e.resources=="string")n=[e.resources];else if(n=e.resources,!(n instanceof Array)||!n.length)return null;return{resources:n,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}var G=Object.create(null),T=["https://api.simplesvg.com","https://api.unisvg.com"],F=[];for(;T.length>0;)T.length===1||Math.random()>.5?F.push(T.shift()):F.push(T.pop());G[""]=B({resources:["https://api.iconify.design"].concat(F)});function Be(e,n){let o=B(n);return o===null?!1:(G[e]=o,!0)}function W(e){return G[e]}var Ge=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}},Y=Ge();function We(e,n){let o=W(e);if(!o)return 0;let s;if(!o.maxURL)s=0;else{let t=0;o.resources.forEach(r=>{t=Math.max(t,r.length)});let i=n+".json?icons=";s=o.maxURL-t-o.path.length-i.length}return s}function Je(e){return e===404}var Ke=(e,n,o)=>{let s=[],t=We(e,n),i="icons",r={type:i,provider:e,prefix:n,icons:[]},l=0;return o.forEach((c,a)=>{l+=c.length+1,l>=t&&a>0&&(s.push(r),r={type:i,provider:e,prefix:n,icons:[]},l=c.length),r.icons.push(c)}),s.push(r),s};function Xe(e){if(typeof e=="string"){let n=W(e);if(n)return n.path}return"/"}var Ze=(e,n,o)=>{if(!Y){o("abort",424);return}let s=Xe(n.provider);switch(n.type){case"icons":{let i=n.prefix,l=n.icons.join(","),c=new URLSearchParams({icons:l});s+=i+".json?"+c.toString();break}case"custom":{let i=n.uri;s+=i.slice(0,1)==="/"?i.slice(1):i;break}default:o("abort",400);return}let t=503;Y(e+s).then(i=>{let r=i.status;if(r!==200){setTimeout(()=>{o(Je(r)?"abort":"next",r)});return}return t=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?o("abort",i):o("next",t)});return}setTimeout(()=>{o("success",i)})}).catch(()=>{o("next",t)})},Ye={prepare:Ke,send:Ze};function et(e){let n={loaded:[],missing:[],pending:[]},o=Object.create(null);e.sort((t,i)=>t.provider!==i.provider?t.provider.localeCompare(i.provider):t.prefix!==i.prefix?t.prefix.localeCompare(i.prefix):t.name.localeCompare(i.name));let s={provider:"",prefix:"",name:""};return e.forEach(t=>{if(s.name===t.name&&s.prefix===t.prefix&&s.provider===t.provider)return;s=t;let i=t.provider,r=t.prefix,l=t.name,c=o[i]||(o[i]=Object.create(null)),a=c[r]||(c[r]=P(i,r)),f;l in a.icons?f=n.loaded:r===""||a.missing.has(l)?f=n.missing:f=n.pending;let p={provider:i,prefix:r,name:l};f.push(p)}),n}function he(e,n){e.forEach(o=>{let s=o.loaderCallbacks;s&&(o.loaderCallbacks=s.filter(t=>t.id!==n))})}function tt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;let n=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!n.length)return;let o=!1,s=e.provider,t=e.prefix;n.forEach(i=>{let r=i.icons,l=r.pending.length;r.pending=r.pending.filter(c=>{if(c.prefix!==t)return!0;let a=c.name;if(e.icons[a])r.loaded.push({provider:s,prefix:t,name:a});else if(e.missing.has(a))r.missing.push({provider:s,prefix:t,name:a});else return o=!0,!0;return!1}),r.pending.length!==l&&(o||he([e],i.id),i.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),i.abort))})}))}var nt=0;function ot(e,n,o){let s=nt++,t=he.bind(null,o,s);if(!n.pending.length)return t;let i={id:s,icons:n,callback:e,abort:t};return o.forEach(r=>{(r.loaderCallbacks||(r.loaderCallbacks=[])).push(i)}),t}function st(e,n=!0,o=!1){let s=[];return e.forEach(t=>{let i=typeof t=="string"?R(t,n,o):t;i&&s.push(i)}),s}var it={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function rt(e,n,o,s){let t=e.resources.length,i=e.random?Math.floor(Math.random()*t):e.index,r;if(e.random){let m=e.resources.slice(0);for(r=[];m.length>1;){let k=Math.floor(Math.random()*m.length);r.push(m[k]),m=m.slice(0,k).concat(m.slice(k+1))}r=r.concat(m)}else r=e.resources.slice(i).concat(e.resources.slice(0,i));let l=Date.now(),c="pending",a=0,f,p=null,h=[],g=[];typeof s=="function"&&g.push(s);function x(){p&&(clearTimeout(p),p=null)}function b(){c==="pending"&&(c="aborted"),x(),h.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),h=[]}function u(m,k){k&&(g=[]),typeof m=="function"&&g.push(m)}function d(){return{startTime:l,payload:n,status:c,queriesSent:a,queriesPending:h.length,subscribe:u,abort:b}}function S(){c="failed",g.forEach(m=>{m(void 0,f)})}function w(){h.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),h=[]}function v(m,k,j){let L=k!=="success";switch(h=h.filter(C=>C!==m),c){case"pending":break;case"failed":if(L||!e.dataAfterTimeout)return;break;default:return}if(k==="abort"){f=j,S();return}if(L){f=j,h.length||(r.length?D():S());return}if(x(),w(),!e.random){let C=e.resources.indexOf(m.resource);C!==-1&&C!==e.index&&(e.index=C)}c="completed",g.forEach(C=>{C(j)})}function D(){if(c!=="pending")return;x();let m=r.shift();if(m===void 0){if(h.length){p=setTimeout(()=>{x(),c==="pending"&&(w(),S())},e.timeout);return}S();return}let k={status:"pending",resource:m,callback:(j,L)=>{v(k,j,L)}};h.push(k),a++,p=setTimeout(D,e.rotate),o(m,n,k.callback)}return setTimeout(D),d}function ge(e){let n={...it,...e},o=[];function s(){o=o.filter(l=>l().status==="pending")}function t(l,c,a){let f=rt(n,l,c,(p,h)=>{s(),a&&a(p,h)});return o.push(f),f}function i(l){return o.find(c=>l(c))||null}return{query:t,find:i,setIndex:l=>{n.index=l},getIndex:()=>n.index,cleanup:s}}function ee(){}var Q=Object.create(null);function ct(e){if(!Q[e]){let n=W(e);if(!n)return;let o=ge(n),s={config:n,redundancy:o};Q[e]=s}return Q[e]}function lt(e,n,o){let s,t;if(typeof e=="string"){let i=z(e);if(!i)return o(void 0,424),ee;t=i.send;let r=ct(e);r&&(s=r.redundancy)}else{let i=B(e);if(i){s=ge(i);let r=e.resources?e.resources[0]:"",l=z(r);l&&(t=l.send)}}return!s||!t?(o(void 0,424),ee):s.query(n,t,o)().abort}function te(){}function at(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,tt(e)}))}function ft(e){let n=[],o=[];return e.forEach(s=>{(s.match(ae)?n:o).push(s)}),{valid:n,invalid:o}}function E(e,n,o){function s(){let t=e.pendingIcons;n.forEach(i=>{t&&t.delete(i),e.icons[i]||e.missing.add(i)})}if(o&&typeof o=="object")try{if(!fe(e,o).length){s();return}}catch(t){console.error(t)}s(),at(e)}function ne(e,n){e instanceof Promise?e.then(o=>{n(o)}).catch(()=>{n(null)}):n(e)}function ut(e,n){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(n).sort():e.iconsToLoad=n,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;let{provider:o,prefix:s}=e,t=e.iconsToLoad;if(delete e.iconsToLoad,!t||!t.length)return;let i=e.loadIcon;if(e.loadIcons&&(t.length>1||!i)){ne(e.loadIcons(t,s,o),f=>{E(e,t,f)});return}if(i){t.forEach(f=>{let p=i(f,s,o);ne(p,h=>{let g=h?{prefix:s,icons:{[f]:h}}:null;E(e,[f],g)})});return}let{valid:r,invalid:l}=ft(t);if(l.length&&E(e,l,null),!r.length)return;let c=s.match(ae)?z(o):null;if(!c){E(e,r,null);return}c.prepare(o,s,r).forEach(f=>{lt(o,f,p=>{E(e,f.icons,p)})})}))}var pt=(e,n)=>{let o=st(e,!0,ue()),s=et(o);if(!s.pending.length){let c=!0;return n&&setTimeout(()=>{c&&n(s.loaded,s.missing,s.pending,te)}),()=>{c=!1}}let t=Object.create(null),i=[],r,l;return s.pending.forEach(c=>{let{provider:a,prefix:f}=c;if(f===l&&a===r)return;r=a,l=f,i.push(P(a,f));let p=t[a]||(t[a]=Object.create(null));p[f]||(p[f]=[])}),s.pending.forEach(c=>{let{provider:a,prefix:f,name:p}=c,h=P(a,f),g=h.pendingIcons||(h.pendingIcons=new Set);g.has(p)||(g.add(p),t[a][f].push(p))}),i.forEach(c=>{let a=t[c.provider][c.prefix];a.length&&ut(c,a)}),n?ot(n,s,i):te};function dt(e,n){let o={...e};for(let s in n){let t=n[s],i=typeof t;s in pe?(t===null||t&&(i==="string"||i==="number"))&&(o[s]=t):i===typeof o[s]&&(o[s]=s==="rotate"?t%4:t)}return o}var ht=/[\s,]+/;function gt(e,n){n.split(ht).forEach(o=>{switch(o.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function mt(e,n=0){let o=e.replace(/^-?[0-9.]*/,"");function s(t){for(;t<0;)t+=4;return t%4}if(o===""){let t=parseInt(e);return isNaN(t)?0:s(t)}else if(o!==e){let t=0;switch(o){case"%":t=25;break;case"deg":t=90}if(t){let i=parseFloat(e.slice(0,e.length-o.length));return isNaN(i)?0:(i=i/t,i%1===0?s(i):0)}}return n}function xt(e,n){let o=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(let s in n)o+=" "+s+'="'+n[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+e+"</svg>"}function yt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function bt(e){return"data:image/svg+xml,"+yt(e)}function wt(e){return'url("'+bt(e)+'")'}var N;function It(){try{N=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{N=null}}function vt(e){return N===void 0&&It(),N?N.createHTML(e):e}var me={...de,inline:!1},kt={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},St={display:"inline-block"},$={backgroundColor:"currentColor"},xe={backgroundColor:"transparent"},oe={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},se={WebkitMask:$,mask:$,background:xe};for(let e in se){let n=se[e];for(let o in oe)n[e+o]=oe[o]}var Ct={...me,inline:!0};function ie(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}var Pt=(e,n,o)=>{let s=n.inline?Ct:me,t=dt(s,n),i=n.mode||"svg",r={},l=n.style||{},c={...i==="svg"?kt:{}};if(o){let u=R(o,!1,!0);if(u){let d=["iconify"],S=["provider","prefix"];for(let w of S)u[w]&&d.push("iconify--"+u[w]);c.className=d.join(" ")}}for(let u in n){let d=n[u];if(d!==void 0)switch(u){case"icon":case"style":case"children":case"onLoad":case"mode":case"ssr":break;case"_ref":c.ref=d;break;case"className":c[u]=(c[u]?c[u]+" ":"")+d;break;case"inline":case"hFlip":case"vFlip":t[u]=d===!0||d==="true"||d===1;break;case"flip":typeof d=="string"&&gt(t,d);break;case"color":r.color=d;break;case"rotate":typeof d=="string"?t[u]=mt(d):typeof d=="number"&&(t[u]=d);break;case"ariaHidden":case"aria-hidden":d!==!0&&d!=="true"&&delete c["aria-hidden"];break;default:s[u]===void 0&&(c[u]=d)}}let a=Qe(e,t),f=a.attributes;if(t.inline&&(r.verticalAlign="-0.125em"),i==="svg"){c.style={...r,...l},Object.assign(c,f);let u=0,d=n.id;return typeof d=="string"&&(d=d.replace(/-/g,"_")),c.dangerouslySetInnerHTML={__html:vt($e(a.body,d?()=>d+"ID"+u++:"iconifyReact"))},(0,I.createElement)("svg",c)}let{body:p,width:h,height:g}=e,x=i==="mask"||(i==="bg"?!1:p.indexOf("currentColor")!==-1),b=xt(p,{...f,width:h+"",height:g+""});return c.style={...r,"--svg":wt(b),width:ie(f.width),height:ie(f.height),...St,...x?$:xe,...l},(0,I.createElement)("span",c)};ue(!0);Ve("",Ye);if(typeof document<"u"&&typeof window<"u"){let e=window;if(e.IconifyPreload!==void 0){let n=e.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof n=="object"&&n!==null&&(n instanceof Array?n:[n]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!Ae(s))&&console.error(o)}catch{console.error(o)}})}if(e.IconifyProviders!==void 0){let n=e.IconifyProviders;if(typeof n=="object"&&n!==null)for(let o in n){let s="IconifyProviders["+o+"] is invalid.";try{let t=n[o];if(typeof t!="object"||!t||t.resources===void 0)continue;Be(o,t)||console.error(s)}catch{console.error(s)}}}}function ye(e){let[n,o]=(0,I.useState)(!!e.ssr),[s,t]=(0,I.useState)({});function i(g){if(g){let x=e.icon;if(typeof x=="object")return{name:"",data:x};let b=X(x);if(b)return{name:x,data:b}}return{name:""}}let[r,l]=(0,I.useState)(i(!!e.ssr));function c(){let g=s.callback;g&&(g(),t({}))}function a(g){if(JSON.stringify(r)!==JSON.stringify(g))return c(),l(g),!0}function f(){var g;let x=e.icon;if(typeof x=="object"){a({name:"",data:x});return}let b=X(x);if(a({name:x,data:b}))if(b===void 0){let u=pt([x],f);t({callback:u})}else b&&((g=e.onLoad)===null||g===void 0||g.call(e,x))}(0,I.useEffect)(()=>(o(!0),c),[]),(0,I.useEffect)(()=>{n&&f()},[e.icon,n]);let{name:p,data:h}=r;return h?Pt({...V,...h},e,p):e.children?e.children:(0,I.createElement)("span",{})}var be=(0,I.forwardRef)((e,n)=>ye({...e,_ref:n})),Nt=(0,I.forwardRef)((e,n)=>ye({inline:!0,...e,_ref:n}));var y=require("react/jsx-runtime");function jt(e){let{icon:n,headline:o,description:s,cta_button_label:t,cta_link:i,image1:r,image2:l,image3:c,disableLink:a}=e;return(0,y.jsx)("section",{className:"pc-mx-auto pc-px-4 pc-py-16 sm:pc-max-w-xl md:pc-max-w-full md:pc-px-24 lg:pc-max-w-screen-xl lg:pc-px-8 lg:pc-py-20",children:(0,y.jsxs)("div",{className:"pc-grid pc-gap-10 lg:pc-grid-cols-2",children:[(0,y.jsxs)("div",{className:"pc-flex pc-flex-col pc-justify-center md:pc-pr-8 lg:pc-max-w-lg xl:pc-pr-0",children:[n&&(0,y.jsx)("div",{className:"pc-mb-4 pc-flex pc-h-16 pc-w-16 pc-items-center pc-justify-center pc-rounded-full pc-bg-teal-400",children:(0,y.jsx)(be,{icon:n,className:"pc-h-2/3 pc-w-2/3"})}),(0,y.jsxs)("div",{className:"pc-mb-6 pc-max-w-xl",children:[o&&(0,y.jsx)("h2",{className:"pc-mb-6 pc-max-w-lg pc-font-sans pc-text-3xl pc-font-bold pc-tracking-tight pc-text-gray-900 sm:pc-text-4xl sm:pc-leading-none",children:o}),s&&(0,y.jsx)("p",{className:"pc-text-base pc-text-gray-700 md:pc-text-lg",children:s})]}),t&&(0,y.jsx)("div",{children:(0,y.jsxs)("a",{target:"_blank",rel:"noreferrer noopener",href:a?void 0:i,className:"pc-inline-flex pc-items-center pc-font-semibold pc-text-purple-400 pc-transition-colors pc-duration-200 hover:pc-text-purple-800",children:["Learn more",(0,y.jsx)("svg",{className:"pc-ml-2 pc-inline-block pc-w-3",fill:"currentColor",viewBox:"0 0 12 12",children:(0,y.jsx)("path",{d:"M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"})})]})})]}),(0,y.jsxs)("div",{className:"-pc-mx-4 pc-flex pc-items-center pc-justify-center lg:pc-pl-8",children:[(0,y.jsxs)("div",{className:"pc-flex pc-flex-col pc-items-end pc-px-3",children:[r&&(0,y.jsx)("img",{className:"pc-mb-6 pc-h-28 pc-w-28 pc-rounded pc-object-cover pc-shadow-lg sm:pc-h-48 sm:pc-w-48 xl:pc-h-56 xl:pc-w-56",src:r}),l&&(0,y.jsx)("img",{className:"pc-h-20 pc-w-20 pc-rounded pc-object-cover pc-shadow-lg sm:pc-h-32 sm:pc-w-32 xl:pc-h-40 xl:pc-w-40",src:l})]}),(0,y.jsx)("div",{className:"pc-px-3",children:c&&(0,y.jsx)("img",{className:"pc-h-40 pc-w-40 pc-rounded pc-object-cover pc-shadow-lg sm:pc-h-64 sm:pc-w-64 xl:pc-h-80 xl:pc-w-80",src:c})})]})]})})}0&&(module.exports={Content6});
