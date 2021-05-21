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
    "revision": "3bd1e85a28283b7ff08fb4b85f852c54"
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
    "url": "assets/js/13.712de146.js",
    "revision": "24637e15f7d3792453ab3c8727e984d1"
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
    "url": "assets/js/app.8a21f8dc.js",
    "revision": "54600a80abc18893997efa9bce137b17"
  },
  {
    "url": "core/index.html",
    "revision": "b3cdd13ec2b71d98e17ee1af705e9a70"
  },
  {
    "url": "core/interface/index.html",
    "revision": "f3f6ce72f515d8c45c3b3b8c6ff32b2f"
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
    "revision": "908108a1d714793aa3b26d3ad52a934c"
  },
  {
    "url": "introduce/index.html",
    "revision": "028ebfa8c03284ecb44b180b14f6290a"
  },
  {
    "url": "logo.png",
    "revision": "04589b56f180537dbebd0a64afc57470"
  },
  {
    "url": "sentence/demo/index.html",
    "revision": "b5a3f92bd2c6de27fb5827191163c23a"
  },
  {
    "url": "sentence/deploy/index.html",
    "revision": "8661cc4c40ca33655282d3a5b2e6ec49"
  },
  {
    "url": "sentence/index.html",
    "revision": "545f8f26c779c8d125c5f2e551d5f324"
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
