'use client'
"use strict";var o=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var a=Object.prototype.hasOwnProperty;var i=(t,e)=>{for(var c in e)o(t,c,{get:e[c],enumerable:!0})},d=(t,e,c,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of m(e))!a.call(t,r)&&r!==c&&o(t,r,{get:()=>e[r],enumerable:!(s=l(e,r))||s.enumerable});return t};var x=t=>d(o({},"__esModule",{value:!0}),t);var b={};i(b,{CONTENT_2_META:()=>f});module.exports=x(b);var p=require("react/jsx-runtime");function n(t){let{headline:e,contents:c}=t;return(0,p.jsxs)("section",{className:"pc-flex pc-h-full pc-w-full pc-flex-col pc-items-center pc-px-4 pc-py-10 sm:pc-flex-row sm:pc-items-start sm:pc-px-20 sm:pc-py-20",children:[e&&(0,p.jsx)("div",{className:"pc-flex pc-w-full pc-flex-col pc-gap-6 sm:pc-mr-12 sm:pc-w-fit",children:(0,p.jsx)("h2",{className:"pc-mb-6 pc-whitespace-pre-line pc-text-balance pc-text-center pc-text-h2 sm:pc-mb-0 sm:pc-text-left sm:pc-text-h2-sm",children:e})}),c&&(0,p.jsx)("div",{className:"pc-flex pc-h-full pc-flex-col pc-items-center pc-gap-10 sm:pc-items-start sm:pc-pt-40",children:(0,p.jsx)("div",{className:"pc-flex pc-flex-col pc-overflow-hidden pc-rounded-lg pc-border sm:pc-flex-row",children:c.map((s,r)=>(0,p.jsxs)("div",{className:"pc-flex pc-w-full pc-flex-1 pc-flex-col pc-gap-6 pc-border-b pc-p-6 last:pc-border-b-0 sm:pc-aspect-square sm:pc-gap-10 sm:pc-border-b-0 sm:pc-border-r sm:last:pc-border-b-0 sm:last:pc-border-r-0",children:[s?.headline&&(0,p.jsx)("h3",{className:"pc-text-balance pc-text-center pc-text-h2 sm:pc-text-start sm:pc-text-h2-sm",children:s.headline}),s?.description&&(0,p.jsx)("p",{className:"pc-text-balance pc-text-center pc-text-p sm:pc-text-start sm:pc-text-p-sm",children:s.description})]},r))})})]})}var f={slug:"content-2",component:n};0&&(module.exports={CONTENT_2_META});
