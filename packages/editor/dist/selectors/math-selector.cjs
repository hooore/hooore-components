'use strict';var components=require('@hooore/editor-headless/components'),utils=require('@hooore/utils'),lucideReact=require('lucide-react'),reactSlot=require('@radix-ui/react-slot'),classVarianceAuthority=require('class-variance-authority'),d=require('react'),jsxRuntime=require('react/jsx-runtime');function _interopNamespace(e){if(e&&e.__esModule)return e;var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})}n.default=e;return Object.freeze(n)}var d__namespace=/*#__PURE__*/_interopNamespace(d);var m=classVarianceAuthority.cva("editor-inline-flex editor-items-center editor-justify-center editor-whitespace-nowrap editor-rounded-md editor-text-sm editor-font-medium editor-ring-offset-background editor-transition-colors focus-visible:editor-outline-none focus-visible:editor-ring-2 focus-visible:editor-ring-ring focus-visible:editor-ring-offset-2 disabled:editor-pointer-events-none disabled:editor-opacity-50",{variants:{variant:{default:"editor-bg-primary editor-text-primary-foreground hover:editor-bg-primary/90",destructive:"editor-bg-destructive editor-text-destructive-foreground hover:editor-bg-destructive/90",outline:"editor-border editor-border-input editor-bg-background hover:editor-bg-accent hover:editor-text-accent-foreground",secondary:"editor-bg-secondary editor-text-secondary-foreground hover:editor-bg-secondary/80",ghost:"hover:editor-bg-accent hover:editor-text-accent-foreground",link:"editor-text-primary editor-underline-offset-4 hover:editor-underline"},size:{default:"editor-h-10 editor-px-4 editor-py-2",sm:"editor-h-9 editor-rounded-md editor-px-3",lg:"editor-h-11 editor-rounded-md editor-px-8",icon:"editor-h-10 editor-w-10"}},defaultVariants:{variant:"default",size:"default"}}),i=d__namespace.forwardRef(({className:t,variant:o,size:r,asChild:e=!1,...s},a)=>jsxRuntime.jsx(e?reactSlot.Slot:"button",{className:utils.cn(m({variant:o,size:r,className:t})),ref:a,...s}));i.displayName="Button";var C=()=>{let{editor:t}=components.useEditor();return t?jsxRuntime.jsx(i,{variant:"ghost",size:"sm",className:"editor-w-12 editor-rounded-none",onClick:()=>{if(t.isActive("math"))t.chain().focus().unsetLatex().run();else {let{from:o,to:r}=t.state.selection,e=t.state.doc.textBetween(o,r);if(!e)return;t.chain().focus().setLatex({latex:e}).run();}},children:jsxRuntime.jsx(lucideReact.SigmaIcon,{className:utils.cn("editor-size-4",{"editor-text-blue-500":t.isActive("math")}),strokeWidth:2.3})}):null};exports.MathSelector=C;