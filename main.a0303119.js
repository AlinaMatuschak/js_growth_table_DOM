parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return l(e)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=document.querySelector(".field"),c=i.firstElementChild,a=c.rows,d=a[0].cells,u=document.querySelector(".remove-row"),s=document.querySelector(".append-row"),m=document.querySelector(".remove-column"),f=document.querySelector(".append-column");u.addEventListener("click",function(){c.lastElementChild.remove(),9===a.length&&(s.disabled=!1),2===a.length&&(u.disabled=!0)}),s.addEventListener("click",function(){2===a.length&&(u.disabled=!1),9===a.length&&(s.disabled=!0);var e=document.createElement("tr");e.innerHTML="<td></td>".repeat(a[0].cells.length),c.append(e)}),m.addEventListener("click",function(){3===d.length&&(m.disabled=!0),10===d.length&&(f.disabled=!1),e(a).forEach(function(e){e.lastElementChild.remove()})}),f.addEventListener("click",function(){2===d.length&&(m.disabled=!1),9===d.length&&(f.disabled=!0),e(a).forEach(function(e){var t=document.createElement("td");e.append(t)})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.a0303119.js.map