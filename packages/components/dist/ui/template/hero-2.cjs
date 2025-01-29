'use client'
"use strict";var s=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var b=(p,c)=>{for(var l in c)s(p,l,{get:c[l],enumerable:!0})},f=(p,c,l,o)=>{if(c&&typeof c=="object"||typeof c=="function")for(let t of x(c))!m.call(p,t)&&t!==l&&s(p,t,{get:()=>c[t],enumerable:!(o=g(c,t))||o.enumerable});return p};var u=p=>f(s({},"__esModule",{value:!0}),p);var y={};b(y,{Hero2:()=>h});module.exports=u(y);var e=require("react/jsx-runtime");function h(p){let{description:c,disableLink:l,headline:o,image:t,left_button_label:i,left_button_link:n,right_button_label:a,right_button_link:r,sub_headline:d}=p;return(0,e.jsx)("header",{className:"pc-bg-white pc-p-6 sm:pc-p-8 lg:pc-p-12",children:(0,e.jsx)("div",{className:"pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8",children:(0,e.jsxs)("div",{className:"pc-flex pc-flex-col pc-justify-between pc-gap-6 sm:pc-gap-10 md:pc-gap-16 lg:pc-flex-row",children:[(0,e.jsxs)("div",{className:"pc-flex pc-flex-col pc-justify-center sm:pc-text-center lg:pc-py-12 lg:pc-text-left xl:pc-w-5/12 xl:pc-py-24",children:[d&&(0,e.jsx)("p",{className:"pc-mb-4 pc-font-semibold pc-text-indigo-500 md:pc-mb-6 md:pc-text-lg xl:pc-text-xl",children:d}),o&&(0,e.jsx)("h1",{className:"pc-mb-8 pc-text-4xl pc-font-bold pc-text-black sm:pc-text-5xl md:pc-mb-12 md:pc-text-6xl",children:o}),c&&(0,e.jsx)("p",{className:"pc-mb-8 pc-leading-relaxed pc-text-gray-500 md:pc-mb-12 lg:pc-w-4/5 xl:pc-text-lg",children:c}),(i||n||a||r)&&(0,e.jsxs)("div",{className:"pc-flex pc-flex-col pc-gap-2.5 sm:pc-flex-row sm:pc-justify-center lg:pc-justify-start",children:[(i||n)&&(0,e.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:l?void 0:n,className:"pc-inline-block pc-rounded-lg pc-bg-indigo-500 pc-px-8 pc-py-3 pc-text-center pc-text-sm pc-font-semibold pc-text-white pc-outline-none pc-ring-indigo-300 pc-transition pc-duration-100 hover:pc-bg-indigo-600 focus-visible:pc-ring active:pc-bg-indigo-700 md:pc-text-base",children:i}),(a||r)&&(0,e.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:l?void 0:r,className:"pc-inline-block pc-rounded-lg pc-bg-gray-200 pc-px-8 pc-py-3 pc-text-center pc-text-sm pc-font-semibold pc-text-gray-500 pc-outline-none pc-ring-indigo-300 pc-transition pc-duration-100 hover:pc-bg-gray-300 focus-visible:pc-ring active:pc-text-gray-700 md:pc-text-base",children:a})]})]}),t&&(0,e.jsx)("div",{className:"pc-h-48 pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-shadow-lg lg:pc-h-auto xl:pc-w-5/12",children:(0,e.jsx)("img",{src:t,loading:"lazy",className:"pc-h-full pc-w-full pc-object-cover pc-object-center"})})]})})})}0&&(module.exports={Hero2});
