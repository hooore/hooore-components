'use client'
"use strict";var r=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var L=Object.prototype.hasOwnProperty;var x=(p,t)=>{for(var c in t)r(p,c,{get:t[c],enumerable:!0})},y=(p,t,c,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of g(t))!L.call(p,o)&&o!==c&&r(p,o,{get:()=>t[o],enumerable:!(s=d(t,o))||s.enumerable});return p};var f=p=>y(r({},"__esModule",{value:!0}),p);var v={};x(v,{LOGO_LIST_4_META:()=>u});module.exports=f(v);var e=require("react/jsx-runtime");function l(p){let{title:t,description:c,cta_button_label:s,cta_link:o,images:i,disableLink:a}=p;return(0,e.jsxs)("section",{className:"pc-mx-auto pc-max-w-7xl pc-px-4 pc-py-24",children:[(0,e.jsx)("h1",{className:"pc-mb-3 pc-text-center pc-text-3xl pc-font-bold pc-leading-tight pc-text-gray-900 md:pc-text-4xl",children:t}),(0,e.jsx)("p",{className:"pc-mb-16 pc-text-center pc-text-lg pc-text-gray-600",children:c}),i&&(0,e.jsx)("div",{className:"pc-mb-16 pc-grid pc-grid-cols-2 pc-gap-16 pc-text-center lg:pc-grid-cols-6",children:i.map((n,m)=>(0,e.jsx)("div",{className:"pc-flex pc-items-center pc-justify-center",children:(0,e.jsx)("img",{src:n?.image,className:"pc-block pc-h-16 pc-object-contain"})},m))}),s&&(0,e.jsx)("div",{className:"pc-text-center",children:(0,e.jsxs)("a",{href:a?void 0:o,className:"pc-mx-auto pc-flex pc-w-fit pc-items-center pc-rounded pc-bg-gray-100 pc-p-4",children:[(0,e.jsx)("span",{children:s}),(0,e.jsx)("svg",{viewBox:"0 0 20 20",fill:"currentColor",className:"pc-ml-3 pc-h-4 pc-w-4",children:(0,e.jsx)("path",{fillRule:"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]})}var u={slug:"logo-list-4",component:l};0&&(module.exports={LOGO_LIST_4_META});
