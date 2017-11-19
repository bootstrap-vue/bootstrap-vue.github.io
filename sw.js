importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "bootstrap-vue",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
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
    "url": "/_nuxt/24.c532280f2bb2065f7714.js",
    "revision": "8cdfbc77185c5e9d623e4e5e1e4bfb2b"
  },
  {
    "url": "/_nuxt/25.c1e670ac3742877d11a3.js",
    "revision": "7cd497f3e97b09381a4a78ca84eae74b"
  },
  {
    "url": "/_nuxt/26.b12adf36acc45b77407a.js",
    "revision": "b73c9192641a51adbb0d7a3db6dea74d"
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
    "url": "/_nuxt/39.6156f02e0daa18702916.js",
    "revision": "ca0b1e98e73273bb308487cd66466a73"
  },
  {
    "url": "/_nuxt/40.212f0f61b241b4ab4397.js",
    "revision": "070c93e4501ad2984d61d64fac6e43a0"
  },
  {
    "url": "/_nuxt/41.f5c11f6ed50def0f366b.js",
    "revision": "e82fcc079459f21f3c435972a8f40f26"
  },
  {
    "url": "/_nuxt/42.53490d3b0834032aa1e6.js",
    "revision": "54f2c9fbc853eea8582376e7a3abed6c"
  },
  {
    "url": "/_nuxt/43.7f14939f6b7242214fef.js",
    "revision": "39e0539573d0fe6f28984f9513e7543d"
  },
  {
    "url": "/_nuxt/44.919754c6c14480eabbdf.js",
    "revision": "78ac438bd0a880fbda3f27a0c5eb1b59"
  },
  {
    "url": "/_nuxt/45.6bfd1595fffed67001cb.js",
    "revision": "9cb318f559cb4370f1cd4df48108f15d"
  },
  {
    "url": "/_nuxt/46.a4ef09963d7260f0dac8.js",
    "revision": "ee1a55b29008da9df37aa04f93a23c7b"
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
    "url": "/_nuxt/57.1f6b8738533620971a74.js",
    "revision": "2e676a02589c2ac3afa46b4d181915b9"
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
    "url": "/_nuxt/62.7ef51c185f96e27a63fb.js",
    "revision": "ae7e2292635659c05e8b0c6acb1b86ed"
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
    "url": "/_nuxt/66.08822a8689069449bdf5.js",
    "revision": "2ee3c2b2f05f97d54def85dd6b5bd2b7"
  },
  {
    "url": "/_nuxt/app.e9f1069d6b236b8818b3.js",
    "revision": "ceeb89cf3568cfa111fc9ff151e00aaa"
  },
  {
    "url": "/_nuxt/common.56b26fd0d260d46e946b.js",
    "revision": "e586b4ae87e4e18c044690eb623fd610"
  },
  {
    "url": "/_nuxt/common.c5ccf8982ccaa4ad177eb02bc7024e60.css",
    "revision": "f9f0c76861b36c119f5fab8965024fb5"
  },
  {
    "url": "/_nuxt/layouts/default.82b7134293fd32dd010a.js",
    "revision": "7a9e64c76f0d46ad3339f954ffdc8311"
  },
  {
    "url": "/_nuxt/layouts/docs.b0824e348e3fece27cda.js",
    "revision": "3338da7c5bcd34940381927cdbdcaa50"
  },
  {
    "url": "/_nuxt/manifest.a07b6c9ad3556fcb0a28.js",
    "revision": "4c94b59121b77a009c88a2721202925f"
  },
  {
    "url": "/_nuxt/mSearch.a2141162610c62ddda82.js",
    "revision": "f8e76578ce1bf9d4e5c0411186692831"
  },
  {
    "url": "/_nuxt/pages/docs/components/_slug.5ae79e1e5370de2b272f.js",
    "revision": "636b6f275184b9e4888b9d4bfad9ec19"
  },
  {
    "url": "/_nuxt/pages/docs/components/index.c63ad766d2e19f34655f.js",
    "revision": "51d68e741b73e00914c7d762662f0e8c"
  },
  {
    "url": "/_nuxt/pages/docs/directives/_slug.e44e4726643f1975672e.js",
    "revision": "ce3db6a2dacc4c3e15c1031d8ebe8051"
  },
  {
    "url": "/_nuxt/pages/docs/directives/index.a91fd53ffe8df5347407.js",
    "revision": "08592dd7ef439e4eb9f79408d86b06ae"
  },
  {
    "url": "/_nuxt/pages/docs/index.468f50686d3c4942adfd.js",
    "revision": "ac7f7aadd2efb4f9bae380a58a6b206b"
  },
  {
    "url": "/_nuxt/pages/docs/layout.7997108bbf1dfd8ca52d.js",
    "revision": "fb0320147d1fc9d1de0015c5a5dd31e4"
  },
  {
    "url": "/_nuxt/pages/docs/misc/_slug.bed9ee26c0a6913d922c.js",
    "revision": "00c9b7d8dcf81c4dcec084d0afa84937"
  },
  {
    "url": "/_nuxt/pages/docs/misc/index.fb9216b162446eaa9b5d.js",
    "revision": "112b50d029e3b7f9936ac081c2452644"
  },
  {
    "url": "/_nuxt/pages/docs/reference/_slug.f7b0451a103b40641383.js",
    "revision": "94606325ca459e273f659223fc8973ac"
  },
  {
    "url": "/_nuxt/pages/docs/reference/index.786bf86f8b71c3b0e197.js",
    "revision": "9f1af83e6e8714f8424b9e5c6afa02c4"
  },
  {
    "url": "/_nuxt/pages/index.9bde670dd8c24b6670f4.js",
    "revision": "75a094e7acf72609cbb4c83971a57978"
  },
  {
    "url": "/_nuxt/pages/play.3165d219861696d6900b.js",
    "revision": "c69ea433991ad99e7f92833f0625d69a"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

