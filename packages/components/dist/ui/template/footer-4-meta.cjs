'use client'
"use strict";var _=Object.defineProperty;var we=Object.getOwnPropertyDescriptor;var ve=Object.getOwnPropertyNames;var ke=Object.prototype.hasOwnProperty;var Se=(e,n)=>{for(var o in n)_(e,o,{get:n[o],enumerable:!0})},Pe=(e,n,o,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of ve(n))!ke.call(e,t)&&t!==o&&_(e,t,{get:()=>n[t],enumerable:!(r=we(n,t))||r.enumerable});return e};var Te=e=>Pe(_({},"__esModule",{value:!0}),e);var jt={};Se(jt,{FOOTER_4_META:()=>Ft});module.exports=Te(jt);var w=require("react"),ie=Object.freeze({left:0,top:0,width:16,height:16}),M=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),V=Object.freeze({...ie,...M}),U=Object.freeze({...V,body:"",hidden:!1});function Ce(e,n){let o={};!e.hFlip!=!n.hFlip&&(o.hFlip=!0),!e.vFlip!=!n.vFlip&&(o.vFlip=!0);let r=((e.rotate||0)+(n.rotate||0))%4;return r&&(o.rotate=r),o}function J(e,n){let o=Ce(e,n);for(let r in U)r in M?r in e&&!(r in o)&&(o[r]=M[r]):r in n?o[r]=n[r]:r in e&&(o[r]=e[r]);return o}function Fe(e,n){let o=e.icons,r=e.aliases||Object.create(null),t=Object.create(null);function s(i){if(o[i])return t[i]=[];if(!(i in t)){t[i]=null;let c=r[i]&&r[i].parent,l=c&&s(c);l&&(t[i]=[c].concat(l))}return t[i]}return Object.keys(o).concat(Object.keys(r)).forEach(s),t}function je(e,n,o){let r=e.icons,t=e.aliases||Object.create(null),s={};function i(c){s=J(r[c]||t[c],s)}return i(n),o.forEach(i),J(e,s)}function ce(e,n){let o=[];if(typeof e!="object"||typeof e.icons!="object")return o;e.not_found instanceof Array&&e.not_found.forEach(t=>{n(t,null),o.push(t)});let r=Fe(e);for(let t in r){let s=r[t];s&&(n(t,je(e,t,s)),o.push(t))}return o}var Ee={provider:"",aliases:{},not_found:{},...ie};function H(e,n){for(let o in n)if(o in e&&typeof e[o]!=typeof n[o])return!1;return!0}function le(e){if(typeof e!="object"||e===null)return null;let n=e;if(typeof n.prefix!="string"||!e.icons||typeof e.icons!="object"||!H(e,Ee))return null;let o=n.icons;for(let t in o){let s=o[t];if(!t||typeof s.body!="string"||!H(s,U))return null}let r=n.aliases||Object.create(null);for(let t in r){let s=r[t],i=s.parent;if(!t||typeof i!="string"||!o[i]&&!r[i]||!H(s,U))return null}return n}var fe=/^[a-z0-9]+(-[a-z0-9]+)*$/,R=(e,n,o,r="")=>{let t=e.split(":");if(e.slice(0,1)==="@"){if(t.length<2||t.length>3)return null;r=t.shift().slice(1)}if(t.length>3||!t.length)return null;if(t.length>1){let c=t.pop(),l=t.pop(),f={provider:t.length>0?t[0]:r,prefix:l,name:c};return n&&!N(f)?null:f}let s=t[0],i=s.split("-");if(i.length>1){let c={provider:r,prefix:i.shift(),name:i.join("-")};return n&&!N(c)?null:c}if(o&&r===""){let c={provider:r,prefix:"",name:s};return n&&!N(c,o)?null:c}return null},N=(e,n)=>e?!!((n&&e.prefix===""||e.prefix)&&e.name):!1,K=Object.create(null);function Oe(e,n){return{provider:e,prefix:n,icons:Object.create(null),missing:new Set}}function T(e,n){let o=K[e]||(K[e]=Object.create(null));return o[n]||(o[n]=Oe(e,n))}function ae(e,n){return le(n)?ce(n,(o,r)=>{r?e.icons[o]=r:e.missing.add(o)}):[]}function Le(e,n,o){try{if(typeof o.body=="string")return e.icons[n]={...o},!0}catch{}return!1}var O=!1;function ue(e){return typeof e=="boolean"&&(O=e),O}function X(e){let n=typeof e=="string"?R(e,!0,O):e;if(n){let o=T(n.provider,n.prefix),r=n.name;return o.icons[r]||(o.missing.has(r)?null:void 0)}}function Ne(e,n){let o=R(e,!0,O);if(!o)return!1;let r=T(o.provider,o.prefix);return n?Le(r,o.name,n):(r.missing.add(o.name),!0)}function Ae(e,n){if(typeof e!="object")return!1;if(typeof n!="string"&&(n=e.provider||""),O&&!n&&!e.prefix){let t=!1;return le(e)&&(e.prefix="",ce(e,(s,i)=>{Ne(s,i)&&(t=!0)})),t}let o=e.prefix;if(!N({provider:n,prefix:o,name:"a"}))return!1;let r=T(n,o);return!!ae(r,e)}var pe=Object.freeze({width:null,height:null}),de=Object.freeze({...pe,...M}),Me=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Re=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Y(e,n,o){if(n===1)return e;if(o=o||100,typeof e=="number")return Math.ceil(e*n*o)/o;if(typeof e!="string")return e;let r=e.split(Me);if(r===null||!r.length)return e;let t=[],s=r.shift(),i=Re.test(s);for(;;){if(i){let c=parseFloat(s);isNaN(c)?t.push(s):t.push(Math.ceil(c*n*o)/o)}else t.push(s);if(s=r.shift(),s===void 0)return t.join("");i=!i}}function De(e,n="defs"){let o="",r=e.indexOf("<"+n);for(;r>=0;){let t=e.indexOf(">",r),s=e.indexOf("</"+n);if(t===-1||s===-1)break;let i=e.indexOf(">",s);if(i===-1)break;o+=e.slice(t+1,s).trim(),e=e.slice(0,r).trim()+e.slice(i+1)}return{defs:o,content:e}}function _e(e,n){return e?"<defs>"+e+"</defs>"+n:n}function He(e,n,o){let r=De(e);return _e(r.defs,n+r.content+o)}var Qe=e=>e==="unset"||e==="undefined"||e==="none";function Ue(e,n){let o={...V,...e},r={...de,...n},t={left:o.left,top:o.top,width:o.width,height:o.height},s=o.body;[o,r].forEach(x=>{let u=[],d=x.hFlip,S=x.vFlip,I=x.rotate;d?S?I+=2:(u.push("translate("+(t.width+t.left).toString()+" "+(0-t.top).toString()+")"),u.push("scale(-1 1)"),t.top=t.left=0):S&&(u.push("translate("+(0-t.left).toString()+" "+(t.height+t.top).toString()+")"),u.push("scale(1 -1)"),t.top=t.left=0);let v;switch(I<0&&(I-=Math.floor(I/4)*4),I=I%4,I){case 1:v=t.height/2+t.top,u.unshift("rotate(90 "+v.toString()+" "+v.toString()+")");break;case 2:u.unshift("rotate(180 "+(t.width/2+t.left).toString()+" "+(t.height/2+t.top).toString()+")");break;case 3:v=t.width/2+t.left,u.unshift("rotate(-90 "+v.toString()+" "+v.toString()+")");break}I%2===1&&(t.left!==t.top&&(v=t.left,t.left=t.top,t.top=v),t.width!==t.height&&(v=t.width,t.width=t.height,t.height=v)),u.length&&(s=He(s,'<g transform="'+u.join(" ")+'">',"</g>"))});let i=r.width,c=r.height,l=t.width,f=t.height,a,p;i===null?(p=c===null?"1em":c==="auto"?f:c,a=Y(p,l/f)):(a=i==="auto"?l:i,p=c===null?Y(a,f/l):c==="auto"?f:c);let h={},g=(x,u)=>{Qe(u)||(h[x]=u.toString())};g("width",a),g("height",p);let y=[t.left,t.top,l,f];return h.viewBox=y.join(" "),{attributes:h,viewBox:y,body:s}}var qe=/\sid="(\S+)"/g,ze="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16),$e=0;function Ve(e,n=ze){let o=[],r;for(;r=qe.exec(e);)o.push(r[1]);if(!o.length)return e;let t="suffix"+(Math.random()*16777216|Date.now()).toString(16);return o.forEach(s=>{let i=typeof n=="function"?n(s):n+($e++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+t+"$3")}),e=e.replace(new RegExp(t,"g"),""),e}var q=Object.create(null);function Ge(e,n){q[e]=n}function z(e){return q[e]||q[""]}function G(e){let n;if(typeof e.resources=="string")n=[e.resources];else if(n=e.resources,!(n instanceof Array)||!n.length)return null;return{resources:n,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}var B=Object.create(null),F=["https://api.simplesvg.com","https://api.unisvg.com"],A=[];for(;F.length>0;)F.length===1||Math.random()>.5?A.push(F.shift()):A.push(F.pop());B[""]=G({resources:["https://api.iconify.design"].concat(A)});function Be(e,n){let o=G(n);return o===null?!1:(B[e]=o,!0)}function W(e){return B[e]}var We=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}},Z=We();function Je(e,n){let o=W(e);if(!o)return 0;let r;if(!o.maxURL)r=0;else{let t=0;o.resources.forEach(i=>{t=Math.max(t,i.length)});let s=n+".json?icons=";r=o.maxURL-t-o.path.length-s.length}return r}function Ke(e){return e===404}var Xe=(e,n,o)=>{let r=[],t=Je(e,n),s="icons",i={type:s,provider:e,prefix:n,icons:[]},c=0;return o.forEach((l,f)=>{c+=l.length+1,c>=t&&f>0&&(r.push(i),i={type:s,provider:e,prefix:n,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function Ye(e){if(typeof e=="string"){let n=W(e);if(n)return n.path}return"/"}var Ze=(e,n,o)=>{if(!Z){o("abort",424);return}let r=Ye(n.provider);switch(n.type){case"icons":{let s=n.prefix,c=n.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{let s=n.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:o("abort",400);return}let t=503;Z(e+r).then(s=>{let i=s.status;if(i!==200){setTimeout(()=>{o(Ke(i)?"abort":"next",i)});return}return t=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?o("abort",s):o("next",t)});return}setTimeout(()=>{o("success",s)})}).catch(()=>{o("next",t)})},et={prepare:Xe,send:Ze};function tt(e){let n={loaded:[],missing:[],pending:[]},o=Object.create(null);e.sort((t,s)=>t.provider!==s.provider?t.provider.localeCompare(s.provider):t.prefix!==s.prefix?t.prefix.localeCompare(s.prefix):t.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(t=>{if(r.name===t.name&&r.prefix===t.prefix&&r.provider===t.provider)return;r=t;let s=t.provider,i=t.prefix,c=t.name,l=o[s]||(o[s]=Object.create(null)),f=l[i]||(l[i]=T(s,i)),a;c in f.icons?a=n.loaded:i===""||f.missing.has(c)?a=n.missing:a=n.pending;let p={provider:s,prefix:i,name:c};a.push(p)}),n}function he(e,n){e.forEach(o=>{let r=o.loaderCallbacks;r&&(o.loaderCallbacks=r.filter(t=>t.id!==n))})}function nt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;let n=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!n.length)return;let o=!1,r=e.provider,t=e.prefix;n.forEach(s=>{let i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==t)return!0;let f=l.name;if(e.icons[f])i.loaded.push({provider:r,prefix:t,name:f});else if(e.missing.has(f))i.missing.push({provider:r,prefix:t,name:f});else return o=!0,!0;return!1}),i.pending.length!==c&&(o||he([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}var ot=0;function rt(e,n,o){let r=ot++,t=he.bind(null,o,r);if(!n.pending.length)return t;let s={id:r,icons:n,callback:e,abort:t};return o.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),t}function st(e,n=!0,o=!1){let r=[];return e.forEach(t=>{let s=typeof t=="string"?R(t,n,o):t;s&&r.push(s)}),r}var it={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ct(e,n,o,r){let t=e.resources.length,s=e.random?Math.floor(Math.random()*t):e.index,i;if(e.random){let m=e.resources.slice(0);for(i=[];m.length>1;){let k=Math.floor(Math.random()*m.length);i.push(m[k]),m=m.slice(0,k).concat(m.slice(k+1))}i=i.concat(m)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));let c=Date.now(),l="pending",f=0,a,p=null,h=[],g=[];typeof r=="function"&&g.push(r);function y(){p&&(clearTimeout(p),p=null)}function x(){l==="pending"&&(l="aborted"),y(),h.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),h=[]}function u(m,k){k&&(g=[]),typeof m=="function"&&g.push(m)}function d(){return{startTime:c,payload:n,status:l,queriesSent:f,queriesPending:h.length,subscribe:u,abort:x}}function S(){l="failed",g.forEach(m=>{m(void 0,a)})}function I(){h.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),h=[]}function v(m,k,C){let L=k!=="success";switch(h=h.filter(P=>P!==m),l){case"pending":break;case"failed":if(L||!e.dataAfterTimeout)return;break;default:return}if(k==="abort"){a=C,S();return}if(L){a=C,h.length||(i.length?D():S());return}if(y(),I(),!e.random){let P=e.resources.indexOf(m.resource);P!==-1&&P!==e.index&&(e.index=P)}l="completed",g.forEach(P=>{P(C)})}function D(){if(l!=="pending")return;y();let m=i.shift();if(m===void 0){if(h.length){p=setTimeout(()=>{y(),l==="pending"&&(I(),S())},e.timeout);return}S();return}let k={status:"pending",resource:m,callback:(C,L)=>{v(k,C,L)}};h.push(k),f++,p=setTimeout(D,e.rotate),o(m,n,k.callback)}return setTimeout(D),d}function ge(e){let n={...it,...e},o=[];function r(){o=o.filter(c=>c().status==="pending")}function t(c,l,f){let a=ct(n,c,l,(p,h)=>{r(),f&&f(p,h)});return o.push(a),a}function s(c){return o.find(l=>c(l))||null}return{query:t,find:s,setIndex:c=>{n.index=c},getIndex:()=>n.index,cleanup:r}}function ee(){}var Q=Object.create(null);function lt(e){if(!Q[e]){let n=W(e);if(!n)return;let o=ge(n),r={config:n,redundancy:o};Q[e]=r}return Q[e]}function ft(e,n,o){let r,t;if(typeof e=="string"){let s=z(e);if(!s)return o(void 0,424),ee;t=s.send;let i=lt(e);i&&(r=i.redundancy)}else{let s=G(e);if(s){r=ge(s);let i=e.resources?e.resources[0]:"",c=z(i);c&&(t=c.send)}}return!r||!t?(o(void 0,424),ee):r.query(n,t,o)().abort}function te(){}function at(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,nt(e)}))}function ut(e){let n=[],o=[];return e.forEach(r=>{(r.match(fe)?n:o).push(r)}),{valid:n,invalid:o}}function j(e,n,o){function r(){let t=e.pendingIcons;n.forEach(s=>{t&&t.delete(s),e.icons[s]||e.missing.add(s)})}if(o&&typeof o=="object")try{if(!ae(e,o).length){r();return}}catch(t){console.error(t)}r(),at(e)}function ne(e,n){e instanceof Promise?e.then(o=>{n(o)}).catch(()=>{n(null)}):n(e)}function pt(e,n){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(n).sort():e.iconsToLoad=n,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;let{provider:o,prefix:r}=e,t=e.iconsToLoad;if(delete e.iconsToLoad,!t||!t.length)return;let s=e.loadIcon;if(e.loadIcons&&(t.length>1||!s)){ne(e.loadIcons(t,r,o),a=>{j(e,t,a)});return}if(s){t.forEach(a=>{let p=s(a,r,o);ne(p,h=>{let g=h?{prefix:r,icons:{[a]:h}}:null;j(e,[a],g)})});return}let{valid:i,invalid:c}=ut(t);if(c.length&&j(e,c,null),!i.length)return;let l=r.match(fe)?z(o):null;if(!l){j(e,i,null);return}l.prepare(o,r,i).forEach(a=>{ft(o,a,p=>{j(e,a.icons,p)})})}))}var dt=(e,n)=>{let o=st(e,!0,ue()),r=tt(o);if(!r.pending.length){let l=!0;return n&&setTimeout(()=>{l&&n(r.loaded,r.missing,r.pending,te)}),()=>{l=!1}}let t=Object.create(null),s=[],i,c;return r.pending.forEach(l=>{let{provider:f,prefix:a}=l;if(a===c&&f===i)return;i=f,c=a,s.push(T(f,a));let p=t[f]||(t[f]=Object.create(null));p[a]||(p[a]=[])}),r.pending.forEach(l=>{let{provider:f,prefix:a,name:p}=l,h=T(f,a),g=h.pendingIcons||(h.pendingIcons=new Set);g.has(p)||(g.add(p),t[f][a].push(p))}),s.forEach(l=>{let f=t[l.provider][l.prefix];f.length&&pt(l,f)}),n?rt(n,r,s):te};function ht(e,n){let o={...e};for(let r in n){let t=n[r],s=typeof t;r in pe?(t===null||t&&(s==="string"||s==="number"))&&(o[r]=t):s===typeof o[r]&&(o[r]=r==="rotate"?t%4:t)}return o}var gt=/[\s,]+/;function mt(e,n){n.split(gt).forEach(o=>{switch(o.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function yt(e,n=0){let o=e.replace(/^-?[0-9.]*/,"");function r(t){for(;t<0;)t+=4;return t%4}if(o===""){let t=parseInt(e);return isNaN(t)?0:r(t)}else if(o!==e){let t=0;switch(o){case"%":t=25;break;case"deg":t=90}if(t){let s=parseFloat(e.slice(0,e.length-o.length));return isNaN(s)?0:(s=s/t,s%1===0?r(s):0)}}return n}function xt(e,n){let o=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(let r in n)o+=" "+r+'="'+n[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+e+"</svg>"}function bt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function It(e){return"data:image/svg+xml,"+bt(e)}function wt(e){return'url("'+It(e)+'")'}var E;function vt(){try{E=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{E=null}}function kt(e){return E===void 0&&vt(),E?E.createHTML(e):e}var me={...de,inline:!1},St={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Pt={display:"inline-block"},$={backgroundColor:"currentColor"},ye={backgroundColor:"transparent"},oe={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},re={WebkitMask:$,mask:$,background:ye};for(let e in re){let n=re[e];for(let o in oe)n[e+o]=oe[o]}var Tt={...me,inline:!0};function se(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}var Ct=(e,n,o)=>{let r=n.inline?Tt:me,t=ht(r,n),s=n.mode||"svg",i={},c=n.style||{},l={...s==="svg"?St:{}};if(o){let u=R(o,!1,!0);if(u){let d=["iconify"],S=["provider","prefix"];for(let I of S)u[I]&&d.push("iconify--"+u[I]);l.className=d.join(" ")}}for(let u in n){let d=n[u];if(d!==void 0)switch(u){case"icon":case"style":case"children":case"onLoad":case"mode":case"ssr":break;case"_ref":l.ref=d;break;case"className":l[u]=(l[u]?l[u]+" ":"")+d;break;case"inline":case"hFlip":case"vFlip":t[u]=d===!0||d==="true"||d===1;break;case"flip":typeof d=="string"&&mt(t,d);break;case"color":i.color=d;break;case"rotate":typeof d=="string"?t[u]=yt(d):typeof d=="number"&&(t[u]=d);break;case"ariaHidden":case"aria-hidden":d!==!0&&d!=="true"&&delete l["aria-hidden"];break;default:r[u]===void 0&&(l[u]=d)}}let f=Ue(e,t),a=f.attributes;if(t.inline&&(i.verticalAlign="-0.125em"),s==="svg"){l.style={...i,...c},Object.assign(l,a);let u=0,d=n.id;return typeof d=="string"&&(d=d.replace(/-/g,"_")),l.dangerouslySetInnerHTML={__html:kt(Ve(f.body,d?()=>d+"ID"+u++:"iconifyReact"))},(0,w.createElement)("svg",l)}let{body:p,width:h,height:g}=e,y=s==="mask"||(s==="bg"?!1:p.indexOf("currentColor")!==-1),x=xt(p,{...a,width:h+"",height:g+""});return l.style={...i,"--svg":wt(x),width:se(a.width),height:se(a.height),...Pt,...y?$:ye,...c},(0,w.createElement)("span",l)};ue(!0);Ge("",et);if(typeof document<"u"&&typeof window<"u"){let e=window;if(e.IconifyPreload!==void 0){let n=e.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof n=="object"&&n!==null&&(n instanceof Array?n:[n]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Ae(r))&&console.error(o)}catch{console.error(o)}})}if(e.IconifyProviders!==void 0){let n=e.IconifyProviders;if(typeof n=="object"&&n!==null)for(let o in n){let r="IconifyProviders["+o+"] is invalid.";try{let t=n[o];if(typeof t!="object"||!t||t.resources===void 0)continue;Be(o,t)||console.error(r)}catch{console.error(r)}}}}function xe(e){let[n,o]=(0,w.useState)(!!e.ssr),[r,t]=(0,w.useState)({});function s(g){if(g){let y=e.icon;if(typeof y=="object")return{name:"",data:y};let x=X(y);if(x)return{name:y,data:x}}return{name:""}}let[i,c]=(0,w.useState)(s(!!e.ssr));function l(){let g=r.callback;g&&(g(),t({}))}function f(g){if(JSON.stringify(i)!==JSON.stringify(g))return l(),c(g),!0}function a(){var g;let y=e.icon;if(typeof y=="object"){f({name:"",data:y});return}let x=X(y);if(f({name:y,data:x}))if(x===void 0){let u=dt([y],a);t({callback:u})}else x&&((g=e.onLoad)===null||g===void 0||g.call(e,y))}(0,w.useEffect)(()=>(o(!0),l),[]),(0,w.useEffect)(()=>{n&&a()},[e.icon,n]);let{name:p,data:h}=i;return h?Ct({...V,...h},e,p):e.children?e.children:(0,w.createElement)("span",{})}var be=(0,w.forwardRef)((e,n)=>xe({...e,_ref:n})),Ot=(0,w.forwardRef)((e,n)=>xe({inline:!0,...e,_ref:n}));var b=require("react/jsx-runtime");function Ie(e){let{image:n,description:o,links:r,socials:t,disableLink:s}=e;return(0,b.jsx)("footer",{className:"pc-bg-gray-100",children:(0,b.jsxs)("div",{className:"pc-mx-auto pc-max-w-5xl pc-px-4 pc-py-16 sm:pc-px-6 lg:pc-px-8",children:[(0,b.jsx)("div",{className:"pc-flex pc-justify-center",children:(0,b.jsx)("img",{src:n,className:"pc-max-h-36 pc-max-h-full pc-w-full pc-max-w-36"})}),(0,b.jsx)("p",{className:"pc-mx-auto pc-mt-6 pc-max-w-md pc-text-center pc-leading-relaxed pc-text-gray-500",children:o}),(0,b.jsx)("ul",{className:"pc-mt-12 pc-flex pc-flex-wrap pc-justify-center pc-gap-6 md:pc-gap-8 lg:pc-gap-12",children:r?.map((i,c)=>(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:s?void 0:i?.link,className:"pc-text-gray-700 pc-transition hover:pc-text-gray-700/75",children:i?.label})},c))}),(0,b.jsx)("ul",{className:"pc-mt-12 pc-flex pc-justify-center pc-gap-6 md:pc-gap-8",children:t?.map((i,c)=>(0,b.jsx)("li",{children:(0,b.jsxs)("a",{href:s?void 0:i?.link,rel:"noreferrer",target:"_blank",className:"pc-text-gray-700 pc-transition hover:pc-text-gray-700/75",children:[(0,b.jsx)("span",{className:"pc-sr-only",children:i?.slug}),i?.slug&&(0,b.jsx)(be,{icon:i.slug})]})},c))})]})})}var Ft={slug:"footer-4",component:Ie};0&&(module.exports={FOOTER_4_META});
