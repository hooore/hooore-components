import*as e from'@radix-ui/react-accordion';import {MinusIcon,PlusIcon}from'@radix-ui/react-icons';import*as r from'react';import {cn}from'@hooore/utils';import {jsx,jsxs}from'react/jsx-runtime';var l=r.forwardRef(({className:o,...c},t)=>jsx(e.Root,{ref:t,className:cn("pc-w-full",o),...c}));l.displayName="Accordion";var R=r.forwardRef(({className:o,...c},t)=>jsx(e.Item,{ref:t,className:cn("pc-border-b",o),...c}));R.displayName="AccordionItem";var A=r.forwardRef((o,c)=>{let{className:t,children:a,closeIcon:p=jsx(MinusIcon,{className:"pc-h-4 pc-w-4 pc-shrink-0"}),openIcon:d=jsx(PlusIcon,{className:"pc-h-4 pc-w-4 pc-shrink-0"}),...m}=o;return jsx(e.Header,{className:"flex",children:jsxs(e.Trigger,{ref:c,className:cn("pc-flex pc-w-full pc-flex-1 pc-items-center pc-justify-between pc-py-6 pc-text-left pc-text-h4 pc-font-semibold pc-transition-all sm:pc-text-h4-sm [&[data-state=closed]>svg:nth-last-child(2)]:pc-hidden [&[data-state=open]>svg:last-child]:pc-hidden",t),...m,children:[a,p,d]})})});A.displayName=e.Trigger.displayName;var P=r.forwardRef(({className:o,children:c,...t},a)=>jsx(e.Content,{ref:a,className:cn("pc-overflow-hidden pc-pb-7 pc-pt-0 data-[state=closed]:pc-animate-accordion-up data-[state=open]:pc-animate-accordion-down",o),...t,children:c}));P.displayName=e.Content.displayName;export{l as a,R as b,A as c,P as d};