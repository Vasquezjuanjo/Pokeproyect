import e from"react";import o from"../lib/assert.js";import{s as t}from"../style-inject.es-1f59c1d0.js";var r="ThreeBody-module_container__zwmpn",a="ThreeBody-module_dot__a-77j";function i(t){var i=t.size,d=void 0===i?35:i,n=t.color,l=void 0===n?"black":n,s=t.speed,m=void 0===s?1.1:s;return o("ThreeBody","size",d,"number"),o("ThreeBody","color",l,"string"),o("ThreeBody","speed",m,"number"),e.createElement("div",{className:r,style:{"--uib-size":d+"px","--uib-color":l,"--uib-speed":m+"s"}},e.createElement("div",{className:a}),e.createElement("div",{className:a}),e.createElement("div",{className:a}))}t('.ThreeBody-module_container__zwmpn{animation:ThreeBody-module_spin__MnSMQ calc(var(--uib-speed)*2.5) infinite linear;display:inline-block;height:var(--uib-size);position:relative;width:var(--uib-size)}.ThreeBody-module_dot__a-77j{height:100%;position:absolute;width:30%}.ThreeBody-module_dot__a-77j:after{background-color:var(--uib-color);border-radius:50%;content:"";height:0%;padding-bottom:100%;position:absolute;width:100%}.ThreeBody-module_dot__a-77j:first-child{bottom:5%;left:0;transform:rotate(60deg);transform-origin:50% 85%}.ThreeBody-module_dot__a-77j:first-child:after{animation:ThreeBody-module_wobble1__yeW4k var(--uib-speed) infinite ease-in-out;animation-delay:calc(var(--uib-speed)*-.3);bottom:0;left:0}.ThreeBody-module_dot__a-77j:nth-child(2){bottom:5%;right:0;transform:rotate(-60deg);transform-origin:50% 85%}.ThreeBody-module_dot__a-77j:nth-child(2):after{animation:ThreeBody-module_wobble1__yeW4k var(--uib-speed) infinite calc(var(--uib-speed)*-.15) ease-in-out;bottom:0;left:0}.ThreeBody-module_dot__a-77j:nth-child(3){bottom:-5%;left:0;transform:translateX(116.666%)}.ThreeBody-module_dot__a-77j:nth-child(3):after{animation:ThreeBody-module_wobble2__t-bwC var(--uib-speed) infinite ease-in-out;left:0;top:0}@keyframes ThreeBody-module_spin__MnSMQ{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes ThreeBody-module_wobble1__yeW4k{0%,to{opacity:1;transform:translateY(0) scale(1)}50%{opacity:.8;transform:translateY(-66%) scale(.65)}}@keyframes ThreeBody-module_wobble2__t-bwC{0%,to{opacity:1;transform:translateY(0) scale(1)}50%{opacity:.8;transform:translateY(66%) scale(.65)}}');export{i as default};