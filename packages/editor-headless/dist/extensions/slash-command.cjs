'use strict';var core=require('@tiptap/core'),react$1=require('@tiptap/react'),O=require('@tiptap/suggestion'),k=require('tippy.js'),cmdk=require('cmdk'),jotai=require('jotai'),react=require('react'),jsxRuntime=require('react/jsx-runtime');function _interopDefault(e){return e&&e.__esModule?e:{default:e}}var O__default=/*#__PURE__*/_interopDefault(O);var k__default=/*#__PURE__*/_interopDefault(k);var c=jotai.atom(""),y=jotai.atom(null);var d=jotai.createStore();var g=react.createContext({}),C=({query:t,range:o})=>{let n=jotai.useSetAtom(c,{store:d}),e=jotai.useSetAtom(y,{store:d});return react.useEffect(()=>{n(t);},[t,n]),react.useEffect(()=>{e(o);},[o,e]),react.useEffect(()=>{let r=["ArrowUp","ArrowDown","Enter"],a=m=>{if(r.includes(m.key)){m.preventDefault();let s=document.querySelector("#slash-command");return s&&s.dispatchEvent(new KeyboardEvent("keydown",{key:m.key,cancelable:!0,bubbles:!0})),!1}};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a);}},[]),jsxRuntime.jsx(g.Consumer,{children:r=>jsxRuntime.jsx(r.Out,{})})},w=react.forwardRef(({children:t,className:o,...n},e)=>{let[r,a]=jotai.useAtom(c);return jsxRuntime.jsx(g.Consumer,{children:m=>jsxRuntime.jsx(m.In,{children:jsxRuntime.jsxs(cmdk.Command,{ref:e,onKeyDown:s=>{s.stopPropagation();},id:"slash-command",className:o,...n,children:[jsxRuntime.jsx(cmdk.Command.Input,{value:r,onValueChange:a,style:{display:"none"}}),t]})})})});cmdk.Command.List;w.displayName="EditorCommand";var B=core.Extension.create({name:"slash-command",addOptions(){return {suggestion:{char:"/",command:({editor:t,range:o,props:n})=>{n.command({editor:t,range:o});}}}},addProseMirrorPlugins(){return [O__default.default({editor:this.editor,...this.options.suggestion})]}}),H=t=>{let o=null,n=null;return {onStart:e=>{o=new react$1.ReactRenderer(C,{props:e,editor:e.editor});let{selection:r}=e.editor.state;if(r.$from.node(r.$from.depth).type.name==="codeBlock")return !1;n=k__default.default("body",{getReferenceClientRect:e.clientRect,appendTo:()=>t?t.current:document.body,content:o.element,showOnCreate:!0,interactive:!0,trigger:"manual",placement:"bottom-start"});},onUpdate:e=>{o?.updateProps(e),n?.[0]?.setProps({getReferenceClientRect:e.clientRect});},onKeyDown:e=>e.event.key==="Escape"?(n?.[0]?.hide(),!0):o?.ref?.onKeyDown(e),onExit:()=>{n?.[0]?.destroy(),o?.destroy();}}},V=t=>t,z=t=>{if(["ArrowUp","ArrowDown","Enter"].includes(t.key)&&document.querySelector("#slash-command"))return !0};exports.Command=B;exports.createSuggestionItems=V;exports.handleCommandNavigation=z;exports.renderItems=H;