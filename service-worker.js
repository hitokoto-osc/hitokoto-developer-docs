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
    "revision": "6c8764c6076c01c9a7f37dc09fa07ede"
  },
  {
    "url": "assets/css/0.styles.8cba7277.css",
    "revision": "34830393e013c79a571bffc74e7bce6c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2391c1b0.js",
    "revision": "5c061dc10a6fcceb0bf8e9b12abdb450"
  },
  {
    "url": "assets/js/11.4d602cc1.js",
    "revision": "56f67fa9ea34242fa56b9d643e4f9b94"
  },
  {
    "url": "assets/js/12.8bda9f03.js",
    "revision": "c261a1302496d48d717b697359bd776e"
  },
  {
    "url": "assets/js/13.19898695.js",
    "revision": "ddc3116b16d1b3811fd516a16819c840"
  },
  {
    "url": "assets/js/14.7028dfcb.js",
    "revision": "23ddb849d353215907a4a8f57218266d"
  },
  {
    "url": "assets/js/15.2e4dceff.js",
    "revision": "15334b574771348917182e2280ff1e73"
  },
  {
    "url": "assets/js/2.01675acd.js",
    "revision": "16ac35d770e06132e070eb6ca9a65f97"
  },
  {
    "url": "assets/js/3.6c1c229d.js",
    "revision": "c75cfbe8a6a615f27e0e840f815eb33d"
  },
  {
    "url": "assets/js/4.2dda2260.js",
    "revision": "3ddbbff98810c1bb9c806da096c4ec1c"
  },
  {
    "url": "assets/js/5.c14081bf.js",
    "revision": "a0ea2a59b06bdebf108e85a4b956d397"
  },
  {
    "url": "assets/js/6.ad1d0fe2.js",
    "revision": "03bf3454f644f6f95b2d1f4f673cdabd"
  },
  {
    "url": "assets/js/7.87716014.js",
    "revision": "4ef72f596c77606ab33dda77cd7ab67c"
  },
  {
    "url": "assets/js/8.b31ce72e.js",
    "revision": "b7f6f5c16655f3957011c8c0a4a62001"
  },
  {
    "url": "assets/js/9.e3fe3d18.js",
    "revision": "7a838a5f57ede91a3d783a8ea04ac258"
  },
  {
    "url": "assets/js/app.957ec042.js",
    "revision": "9bfcb48a680b264f7d0e07b14728be93"
  },
  {
    "url": "core/index.html",
    "revision": "cbab1edd4604a7333bc14ed722e06677"
  },
  {
    "url": "core/interface/index.html",
    "revision": "2cc7d39e7146cb17140a96e69c5be0ac"
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
    "revision": "a6f3e588227af8bf19387cdc06183d47"
  },
  {
    "url": "introduce/index.html",
    "revision": "702a314effe1929f427bd426f9c24b99"
  },
  {
    "url": "logo.png",
    "revision": "04589b56f180537dbebd0a64afc57470"
  },
  {
    "url": "sentence/demo/index.html",
    "revision": "d4d895ed267b95954544df3aed078554"
  },
  {
    "url": "sentence/deploy/index.html",
    "revision": "b67c19b8ac84dd0457a76015325d4546"
  },
  {
    "url": "sentence/index.html",
    "revision": "c74352a99a2aa4e7a63bc2b229b758a0"
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
