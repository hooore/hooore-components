'use client'
import{cn as d}from"@hooore/utils";import{jsx as p,jsxs as e}from"react/jsx-runtime";function g(i){let{headline:a,description:l,cta_button_label:s,cta_link:o,images:n,disableLink:r}=i;return p("section",{className:"pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12",children:e("div",{className:"pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8",children:[e("div",{className:"pc-mb-4 pc-flex pc-items-center pc-justify-between pc-gap-8 sm:pc-mb-8 md:pc-mb-12",children:[e("div",{className:"pc-flex pc-items-center pc-gap-12",children:[a&&p("h2",{className:"pc-text-2xl pc-font-bold pc-text-gray-800 lg:pc-text-3xl",children:a}),l&&p("p",{className:"pc-hidden pc-max-w-screen-sm pc-text-gray-500 md:pc-block",children:l})]}),s&&p("a",{href:r?void 0:o,className:"pc-inline-block pc-rounded-lg pc-border pc-bg-white pc-px-4 pc-py-2 pc-text-center pc-text-sm pc-font-semibold pc-text-gray-500 pc-outline-none pc-ring-indigo-300 pc-transition pc-duration-100 hover:pc-bg-gray-100 focus-visible:pc-ring active:pc-bg-gray-200 md:pc-px-8 md:pc-py-3 md:pc-text-base",children:s})]}),n&&p("div",{className:"pc-grid pc-grid-cols-2 pc-gap-4 sm:pc-grid-cols-3 md:pc-gap-6 xl:pc-gap-8",children:n.map((c,t)=>e("a",{href:r?void 0:c?.link,className:d("pc-group pc-relative pc-flex pc-h-48 pc-items-end pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-shadow-lg md:pc-h-80",(t%4===1||(t-2)%4===0)&&"md:pc-col-span-2"),children:[p("img",{src:c?.image,loading:"lazy",className:"pc-absolute pc-inset-0 pc-h-full pc-w-full pc-object-cover pc-object-center pc-transition pc-duration-200 group-hover:pc-scale-110"}),p("div",{className:"pc-pointer-events-none pc-absolute pc-inset-0 pc-bg-gradient-to-t pc-from-gray-800 pc-via-transparent pc-to-transparent pc-opacity-50"}),c?.tag&&p("span",{className:"pc-relative pc-mb-3 pc-ml-4 pc-inline-block pc-text-sm pc-text-white md:pc-ml-5 md:pc-text-lg",children:c.tag})]},t))})]})})}export{g as a};
