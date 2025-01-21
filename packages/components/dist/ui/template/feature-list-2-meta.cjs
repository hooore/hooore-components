'use strict';var utils=require('@hooore/utils'),reactIcons=require('@radix-ui/react-icons'),jsxRuntime=require('react/jsx-runtime');function d(l){let{description:s,features:t,headline:p,image:c,className:n,direction:f,footer:u}=l,m=f==="vertical",a=f==="horizontal";return jsxRuntime.jsxs("div",{className:utils.cn("pc-flex pc-w-full pc-rounded-lg",m&&"pc-flex-col",a&&"pc-flex-col sm:pc-flex-row",n),children:[c&&jsxRuntime.jsx("div",{className:"pc-flex pc-justify-center pc-bg-[rgba(2,12,13,0.2)]",children:jsxRuntime.jsx("img",{src:c,loading:"lazy",className:utils.cn("pc-flex pc-aspect-square pc-h-auto pc-items-center pc-justify-center",a&&"pc-h-80 pc-max-w-80 sm:pc-h-72 sm:pc-max-w-72")})}),jsxRuntime.jsxs("div",{className:utils.cn("pc-flex pc-h-full pc-w-full pc-flex-col pc-gap-4",m&&"pc-p-6",a&&"sm:pc-pl-12"),children:[jsxRuntime.jsxs("div",{className:"pc-flex pc-flex-1 pc-flex-col pc-gap-4",children:[p&&jsxRuntime.jsx("h3",{className:"pc-text-balance pc-text-center pc-text-h3 sm:pc-text-start sm:pc-text-h3-sm",children:p}),s&&jsxRuntime.jsx("p",{className:"pc-text-balance pc-text-center pc-text-p sm:pc-text-start sm:pc-text-p-sm",children:s}),t&&jsxRuntime.jsx("table",{className:utils.cn("pc-border-separate pc-border-spacing-2",a&&"pc-text-h4 sm:pc-text-h2",m&&"pc-text-h4"),children:jsxRuntime.jsx("tbody",{children:t.map((g,y)=>jsxRuntime.jsxs("tr",{children:[jsxRuntime.jsx("td",{className:"pc-w-[24px]",children:jsxRuntime.jsx(reactIcons.CheckCircledIcon,{width:24,height:24})}),jsxRuntime.jsx("td",{children:g?.name})]},y))})})]}),u]})]})}function x(l){let{background:s,images:t,features:p}=l;return jsxRuntime.jsx("section",{className:"pc-px-4 pc-py-10 sm:pc-px-20 sm:pc-py-20",children:jsxRuntime.jsx(d,{image:s,features:p,direction:"horizontal",footer:t&&jsxRuntime.jsx("div",{className:"pc-flex pc-flex-wrap pc-justify-center pc-gap-6 sm:pc-justify-start",children:t.map((c,n)=>jsxRuntime.jsx("img",{src:c?.image,loading:"lazy"},n))})})})}var w={slug:"features-list-2",component:x};exports.FEATURE_LIST_2_META=w;