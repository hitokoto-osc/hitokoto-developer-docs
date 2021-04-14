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
    "revision": "2c707d451c53199bd07c558276efc51d"
  },
  {
    "url": "assets/css/0.styles.c4d988e2.css",
    "revision": "f39d06f8fcd24d7192d5a092a8d6bbb3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c3bf5555.js",
    "revision": "6830bdb6426dff69ac5f1ecd7008a225"
  },
  {
    "url": "assets/js/11.c74c24da.js",
    "revision": "c0146ee44254793ca2bbcd2131506a72"
  },
  {
    "url": "assets/js/12.e0f9b6c6.js",
    "revision": "5bb02b0d2020d37d42bb39aac7787a18"
  },
  {
    "url": "assets/js/13.79b6817d.js",
    "revision": "966467c591c0d99450c4644702aff1db"
  },
  {
    "url": "assets/js/14.fb4818b9.js",
    "revision": "eab60fd8436fb5546491f9dcac8fa1b4"
  },
  {
    "url": "assets/js/15.7f514a60.js",
    "revision": "9d2e793e153692960441b8269f18bb59"
  },
  {
    "url": "assets/js/2.76e84f36.js",
    "revision": "539af91197a30f4ba0a8013497c544a2"
  },
  {
    "url": "assets/js/3.b5e11882.js",
    "revision": "4818bb0b6228a11c68c4d3a0159ec670"
  },
  {
    "url": "assets/js/4.c3d2d8e6.js",
    "revision": "c7ddaae12fdb2821fd6ea2be74ead37a"
  },
  {
    "url": "assets/js/5.5ec8b026.js",
    "revision": "08bb04eceffc1552b4276419014c5c0a"
  },
  {
    "url": "assets/js/6.a56fe76a.js",
    "revision": "e507a9171896382e676fb2d30e2341a8"
  },
  {
    "url": "assets/js/7.33c8e4a6.js",
    "revision": "5a162b7953608361705061791a5a0e63"
  },
  {
    "url": "assets/js/8.8c1dfcd3.js",
    "revision": "13243a0df030c52265c4677d61dcf69f"
  },
  {
    "url": "assets/js/9.a390b66d.js",
    "revision": "2b4af921a8f5a0aee94a7c35afc37ba2"
  },
  {
    "url": "assets/js/app.748adf36.js",
    "revision": "8ed6ae5804e7471b79c9ca1ed24d8e9f"
  },
  {
    "url": "core/index.html",
    "revision": "08710a49db83db0b9786dafb60145976"
  },
  {
    "url": "core/interface/index.html",
    "revision": "aae9ffc285692cbe907213341a9da311"
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
    "revision": "a400c5c51cd7e22c33b2fb7f81ad91c4"
  },
  {
    "url": "introduce/index.html",
    "revision": "8b5bef0a801b0f7bb9e69190cb6947b0"
  },
  {
    "url": "logo.png",
    "revision": "04589b56f180537dbebd0a64afc57470"
  },
  {
    "url": "sentence/demo/index.html",
    "revision": "1eb0b652d8d5d4685be47bc07712e370"
  },
  {
    "url": "sentence/deploy/index.html",
    "revision": "488ed24c353b7565b8fbbb422736f53c"
  },
  {
    "url": "sentence/index.html",
    "revision": "8abf03f0399e34dc113ab9d4445d2b4f"
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
