import {a}from'./chunk-CVQM4XUI.js';import {jsx,jsxs}from'react/jsx-runtime';function m(d){let{headline:t,description:s,features:i,disableLink:o=!1}=d;return jsx("section",{className:"pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12",children:jsxs("div",{className:"pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8",children:[jsxs("div",{className:"pc-mb-10 md:pc-mb-16",children:[t&&jsx("h2",{className:"pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-6 lg:pc-text-3xl",children:t}),s&&jsx("p",{className:"pc-mx-auto pc-max-w-screen-md pc-text-center pc-text-gray-500 md:pc-text-lg",children:s})]}),i&&jsx("div",{className:"pc-grid pc-gap-8 sm:pc-grid-cols-2 md:pc-gap-12 xl:pc-grid-cols-3 xl:pc-gap-16",children:i.map((p,l)=>jsxs("div",{className:"pc-flex pc-gap-4 md:pc-gap-6",children:[p?.icon&&jsx("div",{className:"pc-flex pc-h-12 pc-w-12 pc-shrink-0 pc-items-center pc-justify-center pc-rounded-lg pc-bg-indigo-500 pc-text-white pc-shadow-lg md:pc-h-14 md:pc-w-14 md:pc-rounded-xl",children:jsx(a,{icon:p.icon,className:"h-6 w-6"})}),jsxs("div",{children:[jsx("h3",{className:"pc-mb-2 pc-text-lg pc-font-semibold md:pc-text-xl",children:p?.headline}),jsx("p",{className:"pc-mb-2 pc-text-gray-500",children:p?.description}),p?.cta_button_label&&jsx("a",{href:o?void 0:p.cta_link,className:"pc-font-bold pc-text-indigo-500 pc-transition pc-duration-100 hover:pc-text-indigo-600 active:pc-text-indigo-700",children:p.cta_button_label})]})]},l))})]})})}export{m as a};