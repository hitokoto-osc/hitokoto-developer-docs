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
    "revision": "a6c48031ebcae234ad59adafd828432b"
  },
  {
    "url": "assets/css/0.styles.150bb255.css",
    "revision": "92908b6bc44dc1e21b1e5ef678a2186a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b7005eb8.js",
    "revision": "25fcfecb4e1aaaa69e281a994cee7313"
  },
  {
    "url": "assets/js/11.78b75ae7.js",
    "revision": "ed6c4ef455a80053e6eeb47facbb61d1"
  },
  {
    "url": "assets/js/12.3e002a75.js",
    "revision": "8412309e594000927c1f954a61829064"
  },
  {
    "url": "assets/js/13.36a8230f.js",
    "revision": "8e0b1dc1b5fe750bca206fdf1acbd205"
  },
  {
    "url": "assets/js/2.186d4a35.js",
    "revision": "2a1ada5756e981c5a88969b7e2b3c9b5"
  },
  {
    "url": "assets/js/3.ca35ab04.js",
    "revision": "b7f99b3efd646ba8757f93713a8236c2"
  },
  {
    "url": "assets/js/4.56e1d7f5.js",
    "revision": "f49a2fa24f13d5a6f912b911efe2775e"
  },
  {
    "url": "assets/js/5.b3158ce6.js",
    "revision": "3a88cb670fc8ff91980a9ce0bd7f6ceb"
  },
  {
    "url": "assets/js/6.24285010.js",
    "revision": "88639868297b498f9af28bb4a45f3af9"
  },
  {
    "url": "assets/js/7.f0aac401.js",
    "revision": "2f4671291ba3e82e6398dd1e4ea252e6"
  },
  {
    "url": "assets/js/8.32b7276e.js",
    "revision": "7505076c331c2b810c0bd135ffe3310e"
  },
  {
    "url": "assets/js/9.85e91b07.js",
    "revision": "d420d96badd40a3bd2052662d186c61c"
  },
  {
    "url": "assets/js/app.3cff0c57.js",
    "revision": "49a646714c48e445a04a4eed1ec2e264"
  },
  {
    "url": "core/index.html",
    "revision": "d9a2ccfc395da3ab0c177b58c67d1530"
  },
  {
    "url": "core/interface/index.html",
    "revision": "7602b96f339d4a112191f6d48517469f"
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
    "revision": "2e1735dac8e80d050f86ff36afb09704"
  },
  {
    "url": "introduce/index.html",
    "revision": "c8aca14dd55fc7666c5c094549325207"
  },
  {
    "url": "logo.png",
    "revision": "04589b56f180537dbebd0a64afc57470"
  },
  {
    "url": "sentence/demo/index.html",
    "revision": "0b0aa523b7e102e7fb1fe4e13b0dd0e3"
  },
  {
    "url": "sentence/deploy/index.html",
    "revision": "0dd1e13107f7e98c677f768bfd060d1e"
  },
  {
    "url": "sentence/index.html",
    "revision": "46d25ca0a10bfd42a893c5a3e752e0cc"
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
