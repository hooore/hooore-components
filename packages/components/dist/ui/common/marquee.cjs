'use strict';var utils=require('@hooore/utils'),react=require('react'),jsxRuntime=require('react/jsx-runtime');function s({children:e,className:o,width:u,disabled:a=!1}){let l=react.Children.count(e);return jsxRuntime.jsx("ul",{style:{"--marquee-duration":"10s","--marquee-item-quantity":l,"--marquee-item-width":u},className:utils.cn("pc-relative pc-me-auto pc-ms-auto pc-h-full",a?"pc-flex pc-overflow-x-scroll":"pc-w-full pc-overflow-hidden",o),children:react.Children.map(e,(c,t)=>jsxRuntime.jsx("li",{style:{"--marquee-item-position":t+1,animationDuration:"var(--marquee-duration)",animationDelay:"calc(var(--marquee-duration) / var(--marquee-item-quantity) * (var(--marquee-item-quantity) - var(--marquee-item-position)) * -1)"},className:utils.cn("pc-h-full",a?"pc-min-w-[var(--marquee-item-width)]":"pc-absolute pc-left-[max(calc(var(--marquee-item-width)*var(--marquee-item-quantity)),100%)] pc-w-[var(--marquee-item-width)] pc-animate-[scroll-left] pc-ease-linear pc-repeat-infinite"),children:c},t))})}exports.Marquee=s;