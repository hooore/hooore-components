'use client'
"use strict";var s=Object.defineProperty;var r=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var m=(e,p)=>{for(var a in p)s(e,a,{get:p[a],enumerable:!0})},x=(e,p,a,i)=>{if(p&&typeof p=="object"||typeof p=="function")for(let t of d(p))!g.call(e,t)&&t!==a&&s(e,t,{get:()=>p[t],enumerable:!(i=r(p,t))||i.enumerable});return e};var b=e=>x(s({},"__esModule",{value:!0}),e);var f={};m(f,{Collections1:()=>y});module.exports=b(f);var c=require("react/jsx-runtime");function y(e){let{headline:p,cta_button_label:a,cta_link:i,collections:t,disableLink:o}=e;return(0,c.jsx)("section",{className:"pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12",children:(0,c.jsxs)("div",{className:"pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8",children:[(0,c.jsxs)("div",{className:"pc-mb-6 pc-flex pc-items-end pc-justify-between pc-gap-4",children:[p&&(0,c.jsx)("h2",{className:"pc-text-2xl pc-font-bold pc-text-gray-800 lg:pc-text-3xl",children:p}),a&&(0,c.jsx)("a",{href:o?void 0:i,className:"pc-inline-block pc-rounded-lg pc-border pc-bg-white pc-px-4 pc-py-2 pc-text-center pc-text-sm pc-font-semibold pc-text-gray-500 pc-outline-none pc-ring-indigo-300 pc-transition pc-duration-100 hover:pc-bg-gray-100 focus-visible:pc-ring active:pc-bg-gray-200 md:pc-px-8 md:pc-py-3 md:pc-text-base",children:a})]}),t&&(0,c.jsx)("div",{className:"pc-grid pc-gap-x-4 pc-gap-y-6 sm:pc-grid-cols-2 md:pc-gap-x-6 lg:pc-grid-cols-3 xl:pc-grid-cols-4",children:t.map((l,n)=>(0,c.jsxs)("div",{children:[(0,c.jsx)("a",{href:o?void 0:l?.link,className:"pc-group pc-mb-2 pc-block pc-h-96 pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-shadow-lg lg:pc-mb-3",children:(0,c.jsx)("img",{src:l?.image,loading:"lazy",className:"pc-h-full pc-w-full pc-object-cover pc-object-center pc-transition pc-duration-200 group-hover:pc-scale-110"})}),(0,c.jsxs)("div",{className:"pc-flex pc-flex-col",children:[(0,c.jsx)("span",{className:"pc-text-gray-500",children:l?.tag}),l?.title&&(0,c.jsx)("a",{href:o?void 0:l?.link,className:"pc-text-lg pc-font-bold pc-text-gray-800 pc-transition pc-duration-100 hover:pc-text-gray-500 lg:pc-text-xl",children:l?.title})]})]},n))})]})})}0&&(module.exports={Collections1});
