'use strict';var react=require('react'),jsxRuntime=require('react/jsx-runtime');function o(r){let{image:c,headline:m,sub_headline:s,description:n,items:a}=r;return jsxRuntime.jsx("section",{className:"pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12",children:jsxRuntime.jsx("div",{className:"pc-mx-auto pc-max-w-screen-xl pc-px-4 md:pc-px-8",children:jsxRuntime.jsxs("div",{className:"pc-grid pc-gap-8 md:pc-grid-cols-2 lg:pc-gap-12",children:[c&&jsxRuntime.jsx("div",{children:jsxRuntime.jsx("div",{className:"pc-h-64 pc-overflow-hidden pc-rounded-lg pc-bg-gray-100 pc-shadow-lg md:pc-h-auto",children:jsxRuntime.jsx("img",{src:c,loading:"lazy",className:"pc-h-full pc-w-full pc-object-cover pc-object-center"})})}),jsxRuntime.jsxs("div",{className:"md:pc-pt-8",children:[s&&jsxRuntime.jsx("p",{className:"pc-text-center pc-font-bold pc-text-indigo-500 md:pc-text-left",children:"Who we are"}),m&&jsxRuntime.jsx("h1",{className:"pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 sm:pc-text-3xl md:pc-mb-6 md:pc-text-left",children:"Our competitive advantage"}),n&&jsxRuntime.jsx("p",{className:"pc-mb-6 pc-whitespace-pre-line pc-text-gray-500 sm:pc-text-lg md:pc-mb-8",children:n}),a?.map((t,l)=>jsxRuntime.jsxs(react.Fragment,{children:[t?.headline&&jsxRuntime.jsx("h2",{className:"pc-mb-2 pc-text-center pc-text-xl pc-font-semibold pc-text-gray-800 sm:pc-text-2xl md:pc-mb-4 md:pc-text-left",children:t.headline}),t?.description&&jsxRuntime.jsx("p",{className:"pc-mb-6 pc-whitespace-pre-line pc-text-gray-500 sm:pc-text-lg md:pc-mb-8",children:t.description})]},l))]})]})})})}var y={slug:"content-4",component:o};exports.CONTENT_4_META=y;