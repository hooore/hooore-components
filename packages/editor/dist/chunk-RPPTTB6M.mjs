import {b as b$1}from'./chunk-K7ZUD423.mjs';import {a,b,c as c$1}from'./chunk-BBODAKFQ.mjs';import {useEditor,EditorBubbleItem}from'@hooore/editor-headless/components';import {ChevronDown,Check}from'lucide-react';import {jsxs,jsx}from'react/jsx-runtime';var c=[{name:"Default",color:"var(--novel-black)"},{name:"Purple",color:"#9333EA"},{name:"Red",color:"#E00000"},{name:"Yellow",color:"#EAB308"},{name:"Blue",color:"#2563EB"},{name:"Green",color:"#008A00"},{name:"Orange",color:"#FFA500"},{name:"Pink",color:"#BA4081"},{name:"Gray",color:"#A8A29E"}],v=[{name:"Default",color:"var(--novel-highlight-default)"},{name:"Purple",color:"var(--novel-highlight-purple)"},{name:"Red",color:"var(--novel-highlight-red)"},{name:"Yellow",color:"var(--novel-highlight-yellow)"},{name:"Blue",color:"var(--novel-highlight-blue)"},{name:"Green",color:"var(--novel-highlight-green)"},{name:"Orange",color:"var(--novel-highlight-orange)"},{name:"Pink",color:"var(--novel-highlight-pink)"},{name:"Gray",color:"var(--novel-highlight-gray)"}],N=({open:h,onOpenChange:l})=>{let{editor:r}=useEditor();if(!r)return null;let g=c.find(({color:e})=>r.isActive("textStyle",{color:e})),u=v.find(({color:e})=>r.isActive("highlight",{color:e}));return jsxs(a,{modal:!0,open:h,onOpenChange:l,children:[jsx(b,{asChild:!0,children:jsxs(b$1,{size:"sm",className:"editor-gap-2 editor-rounded-none",variant:"ghost",children:[jsx("span",{className:"editor-rounded-sm editor-px-1",style:{color:g?.color,backgroundColor:u?.color},children:"A"}),jsx(ChevronDown,{className:"editor-h-4 editor-w-4"})]})}),jsxs(c$1,{sideOffset:5,className:"editor-my-1 editor-flex editor-max-h-80 editor-w-48 editor-flex-col editor-overflow-hidden editor-overflow-y-auto editor-rounded editor-border editor-p-1 editor-shadow-xl",align:"start",children:[jsxs("div",{className:"editor-flex editor-flex-col",children:[jsx("div",{className:"text-muted-foreground editor-my-1 editor-px-2 editor-text-sm editor-font-semibold",children:"Color"}),c.map(({name:e,color:i})=>jsx(EditorBubbleItem,{onSelect:()=>{r.commands.unsetColor(),e!=="Default"&&r.chain().focus().setColor(i||"").run(),l(!1);},className:"hover:bg-accent editor-flex editor-cursor-pointer editor-items-center editor-justify-between editor-px-2 editor-py-1 editor-text-sm",children:jsxs("div",{className:"editor-flex editor-items-center editor-gap-2",children:[jsx("div",{className:"editor-rounded-sm editor-border editor-px-2 editor-py-px editor-font-medium",style:{color:i},children:"A"}),jsx("span",{children:e})]})},e))]}),jsxs("div",{children:[jsx("div",{className:"text-muted-foreground editor-my-1 editor-px-2 editor-text-sm editor-font-semibold",children:"Background"}),v.map(({name:e,color:i})=>jsxs(EditorBubbleItem,{onSelect:()=>{r.commands.unsetHighlight(),e!=="Default"&&r.chain().focus().setHighlight({color:i}).run(),l(!1);},className:"hover:bg-accent editor-flex editor-cursor-pointer editor-items-center editor-justify-between editor-px-2 editor-py-1 editor-text-sm",children:[jsxs("div",{className:"editor-flex editor-items-center editor-gap-2",children:[jsx("div",{className:"editor-rounded-sm editor-border editor-px-2 editor-py-px editor-font-medium",style:{backgroundColor:i},children:"A"}),jsx("span",{children:e})]}),r.isActive("highlight",{color:i})&&jsx(Check,{className:"editor-h-4 editor-w-4"})]},e))]})]})]})};export{N as a};