import {
  __toESM,
  require_react
} from "./chunk-C3URVCCN.js";

// node_modules/@uiball/loaders/dist/components/Ring.js
var import_react = __toESM(require_react(), 1);

// node_modules/@uiball/loaders/dist/lib/assert.js
function o(t11) {
  return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o9) {
    return typeof o9;
  } : function(o9) {
    return o9 && "function" == typeof Symbol && o9.constructor === Symbol && o9 !== Symbol.prototype ? "symbol" : typeof o9;
  }, o(t11);
}
function t(t11, n7, e24, c) {
  if (!(o(e24) === c))
    throw new TypeError("Invalid prop '".concat(n7, "' of type '").concat(o(e24), "' supplied to '").concat(t11, "', expected '").concat(c, "'."));
}

// node_modules/@uiball/loaders/dist/style-inject.es-1f59c1d0.js
function e(e24, t11) {
  void 0 === t11 && (t11 = {});
  var d = t11.insertAt;
  if (e24 && "undefined" != typeof document) {
    var n7 = document.head || document.getElementsByTagName("head")[0], s4 = document.createElement("style");
    s4.type = "text/css", "top" === d && n7.firstChild ? n7.insertBefore(s4, n7.firstChild) : n7.appendChild(s4), s4.styleSheet ? s4.styleSheet.cssText = e24 : s4.appendChild(document.createTextNode(e24));
  }
}

// node_modules/@uiball/loaders/dist/components/Ring.js
var t2 = "Ring-module_container__1mCd7";
function o2(i11) {
  var o9 = i11.size, s4 = void 0 === o9 ? 40 : o9, a15 = i11.color, n7 = void 0 === a15 ? "black" : a15, d = i11.lineWeight, l6 = void 0 === d ? 5 : d, c = i11.speed, m = void 0 === c ? 2 : c;
  return t("Ring", "size", s4, "number"), t("Ring", "color", n7, "string"), t("Ring", "lineWeight", l6, "number"), t("Ring", "speed", m, "number"), import_react.default.createElement("svg", { height: s4, width: s4, className: t2, viewBox: "25 25 50 50", style: { "--uib-size": s4 + "px", "--uib-color": n7, "--uib-speed": m + "s" } }, import_react.default.createElement("circle", { cx: "50", cy: "50", r: "20", strokeWidth: l6 }));
}
e(".Ring-module_container__1mCd7{animation:Ring-module_rotate__RBwLl var(--uib-speed) linear infinite;height:var(--uib-size);transform-origin:center;vertical-align:middle;width:var(--uib-size);will-change:transform}.Ring-module_container__1mCd7 circle{fill:none;stroke:var(--uib-color);stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:round;animation:Ring-module_stretch__L-1Qd calc(var(--uib-speed)*.75) ease-in-out infinite;will-change:stroke-dasharray,stroke-dashoffset}@keyframes Ring-module_rotate__RBwLl{to{transform:rotate(1turn)}}@keyframes Ring-module_stretch__L-1Qd{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,200;stroke-dashoffset:-35px}to{stroke-dashoffset:-124px}}");

// node_modules/@uiball/loaders/dist/components/Waveform.js
var import_react2 = __toESM(require_react(), 1);
var r = "Waveform-module_container__kGWZq";
var o3 = "Waveform-module_bar__5hNhf";
function t3(a15) {
  var t11 = a15.size, m = void 0 === t11 ? 40 : t11, n7 = a15.color, s4 = void 0 === n7 ? "black" : n7, l6 = a15.lineWeight, d = void 0 === l6 ? 3.5 : l6, c = a15.speed, u = void 0 === c ? 1 : c;
  return t("Waveform", "size", m, "number"), t("Waveform", "color", s4, "string"), t("Waveform", "speed", u, "number"), t("Waveform", "lineWeight", d, "number"), import_react2.default.createElement("div", { className: r, style: { "--uib-size": m + "px", "--uib-color": s4, "--uib-line-weight": d + "px", "--uib-speed": u + "s" } }, import_react2.default.createElement("div", { className: o3 }), import_react2.default.createElement("div", { className: o3 }), import_react2.default.createElement("div", { className: o3 }), import_react2.default.createElement("div", { className: o3 }));
}
e(".Waveform-module_container__kGWZq{align-items:center;display:flex;height:calc(var(--uib-size)*.9);justify-content:space-between;width:var(--uib-size)}.Waveform-module_bar__5hNhf{background-color:var(--uib-color);height:100%;width:var(--uib-line-weight)}.Waveform-module_bar__5hNhf:first-child{animation:Waveform-module_grow__KV1Si var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.45) infinite}.Waveform-module_bar__5hNhf:nth-child(2){animation:Waveform-module_grow__KV1Si var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.3) infinite}.Waveform-module_bar__5hNhf:nth-child(3){animation:Waveform-module_grow__KV1Si var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.15) infinite}.Waveform-module_bar__5hNhf:nth-child(4){animation:Waveform-module_grow__KV1Si var(--uib-speed) ease-in-out infinite}@keyframes Waveform-module_grow__KV1Si{0%,to{transform:scaleY(.3)}50%{transform:scaleY(1)}}");

// node_modules/@uiball/loaders/dist/components/Pulsar.js
var import_react3 = __toESM(require_react(), 1);
var a = "Pulsar-module_container__iLGP9";
function o4(i11) {
  var o9 = i11.size, s4 = void 0 === o9 ? 40 : o9, t11 = i11.color, l6 = void 0 === t11 ? "black" : t11, u = i11.speed, n7 = void 0 === u ? 1.75 : u;
  return t("Pulsar", "size", s4, "number"), t("Pulsar", "color", l6, "string"), t("Pulsar", "speed", n7, "number"), import_react3.default.createElement("div", { className: a, style: { "--uib-size": s4 + "px", "--uib-color": l6, "--uib-speed": n7 + "s" } });
}
e('.Pulsar-module_container__iLGP9{height:var(--uib-size);position:relative;width:var(--uib-size)}.Pulsar-module_container__iLGP9:after,.Pulsar-module_container__iLGP9:before{animation:Pulsar-module_pulse__HlmYe var(--uib-speed) ease-in-out infinite;background-color:var(--uib-color);border-radius:50%;content:"";height:100%;left:0;position:absolute;top:0;transform:scale(0);width:100%}.Pulsar-module_container__iLGP9:after{animation-delay:calc(var(--uib-speed)/-2)}@keyframes Pulsar-module_pulse__HlmYe{0%,to{opacity:1;transform:scale(0)}50%{opacity:.25;transform:scale(1)}}');

// node_modules/@uiball/loaders/dist/components/Ping.js
var import_react4 = __toESM(require_react(), 1);
var r2 = "Ping-module_container__65lKE";
function a2(o9) {
  var a15 = o9.size, t11 = void 0 === a15 ? 45 : a15, n7 = o9.color, s4 = void 0 === n7 ? "black" : n7, l6 = o9.speed, c = void 0 === l6 ? 2 : l6;
  return t("Ping", "size", t11, "number"), t("Ping", "color", s4, "string"), t("Ping", "speed", c, "number"), import_react4.default.createElement("div", { className: r2, style: { "--uib-size": t11 + "px", "--uib-color": s4, "--uib-speed": c + "s" } });
}
e('.Ping-module_container__65lKE{height:var(--uib-size);position:relative;width:var(--uib-size)}.Ping-module_container__65lKE:after,.Ping-module_container__65lKE:before{animation:Ping-module_pulse__6WP1M var(--uib-speed) linear infinite;background-color:var(--uib-color);border-radius:50%;content:"";height:100%;left:0;opacity:0;position:absolute;top:0;transform:scale(0);width:100%}.Ping-module_container__65lKE:after{animation-delay:calc(var(--uib-speed)/-2)}@keyframes Ping-module_pulse__6WP1M{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}');

// node_modules/@uiball/loaders/dist/components/Ripples.js
var import_react5 = __toESM(require_react(), 1);
var a3 = "Ripples-module_container__GMgBp";
var p = "Ripples-module_dot__fancY";
function l(o9) {
  var l6 = o9.size, s4 = void 0 === l6 ? 45 : l6, r12 = o9.color, t11 = void 0 === r12 ? "black" : r12, n7 = o9.speed, d = void 0 === n7 ? 2 : n7;
  return t("Ripples", "size", s4, "number"), t("Ripples", "color", t11, "string"), t("Ripples", "speed", d, "number"), import_react5.default.createElement("div", { className: a3, style: { "--uib-size": s4 + "px", "--uib-color": t11, "--uib-speed": d + "s" } }, import_react5.default.createElement("div", { className: p }));
}
e('.Ripples-module_container__GMgBp{height:var(--uib-size);position:relative;width:var(--uib-size)}.Ripples-module_container__GMgBp:after,.Ripples-module_container__GMgBp:before,.Ripples-module_dot__fancY:after,.Ripples-module_dot__fancY:before{animation:Ripples-module_pulse__exp9o var(--uib-speed) linear infinite;background-color:var(--uib-color);border-radius:50%;content:"";height:100%;left:0;opacity:0;position:absolute;top:0;transform:scale(0);width:100%}.Ripples-module_container__GMgBp:after{animation-delay:calc(var(--uib-speed)/-4)}.Ripples-module_dot__fancY:before{animation-delay:calc(var(--uib-speed)*-.5)}.Ripples-module_dot__fancY:after{animation-delay:calc(var(--uib-speed)*-.75)}@keyframes Ripples-module_pulse__exp9o{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}');

// node_modules/@uiball/loaders/dist/components/ThreeBody.js
var import_react6 = __toESM(require_react(), 1);
var r3 = "ThreeBody-module_container__zwmpn";
var a4 = "ThreeBody-module_dot__a-77j";
function i(t11) {
  var i11 = t11.size, d = void 0 === i11 ? 35 : i11, n7 = t11.color, l6 = void 0 === n7 ? "black" : n7, s4 = t11.speed, m = void 0 === s4 ? 1.1 : s4;
  return t("ThreeBody", "size", d, "number"), t("ThreeBody", "color", l6, "string"), t("ThreeBody", "speed", m, "number"), import_react6.default.createElement("div", { className: r3, style: { "--uib-size": d + "px", "--uib-color": l6, "--uib-speed": m + "s" } }, import_react6.default.createElement("div", { className: a4 }), import_react6.default.createElement("div", { className: a4 }), import_react6.default.createElement("div", { className: a4 }));
}
e('.ThreeBody-module_container__zwmpn{animation:ThreeBody-module_spin__MnSMQ calc(var(--uib-speed)*2.5) infinite linear;display:inline-block;height:var(--uib-size);position:relative;width:var(--uib-size)}.ThreeBody-module_dot__a-77j{height:100%;position:absolute;width:30%}.ThreeBody-module_dot__a-77j:after{background-color:var(--uib-color);border-radius:50%;content:"";height:0%;padding-bottom:100%;position:absolute;width:100%}.ThreeBody-module_dot__a-77j:first-child{bottom:5%;left:0;transform:rotate(60deg);transform-origin:50% 85%}.ThreeBody-module_dot__a-77j:first-child:after{animation:ThreeBody-module_wobble1__yeW4k var(--uib-speed) infinite ease-in-out;animation-delay:calc(var(--uib-speed)*-.3);bottom:0;left:0}.ThreeBody-module_dot__a-77j:nth-child(2){bottom:5%;right:0;transform:rotate(-60deg);transform-origin:50% 85%}.ThreeBody-module_dot__a-77j:nth-child(2):after{animation:ThreeBody-module_wobble1__yeW4k var(--uib-speed) infinite calc(var(--uib-speed)*-.15) ease-in-out;bottom:0;left:0}.ThreeBody-module_dot__a-77j:nth-child(3){bottom:-5%;left:0;transform:translateX(116.666%)}.ThreeBody-module_dot__a-77j:nth-child(3):after{animation:ThreeBody-module_wobble2__t-bwC var(--uib-speed) infinite ease-in-out;left:0;top:0}@keyframes ThreeBody-module_spin__MnSMQ{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes ThreeBody-module_wobble1__yeW4k{0%,to{opacity:1;transform:translateY(0) scale(1)}50%{opacity:.8;transform:translateY(-66%) scale(.65)}}@keyframes ThreeBody-module_wobble2__t-bwC{0%,to{opacity:1;transform:translateY(0) scale(1)}50%{opacity:.8;transform:translateY(66%) scale(.65)}}');

// node_modules/@uiball/loaders/dist/components/Orbit.js
var import_react7 = __toESM(require_react(), 1);
var e8 = "Orbit-module_container__EECud";
function i2(t11) {
  var i11 = t11.size, s4 = void 0 === i11 ? 25 : i11, c = t11.color, o9 = void 0 === c ? "black" : c, l6 = t11.speed, n7 = void 0 === l6 ? 1.5 : l6;
  return t("Orbit", "size", s4, "number"), t("Orbit", "color", o9, "string"), t("Orbit", "speed", n7, "number"), import_react7.default.createElement("div", { className: e8, style: { "--uib-size": s4 + "px", "--uib-color": o9, "--uib-speed": n7 + "s" } });
}
e('.Orbit-module_container__EECud{align-items:center;display:flex;height:var(--uib-size);justify-content:center;position:relative;width:var(--uib-size)}.Orbit-module_container__EECud:after,.Orbit-module_container__EECud:before{background-color:var(--uib-color);border-radius:50%;content:"";flex-shrink:0;height:60%;position:absolute;width:60%}.Orbit-module_container__EECud:before{animation:Orbit-module_orbit__MW-0b var(--uib-speed) linear infinite}.Orbit-module_container__EECud:after{animation:Orbit-module_orbit__MW-0b var(--uib-speed) linear calc(var(--uib-speed)/-2) infinite}@keyframes Orbit-module_orbit__MW-0b{0%{opacity:.65;transform:translate(calc(var(--uib-size)*.5)) scale(.73684)}5%{opacity:.58;transform:translate(calc(var(--uib-size)*.4)) scale(.684208)}10%{opacity:.51;transform:translate(calc(var(--uib-size)*.3)) scale(.631576)}15%{opacity:.44;transform:translate(calc(var(--uib-size)*.2)) scale(.578944)}20%{opacity:.37;transform:translate(calc(var(--uib-size)*.1)) scale(.526312)}25%{opacity:.3;transform:translate(0) scale(.47368)}30%{opacity:.37;transform:translate(calc(var(--uib-size)*-.1)) scale(.526312)}35%{opacity:.44;transform:translate(calc(var(--uib-size)*-.2)) scale(.578944)}40%{opacity:.51;transform:translate(calc(var(--uib-size)*-.3)) scale(.631576)}45%{opacity:.58;transform:translate(calc(var(--uib-size)*-.4)) scale(.684208)}50%{opacity:.65;transform:translate(calc(var(--uib-size)*-.5)) scale(.73684)}55%{opacity:.72;transform:translate(calc(var(--uib-size)*-.4)) scale(.789472)}60%{opacity:.79;transform:translate(calc(var(--uib-size)*-.3)) scale(.842104)}65%{opacity:.86;transform:translate(calc(var(--uib-size)*-.2)) scale(.894736)}70%{opacity:.93;transform:translate(calc(var(--uib-size)*-.1)) scale(.947368)}75%{opacity:1;transform:translate(0) scale(1)}80%{opacity:.93;transform:translate(calc(var(--uib-size)*.1)) scale(.947368)}85%{opacity:.86;transform:translate(calc(var(--uib-size)*.2)) scale(.894736)}90%{opacity:.79;transform:translate(calc(var(--uib-size)*.3)) scale(.842104)}95%{opacity:.72;transform:translate(calc(var(--uib-size)*.4)) scale(.789472)}to{opacity:.65;transform:translate(calc(var(--uib-size)*.5)) scale(.73684)}}');

// node_modules/@uiball/loaders/dist/components/ChaoticOrbit.js
var import_react8 = __toESM(require_react(), 1);
var r4 = "ChaoticOrbit-module_container__viK6x";
function e9(i11) {
  var e24 = i11.size, c = void 0 === e24 ? 25 : e24, s4 = i11.color, o9 = void 0 === s4 ? "black" : s4, l6 = i11.speed, n7 = void 0 === l6 ? 1.5 : l6;
  return t("ChaoticOrbit", "size", c, "number"), t("ChaoticOrbit", "color", o9, "string"), t("ChaoticOrbit", "speed", n7, "number"), import_react8.default.createElement("div", { className: r4, style: { "--uib-size": c + "px", "--uib-color": o9, "--uib-speed": n7 + "s" } });
}
e('.ChaoticOrbit-module_container__viK6x{align-items:center;animation:ChaoticOrbit-module_rotate__EiQQN calc(var(--uib-speed)*1.667) infinite linear;display:flex;height:var(--uib-size);justify-content:center;position:relative;width:var(--uib-size)}.ChaoticOrbit-module_container__viK6x:after,.ChaoticOrbit-module_container__viK6x:before{background-color:var(--uib-color);border-radius:50%;content:"";flex-shrink:0;height:60%;position:absolute;width:60%}.ChaoticOrbit-module_container__viK6x:before{animation:ChaoticOrbit-module_orbit__7gDLi var(--uib-speed) linear infinite}.ChaoticOrbit-module_container__viK6x:after{animation:ChaoticOrbit-module_orbit__7gDLi var(--uib-speed) linear calc(var(--uib-speed)/-2) infinite}@keyframes ChaoticOrbit-module_rotate__EiQQN{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes ChaoticOrbit-module_orbit__7gDLi{0%{opacity:.65;transform:translate(calc(var(--uib-size)*.5)) scale(.73684)}5%{opacity:.58;transform:translate(calc(var(--uib-size)*.4)) scale(.684208)}10%{opacity:.51;transform:translate(calc(var(--uib-size)*.3)) scale(.631576)}15%{opacity:.44;transform:translate(calc(var(--uib-size)*.2)) scale(.578944)}20%{opacity:.37;transform:translate(calc(var(--uib-size)*.1)) scale(.526312)}25%{opacity:.3;transform:translate(0) scale(.47368)}30%{opacity:.37;transform:translate(calc(var(--uib-size)*-.1)) scale(.526312)}35%{opacity:.44;transform:translate(calc(var(--uib-size)*-.2)) scale(.578944)}40%{opacity:.51;transform:translate(calc(var(--uib-size)*-.3)) scale(.631576)}45%{opacity:.58;transform:translate(calc(var(--uib-size)*-.4)) scale(.684208)}50%{opacity:.65;transform:translate(calc(var(--uib-size)*-.5)) scale(.73684)}55%{opacity:.72;transform:translate(calc(var(--uib-size)*-.4)) scale(.789472)}60%{opacity:.79;transform:translate(calc(var(--uib-size)*-.3)) scale(.842104)}65%{opacity:.86;transform:translate(calc(var(--uib-size)*-.2)) scale(.894736)}70%{opacity:.93;transform:translate(calc(var(--uib-size)*-.1)) scale(.947368)}75%{opacity:1;transform:translate(0) scale(1)}80%{opacity:.93;transform:translate(calc(var(--uib-size)*.1)) scale(.947368)}85%{opacity:.86;transform:translate(calc(var(--uib-size)*.2)) scale(.894736)}90%{opacity:.79;transform:translate(calc(var(--uib-size)*.3)) scale(.842104)}95%{opacity:.72;transform:translate(calc(var(--uib-size)*.4)) scale(.789472)}to{opacity:.65;transform:translate(calc(var(--uib-size)*.5)) scale(.73684)}}');

// node_modules/@uiball/loaders/dist/components/SuperBalls.js
var import_react9 = __toESM(require_react(), 1);
var t4 = "SuperBalls-module_container__snRQD";
var s = "SuperBalls-module_electron__w53nG";
function l2(r12) {
  var l6 = r12.size, i11 = void 0 === l6 ? 45 : l6, c = r12.color, o9 = void 0 === c ? "black" : c, n7 = r12.speed, u = void 0 === n7 ? 1.4 : n7;
  return t("SuperBalls", "size", i11, "number"), t("SuperBalls", "color", o9, "string"), t("SuperBalls", "speed", u, "number"), import_react9.default.createElement("div", { className: t4, style: { "--uib-size": i11 + "px", "--uib-color": o9, "--uib-speed": u + "s" } }, import_react9.default.createElement("div", { className: s }), import_react9.default.createElement("div", { className: s }));
}
e('.SuperBalls-module_container__snRQD{align-items:center;display:flex;height:var(--uib-size);justify-content:center;position:relative;width:var(--uib-size)}.SuperBalls-module_electron__w53nG{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.SuperBalls-module_electron__w53nG:before{background-color:var(--uib-color);border-radius:50%;content:"";flex-shrink:0;height:35%;width:35%}.SuperBalls-module_electron__w53nG:first-child{transform:rotate(45deg)}.SuperBalls-module_electron__w53nG:first-child:before{animation:SuperBalls-module_orbit__OQtrA var(--uib-speed) linear calc(var(--uib-speed)*-.143) infinite}.SuperBalls-module_electron__w53nG:nth-child(2){transform:rotate(-45deg)}.SuperBalls-module_electron__w53nG:nth-child(2):before{animation:SuperBalls-module_orbit__OQtrA var(--uib-speed) linear calc(var(--uib-speed)/-2) infinite}@keyframes SuperBalls-module_orbit__OQtrA{0%{opacity:.65;transform:translate(calc(var(--uib-size)*.5)) scale(.73684)}5%{opacity:.58;transform:translate(calc(var(--uib-size)*.4)) scale(.684208)}10%{opacity:.51;transform:translate(calc(var(--uib-size)*.3)) scale(.631576)}15%{opacity:.44;transform:translate(calc(var(--uib-size)*.2)) scale(.578944)}20%{opacity:.37;transform:translate(calc(var(--uib-size)*.1)) scale(.526312)}25%{opacity:.3;transform:translate(0) scale(.47368)}30%{opacity:.37;transform:translate(calc(var(--uib-size)*-.1)) scale(.526312)}35%{opacity:.44;transform:translate(calc(var(--uib-size)*-.2)) scale(.578944)}40%{opacity:.51;transform:translate(calc(var(--uib-size)*-.3)) scale(.631576)}45%{opacity:.58;transform:translate(calc(var(--uib-size)*-.4)) scale(.684208)}50%{opacity:.65;transform:translate(calc(var(--uib-size)*-.5)) scale(.73684)}55%{opacity:.72;transform:translate(calc(var(--uib-size)*-.4)) scale(.789472)}60%{opacity:.79;transform:translate(calc(var(--uib-size)*-.3)) scale(.842104)}65%{opacity:.86;transform:translate(calc(var(--uib-size)*-.2)) scale(.894736)}70%{opacity:.93;transform:translate(calc(var(--uib-size)*-.1)) scale(.947368)}75%{opacity:1;transform:translate(0) scale(1)}80%{opacity:.93;transform:translate(calc(var(--uib-size)*.1)) scale(.947368)}85%{opacity:.86;transform:translate(calc(var(--uib-size)*.2)) scale(.894736)}90%{opacity:.79;transform:translate(calc(var(--uib-size)*.3)) scale(.842104)}95%{opacity:.72;transform:translate(calc(var(--uib-size)*.4)) scale(.789472)}to{opacity:.65;transform:translate(calc(var(--uib-size)*.5)) scale(.73684)}}');

// node_modules/@uiball/loaders/dist/components/Wobble.js
var import_react10 = __toESM(require_react(), 1);
var i3 = "Wobble-module_container__db3A-";
function t5(r12) {
  var t11 = r12.size, a15 = void 0 === t11 ? 45 : t11, b = r12.color, s4 = void 0 === b ? "black" : b, l6 = r12.speed, n7 = void 0 === l6 ? 0.9 : l6;
  return t("Wobble", "size", a15, "number"), t("Wobble", "color", s4, "string"), t("Wobble", "speed", n7, "number"), import_react10.default.createElement("div", { className: i3, style: { "--uib-size": a15 + "px", "--uib-color": s4, "--uib-speed": n7 + "s" } });
}
e('.Wobble-module_container__db3A-{align-items:center;display:flex;height:var(--uib-size);justify-content:flex-start;position:relative;width:var(--uib-size)}.Wobble-module_container__db3A-:before{animation:Wobble-module_wobble__y6EQa var(--uib-speed) ease-in-out infinite;background-color:var(--uib-color);border-radius:50%;content:"";height:25%;transform:translateY(calc(var(--uib-size)*-.4));width:25%}@keyframes Wobble-module_wobble__y6EQa{0%,to{transform:translateX(0)}50%{transform:translateX(calc(var(--uib-size)*.75))}}');

// node_modules/@uiball/loaders/dist/components/Metronome.js
var import_react11 = __toESM(require_react(), 1);
var a8 = "Metronome-module_container__-pwcV";
var r5 = "Metronome-module_dot__apNmF";
function i4(t11) {
  var i11 = t11.size, m = void 0 === i11 ? 40 : i11, n7 = t11.color, d = void 0 === n7 ? "black" : n7, l6 = t11.speed, s4 = void 0 === l6 ? 1.6 : l6;
  return t("Metronome", "size", m, "number"), t("Metronome", "color", d, "string"), t("Metronome", "speed", s4, "number"), import_react11.default.createElement("div", { className: a8, style: { "--uib-size": m + "px", "--uib-color": d, "--uib-speed": s4 + "s" } }, import_react11.default.createElement("div", { className: r5 }), import_react11.default.createElement("div", { className: r5 }), import_react11.default.createElement("div", { className: r5 }), import_react11.default.createElement("div", { className: r5 }));
}
e('.Metronome-module_container__-pwcV{align-items:center;display:flex;height:var(--uib-size);justify-content:flex-start;position:relative;width:var(--uib-size)}.Metronome-module_dot__apNmF{align-items:center;animation:Metronome-module_swing__VxNuU var(--uib-speed) linear infinite;display:flex;height:100%;justify-content:flex-start;left:0;position:absolute;top:13.5%;width:100%}.Metronome-module_dot__apNmF:before{background-color:var(--uib-color);border-radius:50%;content:"";height:25%;width:25%}.Metronome-module_dot__apNmF:first-child{animation-delay:calc(var(--uib-speed)*-.36)}.Metronome-module_dot__apNmF:nth-child(2){animation-delay:calc(var(--uib-speed)*-.27);opacity:.8}.Metronome-module_dot__apNmF:nth-child(2):before{transform:scale(.9)}.Metronome-module_dot__apNmF:nth-child(3){animation-delay:calc(var(--uib-speed)*-.18);opacity:.6}.Metronome-module_dot__apNmF:nth-child(3):before{transform:scale(.8)}.Metronome-module_dot__apNmF:nth-child(4){animation-delay:calc(var(--uib-speed)*-.09);opacity:.4}.Metronome-module_dot__apNmF:nth-child(4):before{transform:scale(.7)}@keyframes Metronome-module_swing__VxNuU{0%{transform:rotate(0deg)}15%{transform:rotate(0deg)}50%{transform:rotate(180deg)}65%{transform:rotate(180deg)}to{transform:rotate(0deg)}}');

// node_modules/@uiball/loaders/dist/components/DotWave.js
var import_react12 = __toESM(require_react(), 1);
var i5 = "DotWave-module_container__s1Aiz";
var o5 = "DotWave-module_dot__8LtwH";
function s2(a15) {
  var s4 = a15.size, d = void 0 === s4 ? 47 : s4, r12 = a15.color, l6 = void 0 === r12 ? "black" : r12, n7 = a15.speed, u = void 0 === n7 ? 1 : n7;
  return t("DotWave", "size", d, "number"), t("DotWave", "color", l6, "string"), t("DotWave", "speed", u, "number"), import_react12.default.createElement("div", { className: i5, style: { "--uib-size": d + "px", "--uib-color": l6, "--uib-speed": u + "s" } }, import_react12.default.createElement("div", { className: o5 }), import_react12.default.createElement("div", { className: o5 }), import_react12.default.createElement("div", { className: o5 }), import_react12.default.createElement("div", { className: o5 }));
}
e(".DotWave-module_container__s1Aiz{align-items:flex-end;display:flex;height:calc(var(--uib-size)*.5);justify-content:space-between;width:var(--uib-size)}.DotWave-module_dot__8LtwH{background-color:var(--uib-color);border-radius:50%;flex-shrink:0;height:calc(var(--uib-size)*.17);width:calc(var(--uib-size)*.17)}.DotWave-module_dot__8LtwH:first-child{animation:DotWave-module_jump__eYFYd var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.45) infinite}.DotWave-module_dot__8LtwH:nth-child(2){animation:DotWave-module_jump__eYFYd var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.3) infinite}.DotWave-module_dot__8LtwH:nth-child(3){animation:DotWave-module_jump__eYFYd var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.15) infinite}.DotWave-module_dot__8LtwH:nth-child(4){animation:DotWave-module_jump__eYFYd var(--uib-speed) ease-in-out infinite}@keyframes DotWave-module_jump__eYFYd{0%,to{transform:translateY(0)}50%{transform:translateY(-200%)}}");

// node_modules/@uiball/loaders/dist/components/DotPulse.js
var import_react13 = __toESM(require_react(), 1);
var i6 = "DotPulse-module_container__Q1oww";
var s3 = "DotPulse-module_dot__P2HVz";
function l3(t11) {
  var l6 = t11.size, a15 = void 0 === l6 ? 40 : l6, u = t11.color, r12 = void 0 === u ? "black" : u, n7 = t11.speed, c = void 0 === n7 ? 1.3 : n7;
  return t("DotPulse", "size", a15, "number"), t("DotPulse", "color", r12, "string"), t("DotPulse", "speed", c, "number"), import_react13.default.createElement("div", { className: i6, style: { "--uib-size": a15 + "px", "--uib-color": r12, "--uib-speed": c + "s" } }, import_react13.default.createElement("div", { className: s3 }));
}
e('.DotPulse-module_container__Q1oww{align-items:center;display:flex;height:calc(var(--uib-size)*.27);justify-content:space-between;position:relative;width:var(--uib-size)}.DotPulse-module_container__Q1oww:after,.DotPulse-module_container__Q1oww:before,.DotPulse-module_dot__P2HVz{background-color:var(--uib-color);border-radius:50%;content:"";display:block;height:calc(var(--uib-size)*.18);transform:scale(0);width:calc(var(--uib-size)*.18)}.DotPulse-module_container__Q1oww:before{animation:DotPulse-module_pulse__DbFpM var(--uib-speed) ease-in-out infinite}.DotPulse-module_dot__P2HVz{animation:DotPulse-module_pulse__DbFpM var(--uib-speed) ease-in-out calc(var(--uib-speed)*.125) infinite both}.DotPulse-module_container__Q1oww:after{animation:DotPulse-module_pulse__DbFpM var(--uib-speed) ease-in-out calc(var(--uib-speed)*.25) infinite}@keyframes DotPulse-module_pulse__DbFpM{0%,to{transform:scale(0)}50%{transform:scale(1.5)}}');

// node_modules/@uiball/loaders/dist/components/LeapFrog.js
var import_react14 = __toESM(require_react(), 1);
var r6 = "LeapFrog-module_container__XNG48";
var o6 = "LeapFrog-module_dot__Jkx1u";
function i7(t11) {
  var i11 = t11.size, s4 = void 0 === i11 ? 40 : i11, l6 = t11.color, n7 = void 0 === l6 ? "black" : l6, d = t11.speed, u = void 0 === d ? 2.5 : d;
  return t("LeapFrog", "size", s4, "number"), t("LeapFrog", "color", n7, "string"), t("LeapFrog", "speed", u, "number"), import_react14.default.createElement("div", { className: r6, style: { "--uib-size": s4 + "px", "--uib-color": n7, "--uib-speed": u + "s" } }, import_react14.default.createElement("div", { className: o6 }), import_react14.default.createElement("div", { className: o6 }), import_react14.default.createElement("div", { className: o6 }));
}
e('.LeapFrog-module_container__XNG48{align-items:center;display:flex;height:var(--uib-size);justify-content:space-between;position:relative;width:var(--uib-size)}.LeapFrog-module_dot__Jkx1u{align-items:center;display:flex;height:100%;justify-content:flex-start;left:0;position:absolute;top:0;width:100%}.LeapFrog-module_dot__Jkx1u:before{background-color:var(--uib-color);border-radius:50%;content:"";display:block;height:calc(var(--uib-size)*.22);width:calc(var(--uib-size)*.22)}.LeapFrog-module_dot__Jkx1u:first-child{animation:LeapFrog-module_leapFrog__umJ9T var(--uib-speed) ease infinite}.LeapFrog-module_dot__Jkx1u:nth-child(2){animation:LeapFrog-module_leapFrog__umJ9T var(--uib-speed) ease calc(var(--uib-speed)/-1.5) infinite;transform:translateX(calc(var(--uib-size)*.4))}.LeapFrog-module_dot__Jkx1u:nth-child(3){animation:LeapFrog-module_leapFrog__umJ9T var(--uib-speed) ease calc(var(--uib-speed)/-3) infinite;transform:translateX(calc(var(--uib-size)*.8)) rotate(0deg)}@keyframes LeapFrog-module_leapFrog__umJ9T{0%{transform:translateX(0) rotate(0deg)}33.333%{transform:translateX(0) rotate(180deg)}66.666%{transform:translateX(calc(var(--uib-size)*-.4)) rotate(180deg)}99.999%{transform:translateX(calc(var(--uib-size)*-.8)) rotate(180deg)}to{transform:translateX(0) rotate(0deg)}}');

// node_modules/@uiball/loaders/dist/components/NewtonsCradle.js
var import_react15 = __toESM(require_react(), 1);
var n = "NewtonsCradle-module_container__yvLC6";
var a9 = "NewtonsCradle-module_dot__R8MrQ";
function o7(i11) {
  var o9 = i11.size, r12 = void 0 === o9 ? 40 : o9, s4 = i11.color, d = void 0 === s4 ? "black" : s4, l6 = i11.speed, m = void 0 === l6 ? 1.4 : l6;
  return t("NewtonsCradle", "size", r12, "number"), t("NewtonsCradle", "color", d, "string"), t("NewtonsCradle", "speed", m, "number"), import_react15.default.createElement("div", { className: n, style: { "--uib-size": r12 + "px", "--uib-color": d, "--uib-speed": m + "s" } }, import_react15.default.createElement("div", { className: a9 }), import_react15.default.createElement("div", { className: a9 }), import_react15.default.createElement("div", { className: a9 }), import_react15.default.createElement("div", { className: a9 }));
}
e('.NewtonsCradle-module_container__yvLC6{align-items:center;display:flex;height:var(--uib-size);justify-content:center;position:relative;width:var(--uib-size)}.NewtonsCradle-module_dot__R8MrQ{align-items:center;display:flex;height:100%;position:relative;transform-origin:center top;width:25%}.NewtonsCradle-module_dot__R8MrQ:after{background-color:var(--uib-color);border-radius:50%;content:"";display:block;height:25%;width:100%}.NewtonsCradle-module_dot__R8MrQ:first-child{animation:NewtonsCradle-module_swing__tWgDv var(--uib-speed) linear infinite}.NewtonsCradle-module_dot__R8MrQ:last-child{animation:NewtonsCradle-module_swing2__rnCq2 var(--uib-speed) linear infinite}@keyframes NewtonsCradle-module_swing__tWgDv{0%{animation-timing-function:ease-out;transform:rotate(0deg)}25%{animation-timing-function:ease-in;transform:rotate(70deg)}50%{animation-timing-function:linear;transform:rotate(0deg)}}@keyframes NewtonsCradle-module_swing2__rnCq2{0%{animation-timing-function:linear;transform:rotate(0deg)}50%{animation-timing-function:ease-out;transform:rotate(0deg)}75%{animation-timing-function:ease-in;transform:rotate(-70deg)}}');

// node_modules/@uiball/loaders/dist/components/Momentum.js
var import_react16 = __toESM(require_react(), 1);
var r7 = "Momentum-module_container__Yyu8l";
function n2(o9) {
  var n7 = o9.size, a15 = void 0 === n7 ? 40 : n7, m = o9.color, i11 = void 0 === m ? "black" : m, u = o9.speed, l6 = void 0 === u ? 1.1 : u;
  return t("Momentum", "size", a15, "number"), t("Momentum", "color", i11, "string"), t("Momentum", "speed", l6, "number"), import_react16.default.createElement("div", { className: r7, style: { "--uib-size": a15 + "px", "--uib-color": i11, "--uib-speed": l6 + "s" } });
}
e('.Momentum-module_container__Yyu8l{align-items:center;animation:Momentum-module_rotate__B3XSB var(--uib-speed) linear infinite;display:flex;height:var(--uib-size);justify-content:center;position:relative;width:var(--uib-size)}.Momentum-module_container__Yyu8l:after,.Momentum-module_container__Yyu8l:before{background-color:var(--uib-color);border-radius:50%;content:"";height:25%;width:25%}.Momentum-module_container__Yyu8l:before{animation:Momentum-module_wobble2__8LzCM calc(var(--uib-speed)*1.25) ease-in-out infinite}.Momentum-module_container__Yyu8l:after{animation:Momentum-module_wobble__3Yjup calc(var(--uib-speed)*1.25) ease-in-out infinite}.Momentum-module_container__Yyu8l:before{margin-right:10%}@keyframes Momentum-module_wobble__3Yjup{0%,to{transform:translateX(0)}50%{transform:translateX(calc(var(--uib-size)*.2)) scale(1.1)}}@keyframes Momentum-module_wobble2__8LzCM{0%,to{transform:translateX(0)}50%{transform:translateX(calc(var(--uib-size)*-.2)) scale(1.1)}}@keyframes Momentum-module_rotate__B3XSB{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}');

// node_modules/@uiball/loaders/dist/components/Jelly.js
var import_react17 = __toESM(require_react(), 1);
var r8 = "Jelly-module_container__LB5dG";
var i8 = "Jelly-module_svg__Ae81n";
function a10(t11) {
  var a15 = t11.size, o9 = void 0 === a15 ? 50 : a15, n7 = t11.color, s4 = void 0 === n7 ? "black" : n7, m = t11.speed, u = void 0 === m ? 0.9 : m;
  return t("Jelly", "size", o9, "number"), t("Jelly", "color", s4, "string"), t("Jelly", "speed", u, "number"), import_react17.default.createElement(import_react17.default.Fragment, null, import_react17.default.createElement("div", { className: r8, style: { "--uib-size": o9 + "px", "--uib-color": s4, "--uib-speed": u + "s" } }), import_react17.default.createElement("svg", { width: "0", height: "0", className: i8 }, import_react17.default.createElement("defs", null, import_react17.default.createElement("filter", { id: "uib-jelly-ooze" }, import_react17.default.createElement("feGaussianBlur", { in: "SourceGraphic", stdDeviation: o9 / 8, result: "blur" }), import_react17.default.createElement("feColorMatrix", { in: "blur", mode: "matrix", values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7", result: "ooze" }), import_react17.default.createElement("feBlend", { in: "SourceGraphic", in2: "ooze" })))));
}
e('.Jelly-module_container__LB5dG{animation:Jelly-module_rotate__gDXQZ calc(var(--uib-speed)*2) linear infinite;filter:url(#uib-jelly-ooze);height:calc(var(--uib-size)/2);position:relative;width:var(--uib-size);will-change:transform}.Jelly-module_container__LB5dG:after,.Jelly-module_container__LB5dG:before{background:var(--uib-color);border-radius:100%;content:"";height:100%;left:25%;position:absolute;top:0;width:50%;will-change:transform}.Jelly-module_container__LB5dG:before{animation:Jelly-module_shift-left__20PCG var(--uib-speed) ease infinite}.Jelly-module_container__LB5dG:after{animation:Jelly-module_shift-right__WCf3m var(--uib-speed) ease infinite}.Jelly-module_svg__Ae81n{height:0;position:absolute;width:0}@keyframes Jelly-module_rotate__gDXQZ{0%,49.999%,to{transform:none}50%,99.999%{transform:rotate(90deg)}}@keyframes Jelly-module_shift-left__20PCG{0%,to{transform:translateX(0)}50%{transform:scale(.65) translateX(-75%)}}@keyframes Jelly-module_shift-right__WCf3m{0%,to{transform:translateX(0)}50%{transform:scale(.65) translateX(75%)}}');

// node_modules/@uiball/loaders/dist/components/JellyTriangle.js
var import_react18 = __toESM(require_react(), 1);
var r9 = "JellyTriangle-module_container__4ehF3";
var a11 = "JellyTriangle-module_dot__2Eie0";
var t6 = "JellyTriangle-module_traveler__ypmB8";
var o8 = "JellyTriangle-module_svg__9e8PL";
function n3(i11) {
  var n7 = i11.size, s4 = void 0 === n7 ? 44 : n7, m = i11.color, u = void 0 === m ? "black" : m, _ = i11.speed, d = void 0 === _ ? 1.75 : _;
  return t("JellyTriangle", "size", s4, "number"), t("JellyTriangle", "color", u, "string"), t("JellyTriangle", "speed", d, "number"), import_react18.default.createElement(import_react18.default.Fragment, null, import_react18.default.createElement("div", { className: r9, style: { "--uib-size": s4 + "px", "--uib-color": u, "--uib-speed": d + "s" } }, import_react18.default.createElement("div", { className: a11 }), import_react18.default.createElement("div", { className: t6 })), import_react18.default.createElement("svg", { width: "0", height: "0", className: o8 }, import_react18.default.createElement("defs", null, import_react18.default.createElement("filter", { id: "uib-jelly-triangle-ooze" }, import_react18.default.createElement("feGaussianBlur", { in: "SourceGraphic", stdDeviation: s4 / 6, result: "blur" }), import_react18.default.createElement("feColorMatrix", { in: "blur", mode: "matrix", values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7", result: "ooze" }), import_react18.default.createElement("feBlend", { in: "SourceGraphic", in2: "ooze" })))));
}
e('.JellyTriangle-module_container__4ehF3{filter:url(#uib-jelly-triangle-ooze);height:var(--uib-size);position:relative;width:var(--uib-size)}.JellyTriangle-module_container__4ehF3:after,.JellyTriangle-module_container__4ehF3:before,.JellyTriangle-module_dot__2Eie0{background:var(--uib-color);border-radius:100%;content:"";height:33%;position:absolute;width:33%;will-change:transform}.JellyTriangle-module_dot__2Eie0{animation:JellyTriangle-module_grow__hs2if var(--uib-speed) ease infinite;left:30%;top:6%}.JellyTriangle-module_container__4ehF3:before{animation:JellyTriangle-module_grow__hs2if var(--uib-speed) ease calc(var(--uib-speed)*-.666) infinite;bottom:6%;right:0}.JellyTriangle-module_container__4ehF3:after{animation:JellyTriangle-module_grow__hs2if var(--uib-speed) ease calc(var(--uib-speed)*-.333) infinite;bottom:6%;left:0}.JellyTriangle-module_traveler__ypmB8{animation:JellyTriangle-module_triangulate__8nYye var(--uib-speed) ease infinite;background:var(--uib-color);border-radius:100%;height:33%;left:30%;position:absolute;top:6%;width:33%}.JellyTriangle-module_svg__9e8PL{height:0;position:absolute;width:0}@keyframes JellyTriangle-module_triangulate__8nYye{0%,to{transform:none}33.333%{transform:translate(120%,175%)}66.666%{transform:translate(-95%,175%)}}@keyframes JellyTriangle-module_grow__hs2if{0%,to{transform:scale(1.5)}20%,70%{transform:none}}');

// node_modules/@uiball/loaders/dist/components/DotSpinner.js
var import_react19 = __toESM(require_react(), 1);
var n4 = "DotSpinner-module_container__KTuXu";
var i9 = "DotSpinner-module_dot__-MwLA";
function a12(o9) {
  var a15 = o9.size, r12 = void 0 === a15 ? 40 : a15, d = o9.color, l6 = void 0 === d ? "black" : d, s4 = o9.speed, c = void 0 === s4 ? 0.9 : s4;
  return t("DotSpinner", "size", r12, "number"), t("DotSpinner", "color", l6, "string"), t("DotSpinner", "speed", c, "number"), import_react19.default.createElement("div", { className: n4, style: { "--uib-size": r12 + "px", "--uib-color": l6, "--uib-speed": c + "s" } }, import_react19.default.createElement("div", { className: i9 }), import_react19.default.createElement("div", { className: i9 }), import_react19.default.createElement("div", { className: i9 }), import_react19.default.createElement("div", { className: i9 }), import_react19.default.createElement("div", { className: i9 }), import_react19.default.createElement("div", { className: i9 }), import_react19.default.createElement("div", { className: i9 }), import_react19.default.createElement("div", { className: i9 }));
}
e('.DotSpinner-module_container__KTuXu{align-items:center;display:flex;height:var(--uib-size);justify-content:flex-start;position:relative;width:var(--uib-size)}.DotSpinner-module_dot__-MwLA{align-items:center;display:flex;height:100%;justify-content:flex-start;left:0;position:absolute;top:0;width:100%}.DotSpinner-module_dot__-MwLA:before{animation:DotSpinner-module_pulse__uQSiw calc(var(--uib-speed)*1.111) ease-in-out infinite;background-color:var(--uib-color);border-radius:50%;content:"";height:20%;opacity:.5;transform:scale(0);width:20%}.DotSpinner-module_dot__-MwLA:nth-child(2){transform:rotate(45deg)}.DotSpinner-module_dot__-MwLA:nth-child(2):before{animation-delay:calc(var(--uib-speed)*-.875)}.DotSpinner-module_dot__-MwLA:nth-child(3){transform:rotate(90deg)}.DotSpinner-module_dot__-MwLA:nth-child(3):before{animation-delay:calc(var(--uib-speed)*-.75)}.DotSpinner-module_dot__-MwLA:nth-child(4){transform:rotate(135deg)}.DotSpinner-module_dot__-MwLA:nth-child(4):before{animation-delay:calc(var(--uib-speed)*-.625)}.DotSpinner-module_dot__-MwLA:nth-child(5){transform:rotate(180deg)}.DotSpinner-module_dot__-MwLA:nth-child(5):before{animation-delay:calc(var(--uib-speed)*-.5)}.DotSpinner-module_dot__-MwLA:nth-child(6){transform:rotate(225deg)}.DotSpinner-module_dot__-MwLA:nth-child(6):before{animation-delay:calc(var(--uib-speed)*-.375)}.DotSpinner-module_dot__-MwLA:nth-child(7){transform:rotate(270deg)}.DotSpinner-module_dot__-MwLA:nth-child(7):before{animation-delay:calc(var(--uib-speed)*-.25)}.DotSpinner-module_dot__-MwLA:nth-child(8){transform:rotate(315deg)}.DotSpinner-module_dot__-MwLA:nth-child(8):before{animation-delay:calc(var(--uib-speed)*-.125)}@keyframes DotSpinner-module_pulse__uQSiw{0%,to{opacity:.5;transform:scale(0)}50%{opacity:1;transform:scale(1)}}');

// node_modules/@uiball/loaders/dist/components/RaceBy.js
var import_react20 = __toESM(require_react(), 1);
var t7 = "RaceBy-module_container__pu79P";
function a13(r12) {
  var a15 = r12.size, o9 = void 0 === a15 ? 80 : a15, n7 = r12.color, c = void 0 === n7 ? "black" : n7, s4 = r12.lineWeight, l6 = void 0 === s4 ? 5 : s4, u = r12.speed, d = void 0 === u ? 1.4 : u;
  return t("RaceBy", "size", o9, "number"), t("RaceBy", "color", c, "string"), t("RaceBy", "speed", d, "number"), t("RaceBy", "lineWeight", l6, "number"), import_react20.default.createElement("div", { className: t7, style: { "--uib-size": o9 + "px", "--uib-color": c, "--uib-line-weight": l6 + "px", "--uib-speed": d + "s" } });
}
e('.RaceBy-module_container__pu79P{align-items:center;border-radius:calc(var(--uib-line-weight)/2);display:flex;height:var(--uib-line-weight);justify-content:center;overflow:hidden;position:relative;transform:translateZ(0);width:var(--uib-size)}.RaceBy-module_container__pu79P:before{background-color:var(--uib-color);content:"";height:100%;left:0;opacity:.1;position:absolute;top:0;width:100%}.RaceBy-module_container__pu79P:after{animation:RaceBy-module_raceBy__g-TGB var(--uib-speed) ease-in-out infinite;background-color:var(--uib-color);border-radius:calc(var(--uib-line-weight)/2);content:"";height:100%;transform:translateX(-100%);width:100%}@keyframes RaceBy-module_raceBy__g-TGB{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}');

// node_modules/@uiball/loaders/dist/components/LineWobble.js
var import_react21 = __toESM(require_react(), 1);
var t8 = "LineWobble-module_container__IkLcd";
function r10(o9) {
  var r12 = o9.size, n7 = void 0 === r12 ? 80 : r12, l6 = o9.color, a15 = void 0 === l6 ? "black" : l6, b = o9.lineWeight, s4 = void 0 === b ? 5 : b, c = o9.speed, d = void 0 === c ? 1.75 : c;
  return t("LineWobble", "size", n7, "number"), t("LineWobble", "color", a15, "string"), t("LineWobble", "speed", d, "number"), t("LineWobble", "lineWeight", s4, "number"), import_react21.default.createElement("div", { className: t8, style: { "--uib-size": n7 + "px", "--uib-color": a15, "--uib-line-weight": s4 + "px", "--uib-speed": d + "s" } });
}
e('.LineWobble-module_container__IkLcd{align-items:center;border-radius:calc(var(--uib-line-weight)/2);display:flex;height:var(--uib-line-weight);justify-content:center;overflow:hidden;position:relative;transform:translateZ(0);width:var(--uib-size)}.LineWobble-module_container__IkLcd:before{background-color:var(--uib-color);content:"";height:100%;left:0;opacity:.1;position:absolute;top:0;width:100%}.LineWobble-module_container__IkLcd:after{animation:LineWobble-module_wobble__XpxDM var(--uib-speed) ease-in-out infinite;background-color:var(--uib-color);border-radius:calc(var(--uib-line-weight)/2);content:"";height:100%;transform:translateX(-95%);width:100%}@keyframes LineWobble-module_wobble__XpxDM{0%,to{transform:translateX(-95%)}50%{transform:translateX(95%)}}');

// node_modules/@uiball/loaders/dist/components/Handsprings.js
var import_react22 = __toESM(require_react(), 1);
var a14 = "Handsprings-module_container__nNwDF";
function n5(r12) {
  var n7 = r12.size, t11 = void 0 === n7 ? 37 : n7, s4 = r12.color, o9 = void 0 === s4 ? "black" : s4, l6 = r12.lineWeight, d = void 0 === l6 ? 5 : l6, c = r12.speed, u = void 0 === c ? 2 : c;
  return t("Handsprings", "size", t11, "number"), t("Handsprings", "color", o9, "string"), t("Handsprings", "lineWeight", d, "number"), t("Handsprings", "speed", u, "number"), import_react22.default.createElement("div", { className: a14, style: { "--uib-size": t11 + "px", "--uib-color": o9, "--uib-line-weight": d + "px", "--uib-speed": u + "s" } });
}
e('.Handsprings-module_container__nNwDF{align-items:center;animation:Handsprings-module_rotate__TaVHW var(--uib-speed) linear infinite;border-radius:calc(var(--uib-line-weight)/2);display:flex;height:var(--uib-line-weight);justify-content:center;margin-bottom:calc(var(--uib-size)*.65);overflow:hidden;position:relative;width:calc(var(--uib-size)*2)}.Handsprings-module_container__nNwDF:before{animation:Handsprings-module_wobble__6Xfea var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.225) infinite;background-color:var(--uib-color);border-radius:calc(var(--uib-line-weight)/2);content:"";height:100%;transform:translateX(-120%);width:40%}@keyframes Handsprings-module_wobble__6Xfea{0%,to{transform:translateX(-120%)}50%{transform:translateX(120%)}}@keyframes Handsprings-module_rotate__TaVHW{0%{transform:translateY(calc(var(--uib-size)*-.125)) rotate(0deg)}to{transform:translateY(calc(var(--uib-size)*-.125)) rotate(1turn)}}');

// node_modules/@uiball/loaders/dist/components/Pinwheel.js
var import_react23 = __toESM(require_react(), 1);
var l4 = "Pinwheel-module_container__GGm-6";
var t9 = "Pinwheel-module_line__0NJWV";
function n6(a15) {
  var n7 = a15.size, o9 = void 0 === n7 ? 35 : n7, r12 = a15.color, c = void 0 === r12 ? "black" : r12, d = a15.lineWeight, s4 = void 0 === d ? 3.5 : d, m = a15.speed, u = void 0 === m ? 1 : m;
  return t("Pinwheel", "size", o9, "number"), t("Pinwheel", "color", c, "string"), t("Pinwheel", "speed", u, "number"), t("Pinwheel", "lineWeight", s4, "number"), import_react23.default.createElement("div", { className: l4, style: { "--uib-size": o9 + "px", "--uib-color": c, "--uib-line-weight": s4 + "px", "--uib-speed": u + "s" } }, import_react23.default.createElement("div", { className: t9 }), import_react23.default.createElement("div", { className: t9 }), import_react23.default.createElement("div", { className: t9 }), import_react23.default.createElement("div", { className: t9 }), import_react23.default.createElement("div", { className: t9 }), import_react23.default.createElement("div", { className: t9 }));
}
e(".Pinwheel-module_container__GGm-6{align-items:center;display:flex;height:var(--uib-size);justify-content:center;position:relative;width:var(--uib-size)}.Pinwheel-module_line__0NJWV{animation:Pinwheel-module_rotate__Lqw4D var(--uib-speed) ease-in-out infinite;background-color:var(--uib-color);border-radius:calc(var(--uib-line-weight)/2);height:var(--uib-line-weight);left:0;position:absolute;top:calc(50% - var(--uib-line-weight)/2);width:100%}.Pinwheel-module_line__0NJWV:nth-child(2){animation-delay:calc(var(--uib-speed)*.075);opacity:.8}.Pinwheel-module_line__0NJWV:nth-child(3){animation-delay:calc(var(--uib-speed)*.15);opacity:.6}.Pinwheel-module_line__0NJWV:nth-child(4){animation-delay:calc(var(--uib-speed)*.225);opacity:.4}.Pinwheel-module_line__0NJWV:nth-child(5){animation-delay:calc(var(--uib-speed)*.3);opacity:.2}.Pinwheel-module_line__0NJWV:nth-child(6){animation-delay:calc(var(--uib-speed)*.375);opacity:.1}@keyframes Pinwheel-module_rotate__Lqw4D{0%{transform:rotate(0deg)}to{transform:rotate(180deg)}}");

// node_modules/@uiball/loaders/dist/components/MrMiyagi.js
var import_react24 = __toESM(require_react(), 1);
var t10 = "MrMiyagi-module_container__Rld70";
var r11 = "MrMiyagi-module_line__XVgwi";
function l5(a15) {
  var l6 = a15.size, n7 = void 0 === l6 ? 35 : l6, o9 = a15.color, c = void 0 === o9 ? "black" : o9, d = a15.lineWeight, s4 = void 0 === d ? 3.5 : d, m = a15.speed, u = void 0 === m ? 1 : m;
  return t("MrMiyagi", "size", n7, "number"), t("MrMiyagi", "color", c, "string"), t("MrMiyagi", "speed", u, "number"), t("MrMiyagi", "lineWeight", s4, "number"), import_react24.default.createElement("div", { className: t10, style: { "--uib-size": n7 + "px", "--uib-color": c, "--uib-line-weight": s4 + "px", "--uib-speed": u + "s" } }, import_react24.default.createElement("div", { className: r11 }), import_react24.default.createElement("div", { className: r11 }), import_react24.default.createElement("div", { className: r11 }), import_react24.default.createElement("div", { className: r11 }), import_react24.default.createElement("div", { className: r11 }), import_react24.default.createElement("div", { className: r11 }));
}
e(".MrMiyagi-module_container__Rld70{align-items:center;display:flex;height:var(--uib-size);justify-content:center;position:relative;width:var(--uib-size)}.MrMiyagi-module_line__XVgwi{animation:MrMiyagi-module_rotate__V8TX8 var(--uib-speed) ease-in-out infinite alternate;background-color:var(--uib-color);border-radius:calc(var(--uib-line-weight)/2);height:var(--uib-line-weight);left:0;position:absolute;top:calc(50% - var(--uib-line-weight)/2);width:100%}.MrMiyagi-module_line__XVgwi:nth-child(2){animation-delay:calc(var(--uib-speed)*.075);opacity:.8}.MrMiyagi-module_line__XVgwi:nth-child(3){animation-delay:calc(var(--uib-speed)*.15);opacity:.6}.MrMiyagi-module_line__XVgwi:nth-child(4){animation-delay:calc(var(--uib-speed)*.225);opacity:.4}.MrMiyagi-module_line__XVgwi:nth-child(5){animation-delay:calc(var(--uib-speed)*.3);opacity:.2}.MrMiyagi-module_line__XVgwi:nth-child(6){animation-delay:calc(var(--uib-speed)*.375);opacity:.1}@keyframes MrMiyagi-module_rotate__V8TX8{0%{transform:rotate(0deg)}to{transform:rotate(180deg)}}");

// node_modules/@uiball/loaders/dist/index.js
var import_react25 = __toESM(require_react());
export {
  e9 as ChaoticOrbit,
  l3 as DotPulse,
  a12 as DotSpinner,
  s2 as DotWave,
  n5 as Handsprings,
  a10 as Jelly,
  n3 as JellyTriangle,
  i7 as LeapFrog,
  r10 as LineWobble,
  i4 as Metronome,
  n2 as Momentum,
  l5 as MrMiyagi,
  o7 as NewtonsCradle,
  i2 as Orbit,
  a2 as Ping,
  n6 as Pinwheel,
  o4 as Pulsar,
  a13 as RaceBy,
  o2 as Ring,
  l as Ripples,
  l2 as SuperBalls,
  i as ThreeBody,
  t3 as Waveform,
  t5 as Wobble
};
//# sourceMappingURL=@uiball_loaders.js.map
