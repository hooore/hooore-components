import {b}from'./chunk-XNHDNJ4D.js';import {cn}from'@hooore/utils';import {Cross1Icon,HamburgerMenuIcon,ChevronDownIcon}from'@radix-ui/react-icons';import {useState,useEffect}from'react';import {jsx,jsxs}from'react/jsx-runtime';function f({isActive:p,children:n,className:t,...c}){return jsx(b,{...c,className:cn("pc-justify-start pc-rounded-full pc-border-2 pc-text-[rgb(var(--background))]",p?"pc-border-[rgb(var(--background))] sm:pc-bg-transparent":"pc-border-transparent",t),children:n})}function h(p="*",n,t){return t&&n?.startsWith(p)||n===p}function g({href:p,pathname:n,startWith:t,children:c,disableLink:r,...s}){return jsx(f,{...s,isActive:h(p,n,t),asChild:!0,children:jsx("a",{href:r?void 0:p,children:c})})}function y(p){let{href:n,pathname:t,children:c,disableLink:r,sub_link:s}=p,[l,u]=useState(!1),b=()=>{u(e=>!e);};return jsxs("div",{className:"pc-relative",children:[jsxs(f,{isActive:h(n,t,!0),asChild:!1,onClick:b,className:"pc-w-full pc-justify-between",children:[c," ",jsx(ChevronDownIcon,{className:"pc-h-4 pc-w-4"})]}),s&&l&&jsx("div",{className:cn("pc-flex pc-flex-col pc-bg-[rgb(var(--foreground))] pc-py-2 pc-pl-8","sm:pc-absolute sm:pc-top-[110%] sm:pc-z-50 sm:pc-min-w-[8rem] sm:pc-rounded-md sm:pc-p-1 sm:pc-shadow-md"),children:s.map((e,o)=>jsx(g,{pathname:t,href:e?.link,disableLink:r,asChild:!0,children:e?.label},o))})]})}function C(p){let{logo:n,link:t,disableLink:c=!1}=p,[r,s]=useState(!1),[l,u]=useState(),b$1=()=>{s(e=>!e);};return useEffect(()=>{if(c)return;let e=window.location.pathname,o=e.substring(0,e.length-1);u(o||"/");},[]),jsx("nav",{className:"pc-fixed pc-top-0 pc-z-50 pc-w-full sm:pc-h-[var(--navbar-height-desktop)] sm:pc-px-8 sm:pc-py-4",children:jsxs("div",{className:cn("pc-flex pc-w-full pc-flex-col pc-items-center pc-transition-colors pc-ease-linear","sm:pc-h-full sm:pc-flex-row sm:pc-justify-between sm:pc-rounded-full sm:pc-bg-[rgb(var(--foreground))]/50 sm:pc-px-8 sm:pc-py-4 sm:pc-shadow-[0_0_4px_rgba(0,0,0,0.08)] sm:pc-backdrop-blur",r&&"pc-bg-[rgb(var(--foreground))]"),children:[jsxs("div",{className:cn("pc-z-10 pc-mt-[8px] pc-flex pc-h-[calc(var(--navbar-height-mobile)-8px)] pc-items-center pc-justify-between pc-border-b-2 pc-transition-all pc-ease-linear sm:pc-w-full","sm:pc-mt-0 sm:pc-h-full sm:pc-max-h-fit sm:pc-border-0 sm:pc-bg-transparent sm:pc-px-0 sm:pc-py-0 sm:pc-shadow-none sm:pc-backdrop-blur-[none]",r?"pc-w-full pc-px-[2rem]":"pc-w-[calc(100vw-2*1rem)] pc-rounded-full pc-border-transparent pc-bg-[rgb(var(--foreground))]/50 pc-px-4 pc-shadow-[0_0_4px_rgba(0,0,0,0.08)] pc-backdrop-blur"),children:[n&&jsx("img",{loading:"lazy",src:n,className:"pc-h-1/2 sm:pc-h-full"}),jsx(b,{onClick:b$1,className:"z-10 pc-text-[rgb(var(--background))] sm:pc-hidden","aria-label":"Expand Navigation Bar",children:r?jsx(Cross1Icon,{className:"pc-h-4 pc-w-4 pc-animate-in pc-zoom-in"}):jsx(HamburgerMenuIcon,{className:"pc-h-4 pc-w-4 pc-animate-in pc-zoom-in"})})]}),jsx("div",{style:{"--navbar-content-height":"var(--navbar-height-mobile-content)"},className:cn("pc-flex pc-w-full pc-flex-col pc-px-1 pc-transition-[height] pc-ease-linear pc-fill-mode-forwards","sm:pc-h-full sm:pc-w-fit sm:pc-animate-none sm:pc-justify-center sm:pc-px-0 sm:pc-py-0",r?"pc-h-[var(--navbar-height-mobile-content)] pc-animate-[navbar-show] pc-py-2.5":"pc-h-0 pc-animate-[navbar-hide]"),children:t&&jsx("div",{className:"pc-overflow-y-scroll sm:pc-overflow-visible",children:jsx("div",{className:"pc-flex pc-flex-[2_2_0%] pc-flex-col pc-gap-2 sm:pc-flex-row sm:pc-gap-6",children:t.map((e,o)=>e?.sub_link&&e.sub_link.length!==0?jsx(y,{pathname:l,href:e.link,disableLink:c,sub_link:e.sub_link,children:e.label},o):e?.label&&jsx(g,{pathname:l,href:e.link,disableLink:c,className:"",children:e.label},o))})})})]})})}export{f as a,C as b};