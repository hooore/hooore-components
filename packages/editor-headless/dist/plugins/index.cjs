'use strict';var state=require('@tiptap/pm/state'),view=require('@tiptap/pm/view');var l=new state.PluginKey("upload-image"),I=({imageClass:n})=>new state.Plugin({key:l,state:{init(){return view.DecorationSet.empty},apply(t,o){o=o.map(t.mapping,t.doc);let e=t.getMeta(this);if(e?.add){let{id:a,pos:c,src:i}=e.add,r=document.createElement("div");r.setAttribute("class","img-placeholder");let d=document.createElement("img");d.setAttribute("class",n),d.src=i,r.appendChild(d);let s=view.Decoration.widget(c+1,r,{id:a});o=o.add(t.doc,[s]);}else e?.remove&&(o=o.remove(o.find(void 0,void 0,a=>a.id==e.remove.id)));return o}},props:{decorations(t){return this.getState(t)}}});function E(n,t){let e=l.getState(n).find(void 0,void 0,a=>a.id==t);return e.length?e[0]?.from:null}var F=({validateFn:n,onUpload:t})=>(o,e,a)=>{if(!n?.(o))return;let i={},r=e.state.tr;r.selection.empty||r.deleteSelection();let d=new FileReader;d.readAsDataURL(o),d.onload=()=>{r.setMeta(l,{add:{id:i,pos:a,src:d.result}}),e.dispatch(r);},t(o).then(s=>{let{schema:f}=e.state,p=E(e.state,i);if(p==null)return;let u=typeof s=="object"?d.result:s,m=f.nodes.image?.create({src:u});if(!m)return;let g=e.state.tr.replaceWith(p,p,m).setMeta(l,{remove:{id:i}});e.dispatch(g);},()=>{let s=e.state.tr.delete(a,a).setMeta(l,{remove:{id:i}});e.dispatch(s);});},b=(n,t,o)=>{if(t.clipboardData?.files.length){t.preventDefault();let[e]=Array.from(t.clipboardData.files),a=n.state.selection.from;return e&&o(e,n,a),!0}return !1},P=(n,t,o,e)=>{if(!o&&t.dataTransfer?.files.length){t.preventDefault();let[a]=Array.from(t.dataTransfer.files),c=n.posAtCoords({left:t.clientX,top:t.clientY});return a&&e(a,n,c?.pos??-1),!0}return !1};exports.UploadImagesPlugin=I;exports.createImageUpload=F;exports.handleImageDrop=P;exports.handleImagePaste=b;