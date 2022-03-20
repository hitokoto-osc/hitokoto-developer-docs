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
    "revision": "9a05e9a6509bc6bad5ee58925c066bd0"
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
    "url": "assets/js/12.f67e45e0.js",
    "revision": "ed2b9a0057ef41ad2c4fcdfb2f23bdf1"
  },
  {
    "url": "assets/js/13.1f0fbf7e.js",
    "revision": "0f26883de04320412ecc8d1f5cc9bcf1"
  },
  {
    "url": "assets/js/14.b6d1354b.js",
    "revision": "0e240e41e35159e9551b1d03017e66c1"
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
    "url": "assets/js/app.854ed3fc.js",
    "revision": "dd412a80c59cac0a0f0c588e5b05e273"
  },
  {
    "url": "core/index.html",
    "revision": "b20a7fad74d3cba267d20fe3c590d209"
  },
  {
    "url": "core/interface/index.html",
    "revision": "0c823b3041cd6d8446b6d9a7bcb573d5"
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
    "revision": "57f345c302c0cba12100581e1188e2e9"
  },
  {
    "url": "introduce/index.html",
    "revision": "a4593ee499403233956699796b04edde"
  },
  {
    "url": "logo.png",
    "revision": "04589b56f180537dbebd0a64afc57470"
  },
  {
    "url": "sentence/demo/index.html",
    "revision": "8e0941f2151ce733b0a0f8b479965a03"
  },
  {
    "url": "sentence/deploy/index.html",
    "revision": "fd007003ba37b73473f06be829c918e6"
  },
  {
    "url": "sentence/index.html",
    "revision": "ddfb436661fbb30941b3d2ec8af301c0"
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
