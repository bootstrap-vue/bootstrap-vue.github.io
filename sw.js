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
    "url": "/_nuxt/19.6112ac1cf650011e3f68.js",
    "revision": "d84eec0e732f5bcd4ef5674d047b096a"
  },
  {
    "url": "/_nuxt/20.db3436513a56b19c7b69.js",
    "revision": "facaf98cfb37978ad3903097d68172e9"
  },
  {
    "url": "/_nuxt/21.571bff9b2b72e422484c.js",
    "revision": "932e2fdaa74295da6e94c7f1fd94920e"
  },
  {
    "url": "/_nuxt/22.2735e3fae065bc44859b.js",
    "revision": "63a2a2da44c97c520a645006558b30bd"
  },
  {
    "url": "/_nuxt/23.490ffabcdfa4f426ab16.js",
    "revision": "8bb3339e8a703e0ca675f1008d518601"
  },
  {
    "url": "/_nuxt/24.0908c964cc5382f7f5da.js",
    "revision": "762a0845b3c0bb71fdb501dabd5b558f"
  },
  {
    "url": "/_nuxt/25.1455096aae6ac6aad40e.js",
    "revision": "8d2235ac986685dc27cfc3f133ab66c9"
  },
  {
    "url": "/_nuxt/26.c541a75c39636497b369.js",
    "revision": "b67891d353c738806ea762b65e7404d4"
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
    "url": "/_nuxt/30.763f0cbe85fd569e534a.js",
    "revision": "2ab2a010cb85121c06f65d8a7a301697"
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
    "url": "/_nuxt/39.2b8969c3808f2c49760d.js",
    "revision": "ce5aa75cbd7db13b41c547733c5fcc24"
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
    "url": "/_nuxt/43.31188ac7c2755cb383fb.js",
    "revision": "e0572c19c75ba7a91e6b3741a39a4bcf"
  },
  {
    "url": "/_nuxt/44.436dfbd6549fee63b061.js",
    "revision": "a15f85e63ad6224cde04b86cbc1edcf2"
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
    "url": "/_nuxt/52.6475716b373c6aff7251.js",
    "revision": "587b72911f25e34f50b47c1323e2d77d"
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
    "url": "/_nuxt/64.310b38e13a558302f94a.js",
    "revision": "c737215f81102fd979bc95182495019f"
  },
  {
    "url": "/_nuxt/65.ef958b33993a88baa492.js",
    "revision": "bd7abcc7b4113c4a5b6c1d706c009bee"
  },
  {
    "url": "/_nuxt/66.96516bc4ae78241078f4.js",
    "revision": "5f4873096062d7b5d3edce18ebea4e88"
  },
  {
    "url": "/_nuxt/app.824dd13e2161f931363d.js",
    "revision": "d363732500bb65c521af510f9f39cd07"
  },
  {
    "url": "/_nuxt/common.56b26fd0d260d46e946b.js",
    "revision": "e586b4ae87e4e18c044690eb623fd610"
  },
  {
    "url": "/_nuxt/common.d681916d42c60b787a3c5a625fb6311e.css",
    "revision": "007b0c897431cdb7d088c8c0b3e68e62"
  },
  {
    "url": "/_nuxt/layouts/default.f928219e229a1d975a7b.js",
    "revision": "83894361305b3b7d30a19cb029f1204f"
  },
  {
    "url": "/_nuxt/layouts/docs.f4aa1648a65f72125a40.js",
    "revision": "dbb9c071eb492aec870b97d118bfae22"
  },
  {
    "url": "/_nuxt/manifest.f3a2d136e66233350c0d.js",
    "revision": "e36529d7210214b8043af4a993e2b93a"
  },
  {
    "url": "/_nuxt/mSearch.a2141162610c62ddda82.js",
    "revision": "f8e76578ce1bf9d4e5c0411186692831"
  },
  {
    "url": "/_nuxt/pages/docs/components/_slug.2ba5705863e5f96a9a92.js",
    "revision": "b81ebcbb63e9b05489cca538b2ea1b89"
  },
  {
    "url": "/_nuxt/pages/docs/components/index.c63ad766d2e19f34655f.js",
    "revision": "51d68e741b73e00914c7d762662f0e8c"
  },
  {
    "url": "/_nuxt/pages/docs/directives/_slug.074ace48df5b52639a53.js",
    "revision": "59290e207228bcf3a11cad79d8cd64af"
  },
  {
    "url": "/_nuxt/pages/docs/directives/index.a91fd53ffe8df5347407.js",
    "revision": "08592dd7ef439e4eb9f79408d86b06ae"
  },
  {
    "url": "/_nuxt/pages/docs/index.f15e78d17267b5850d59.js",
    "revision": "20d4cfc9f73350807ba1f5606303c22c"
  },
  {
    "url": "/_nuxt/pages/docs/layout.7997108bbf1dfd8ca52d.js",
    "revision": "fb0320147d1fc9d1de0015c5a5dd31e4"
  },
  {
    "url": "/_nuxt/pages/docs/misc/_slug.29fed6ac8688a67bbab1.js",
    "revision": "b7d7fbac99c14bbd41dbf32e0cb7020c"
  },
  {
    "url": "/_nuxt/pages/docs/misc/index.fb9216b162446eaa9b5d.js",
    "revision": "112b50d029e3b7f9936ac081c2452644"
  },
  {
    "url": "/_nuxt/pages/docs/reference/_slug.ecc0544efe030056ef22.js",
    "revision": "c28eb9f9156a93d9e277b51aeea11cd1"
  },
  {
    "url": "/_nuxt/pages/docs/reference/index.786bf86f8b71c3b0e197.js",
    "revision": "9f1af83e6e8714f8424b9e5c6afa02c4"
  },
  {
    "url": "/_nuxt/pages/index.5f4b2c35d1ef28fa5dea.js",
    "revision": "51ed2b3f0562b8611b58743dff6e9e20"
  },
  {
    "url": "/_nuxt/pages/play.3165d219861696d6900b.js",
    "revision": "c69ea433991ad99e7f92833f0625d69a"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

