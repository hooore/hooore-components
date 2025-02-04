'use client'
"use strict";var F=Object.create;var d=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var E=Object.getPrototypeOf,W=Object.prototype.hasOwnProperty;var H=(e,t)=>{for(var o in t)d(e,o,{get:t[o],enumerable:!0})},y=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of S(t))!W.call(e,n)&&n!==o&&d(e,n,{get:()=>t[n],enumerable:!(r=L(t,n))||r.enumerable});return e};var v=(e,t,o)=>(o=e!=null?F(E(e)):{},y(t||!e||!e.__esModule?d(o,"default",{value:e,enumerable:!0}):o,e)),M=e=>y(d({},"__esModule",{value:!0}),e);var O={};H(O,{FAQ_3_META:()=>D});module.exports=M(O);var R=require("@radix-ui/react-icons");var i=v(require("@radix-ui/react-accordion"),1),l=require("@radix-ui/react-icons"),s=v(require("react"),1),m=require("@hooore/utils"),p=require("react/jsx-runtime"),x=s.forwardRef(({className:e,...t},o)=>(0,p.jsx)(i.Root,{ref:o,className:(0,m.cn)("pc-w-full",e),...t}));x.displayName="Accordion";var g=s.forwardRef(({className:e,...t},o)=>(0,p.jsx)(i.Item,{ref:o,className:(0,m.cn)("pc-border-b",e),...t}));g.displayName="AccordionItem";var h=s.forwardRef((e,t)=>{let{className:o,children:r,closeIcon:n=(0,p.jsx)(l.MinusIcon,{className:"pc-h-4 pc-w-4 pc-shrink-0"}),openIcon:a=(0,p.jsx)(l.PlusIcon,{className:"pc-h-4 pc-w-4 pc-shrink-0"}),...A}=e;return(0,p.jsx)(i.Header,{className:"flex",children:(0,p.jsxs)(i.Trigger,{ref:t,className:(0,m.cn)("pc-flex pc-w-full pc-flex-1 pc-items-center pc-justify-between pc-py-6 pc-text-left pc-text-h4 pc-font-semibold pc-transition-all sm:pc-text-h4-sm [&[data-state=closed]>svg:nth-last-child(2)]:pc-hidden [&[data-state=open]>svg:last-child]:pc-hidden",o),...A,children:[r,n,a]})})});h.displayName=i.Trigger.displayName;var u=s.forwardRef(({className:e,children:t,...o},r)=>(0,p.jsx)(i.Content,{ref:r,className:(0,m.cn)("pc-overflow-hidden pc-pb-7 pc-pt-0 data-[state=closed]:pc-animate-accordion-up data-[state=open]:pc-animate-accordion-down",e),...o,children:t}));u.displayName=i.Content.displayName;var N=require("@hooore/utils"),k=require("react/jsx-runtime");function _(e){if(e?.startsWith("[href=")){let[t,o]=e.replace("[href=","").split("](");return[t,o?.replace(")","")]}return[]}function C(e){let{as:t="a",className:o,children:r,autoConvert:n=!1,href:a,...A}=e,[T,q]=n?_(r):[],P=n?T:a;return P?(0,k.jsx)(t,{className:(0,N.cn)("pc-underline pc-underline-offset-4",o),href:P,...A,children:n?q:r}):r}var w=require("react"),f=require("react/jsx-runtime");function b({children:e,className:t}){return e?.split(" ").map((o,r)=>(0,f.jsxs)(w.Fragment,{children:[(0,f.jsx)(C,{autoConvert:!0,className:t,children:o})," "]},r))}var c=require("react/jsx-runtime");function I(e){let{caption:t,faq:o,headline:r}=e;return(0,c.jsx)("section",{className:"pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12",children:(0,c.jsxs)("div",{className:"pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8",children:[(0,c.jsxs)("div",{className:"pc-mb-10 md:pc-mb-16",children:[r&&(0,c.jsx)("h2",{className:"pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-6 lg:pc-text-3xl",children:r}),t&&(0,c.jsx)("p",{className:"pc-mx-auto pc-max-w-screen-md pc-text-center pc-text-gray-500 md:pc-text-lg",children:t})]}),o&&(0,c.jsx)("div",{className:"pc-mx-auto pc-flex pc-max-w-screen-sm pc-flex-col pc-border-t",children:(0,c.jsx)(x,{type:"single",collapsible:!0,children:o.map((n,a)=>(0,c.jsxs)(g,{value:a.toString(),children:[(0,c.jsx)(h,{closeIcon:(0,c.jsx)(R.ChevronUpIcon,{className:"pc-h-8 pc-w-8 pc-shrink-0 pc-text-indigo-500"}),openIcon:(0,c.jsx)(R.ChevronDownIcon,{className:"pc-h-8 pc-w-8 pc-shrink-0 pc-text-indigo-500"}),children:n?.question}),(0,c.jsx)(u,{children:(0,c.jsx)("div",{className:"pc-mb-6 last:pc-mb-0",children:(0,c.jsx)("p",{className:"pc-whitespace-pre-line pc-text-balance pc-text-p sm:pc-text-p-sm",children:(0,c.jsx)(b,{children:n?.answer})})})})]},a))})})]})})}var D={slug:"faq-3",component:I};0&&(module.exports={FAQ_3_META});
