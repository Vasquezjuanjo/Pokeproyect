import e from"react";import i from"../lib/assert.js";import{s as o}from"../style-inject.es-1f59c1d0.js";var a="Ripples-module_container__GMgBp",p="Ripples-module_dot__fancY";function l(o){var l=o.size,s=void 0===l?45:l,r=o.color,t=void 0===r?"black":r,n=o.speed,d=void 0===n?2:n;return i("Ripples","size",s,"number"),i("Ripples","color",t,"string"),i("Ripples","speed",d,"number"),e.createElement("div",{className:a,style:{"--uib-size":s+"px","--uib-color":t,"--uib-speed":d+"s"}},e.createElement("div",{className:p}))}o('.Ripples-module_container__GMgBp{height:var(--uib-size);position:relative;width:var(--uib-size)}.Ripples-module_container__GMgBp:after,.Ripples-module_container__GMgBp:before,.Ripples-module_dot__fancY:after,.Ripples-module_dot__fancY:before{animation:Ripples-module_pulse__exp9o var(--uib-speed) linear infinite;background-color:var(--uib-color);border-radius:50%;content:"";height:100%;left:0;opacity:0;position:absolute;top:0;transform:scale(0);width:100%}.Ripples-module_container__GMgBp:after{animation-delay:calc(var(--uib-speed)/-4)}.Ripples-module_dot__fancY:before{animation-delay:calc(var(--uib-speed)*-.5)}.Ripples-module_dot__fancY:after{animation-delay:calc(var(--uib-speed)*-.75)}@keyframes Ripples-module_pulse__exp9o{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}');export{l as default};