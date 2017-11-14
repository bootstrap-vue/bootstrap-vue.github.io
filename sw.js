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
    "url": "/_nuxt/14.ec2f407da58f5fc6a86c.js",
    "revision": "d99833a14581dc86cc83fcc7f7466d26"
  },
  {
    "url": "/_nuxt/15.aec9ada3ff59fbf1f3db.js",
    "revision": "b3e8773e9c2d87b7b521ddaf7d8943ea"
  },
  {
    "url": "/_nuxt/19.1b3999c33bf137d343a0.js",
    "revision": "ac5c939aa9a05b30bdcd2a08b8ec3008"
  },
  {
    "url": "/_nuxt/20.d6a9202c86501a402edf.js",
    "revision": "5ad64e05d6f7e95dee3c36b447f469ea"
  },
  {
    "url": "/_nuxt/21.dd42ee03ebd3c8c4de3b.js",
    "revision": "31059ed9b9d1f9a0642d59b5c5cd0dca"
  },
  {
    "url": "/_nuxt/22.5dca8bd3b64b20bfaf4a.js",
    "revision": "124018c154b3825f08e265e3b1297f90"
  },
  {
    "url": "/_nuxt/23.f9908a0e398179041091.js",
    "revision": "2c6e1f91733339f3663e1ee0b53641fd"
  },
  {
    "url": "/_nuxt/24.1433f11b6138af26912a.js",
    "revision": "009e081ce718b14dde568c39cd5829b9"
  },
  {
    "url": "/_nuxt/25.c1e670ac3742877d11a3.js",
    "revision": "7cd497f3e97b09381a4a78ca84eae74b"
  },
  {
    "url": "/_nuxt/26.bd637bfcfe510f7d64f4.js",
    "revision": "f92ec58151525866a6e974678ab554ac"
  },
  {
    "url": "/_nuxt/27.8a61adee3aea4d37e6f3.js",
    "revision": "835e2d030281a2c1b37a55f1b8a5434f"
  },
  {
    "url": "/_nuxt/28.9e5d80786ac28b8d5889.js",
    "revision": "6acf2c882596d93318fbd100aacfd91a"
  },
  {
    "url": "/_nuxt/29.afb5d5441480b043b75e.js",
    "revision": "2522713b973c92908dd2912fb3b2cb59"
  },
  {
    "url": "/_nuxt/30.27e6b5a7dcec91eb486d.js",
    "revision": "a7f19735c4aab07d77b5b76d9b5d264f"
  },
  {
    "url": "/_nuxt/31.cdd24c647c04abb770fb.js",
    "revision": "d57ee014d102b326229f5d2b2692f161"
  },
  {
    "url": "/_nuxt/32.bc1f0d8a2f0b5dab9471.js",
    "revision": "b7bc0a68e094d5856c2f09aef7a42a20"
  },
  {
    "url": "/_nuxt/33.ac0b4b909203cd24b55f.js",
    "revision": "e60613d6dea8687b654c488aefb2975d"
  },
  {
    "url": "/_nuxt/34.4655da4e75b4e5989580.js",
    "revision": "83507badfa9b4183aaf07d51a6271316"
  },
  {
    "url": "/_nuxt/35.99e15e03924d73b6de2b.js",
    "revision": "7e62c833cc9b5e7c08e6e56162adc7b8"
  },
  {
    "url": "/_nuxt/36.68f3a632bd2d81137441.js",
    "revision": "b9e1096469ef0307b9fa32304dcc6b16"
  },
  {
    "url": "/_nuxt/37.19d4ee98b8e801762b86.js",
    "revision": "89815ad1eccccb7f371969ab932ecfec"
  },
  {
    "url": "/_nuxt/38.07df5fbe89380e6e94f4.js",
    "revision": "5c06db5fb4d62efd7b03810170a3db31"
  },
  {
    "url": "/_nuxt/39.b9ab06c78e5c258552ac.js",
    "revision": "8ef55a2bd7830f495213df575fcb0ed3"
  },
  {
    "url": "/_nuxt/40.17a77cd551015be7c122.js",
    "revision": "a63ee09c5577418fbe69a80d74174582"
  },
  {
    "url": "/_nuxt/41.f5c11f6ed50def0f366b.js",
    "revision": "e82fcc079459f21f3c435972a8f40f26"
  },
  {
    "url": "/_nuxt/42.a69c9e427d327ec47456.js",
    "revision": "996cf8922863cf02fd0daea4236dbfad"
  },
  {
    "url": "/_nuxt/43.7f14939f6b7242214fef.js",
    "revision": "39e0539573d0fe6f28984f9513e7543d"
  },
  {
    "url": "/_nuxt/44.dc7ddb0c50a1d7486a6c.js",
    "revision": "37f6d77473104735a984a2bab912fab0"
  },
  {
    "url": "/_nuxt/45.6bfd1595fffed67001cb.js",
    "revision": "9cb318f559cb4370f1cd4df48108f15d"
  },
  {
    "url": "/_nuxt/46.086b798f685bd09aa9c1.js",
    "revision": "68746764fd42ddd4dc5c5eeeb3761e72"
  },
  {
    "url": "/_nuxt/47.582173d5bf01d98b9acc.js",
    "revision": "94bacf40e2a0b35c630842fedc287dcf"
  },
  {
    "url": "/_nuxt/48.ba9dcc82d798ff5a1dbd.js",
    "revision": "93a39ce729c0c626fd50fc9295cdd3b8"
  },
  {
    "url": "/_nuxt/49.a50cfe2a7f5281cba0a9.js",
    "revision": "74c02e8e8ba0e8a5cf0f98a2480c429f"
  },
  {
    "url": "/_nuxt/50.58ef89a21c708b55a005.js",
    "revision": "34d60d498c9a70be9f503d8ee5fea485"
  },
  {
    "url": "/_nuxt/51.a8c921eb90c65b65d65e.js",
    "revision": "88e0b6bb720423d9fc2355aabb0da5ec"
  },
  {
    "url": "/_nuxt/52.27195f529186e447ca21.js",
    "revision": "901182b9d72378ac5ca9e0014ef87ec5"
  },
  {
    "url": "/_nuxt/53.d77b2839419330f35a79.js",
    "revision": "878bb5f03729a45422c8647c628e4d6e"
  },
  {
    "url": "/_nuxt/54.acfe08c7f69b298b576f.js",
    "revision": "3357ce98fe491e0b32dbe6bc64768f4a"
  },
  {
    "url": "/_nuxt/55.6c3144d07e6e6948b0e8.js",
    "revision": "2e9d7ab3aee92a72b321435ebf080fb4"
  },
  {
    "url": "/_nuxt/56.4e729d2b9ea4dfdadd20.js",
    "revision": "aa6cd652b5fcdf21ab95b66ad30a9f19"
  },
  {
    "url": "/_nuxt/57.0d49a8854cc457faae56.js",
    "revision": "bc1f783121d0fe021656779705caf581"
  },
  {
    "url": "/_nuxt/58.70f8ac9dcc61b3d4325f.js",
    "revision": "f31359c7758e5f143b93eeb8309526c2"
  },
  {
    "url": "/_nuxt/59.038841a29cf070e6fc95.js",
    "revision": "1711222b1229e2661e5e1f8d751f3758"
  },
  {
    "url": "/_nuxt/60.e44a7ad4461b88d6934f.js",
    "revision": "7b97327782deef6a9b67c1185130878d"
  },
  {
    "url": "/_nuxt/61.b5812d312f82f721e86f.js",
    "revision": "d1283a3a6639967de1bf92bee186a1e3"
  },
  {
    "url": "/_nuxt/62.b58ae39e542feb81a0f7.js",
    "revision": "07b282cede3396c98276730f9eb63fdb"
  },
  {
    "url": "/_nuxt/63.a89ce24db4fcfcb58f29.js",
    "revision": "1c3795929314c9148aca4e7175cced5b"
  },
  {
    "url": "/_nuxt/64.621978d5b49176426813.js",
    "revision": "ac1e865cad1afb2b494120daf2e87b59"
  },
  {
    "url": "/_nuxt/65.ef958b33993a88baa492.js",
    "revision": "bd7abcc7b4113c4a5b6c1d706c009bee"
  },
  {
    "url": "/_nuxt/66.08d9254a1fb172b56b36.js",
    "revision": "22ed55c5b71328be765c0ca2a536599c"
  },
  {
    "url": "/_nuxt/app.29bfa16e758337b5b1b3.js",
    "revision": "661623bcb5db53a2ec9d700f6cc6a0e4"
  },
  {
    "url": "/_nuxt/common.3f47e97677a8eee89e8b25944bb08bcf.css",
    "revision": "bf93cbb9dbefe5b27b89e44400d9bb7f"
  },
  {
    "url": "/_nuxt/common.60ae6a807aecb20b5ac2.js",
    "revision": "1208741c0b7244159e6b2557cd3d544a"
  },
  {
    "url": "/_nuxt/layouts/default.944a5f1f6bfad0491a98.js",
    "revision": "9e087c2e5f8cda42e570a3d47d47fff4"
  },
  {
    "url": "/_nuxt/layouts/docs.9ba1e91001737ed689e5.js",
    "revision": "0e6518f0f2c420fcf859c08a3b8d2e00"
  },
  {
    "url": "/_nuxt/manifest.c085062d9484665c2caf.js",
    "revision": "510cebd947044cd5cfefe4037dcf5bf8"
  },
  {
    "url": "/_nuxt/mSearch.6ff92b00a933f5e8f8f3.js",
    "revision": "82ea68d928f3789cf8434f498e4648aa"
  },
  {
    "url": "/_nuxt/pages/docs/components/_slug.b1a65d2550960e30b063.js",
    "revision": "347e173f00aede610ec228db063df718"
  },
  {
    "url": "/_nuxt/pages/docs/components/index.ec48a98be62131746757.js",
    "revision": "d374038ae8888e0514a6f71edc1f20e0"
  },
  {
    "url": "/_nuxt/pages/docs/directives/_slug.e22db378472ac043fc8e.js",
    "revision": "662e387035c757541a7e39094de44c78"
  },
  {
    "url": "/_nuxt/pages/docs/directives/index.d7c09c44e0dfcd708e87.js",
    "revision": "9a7827abee88441f7d98d29e7e5a943b"
  },
  {
    "url": "/_nuxt/pages/docs/index.88432ffc4f29319b2995.js",
    "revision": "b7a69a854eeee2b75da5df2d16e7237e"
  },
  {
    "url": "/_nuxt/pages/docs/layout.97250c775b0268126c52.js",
    "revision": "c4d50cf687b9fbb12bdbc1d00c25d5d6"
  },
  {
    "url": "/_nuxt/pages/docs/misc/_slug.debc3c78e52ef9d17d1c.js",
    "revision": "68abc0da5fa57412cdcda7a07106dc11"
  },
  {
    "url": "/_nuxt/pages/docs/misc/index.5d50b02358c2d7b24624.js",
    "revision": "3b650b8694f860d128f088b7bb5cb76e"
  },
  {
    "url": "/_nuxt/pages/docs/reference/_slug.bbd9a876eb874dfce7d4.js",
    "revision": "b9c11c6c2bec6a9e5d86af4db4101ac6"
  },
  {
    "url": "/_nuxt/pages/docs/reference/index.c5e50aee88f57891da48.js",
    "revision": "36c699977cd454ce47949e84022d4167"
  },
  {
    "url": "/_nuxt/pages/index.e7c94f2e92188ca7c54e.js",
    "revision": "31da1e74cbb8f5c7dc75f2a273b6f362"
  },
  {
    "url": "/_nuxt/pages/play.6e25ebb13507d652a0b8.js",
    "revision": "9f175973ba16428c1bfbc40fe593ef3f"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "bootstrap-vue_1.0.2",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
