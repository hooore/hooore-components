'use client'
import{b as d}from"./chunk-XNHDNJ4D.js";import{a as f}from"./chunk-56EFLSOZ.js";import{cn as i}from"@hooore/utils";import{CheckCircledIcon as b}from"@radix-ui/react-icons";import{jsx as e,jsxs as a}from"react/jsx-runtime";function g(o){let{description:c,features:p,headline:s,image:r,className:n,direction:t,footer:m}=o,x=t==="vertical",l=t==="horizontal";return a("div",{className:i("pc-flex pc-w-full pc-rounded-lg",x&&"pc-flex-col",l&&"pc-flex-col sm:pc-flex-row",n),children:[r&&e("div",{className:"pc-flex pc-justify-center pc-bg-[rgba(2,12,13,0.2)]",children:e("img",{src:r,loading:"lazy",className:i("pc-flex pc-aspect-square pc-h-auto pc-items-center pc-justify-center",l&&"pc-h-80 pc-max-w-80 sm:pc-h-72 sm:pc-max-w-72")})}),a("div",{className:i("pc-flex pc-h-full pc-w-full pc-flex-col pc-gap-4",x&&"pc-p-6",l&&"sm:pc-pl-12"),children:[a("div",{className:"pc-flex pc-flex-1 pc-flex-col pc-gap-4",children:[s&&e("h3",{className:"pc-text-balance pc-text-center pc-text-h3 sm:pc-text-start sm:pc-text-h3-sm",children:s}),c&&e("p",{className:"pc-text-balance pc-text-center pc-text-p sm:pc-text-start sm:pc-text-p-sm",children:c}),p&&e("table",{className:i("pc-border-separate pc-border-spacing-2",l&&"pc-text-h4 sm:pc-text-h2",x&&"pc-text-h4"),children:e("tbody",{children:p.map((u,h)=>a("tr",{children:[e("td",{className:"pc-w-[24px]",children:e(b,{width:24,height:24})}),e("td",{children:u?.name})]},h))})})]}),m]})]})}function F(o){let{tag:c,headline:p,description:s,features:r,disableLink:n=!1}=o;return a("section",{className:"pc-flex pc-flex-col pc-gap-10 pc-px-4 pc-py-10 sm:pc-px-20 sm:pc-py-20",children:[(c||p||s)&&a("div",{className:"pc-flex pc-flex-col pc-gap-6",children:[c&&e("div",{className:"pc-flex pc-justify-center pc-gap-1 sm:pc-justify-start",children:e(f,{children:c})}),p&&e("h2",{className:"pc-text-balance pc-text-center pc-text-h1 sm:pc-text-start sm:pc-text-h1-sm",children:p}),s&&e("p",{className:"pc-text-balance pc-text-center pc-text-h3 sm:pc-text-start sm:pc-text-h3-sm",children:s})]}),r&&e("div",{className:"pc-flex pc-flex-col pc-gap-6 sm:pc-flex-row sm:pc-gap-12",children:r.map((t,m)=>e(g,{...t,className:"pc-flex-1 pc-border",direction:"vertical",footer:t?.cta_button_label&&e(d,{asChild:!0,variant:"outline",className:"pc-justify-center sm:pc-w-fit",children:e("a",{target:"_blank",rel:"noreferrer noopener",href:n?void 0:t.cta_link,children:t.cta_button_label})})},m))})]})}export{g as a,F as b};
