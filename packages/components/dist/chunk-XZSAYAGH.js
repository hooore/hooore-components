import {jsxs,jsx}from'react/jsx-runtime';function r(i){let{tag:p,headline:o,description:t,steps:l}=i;return jsxs("section",{className:"pc-mx-auto pc-px-4 pc-py-16 sm:pc-max-w-xl md:pc-max-w-full md:pc-px-24 lg:pc-max-w-screen-xl lg:pc-px-8 lg:pc-py-20",children:[jsxs("div",{className:"pc-mb-10 pc-max-w-xl sm:pc-text-center md:pc-mx-auto md:pc-mb-12 lg:pc-max-w-2xl",children:[p&&jsx("div",{children:jsx("p",{className:"pc-mb-4 pc-inline-block pc-rounded-full pc-bg-teal-400 pc-px-3 pc-py-px pc-text-xs pc-font-semibold pc-uppercase pc-tracking-wider pc-text-teal-900",children:p})}),jsx("h2",{className:"pc-mb-6 pc-max-w-lg pc-font-sans pc-text-3xl pc-font-bold pc-leading-none pc-tracking-tight pc-text-gray-900 sm:pc-text-4xl md:pc-mx-auto",children:jsxs("span",{className:"pc-relative pc-inline-block",children:[jsxs("svg",{viewBox:"0 0 52 24",fill:"currentColor",className:"pc-absolute pc-left-0 pc-top-0 pc-z-0 -pc-ml-20 -pc-mt-8 pc-hidden pc-w-32 pc-text-gray-100 sm:pc-block lg:-pc-ml-28 lg:-pc-mt-10 lg:pc-w-32",children:[jsx("defs",{children:jsx("pattern",{id:"b902cd03-49cc-4166-a0ae-4ca1c31cedba",x:"0",y:"0",width:".135",height:".30",children:jsx("circle",{cx:"1",cy:"1",r:".7"})})}),jsx("rect",{fill:"url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)",width:"52",height:"24"})]}),o]})}),t&&jsx("p",{className:"pc-text-base pc-text-gray-700 md:pc-text-lg",children:t})]}),jsx("div",{className:"pc-grid pc-gap-10 sm:pc-grid-cols-2 lg:pc-grid-cols-4",children:l?.map((s,a)=>jsxs("div",{children:[jsxs("div",{className:"pc-mb-6 pc-flex pc-items-center pc-justify-between",children:[jsx("p",{className:"pc-text-2xl pc-font-bold",children:s?.label}),a<l.length-1?jsxs("svg",{className:"pc-w-6 pc-rotate-90 pc-transform pc-text-gray-700 sm:pc-rotate-0",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[jsx("line",{fill:"none",strokeMiterlimit:"10",x1:"2",y1:"12",x2:"22",y2:"12"}),jsx("polyline",{fill:"none",strokeMiterlimit:"10",points:"15,5 22,12 15,19 "})]}):jsx("svg",{className:"pc-w-8 pc-text-gray-600",stroke:"currentColor",viewBox:"0 0 24 24",children:jsx("polyline",{fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",points:"6,12 10,16 18,8"})})]}),jsx("p",{className:"pc-text-gray-600",children:s?.value})]},a))})]})}export{r as a};