'use strict';var jsxRuntime=require('react/jsx-runtime');function a(l){let{headline:c,contents:t}=l;return jsxRuntime.jsxs("section",{className:"pc-flex pc-h-full pc-w-full pc-flex-col pc-items-center pc-px-4 pc-py-10 sm:pc-flex-row sm:pc-items-start sm:pc-px-20 sm:pc-py-20",children:[c&&jsxRuntime.jsx("div",{className:"pc-flex pc-w-full pc-flex-col pc-gap-6 sm:pc-mr-12 sm:pc-w-fit",children:jsxRuntime.jsx("h2",{className:"pc-mb-6 pc-whitespace-pre-line pc-text-balance pc-text-center pc-text-h2 sm:pc-mb-0 sm:pc-text-left sm:pc-text-h2-sm",children:c})}),t&&jsxRuntime.jsx("div",{className:"pc-flex pc-h-full pc-flex-col pc-items-center pc-gap-10 sm:pc-items-start sm:pc-pt-40",children:jsxRuntime.jsx("div",{className:"pc-flex pc-flex-col pc-overflow-hidden pc-rounded-lg pc-border sm:pc-flex-row",children:t.map((p,r)=>jsxRuntime.jsxs("div",{className:"pc-flex pc-w-full pc-flex-1 pc-flex-col pc-gap-6 pc-border-b pc-p-6 last:pc-border-b-0 sm:pc-aspect-square sm:pc-gap-10 sm:pc-border-b-0 sm:pc-border-r sm:last:pc-border-b-0 sm:last:pc-border-r-0",children:[p?.headline&&jsxRuntime.jsx("h3",{className:"pc-text-balance pc-text-center pc-text-h2 sm:pc-text-start sm:pc-text-h2-sm",children:p.headline}),p?.description&&jsxRuntime.jsx("p",{className:"pc-text-balance pc-text-center pc-text-p sm:pc-text-start sm:pc-text-p-sm",children:p.description})]},r))})})]})}exports.Content2=a;