import {a}from'../chunk-B5PXG66S.mjs';import {a as a$1,f as f$1}from'../chunk-ICPYQFMF.mjs';import {Command}from'cmdk';import*as d from'react';import {cn}from'@hooore/utils';import {jsx,jsxs}from'react/jsx-runtime';var s=d.forwardRef(({className:e,...t},i)=>jsx(Command,{ref:i,className:cn("editor-bg-popover editor-text-popover-foreground editor-flex editor-h-full editor-w-full editor-flex-col editor-overflow-hidden editor-rounded-md",e),...t}));s.displayName=Command.displayName;var P=({children:e,...t})=>jsx(a$1,{...t,children:jsx(f$1,{className:"editor-overflow-hidden editor-p-0 editor-shadow-lg",children:jsx(s,{className:"editor-[&_[cmdk-group-heading]]:editor-text-muted-foreground editor-[&_[cmdk-group-heading]]:editor-px-2 editor-[&_[cmdk-group-heading]]:editor-font-medium editor-[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:editor-pt-0 editor-[&_[cmdk-group]]:editor-px-2 editor-[&_[cmdk-input-wrapper]_svg]:editor-h-5 editor-[&_[cmdk-input-wrapper]_svg]:editor-w-5 editor-[&_[cmdk-input]]:editor-h-12 editor-[&_[cmdk-item]]:editor-px-2 editor-[&_[cmdk-item]]:editor-py-3 editor-[&_[cmdk-item]_svg]:editor-h-5 editor-[&_[cmdk-item]_svg]:editor-w-5",children:e})})}),c=d.forwardRef(({className:e,...t},i)=>jsxs("div",{className:"editor-flex editor-items-center editor-border-b editor-px-4","cmdk-input-wrapper":"",children:[jsx(a,{className:"editor-mr-2 editor-h-4 editor-w-4 editor-shrink-0 editor-text-purple-500"}),jsx(Command.Input,{ref:i,className:cn("placeholder:editor-text-muted-foreground editor-flex editor-h-11 editor-w-full editor-rounded-md editor-bg-transparent editor-py-3 editor-text-sm editor-outline-none disabled:editor-cursor-not-allowed disabled:editor-opacity-50",e),...t})]}));c.displayName=Command.Input.displayName;var l=d.forwardRef(({className:e,...t},i)=>jsx(Command.List,{ref:i,className:cn("editor-max-h-[300px] editor-overflow-y-auto editor-overflow-x-hidden",e),...t}));l.displayName=Command.List.displayName;var f=d.forwardRef((e,t)=>jsx(Command.Empty,{ref:t,className:"editor-py-6 editor-text-center editor-text-sm",...e}));f.displayName=Command.Empty.displayName;var u=d.forwardRef(({className:e,...t},i)=>jsx(Command.Group,{ref:i,className:cn("editor-text-foreground [&_[cmdk-group-heading]]:editor-text-muted-foreground editor-overflow-hidden editor-p-1 [&_[cmdk-group-heading]]:editor-px-2 [&_[cmdk-group-heading]]:editor-py-1.5 [&_[cmdk-group-heading]]:editor-text-xs [&_[cmdk-group-heading]]:editor-font-medium",e),...t}));u.displayName=Command.Group.displayName;var g=d.forwardRef(({className:e,...t},i)=>jsx(Command.Separator,{ref:i,className:cn("editor-bg-border -editor-mx-1 editor-h-px",e),...t}));g.displayName=Command.Separator.displayName;var R=d.forwardRef(({className:e,...t},i)=>jsx(Command.Item,{ref:i,className:cn("aria-selected:editor-bg-accent aria-selected:editor-text-accent-foreground editor-relative editor-flex editor-cursor-default editor-select-none editor-items-center editor-rounded-sm editor-px-2 editor-py-1.5 editor-text-sm editor-outline-none data-[disabled]:editor-pointer-events-none data-[disabled]:editor-opacity-50",e),...t}));R.displayName=Command.Item.displayName;var y=({className:e,...t})=>jsx("span",{className:cn("editor-text-muted-foreground editor-ml-auto editor-text-xs editor-tracking-widest",e),...t});y.displayName="CommandShortcut";export{s as Command,P as CommandDialog,f as CommandEmpty,u as CommandGroup,c as CommandInput,R as CommandItem,l as CommandList,g as CommandSeparator,y as CommandShortcut};