'use client'
"use strict";var r=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var n=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var i=(p,t)=>{for(var s in t)r(p,s,{get:t[s],enumerable:!0})},x=(p,t,s,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let c of n(t))!l.call(p,c)&&c!==s&&r(p,c,{get:()=>t[c],enumerable:!(o=d(t,c))||o.enumerable});return p};var g=p=>x(r({},"__esModule",{value:!0}),p);var S={};i(S,{STATS_2_META:()=>y});module.exports=g(S);var e=require("react/jsx-runtime");function a(p){let{headline:t,description:s,stats:o=[]}=p;return(0,e.jsx)("section",{className:"pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12",children:(0,e.jsxs)("div",{className:"pc-mx-auto pc-max-w-screen-lg pc-px-4 md:pc-px-8",children:[(0,e.jsxs)("div",{className:"pc-mb-8 md:pc-mb-12",children:[(0,e.jsx)("h2",{className:"pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-6 lg:pc-text-3xl",children:t}),(0,e.jsx)("p",{className:"pc-mx-auto pc-max-w-screen-md pc-text-center pc-text-gray-500 md:pc-text-lg",children:s})]}),(0,e.jsx)("div",{className:"pc-grid pc-grid-cols-2 pc-gap-6 pc-rounded-lg pc-bg-indigo-500 pc-p-6 md:pc-grid-cols-4 md:pc-gap-8 md:pc-p-8",children:o.map((c,m)=>(0,e.jsxs)("div",{className:"pc-flex pc-flex-col pc-items-center",children:[(0,e.jsx)("div",{className:"pc-text-xl pc-font-bold pc-text-white sm:pc-text-2xl md:pc-text-3xl",children:c?.value}),(0,e.jsx)("div",{className:"pc-text-sm pc-text-indigo-200 sm:pc-text-base",children:c?.label})]},m))})]})})}var y={slug:"stats-2",component:a};0&&(module.exports={STATS_2_META});
