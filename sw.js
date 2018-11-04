importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "bootstrap-vue",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/01ad2a3af2026c70e2bd.js",
    "revision": "175c90a8573548a0e164e1e0b36fa4bc"
  },
  {
    "url": "/_nuxt/02a2cc44d0909ac984e2.js",
    "revision": "39167c32b9076007c64664c6eb7b86e5"
  },
  {
    "url": "/_nuxt/0362cd4b86bb67103287.css",
    "revision": "8c5015b5be8d3e7675c323a814f8a9aa"
  },
  {
    "url": "/_nuxt/04176ba3881af13574ce.js",
    "revision": "bb929ca5358c8febc2aaf4f02cb5e6f4"
  },
  {
    "url": "/_nuxt/06c3fd910eefa3124472.js",
    "revision": "e6dbaa485eea973859247c47bbd2d8ca"
  },
  {
    "url": "/_nuxt/0b0fc5b6545827382fd5.js",
    "revision": "613163d861a8d52d0b58a9124805f917"
  },
  {
    "url": "/_nuxt/0c7ef87dff21c34d1f08.js",
    "revision": "2807a015a6efa3acd4616fd8e5dd65a1"
  },
  {
    "url": "/_nuxt/0ea733d17e527cd6c754.js",
    "revision": "21a9ccbef2545051dd3959b99c12cf43"
  },
  {
    "url": "/_nuxt/12fa1859251ec9d46b48.js",
    "revision": "6c562d6f6525fc2bcac4a9f725307295"
  },
  {
    "url": "/_nuxt/1525dd3ddab3cb17e271.css",
    "revision": "83ad4b4959367dcb5d138a5d8b29c39e"
  },
  {
    "url": "/_nuxt/19fc9fdb92440fc9c010.js",
    "revision": "08efd3fef2b1d1810076114fbdfbf6d6"
  },
  {
    "url": "/_nuxt/1b6a54a350bfda3bf9c2.js",
    "revision": "4d844b43c5540f5b1890e04b28a2c55d"
  },
  {
    "url": "/_nuxt/23a4e36d821c0115a2a6.css",
    "revision": "f868c19dd5b0727848e91c7240389625"
  },
  {
    "url": "/_nuxt/2894200d20f1fdbca949.js",
    "revision": "47091020ba806903dd6f7c213fafcdda"
  },
  {
    "url": "/_nuxt/2d0d206f93b45763ef23.js",
    "revision": "2fe0fa4fca53c3b10163ee874ef53100"
  },
  {
    "url": "/_nuxt/2dd4cbe33e81465ce7eb.js",
    "revision": "d499f896232bd9df72faed3f9fd3b3c9"
  },
  {
    "url": "/_nuxt/3ab5572eb1ce88797b98.js",
    "revision": "4c57839ca79db3d7ce2e7641542b225f"
  },
  {
    "url": "/_nuxt/3c38bad5983ada67077c.js",
    "revision": "09e2acf0b10ec04059475da5d1aea112"
  },
  {
    "url": "/_nuxt/424f66fd55d41f27616a.js",
    "revision": "e4295552d4ca370576d832f381e7c8dd"
  },
  {
    "url": "/_nuxt/4259ac7ce912714803a9.js",
    "revision": "3401c7d19df2cef01932d4c8ac222a2a"
  },
  {
    "url": "/_nuxt/49364e1c8c0d5e005b06.css",
    "revision": "2564c77dad346758626bcb5124a302bc"
  },
  {
    "url": "/_nuxt/4b635bf168b93fd342ab.js",
    "revision": "a56ad921b009071069729fadfca75ac8"
  },
  {
    "url": "/_nuxt/4c4136c605c4a0d90293.js",
    "revision": "72452abd89805a7efc0232fc7ed031e3"
  },
  {
    "url": "/_nuxt/4d5e2eea6d89a878c099.js",
    "revision": "d5cc0e9b5cf25ea1b91d5d6888ba5417"
  },
  {
    "url": "/_nuxt/4eadfce7273ae8d0275c.js",
    "revision": "af14065c39f5988c1c4cb21980c90d81"
  },
  {
    "url": "/_nuxt/50636fc21b5777331ec2.js",
    "revision": "2897cb555562ff9eb0d0dbc88d2cefe8"
  },
  {
    "url": "/_nuxt/584a30b56be12f41b3c6.js",
    "revision": "ad2829e625342ba2c5deb9066afd7bb9"
  },
  {
    "url": "/_nuxt/5b791522fe54c3e9c88a.js",
    "revision": "aae079d6b94a507d6bfeddf2c36ad457"
  },
  {
    "url": "/_nuxt/672e307237524b35ea5b.js",
    "revision": "be03a379198f7a408b5f8b23cdf6ce6e"
  },
  {
    "url": "/_nuxt/6d0b6cb7780d93a22420.js",
    "revision": "92630cab88f71bd0776cc5673d10d5fd"
  },
  {
    "url": "/_nuxt/70912c24fa9c1844750b.js",
    "revision": "19ac05c77f8719c50a27c3fa17b193ce"
  },
  {
    "url": "/_nuxt/70d8c8060b8950a2b8eb.js",
    "revision": "4be4f08f1bf4b9fd5b0949a6655ad099"
  },
  {
    "url": "/_nuxt/7290a1701cb5e053ccaf.js",
    "revision": "3414d1325227bf66aa6fc37eb34d0603"
  },
  {
    "url": "/_nuxt/7abc5980f66463402210.js",
    "revision": "8b900eb4b7d6e376618444b7c7110948"
  },
  {
    "url": "/_nuxt/7b940734c533961bcb56.js",
    "revision": "1e35acfe6ffd05ca23e8682e3fafbc63"
  },
  {
    "url": "/_nuxt/7eeebdc424bbe8043082.js",
    "revision": "f7fe5c1c7456109cbcf3f54e395d55ce"
  },
  {
    "url": "/_nuxt/8122053e94b2b83ab7fc.js",
    "revision": "95d643baa435da6a276e8f29b2ea7344"
  },
  {
    "url": "/_nuxt/8780801217b816bbd537.js",
    "revision": "6e4747cb17fc8e6001ea59ecec153bba"
  },
  {
    "url": "/_nuxt/878dec855e7948d0eb93.css",
    "revision": "6a6aafe71467709ed901f61ff107c298"
  },
  {
    "url": "/_nuxt/8ae4eb63836ce1e7b94a.js",
    "revision": "4cfab2bc0a62309ca132bfc467e81312"
  },
  {
    "url": "/_nuxt/91f7996f0353d6157bdb.js",
    "revision": "3894c1a14020fdc9e9b787b9807e2a46"
  },
  {
    "url": "/_nuxt/96d7b52a40f6b6b79345.js",
    "revision": "67afb3c71863f8832803f0710b162ac7"
  },
  {
    "url": "/_nuxt/a184ad54c50c9fa286d1.js",
    "revision": "1aa149288f7cb99c43f0dc78ab8bace0"
  },
  {
    "url": "/_nuxt/ac936294db3f30725030.js",
    "revision": "7df0b5919f48f99d93b9483ab85febac"
  },
  {
    "url": "/_nuxt/ad176b2c60ca212fa3dd.js",
    "revision": "50a8abc04015de856926443616b2f23d"
  },
  {
    "url": "/_nuxt/adfa0936e37591b89742.js",
    "revision": "db8453428c8a4e59040b2957b31d226b"
  },
  {
    "url": "/_nuxt/b72622c9ef785380416b.js",
    "revision": "7eb6cb7bd81a58244d1d05d66a976040"
  },
  {
    "url": "/_nuxt/bb618f891be940257b6b.js",
    "revision": "b7a16133ff0c4de01fa97462980bc755"
  },
  {
    "url": "/_nuxt/bcd117ca833d0632af2c.js",
    "revision": "9f892b9b86450cd8ffa52c981a03abbd"
  },
  {
    "url": "/_nuxt/c4919925e1ade7333657.js",
    "revision": "e6fbc5de81c9bdcdd3de27f2bbeda42b"
  },
  {
    "url": "/_nuxt/c5a12dd62ccd1bc5ba92.js",
    "revision": "680326c94640566697826284f650558e"
  },
  {
    "url": "/_nuxt/cb7c6822a95f81a8581f.js",
    "revision": "36585d6d8679a01a4ceebec8b8caeaa7"
  },
  {
    "url": "/_nuxt/cd398ea4b816de5ef2b6.js",
    "revision": "47ad03d791359ab7f982aa40deaa22c8"
  },
  {
    "url": "/_nuxt/d017eb15e473065a1b75.js",
    "revision": "df794c956d3af29c1a3ecd14ae1d6144"
  },
  {
    "url": "/_nuxt/d11e250b695708479e76.js",
    "revision": "3360512d573efaf258fdc140558a69b9"
  },
  {
    "url": "/_nuxt/d2ecbe81883411b38d98.js",
    "revision": "b052482bc7f2f9b7b60219bcc32844be"
  },
  {
    "url": "/_nuxt/d90057e810ecb529d778.css",
    "revision": "111f454ca8568d988c2f8a18a27d464b"
  },
  {
    "url": "/_nuxt/d961c0d753f691b30350.js",
    "revision": "c4385313e0bdc80c2ff6fff221443699"
  },
  {
    "url": "/_nuxt/ddb6ac76ebb27e29cf4e.js",
    "revision": "2a2310c7192682f19c573afb7901281c"
  },
  {
    "url": "/_nuxt/e191d86204a6106c3219.js",
    "revision": "1993d71a78d40c946c33458f45cbbabf"
  },
  {
    "url": "/_nuxt/e1c0cfa5d67c80963518.js",
    "revision": "ff9394fd91a73ef51d7922d0ba46b68d"
  },
  {
    "url": "/_nuxt/e22eae4093fa9cb68a5c.js",
    "revision": "a54373854ee4dfb57103829271af1f7a"
  },
  {
    "url": "/_nuxt/e42aa8c50e58efb90d19.js",
    "revision": "5385c53a5345af472a28bbd672d67540"
  },
  {
    "url": "/_nuxt/e4b99986b4b2957afbe8.js",
    "revision": "9df81d79b0d82fe308cef596f4913120"
  },
  {
    "url": "/_nuxt/e4e9d3f7faa46d7bf4cf.js",
    "revision": "cc22e2b1d9f02d36b2ccaabe0562677c"
  },
  {
    "url": "/_nuxt/e5004a40e8de5e301de3.js",
    "revision": "67ac3fa79d9060c634be3b14643e1615"
  },
  {
    "url": "/_nuxt/e5f044abf514915108f6.js",
    "revision": "126f0e678789a859aa8294cd45061abc"
  },
  {
    "url": "/_nuxt/ea092caa593c02a09225.js",
    "revision": "fe3219bda2d5738bd22f0d3e0d59d1e5"
  },
  {
    "url": "/_nuxt/eb04fa6b52aecc73b776.js",
    "revision": "e5144b0564d958ecbbd3b05ae6e0a8dc"
  },
  {
    "url": "/_nuxt/ec928d4979dfb06c9bfa.js",
    "revision": "ea95f0306bd89ff8631285bdc9555b52"
  },
  {
    "url": "/_nuxt/f058c92609f9740ec57b.js",
    "revision": "830f26e8dd6d5c9095154ed128b13b03"
  },
  {
    "url": "/_nuxt/f15a66b0344ea8999509.js",
    "revision": "b09fd62244476d253c6f63f52183512d"
  },
  {
    "url": "/_nuxt/f5bc5dae0e3b7ae01fda.js",
    "revision": "71671a23cd86ebb9df312b6c4ce3ce13"
  },
  {
    "url": "/_nuxt/fbbc7b63e4226ba6bf90.js",
    "revision": "d3b78565e3c37588ac84d6c9be2f2a0c"
  },
  {
    "url": "/_nuxt/fda2fb0c06fcb77b84f9.js",
    "revision": "ae98f193b6bafe670153b193a2238baf"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

