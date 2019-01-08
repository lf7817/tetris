importScripts("./precache-manifest.0710c4c8d02a8ac49a55330f1c5a5681.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("./index.html", {
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});

self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});

