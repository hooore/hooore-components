'use client'
"use client";import{a as r}from"./chunk-XAQ3WWMO.js";import{a as s}from"./chunk-LKOXZ6SA.js";import{a as p}from"./chunk-J3KMLWZW.js";import{a}from"./chunk-R2A74EQJ.js";import{a as c,b as u}from"./chunk-TU4MTTMC.js";import{a as i}from"./chunk-VBTKXZBB.js";import{a as m}from"./chunk-MB6ESBZP.js";import{c as l}from"./chunk-ZYEHPB6B.js";import"./chunk-E5AYNL7Y.js";import"./chunk-XYRYXF2U.js";import{EditorBubble as y,EditorCommand as O,EditorCommandEmpty as k,EditorCommandItem as S,EditorCommandList as I,EditorContent as L,EditorRoot as P}from"@hooore/editor-headless/components";import{ImageResizer as R,handleCommandNavigation as A}from"@hooore/editor-headless/extensions";import{handleImageDrop as J,handleImagePaste as T}from"@hooore/editor-headless/plugins";import{useState as n}from"react";import{jsx as e,jsxs as d}from"react/jsx-runtime";var B=[...a,u],D=({initialValue:f,immediatelyRender:v,onChange:x})=>{let[C,g]=n(!1),[E,b]=n(!1),[h,w]=n(!1);return e(P,{children:d(L,{initialContent:f,extensions:B,immediatelyRender:v,className:"tailwind-advanced-editor editor-relative editor-w-full",editorProps:{handleDOMEvents:{keydown:(o,t)=>A(t)},handlePaste:(o,t)=>T(o,t,i),handleDrop:(o,t,z,N)=>J(o,t,N,i),attributes:{class:"editor-prose editor-prose-lg dark:editor-prose-invert prose-headings:editor-font-title editor-font-default focus:editor-outline-none editor-max-w-full"}},onUpdate:({editor:o})=>{x(o.getJSON())},slotAfter:e(R,{}),children:[d(O,{className:"editor-border-muted bg-background editor-z-50 editor-h-auto editor-max-h-[330px] editor-overflow-y-auto editor-rounded-md editor-border editor-px-1 editor-py-2 editor-shadow-md editor-transition-all",children:[e(k,{className:"editor-text-muted-foreground editor-px-2",children:"No results"}),e(I,{children:c.map(o=>d(S,{value:o.title,onCommand:t=>o?.command?.(t),className:"hover:editor-bg-accent aria-selected:editor-bg-accent editor-flex editor-w-full editor-items-center editor-space-x-2 editor-rounded-md editor-px-2 editor-py-1 editor-text-left editor-text-sm",children:[e("div",{className:"editor-border-muted bg-background editor-flex editor-h-10 editor-w-10 editor-items-center editor-justify-center editor-rounded-md editor-border",children:o.icon}),d("div",{children:[e("p",{className:"editor-font-medium",children:o.title}),e("p",{className:"editor-text-muted-foreground editor-text-xs",children:o.description})]})]},o.title))})]}),d(y,{tippyOptions:{placement:"top"},className:"editor-border-muted bg-background editor-flex editor-w-fit editor-max-w-[90vw] editor-overflow-hidden editor-rounded-md editor-border editor-shadow-xl",children:[e(r,{orientation:"vertical"}),e(s,{open:C,onOpenChange:g}),e(r,{orientation:"vertical"}),e(l,{open:h,onOpenChange:w}),e(r,{orientation:"vertical"}),e(p,{}),e(r,{orientation:"vertical"}),e(m,{open:E,onOpenChange:b})]})]})})},X=D;export{D as TailwindAdvancedEditor,X as default};
