'use client'
"use strict";var r=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var a=Object.getOwnPropertyNames;var n=Object.prototype.hasOwnProperty;var m=(p,e)=>{for(var t in e)r(p,t,{get:e[t],enumerable:!0})},d=(p,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of a(e))!n.call(p,c)&&c!==t&&r(p,c,{get:()=>e[c],enumerable:!(s=i(e,c))||s.enumerable});return p};var g=p=>d(r({},"__esModule",{value:!0}),p);var x={};m(x,{LogoList3:()=>l});module.exports=g(x);var o=require("react/jsx-runtime");function l(p){let{description:e,images:t}=p;return(0,o.jsxs)("section",{className:"pc-mx-auto pc-max-w-7xl pc-px-4 pc-py-24",children:[e&&(0,o.jsx)("h1",{className:"pc-mb-12 pc-text-center pc-text-sm pc-font-bold pc-uppercase pc-tracking-wide pc-text-gray-800",children:e}),t&&(0,o.jsx)("div",{className:"pc-grid pc-grid-cols-2 pc-gap-10 pc-text-center lg:pc-grid-cols-8",children:t.map((s,c)=>(0,o.jsx)("div",{className:"pc-flex pc-items-center pc-justify-center",children:(0,o.jsx)("img",{src:s?.image,className:"pc-block pc-h-12 pc-object-contain"})},c))})]})}0&&(module.exports={LogoList3});
