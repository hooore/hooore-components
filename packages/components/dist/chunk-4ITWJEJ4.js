'use client'
import{jsx as e,jsxs as c}from"react/jsx-runtime";function n(o){let{description:s,cta_button_label:p,cta_link:i,images:t,disableLink:a}=o;return e("section",{children:c("div",{className:"pc-mx-auto pc-px-5 pc-py-24 lg:pc-px-16",children:[e("div",{className:"pc-mb-8 pc-flex pc-w-full pc-flex-col pc-text-center",children:c("span",{className:"pc-mb-4 pc-text-sm pc-font-medium pc-uppercase pc-tracking-wide pc-text-gray-500",children:[s,p&&e("a",{href:a?void 0:i,className:"pc-font-semibold pc-text-blue-600 hover:pc-text-blue-500 lg:pc-mb-0",children:p})]})}),e("div",{className:"pc-mx-auto pc-text-center",children:t&&e("div",{className:"pc-mx-auto pc-grid pc-grid-cols-5 pc-gap-4 lg:pc-grid-cols-5",children:t.map((r,l)=>e("div",{children:e("img",{className:"pc-mx-auto pc-h-4 lg:pc-h-12",src:r?.image})},l))})})]})})}export{n as a};
