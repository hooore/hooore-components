'use client'
"use strict";var i=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var L=Object.prototype.hasOwnProperty;var x=(p,t)=>{for(var c in t)i(p,c,{get:t[c],enumerable:!0})},y=(p,t,c,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of d(t))!L.call(p,o)&&o!==c&&i(p,o,{get:()=>t[o],enumerable:!(s=g(t,o))||s.enumerable});return p};var b=p=>y(i({},"__esModule",{value:!0}),p);var u={};x(u,{LOGO_LIST_4_META:()=>f});module.exports=b(u);var e=require("react/jsx-runtime");function a(p){let{title:t,description:c,cta_button_label:s,cta_link:o,images:l,disableLink:r}=p;return(0,e.jsxs)("section",{className:"pc-mx-auto pc-max-w-7xl pc-px-4 pc-py-24",children:[(0,e.jsx)("h1",{className:"pc-mb-3 pc-text-center pc-text-3xl pc-font-bold pc-leading-tight pc-text-gray-900 md:pc-text-4xl",children:t}),(0,e.jsx)("p",{className:"pc-mb-16 pc-text-center pc-text-lg pc-text-gray-600",children:c}),l&&(0,e.jsx)("div",{className:"pc-mb-16 pc-grid pc-grid-cols-2 pc-gap-16 pc-text-center lg:pc-grid-cols-6",children:l.map((n,m)=>(0,e.jsx)("div",{className:"pc-flex pc-items-center pc-justify-center",children:(0,e.jsx)("img",{src:n?.image,className:"pc-block pc-h-16 pc-object-contain"})},m))}),s&&(0,e.jsx)("div",{className:"pc-text-center",children:(0,e.jsxs)("a",{href:r?void 0:o,className:"pc-mx-auto pc-flex pc-w-fit pc-items-center pc-rounded pc-bg-gray-100 pc-p-4",children:[(0,e.jsx)("span",{children:s}),(0,e.jsx)("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"pc-ml-3 pc-h-4 pc-w-4",children:(0,e.jsx)("path",{fillRule:"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]})}var f={slug:"logo-list-4",component:a};0&&(module.exports={LOGO_LIST_4_META});
