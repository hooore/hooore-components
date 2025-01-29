'use client'
"use strict";var L=Object.create;var b=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var R=Object.getOwnPropertyNames;var A=Object.getPrototypeOf,z=Object.prototype.hasOwnProperty;var I=(e,a)=>{for(var p in a)b(e,p,{get:a[p],enumerable:!0})},h=(e,a,p,o)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of R(a))!z.call(e,n)&&n!==p&&b(e,n,{get:()=>a[n],enumerable:!(o=C(a,n))||o.enumerable});return e};var O=(e,a,p)=>(p=e!=null?L(A(e)):{},h(a||!e||!e.__esModule?b(p,"default",{value:e,enumerable:!0}):p,e)),S=e=>h(b({},"__esModule",{value:!0}),e);var H={};I(H,{NAVBAR_1_META:()=>M});module.exports=S(H);var i=require("@hooore/utils"),m=require("@radix-ui/react-icons"),l=require("react");var g=require("@hooore/utils"),N=require("@radix-ui/react-slot"),x=require("class-variance-authority"),w=O(require("react"),1),y=require("react/jsx-runtime"),V=(0,x.cva)("pc-inline-flex pc-items-center pc-gap-2 pc-whitespace-nowrap pc-rounded-full disabled:pc-cursor-not-allowed disabled:pc-opacity-50",{variants:{variant:{default:"pc-p-2 hover:pc-backdrop-brightness-0",cta:"pc-bg-[rgb(var(--foreground))] pc-text-[rgb(var(--background))] pc-px-16 pc-py-4 pc-text-cta pc-font-medium pc-shadow-[inset_0px_0px_0px_3px] pc-shadow-[rgb(var(--background))] sm:pc-px-16 sm:pc-py-4 sm:pc-text-2xl",outline:"pc-border-2 pc-border-[rgb(var(--foreground))] pc-px-4 pc-py-2 hover:pc-backdrop-brightness-0 ",link:"pc-p-2 pc-rounded-none"}},defaultVariants:{variant:"default"}}),d=w.forwardRef(({className:e,variant:a,asChild:p=!1,...o},n)=>(0,y.jsx)(p?N.Slot:"button",{className:(0,g.cn)(V({variant:a,className:e})),ref:n,...o}));d.displayName="Button";var t=require("react/jsx-runtime");function k({isActive:e,children:a,className:p,...o}){return(0,t.jsx)(d,{...o,className:(0,i.cn)("pc-justify-start pc-rounded-full pc-border-2 pc-text-[rgb(var(--background))]",e?"pc-border-[rgb(var(--background))] sm:pc-bg-transparent":"pc-border-transparent",p),children:a})}function B(e="*",a,p){return p&&a?.startsWith(e)||a===e}function P({href:e,pathname:a,startWith:p,children:o,disableLink:n,...c}){return(0,t.jsx)(k,{...c,isActive:B(e,a,p),asChild:!0,children:(0,t.jsx)("a",{href:n?void 0:e,children:o})})}function E(e){let{href:a,pathname:p,children:o,disableLink:n,sub_link:c}=e,[u,f]=(0,l.useState)(!1),v=()=>{f(r=>!r)};return(0,t.jsxs)("div",{className:"pc-relative",children:[(0,t.jsxs)(k,{isActive:B(a,p,!0),asChild:!1,onClick:v,className:"pc-w-full pc-justify-between",children:[o," ",(0,t.jsx)(m.ChevronDownIcon,{className:"pc-h-4 pc-w-4"})]}),c&&u&&(0,t.jsx)("div",{className:(0,i.cn)("pc-flex pc-flex-col pc-bg-[rgb(var(--foreground))] pc-py-2 pc-pl-8","sm:pc-absolute sm:pc-top-[110%] sm:pc-z-50 sm:pc-min-w-[8rem] sm:pc-rounded-md sm:pc-p-1 sm:pc-shadow-md"),children:c.map((r,s)=>(0,t.jsx)(P,{pathname:p,href:r?.link,disableLink:n,asChild:!0,children:r?.label},s))})]})}function _(e){let{logo:a,link:p,disableLink:o=!1}=e,[n,c]=(0,l.useState)(!1),[u,f]=(0,l.useState)(),v=()=>{c(r=>!r)};return(0,l.useEffect)(()=>{if(o)return;let r=window.location.pathname,s=r.substring(0,r.length-1);f(s||"/")},[]),(0,t.jsx)("nav",{className:"pc-fixed pc-top-0 pc-z-50 pc-w-full sm:pc-h-[var(--navbar-height-desktop)] sm:pc-px-8 sm:pc-py-4",children:(0,t.jsxs)("div",{className:(0,i.cn)("pc-flex pc-w-full pc-flex-col pc-items-center pc-transition-colors pc-ease-linear","sm:pc-h-full sm:pc-flex-row sm:pc-justify-between sm:pc-rounded-full sm:pc-bg-[rgb(var(--foreground))]/50 sm:pc-px-8 sm:pc-py-4 sm:pc-shadow-[0_0_4px_rgba(0,0,0,0.08)] sm:pc-backdrop-blur",n&&"pc-bg-[rgb(var(--foreground))]"),children:[(0,t.jsxs)("div",{className:(0,i.cn)("pc-z-10 pc-mt-[8px] pc-flex pc-h-[calc(var(--navbar-height-mobile)-8px)] pc-items-center pc-justify-between pc-border-b-2 pc-transition-all pc-ease-linear sm:pc-w-full","sm:pc-mt-0 sm:pc-h-full sm:pc-max-h-fit sm:pc-border-0 sm:pc-bg-transparent sm:pc-px-0 sm:pc-py-0 sm:pc-shadow-none sm:pc-backdrop-blur-[none]",n?"pc-w-full pc-px-[2rem]":"pc-w-[calc(100vw-2*1rem)] pc-rounded-full pc-border-transparent pc-bg-[rgb(var(--foreground))]/50 pc-px-4 pc-shadow-[0_0_4px_rgba(0,0,0,0.08)] pc-backdrop-blur"),children:[a&&(0,t.jsx)("img",{loading:"lazy",src:a,className:"pc-h-1/2 sm:pc-h-full"}),(0,t.jsx)(d,{onClick:v,className:"z-10 pc-text-[rgb(var(--background))] sm:pc-hidden","aria-label":"Expand Navigation Bar",children:n?(0,t.jsx)(m.Cross1Icon,{className:"pc-h-4 pc-w-4 pc-animate-in pc-zoom-in"}):(0,t.jsx)(m.HamburgerMenuIcon,{className:"pc-h-4 pc-w-4 pc-animate-in pc-zoom-in"})})]}),(0,t.jsx)("div",{style:{"--navbar-content-height":"var(--navbar-height-mobile-content)"},className:(0,i.cn)("pc-flex pc-w-full pc-flex-col pc-px-1 pc-transition-[height] pc-ease-linear pc-fill-mode-forwards","sm:pc-h-full sm:pc-w-fit sm:pc-animate-none sm:pc-justify-center sm:pc-px-0 sm:pc-py-0",n?"pc-h-[var(--navbar-height-mobile-content)] pc-animate-[navbar-show] pc-py-2.5":"pc-h-0 pc-animate-[navbar-hide]"),children:p&&(0,t.jsx)("div",{className:"pc-overflow-y-scroll sm:pc-overflow-visible",children:(0,t.jsx)("div",{className:"pc-flex pc-flex-[2_2_0%] pc-flex-col pc-gap-2 sm:pc-flex-row sm:pc-gap-6",children:p.map((r,s)=>r?.sub_link&&r.sub_link.length!==0?(0,t.jsx)(E,{pathname:u,href:r.link,disableLink:o,sub_link:r.sub_link,children:r.label},s):r?.label&&(0,t.jsx)(P,{pathname:u,href:r.link,disableLink:o,className:"",children:r.label},s))})})})]})})}var M={slug:"navbar-1",component:_};0&&(module.exports={NAVBAR_1_META});
