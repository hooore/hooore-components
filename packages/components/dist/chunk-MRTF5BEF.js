'use client'
import{a as t}from"./chunk-VWCUUJGP.js";import{jsx as e,jsxs as c}from"react/jsx-runtime";function d(o){let{image:l,description:s,links:n,socials:m,disableLink:a}=o;return e("footer",{className:"pc-bg-gray-100",children:c("div",{className:"pc-mx-auto pc-max-w-5xl pc-px-4 pc-py-16 sm:pc-px-6 lg:pc-px-8",children:[e("div",{className:"pc-flex pc-justify-center",children:e("img",{src:l,className:"pc-max-h-36 pc-max-h-full pc-w-full pc-max-w-36"})}),e("p",{className:"pc-mx-auto pc-mt-6 pc-max-w-md pc-text-center pc-leading-relaxed pc-text-gray-500",children:s}),e("ul",{className:"pc-mt-12 pc-flex pc-flex-wrap pc-justify-center pc-gap-6 md:pc-gap-8 lg:pc-gap-12",children:n?.map((p,r)=>e("li",{children:e("a",{href:a?void 0:p?.link,className:"pc-text-gray-700 pc-transition hover:pc-text-gray-700/75",children:p?.label})},r))}),e("ul",{className:"pc-mt-12 pc-flex pc-justify-center pc-gap-6 md:pc-gap-8",children:m?.map((p,r)=>e("li",{children:c("a",{href:a?void 0:p?.link,rel:"noreferrer",target:"_blank",className:"pc-text-gray-700 pc-transition hover:pc-text-gray-700/75",children:[e("span",{className:"pc-sr-only",children:p?.slug}),p?.slug&&e(t,{icon:p.slug})]})},r))})]})})}export{d as a};
