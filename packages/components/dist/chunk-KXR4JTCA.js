'use client'
import{jsx as p,jsxs as e}from"react/jsx-runtime";function r(a){let{headline:l,description:o,blog:s,disableLink:t}=a;return p("section",{className:"pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12",children:e("div",{className:"pc-mx-auto pc-max-w-screen-xl pc-px-4 md:pc-px-8",children:[e("div",{className:"pc-mb-10 md:pc-mb-16",children:[p("h2",{className:"pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-6 lg:pc-text-3xl",children:l}),p("p",{className:"pc-mx-auto pc-max-w-screen-md pc-text-center pc-text-gray-500 md:pc-text-lg",children:o})]}),p("div",{className:"pc-grid pc-gap-8 sm:pc-grid-cols-2 sm:pc-gap-12 lg:pc-grid-cols-2 xl:pc-grid-cols-2 xl:pc-gap-16",children:s?.map((c,i)=>e("div",{className:"pc-flex pc-flex-col pc-items-center pc-gap-4 md:pc-flex-row lg:pc-gap-6",children:[p("a",{href:t?void 0:c?.link,className:"pc-group pc-relative pc-block pc-h-56 pc-w-full pc-shrink-0 pc-self-start pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-shadow-lg md:pc-h-24 md:pc-w-24 lg:pc-h-40 lg:pc-w-40",children:p("img",{src:c?.image,loading:"lazy",className:"group-hover:scale-110 pc-absolute pc-inset-0 pc-h-full pc-w-full pc-object-cover pc-object-center pc-transition pc-duration-200"})}),e("div",{className:"pc-flex pc-flex-col pc-gap-2",children:[p("span",{className:"pc-text-sm pc-text-gray-400",children:c?.date}),p("h2",{className:"pc-text-xl pc-font-bold pc-text-gray-800",children:p("a",{href:t?void 0:c?.link,className:"pc-transition pc-duration-100 hover:pc-text-indigo-500 active:pc-text-indigo-600",children:c?.title})}),p("p",{className:"pc-text-gray-500",children:c?.description}),p("div",{children:p("a",{href:t?void 0:c?.link,className:"pc-font-semibold pc-text-indigo-500 pc-transition pc-duration-100 hover:pc-text-indigo-600 active:pc-text-indigo-700",children:"Read more"})})]})]},i))})]})})}export{r as a};
