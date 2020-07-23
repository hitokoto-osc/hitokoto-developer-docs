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
    "revision": "6e5d8a0f6be81044cb3245d5dc39a9fd"
  },
  {
    "url": "assets/css/0.styles.3a64f516.css",
    "revision": "f845ad96849e1ec9aafb0f02a3b2b356"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.90b537d4.js",
    "revision": "a55fd49eaced0ea5e9320aa82a365373"
  },
  {
    "url": "assets/js/11.c4188a10.js",
    "revision": "5f9623fb3b8b8d6f703aa93c5acfdb24"
  },
  {
    "url": "assets/js/12.646de178.js",
    "revision": "b37439b5f54c36690f9162ce25989700"
  },
  {
    "url": "assets/js/13.36a8230f.js",
    "revision": "8e0b1dc1b5fe750bca206fdf1acbd205"
  },
  {
    "url": "assets/js/2.6bfbf9a5.js",
    "revision": "bcb85cd00bb53ccf1a8c052434a531d3"
  },
  {
    "url": "assets/js/3.a3597a92.js",
    "revision": "b7f99b3efd646ba8757f93713a8236c2"
  },
  {
    "url": "assets/js/4.6b15557d.js",
    "revision": "f49a2fa24f13d5a6f912b911efe2775e"
  },
  {
    "url": "assets/js/5.78fdf1d8.js",
    "revision": "3a88cb670fc8ff91980a9ce0bd7f6ceb"
  },
  {
    "url": "assets/js/6.570120fa.js",
    "revision": "690076d7f009d8b8fae3ac60c692a8a4"
  },
  {
    "url": "assets/js/7.e5c56b5b.js",
    "revision": "2b178a592208ecd94ae2f373fd30326d"
  },
  {
    "url": "assets/js/8.ea2b07d1.js",
    "revision": "5fd24362ddfaa0f23cd51abbda1e64c7"
  },
  {
    "url": "assets/js/9.812427db.js",
    "revision": "c097d44765377eeb1d978f17ec83256e"
  },
  {
    "url": "assets/js/app.15a617e2.js",
    "revision": "844a9451477064c90b2033c1627d28d5"
  },
  {
    "url": "core/index.html",
    "revision": "77c28d3a2f81410f31bd973a51743e6d"
  },
  {
    "url": "core/interface/index.html",
    "revision": "7b27e26ad2078f4cd65fc48e5627c459"
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
    "revision": "19db45ce34024d665bf8f0ad5bf61df8"
  },
  {
    "url": "introduce/index.html",
    "revision": "35b34b4503bfae0a1d4ad12d33b907fa"
  },
  {
    "url": "logo.png",
    "revision": "04589b56f180537dbebd0a64afc57470"
  },
  {
    "url": "sentence/demo/index.html",
    "revision": "5842946c81fd10921d996e183f25eb5c"
  },
  {
    "url": "sentence/deploy/index.html",
    "revision": "5a6de4ef57a67ae9a71c4095568ee931"
  },
  {
    "url": "sentence/index.html",
    "revision": "298de05a31fc628ca1affa05283255fa"
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
