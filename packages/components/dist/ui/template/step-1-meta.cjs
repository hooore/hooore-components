'use client'
"use strict";var l=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var n=Object.getOwnPropertyNames;var a=Object.prototype.hasOwnProperty;var m=(o,p)=>{for(var r in p)l(o,r,{get:p[r],enumerable:!0})},d=(o,p,r,c)=>{if(p&&typeof p=="object"||typeof p=="function")for(let t of n(p))!a.call(o,t)&&t!==r&&l(o,t,{get:()=>p[t],enumerable:!(c=i(p,t))||c.enumerable});return o};var g=o=>d(l({},"__esModule",{value:!0}),o);var y={};m(y,{STEP_1_META:()=>v});module.exports=g(y);var e=require("react/jsx-runtime");function s(o){let{steps:p,image:r}=o;return(0,e.jsx)("section",{className:"pc-mx-auto pc-px-4 pc-py-16 sm:pc-max-w-xl md:pc-max-w-full md:pc-px-24 lg:pc-max-w-screen-xl lg:pc-px-8 lg:pc-py-20",children:(0,e.jsxs)("div",{className:"row-gap-10 pc-grid pc-gap-6 lg:pc-grid-cols-2",children:[p&&(0,e.jsx)("div",{className:"lg:pc-py-6 lg:pc-pr-16",children:p.map((c,t)=>(0,e.jsxs)("div",{className:"pc-flex",children:[(0,e.jsxs)("div",{className:"pc-mr-4 pc-flex pc-flex-col pc-items-center",children:[(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"pc-flex pc-h-10 pc-w-10 pc-items-center pc-justify-center pc-rounded-full pc-border",children:[t===p.length-1&&(0,e.jsx)("svg",{className:"pc-w-6 pc-text-gray-600",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,e.jsx)("polyline",{fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",points:"6,12 10,16 18,8"})}),t!==p.length-1&&(0,e.jsxs)("svg",{className:"pc-w-4 pc-text-gray-600",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[(0,e.jsx)("line",{fill:"none",strokeMiterlimit:"10",x1:"12",y1:"2",x2:"12",y2:"22"}),(0,e.jsx)("polyline",{fill:"none",strokeMiterlimit:"10",points:"19,15 12,22 5,15"})]})]})}),t!==p.length-1&&(0,e.jsx)("div",{className:"pc-h-full pc-w-px pc-bg-gray-300"})]}),(0,e.jsxs)("div",{className:"pc-pb-8 pc-pt-1",children:[(0,e.jsx)("p",{className:"pc-mb-2 pc-text-lg pc-font-bold",children:c?.label}),c?.value&&(0,e.jsx)("p",{className:"pc-text-gray-700",children:c.value})]})]},t))}),(0,e.jsx)("div",{className:"pc-relative",children:(0,e.jsx)("img",{className:"pc-inset-0 pc-h-96 pc-w-full pc-rounded pc-object-cover pc-object-bottom pc-shadow-lg lg:pc-absolute lg:pc-h-full",src:r})})]})})}var v={slug:"step-1",component:s};0&&(module.exports={STEP_1_META});
