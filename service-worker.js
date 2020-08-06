/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e1ef496b50989bb99f17b4576fc3e5d9"
  },
  {
    "url": "assets/css/0.styles.65dfdbc7.css",
    "revision": "01d60b541cd3feebfacdeeddb1438d7d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.87574fea.js",
    "revision": "a55fd49eaced0ea5e9320aa82a365373"
  },
  {
    "url": "assets/js/11.3137686d.js",
    "revision": "5f9623fb3b8b8d6f703aa93c5acfdb24"
  },
  {
    "url": "assets/js/12.fa3bbf48.js",
    "revision": "b37439b5f54c36690f9162ce25989700"
  },
  {
    "url": "assets/js/13.36a8230f.js",
    "revision": "8e0b1dc1b5fe750bca206fdf1acbd205"
  },
  {
    "url": "assets/js/2.ee98efc5.js",
    "revision": "ae636cc24ba2fb057453db92fcc648a9"
  },
  {
    "url": "assets/js/3.324aa1f6.js",
    "revision": "b7f99b3efd646ba8757f93713a8236c2"
  },
  {
    "url": "assets/js/4.6b15557d.js",
    "revision": "f49a2fa24f13d5a6f912b911efe2775e"
  },
  {
    "url": "assets/js/5.c7c364e7.js",
    "revision": "3a88cb670fc8ff91980a9ce0bd7f6ceb"
  },
  {
    "url": "assets/js/6.844c4e7f.js",
    "revision": "690076d7f009d8b8fae3ac60c692a8a4"
  },
  {
    "url": "assets/js/7.bb4fd5bb.js",
    "revision": "2b178a592208ecd94ae2f373fd30326d"
  },
  {
    "url": "assets/js/8.cb74b0a5.js",
    "revision": "5fd24362ddfaa0f23cd51abbda1e64c7"
  },
  {
    "url": "assets/js/9.c985fe2e.js",
    "revision": "c097d44765377eeb1d978f17ec83256e"
  },
  {
    "url": "assets/js/app.70b2a575.js",
    "revision": "6563b52be862e77441a0fbb72d898472"
  },
  {
    "url": "core/index.html",
    "revision": "61b421e43856ba092fcf555b0c58310e"
  },
  {
    "url": "core/interface/index.html",
    "revision": "fec98f12c88c51d0f8e4575011751730"
  },
  {
    "url": "icons/logo.png",
    "revision": "c198aae62300654f689b599e1d6651e4"
  },
  {
    "url": "icons/logo.svg",
    "revision": "767db161f958114ba4ff8d1081a65df7"
  },
  {
    "url": "index.html",
    "revision": "802232340b421ec38851a5c32f87c16f"
  },
  {
    "url": "introduce/index.html",
    "revision": "12669fe237af6542b49aa57bac18e2f4"
  },
  {
    "url": "logo.png",
    "revision": "04589b56f180537dbebd0a64afc57470"
  },
  {
    "url": "sentence/demo/index.html",
    "revision": "609595d0c2e55c43ba50f5bb6157c286"
  },
  {
    "url": "sentence/deploy/index.html",
    "revision": "4ab4a09a062313382abe6a5388c94321"
  },
  {
    "url": "sentence/index.html",
    "revision": "85d2bb8abffcc0299c4c434e98b247d9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
