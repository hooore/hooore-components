'use client'
import{BubbleMenu as b,isNodeSelection as m,useCurrentEditor as f}from"@tiptap/react";import{forwardRef as B,useEffect as P,useMemo as E,useRef as M}from"react";import{jsx as s}from"react/jsx-runtime";var l=B(({children:i,tippyOptions:e,...o},c)=>{let{editor:n}=f(),r=M(null);P(()=>{!r.current||!e?.placement||(r.current.setProps({placement:e.placement}),r.current.popperInstance?.update())},[e?.placement]);let a=E(()=>({shouldShow:({editor:t,state:d})=>{let{selection:u}=d,{empty:p}=u;return!(!t.isEditable||t.isActive("image")||p||m(u))},tippyOptions:{onCreate:t=>{r.current=t},moveTransition:"transform 0.15s ease-out",...e},...o}),[o,e]);return n?s("div",{ref:c,children:s(b,{editor:n,...a,children:i})}):null});l.displayName="EditorBubble";var w=l;export{l as a,w as b};
