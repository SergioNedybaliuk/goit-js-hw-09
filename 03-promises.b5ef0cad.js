var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const i=document.querySelector(".form");i.addEventListener("submit",function(e){e.preventDefault();let t=Number(document.querySelector('input[name="delay"]').value),n=Number(document.querySelector('input[name="step"]').value),o=Number(document.querySelector('input[name="amount"]').value);for(let e=1;e<=o;e+=1)(function(e,t){return new Promise((n,o)=>{let r=Math.random()>.3;setTimeout(()=>{r?n({position:e,delay:t}):o({position:e,delay:t})},t)})}// document.addEventListener('DOMContentLoaded', () => {
// });
//# sourceMappingURL=03-promises.b5ef0cad.js.map
)(e,t).then(({position:e,delay:t})=>{(0,r.Notify).success(`✅ Fulfilled promise ${e} in ${t}ms`)}).catch(({position:e,delay:t})=>{(0,r.Notify).failure(`❌ Rejected promise ${e} in ${t}ms`)}),t+=n});
//# sourceMappingURL=03-promises.b5ef0cad.js.map
