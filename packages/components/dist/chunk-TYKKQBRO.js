'use client'
import{a}from"./chunk-VWCUUJGP.js";import{jsx as c,jsxs as p}from"react/jsx-runtime";function g(s){let{headline:l,description:d,teams:i,disableLink:m}=s;return c("section",{className:"pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12",children:p("div",{className:"pc-mx-auto pc-max-w-screen-xl pc-px-4 md:pc-px-8",children:[p("div",{className:"pc-mb-10 md:pc-mb-16",children:[c("h2",{className:"pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-6 lg:pc-text-3xl",children:l}),c("p",{className:"pc-mx-auto pc-max-w-screen-md pc-text-center pc-text-gray-500 md:pc-text-lg",children:d})]}),c("div",{className:"pc-grid pc-grid-cols-2 pc-gap-4 md:pc-grid-cols-3 lg:pc-grid-cols-4 lg:pc-gap-8",children:i?.map((e,r)=>p("div",{className:"pc-flex pc-flex-col pc-items-center pc-rounded-lg pc-bg-gray-100 pc-p-4 lg:pc-p-8",children:[c("div",{className:"pc-mb-2 pc-h-24 pc-w-24 pc-overflow-hidden pc-rounded-full pc-bg-gray-200 pc-shadow-lg md:pc-mb-4 md:pc-h-32 md:pc-w-32",children:c("img",{src:e?.image,loading:"lazy",className:"pc-h-full pc-w-full pc-object-cover pc-object-center"})}),p("div",{children:[c("div",{className:"pc-text-center pc-font-bold pc-text-indigo-500 md:pc-text-lg",children:e?.name}),c("p",{className:"pc-mb-3 pc-text-center pc-text-sm pc-text-gray-500 md:pc-mb-4 md:pc-text-base",children:e?.position}),c("div",{className:"pc-flex pc-justify-center",children:c("div",{className:"pc-flex pc-gap-4",children:e?.socials?.map((t,o)=>c("a",{href:m?void 0:t?.link,target:"_blank",rel:"noreferrer noopener",className:"pc-text-gray-400 pc-transition pc-duration-100 hover:pc-text-gray-500 active:pc-text-gray-600",children:t?.slug&&c(a,{icon:t.slug})},o))})})]})]},r))})]})})}export{g as a};
