import {b}from'./chunk-SM4SOJMX.js';import {useCurrentEditor}from'@tiptap/react';import {CommandItem,CommandEmpty}from'cmdk';import {useAtomValue}from'jotai';import {forwardRef}from'react';import {jsx}from'react/jsx-runtime';var r=forwardRef(({children:e,onCommand:n,...d},i)=>{let{editor:o}=useCurrentEditor(),t=useAtomValue(b);return !o||!t?null:jsx(CommandItem,{ref:i,...d,onSelect:()=>n({editor:o,range:t}),children:e})});r.displayName="EditorCommandItem";var g=CommandEmpty,R=r;export{r as a,g as b,R as c};