'use client'
import{forwardRef as p}from"react";import{Slot as l}from"@radix-ui/react-slot";import{useCurrentEditor as a}from"@tiptap/react";import{jsx as f}from"react/jsx-runtime";var t=p(({children:e,asChild:r,onSelect:i,...d},m)=>{let{editor:o}=a(),n=r?l:"div";return o?f(n,{ref:m,...d,onClick:()=>i?.(o),children:e}):null});t.displayName="EditorBubbleItem";var s=t;export{t as a,s as b};
