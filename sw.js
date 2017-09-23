importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/11.803743aef01771a14a8d.js",
    "revision": "2d077dc51bc298c90cce832123a79e6e"
  },
  {
    "url": "/_nuxt/12.cd01de73028fa2a1607a.js",
    "revision": "3102892846831f945c27c03389a93efe"
  },
  {
    "url": "/_nuxt/app.01c2a3165de05ae50654.js",
    "revision": "cd7af552d8beeddaf742e46e1a1aa339"
  },
  {
    "url": "/_nuxt/common.735ff5e4b517b390ae553183599343ec.css",
    "revision": "4a64ad4dd72c34c9804fe72ec378861e"
  },
  {
    "url": "/_nuxt/common.ceb29f33c20e8ef2b699.js",
    "revision": "e392ca8d7f6f7a94c53758bfd1dce26d"
  },
  {
    "url": "/_nuxt/layouts/default.b50d0310b52806189813.js",
    "revision": "4108bc73cc6b3e55088b783bb3cf8950"
  },
  {
    "url": "/_nuxt/layouts/docs.fef8ebf5b28e0ac2a74f.js",
    "revision": "bc74dc7ea659896675e6062ba04dd678"
  },
  {
    "url": "/_nuxt/manifest.451daa2d6df59973a3e9.js",
    "revision": "aca69cf8f9eb687b4b296d1f94ca1adc"
  },
  {
    "url": "/_nuxt/pages/docs/components/_component.7b2b831251e0b314e128.js",
    "revision": "fb4f0b2b1597fcd30f6c62c6c6d7d8e6"
  },
  {
    "url": "/_nuxt/pages/docs/directives/_directive.c36a71517e798364e978.js",
    "revision": "9c545538cca9708e3c3144b26510f385"
  },
  {
    "url": "/_nuxt/pages/docs/index.01ea0f400803a922bcf9.js",
    "revision": "c83f6a66d954a6c0a5025eedc01f9396"
  },
  {
    "url": "/_nuxt/pages/docs/layout/index.b76f6f9529c2993e3343.js",
    "revision": "50199d0b8ed93040bd72b72526a89c6c"
  },
  {
    "url": "/_nuxt/pages/docs/misc/_misc.6812ca19e828b4b665c3.js",
    "revision": "597e133662ae264e15604c6bd61d4f23"
  },
  {
    "url": "/_nuxt/pages/docs/reference/_reference.249497cf8ed5e6166295.js",
    "revision": "f247137d671add3937d62916f47ffe54"
  },
  {
    "url": "/_nuxt/pages/docs/setup.08ff3815641fba269bcd.js",
    "revision": "da3af29f48e8130855717a422f7f0bec"
  },
  {
    "url": "/_nuxt/pages/index.8ce57787912c667233f5.js",
    "revision": "f2c2425da05f9f43ddac290a7d6e1bfe"
  },
  {
    "url": "/_nuxt/pages/play.b6041a7fd2455d402da8.js",
    "revision": "9890c4329bd58b663e220dfff82a042e"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "bootstrap-vue_1.0.0-beta.9",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
