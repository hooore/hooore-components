'use client'
"use client";import{useEffect as a,useState as i}from"react";function u(e,s){let[r,o]=i(s);return a(()=>{let t=window.localStorage.getItem(e);t&&o(JSON.parse(t))},[e]),[r,t=>{o(t),window.localStorage.setItem(e,JSON.stringify(t))}]}export{u as useLocalStorage};
