import {jsx,jsxs}from'react/jsx-runtime';function r(o){let{description:s,cta_button_label:p,cta_link:i,images:c,disableLink:a}=o;return jsx("section",{children:jsxs("div",{className:"pc-mx-auto pc-px-5 pc-py-24 lg:pc-px-16",children:[jsx("div",{className:"pc-mb-8 pc-flex pc-w-full pc-flex-col pc-text-center",children:jsxs("span",{className:"pc-mb-4 pc-text-sm pc-font-medium pc-uppercase pc-tracking-wide pc-text-gray-500",children:[s,p&&jsx("a",{href:a?void 0:i,className:"pc-font-semibold pc-text-blue-600 hover:pc-text-blue-500 lg:pc-mb-0",children:p})]})}),jsx("div",{className:"pc-mx-auto pc-text-center",children:c&&jsx("div",{className:"pc-mx-auto pc-grid pc-grid-cols-5 pc-gap-4 lg:pc-grid-cols-5",children:c.map((l,n)=>jsx("div",{children:jsx("img",{className:"pc-mx-auto pc-h-4 lg:pc-h-12",src:l?.image})},n))})})]})})}export{r as a};