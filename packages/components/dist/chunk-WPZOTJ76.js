import {jsx,jsxs}from'react/jsx-runtime';function a(s){let{headline:t,testimonials:l}=s;return jsx("section",{className:"pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12",children:jsxs("div",{className:"pc-mx-auto pc-max-w-screen-xl pc-px-4 md:pc-px-8",children:[t&&jsx("h2",{className:"pc-mb-8 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-12 lg:pc-text-3xl",children:t}),jsx("div",{className:"pc-grid pc-gap-y-10 sm:pc-grid-cols-2 sm:pc-gap-y-12 lg:pc-grid-cols-3 lg:pc-divide-x",children:l?.map((p,i)=>jsxs("div",{className:"pc-flex pc-flex-col pc-items-center pc-gap-4 sm:pc-px-4 md:pc-gap-6 lg:pc-px-8",children:[jsxs("div",{className:"pc-text-center pc-text-gray-600",children:['"',p?.description,'"']}),jsxs("div",{className:"pc-flex pc-flex-col pc-items-center pc-gap-2 sm:pc-flex-row md:pc-gap-3",children:[jsx("div",{className:"pc-h-12 pc-w-12 pc-overflow-hidden pc-rounded-full pc-bg-gray-100 pc-shadow-lg md:pc-h-14 md:pc-w-14",children:jsx("img",{src:p?.image,loading:"lazy",className:"pc-h-full pc-w-full pc-object-cover pc-object-center"})}),jsxs("div",{children:[jsx("div",{className:"pc-text-center pc-text-sm pc-font-bold pc-text-indigo-500 sm:pc-text-left md:pc-text-base",children:p?.name}),jsx("p",{className:"pc-text-center pc-text-sm pc-text-gray-500 sm:pc-text-left md:pc-text-sm",children:p?.position})]})]})]},i))})]})})}export{a};