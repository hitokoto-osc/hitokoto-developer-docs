if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const t=e=>n(e,r),c={module:{uri:r},exports:d,require:t};s[r]=Promise.all(i.map((e=>c[e]||t(e)))).then((e=>(l(...e),d)))}}define(["./workbox-e0782b83"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"01b52b1ea86a707b7e8d849a9f7f6b80"},{url:"assets/app.9d63dd0e.js",revision:null},{url:"assets/chunks/virtual_search-data.0d5e3d72.js",revision:null},{url:"assets/core_index.md.8ebd187f.js",revision:null},{url:"assets/core_index.md.8ebd187f.lean.js",revision:null},{url:"assets/core_interface.md.b62e5b8f.js",revision:null},{url:"assets/core_interface.md.b62e5b8f.lean.js",revision:null},{url:"assets/index.md.484c90cf.js",revision:null},{url:"assets/index.md.484c90cf.lean.js",revision:null},{url:"assets/introduce.md.7a70ed32.js",revision:null},{url:"assets/introduce.md.7a70ed32.lean.js",revision:null},{url:"assets/sentence_demo.md.e57edfba.js",revision:null},{url:"assets/sentence_demo.md.e57edfba.lean.js",revision:null},{url:"assets/sentence_deploy.md.2d3ec0d6.js",revision:null},{url:"assets/sentence_deploy.md.2d3ec0d6.lean.js",revision:null},{url:"assets/sentence_index.md.c0c1880c.js",revision:null},{url:"assets/sentence_index.md.c0c1880c.lean.js",revision:null},{url:"assets/style.6d802a13.css",revision:null},{url:"core/index.html",revision:"9d3345e8113cfd6471c89280913ebdf3"},{url:"core/interface/index.html",revision:"ad6c789578a1a3372720da8626282b42"},{url:"index.html",revision:"a026f0aac66cc3d1ce392e15646105a0"},{url:"introduce/index.html",revision:"b07f15f9c37a518cc41a9b83c3f96576"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"sentence/demo/index.html",revision:"5698622e7b5c51707902e03dc7f9a1d1"},{url:"sentence/deploy/index.html",revision:"3bdf0261434b078af4e23c48d70b48fc"},{url:"sentence/index.html",revision:"fb2abecb9032ec365801757473e9213e"},{url:"manifest.webmanifest",revision:"46517e94b96e5e92ce96a37ba94f9b33"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
