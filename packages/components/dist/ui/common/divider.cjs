'use client'
"use strict";var i=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var t=(e,r)=>{for(var o in r)i(e,o,{get:r[o],enumerable:!0})},b=(e,r,o,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let p of c(r))!l.call(e,p)&&p!==o&&i(e,p,{get:()=>r[p],enumerable:!(n=g(r,p))||n.enumerable});return e};var f=e=>b(i({},"__esModule",{value:!0}),e);var u={};t(u,{Divider:()=>d});module.exports=f(u);var s=require("@hooore/utils"),a=require("react/jsx-runtime");function d({height:e=2,subtle:r=!1,className:o}){return(0,a.jsx)("span",{style:{height:r?"1px":`${e}px`},className:(0,s.cn)("pc-block pc-w-full",r?"pc-bg-[rgb(var(--foreground))]/50":"pc-bg-[rgb(var(--foreground))]",o)})}0&&(module.exports={Divider});
