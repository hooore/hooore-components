'use client'
"use strict";var m=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var q=Object.prototype.hasOwnProperty;var f=(a,e)=>{for(var r in e)m(a,r,{get:e[r],enumerable:!0})},v=(a,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of s(e))!q.call(a,t)&&t!==r&&m(a,t,{get:()=>e[t],enumerable:!(i=p(e,t))||i.enumerable});return a};var d=a=>v(m({},"__esModule",{value:!0}),a);var h={};f(h,{Marquee:()=>w});module.exports=d(h);var o=require("@hooore/utils"),u=require("react"),l=require("react/jsx-runtime");function w({children:a,className:e,width:r,disabled:i=!1}){let t=u.Children.count(a);return(0,l.jsx)("ul",{style:{"--marquee-duration":"10s","--marquee-item-quantity":t,"--marquee-item-width":r},className:(0,o.cn)("pc-relative pc-me-auto pc-ms-auto pc-h-full",i?"pc-flex pc-overflow-x-scroll":"pc-w-full pc-overflow-hidden",e),children:u.Children.map(a,(n,c)=>(0,l.jsx)("li",{style:{"--marquee-item-position":c+1,animationDuration:"var(--marquee-duration)",animationDelay:"calc(var(--marquee-duration) / var(--marquee-item-quantity) * (var(--marquee-item-quantity) - var(--marquee-item-position)) * -1)"},className:(0,o.cn)("pc-h-full",i?"pc-min-w-[var(--marquee-item-width)]":"pc-absolute pc-left-[max(calc(var(--marquee-item-width)*var(--marquee-item-quantity)),100%)] pc-w-[var(--marquee-item-width)] pc-animate-[scroll-left] pc-ease-linear pc-repeat-infinite"),children:n},c))})}0&&(module.exports={Marquee});
