import e from"react";import o from"../lib/assert.js";import{s as r}from"../style-inject.es-1f59c1d0.js";var i="Wobble-module_container__db3A-";function t(r){var t=r.size,a=void 0===t?45:t,b=r.color,s=void 0===b?"black":b,l=r.speed,n=void 0===l?.9:l;return o("Wobble","size",a,"number"),o("Wobble","color",s,"string"),o("Wobble","speed",n,"number"),e.createElement("div",{className:i,style:{"--uib-size":a+"px","--uib-color":s,"--uib-speed":n+"s"}})}r('.Wobble-module_container__db3A-{align-items:center;display:flex;height:var(--uib-size);justify-content:flex-start;position:relative;width:var(--uib-size)}.Wobble-module_container__db3A-:before{animation:Wobble-module_wobble__y6EQa var(--uib-speed) ease-in-out infinite;background-color:var(--uib-color);border-radius:50%;content:"";height:25%;transform:translateY(calc(var(--uib-size)*-.4));width:25%}@keyframes Wobble-module_wobble__y6EQa{0%,to{transform:translateX(0)}50%{transform:translateX(calc(var(--uib-size)*.75))}}');export{t as default};