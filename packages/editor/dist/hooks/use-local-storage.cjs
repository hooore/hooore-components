'use client'
"use strict";"use client";var n=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var c=Object.prototype.hasOwnProperty;var S=(t,e)=>{for(var o in e)n(t,o,{get:e[o],enumerable:!0})},f=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of u(e))!c.call(t,s)&&s!==o&&n(t,s,{get:()=>e[s],enumerable:!(r=l(e,s))||r.enumerable});return t};var g=t=>f(n({},"__esModule",{value:!0}),t);var m={};S(m,{useLocalStorage:()=>d});module.exports=g(m);var i=require("react");function d(t,e){let[o,r]=(0,i.useState)(e);return(0,i.useEffect)(()=>{let a=window.localStorage.getItem(t);a&&r(JSON.parse(a))},[t]),[o,a=>{r(a),window.localStorage.setItem(t,JSON.stringify(a))}]}0&&(module.exports={useLocalStorage});
