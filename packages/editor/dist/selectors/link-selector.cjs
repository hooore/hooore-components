'use strict';var components=require('@hooore/editor-headless/components'),utils=require('@hooore/utils'),d=require('@radix-ui/react-popover'),lucideReact=require('lucide-react'),f=require('react'),reactSlot=require('@radix-ui/react-slot'),classVarianceAuthority=require('class-variance-authority'),jsxRuntime=require('react/jsx-runtime');function _interopNamespace(e){if(e&&e.__esModule)return e;var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})}n.default=e;return Object.freeze(n)}var d__namespace=/*#__PURE__*/_interopNamespace(d);var f__namespace=/*#__PURE__*/_interopNamespace(f);var P=classVarianceAuthority.cva("editor-inline-flex editor-items-center editor-justify-center editor-whitespace-nowrap editor-rounded-md editor-text-sm editor-font-medium editor-ring-offset-background editor-transition-colors focus-visible:editor-outline-none focus-visible:editor-ring-2 focus-visible:editor-ring-ring focus-visible:editor-ring-offset-2 disabled:editor-pointer-events-none disabled:editor-opacity-50",{variants:{variant:{default:"editor-bg-primary editor-text-primary-foreground hover:editor-bg-primary/90",destructive:"editor-bg-destructive editor-text-destructive-foreground hover:editor-bg-destructive/90",outline:"editor-border editor-border-input editor-bg-background hover:editor-bg-accent hover:editor-text-accent-foreground",secondary:"editor-bg-secondary editor-text-secondary-foreground hover:editor-bg-secondary/80",ghost:"hover:editor-bg-accent hover:editor-text-accent-foreground",link:"editor-text-primary editor-underline-offset-4 hover:editor-underline"},size:{default:"editor-h-10 editor-px-4 editor-py-2",sm:"editor-h-9 editor-rounded-md editor-px-3",lg:"editor-h-11 editor-rounded-md editor-px-8",icon:"editor-h-10 editor-w-10"}},defaultVariants:{variant:"default",size:"default"}}),a=f__namespace.forwardRef(({className:e,variant:o,size:n,asChild:t=!1,...r},s)=>jsxRuntime.jsx(t?reactSlot.Slot:"button",{className:utils.cn(P({variant:o,size:n,className:e})),ref:s,...r}));a.displayName="Button";var l=f__namespace.forwardRef(({className:e,align:o="center",sideOffset:n=4,...t},r)=>jsxRuntime.jsx(d__namespace.Portal,{children:jsxRuntime.jsx(d__namespace.Content,{ref:r,align:o,sideOffset:n,className:utils.cn("editor-bg-popover editor-text-popover-foreground data-[state=open]:editor-animate-in data-[state=closed]:editor-animate-out data-[state=closed]:editor-fade-out-0 data-[state=open]:editor-fade-in-0 data-[state=closed]:editor-zoom-out-95 data-[state=open]:editor-zoom-in-95 data-[side=bottom]:editor-slide-in-from-top-2 data-[side=left]:editor-slide-in-from-right-2 data-[side=right]:editor-slide-in-from-left-2 data-[side=top]:editor-slide-in-from-bottom-2 editor-z-50 editor-w-72 editor-rounded-md editor-border editor-p-4 editor-shadow-md editor-outline-none",e),...t})}));l.displayName=d__namespace.Content.displayName;function z(e){try{return new URL(e),!0}catch{return !1}}function E(e){if(z(e))return e;try{if(e.includes(".")&&!e.includes(" "))return new URL(`https://${e}`).toString()}catch{return null}}var J=({open:e,onOpenChange:o})=>{let n=f.useRef(null),{editor:t}=components.useEditor();return f.useEffect(()=>{n.current?.focus();}),t?jsxRuntime.jsxs(d.Popover,{modal:!0,open:e,onOpenChange:o,children:[jsxRuntime.jsx(d.PopoverTrigger,{asChild:!0,children:jsxRuntime.jsxs(a,{size:"sm",variant:"ghost",className:"editor-gap-2 editor-rounded-none editor-border-none",children:[jsxRuntime.jsx("p",{className:"editor-text-base",children:"\u2197"}),jsxRuntime.jsx("p",{className:utils.cn("editor-underline editor-decoration-stone-400 editor-underline-offset-4",{"editor-text-blue-500":t.isActive("link")}),children:"Link"})]})}),jsxRuntime.jsx(l,{align:"start",className:"editor-w-60 editor-p-0",sideOffset:10,children:jsxRuntime.jsxs("form",{onSubmit:r=>{let s=r.currentTarget;r.preventDefault();let p=s[0],c=E(p.value);c&&(t.chain().focus().setLink({href:c}).run(),o(!1));},className:"editor-flex editor-p-1",children:[jsxRuntime.jsx("input",{ref:n,type:"text",placeholder:"Paste a link",className:"editor-bg-background editor-flex-1 editor-p-1 editor-text-sm editor-outline-none",defaultValue:t.getAttributes("link").href||""}),t.getAttributes("link").href?jsxRuntime.jsx(a,{size:"icon",variant:"outline",type:"button",className:"editor-flex editor-h-8 editor-items-center editor-rounded-sm editor-p-1 editor-text-red-600 editor-transition-all hover:editor-bg-red-100 dark:hover:editor-bg-red-800",onClick:()=>{t.chain().focus().unsetLink().run();let r=n.current;r&&(r.value=""),o(!1);},children:jsxRuntime.jsx(lucideReact.Trash,{className:"editor-h-4 editor-w-4"})}):jsxRuntime.jsx(a,{size:"icon",className:"editor-h-8",children:jsxRuntime.jsx(lucideReact.Check,{className:"editor-h-4 editor-w-4"})})]})})]}):null};
exports.LinkSelector=J;exports.getUrlFromString=E;exports.isValidUrl=z;