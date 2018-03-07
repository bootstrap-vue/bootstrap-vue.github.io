importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "bootstrap-vue",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/14.a595095fccfa3a55b26b.js",
    "revision": "514e3d045cefd628dc76c92d89bced36"
  },
  {
    "url": "/_nuxt/15.aec9ada3ff59fbf1f3db.js",
    "revision": "2ff5d2a7525bc22899cc179f8e7b7722"
  },
  {
    "url": "/_nuxt/66.e86663f08bcfbe048700.js",
    "revision": "bc41aa711fd49627a7bbe12a7d9bcf18"
  },
  {
    "url": "/_nuxt/app.71ee022e5d3cf3fedb0f9359ead242c3.css",
    "revision": "590e9e3f7c9db2fe94ca6e27de23f91a"
  },
  {
    "url": "/_nuxt/app.f23290833f7effd3cce9.js",
    "revision": "31e269c8083fc3995df253534670f4ce"
  },
  {
    "url": "/_nuxt/docs/components0.04a5e0a3bdcb8a7ff8ff.js",
    "revision": "8e31b396203c59e6eba03222378d5723"
  },
  {
    "url": "/_nuxt/docs/components1.a7307aef9c37702b78d4.js",
    "revision": "aa521c2a8a15e31a300072c54fcf6c70"
  },
  {
    "url": "/_nuxt/docs/components10.8d24f6c90c6ab546c6e4.js",
    "revision": "fe256d3b44c6cedccaef45955675f32d"
  },
  {
    "url": "/_nuxt/docs/components11.03eed241c83d0e1e01ec.js",
    "revision": "58df77d7bda8ab226b6553e7f5e444bf"
  },
  {
    "url": "/_nuxt/docs/components12.36638aebb4cf44fdb311.js",
    "revision": "cab2b99ec9525f1fb3694b428d40ffbc"
  },
  {
    "url": "/_nuxt/docs/components13.b6161980a8a9f6a14308.js",
    "revision": "376fc677efe21036eb18eb6a9a976f93"
  },
  {
    "url": "/_nuxt/docs/components14.b262726f3e2ac52aa61c.js",
    "revision": "752785cf30815174854034ac60612a8b"
  },
  {
    "url": "/_nuxt/docs/components15.341defc727d8ec113805.js",
    "revision": "293fe951ba61c4d518296ef968002681"
  },
  {
    "url": "/_nuxt/docs/components16.a37c6eaf825272c52475.js",
    "revision": "2b453a0cfbb79b5416a73430708a73aa"
  },
  {
    "url": "/_nuxt/docs/components17.83fe4a8ebd42f9697b79.js",
    "revision": "db3ac4e1e3c060c2c4de28912fcac7b3"
  },
  {
    "url": "/_nuxt/docs/components18.ad58cbc6afceb8610a30.js",
    "revision": "687cefc38edaed1715ab299a61e825f7"
  },
  {
    "url": "/_nuxt/docs/components19.6a2404444f6f21823303.js",
    "revision": "dba11803e61e5a5e1c1754a9a38c6956"
  },
  {
    "url": "/_nuxt/docs/components2.cfe8ae877c5b723fdfa1.js",
    "revision": "9ab1f6f0c203952626abc85333e00b93"
  },
  {
    "url": "/_nuxt/docs/components20.a807cb2c92ea5a2d1772.js",
    "revision": "17cb3db43a4985e7a291ca6b3bda2d4d"
  },
  {
    "url": "/_nuxt/docs/components21.dd9a84e9c793a9c02298.js",
    "revision": "47536cd1fed47bde773ec38a26ad2659"
  },
  {
    "url": "/_nuxt/docs/components22.1b433401d684be314388.js",
    "revision": "b6386c06b34c2f89d387f9dfe3691812"
  },
  {
    "url": "/_nuxt/docs/components23.7c8cb5a5d2cfc8563c1f.js",
    "revision": "ee4425193c9f3862740546454a5e7f6f"
  },
  {
    "url": "/_nuxt/docs/components24.ef3cee9ff88cb01a8c2c.js",
    "revision": "bba165759aa6dc02a7164da073b71516"
  },
  {
    "url": "/_nuxt/docs/components25.484db38bbe3120f32196.js",
    "revision": "005fa7515d424cc4414232cc38b0cae9"
  },
  {
    "url": "/_nuxt/docs/components26.f5d26d6ce4d236973cad.js",
    "revision": "ffb8679cf485b4cfb9af3e6dc0567198"
  },
  {
    "url": "/_nuxt/docs/components27.05a476bd640f65d8fc0f.js",
    "revision": "358880ae98633d52acf0ca8964572b35"
  },
  {
    "url": "/_nuxt/docs/components28.fe8f6cc82e20eafa0dd3.js",
    "revision": "b67ea244ad36b8ef0f9396ff1c534c94"
  },
  {
    "url": "/_nuxt/docs/components29.f5e366275b159a01340c.js",
    "revision": "ae19642676c1d993f1b369039b421f49"
  },
  {
    "url": "/_nuxt/docs/components3.15b4fc2688cefa041c56.js",
    "revision": "b0f4b0de02e8c76ce5dfdf3e8fe10d88"
  },
  {
    "url": "/_nuxt/docs/components30.708af81ac0e0f03331b7.js",
    "revision": "264d911a337f8fb1179c05059ecc6978"
  },
  {
    "url": "/_nuxt/docs/components31.5474e015f08c4e215427.js",
    "revision": "0fb8bab7c22de176e2df3bc2f718227f"
  },
  {
    "url": "/_nuxt/docs/components32.8882756cde9b3b65cda9.js",
    "revision": "51e61a68b94cb967f14856a2e7fc4b73"
  },
  {
    "url": "/_nuxt/docs/components33.3972392f7f70718be442.js",
    "revision": "5fc0527392fde4abff96a462e0c667cf"
  },
  {
    "url": "/_nuxt/docs/components34.008e46fd49d8cc8233fb.js",
    "revision": "204b9a1b7cdcca69817ac3351d0a8ef3"
  },
  {
    "url": "/_nuxt/docs/components35.1c949262f40f42ae6138.js",
    "revision": "f8906b66ec5b589d1da9eb42960c2194"
  },
  {
    "url": "/_nuxt/docs/components4.bc3664ca7bc54ffca74c.js",
    "revision": "21a64ecbcfa21a08bfc83f5eec1204c4"
  },
  {
    "url": "/_nuxt/docs/components5.a8701934f9112895ed32.js",
    "revision": "b387137fdef61636ba85ea6e89d2dde8"
  },
  {
    "url": "/_nuxt/docs/components6.aac8aebec89bf49f298c.js",
    "revision": "d4f52c74eda3d3a46e606fb6f9e1376f"
  },
  {
    "url": "/_nuxt/docs/components7.a3ec99c8086bd53a433e.js",
    "revision": "b42bdc2168daf6fe16c1a6421b55a6f6"
  },
  {
    "url": "/_nuxt/docs/components8.52e24147b69dec88fd82.js",
    "revision": "3c15ee231213329282ce97d4d6086449"
  },
  {
    "url": "/_nuxt/docs/components9.2a7bdc787ac3a4fb6edc.js",
    "revision": "84ecd26d4663e93118fe25e9d076e6c8"
  },
  {
    "url": "/_nuxt/docs/directives0.9746c4b8b9190fc9ce49.js",
    "revision": "f28e405356b48c2bbdb18589ad1e37fc"
  },
  {
    "url": "/_nuxt/docs/directives1.3680e18c5563d0b36513.js",
    "revision": "7ad39dc093e6ef5f782268cb825fbbed"
  },
  {
    "url": "/_nuxt/docs/directives2.002961e74231505bd0d4.js",
    "revision": "7c18ce3caf8e55d971cc6faaad6f1603"
  },
  {
    "url": "/_nuxt/docs/misc0.910852705f949eccbf7e.js",
    "revision": "4dfa112db1454deee5769897f8ac80fb"
  },
  {
    "url": "/_nuxt/docs/misc1.1ae0fba496b087e13ae1.js",
    "revision": "0014210e20ec6d0b574bc41d7ffc77c2"
  },
  {
    "url": "/_nuxt/docs/reference0.322fcf6054e9507ade25.js",
    "revision": "42fe69f8169b63d7d09bc7993c4025fd"
  },
  {
    "url": "/_nuxt/docs/reference1.8b68c90e305d7f500856.js",
    "revision": "b263531c367c84fd6d189fa209b656d3"
  },
  {
    "url": "/_nuxt/docs/reference2.c2138968d95cc11c632f.js",
    "revision": "37169a831b4323421cae44f0d35b6d45"
  },
  {
    "url": "/_nuxt/docs/reference3.3bf95eb9d723f51689f5.js",
    "revision": "87d441c9f16fc8054de1e5886d54e0b8"
  },
  {
    "url": "/_nuxt/docs/reference4.492cdd1b77d7c15da7b0.js",
    "revision": "a27135dc4deb32546fc10da7a14f1c49"
  },
  {
    "url": "/_nuxt/docs/reference5.98b7f1cc3998c5143864.js",
    "revision": "260019ee13e762c6ba615ddbab7a7412"
  },
  {
    "url": "/_nuxt/docs/reference6.612a9907331451a9922a.js",
    "revision": "175b6e879ad4cbb3dd5f066a91acfae4"
  },
  {
    "url": "/_nuxt/docs/reference7.9ecdcd9426d7a5914c8e.js",
    "revision": "420304c69a32f6985d178f9e459e32b4"
  },
  {
    "url": "/_nuxt/layouts/default.2b313a87a8530ecbe500.js",
    "revision": "2f9893c74abb6e98e2886195e476671a"
  },
  {
    "url": "/_nuxt/layouts/docs.35a9db41ee577d1eacec.js",
    "revision": "e125d1b0ff470b44a0665ba213633d4e"
  },
  {
    "url": "/_nuxt/manifest.c9d68a082f803fbe18c1.js",
    "revision": "a49a0e68ebcf9099305724df61f76d83"
  },
  {
    "url": "/_nuxt/mSearch.d83202b7c627a5eda0a6.js",
    "revision": "eaac4096652023590ee336d25acf7ec6"
  },
  {
    "url": "/_nuxt/pages/docs/components/_slug.5555d2aa9f05b62a172c.js",
    "revision": "2294f90f676ad019bb21398b03295d53"
  },
  {
    "url": "/_nuxt/pages/docs/components/index.94325bbbf230b59f515a.js",
    "revision": "8021e4ba19306cdc736d1758d397d70d"
  },
  {
    "url": "/_nuxt/pages/docs/directives/_slug.ef8dc8e089427e58f5d1.js",
    "revision": "4d84a058bad24fc9016691b24eff1288"
  },
  {
    "url": "/_nuxt/pages/docs/directives/index.39fc79a0f5a1a3ab7887.js",
    "revision": "d41bd0b1a2987d2b7e2e96134283eb00"
  },
  {
    "url": "/_nuxt/pages/docs/index.e026697f9972b54c7da3.js",
    "revision": "8e0013ee5377cc37418af36f7726678a"
  },
  {
    "url": "/_nuxt/pages/docs/layout.62f5a7854a531ae09aed.js",
    "revision": "22b29b7716213f2ad0ac4aaadbbb423d"
  },
  {
    "url": "/_nuxt/pages/docs/misc/_slug.cb83a21103b9b11f9218.js",
    "revision": "0967a17b5a9a19d477a42d5bd9603110"
  },
  {
    "url": "/_nuxt/pages/docs/misc/index.866ed52dd5e005a21ae4.js",
    "revision": "f91e4827decf304917d51f597188a9f9"
  },
  {
    "url": "/_nuxt/pages/docs/reference/_slug.3335d20c2b729e323f5c.js",
    "revision": "39531cfe534776666a193a0e71058618"
  },
  {
    "url": "/_nuxt/pages/docs/reference/index.5784132fd96ef6d708f3.js",
    "revision": "58addbb973f92f9caf1aa6eb741b7309"
  },
  {
    "url": "/_nuxt/pages/index.f3bc458c39fedf3a769a.js",
    "revision": "98630105e1d57fa70f1e46296a015cdc"
  },
  {
    "url": "/_nuxt/pages/play.f57e5056ade3a5fd2799.js",
    "revision": "cb0ab1bc3a7b700025ca41db6fcb25cc"
  },
  {
    "url": "/_nuxt/vendor.545c45c9ed41708edd96.js",
    "revision": "9632fecec3600796c1b07b503323768c"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

