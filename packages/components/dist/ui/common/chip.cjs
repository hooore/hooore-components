'use client'
"use strict";var e=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var i=Object.prototype.hasOwnProperty;var b=(r,p)=>{for(var c in p)e(r,c,{get:p[c],enumerable:!0})},h=(r,p,c,t)=>{if(p&&typeof p=="object"||typeof p=="function")for(let o of g(p))!i.call(r,o)&&o!==c&&e(r,o,{get:()=>p[o],enumerable:!(t=d(p,o))||t.enumerable});return r};var u=r=>h(e({},"__esModule",{value:!0}),r);var f={};b(f,{Chip:()=>s});module.exports=u(f);var n=require("@hooore/utils"),a=require("react/jsx-runtime");function s({children:r}){return(0,a.jsx)("span",{className:(0,n.cn)("pc-w-fit pc-rounded-full pc-border-2 pc-border-[rgb(var(--foreground))] pc-px-4 pc-py-1 pc-text-chip","pc-bg-[linear-gradient(rgb(var(--foreground))_0_0)] pc-bg-[length:100%_var(--d,0)] pc-bg-bottom pc-bg-no-repeat pc-transition-[background-size] pc-duration-300 hover:pc-text-[rgb(var(--background))] hover:[--d:100%]"),children:r})}0&&(module.exports={Chip});
