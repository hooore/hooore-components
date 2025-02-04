'use client'
"use strict";var D=Object.defineProperty;var ke=Object.getOwnPropertyDescriptor;var Se=Object.getOwnPropertyNames;var Pe=Object.prototype.hasOwnProperty;var Ce=(e,n)=>{for(var o in n)D(e,o,{get:n[o],enumerable:!0})},je=(e,n,o,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of Se(n))!Pe.call(e,t)&&t!==o&&D(e,t,{get:()=>n[t],enumerable:!(r=ke(n,t))||r.enumerable});return e};var Te=e=>je(D({},"__esModule",{value:!0}),e);var Lt={};Ce(Lt,{Hero1:()=>Ot});module.exports=Te(Lt);var I=require("react"),ie=Object.freeze({left:0,top:0,width:16,height:16}),M=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),V=Object.freeze({...ie,...M}),Q=Object.freeze({...V,body:"",hidden:!1});function Ee(e,n){let o={};!e.hFlip!=!n.hFlip&&(o.hFlip=!0),!e.vFlip!=!n.vFlip&&(o.vFlip=!0);let r=((e.rotate||0)+(n.rotate||0))%4;return r&&(o.rotate=r),o}function J(e,n){let o=Ee(e,n);for(let r in Q)r in M?r in e&&!(r in o)&&(o[r]=M[r]):r in n?o[r]=n[r]:r in e&&(o[r]=e[r]);return o}function Oe(e,n){let o=e.icons,r=e.aliases||Object.create(null),t=Object.create(null);function s(i){if(o[i])return t[i]=[];if(!(i in t)){t[i]=null;let l=r[i]&&r[i].parent,c=l&&s(l);c&&(t[i]=[l].concat(c))}return t[i]}return Object.keys(o).concat(Object.keys(r)).forEach(s),t}function Le(e,n,o){let r=e.icons,t=e.aliases||Object.create(null),s={};function i(l){s=J(r[l]||t[l],s)}return i(n),o.forEach(i),J(e,s)}function ce(e,n){let o=[];if(typeof e!="object"||typeof e.icons!="object")return o;e.not_found instanceof Array&&e.not_found.forEach(t=>{n(t,null),o.push(t)});let r=Oe(e);for(let t in r){let s=r[t];s&&(n(t,Le(e,t,s)),o.push(t))}return o}var Ne={provider:"",aliases:{},not_found:{},...ie};function H(e,n){for(let o in n)if(o in e&&typeof e[o]!=typeof n[o])return!1;return!0}function le(e){if(typeof e!="object"||e===null)return null;let n=e;if(typeof n.prefix!="string"||!e.icons||typeof e.icons!="object"||!H(e,Ne))return null;let o=n.icons;for(let t in o){let s=o[t];if(!t||typeof s.body!="string"||!H(s,Q))return null}let r=n.aliases||Object.create(null);for(let t in r){let s=r[t],i=s.parent;if(!t||typeof i!="string"||!o[i]&&!r[i]||!H(s,Q))return null}return n}var ae=/^[a-z0-9]+(-[a-z0-9]+)*$/,R=(e,n,o,r="")=>{let t=e.split(":");if(e.slice(0,1)==="@"){if(t.length<2||t.length>3)return null;r=t.shift().slice(1)}if(t.length>3||!t.length)return null;if(t.length>1){let l=t.pop(),c=t.pop(),a={provider:t.length>0?t[0]:r,prefix:c,name:l};return n&&!F(a)?null:a}let s=t[0],i=s.split("-");if(i.length>1){let l={provider:r,prefix:i.shift(),name:i.join("-")};return n&&!F(l)?null:l}if(o&&r===""){let l={provider:r,prefix:"",name:s};return n&&!F(l,o)?null:l}return null},F=(e,n)=>e?!!((n&&e.prefix===""||e.prefix)&&e.name):!1,K=Object.create(null);function Fe(e,n){return{provider:e,prefix:n,icons:Object.create(null),missing:new Set}}function C(e,n){let o=K[e]||(K[e]=Object.create(null));return o[n]||(o[n]=Fe(e,n))}function fe(e,n){return le(n)?ce(n,(o,r)=>{r?e.icons[o]=r:e.missing.add(o)}):[]}function Ae(e,n,o){try{if(typeof o.body=="string")return e.icons[n]={...o},!0}catch{}return!1}var L=!1;function ue(e){return typeof e=="boolean"&&(L=e),L}function X(e){let n=typeof e=="string"?R(e,!0,L):e;if(n){let o=C(n.provider,n.prefix),r=n.name;return o.icons[r]||(o.missing.has(r)?null:void 0)}}function Me(e,n){let o=R(e,!0,L);if(!o)return!1;let r=C(o.provider,o.prefix);return n?Ae(r,o.name,n):(r.missing.add(o.name),!0)}function Re(e,n){if(typeof e!="object")return!1;if(typeof n!="string"&&(n=e.provider||""),L&&!n&&!e.prefix){let t=!1;return le(e)&&(e.prefix="",ce(e,(s,i)=>{Me(s,i)&&(t=!0)})),t}let o=e.prefix;if(!F({provider:n,prefix:o,name:"a"}))return!1;let r=C(n,o);return!!fe(r,e)}var pe=Object.freeze({width:null,height:null}),de=Object.freeze({...pe,...M}),_e=/(-?[0-9.]*[0-9]+[0-9.]*)/g,De=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Y(e,n,o){if(n===1)return e;if(o=o||100,typeof e=="number")return Math.ceil(e*n*o)/o;if(typeof e!="string")return e;let r=e.split(_e);if(r===null||!r.length)return e;let t=[],s=r.shift(),i=De.test(s);for(;;){if(i){let l=parseFloat(s);isNaN(l)?t.push(s):t.push(Math.ceil(l*n*o)/o)}else t.push(s);if(s=r.shift(),s===void 0)return t.join("");i=!i}}function He(e,n="defs"){let o="",r=e.indexOf("<"+n);for(;r>=0;){let t=e.indexOf(">",r),s=e.indexOf("</"+n);if(t===-1||s===-1)break;let i=e.indexOf(">",s);if(i===-1)break;o+=e.slice(t+1,s).trim(),e=e.slice(0,r).trim()+e.slice(i+1)}return{defs:o,content:e}}function ze(e,n){return e?"<defs>"+e+"</defs>"+n:n}function Qe(e,n,o){let r=He(e);return ze(r.defs,n+r.content+o)}var Ue=e=>e==="unset"||e==="undefined"||e==="none";function qe(e,n){let o={...V,...e},r={...de,...n},t={left:o.left,top:o.top,width:o.width,height:o.height},s=o.body;[o,r].forEach(b=>{let u=[],d=b.hFlip,S=b.vFlip,v=b.rotate;d?S?v+=2:(u.push("translate("+(t.width+t.left).toString()+" "+(0-t.top).toString()+")"),u.push("scale(-1 1)"),t.top=t.left=0):S&&(u.push("translate("+(0-t.left).toString()+" "+(t.height+t.top).toString()+")"),u.push("scale(1 -1)"),t.top=t.left=0);let w;switch(v<0&&(v-=Math.floor(v/4)*4),v=v%4,v){case 1:w=t.height/2+t.top,u.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:u.unshift("rotate(180 "+(t.width/2+t.left).toString()+" "+(t.height/2+t.top).toString()+")");break;case 3:w=t.width/2+t.left,u.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}v%2===1&&(t.left!==t.top&&(w=t.left,t.left=t.top,t.top=w),t.width!==t.height&&(w=t.width,t.width=t.height,t.height=w)),u.length&&(s=Qe(s,'<g transform="'+u.join(" ")+'">',"</g>"))});let i=r.width,l=r.height,c=t.width,a=t.height,f,p;i===null?(p=l===null?"1em":l==="auto"?a:l,f=Y(p,c/a)):(f=i==="auto"?c:i,p=l===null?Y(f,a/c):l==="auto"?a:l);let h={},g=(b,u)=>{Ue(u)||(h[b]=u.toString())};g("width",f),g("height",p);let y=[t.left,t.top,c,a];return h.viewBox=y.join(" "),{attributes:h,viewBox:y,body:s}}var $e=/\sid="(\S+)"/g,Ve="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16),Ge=0;function Be(e,n=Ve){let o=[],r;for(;r=$e.exec(e);)o.push(r[1]);if(!o.length)return e;let t="suffix"+(Math.random()*16777216|Date.now()).toString(16);return o.forEach(s=>{let i=typeof n=="function"?n(s):n+(Ge++).toString(),l=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+i+t+"$3")}),e=e.replace(new RegExp(t,"g"),""),e}var U=Object.create(null);function We(e,n){U[e]=n}function q(e){return U[e]||U[""]}function G(e){let n;if(typeof e.resources=="string")n=[e.resources];else if(n=e.resources,!(n instanceof Array)||!n.length)return null;return{resources:n,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}var B=Object.create(null),T=["https://api.simplesvg.com","https://api.unisvg.com"],A=[];for(;T.length>0;)T.length===1||Math.random()>.5?A.push(T.shift()):A.push(T.pop());B[""]=G({resources:["https://api.iconify.design"].concat(A)});function Je(e,n){let o=G(n);return o===null?!1:(B[e]=o,!0)}function W(e){return B[e]}var Ke=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}},Z=Ke();function Xe(e,n){let o=W(e);if(!o)return 0;let r;if(!o.maxURL)r=0;else{let t=0;o.resources.forEach(i=>{t=Math.max(t,i.length)});let s=n+".json?icons=";r=o.maxURL-t-o.path.length-s.length}return r}function Ye(e){return e===404}var Ze=(e,n,o)=>{let r=[],t=Xe(e,n),s="icons",i={type:s,provider:e,prefix:n,icons:[]},l=0;return o.forEach((c,a)=>{l+=c.length+1,l>=t&&a>0&&(r.push(i),i={type:s,provider:e,prefix:n,icons:[]},l=c.length),i.icons.push(c)}),r.push(i),r};function et(e){if(typeof e=="string"){let n=W(e);if(n)return n.path}return"/"}var tt=(e,n,o)=>{if(!Z){o("abort",424);return}let r=et(n.provider);switch(n.type){case"icons":{let s=n.prefix,l=n.icons.join(","),c=new URLSearchParams({icons:l});r+=s+".json?"+c.toString();break}case"custom":{let s=n.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:o("abort",400);return}let t=503;Z(e+r).then(s=>{let i=s.status;if(i!==200){setTimeout(()=>{o(Ye(i)?"abort":"next",i)});return}return t=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?o("abort",s):o("next",t)});return}setTimeout(()=>{o("success",s)})}).catch(()=>{o("next",t)})},nt={prepare:Ze,send:tt};function ot(e){let n={loaded:[],missing:[],pending:[]},o=Object.create(null);e.sort((t,s)=>t.provider!==s.provider?t.provider.localeCompare(s.provider):t.prefix!==s.prefix?t.prefix.localeCompare(s.prefix):t.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(t=>{if(r.name===t.name&&r.prefix===t.prefix&&r.provider===t.provider)return;r=t;let s=t.provider,i=t.prefix,l=t.name,c=o[s]||(o[s]=Object.create(null)),a=c[i]||(c[i]=C(s,i)),f;l in a.icons?f=n.loaded:i===""||a.missing.has(l)?f=n.missing:f=n.pending;let p={provider:s,prefix:i,name:l};f.push(p)}),n}function he(e,n){e.forEach(o=>{let r=o.loaderCallbacks;r&&(o.loaderCallbacks=r.filter(t=>t.id!==n))})}function rt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;let n=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!n.length)return;let o=!1,r=e.provider,t=e.prefix;n.forEach(s=>{let i=s.icons,l=i.pending.length;i.pending=i.pending.filter(c=>{if(c.prefix!==t)return!0;let a=c.name;if(e.icons[a])i.loaded.push({provider:r,prefix:t,name:a});else if(e.missing.has(a))i.missing.push({provider:r,prefix:t,name:a});else return o=!0,!0;return!1}),i.pending.length!==l&&(o||he([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}var st=0;function it(e,n,o){let r=st++,t=he.bind(null,o,r);if(!n.pending.length)return t;let s={id:r,icons:n,callback:e,abort:t};return o.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),t}function ct(e,n=!0,o=!1){let r=[];return e.forEach(t=>{let s=typeof t=="string"?R(t,n,o):t;s&&r.push(s)}),r}var lt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function at(e,n,o,r){let t=e.resources.length,s=e.random?Math.floor(Math.random()*t):e.index,i;if(e.random){let m=e.resources.slice(0);for(i=[];m.length>1;){let k=Math.floor(Math.random()*m.length);i.push(m[k]),m=m.slice(0,k).concat(m.slice(k+1))}i=i.concat(m)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));let l=Date.now(),c="pending",a=0,f,p=null,h=[],g=[];typeof r=="function"&&g.push(r);function y(){p&&(clearTimeout(p),p=null)}function b(){c==="pending"&&(c="aborted"),y(),h.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),h=[]}function u(m,k){k&&(g=[]),typeof m=="function"&&g.push(m)}function d(){return{startTime:l,payload:n,status:c,queriesSent:a,queriesPending:h.length,subscribe:u,abort:b}}function S(){c="failed",g.forEach(m=>{m(void 0,f)})}function v(){h.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),h=[]}function w(m,k,j){let N=k!=="success";switch(h=h.filter(P=>P!==m),c){case"pending":break;case"failed":if(N||!e.dataAfterTimeout)return;break;default:return}if(k==="abort"){f=j,S();return}if(N){f=j,h.length||(i.length?_():S());return}if(y(),v(),!e.random){let P=e.resources.indexOf(m.resource);P!==-1&&P!==e.index&&(e.index=P)}c="completed",g.forEach(P=>{P(j)})}function _(){if(c!=="pending")return;y();let m=i.shift();if(m===void 0){if(h.length){p=setTimeout(()=>{y(),c==="pending"&&(v(),S())},e.timeout);return}S();return}let k={status:"pending",resource:m,callback:(j,N)=>{w(k,j,N)}};h.push(k),a++,p=setTimeout(_,e.rotate),o(m,n,k.callback)}return setTimeout(_),d}function ge(e){let n={...lt,...e},o=[];function r(){o=o.filter(l=>l().status==="pending")}function t(l,c,a){let f=at(n,l,c,(p,h)=>{r(),a&&a(p,h)});return o.push(f),f}function s(l){return o.find(c=>l(c))||null}return{query:t,find:s,setIndex:l=>{n.index=l},getIndex:()=>n.index,cleanup:r}}function ee(){}var z=Object.create(null);function ft(e){if(!z[e]){let n=W(e);if(!n)return;let o=ge(n),r={config:n,redundancy:o};z[e]=r}return z[e]}function ut(e,n,o){let r,t;if(typeof e=="string"){let s=q(e);if(!s)return o(void 0,424),ee;t=s.send;let i=ft(e);i&&(r=i.redundancy)}else{let s=G(e);if(s){r=ge(s);let i=e.resources?e.resources[0]:"",l=q(i);l&&(t=l.send)}}return!r||!t?(o(void 0,424),ee):r.query(n,t,o)().abort}function te(){}function pt(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,rt(e)}))}function dt(e){let n=[],o=[];return e.forEach(r=>{(r.match(ae)?n:o).push(r)}),{valid:n,invalid:o}}function E(e,n,o){function r(){let t=e.pendingIcons;n.forEach(s=>{t&&t.delete(s),e.icons[s]||e.missing.add(s)})}if(o&&typeof o=="object")try{if(!fe(e,o).length){r();return}}catch(t){console.error(t)}r(),pt(e)}function ne(e,n){e instanceof Promise?e.then(o=>{n(o)}).catch(()=>{n(null)}):n(e)}function ht(e,n){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(n).sort():e.iconsToLoad=n,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;let{provider:o,prefix:r}=e,t=e.iconsToLoad;if(delete e.iconsToLoad,!t||!t.length)return;let s=e.loadIcon;if(e.loadIcons&&(t.length>1||!s)){ne(e.loadIcons(t,r,o),f=>{E(e,t,f)});return}if(s){t.forEach(f=>{let p=s(f,r,o);ne(p,h=>{let g=h?{prefix:r,icons:{[f]:h}}:null;E(e,[f],g)})});return}let{valid:i,invalid:l}=dt(t);if(l.length&&E(e,l,null),!i.length)return;let c=r.match(ae)?q(o):null;if(!c){E(e,i,null);return}c.prepare(o,r,i).forEach(f=>{ut(o,f,p=>{E(e,f.icons,p)})})}))}var gt=(e,n)=>{let o=ct(e,!0,ue()),r=ot(o);if(!r.pending.length){let c=!0;return n&&setTimeout(()=>{c&&n(r.loaded,r.missing,r.pending,te)}),()=>{c=!1}}let t=Object.create(null),s=[],i,l;return r.pending.forEach(c=>{let{provider:a,prefix:f}=c;if(f===l&&a===i)return;i=a,l=f,s.push(C(a,f));let p=t[a]||(t[a]=Object.create(null));p[f]||(p[f]=[])}),r.pending.forEach(c=>{let{provider:a,prefix:f,name:p}=c,h=C(a,f),g=h.pendingIcons||(h.pendingIcons=new Set);g.has(p)||(g.add(p),t[a][f].push(p))}),s.forEach(c=>{let a=t[c.provider][c.prefix];a.length&&ht(c,a)}),n?it(n,r,s):te};function mt(e,n){let o={...e};for(let r in n){let t=n[r],s=typeof t;r in pe?(t===null||t&&(s==="string"||s==="number"))&&(o[r]=t):s===typeof o[r]&&(o[r]=r==="rotate"?t%4:t)}return o}var yt=/[\s,]+/;function bt(e,n){n.split(yt).forEach(o=>{switch(o.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function xt(e,n=0){let o=e.replace(/^-?[0-9.]*/,"");function r(t){for(;t<0;)t+=4;return t%4}if(o===""){let t=parseInt(e);return isNaN(t)?0:r(t)}else if(o!==e){let t=0;switch(o){case"%":t=25;break;case"deg":t=90}if(t){let s=parseFloat(e.slice(0,e.length-o.length));return isNaN(s)?0:(s=s/t,s%1===0?r(s):0)}}return n}function vt(e,n){let o=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(let r in n)o+=" "+r+'="'+n[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+e+"</svg>"}function It(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function wt(e){return"data:image/svg+xml,"+It(e)}function kt(e){return'url("'+wt(e)+'")'}var O;function St(){try{O=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{O=null}}function Pt(e){return O===void 0&&St(),O?O.createHTML(e):e}var me={...de,inline:!1},Ct={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},jt={display:"inline-block"},$={backgroundColor:"currentColor"},ye={backgroundColor:"transparent"},oe={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},re={WebkitMask:$,mask:$,background:ye};for(let e in re){let n=re[e];for(let o in oe)n[e+o]=oe[o]}var Tt={...me,inline:!0};function se(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}var Et=(e,n,o)=>{let r=n.inline?Tt:me,t=mt(r,n),s=n.mode||"svg",i={},l=n.style||{},c={...s==="svg"?Ct:{}};if(o){let u=R(o,!1,!0);if(u){let d=["iconify"],S=["provider","prefix"];for(let v of S)u[v]&&d.push("iconify--"+u[v]);c.className=d.join(" ")}}for(let u in n){let d=n[u];if(d!==void 0)switch(u){case"icon":case"style":case"children":case"onLoad":case"mode":case"ssr":break;case"_ref":c.ref=d;break;case"className":c[u]=(c[u]?c[u]+" ":"")+d;break;case"inline":case"hFlip":case"vFlip":t[u]=d===!0||d==="true"||d===1;break;case"flip":typeof d=="string"&&bt(t,d);break;case"color":i.color=d;break;case"rotate":typeof d=="string"?t[u]=xt(d):typeof d=="number"&&(t[u]=d);break;case"ariaHidden":case"aria-hidden":d!==!0&&d!=="true"&&delete c["aria-hidden"];break;default:r[u]===void 0&&(c[u]=d)}}let a=qe(e,t),f=a.attributes;if(t.inline&&(i.verticalAlign="-0.125em"),s==="svg"){c.style={...i,...l},Object.assign(c,f);let u=0,d=n.id;return typeof d=="string"&&(d=d.replace(/-/g,"_")),c.dangerouslySetInnerHTML={__html:Pt(Be(a.body,d?()=>d+"ID"+u++:"iconifyReact"))},(0,I.createElement)("svg",c)}let{body:p,width:h,height:g}=e,y=s==="mask"||(s==="bg"?!1:p.indexOf("currentColor")!==-1),b=vt(p,{...f,width:h+"",height:g+""});return c.style={...i,"--svg":kt(b),width:se(f.width),height:se(f.height),...jt,...y?$:ye,...l},(0,I.createElement)("span",c)};ue(!0);We("",nt);if(typeof document<"u"&&typeof window<"u"){let e=window;if(e.IconifyPreload!==void 0){let n=e.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof n=="object"&&n!==null&&(n instanceof Array?n:[n]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Re(r))&&console.error(o)}catch{console.error(o)}})}if(e.IconifyProviders!==void 0){let n=e.IconifyProviders;if(typeof n=="object"&&n!==null)for(let o in n){let r="IconifyProviders["+o+"] is invalid.";try{let t=n[o];if(typeof t!="object"||!t||t.resources===void 0)continue;Je(o,t)||console.error(r)}catch{console.error(r)}}}}function be(e){let[n,o]=(0,I.useState)(!!e.ssr),[r,t]=(0,I.useState)({});function s(g){if(g){let y=e.icon;if(typeof y=="object")return{name:"",data:y};let b=X(y);if(b)return{name:y,data:b}}return{name:""}}let[i,l]=(0,I.useState)(s(!!e.ssr));function c(){let g=r.callback;g&&(g(),t({}))}function a(g){if(JSON.stringify(i)!==JSON.stringify(g))return c(),l(g),!0}function f(){var g;let y=e.icon;if(typeof y=="object"){a({name:"",data:y});return}let b=X(y);if(a({name:y,data:b}))if(b===void 0){let u=gt([y],f);t({callback:u})}else b&&((g=e.onLoad)===null||g===void 0||g.call(e,y))}(0,I.useEffect)(()=>(o(!0),c),[]),(0,I.useEffect)(()=>{n&&f()},[e.icon,n]);let{name:p,data:h}=i;return h?Et({...V,...h},e,p):e.children?e.children:(0,I.createElement)("span",{})}var xe=(0,I.forwardRef)((e,n)=>be({...e,_ref:n})),Ft=(0,I.forwardRef)((e,n)=>be({inline:!0,...e,_ref:n}));var ve=require("@hooore/utils"),we=require("react/jsx-runtime");function Ie({children:e}){return(0,we.jsx)("span",{className:(0,ve.cn)("pc-w-fit pc-rounded-full pc-border-2 pc-border-[rgb(var(--foreground))] pc-px-4 pc-py-1 pc-text-chip","pc-bg-[linear-gradient(rgb(var(--foreground))_0_0)] pc-bg-[length:100%_var(--d,0)] pc-bg-bottom pc-bg-no-repeat pc-transition-[background-size] pc-duration-300 hover:pc-text-[rgb(var(--background))] hover:[--d:100%]"),children:e})}var x=require("react/jsx-runtime");function Ot(e){let{background:n,headline:o,sub_headline:r,description:t,tag:s,socials:i,meta:l,disableLink:c=!1}=e;return(0,x.jsxs)("header",{className:"ss:pc-pb-[calc(var(--navbar-height-desktop)*2)] pc-relative pc-flex pc-h-full pc-min-h-[600px] pc-px-10 pc-pb-[calc(var(--navbar-height-mobile)*1.5)] pc-pt-[calc(var(--navbar-height-mobile)*2)] pc-text-[rgb(var(--background))] sm:pc-min-h-[800px] sm:pc-pb-[calc(var(--navbar-height-desktop))] sm:pc-pt-[calc(var(--navbar-height-desktop)*2)]",children:[n&&(0,x.jsx)("div",{className:"pc-absolute pc-left-0 pc-top-0 pc-h-full pc-w-full pc-bg-[rgb(var(--foreground))]",children:(0,x.jsx)("img",{src:n,loading:"lazy",className:"pc-absolute pc-left-0 pc-top-0 pc-h-full pc-w-full pc-object-cover pc-object-[center_65%] pc-opacity-25"})}),(0,x.jsxs)("div",{className:"pc-z-10 pc-flex pc-w-full pc-flex-col pc-items-center pc-justify-center pc-gap-6 sm:pc-items-start",children:[s&&(0,x.jsx)("div",{className:"pc-flex pc-justify-center sm:pc-justify-start",children:(0,x.jsx)(Ie,{children:s})}),r&&(0,x.jsx)("span",{className:"pc-flex pc-justify-center pc-text-2xl sm:pc-justify-start",children:r}),o&&(0,x.jsx)("h1",{className:"pc-whitespace-pre-line pc-text-balance pc-text-center pc-text-h1 pc-leading-tight sm:pc-text-left sm:pc-text-h1-sm",children:o}),t&&(0,x.jsx)("p",{className:"pc-text-balance pc-text-center pc-text-h3 sm:pc-text-start sm:pc-text-h3-sm",children:t}),i&&(0,x.jsx)("div",{className:"pc-flex pc-flex-wrap pc-justify-center pc-gap-x-6 sm:pc-justify-start",children:i.map((a,f)=>(0,x.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:c?void 0:a?.link,children:a?.slug&&(0,x.jsx)(xe,{icon:a.slug,className:"pc-h-4 pc-w-4"})},f))}),l&&(0,x.jsx)("span",{className:"pc-block pc-text-center pc-text-p sm:pc-text-left sm:pc-text-p-sm",children:l})]})]})}0&&(module.exports={Hero1});
