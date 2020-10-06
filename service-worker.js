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
    "revision": "190e9618a4321612093c56a907b38e4e"
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
    "url": "assets/js/10.10718305.js",
    "revision": "07d3439e3d814561a23840c73d0852b9"
  },
  {
    "url": "assets/js/11.415a62fd.js",
    "revision": "3621ac6fa55adedb3dbdb8e855635efc"
  },
  {
    "url": "assets/js/12.c1dfec3e.js",
    "revision": "bfbc66e0807cd6ba04343e44d8c242ab"
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
    "url": "assets/js/9.e4ef10c6.js",
    "revision": "02037c23b9d9d68c2b9bc76ad841648d"
  },
  {
    "url": "assets/js/app.25b4fa28.js",
    "revision": "de32d134cadb66b91bad6ecf4449ee29"
  },
  {
    "url": "core/index.html",
    "revision": "24da20e203db0e9ef1119ab600d2d7e9"
  },
  {
    "url": "core/interface/index.html",
    "revision": "45baad973c0dbe9eebcc0a49eafe87b6"
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
    "revision": "1bc72a2ab5e4f5f8d07f06e228b5dbc4"
  },
  {
    "url": "introduce/index.html",
    "revision": "6d5c1e667be5ac44e4e10600f2a6920d"
  },
  {
    "url": "logo.png",
    "revision": "04589b56f180537dbebd0a64afc57470"
  },
  {
    "url": "sentence/demo/index.html",
    "revision": "1e9bd9fe3302ecbd49ed663178858176"
  },
  {
    "url": "sentence/deploy/index.html",
    "revision": "e58e3af6d8fe69129bc7ee56893b0b83"
  },
  {
    "url": "sentence/index.html",
    "revision": "abefc2b3e493c858fda202e34d9182a3"
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
