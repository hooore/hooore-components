import {Extension}from'@tiptap/core';var a=Extension.create({name:"CustomKeymap",addCommands(){return {selectTextWithinNodeBoundaries:()=>({editor:t,commands:n})=>{let{state:e}=t,{tr:o}=e,s=o.selection.$from.start(),r=o.selection.$to.end();return n.setTextSelection({from:s,to:r})}}},addKeyboardShortcuts(){return {"Mod-a":({editor:t})=>{let{state:n}=t,{tr:e}=n,o=e.selection.from,s=e.selection.to,r=e.selection.$from.start(),c=e.selection.$to.end();return o>r||s<c?(t.chain().selectTextWithinNodeBoundaries().run(),!0):!1}}}}),l=a;export{l as a};