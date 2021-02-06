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
    "revision": "ed5dbc5d9c5ec4cf3adaed6dd073668f"
  },
  {
    "url": "assets/css/0.styles.f12cf200.css",
    "revision": "e2ea75b013167cac23f0a7cdbafeea49"
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
    "url": "assets/js/11.1f465c54.js",
    "revision": "d850de40499cb5bdbaa4d5a1696a8cdf"
  },
  {
    "url": "assets/js/12.57d7faa8.js",
    "revision": "78429bffaa4e002ac6967cc3dfb3292e"
  },
  {
    "url": "assets/js/13.f72d3b14.js",
    "revision": "f570b80d2c560e2a4cf82d0399bcce29"
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
    "url": "assets/js/app.8a2a5ff5.js",
    "revision": "787d85a4d2d3827a8c4580a2ecc168e5"
  },
  {
    "url": "core/index.html",
    "revision": "130abec4310356e2f5c34e61d2358048"
  },
  {
    "url": "core/interface/index.html",
    "revision": "01e6db310a84fe3c40324f2753fa8bf9"
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
    "revision": "aef995912af127dd78d7560c3a6d4173"
  },
  {
    "url": "introduce/index.html",
    "revision": "95e6d107dd9b1d6e3620d2bb5c9431e1"
  },
  {
    "url": "logo.png",
    "revision": "04589b56f180537dbebd0a64afc57470"
  },
  {
    "url": "sentence/demo/index.html",
    "revision": "7cc95799a67306ce78c7f9bf6a2ba0da"
  },
  {
    "url": "sentence/deploy/index.html",
    "revision": "4672bd58531c570919327c637626e455"
  },
  {
    "url": "sentence/index.html",
    "revision": "36ee5df40ddaf4807fcb1e6d72e8de92"
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
