import{d as $,f as V,e as te,h as E,o as P,y as ne,z as oe,T as ae,G as re,H as se,b as L,x as y,R as Q,S as J,_ as F,c as G,u as X,t as ie,a5 as j,O as N,a6 as ce,l as de,a7 as le,a8 as ue,a9 as fe,aa as pe,ab as ge,ac as me,ad as he,ae as _e,af as ye,ag as ve,ah as be,ai as we,E as Se}from"./chunks/framework.160e32d9.js";import{t as q}from"./chunks/theme.f7c0c013.js";const Te=e=>{if(window.dataLayer&&window.gtag)return;const o=document.createElement("script");o.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,o.async=!0,document.head.appendChild(o),window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},gtag("js",new Date),gtag("config",e)},Ae=({id:e})=>{e&&typeof window<"u"&&Te(e)};var Ce=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Y={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(e,o){(function(t,a){e.exports=a()})(Ce,function(){var t={};t.version="0.2.0";var a=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(n){var r,s;for(r in n)s=n[r],s!==void 0&&n.hasOwnProperty(r)&&(a[r]=s);return this},t.status=null,t.set=function(n){var r=t.isStarted();n=l(n,a.minimum,1),t.status=n===1?null:n;var s=t.render(!r),d=s.querySelector(a.barSelector),m=a.speed,v=a.easing;return s.offsetWidth,f(function(c){a.positionUsing===""&&(a.positionUsing=t.getPositioningCSS()),_(d,b(n,m,v)),n===1?(_(s,{transition:"none",opacity:1}),s.offsetWidth,setTimeout(function(){_(s,{transition:"all "+m+"ms linear",opacity:0}),setTimeout(function(){t.remove(),c()},m)},m)):setTimeout(c,m)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var n=function(){setTimeout(function(){!t.status||(t.trickle(),n())},a.trickleSpeed)};return a.trickle&&n(),this},t.done=function(n){return!n&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(n){var r=t.status;return r?(typeof n!="number"&&(n=(1-r)*l(Math.random()*r,.1,.95)),r=l(r+n,0,.994),t.set(r)):t.start()},t.trickle=function(){return t.inc(Math.random()*a.trickleRate)},function(){var n=0,r=0;t.promise=function(s){return!s||s.state()==="resolved"?this:(r===0&&t.start(),n++,r++,s.always(function(){r--,r===0?(n=0,t.done()):t.set((n-r)/n)}),this)}}(),t.render=function(n){if(t.isRendered())return document.getElementById("nprogress");x(document.documentElement,"nprogress-busy");var r=document.createElement("div");r.id="nprogress",r.innerHTML=a.template;var s=r.querySelector(a.barSelector),d=n?"-100":u(t.status||0),m=document.querySelector(a.parent),v;return _(s,{transition:"all 0 linear",transform:"translate3d("+d+"%,0,0)"}),a.showSpinner||(v=r.querySelector(a.spinnerSelector),v&&A(v)),m!=document.body&&x(m,"nprogress-custom-parent"),m.appendChild(r),r},t.remove=function(){S(document.documentElement,"nprogress-busy"),S(document.querySelector(a.parent),"nprogress-custom-parent");var n=document.getElementById("nprogress");n&&A(n)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var n=document.body.style,r="WebkitTransform"in n?"Webkit":"MozTransform"in n?"Moz":"msTransform"in n?"ms":"OTransform"in n?"O":"";return r+"Perspective"in n?"translate3d":r+"Transform"in n?"translate":"margin"};function l(n,r,s){return n<r?r:n>s?s:n}function u(n){return(-1+n)*100}function b(n,r,s){var d;return a.positionUsing==="translate3d"?d={transform:"translate3d("+u(n)+"%,0,0)"}:a.positionUsing==="translate"?d={transform:"translate("+u(n)+"%,0)"}:d={"margin-left":u(n)+"%"},d.transition="all "+r+"ms "+s,d}var f=function(){var n=[];function r(){var s=n.shift();s&&s(r)}return function(s){n.push(s),n.length==1&&r()}}(),_=function(){var n=["Webkit","O","Moz","ms"],r={};function s(c){return c.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(p,i){return i.toUpperCase()})}function d(c){var p=document.body.style;if(c in p)return c;for(var i=n.length,g=c.charAt(0).toUpperCase()+c.slice(1),h;i--;)if(h=n[i]+g,h in p)return h;return c}function m(c){return c=s(c),r[c]||(r[c]=d(c))}function v(c,p,i){p=m(p),c.style[p]=i}return function(c,p){var i=arguments,g,h;if(i.length==2)for(g in p)h=p[g],h!==void 0&&p.hasOwnProperty(g)&&v(c,g,h);else v(c,i[1],i[2])}}();function w(n,r){var s=typeof n=="string"?n:T(n);return s.indexOf(" "+r+" ")>=0}function x(n,r){var s=T(n),d=s+r;w(s,r)||(n.className=d.substring(1))}function S(n,r){var s=T(n),d;!w(n,r)||(d=s.replace(" "+r+" "," "),n.className=d.substring(1,d.length-1))}function T(n){return(" "+(n.className||"")+" ").replace(/\s+/gi," ")}function A(n){n&&n.parentNode&&n.parentNode.removeChild(n)}return t})})(Y);const I=Y.exports,xe=e=>{if(typeof window>"u")return;const{router:o}=e;return setTimeout(()=>{I.configure({showSpinner:!1});const t=o.onBeforeRouteChange,a=o.onAfterRouteChanged;o.onBeforeRouteChange=l=>{I.start(),t==null||t(l)},o.onAfterRouteChanged=l=>{I.done(),a==null||a(l)}}),I};var ke=typeof global=="object"&&global&&global.Object===Object&&global;const Oe=ke;var je=typeof self=="object"&&self&&self.Object===Object&&self,$e=Oe||je||Function("return this")();const K=$e;var Ee=K.Symbol;const R=Ee;var Z=Object.prototype,Ie=Z.hasOwnProperty,Re=Z.toString,k=R?R.toStringTag:void 0;function Pe(e){var o=Ie.call(e,k),t=e[k];try{e[k]=void 0;var a=!0}catch{}var l=Re.call(e);return a&&(o?e[k]=t:delete e[k]),l}var Fe=Object.prototype,Be=Fe.toString;function Le(e){return Be.call(e)}var Ne="[object Null]",De="[object Undefined]",U=R?R.toStringTag:void 0;function Ge(e){return e==null?e===void 0?De:Ne:U&&U in Object(e)?Pe(e):Le(e)}function We(e){return e!=null&&typeof e=="object"}var Me="[object Symbol]";function qe(e){return typeof e=="symbol"||We(e)&&Ge(e)==Me}var Ue=/\s/;function ze(e){for(var o=e.length;o--&&Ue.test(e.charAt(o)););return o}var He=/^\s+/;function Ve(e){return e&&e.slice(0,ze(e)+1).replace(He,"")}function D(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}var z=0/0,Qe=/^[-+]0x[0-9a-f]+$/i,Je=/^0b[01]+$/i,Xe=/^0o[0-7]+$/i,Ye=parseInt;function H(e){if(typeof e=="number")return e;if(qe(e))return z;if(D(e)){var o=typeof e.valueOf=="function"?e.valueOf():e;e=D(o)?o+"":o}if(typeof e!="string")return e===0?e:+e;e=Ve(e);var t=Je.test(e);return t||Xe.test(e)?Ye(e.slice(2),t?2:8):Qe.test(e)?z:+e}var Ke=function(){return K.Date.now()};const B=Ke;var Ze="Expected a function",et=Math.max,tt=Math.min;function nt(e,o,t){var a,l,u,b,f,_,w=0,x=!1,S=!1,T=!0;if(typeof e!="function")throw new TypeError(Ze);o=H(o)||0,D(t)&&(x=!!t.leading,S="maxWait"in t,u=S?et(H(t.maxWait)||0,o):u,T="trailing"in t?!!t.trailing:T);function A(i){var g=a,h=l;return a=l=void 0,w=i,b=e.apply(h,g),b}function n(i){return w=i,f=setTimeout(d,o),x?A(i):b}function r(i){var g=i-_,h=i-w,M=o-g;return S?tt(M,u-h):M}function s(i){var g=i-_,h=i-w;return _===void 0||g>=o||g<0||S&&h>=u}function d(){var i=B();if(s(i))return m(i);f=setTimeout(d,r(i))}function m(i){return f=void 0,T&&a?A(i):(a=l=void 0,b)}function v(){f!==void 0&&clearTimeout(f),w=0,a=_=l=f=void 0}function c(){return f===void 0?b:m(B())}function p(){var i=B(),g=s(i);if(a=arguments,l=this,_=i,g){if(f===void 0)return n(_);if(S)return clearTimeout(f),f=setTimeout(d,o),A(_)}return f===void 0&&(f=setTimeout(d,o)),b}return p.cancel=v,p.flush=c,p}const ot=e=>(Q("data-v-269918d6"),e=e(),J(),e),at=ot(()=>y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[y("path",{d:"M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"})],-1)),rt=[at],st=$({__name:"BackToTop",props:{threshold:{type:Number,default:100}},setup(e){const o=e,t=V(0),a=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,l=()=>{window.scrollTo({top:0,behavior:"smooth"}),t.value=0},u=te(()=>t.value>o.threshold);return E(()=>{t.value=a(),window.addEventListener("scroll",nt(()=>{t.value=a()},50))}),(b,f)=>(P(),ne(ae,{name:"fade","enter-active-class":"animate__animated animate__bounceInRight","leave-active-class":"animate__animated animate__bounceOutRight"},{default:oe(()=>[re(y("div",{class:"back-to-top",onClick:l},rt,512),[[se,L(u)]])]),_:1}))}});const it=F(st,[["__scopeId","data-v-269918d6"]]),ct={class:"google-ad-aside"},dt=["data-ad-client","data-ad-slot","data-ad-format","data-full-width-responsive"],lt=$({__name:"GoogleAdDocAside",props:{adClient:{type:String,required:!0},adSlot:{type:String,required:!0},adFormat:{type:String,default:"auto"},fullWidthResponsive:{type:Boolean,default:!1}},setup(e){const o=e;return E(()=>{typeof window<"u"?(window.adsbygoogle=window.adsbygoogle||[]).push({}):console.warn("[GoogleAdDocAside] adsbygoogle object is undefined!")}),(t,a)=>(P(),G("div",ct,[y("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":o.adClient,"data-ad-slot":o.adSlot,"data-ad-format":o.adFormat,"data-full-width-responsive":o.fullWidthResponsive},null,8,dt)]))}});const ut=F(lt,[["__scopeId","data-v-c443717e"]]),ft={class:"google-ad-doc-footer"},pt=["data-ad-client","data-ad-slot","data-ad-format","data-full-width-responsive"],gt=$({__name:"GoogleAdDocFooter",props:{adClient:{type:String,required:!0},adSlot:{type:String,required:!0},adFormat:{type:String,default:"auto"},fullWidthResponsive:{type:Boolean,default:!0}},setup(e){const o=e;return E(()=>{typeof window<"u"?(window.adsbygoogle=window.adsbygoogle||[]).push({}):console.warn("[GoogleAdDocAside] adsbygoogle object is undefined!")}),(t,a)=>(P(),G("div",ft,[y("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":o.adClient,"data-ad-slot":o.adSlot,"data-ad-format":o.adFormat,"data-full-width-responsive":o.fullWidthResponsive},null,8,pt)]))}});const mt=F(gt,[["__scopeId","data-v-d5594cb8"]]),W=e=>(Q("data-v-c7547d19"),e=e(),J(),e),ht={class:"NotFound"},_t=W(()=>y("p",{class:"code"},"404",-1)),yt=W(()=>y("h1",{class:"title"},"页面不存在",-1)),vt=W(()=>y("div",{class:"divider"},null,-1)),bt={class:"quote"},wt={class:"action"},St=["href"],Tt=$({__name:"NotFound",setup(e){const{site:o}=X();let t=V("加载中");async function a(){const u=await(await window.fetch("https://v1.hitokoto.cn")).json();t.value=`${u.hitokoto} —— ${u.from_who?u.from_who+" ":""}『${u.from||""}』 `}return E(()=>{a().catch(l=>{t.value="加载失败",console.error(l)})}),(l,u)=>(P(),G("div",ht,[_t,yt,vt,y("blockquote",bt,ie(L(t)),1),y("div",wt,[y("a",{class:"link",href:L(o).base,"aria-label":"返回首页"}," 返回首页 ",8,St)])]))}});const At=F(Tt,[["__scopeId","data-v-c7547d19"]]);function Ct(e,o){const{adClient:t}=o;if(t&&typeof window<"u"){const a=document.createElement("script");a.async=!0,a.crossOrigin="anonymous",a.type="text/javascript",a.src=`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${t}`,document.head.appendChild(a)}}const O={adClient:"ca-pub-8868204327924354",docAsideAdSlot:"1137431788",docFooterAdSlot:"7449637304"},xt={...q,Layout(){return j(q.Layout,null,{"aside-ads-before":()=>j(ut,{adClient:O.adClient,adSlot:O.docAsideAdSlot,adFormat:"rectangle, horizontal"},()=>[]),"doc-after":()=>j(mt,{adClient:O.adClient,adSlot:O.docFooterAdSlot,adFormat:"horizontal"},()=>[]),"layout-bottom":()=>[j(it)]})},NotFound:At,enhanceApp:e=>{xe(e),Ae({id:"G-QL2J611R9Q"}),Ct(e,{adClient:O.adClient})}};function ee(e){if(e.extends){const o=ee(e.extends);return{...o,...e,async enhanceApp(t){o.enhanceApp&&await o.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const C=ee(xt),kt=$({name:"VitePressApp",setup(){const{site:e}=X();return E(()=>{de(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),le(),ue(),fe(),C.setup&&C.setup(),()=>j(C.Layout)}});async function Ot(){const e=$t(),o=jt();o.provide(pe,e);const t=ge(e.route);return o.provide(me,t),o.component("Content",he),o.component("ClientOnly",_e),Object.defineProperties(o.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),C.enhanceApp&&await C.enhanceApp({app:o,router:e,siteData:ye}),{app:o,router:e,data:t}}function jt(){return ve(kt)}function $t(){let e=N,o;return be(t=>{let a=we(t);return e&&(o=a),(e||o===a)&&(a=a.replace(/\.js$/,".lean.js")),N&&(e=!1),Se(()=>import(a),[])},C.NotFound)}N&&Ot().then(({app:e,router:o,data:t})=>{o.go().then(()=>{ce(o.route,t.site),e.mount("#app")})});export{Ot as createApp};
