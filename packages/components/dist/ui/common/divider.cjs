'use strict';var utils=require('@hooore/utils'),jsxRuntime=require('react/jsx-runtime');function s({height:e=2,subtle:r=!1,className:o}){return jsxRuntime.jsx("span",{style:{height:r?"1px":`${e}px`},className:utils.cn("pc-block pc-w-full",r?"pc-bg-[rgb(var(--foreground))]/50":"pc-bg-[rgb(var(--foreground))]",o)})}exports.Divider=s;