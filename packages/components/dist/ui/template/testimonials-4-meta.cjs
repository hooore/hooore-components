'use client'
"use strict";var r=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var n=Object.prototype.hasOwnProperty;var d=(t,p)=>{for(var o in p)r(t,o,{get:p[o],enumerable:!0})},g=(t,p,o,s)=>{if(p&&typeof p=="object"||typeof p=="function")for(let c of l(p))!n.call(t,c)&&c!==o&&r(t,c,{get:()=>p[c],enumerable:!(s=m(p,c))||s.enumerable});return t};var x=t=>g(r({},"__esModule",{value:!0}),t);var u={};d(u,{TESTIMONIALS_4_META:()=>y});module.exports=x(u);var e=require("react/jsx-runtime");function a(t){let{headline:p,testimonials:o}=t;return(0,e.jsx)("section",{className:"pc-bg-white",children:(0,e.jsxs)("div",{className:"pc-mx-auto pc-max-w-screen-xl pc-px-4 pc-py-12 sm:pc-px-6 lg:pc-px-8 lg:pc-py-16",children:[(0,e.jsx)("h2",{className:"pc-text-center pc-text-4xl pc-font-bold pc-tracking-tight pc-text-gray-900 sm:pc-text-5xl",children:p}),(0,e.jsx)("div",{className:"pc-mt-8 pc-grid pc-grid-cols-1 pc-gap-4 md:pc-grid-cols-3 md:pc-gap-8",children:o?.map((s,c)=>(0,e.jsxs)("blockquote",{className:"pc-rounded-lg pc-bg-gray-50 pc-p-6 pc-shadow-sm sm:pc-p-8",children:[(0,e.jsxs)("div",{className:"pc-flex pc-items-center pc-gap-4",children:[s?.image&&(0,e.jsx)("img",{src:s.image,className:"pc-size-14 pc-rounded-full pc-object-cover"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"pc-flex pc-justify-center pc-gap-0.5 pc-text-green-500",children:[...Array(5)].map((v,i)=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"pc-h-5 pc-w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,e.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},i))}),s?.name&&(0,e.jsx)("p",{className:"pc-mt-0.5 pc-text-lg pc-font-medium pc-text-gray-900",children:s.name})]})]}),s?.description&&(0,e.jsx)("p",{className:"pc-mt-4 pc-text-gray-700",children:s.description})]},c))})]})})}var y={slug:"testimonials-4",component:a};0&&(module.exports={TESTIMONIALS_4_META});
