'use client'
"use strict";var d=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var o=Object.getOwnPropertyNames;var r=Object.prototype.hasOwnProperty;var i=(t,e)=>{for(var s in e)d(t,s,{get:e[s],enumerable:!0})},n=(t,e,s,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of o(e))!r.call(t,c)&&c!==s&&d(t,c,{get:()=>e[c],enumerable:!(a=l(e,c))||a.enumerable});return t};var x=t=>n(d({},"__esModule",{value:!0}),t);var y={};i(y,{Stats1:()=>g});module.exports=x(y);var p=require("react/jsx-runtime");function g(t){let{headline:e,description:s,stats:a=[]}=t;return(0,p.jsx)("section",{className:"pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12",children:(0,p.jsxs)("div",{className:"pc-mx-auto pc-max-w-screen-xl pc-px-4 md:pc-px-8",children:[(0,p.jsxs)("div",{className:"pc-mb-8 md:pc-mb-12",children:[(0,p.jsx)("h2",{className:"pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-6 lg:pc-text-3xl",children:e}),(0,p.jsx)("p",{className:"pc-mx-auto pc-max-w-screen-md pc-text-center pc-text-gray-500 md:pc-text-lg",children:s})]}),(0,p.jsx)("div",{className:"pc-grid pc-grid-cols-2 pc-gap-4 md:pc-grid-cols-4 lg:pc-gap-8",children:a.map((c,m)=>(0,p.jsxs)("div",{className:"pc-flex pc-flex-col pc-items-center pc-justify-center pc-rounded-lg pc-bg-gray-100 pc-p-4 lg:pc-p-8",children:[(0,p.jsx)("div",{className:"pc-text-xl pc-font-bold pc-text-indigo-500 sm:pc-text-2xl md:pc-text-3xl",children:c?.value}),(0,p.jsx)("div",{className:"pc-text-sm pc-font-semibold sm:pc-text-base",children:c?.label})]},m))})]})})}0&&(module.exports={Stats1});
