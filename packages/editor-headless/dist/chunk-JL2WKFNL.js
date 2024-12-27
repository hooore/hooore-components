import {useCurrentEditor,isNodeSelection,BubbleMenu}from'@tiptap/react';import {forwardRef,useRef,useEffect,useMemo}from'react';import {jsx}from'react/jsx-runtime';var l=forwardRef(({children:i,tippyOptions:e,...o},c)=>{let{editor:n}=useCurrentEditor(),r=useRef(null);useEffect(()=>{!r.current||!e?.placement||(r.current.setProps({placement:e.placement}),r.current.popperInstance?.update());},[e?.placement]);let a=useMemo(()=>({shouldShow:({editor:t,state:d})=>{let{selection:u}=d,{empty:p}=u;return !(!t.isEditable||t.isActive("image")||p||isNodeSelection(u))},tippyOptions:{onCreate:t=>{r.current=t;},moveTransition:"transform 0.15s ease-out",...e},...o}),[o,e]);return n?jsx("div",{ref:c,children:jsx(BubbleMenu,{editor:n,...a,children:i})}):null});l.displayName="EditorBubble";var w=l;export{l as a,w as b};