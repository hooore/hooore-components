'use client'
"use strict";var n=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var x=(c,p)=>{for(var r in p)n(c,r,{get:p[r],enumerable:!0})},b=(c,p,r,a)=>{if(p&&typeof p=="object"||typeof p=="function")for(let t of g(p))!y.call(c,t)&&t!==r&&n(c,t,{get:()=>p[t],enumerable:!(a=d(p,t))||a.enumerable});return c};var u=c=>b(n({},"__esModule",{value:!0}),c);var v={};x(v,{GALLERY_3_META:()=>f});module.exports=u(v);var e=require("react/jsx-runtime");function s(c){let{headline:p,description:r,cta_button_label:a,cta_link:t,images:i,disableLink:o}=c;return(0,e.jsx)("section",{className:"pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12",children:(0,e.jsxs)("div",{className:"pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8",children:[(0,e.jsx)("h2",{className:"pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-8 lg:pc-text-3xl xl:pc-mb-12",children:p}),(0,e.jsx)("div",{className:"pc-mb-4 pc-grid pc-grid-cols-2 pc-gap-4 sm:pc-grid-cols-3 md:pc-mb-8 md:pc-grid-cols-4 md:pc-gap-6 xl:pc-gap-8",children:i?.map((l,m)=>(0,e.jsxs)("a",{href:o?void 0:l?.link,className:"pc-group pc-relative pc-flex pc-h-48 pc-items-end pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-shadow-lg md:pc-h-80",children:[(0,e.jsx)("img",{src:l?.image,loading:"lazy",className:"pc-absolute pc-inset-0 pc-h-full pc-w-full pc-object-cover pc-object-center pc-transition pc-duration-200 group-hover:pc-scale-110"}),(0,e.jsx)("div",{className:"pc-pointer-events-none pc-absolute pc-inset-0 pc-bg-gradient-to-t pc-from-gray-800 pc-via-transparent pc-to-transparent pc-opacity-50"}),(0,e.jsx)("span",{className:"pc-relative pc-mb-3 pc-ml-4 pc-inline-block pc-text-sm pc-text-white md:pc-ml-5 md:pc-text-lg",children:l?.tag})]},m))}),(0,e.jsxs)("div",{className:"pc-flex pc-items-start pc-justify-between pc-gap-8 sm:pc-items-center",children:[(0,e.jsx)("p",{className:"pc-max-w-screen-sm pc-text-sm pc-text-gray-500 lg:pc-text-base",children:r}),a&&(0,e.jsx)("a",{href:o?void 0:t,className:"pc-inline-block pc-rounded-lg pc-border pc-bg-white pc-px-4 pc-py-2 pc-text-center pc-text-sm pc-font-semibold pc-text-gray-500 pc-outline-none pc-ring-indigo-300 pc-transition pc-duration-100 hover:pc-bg-gray-100 focus-visible:pc-ring active:pc-bg-gray-200 md:pc-px-8 md:pc-py-3 md:pc-text-base",children:a})]})]})})}var f={slug:"gallery-3",component:s};0&&(module.exports={GALLERY_3_META});
