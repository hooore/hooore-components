'use strict';var react=require('react'),jsxRuntime=require('react/jsx-runtime');var le=Object.freeze({left:0,top:0,width:16,height:16}),A=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),V=Object.freeze({...le,...A}),U=Object.freeze({...V,body:"",hidden:!1});function ke(e,n){let o={};!e.hFlip!=!n.hFlip&&(o.hFlip=!0),!e.vFlip!=!n.vFlip&&(o.vFlip=!0);let r=((e.rotate||0)+(n.rotate||0))%4;return r&&(o.rotate=r),o}function K(e,n){let o=ke(e,n);for(let r in U)r in A?r in e&&!(r in o)&&(o[r]=A[r]):r in n?o[r]=n[r]:r in e&&(o[r]=e[r]);return o}function Se(e,n){let o=e.icons,r=e.aliases||Object.create(null),t=Object.create(null);function i(s){if(o[s])return t[s]=[];if(!(s in t)){t[s]=null;let c=r[s]&&r[s].parent,l=c&&i(c);l&&(t[s]=[c].concat(l));}return t[s]}return Object.keys(o).concat(Object.keys(r)).forEach(i),t}function Pe(e,n,o){let r=e.icons,t=e.aliases||Object.create(null),i={};function s(c){i=K(r[c]||t[c],i);}return s(n),o.forEach(s),K(e,i)}function fe(e,n){let o=[];if(typeof e!="object"||typeof e.icons!="object")return o;e.not_found instanceof Array&&e.not_found.forEach(t=>{n(t,null),o.push(t);});let r=Se(e);for(let t in r){let i=r[t];i&&(n(t,Pe(e,t,i)),o.push(t));}return o}var Te={provider:"",aliases:{},not_found:{},...le};function _(e,n){for(let o in n)if(o in e&&typeof e[o]!=typeof n[o])return !1;return !0}function ae(e){if(typeof e!="object"||e===null)return null;let n=e;if(typeof n.prefix!="string"||!e.icons||typeof e.icons!="object"||!_(e,Te))return null;let o=n.icons;for(let t in o){let i=o[t];if(!t||typeof i.body!="string"||!_(i,U))return null}let r=n.aliases||Object.create(null);for(let t in r){let i=r[t],s=i.parent;if(!t||typeof s!="string"||!o[s]&&!r[s]||!_(i,U))return null}return n}var ue=/^[a-z0-9]+(-[a-z0-9]+)*$/,M=(e,n,o,r="")=>{let t=e.split(":");if(e.slice(0,1)==="@"){if(t.length<2||t.length>3)return null;r=t.shift().slice(1);}if(t.length>3||!t.length)return null;if(t.length>1){let c=t.pop(),l=t.pop(),f={provider:t.length>0?t[0]:r,prefix:l,name:c};return n&&!L(f)?null:f}let i=t[0],s=i.split("-");if(s.length>1){let c={provider:r,prefix:s.shift(),name:s.join("-")};return n&&!L(c)?null:c}if(o&&r===""){let c={provider:r,prefix:"",name:i};return n&&!L(c,o)?null:c}return null},L=(e,n)=>e?!!((n&&e.prefix===""||e.prefix)&&e.name):!1,X=Object.create(null);function Ce(e,n){return {provider:e,prefix:n,icons:Object.create(null),missing:new Set}}function P(e,n){let o=X[e]||(X[e]=Object.create(null));return o[n]||(o[n]=Ce(e,n))}function de(e,n){return ae(n)?fe(n,(o,r)=>{r?e.icons[o]=r:e.missing.add(o);}):[]}function je(e,n,o){try{if(typeof o.body=="string")return e.icons[n]={...o},!0}catch{}return !1}var F=!1;function pe(e){return typeof e=="boolean"&&(F=e),F}function Y(e){let n=typeof e=="string"?M(e,!0,F):e;if(n){let o=P(n.provider,n.prefix),r=n.name;return o.icons[r]||(o.missing.has(r)?null:void 0)}}function Ee(e,n){let o=M(e,!0,F);if(!o)return !1;let r=P(o.provider,o.prefix);return n?je(r,o.name,n):(r.missing.add(o.name),!0)}function Fe(e,n){if(typeof e!="object")return !1;if(typeof n!="string"&&(n=e.provider||""),F&&!n&&!e.prefix){let t=!1;return ae(e)&&(e.prefix="",fe(e,(i,s)=>{Ee(i,s)&&(t=!0);})),t}let o=e.prefix;if(!L({provider:n,prefix:o,name:"a"}))return !1;let r=P(n,o);return !!de(r,e)}var he=Object.freeze({width:null,height:null}),ge=Object.freeze({...he,...A}),Oe=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Le=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Z(e,n,o){if(n===1)return e;if(o=o||100,typeof e=="number")return Math.ceil(e*n*o)/o;if(typeof e!="string")return e;let r=e.split(Oe);if(r===null||!r.length)return e;let t=[],i=r.shift(),s=Le.test(i);for(;;){if(s){let c=parseFloat(i);isNaN(c)?t.push(i):t.push(Math.ceil(c*n*o)/o);}else t.push(i);if(i=r.shift(),i===void 0)return t.join("");s=!s;}}function Ne(e,n="defs"){let o="",r=e.indexOf("<"+n);for(;r>=0;){let t=e.indexOf(">",r),i=e.indexOf("</"+n);if(t===-1||i===-1)break;let s=e.indexOf(">",i);if(s===-1)break;o+=e.slice(t+1,i).trim(),e=e.slice(0,r).trim()+e.slice(s+1);}return {defs:o,content:e}}function Ae(e,n){return e?"<defs>"+e+"</defs>"+n:n}function Me(e,n,o){let r=Ne(e);return Ae(r.defs,n+r.content+o)}var Re=e=>e==="unset"||e==="undefined"||e==="none";function De(e,n){let o={...V,...e},r={...ge,...n},t={left:o.left,top:o.top,width:o.width,height:o.height},i=o.body;[o,r].forEach(x=>{let u=[],p=x.hFlip,k=x.vFlip,b=x.rotate;p?k?b+=2:(u.push("translate("+(t.width+t.left).toString()+" "+(0-t.top).toString()+")"),u.push("scale(-1 1)"),t.top=t.left=0):k&&(u.push("translate("+(0-t.left).toString()+" "+(t.height+t.top).toString()+")"),u.push("scale(1 -1)"),t.top=t.left=0);let I;switch(b<0&&(b-=Math.floor(b/4)*4),b=b%4,b){case 1:I=t.height/2+t.top,u.unshift("rotate(90 "+I.toString()+" "+I.toString()+")");break;case 2:u.unshift("rotate(180 "+(t.width/2+t.left).toString()+" "+(t.height/2+t.top).toString()+")");break;case 3:I=t.width/2+t.left,u.unshift("rotate(-90 "+I.toString()+" "+I.toString()+")");break}b%2===1&&(t.left!==t.top&&(I=t.left,t.left=t.top,t.top=I),t.width!==t.height&&(I=t.width,t.width=t.height,t.height=I)),u.length&&(i=Me(i,'<g transform="'+u.join(" ")+'">',"</g>"));});let s=r.width,c=r.height,l=t.width,f=t.height,a,d;s===null?(d=c===null?"1em":c==="auto"?f:c,a=Z(d,l/f)):(a=s==="auto"?l:s,d=c===null?Z(a,f/l):c==="auto"?f:c);let h={},g=(x,u)=>{Re(u)||(h[x]=u.toString());};g("width",a),g("height",d);let y=[t.left,t.top,l,f];return h.viewBox=y.join(" "),{attributes:h,viewBox:y,body:i}}var _e=/\sid="(\S+)"/g,He="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16),Qe=0;function Ue(e,n=He){let o=[],r;for(;r=_e.exec(e);)o.push(r[1]);if(!o.length)return e;let t="suffix"+(Math.random()*16777216|Date.now()).toString(16);return o.forEach(i=>{let s=typeof n=="function"?n(i):n+(Qe++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+t+"$3");}),e=e.replace(new RegExp(t,"g"),""),e}var q=Object.create(null);function qe(e,n){q[e]=n;}function z(e){return q[e]||q[""]}function G(e){let n;if(typeof e.resources=="string")n=[e.resources];else if(n=e.resources,!(n instanceof Array)||!n.length)return null;return {resources:n,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}var B=Object.create(null),C=["https://api.simplesvg.com","https://api.unisvg.com"],N=[];for(;C.length>0;)C.length===1||Math.random()>.5?N.push(C.shift()):N.push(C.pop());B[""]=G({resources:["https://api.iconify.design"].concat(N)});function ze(e,n){let o=G(n);return o===null?!1:(B[e]=o,!0)}function W(e){return B[e]}var $e=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}},ee=$e();function Ve(e,n){let o=W(e);if(!o)return 0;let r;if(!o.maxURL)r=0;else {let t=0;o.resources.forEach(s=>{t=Math.max(t,s.length);});let i=n+".json?icons=";r=o.maxURL-t-o.path.length-i.length;}return r}function Ge(e){return e===404}var Be=(e,n,o)=>{let r=[],t=Ve(e,n),i="icons",s={type:i,provider:e,prefix:n,icons:[]},c=0;return o.forEach((l,f)=>{c+=l.length+1,c>=t&&f>0&&(r.push(s),s={type:i,provider:e,prefix:n,icons:[]},c=l.length),s.icons.push(l);}),r.push(s),r};function We(e){if(typeof e=="string"){let n=W(e);if(n)return n.path}return "/"}var Je=(e,n,o)=>{if(!ee){o("abort",424);return}let r=We(n.provider);switch(n.type){case"icons":{let i=n.prefix,c=n.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{let i=n.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:o("abort",400);return}let t=503;ee(e+r).then(i=>{let s=i.status;if(s!==200){setTimeout(()=>{o(Ge(s)?"abort":"next",s);});return}return t=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?o("abort",i):o("next",t);});return}setTimeout(()=>{o("success",i);});}).catch(()=>{o("next",t);});},Ke={prepare:Be,send:Je};function Xe(e){let n={loaded:[],missing:[],pending:[]},o=Object.create(null);e.sort((t,i)=>t.provider!==i.provider?t.provider.localeCompare(i.provider):t.prefix!==i.prefix?t.prefix.localeCompare(i.prefix):t.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(t=>{if(r.name===t.name&&r.prefix===t.prefix&&r.provider===t.provider)return;r=t;let i=t.provider,s=t.prefix,c=t.name,l=o[i]||(o[i]=Object.create(null)),f=l[s]||(l[s]=P(i,s)),a;c in f.icons?a=n.loaded:s===""||f.missing.has(c)?a=n.missing:a=n.pending;let d={provider:i,prefix:s,name:c};a.push(d);}),n}function me(e,n){e.forEach(o=>{let r=o.loaderCallbacks;r&&(o.loaderCallbacks=r.filter(t=>t.id!==n));});}function Ye(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;let n=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!n.length)return;let o=!1,r=e.provider,t=e.prefix;n.forEach(i=>{let s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==t)return !0;let f=l.name;if(e.icons[f])s.loaded.push({provider:r,prefix:t,name:f});else if(e.missing.has(f))s.missing.push({provider:r,prefix:t,name:f});else return o=!0,!0;return !1}),s.pending.length!==c&&(o||me([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort));});}));}var Ze=0;function et(e,n,o){let r=Ze++,t=me.bind(null,o,r);if(!n.pending.length)return t;let i={id:r,icons:n,callback:e,abort:t};return o.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i);}),t}function tt(e,n=!0,o=!1){let r=[];return e.forEach(t=>{let i=typeof t=="string"?M(t,n,o):t;i&&r.push(i);}),r}var nt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ot(e,n,o,r){let t=e.resources.length,i=e.random?Math.floor(Math.random()*t):e.index,s;if(e.random){let m=e.resources.slice(0);for(s=[];m.length>1;){let w=Math.floor(Math.random()*m.length);s.push(m[w]),m=m.slice(0,w).concat(m.slice(w+1));}s=s.concat(m);}else s=e.resources.slice(i).concat(e.resources.slice(0,i));let c=Date.now(),l="pending",f=0,a,d=null,h=[],g=[];typeof r=="function"&&g.push(r);function y(){d&&(clearTimeout(d),d=null);}function x(){l==="pending"&&(l="aborted"),y(),h.forEach(m=>{m.status==="pending"&&(m.status="aborted");}),h=[];}function u(m,w){w&&(g=[]),typeof m=="function"&&g.push(m);}function p(){return {startTime:c,payload:n,status:l,queriesSent:f,queriesPending:h.length,subscribe:u,abort:x}}function k(){l="failed",g.forEach(m=>{m(void 0,a);});}function b(){h.forEach(m=>{m.status==="pending"&&(m.status="aborted");}),h=[];}function I(m,w,T){let O=w!=="success";switch(h=h.filter(S=>S!==m),l){case"pending":break;case"failed":if(O||!e.dataAfterTimeout)return;break;default:return}if(w==="abort"){a=T,k();return}if(O){a=T,h.length||(s.length?R():k());return}if(y(),b(),!e.random){let S=e.resources.indexOf(m.resource);S!==-1&&S!==e.index&&(e.index=S);}l="completed",g.forEach(S=>{S(T);});}function R(){if(l!=="pending")return;y();let m=s.shift();if(m===void 0){if(h.length){d=setTimeout(()=>{y(),l==="pending"&&(b(),k());},e.timeout);return}k();return}let w={status:"pending",resource:m,callback:(T,O)=>{I(w,T,O);}};h.push(w),f++,d=setTimeout(R,e.rotate),o(m,n,w.callback);}return setTimeout(R),p}function ye(e){let n={...nt,...e},o=[];function r(){o=o.filter(c=>c().status==="pending");}function t(c,l,f){let a=ot(n,c,l,(d,h)=>{r(),f&&f(d,h);});return o.push(a),a}function i(c){return o.find(l=>c(l))||null}return {query:t,find:i,setIndex:c=>{n.index=c;},getIndex:()=>n.index,cleanup:r}}function te(){}var H=Object.create(null);function rt(e){if(!H[e]){let n=W(e);if(!n)return;let o=ye(n),r={config:n,redundancy:o};H[e]=r;}return H[e]}function it(e,n,o){let r,t;if(typeof e=="string"){let i=z(e);if(!i)return o(void 0,424),te;t=i.send;let s=rt(e);s&&(r=s.redundancy);}else {let i=G(e);if(i){r=ye(i);let s=e.resources?e.resources[0]:"",c=z(s);c&&(t=c.send);}}return !r||!t?(o(void 0,424),te):r.query(n,t,o)().abort}function ne(){}function st(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Ye(e);}));}function ct(e){let n=[],o=[];return e.forEach(r=>{(r.match(ue)?n:o).push(r);}),{valid:n,invalid:o}}function j(e,n,o){function r(){let t=e.pendingIcons;n.forEach(i=>{t&&t.delete(i),e.icons[i]||e.missing.add(i);});}if(o&&typeof o=="object")try{if(!de(e,o).length){r();return}}catch(t){console.error(t);}r(),st(e);}function oe(e,n){e instanceof Promise?e.then(o=>{n(o);}).catch(()=>{n(null);}):n(e);}function lt(e,n){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(n).sort():e.iconsToLoad=n,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;let{provider:o,prefix:r}=e,t=e.iconsToLoad;if(delete e.iconsToLoad,!t||!t.length)return;let i=e.loadIcon;if(e.loadIcons&&(t.length>1||!i)){oe(e.loadIcons(t,r,o),a=>{j(e,t,a);});return}if(i){t.forEach(a=>{let d=i(a,r,o);oe(d,h=>{let g=h?{prefix:r,icons:{[a]:h}}:null;j(e,[a],g);});});return}let{valid:s,invalid:c}=ct(t);if(c.length&&j(e,c,null),!s.length)return;let l=r.match(ue)?z(o):null;if(!l){j(e,s,null);return}l.prepare(o,r,s).forEach(a=>{it(o,a,d=>{j(e,a.icons,d);});});}));}var ft=(e,n)=>{let o=tt(e,!0,pe()),r=Xe(o);if(!r.pending.length){let l=!0;return setTimeout(()=>{l&&n(r.loaded,r.missing,r.pending,ne);}),()=>{l=!1;}}let t=Object.create(null),i=[],s,c;return r.pending.forEach(l=>{let{provider:f,prefix:a}=l;if(a===c&&f===s)return;s=f,c=a,i.push(P(f,a));let d=t[f]||(t[f]=Object.create(null));d[a]||(d[a]=[]);}),r.pending.forEach(l=>{let{provider:f,prefix:a,name:d}=l,h=P(f,a),g=h.pendingIcons||(h.pendingIcons=new Set);g.has(d)||(g.add(d),t[f][a].push(d));}),i.forEach(l=>{let f=t[l.provider][l.prefix];f.length&&lt(l,f);}),et(n,r,i)};function at(e,n){let o={...e};for(let r in n){let t=n[r],i=typeof t;r in he?(t===null||t&&(i==="string"||i==="number"))&&(o[r]=t):i===typeof o[r]&&(o[r]=r==="rotate"?t%4:t);}return o}var ut=/[\s,]+/;function dt(e,n){n.split(ut).forEach(o=>{switch(o.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}});}function pt(e,n=0){let o=e.replace(/^-?[0-9.]*/,"");function r(t){for(;t<0;)t+=4;return t%4}if(o===""){let t=parseInt(e);return isNaN(t)?0:r(t)}else if(o!==e){let t=0;switch(o){case"%":t=25;break;case"deg":t=90;}if(t){let i=parseFloat(e.slice(0,e.length-o.length));return isNaN(i)?0:(i=i/t,i%1===0?r(i):0)}}return n}function ht(e,n){let o=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(let r in n)o+=" "+r+'="'+n[r]+'"';return '<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+e+"</svg>"}function gt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function mt(e){return "data:image/svg+xml,"+gt(e)}function yt(e){return 'url("'+mt(e)+'")'}var E;function xt(){try{E=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e});}catch{E=null;}}function bt(e){return E===void 0&&xt(),E?E.createHTML(e):e}var xe={...ge,inline:!1},It={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},wt={display:"inline-block"},$={backgroundColor:"currentColor"},be={backgroundColor:"transparent"},re={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ie={WebkitMask:$,mask:$,background:be};for(let e in ie){let n=ie[e];for(let o in re)n[e+o]=re[o];}var vt={...xe,inline:!0};function se(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}var kt=(e,n,o)=>{let r=n.inline?vt:xe,t=at(r,n),i=n.mode||"svg",s={},c=n.style||{},l={...i==="svg"?It:{}};if(o){let u=M(o,!1,!0);if(u){let p=["iconify"],k=["provider","prefix"];for(let b of k)u[b]&&p.push("iconify--"+u[b]);l.className=p.join(" ");}}for(let u in n){let p=n[u];if(p!==void 0)switch(u){case"icon":case"style":case"children":case"onLoad":case"mode":case"ssr":break;case"_ref":l.ref=p;break;case"className":l[u]=(l[u]?l[u]+" ":"")+p;break;case"inline":case"hFlip":case"vFlip":t[u]=p===!0||p==="true"||p===1;break;case"flip":typeof p=="string"&&dt(t,p);break;case"color":s.color=p;break;case"rotate":typeof p=="string"?t[u]=pt(p):typeof p=="number"&&(t[u]=p);break;case"ariaHidden":case"aria-hidden":p!==!0&&p!=="true"&&delete l["aria-hidden"];break;default:r[u]===void 0&&(l[u]=p);}}let f=De(e,t),a=f.attributes;if(t.inline&&(s.verticalAlign="-0.125em"),i==="svg"){l.style={...s,...c},Object.assign(l,a);let u=0,p=n.id;return typeof p=="string"&&(p=p.replace(/-/g,"_")),l.dangerouslySetInnerHTML={__html:bt(Ue(f.body,p?()=>p+"ID"+u++:"iconifyReact"))},react.createElement("svg",l)}let{body:d,width:h,height:g}=e,y=i==="mask"||(i==="bg"?!1:d.indexOf("currentColor")!==-1),x=ht(d,{...a,width:h+"",height:g+""});return l.style={...s,"--svg":yt(x),width:se(a.width),height:se(a.height),...wt,...y?$:be,...c},react.createElement("span",l)};pe(!0);qe("",Ke);if(typeof document<"u"&&typeof window<"u"){let e=window;if(e.IconifyPreload!==void 0){let n=e.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof n=="object"&&n!==null&&(n instanceof Array?n:[n]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Fe(r))&&console.error(o);}catch{console.error(o);}});}if(e.IconifyProviders!==void 0){let n=e.IconifyProviders;if(typeof n=="object"&&n!==null)for(let o in n){let r="IconifyProviders["+o+"] is invalid.";try{let t=n[o];if(typeof t!="object"||!t||t.resources===void 0)continue;ze(o,t)||console.error(r);}catch{console.error(r);}}}}function Ie(e){let[n,o]=react.useState(!!e.ssr),[r,t]=react.useState({});function i(g){if(g){let y=e.icon;if(typeof y=="object")return {name:"",data:y};let x=Y(y);if(x)return {name:y,data:x}}return {name:""}}let[s,c]=react.useState(i(!!e.ssr));function l(){let g=r.callback;g&&(g(),t({}));}function f(g){if(JSON.stringify(s)!==JSON.stringify(g))return l(),c(g),!0}function a(){var g;let y=e.icon;if(typeof y=="object"){f({name:"",data:y});return}let x=Y(y);if(f({name:y,data:x}))if(x===void 0){let u=ft([y],a);t({callback:u});}else x&&((g=e.onLoad)===null||g===void 0||g.call(e,y));}react.useEffect(()=>(o(!0),l),[]),react.useEffect(()=>{n&&a();},[e.icon,n]);let{name:d,data:h}=s;return h?kt({...V,...h},e,d):e.children?e.children:react.createElement("span",{})}var we=react.forwardRef((e,n)=>Ie({...e,_ref:n}));react.forwardRef((e,n)=>Ie({inline:!0,...e,_ref:n}));function jt(e){let{image:n,description:o,links:r,socials:t,disableLink:i}=e;return jsxRuntime.jsx("footer",{className:"pc-bg-gray-100",children:jsxRuntime.jsxs("div",{className:"pc-mx-auto pc-max-w-5xl pc-px-4 pc-py-16 sm:pc-px-6 lg:pc-px-8",children:[jsxRuntime.jsx("div",{className:"pc-flex pc-justify-center",children:jsxRuntime.jsx("img",{src:n,className:"pc-max-h-36 pc-max-h-full pc-w-full pc-max-w-36"})}),jsxRuntime.jsx("p",{className:"pc-mx-auto pc-mt-6 pc-max-w-md pc-text-center pc-leading-relaxed pc-text-gray-500",children:o}),jsxRuntime.jsx("ul",{className:"pc-mt-12 pc-flex pc-flex-wrap pc-justify-center pc-gap-6 md:pc-gap-8 lg:pc-gap-12",children:r?.map((s,c)=>jsxRuntime.jsx("li",{children:jsxRuntime.jsx("a",{href:i?void 0:s?.link,className:"pc-text-gray-700 pc-transition hover:pc-text-gray-700/75",children:s?.label})},c))}),jsxRuntime.jsx("ul",{className:"pc-mt-12 pc-flex pc-justify-center pc-gap-6 md:pc-gap-8",children:t?.map((s,c)=>jsxRuntime.jsx("li",{children:jsxRuntime.jsxs("a",{href:i?void 0:s?.link,rel:"noreferrer",target:"_blank",className:"pc-text-gray-700 pc-transition hover:pc-text-gray-700/75",children:[jsxRuntime.jsx("span",{className:"pc-sr-only",children:s?.slug}),s?.slug&&jsxRuntime.jsx(we,{icon:s.slug})]})},c))})]})})}
exports.Footer4=jt;