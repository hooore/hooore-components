'use client'
"use strict";var l=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var i=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var f=(e,t)=>{for(var d in t)l(e,d,{get:t[d],enumerable:!0})},g=(e,t,d,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of i(t))!m.call(e,a)&&a!==d&&l(e,a,{get:()=>t[a],enumerable:!(n=u(t,a))||n.enumerable});return e};var h=e=>g(l({},"__esModule",{value:!0}),e);var s={};f(s,{default:()=>p});module.exports=h(s);var r=require("@tiptap/extension-image"),o=r.Image.extend({name:"image",addAttributes(){return{...this.parent?.(),width:{default:null},height:{default:null}}}}),p=o;
