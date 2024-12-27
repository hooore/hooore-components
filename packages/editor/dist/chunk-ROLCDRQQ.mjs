import {createImageUpload}from'@hooore/editor-headless/plugins';import {toast}from'sonner';var m=e=>{let s=fetch("/api/upload",{method:"POST",headers:{"content-type":e?.type||"application/octet-stream","x-vercel-filename":e?.name||"image.png"},body:e});return new Promise((o,i)=>{toast.promise(s.then(async r=>{if(r.status===200){let{url:t}=await r.json(),n=new Image;n.src=t,n.onload=()=>{o(t);};}else throw r.status===401?(o(e),new Error("`BLOB_READ_WRITE_TOKEN` environment variable not found, reading image locally instead.")):new Error("Error uploading image. Please try again.")}),{loading:"Uploading image...",success:"Image uploaded successfully.",error:r=>(i(r),r.message)});})},c=createImageUpload({onUpload:m,validateFn:e=>e.type.includes("image/")?e.size/1024/1024>20?(toast.error("File size too big (max 20MB)."),!1):!0:(toast.error("File type not supported."),!1)});export{c as a};