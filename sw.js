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
    "url": "/_nuxt/13.51f801b4d4ac0aa21d5b.js",
    "revision": "0e9272eb9b62b7e33d5031aa1e80195f"
  },
  {
    "url": "/_nuxt/14.003276072f435c714400.js",
    "revision": "0ae773142b76e47f660a632dc6fe44a0"
  },
  {
    "url": "/_nuxt/18.0f64730374aff6fd37fa.js",
    "revision": "4a3a474e1dd8352f798562acf128f309"
  },
  {
    "url": "/_nuxt/19.b8ec53324b4f41f7aefd.js",
    "revision": "80599525c6f98eea390dbdc91c9cb824"
  },
  {
    "url": "/_nuxt/20.ec7b60458536ea9ee422.js",
    "revision": "7114f582ae4db40f21b0802090cbc067"
  },
  {
    "url": "/_nuxt/21.f4b84d9022640cd2ebe1.js",
    "revision": "c2697d6eaa494d36439e78145f53e8d9"
  },
  {
    "url": "/_nuxt/22.65ab07edbb43590c817a.js",
    "revision": "c03a5e86c1ac733089840c46a3066862"
  },
  {
    "url": "/_nuxt/23.38a0defc4070b032d331.js",
    "revision": "08d5a06619fcba2d26ca68331c3e61e5"
  },
  {
    "url": "/_nuxt/24.aadee35e45db5c113bd1.js",
    "revision": "70457f16de5f70c4bb3c4835bc8b05fe"
  },
  {
    "url": "/_nuxt/25.99c5c19b2049f35d20c8.js",
    "revision": "4bd6615f46d80db70b5f6df5f3f99e46"
  },
  {
    "url": "/_nuxt/26.34ad1ecad43ac9263157.js",
    "revision": "d9b475c5c962309a79acd76e8bd1fc44"
  },
  {
    "url": "/_nuxt/27.b98b3c6b2ddb5af5d5b6.js",
    "revision": "7ee7f54cd6b3ca9d0e1c016c73b28587"
  },
  {
    "url": "/_nuxt/28.f399e655dce8ef4215c1.js",
    "revision": "920751c1685cbf1ce2506b4525903d99"
  },
  {
    "url": "/_nuxt/29.a18927b9c89a312a9b67.js",
    "revision": "e6157dfbae4b2b245a5eb66fb44e8c57"
  },
  {
    "url": "/_nuxt/30.bae75c1600254fb7d0f9.js",
    "revision": "f518e71bda9e8dcf0dedde781ed19958"
  },
  {
    "url": "/_nuxt/31.22b12bcdf87fad00ca07.js",
    "revision": "5288d18ecda680842a1929a038b7333a"
  },
  {
    "url": "/_nuxt/32.94bdbe67358689959139.js",
    "revision": "3b01ba9cb09347bcd50c7f80359f0bda"
  },
  {
    "url": "/_nuxt/33.8744902d8e80e3d54e24.js",
    "revision": "1c70e57029179fabe424b51f56fc6746"
  },
  {
    "url": "/_nuxt/34.9ae961f8c0a88bc2f1e7.js",
    "revision": "d3f286eaf16465ca3536fe4bf642d90e"
  },
  {
    "url": "/_nuxt/35.7acfababd02b39c3dd3c.js",
    "revision": "cf2dda4de2a316ec19afccae0472a3ea"
  },
  {
    "url": "/_nuxt/36.31ee35f78638ecbbbc8b.js",
    "revision": "f8be74e0f5beeac516711ffc1514895e"
  },
  {
    "url": "/_nuxt/37.f61640f0ae82ece6e881.js",
    "revision": "34381f7b5e14569cb430ed5ecfbcd631"
  },
  {
    "url": "/_nuxt/38.69dc9a85d17553635d00.js",
    "revision": "4e9e04bbbfa5302a8f3e8dde3d40400b"
  },
  {
    "url": "/_nuxt/39.c4da5d9e01a339f705ec.js",
    "revision": "3dcfc25c21ce9970e55fa7cc89b5fce1"
  },
  {
    "url": "/_nuxt/40.701f5b0a14ca21f4b74a.js",
    "revision": "ae1c841f858d6aab19154f47a38c435e"
  },
  {
    "url": "/_nuxt/41.f000169ef3017fa7ecea.js",
    "revision": "207727ebbecc51674dbfa999e7078828"
  },
  {
    "url": "/_nuxt/42.610d5d1f88cfeff1a8a2.js",
    "revision": "e8b05d4973daf6141c4d89cda4dbcc6e"
  },
  {
    "url": "/_nuxt/43.38946758ec1ae1f5ee33.js",
    "revision": "7138d2d322b593c64b41fe42ca3782c9"
  },
  {
    "url": "/_nuxt/44.04dedc6a006c0cf5d2bb.js",
    "revision": "1bde3517703564c3826b4e7d1251515e"
  },
  {
    "url": "/_nuxt/45.90ddbe68182388996668.js",
    "revision": "d2a4dffb6dd095ff495b200efbadc465"
  },
  {
    "url": "/_nuxt/46.f6baadd3d9c2748f9cfe.js",
    "revision": "0f4c0053d0119a8953a1f8da6ad0a454"
  },
  {
    "url": "/_nuxt/47.486feaee563177192320.js",
    "revision": "f7fb36b904f73d22977b1778871e2a76"
  },
  {
    "url": "/_nuxt/48.ad4440eb65ac9ed6c3e1.js",
    "revision": "51736c77767249498b535526a948d2a6"
  },
  {
    "url": "/_nuxt/49.e40ed89852b296cc74a0.js",
    "revision": "92f266d4231776af179127a06819eb27"
  },
  {
    "url": "/_nuxt/50.6c997ff0d643905631e7.js",
    "revision": "20310bd8014e548bb55a709d0679279d"
  },
  {
    "url": "/_nuxt/51.27d7db443a0c2fe1b881.js",
    "revision": "ff8131ee99faaeeb310a1fdd89fc71cc"
  },
  {
    "url": "/_nuxt/52.5578ba66adb7b3bad1a2.js",
    "revision": "cc540d0c5434b8cbd13f064c139a40c7"
  },
  {
    "url": "/_nuxt/53.3e560a2ca96ea4b1f5c9.js",
    "revision": "9f7748ea752564a874f985db2be95628"
  },
  {
    "url": "/_nuxt/54.273238d80362076f8369.js",
    "revision": "58db957ace5e47418ce11dfea31604dd"
  },
  {
    "url": "/_nuxt/55.5554ae75a5c91222c00a.js",
    "revision": "807eb835372f2be27f56fdc00fc576e2"
  },
  {
    "url": "/_nuxt/56.fc3ec4c6944af141d4b8.js",
    "revision": "5987107cbaf75374e6d7ef9e6f86b5e8"
  },
  {
    "url": "/_nuxt/57.efeb94c75bad56e3de47.js",
    "revision": "c9ab618c1dfee7c9aee59783fa47dcc5"
  },
  {
    "url": "/_nuxt/58.ff189a0173df68ae901c.js",
    "revision": "ca60f910acb84ad45fe11cba85c44e4f"
  },
  {
    "url": "/_nuxt/59.d68ccdf2aae60cf701ec.js",
    "revision": "ac686d7535ea824c0994893f28271b41"
  },
  {
    "url": "/_nuxt/60.3f37e20bae1c4ce30da6.js",
    "revision": "90155caec06df51bc3c6be75f20a2d3f"
  },
  {
    "url": "/_nuxt/61.0039e33d6973b4a4b296.js",
    "revision": "35f97aced228dfa61d480f221f8837b0"
  },
  {
    "url": "/_nuxt/62.00d60bb26cded11cf5fa.js",
    "revision": "57bb1efdb58b26a8018a9adc6a5ec757"
  },
  {
    "url": "/_nuxt/63.18a61606ffa560ba276f.js",
    "revision": "def8610afafeaf3bfbb500254c1e41b3"
  },
  {
    "url": "/_nuxt/64.04474b2e134c5d278704.js",
    "revision": "79d2cddb02648ad0ada3d64c2c025045"
  },
  {
    "url": "/_nuxt/65.329ac59f25e6a57538ec.js",
    "revision": "96a33711d5783604ee03b137ab95578e"
  },
  {
    "url": "/_nuxt/app.4744fdc8421cdc18c70d.js",
    "revision": "d2c4a2b52f131841f286b83d0dd5e522"
  },
  {
    "url": "/_nuxt/common.b02d00cfe05603253b79.js",
    "revision": "6087b5bea7fe1db2c04d598e34bd7b07"
  },
  {
    "url": "/_nuxt/common.ea55bd16c5a4b57b48607f20e4eb2fac.css",
    "revision": "a5f14cc5be4db482a82762d8bcb43d45"
  },
  {
    "url": "/_nuxt/layouts/default.9daabc0c2c603729d282.js",
    "revision": "cbe6e17f636254862d859a1c655a5e19"
  },
  {
    "url": "/_nuxt/layouts/docs.3a24cbea8fad20b5cdf1.js",
    "revision": "5884dbe2b8854675bd0b4646268b1b73"
  },
  {
    "url": "/_nuxt/manifest.e11518dc385696afe97d.js",
    "revision": "8bb206256098c8faff370a915c211510"
  },
  {
    "url": "/_nuxt/mSearch.3d436a614ed88bae013a.js",
    "revision": "0e377a047013ec86d0b657fe59262fbf"
  },
  {
    "url": "/_nuxt/pages/docs/components/_slug.3205134567e7cb512070.js",
    "revision": "25f52966509c3f3a62d0c147ab32df3d"
  },
  {
    "url": "/_nuxt/pages/docs/components/index.a27c1378faa203223316.js",
    "revision": "e4fd69bdc9878eb85956a3deccf30ff8"
  },
  {
    "url": "/_nuxt/pages/docs/directives/_slug.de8159d310f2c23a10ed.js",
    "revision": "7ce97a4ac6a25f297bdd13c23ebd0571"
  },
  {
    "url": "/_nuxt/pages/docs/directives/index.80d5b8d6e1cbdfd439ef.js",
    "revision": "93ace1488185dcddb16f6c2abbd87f64"
  },
  {
    "url": "/_nuxt/pages/docs/index.dee22cdba69d501acc12.js",
    "revision": "c72390e293b5207235c67f87fcd0798c"
  },
  {
    "url": "/_nuxt/pages/docs/misc/_slug.2e8dd0abcce71d823b05.js",
    "revision": "48ed3bba123d83a63feda9592ad571ad"
  },
  {
    "url": "/_nuxt/pages/docs/misc/index.5d50b02358c2d7b24624.js",
    "revision": "3b650b8694f860d128f088b7bb5cb76e"
  },
  {
    "url": "/_nuxt/pages/docs/reference/_slug.6d974f7574691f125e07.js",
    "revision": "e09b7c8a92944e735e52c557842ffd5c"
  },
  {
    "url": "/_nuxt/pages/docs/reference/index.c5e50aee88f57891da48.js",
    "revision": "36c699977cd454ce47949e84022d4167"
  },
  {
    "url": "/_nuxt/pages/index.70d65ee8a8f0d64ca1ab.js",
    "revision": "05deb1db9a31e32561b6803e6fa670cf"
  },
  {
    "url": "/_nuxt/pages/play.0e11375d5887e0b0d935.js",
    "revision": "11b92e281b1b0ea6fc5efa2e33625c93"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "bootstrap-vue_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
