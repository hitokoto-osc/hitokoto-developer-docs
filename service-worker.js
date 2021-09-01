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
    "revision": "142c47bc0de5e12b9de3391a6f576814"
  },
  {
    "url": "assets/css/0.styles.287a5d0d.css",
    "revision": "987f65c88887e17a7f5064ad04cf3bec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.848a339a.js",
    "revision": "3d27312ec469471885b0ea0092ec0dcc"
  },
  {
    "url": "assets/js/11.2529b70b.js",
    "revision": "c5c48d3c4645a38b1a1d56b0fd8125ea"
  },
  {
    "url": "assets/js/12.d6d99bc5.js",
    "revision": "93259f370fcbf8f5ef06731f05753ebe"
  },
  {
    "url": "assets/js/13.2fa797bb.js",
    "revision": "c242bb8d15fd603950fa3eb0dd1eb498"
  },
  {
    "url": "assets/js/14.d17f6467.js",
    "revision": "0db4bfd1e180ad1c4c6e24519c74910f"
  },
  {
    "url": "assets/js/15.7f514a60.js",
    "revision": "9d2e793e153692960441b8269f18bb59"
  },
  {
    "url": "assets/js/2.441f988f.js",
    "revision": "4c12177ae983f84570a9934ff9bcbcd6"
  },
  {
    "url": "assets/js/3.e55adc38.js",
    "revision": "e51cfbf92302b9580d3810568373e948"
  },
  {
    "url": "assets/js/4.f2cb9788.js",
    "revision": "efc9fdc738b47a4ef371759b3cc8e141"
  },
  {
    "url": "assets/js/5.0500c350.js",
    "revision": "d36f913fe93f1035f3bbde1d21678cd1"
  },
  {
    "url": "assets/js/6.a5b24235.js",
    "revision": "d62788376dcadaa663e9312fcda060ab"
  },
  {
    "url": "assets/js/7.f64e7ffb.js",
    "revision": "d6aaf1b850ab6061f1d2519a9a0ad2f6"
  },
  {
    "url": "assets/js/8.443ec85d.js",
    "revision": "f53dccb023faed9929cc9a67cb6f0b79"
  },
  {
    "url": "assets/js/9.d238695b.js",
    "revision": "ac62856b72261de25a60d2e044d8d306"
  },
  {
    "url": "assets/js/app.49fa5f01.js",
    "revision": "dd5b731136b37bcecc3a146677290dc8"
  },
  {
    "url": "core/index.html",
    "revision": "525bd1b7deeacdbfc711f36cc885c311"
  },
  {
    "url": "core/interface/index.html",
    "revision": "eef8e40bea052f8692a2ddc3922091ae"
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
    "revision": "481834e5fa3135acf6bd226ceb5ba28c"
  },
  {
    "url": "introduce/index.html",
    "revision": "ef2529e481512a31e8d75c5208f70079"
  },
  {
    "url": "logo.png",
    "revision": "04589b56f180537dbebd0a64afc57470"
  },
  {
    "url": "sentence/demo/index.html",
    "revision": "cf7c2da2cfc3d2e50916805ac66fb853"
  },
  {
    "url": "sentence/deploy/index.html",
    "revision": "45cd0b9d917093afc60a3b11f84e373c"
  },
  {
    "url": "sentence/index.html",
    "revision": "704dad24649df1d0f4922b9b0b5ab847"
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
