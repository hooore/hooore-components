import {jsxs,jsx}from'react/jsx-runtime';function m(s){let{tag:i,headline:n,description:d,cta_button_label:e,cta_link:r,steps:t,disableLink:o}=s;return jsxs("section",{className:"pc-mx-auto pc-px-4 pc-py-16 sm:pc-max-w-xl md:pc-max-w-full md:pc-px-24 lg:pc-max-w-screen-xl lg:pc-px-8 lg:pc-py-20",children:[jsxs("div",{className:"pc-mb-10 pc-max-w-xl sm:pc-text-center md:pc-mx-auto md:pc-mb-12 lg:pc-max-w-2xl",children:[jsx("div",{children:jsx("p",{className:"pc-mb-4 pc-inline-block pc-rounded-full pc-bg-teal-400 pc-px-3 pc-py-px pc-text-xs pc-font-semibold pc-uppercase pc-tracking-wider pc-text-teal-900",children:i})}),jsx("h2",{className:"pc-mb-6 pc-max-w-lg pc-font-sans pc-text-3xl pc-font-bold pc-leading-none pc-tracking-tight pc-text-gray-900 sm:pc-text-4xl md:pc-mx-auto",children:jsxs("span",{className:"pc-relative pc-inline-block",children:[jsxs("svg",{viewBox:"0 0 52 24",fill:"currentColor",className:"pc-absolute pc-left-0 pc-top-0 pc-z-0 -pc-ml-20 -pc-mt-8 pc-hidden pc-w-32 pc-text-gray-100 sm:pc-block lg:-pc-ml-28 lg:-pc-mt-10 lg:pc-w-32",children:[jsx("defs",{children:jsx("pattern",{id:"d0d83814-78b6-480f-9a5f-7f637616b267",x:"0",y:"0",width:".135",height:".30",children:jsx("circle",{cx:"1",cy:"1",r:".7"})})}),jsx("rect",{fill:"url(#d0d83814-78b6-480f-9a5f-7f637616b267)",width:"52",height:"24"})]}),n]})}),jsx("p",{className:"pc-text-base pc-text-gray-700 md:pc-text-lg",children:d})]}),t&&jsxs("div",{className:"row-gap-5 md:row-gap-8 pc-relative pc-mb-8 pc-grid pc-gap-8 sm:pc-grid-cols-2 lg:pc-grid-cols-4",children:[jsx("div",{className:"pc-absolute pc-inset-0 pc-flex pc-items-center pc-justify-center sm:pc-hidden lg:pc-flex",children:jsx("div",{className:"pc-h-full pc-w-px pc-bg-gray-300 lg:pc-h-px lg:pc-w-full"})}),t.map((l,a)=>jsxs("div",{className:"pc-transform pc-rounded pc-border pc-bg-white pc-p-5 pc-shadow-sm pc-duration-300 hover:-pc-translate-y-2",children:[jsxs("div",{className:"pc-mb-2 pc-flex pc-items-center pc-justify-between",children:[jsx("p",{className:"pc-text-lg pc-font-bold pc-leading-5",children:l?.label}),jsx("p",{className:"pc-flex pc-h-6 pc-w-6 pc-items-center pc-justify-center pc-rounded pc-bg-indigo-50 pc-font-bold pc-text-purple-400",children:a+1})]}),jsx("p",{className:"pc-text-sm pc-text-gray-900",children:l?.value})]},a))]}),e&&jsx("div",{className:"pc-text-center",children:jsx("a",{href:o?void 0:r,className:"focus:pc-shadow-outline pc-inline-flex pc-h-12 pc-w-full pc-items-center pc-justify-center pc-rounded pc-bg-purple-400 pc-px-6 pc-font-medium pc-tracking-wide pc-text-white pc-shadow-md pc-transition pc-duration-200 hover:pc-bg-purple-700 focus:pc-outline-none md:pc-w-auto",children:e})})]})}export{m as a};