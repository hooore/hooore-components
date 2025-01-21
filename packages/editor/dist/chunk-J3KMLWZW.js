import {b}from'./chunk-E5AYNL7Y.js';import {useEditor,EditorBubbleItem}from'@hooore/editor-headless/components';import {cn}from'@hooore/utils';import {BoldIcon,ItalicIcon,UnderlineIcon,StrikethroughIcon,CodeIcon}from'lucide-react';import {jsx}from'react/jsx-runtime';var h=()=>{let{editor:t}=useEditor();return t?jsx("div",{className:"editor-flex",children:[{name:"bold",isActive:e=>{if(e)return e.isActive("bold")},command:e=>{if(e)return e.chain().focus().toggleBold().run()},icon:BoldIcon},{name:"italic",isActive:e=>{if(e)return e.isActive("italic")},command:e=>{if(e)return e.chain().focus().toggleItalic().run()},icon:ItalicIcon},{name:"underline",isActive:e=>{if(e)return e.isActive("underline")},command:e=>{if(e)return e.chain().focus().toggleUnderline().run()},icon:UnderlineIcon},{name:"strike",isActive:e=>{if(e)return e.isActive("strike")},command:e=>{if(e)return e.chain().focus().toggleStrike().run()},icon:StrikethroughIcon},{name:"code",isActive:e=>{if(e)return e.isActive("code")},command:e=>{if(e)return e.chain().focus().toggleCode().run()},icon:CodeIcon}].map(e=>jsx(EditorBubbleItem,{onSelect:i=>{e.command(i);},children:jsx(b,{size:"sm",className:"editor-rounded-none",variant:"ghost",children:jsx(e.icon,{className:cn("editor-h-4 editor-w-4",{"editor-text-blue-500":e.isActive(t)})})})},e.name))}):null};export{h as a};