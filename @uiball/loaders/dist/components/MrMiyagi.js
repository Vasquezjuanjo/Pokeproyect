import i from"react";import e from"../lib/assert.js";import{s as a}from"../style-inject.es-1f59c1d0.js";var t="MrMiyagi-module_container__Rld70",r="MrMiyagi-module_line__XVgwi";function l(a){var l=a.size,n=void 0===l?35:l,o=a.color,c=void 0===o?"black":o,d=a.lineWeight,s=void 0===d?3.5:d,m=a.speed,u=void 0===m?1:m;return e("MrMiyagi","size",n,"number"),e("MrMiyagi","color",c,"string"),e("MrMiyagi","speed",u,"number"),e("MrMiyagi","lineWeight",s,"number"),i.createElement("div",{className:t,style:{"--uib-size":n+"px","--uib-color":c,"--uib-line-weight":s+"px","--uib-speed":u+"s"}},i.createElement("div",{className:r}),i.createElement("div",{className:r}),i.createElement("div",{className:r}),i.createElement("div",{className:r}),i.createElement("div",{className:r}),i.createElement("div",{className:r}))}a(".MrMiyagi-module_container__Rld70{align-items:center;display:flex;height:var(--uib-size);justify-content:center;position:relative;width:var(--uib-size)}.MrMiyagi-module_line__XVgwi{animation:MrMiyagi-module_rotate__V8TX8 var(--uib-speed) ease-in-out infinite alternate;background-color:var(--uib-color);border-radius:calc(var(--uib-line-weight)/2);height:var(--uib-line-weight);left:0;position:absolute;top:calc(50% - var(--uib-line-weight)/2);width:100%}.MrMiyagi-module_line__XVgwi:nth-child(2){animation-delay:calc(var(--uib-speed)*.075);opacity:.8}.MrMiyagi-module_line__XVgwi:nth-child(3){animation-delay:calc(var(--uib-speed)*.15);opacity:.6}.MrMiyagi-module_line__XVgwi:nth-child(4){animation-delay:calc(var(--uib-speed)*.225);opacity:.4}.MrMiyagi-module_line__XVgwi:nth-child(5){animation-delay:calc(var(--uib-speed)*.3);opacity:.2}.MrMiyagi-module_line__XVgwi:nth-child(6){animation-delay:calc(var(--uib-speed)*.375);opacity:.1}@keyframes MrMiyagi-module_rotate__V8TX8{0%{transform:rotate(0deg)}to{transform:rotate(180deg)}}");export{l as default};
