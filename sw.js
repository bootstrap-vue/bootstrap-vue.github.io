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
    "url": "/_nuxt/19.1f23422290108d47d42e.js",
    "revision": "a5af662061aa0a404428644cf89e6175"
  },
  {
    "url": "/_nuxt/20.db3436513a56b19c7b69.js",
    "revision": "facaf98cfb37978ad3903097d68172e9"
  },
  {
    "url": "/_nuxt/21.e56f165b5cf4d5385614.js",
    "revision": "4256d97f69317f665863e909c7a0118a"
  },
  {
    "url": "/_nuxt/22.5dca8bd3b64b20bfaf4a.js",
    "revision": "124018c154b3825f08e265e3b1297f90"
  },
  {
    "url": "/_nuxt/23.adcc083d7373d1b3d19d.js",
    "revision": "62c1cadca402f346c07836e376eecb57"
  },
  {
    "url": "/_nuxt/24.0863cca90f2ed0358fd8.js",
    "revision": "c20bffa38f1c87ff5519f871209873ff"
  },
  {
    "url": "/_nuxt/25.117f3fada19bd9ab9679.js",
    "revision": "1164447e099e619026b155e007248e83"
  },
  {
    "url": "/_nuxt/26.cef8a3c8ec047b8b06be.js",
    "revision": "06f6efba363bec813ca4920789a2cf68"
  },
  {
    "url": "/_nuxt/27.f115be4a02785f270565.js",
    "revision": "cc1a668dc3ee1b2f41d8786bad885253"
  },
  {
    "url": "/_nuxt/28.ec3d19c83e355365bad2.js",
    "revision": "c069dd20da46d9c0a513a5e29fb944ff"
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
    "url": "/_nuxt/31.e560a63953b549dcce38.js",
    "revision": "7f831134a0268add3e6aa17c587b108d"
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
    "url": "/_nuxt/39.0df4fcd3e93af6f79b51.js",
    "revision": "f3404dba8094a3f6983d6909121b6fc9"
  },
  {
    "url": "/_nuxt/40.f17520f8c21a36965a7a.js",
    "revision": "7f6420a20371d4d454526ce0aa81ebb6"
  },
  {
    "url": "/_nuxt/41.a542e884b31e982a53e0.js",
    "revision": "8237ef293d4e8db3e75913eaea05ebd8"
  },
  {
    "url": "/_nuxt/42.54fd1a3e9b3af43d9238.js",
    "revision": "7830cf05ac49f68fa6f8246c1714bfb0"
  },
  {
    "url": "/_nuxt/43.ccea5f92b71b104f0611.js",
    "revision": "0f22aa17e49f38714bec44179fe47fbf"
  },
  {
    "url": "/_nuxt/44.1244c566169fdb5c9e74.js",
    "revision": "ee7e23293e0b06bfc690e3a7da9848c1"
  },
  {
    "url": "/_nuxt/45.d9d977d97621de287b34.js",
    "revision": "466086c20ea6177d102b24f3a9ac2796"
  },
  {
    "url": "/_nuxt/46.cee345ca5c14f69a79a6.js",
    "revision": "78f2a4ecfa1fdeb2506bf25926b95eeb"
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
    "url": "/_nuxt/49.642d8e3e429e643744c8.js",
    "revision": "ecc00e18b3e6ccbf008f1a819c7ff0e9"
  },
  {
    "url": "/_nuxt/50.07441d057d8a63381f92.js",
    "revision": "437d2fb99aef15f9682f60f235b30967"
  },
  {
    "url": "/_nuxt/51.a8c921eb90c65b65d65e.js",
    "revision": "88e0b6bb720423d9fc2355aabb0da5ec"
  },
  {
    "url": "/_nuxt/52.c6f797ace6a5ee12ec11.js",
    "revision": "7b1d9c2e329a5972f57faf610e136cc3"
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
    "url": "/_nuxt/55.a2468c59dd81e9921d35.js",
    "revision": "4964436c43f1accdb750b6a7e8dfcb82"
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
    "url": "/_nuxt/app.dc93c1a63adaabfa2b91.js",
    "revision": "b7f53686477c50faa0a93015a8da204d"
  },
  {
    "url": "/_nuxt/common.56b26fd0d260d46e946b.js",
    "revision": "e586b4ae87e4e18c044690eb623fd610"
  },
  {
    "url": "/_nuxt/common.ac56085dc14d8e2a51d0ed45ffeca297.css",
    "revision": "7a0e52c5b7a47abca3102c90ff5613e9"
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
    "url": "/_nuxt/manifest.bb37073217182b31c0ee.js",
    "revision": "86021e91ca9589bee0d293b7d961fc55"
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

