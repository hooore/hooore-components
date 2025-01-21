'use strict';var r=require('@radix-ui/react-accordion'),reactIcons=require('@radix-ui/react-icons'),m=require('react'),utils=require('@hooore/utils'),jsxRuntime=require('react/jsx-runtime');function _interopNamespace(e){if(e&&e.__esModule)return e;var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})}n.default=e;return Object.freeze(n)}var r__namespace=/*#__PURE__*/_interopNamespace(r);var m__namespace=/*#__PURE__*/_interopNamespace(m);var f=m__namespace.forwardRef(({className:e,...t},c)=>jsxRuntime.jsx(r__namespace.Root,{ref:c,className:utils.cn("pc-w-full",e),...t}));f.displayName="Accordion";var h=m__namespace.forwardRef(({className:e,...t},c)=>jsxRuntime.jsx(r__namespace.Item,{ref:c,className:utils.cn("pc-border-b",e),...t}));h.displayName="AccordionItem";var u=m__namespace.forwardRef((e,t)=>{let{className:c,children:o,closeIcon:n=jsxRuntime.jsx(reactIcons.MinusIcon,{className:"pc-h-4 pc-w-4 pc-shrink-0"}),openIcon:p=jsxRuntime.jsx(reactIcons.PlusIcon,{className:"pc-h-4 pc-w-4 pc-shrink-0"}),...a}=e;return jsxRuntime.jsx(r__namespace.Header,{className:"flex",children:jsxRuntime.jsxs(r__namespace.Trigger,{ref:t,className:utils.cn("pc-flex pc-w-full pc-flex-1 pc-items-center pc-justify-between pc-py-6 pc-text-left pc-text-h4 pc-font-semibold pc-transition-all sm:pc-text-h4-sm [&[data-state=closed]>svg:nth-last-child(2)]:pc-hidden [&[data-state=open]>svg:last-child]:pc-hidden",c),...a,children:[o,n,p]})})});u.displayName=r__namespace.Trigger.displayName;var g=m__namespace.forwardRef(({className:e,children:t,...c},o)=>jsxRuntime.jsx(r__namespace.Content,{ref:o,className:utils.cn("pc-overflow-hidden pc-pb-7 pc-pt-0 data-[state=closed]:pc-animate-accordion-up data-[state=open]:pc-animate-accordion-down",e),...c,children:t}));g.displayName=r__namespace.Content.displayName;function w(e){if(e?.startsWith("[href=")){let[t,c]=e.replace("[href=","").split("](");return [t,c?.replace(")","")]}return []}function v(e){let{as:t="a",className:c,children:o,autoConvert:n=!1,href:p,...a}=e,[P,y]=n?w(o):[],x=n?P:p;return x?jsxRuntime.jsx(t,{className:utils.cn("pc-underline pc-underline-offset-4",c),href:x,...a,children:n?y:o}):o}function A({children:e,className:t}){return e?.split(" ").map((c,o)=>jsxRuntime.jsxs(m.Fragment,{children:[jsxRuntime.jsx(v,{autoConvert:!0,className:t,children:c})," "]},o))}function R({children:e}){return jsxRuntime.jsx("span",{className:utils.cn("pc-w-fit pc-rounded-full pc-border-2 pc-border-[rgb(var(--foreground))] pc-px-4 pc-py-1 pc-text-chip","pc-bg-[linear-gradient(rgb(var(--foreground))_0_0)] pc-bg-[length:100%_var(--d,0)] pc-bg-bottom pc-bg-no-repeat pc-transition-[background-size] pc-duration-300 hover:pc-text-[rgb(var(--background))] hover:[--d:100%]"),children:e})}function Z(e){let{caption:t,faq:c,headline:o,tag:n}=e;return jsxRuntime.jsxs("section",{className:"pc-flex pc-h-fit pc-w-full pc-flex-col pc-items-center pc-px-4 pc-py-10 sm:pc-flex-row sm:pc-items-start sm:pc-px-20 sm:pc-py-20",children:[(n||o)&&jsxRuntime.jsxs("div",{className:"pc-flex pc-w-full pc-flex-1 pc-flex-col pc-gap-6 sm:pc-mr-12 sm:pc-w-fit",children:[n&&jsxRuntime.jsx("div",{className:"pc-flex pc-justify-center pc-gap-1 sm:pc-justify-start",children:jsxRuntime.jsx(R,{children:n})}),o&&jsxRuntime.jsx("h2",{className:"pc-whitespace-pre-line pc-text-balance pc-text-center pc-text-h2 sm:pc-text-left sm:pc-text-h2-sm",children:o})]}),(c||t)&&jsxRuntime.jsxs("div",{className:"pc-flex pc-h-full pc-flex-1 pc-flex-col pc-items-center pc-gap-10 sm:pc-items-start",children:[c&&jsxRuntime.jsx(f,{type:"single",collapsible:!0,children:c.map((p,a)=>jsxRuntime.jsxs(h,{value:a.toString(),children:[jsxRuntime.jsx(u,{children:p?.question}),jsxRuntime.jsx(g,{children:jsxRuntime.jsx("div",{className:"pc-mb-6 last:pc-mb-0",children:jsxRuntime.jsx("p",{className:"pc-whitespace-pre-line pc-text-balance pc-text-p sm:pc-text-p-sm",children:jsxRuntime.jsx(A,{children:p?.answer})})})})]},a))}),t&&jsxRuntime.jsx("p",{className:"pc-text-center pc-text-p sm:pc-text-p-sm",children:t})]})]})}exports.Faq1=Z;