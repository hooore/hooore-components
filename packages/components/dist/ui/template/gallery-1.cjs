'use client'
"use strict";var s=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var i=Object.prototype.hasOwnProperty;var m=(e,p)=>{for(var a in p)s(e,a,{get:p[a],enumerable:!0})},g=(e,p,a,r)=>{if(p&&typeof p=="object"||typeof p=="function")for(let t of d(p))!i.call(e,t)&&t!==a&&s(e,t,{get:()=>p[t],enumerable:!(r=n(p,t))||r.enumerable});return e};var x=e=>g(s({},"__esModule",{value:!0}),e);var b={};m(b,{Gallery1:()=>y});module.exports=x(b);var c=require("react/jsx-runtime");function y(e){let{headline:p,description:a,images:r,disableLink:t=!1}=e;return(0,c.jsx)("section",{className:"pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12",children:(0,c.jsxs)("div",{className:"pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8",children:[(0,c.jsxs)("div",{className:"pc-mb-10 md:pc-mb-16",children:[p&&(0,c.jsx)("h2",{className:"pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-6 lg:pc-text-3xl",children:p}),a&&(0,c.jsx)("p",{className:"pc-mx-auto pc-max-w-screen-md pc-text-center pc-text-gray-500 md:pc-text-lg",children:a})]}),r&&(0,c.jsx)("div",{className:"pc-grid pc-grid-cols-2 pc-gap-4 sm:pc-grid-cols-3 md:pc-gap-6 xl:pc-gap-8",children:r.map((l,o)=>(0,c.jsxs)("a",{href:t?void 0:l?.link,className:"pc-group pc-relative pc-flex pc-h-48 pc-items-end pc-justify-end pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-shadow-lg md:pc-h-96",children:[(0,c.jsx)("img",{src:l?.image,loading:"lazy",className:"pc-absolute pc-inset-0 pc-h-full pc-w-full pc-object-cover pc-object-center pc-transition pc-duration-200 group-hover:pc-scale-110"}),(0,c.jsx)("div",{className:"pc-pointer-events-none pc-absolute pc-inset-0 pc-bg-gradient-to-t pc-from-gray-800 pc-via-transparent pc-to-transparent pc-opacity-50"}),l?.tag&&(0,c.jsx)("span",{className:"pc-relative pc-mb-3 pc-mr-3 pc-inline-block pc-rounded-lg pc-border pc-border-gray-500 pc-px-2 pc-py-1 pc-text-xs pc-text-gray-200 pc-backdrop-blur md:pc-px-3 md:pc-text-sm",children:l.tag})]},o))})]})})}0&&(module.exports={Gallery1});
