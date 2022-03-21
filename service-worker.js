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
    "revision": "8796033e984fd30819eda14941e1cb95"
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
    "url": "assets/js/10.c70061a2.js",
    "revision": "4f5e01b0ebbe7f6298caa348107c84c6"
  },
  {
    "url": "assets/js/11.5b9d0a31.js",
    "revision": "4327627521ca9d44cb08f030ed5db036"
  },
  {
    "url": "assets/js/12.2a055525.js",
    "revision": "dd13b166c16221083ab33a4c1af471ab"
  },
  {
    "url": "assets/js/13.cfcce4f8.js",
    "revision": "a9b51e0a0c1bb9af1e23f1f60a49cca2"
  },
  {
    "url": "assets/js/14.f047eb6b.js",
    "revision": "647ef1a07d5dd05cb92130e3ec42d4e8"
  },
  {
    "url": "assets/js/15.a9deba9e.js",
    "revision": "24eedfe5c5a5ec0e06e713061071a912"
  },
  {
    "url": "assets/js/2.ac8547be.js",
    "revision": "5f194ddc7583f1a4df6d5384f8a78d34"
  },
  {
    "url": "assets/js/3.fafbbdf5.js",
    "revision": "6826de9e1dd5f65aa089a8250c8e2aa8"
  },
  {
    "url": "assets/js/4.e2050254.js",
    "revision": "9ce08d092085dd5e62ca11b28ff7621e"
  },
  {
    "url": "assets/js/5.1f2126b3.js",
    "revision": "e9c003893f3259a14a73e55987c1cbd3"
  },
  {
    "url": "assets/js/6.e51a7b02.js",
    "revision": "ccc7d7e1474166050eaa384c5d287a4c"
  },
  {
    "url": "assets/js/7.b42d0df3.js",
    "revision": "2cf7e7b555d88d427030e93371456e18"
  },
  {
    "url": "assets/js/8.18d3c289.js",
    "revision": "d5bb4b3db976d356ca98f359fabdd546"
  },
  {
    "url": "assets/js/9.3f8fda57.js",
    "revision": "f4c17c366563569efd705dd991b76b39"
  },
  {
    "url": "assets/js/app.1ff5c181.js",
    "revision": "695028f7ac70412c2d6bc0ced5a5a22a"
  },
  {
    "url": "core/index.html",
    "revision": "833c196cf7c969bd67097a731a4a2955"
  },
  {
    "url": "core/interface/index.html",
    "revision": "2703fe9d822604ee414e278972244de4"
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
    "revision": "18e9646f7b100e9241f8aa660817caa4"
  },
  {
    "url": "introduce/index.html",
    "revision": "d6fe7ceef1fbeaf8f86f748d85f00cb7"
  },
  {
    "url": "logo.png",
    "revision": "04589b56f180537dbebd0a64afc57470"
  },
  {
    "url": "sentence/demo/index.html",
    "revision": "9384b84d0744b74801ab7bfed8607b33"
  },
  {
    "url": "sentence/deploy/index.html",
    "revision": "a68ec3f0251e08b31a325c3b24f311c6"
  },
  {
    "url": "sentence/index.html",
    "revision": "90ee83b4e5e5dda8649bcef326fe839f"
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
