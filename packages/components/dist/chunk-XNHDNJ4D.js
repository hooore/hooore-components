'use client'
import{cn as c}from"@hooore/utils";import{Slot as n}from"@radix-ui/react-slot";import{cva as s}from"class-variance-authority";import*as t from"react";import{jsx as u}from"react/jsx-runtime";var i=s("pc-inline-flex pc-items-center pc-gap-2 pc-whitespace-nowrap pc-rounded-full disabled:pc-cursor-not-allowed disabled:pc-opacity-50",{variants:{variant:{default:"pc-p-2 hover:pc-backdrop-brightness-0",cta:"pc-bg-[rgb(var(--foreground))] pc-text-[rgb(var(--background))] pc-px-16 pc-py-4 pc-text-cta pc-font-medium pc-shadow-[inset_0px_0px_0px_3px] pc-shadow-[rgb(var(--background))] sm:pc-px-16 sm:pc-py-4 sm:pc-text-2xl",outline:"pc-border-2 pc-border-[rgb(var(--foreground))] pc-px-4 pc-py-2 hover:pc-backdrop-brightness-0 ",link:"pc-p-2 pc-rounded-none"}},defaultVariants:{variant:"default"}}),d=t.forwardRef(({className:p,variant:o,asChild:r=!1,...a},e)=>u(r?n:"button",{className:c(i({variant:o,className:p})),ref:e,...a}));d.displayName="Button";export{i as a,d as b};
