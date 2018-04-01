importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "bootstrap-vue",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/038d511866e96a35f6f2.js",
    "revision": "98e315af98775559119b54c13c3b5c9d"
  },
  {
    "url": "/_nuxt/040524ed3cb96e7232c6.js",
    "revision": "e6ff1fe6227e2ed59f492a2a6ec9c37b"
  },
  {
    "url": "/_nuxt/07f5802376fce54c1c95.js",
    "revision": "6bb612956abc6f665573355ce0fd97ed"
  },
  {
    "url": "/_nuxt/0e4303518fb9316deee4.js",
    "revision": "a45bb8742143079575db46712e8b037e"
  },
  {
    "url": "/_nuxt/10371c82311793b40af1.js",
    "revision": "a97d5946b6e703a0ced301d9101738a0"
  },
  {
    "url": "/_nuxt/109fc1831c0833a5c398.js",
    "revision": "bffbb76a1d9f7227bb91b21b46ce921e"
  },
  {
    "url": "/_nuxt/1160c538dd7f52ec7144.js",
    "revision": "4cb4e18c29d074b19a29ac035f191723"
  },
  {
    "url": "/_nuxt/14456bb5458f65ab7622.js",
    "revision": "01c283ab4f7d9f331e3075667dcd6485"
  },
  {
    "url": "/_nuxt/1ce797aff43a19a2d126.js",
    "revision": "52fc94bdecc3d90dd624b8f0d6921417"
  },
  {
    "url": "/_nuxt/2200aec9611e6c529435.js",
    "revision": "54c69ecea0985b58cc88cafa50accc6a"
  },
  {
    "url": "/_nuxt/25e69da05d511bd1e4e9.js",
    "revision": "ca7c1f5c7bd12aca00f41deb5b8b4c81"
  },
  {
    "url": "/_nuxt/2893814444ac8bc8d16b.js",
    "revision": "fff56974b4278944e3b6fc1c838461a1"
  },
  {
    "url": "/_nuxt/2c8bcfd5c7a3991044a3.js",
    "revision": "d7b2ced59b103e533478fda86777580f"
  },
  {
    "url": "/_nuxt/3c5d7f1e938817e0771b.js",
    "revision": "00080795fb74d1548c7f70d49b678d95"
  },
  {
    "url": "/_nuxt/3d90af98ef714c7bc09f.js",
    "revision": "2a915ae4683c313ee7c410a8b16b7e4a"
  },
  {
    "url": "/_nuxt/3de135f7dce9d6351871.js",
    "revision": "e192a5a02402bb5405dfef27671641f6"
  },
  {
    "url": "/_nuxt/45b43f0758a3194fdcbd.js",
    "revision": "921e47161e6be36e4e02cdef0cf7eb2d"
  },
  {
    "url": "/_nuxt/465ee07df48da2296ca9.js",
    "revision": "52273b596c0c2b1ff4535f07035741cf"
  },
  {
    "url": "/_nuxt/47328ade6c21941adcf0.js",
    "revision": "31688221353d1a86639002a874662c5f"
  },
  {
    "url": "/_nuxt/47bcf767414d53488d54.js",
    "revision": "f5712dbfb40054b6e8154a5e05f301d6"
  },
  {
    "url": "/_nuxt/4858f11373525d8f4876.js",
    "revision": "bff0a3ad1695d51350f6459620973117"
  },
  {
    "url": "/_nuxt/48be52fa606d430fc8e5.js",
    "revision": "70c4eeb81e256f9980d4fd6d5f3ae807"
  },
  {
    "url": "/_nuxt/4a1065a86963bec73afc.js",
    "revision": "ec8758f68e1e76469fb0cd53ef856339"
  },
  {
    "url": "/_nuxt/4bf285d0e2179acc7c2a.js",
    "revision": "ccbe6e7b701e089dcb3e7e1b892a3895"
  },
  {
    "url": "/_nuxt/4da3ed2f0bc95a225353.css",
    "revision": "895dc8fd9e1c4a6f1b6654fa145eaf03"
  },
  {
    "url": "/_nuxt/51ceaf97a9b224f3523c.js",
    "revision": "49896d2a1931ddc871b755a2852cedf6"
  },
  {
    "url": "/_nuxt/5400a7af4cbf5c8e290a.js",
    "revision": "ae08f7936b08ee1b148b216048d71ae5"
  },
  {
    "url": "/_nuxt/5843b11c949701751b5a.css",
    "revision": "780376de299835226a489446e068194e"
  },
  {
    "url": "/_nuxt/5ff06b658dd1e38f3317.js",
    "revision": "ea6e8fdec1383dbbe50c075d83846554"
  },
  {
    "url": "/_nuxt/62999ff145514cd5fc64.css",
    "revision": "b817d1f866c4acd18fa321f141401d73"
  },
  {
    "url": "/_nuxt/68288757e233454e6c78.js",
    "revision": "8ab122f33a24b5665ff64acea039d7ee"
  },
  {
    "url": "/_nuxt/6879502cc197caa71e58.js",
    "revision": "43aac25da8477ed2d2bad9b9b044cd98"
  },
  {
    "url": "/_nuxt/6dfbe240c1ccbeecc6fd.js",
    "revision": "3d706f945a66ca203d0089e8d6f5cc4e"
  },
  {
    "url": "/_nuxt/70806740dedfca6f5e6d.js",
    "revision": "7606624345c3788f6a0bbd5e08b6875f"
  },
  {
    "url": "/_nuxt/73545f9ce286ecfb6bcf.js",
    "revision": "05539ce5e9542df9e1a8143c61a24c6c"
  },
  {
    "url": "/_nuxt/772d7def86823654f986.js",
    "revision": "3d634dfdd60bef44e2c5db4241257bdd"
  },
  {
    "url": "/_nuxt/7e5803d58809ed368d9d.js",
    "revision": "0ea6c5cb0515c01a995e994a3f4c0bb9"
  },
  {
    "url": "/_nuxt/7f91d886e73e810ab615.js",
    "revision": "53cfc34e9bc540ddd8743069b1c07812"
  },
  {
    "url": "/_nuxt/82cf4d52912d1a29b0b4.css",
    "revision": "9fd8e258bc019dccceae238994fb4f4d"
  },
  {
    "url": "/_nuxt/832d65a154729522259e.js",
    "revision": "a3267029f79f09bbef01c9d8b2d988ac"
  },
  {
    "url": "/_nuxt/83643642e426fe5f6b41.js",
    "revision": "ebc536fd17a70e77838b9c9e1348cef1"
  },
  {
    "url": "/_nuxt/84f5b5c52e1c62c2d6b0.js",
    "revision": "a50123892650b4624fe57206fe3b8a2d"
  },
  {
    "url": "/_nuxt/8a16f9a20242367e9b41.js",
    "revision": "d0fc28365781c79addbcf69d5b3087e0"
  },
  {
    "url": "/_nuxt/914cbb19e2063554b816.js",
    "revision": "3f61cceb823f088c495e5ac4c07948fd"
  },
  {
    "url": "/_nuxt/9b6884e80b2d7c0a0c5d.js",
    "revision": "43e2c0bc63accd964b901b4f777dc29d"
  },
  {
    "url": "/_nuxt/a2186f090d99096a4f4a.js",
    "revision": "6d661dbd69ffa73cc3ac52c24fbf5f4b"
  },
  {
    "url": "/_nuxt/a2ef3256f9c80aab5c98.js",
    "revision": "aa494cdfc41ec125663bcd41aa2c089b"
  },
  {
    "url": "/_nuxt/a37775137b89e2a4b166.js",
    "revision": "1e87b4287431e0edc60c217d64cc5a9c"
  },
  {
    "url": "/_nuxt/a49c4bfb0f14479834bf.js",
    "revision": "7271ce4365ac22c2e6a2407dbab92466"
  },
  {
    "url": "/_nuxt/a5919d440d402b39b947.js",
    "revision": "987b36020992941c3edd6ea42d5bd74d"
  },
  {
    "url": "/_nuxt/ad3732faac2442e34bbf.js",
    "revision": "29ace5d691c08d6d439e34352e334ef8"
  },
  {
    "url": "/_nuxt/b6de2f6245118eced530.js",
    "revision": "8082a06d0b106054a722ff84df2fc35f"
  },
  {
    "url": "/_nuxt/b7a399fb8d4cacdc886d.js",
    "revision": "f96ae83f82a09cfa0811f797bfca4859"
  },
  {
    "url": "/_nuxt/b928fd55f976fc5e6c35.js",
    "revision": "b9cb72a95fbe6661b9d7d5d83202234a"
  },
  {
    "url": "/_nuxt/b9bf167de89df400ca0c.js",
    "revision": "9b4dbcbec38117cb5dca0eceb1f2844e"
  },
  {
    "url": "/_nuxt/b9eefd4e819538a542ab.js",
    "revision": "37cbea6fc2b3e259298fd0390e70728a"
  },
  {
    "url": "/_nuxt/c21e601032a9ffb7a282.js",
    "revision": "aa3f87a75b604ab2655a337ed1e9badb"
  },
  {
    "url": "/_nuxt/c89340343f65c71b3e7c.js",
    "revision": "15257d563d4443b0d2cae04d51e4b7a7"
  },
  {
    "url": "/_nuxt/cb9dd9518f95ea5fa0e5.js",
    "revision": "3346ac4469ab8f276e392c6913010dd7"
  },
  {
    "url": "/_nuxt/d41fe8ffaac1d8f6d197.js",
    "revision": "a0b91c67f7169715c5120867880b29b4"
  },
  {
    "url": "/_nuxt/d42fa6fa0f16b9e480e0.js",
    "revision": "2b818e15c2e098d0619a1b09d62e3944"
  },
  {
    "url": "/_nuxt/db84f56c07cac8dd5ecc.js",
    "revision": "488c6ef45bf932b42846e47a0d040dc1"
  },
  {
    "url": "/_nuxt/e27191d040e619af892c.css",
    "revision": "cf303006943d8acee6f2d877c2d93c85"
  },
  {
    "url": "/_nuxt/e352431e47be032870a3.js",
    "revision": "e422acee7f1ae748bce2d4df7a4b7b99"
  },
  {
    "url": "/_nuxt/e42a350ab82490b58fdc.css",
    "revision": "f49f8be3695d19fbf8e750a54ce42b0b"
  },
  {
    "url": "/_nuxt/e4547e4336ef1ff02688.js",
    "revision": "751f7bc52143b392fb5cd93f1a43126b"
  },
  {
    "url": "/_nuxt/e4620958d9dc5ffd3da2.js",
    "revision": "83e8c223641a653f8b0095ae69ded28d"
  },
  {
    "url": "/_nuxt/e82f034b70319ae38038.js",
    "revision": "2c308982d23e7a00191cf5e1ff6f5dc3"
  },
  {
    "url": "/_nuxt/e8ed843cfc31ef8ac57b.js",
    "revision": "2d42341247e52fded972efab6f4b1219"
  },
  {
    "url": "/_nuxt/ee0f848f1f862664788a.js",
    "revision": "52bc0a33c2c5fe49c2d3afd4c57b6a7f"
  },
  {
    "url": "/_nuxt/f4d17222f4d135e1d341.js",
    "revision": "1d04a89dc8ed6e8c79c3f4816267aedb"
  },
  {
    "url": "/_nuxt/f659c8ae36c9e46c452b.js",
    "revision": "1d0fd964a48c94132d94abb69abc43da"
  },
  {
    "url": "/_nuxt/f918b94f8dc89dbd624a.js",
    "revision": "e2df8ecce1d4c32ec98a397ac9dc48a4"
  },
  {
    "url": "/_nuxt/ffa5aa613bc768cfb194.js",
    "revision": "2bb597a7bf3e14663012496482738a4e"
  },
  {
    "url": "/_nuxt/fff5b58f7a3d08eda7b2.js",
    "revision": "2dddd7230a1c10476343de285fde0be1"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

