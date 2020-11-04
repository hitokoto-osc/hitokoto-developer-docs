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
    "revision": "08a8f9363ff2aea662e191f915c96f90"
  },
  {
    "url": "assets/css/0.styles.0cf67bcc.css",
    "revision": "1b33b1e9cbc64c8bba2e90a500536fac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2b9f251e.js",
    "revision": "6830bdb6426dff69ac5f1ecd7008a225"
  },
  {
    "url": "assets/js/11.061dd3b3.js",
    "revision": "d850de40499cb5bdbaa4d5a1696a8cdf"
  },
  {
    "url": "assets/js/12.a55c6d47.js",
    "revision": "78429bffaa4e002ac6967cc3dfb3292e"
  },
  {
    "url": "assets/js/13.18d021bf.js",
    "revision": "f570b80d2c560e2a4cf82d0399bcce29"
  },
  {
    "url": "assets/js/14.c9d04d98.js",
    "revision": "eab60fd8436fb5546491f9dcac8fa1b4"
  },
  {
    "url": "assets/js/15.7f514a60.js",
    "revision": "9d2e793e153692960441b8269f18bb59"
  },
  {
    "url": "assets/js/2.88f5340d.js",
    "revision": "539af91197a30f4ba0a8013497c544a2"
  },
  {
    "url": "assets/js/3.fb6d8a3f.js",
    "revision": "4818bb0b6228a11c68c4d3a0159ec670"
  },
  {
    "url": "assets/js/4.c3d2d8e6.js",
    "revision": "c7ddaae12fdb2821fd6ea2be74ead37a"
  },
  {
    "url": "assets/js/5.2e08a810.js",
    "revision": "08bb04eceffc1552b4276419014c5c0a"
  },
  {
    "url": "assets/js/6.500f7d96.js",
    "revision": "e507a9171896382e676fb2d30e2341a8"
  },
  {
    "url": "assets/js/7.20493b06.js",
    "revision": "5a162b7953608361705061791a5a0e63"
  },
  {
    "url": "assets/js/8.f5e1fb9c.js",
    "revision": "13243a0df030c52265c4677d61dcf69f"
  },
  {
    "url": "assets/js/9.1cd2f2a9.js",
    "revision": "2b4af921a8f5a0aee94a7c35afc37ba2"
  },
  {
    "url": "assets/js/app.6a0a6e9c.js",
    "revision": "596cc7e9f6f47183b5a9bc9954b1db02"
  },
  {
    "url": "core/index.html",
    "revision": "883eba29a7328836e0d48f57ac27036b"
  },
  {
    "url": "core/interface/index.html",
    "revision": "f31cdb60bff546218ccb7714bc61b7f9"
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
    "revision": "bf48a3c4e83363b60a482fae8878c0f8"
  },
  {
    "url": "introduce/index.html",
    "revision": "c9a433910713f7431b36fa4e9cbe971f"
  },
  {
    "url": "logo.png",
    "revision": "04589b56f180537dbebd0a64afc57470"
  },
  {
    "url": "sentence/demo/index.html",
    "revision": "eb2174fa2e60e80b721eddbdd8572e19"
  },
  {
    "url": "sentence/deploy/index.html",
    "revision": "522ef4aea5e3c43032ebd13434e7ac0a"
  },
  {
    "url": "sentence/index.html",
    "revision": "67e83a2b15e2910faa42e03b85bb6b30"
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
