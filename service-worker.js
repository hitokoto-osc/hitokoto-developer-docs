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
    "revision": "a1685a6756ffdd1268f97eb997a5a621"
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
    "url": "assets/js/11.20ad189c.js",
    "revision": "9148229acd297505e477afcba6f772d0"
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
    "url": "assets/js/2.521872cc.js",
    "revision": "ae636cc24ba2fb057453db92fcc648a9"
  },
  {
    "url": "assets/js/3.b93e9912.js",
    "revision": "b7f99b3efd646ba8757f93713a8236c2"
  },
  {
    "url": "assets/js/4.56e1d7f5.js",
    "revision": "f49a2fa24f13d5a6f912b911efe2775e"
  },
  {
    "url": "assets/js/5.fda35b45.js",
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
    "url": "assets/js/app.f434d122.js",
    "revision": "572d453df0bb802bbe41490533224d4d"
  },
  {
    "url": "core/index.html",
    "revision": "c1c7b45089fae8903303f7b8c37759a3"
  },
  {
    "url": "core/interface/index.html",
    "revision": "cdde1bb74f3a4af4bedbbf17835e2e36"
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
    "revision": "020b78b6cba646ba1874cbc87671ccbc"
  },
  {
    "url": "introduce/index.html",
    "revision": "89bab120549b1960236a3ef1cb423314"
  },
  {
    "url": "logo.png",
    "revision": "04589b56f180537dbebd0a64afc57470"
  },
  {
    "url": "sentence/demo/index.html",
    "revision": "a0ddad759e496bc8e18b324b4a7e1e12"
  },
  {
    "url": "sentence/deploy/index.html",
    "revision": "278b6fd417ff4ddc7ec37b753f7c12e5"
  },
  {
    "url": "sentence/index.html",
    "revision": "00072cc1f713e6aa0c1ab0a7534ec86b"
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
