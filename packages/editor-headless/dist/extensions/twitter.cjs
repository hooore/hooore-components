'use client'
"use strict";var a=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var R=(t,e)=>{for(var r in e)a(t,r,{get:e[r],enumerable:!0})},g=(t,e,r,d)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of T(e))!m.call(t,i)&&i!==r&&a(t,i,{get:()=>e[i],enumerable:!(d=c(e,i))||d.enumerable});return t};var f=t=>g(a({},"__esModule",{value:!0}),t);var A={};R(A,{TWITTER_REGEX:()=>l,TWITTER_REGEX_GLOBAL:()=>u,Twitter:()=>h,isValidTwitterUrl:()=>w});module.exports=f(A);var n=require("@tiptap/core"),o=require("@tiptap/react"),p=require("react-tweet"),s=require("react/jsx-runtime"),u=/(https?:\/\/)?(www\.)?x\.com\/([a-zA-Z0-9_]{1,15})(\/status\/(\d+))?(\/\S*)?/g,l=/^https?:\/\/(www\.)?x\.com\/([a-zA-Z0-9_]{1,15})(\/status\/(\d+))?(\/\S*)?$/,w=t=>t.match(l),b=({node:t})=>{let r=t?.attrs?.src?.split("/").pop();return r?(0,s.jsx)(o.NodeViewWrapper,{children:(0,s.jsx)("div",{"data-twitter":"",children:(0,s.jsx)(p.Tweet,{id:r})})}):null},h=n.Node.create({name:"twitter",addOptions(){return{addPasteHandler:!0,HTMLAttributes:{},inline:!1,origin:""}},addNodeView(){return(0,o.ReactNodeViewRenderer)(b,{attrs:this.options.HTMLAttributes})},inline(){return this.options.inline},group(){return this.options.inline?"inline":"block"},draggable:!0,addAttributes(){return{src:{default:null}}},parseHTML(){return[{tag:"div[data-twitter]"}]},addCommands(){return{setTweet:t=>({commands:e})=>w(t.src)?e.insertContent({type:this.name,attrs:t}):!1}},addPasteRules(){return this.options.addPasteHandler?[(0,n.nodePasteRule)({find:u,type:this.type,getAttributes:t=>({src:t.input})})]:[]},renderHTML({HTMLAttributes:t}){return["div",(0,n.mergeAttributes)({"data-twitter":""},t)]}});0&&(module.exports={TWITTER_REGEX,TWITTER_REGEX_GLOBAL,Twitter,isValidTwitterUrl});
