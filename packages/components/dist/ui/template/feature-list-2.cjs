'use client'
"use strict";var m=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var N=Object.prototype.hasOwnProperty;var v=(c,t)=>{for(var p in t)m(c,p,{get:t[p],enumerable:!0})},F=(c,t,p,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of y(t))!N.call(c,s)&&s!==p&&m(c,s,{get:()=>t[s],enumerable:!(a=b(t,s))||a.enumerable});return c};var L=c=>F(m({},"__esModule",{value:!0}),c);var w={};v(w,{FeaturesList2:()=>k});module.exports=L(w);var r=require("@hooore/utils"),f=require("@radix-ui/react-icons");var e=require("react/jsx-runtime");function d(c){let{description:t,features:p,headline:a,image:s,className:l,direction:x,footer:u}=c,n=x==="vertical",o=x==="horizontal";return(0,e.jsxs)("div",{className:(0,r.cn)("pc-flex pc-w-full pc-rounded-lg",n&&"pc-flex-col",o&&"pc-flex-col sm:pc-flex-row",l),children:[s&&(0,e.jsx)("div",{className:"pc-flex pc-justify-center pc-bg-[rgba(2,12,13,0.2)]",children:(0,e.jsx)("img",{src:s,loading:"lazy",className:(0,r.cn)("pc-flex pc-aspect-square pc-h-auto pc-items-center pc-justify-center",o&&"pc-h-80 pc-max-w-80 sm:pc-h-72 sm:pc-max-w-72")})}),(0,e.jsxs)("div",{className:(0,r.cn)("pc-flex pc-h-full pc-w-full pc-flex-col pc-gap-4",n&&"pc-p-6",o&&"sm:pc-pl-12"),children:[(0,e.jsxs)("div",{className:"pc-flex pc-flex-1 pc-flex-col pc-gap-4",children:[a&&(0,e.jsx)("h3",{className:"pc-text-balance pc-text-center pc-text-h3 sm:pc-text-start sm:pc-text-h3-sm",children:a}),t&&(0,e.jsx)("p",{className:"pc-text-balance pc-text-center pc-text-p sm:pc-text-start sm:pc-text-p-sm",children:t}),p&&(0,e.jsx)("table",{className:(0,r.cn)("pc-border-separate pc-border-spacing-2",o&&"pc-text-h4 sm:pc-text-h2",n&&"pc-text-h4"),children:(0,e.jsx)("tbody",{children:p.map((h,g)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{className:"pc-w-[24px]",children:(0,e.jsx)(f.CheckCircledIcon,{width:24,height:24})}),(0,e.jsx)("td",{children:h?.name})]},g))})})]}),u]})]})}var i=require("react/jsx-runtime");function k(c){let{background:t,images:p,features:a}=c;return(0,i.jsx)("section",{className:"pc-px-4 pc-py-10 sm:pc-px-20 sm:pc-py-20",children:(0,i.jsx)(d,{image:t,features:a,direction:"horizontal",footer:p&&(0,i.jsx)("div",{className:"pc-flex pc-flex-wrap pc-justify-center pc-gap-6 sm:pc-justify-start",children:p.map((s,l)=>(0,i.jsx)("img",{src:s?.image,loading:"lazy"},l))})})})}0&&(module.exports={FeaturesList2});
