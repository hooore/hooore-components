import {jsx,jsxs}from'react/jsx-runtime';function i(s){let{headline:l,collections:t,disableLink:a}=s;return jsx("section",{className:"pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12",children:jsxs("div",{className:"pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8",children:[l&&jsx("h2",{className:"pc-mb-8 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-12 lg:pc-text-3xl",children:l}),t&&jsx("div",{className:"pc-grid pc-gap-4 sm:pc-grid-cols-2 md:pc-gap-6 lg:pc-grid-cols-3 xl:pc-grid-cols-4",children:t.map((p,o)=>jsx("div",{children:jsxs("a",{href:a?void 0:p?.link,className:"pc-group pc-relative pc-flex pc-h-96 pc-items-end pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-p-4 pc-shadow-lg",children:[jsx("img",{src:p?.image,loading:"lazy",className:"group-hover:scale-110 pc-absolute pc-inset-0 pc-h-full pc-w-full pc-object-cover pc-object-center pc-transition pc-duration-200"}),jsxs("div",{className:"pc-relative pc-flex pc-w-full pc-flex-col pc-rounded-lg pc-bg-white pc-p-4 pc-text-center",children:[p?.tag&&jsx("span",{className:"pc-text-gray-500",children:p.tag}),p?.title&&jsx("span",{className:"pc-text-lg pc-font-bold pc-text-gray-800 lg:pc-text-xl",children:p.title})]})]})},o))})]})})}export{i as a};