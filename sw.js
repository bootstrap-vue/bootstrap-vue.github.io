importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "bootstrap-vue",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/14.1ef381545f5199aea1b3.js",
    "revision": "2f27264031217226671432afb984895a"
  },
  {
    "url": "/_nuxt/15.aec9ada3ff59fbf1f3db.js",
    "revision": "2ff5d2a7525bc22899cc179f8e7b7722"
  },
  {
    "url": "/_nuxt/66.f048ab539b15ac3cac9a.js",
    "revision": "d874705681c6753c825579d96c9dd7a2"
  },
  {
    "url": "/_nuxt/app.03893411ce45ca908eb2.js",
    "revision": "5d25cffda76af3f7b72cfc684df9aec6"
  },
  {
    "url": "/_nuxt/app.575e081b6bee441ee093c94b2a2c766b.css",
    "revision": "6cb93d54f59b69fc3109687485863a31"
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
    "url": "/_nuxt/docs/components14.428b39c4de04bf67d80f.js",
    "revision": "bd18629d4a8f8de089d044e60a135f1d"
  },
  {
    "url": "/_nuxt/docs/components15.341defc727d8ec113805.js",
    "revision": "293fe951ba61c4d518296ef968002681"
  },
  {
    "url": "/_nuxt/docs/components16.744bd36a3b2175e8905a.js",
    "revision": "096656c681fae992e4402f8b4db76412"
  },
  {
    "url": "/_nuxt/docs/components17.f7d7d1b635a1b024c0ec.js",
    "revision": "f3e83c922f2d4ae487dc0c041ef9bf63"
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
    "url": "/_nuxt/docs/components20.14b660e222ecf05919b2.js",
    "revision": "09ff155abd28b7d416dbcc4af95f960b"
  },
  {
    "url": "/_nuxt/docs/components21.dd9a84e9c793a9c02298.js",
    "revision": "47536cd1fed47bde773ec38a26ad2659"
  },
  {
    "url": "/_nuxt/docs/components22.797bd7b589219c141a27.js",
    "revision": "5272ab4a00574034e4bc9572dffb1cec"
  },
  {
    "url": "/_nuxt/docs/components23.7c8cb5a5d2cfc8563c1f.js",
    "revision": "ee4425193c9f3862740546454a5e7f6f"
  },
  {
    "url": "/_nuxt/docs/components24.9d04273a7fc09948279f.js",
    "revision": "87258570d216b286396c080ec2534aec"
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
    "url": "/_nuxt/docs/components27.86e4e85af830ee2bb450.js",
    "revision": "b13de83d017db5b859b0ec74395e652b"
  },
  {
    "url": "/_nuxt/docs/components28.c010b2a06ab2de1e7310.js",
    "revision": "6af18dd0ccba51aa2137bd4b9358127a"
  },
  {
    "url": "/_nuxt/docs/components29.d6f4385eaacc2e159f31.js",
    "revision": "d553f3058be86ff39e2270cbe6049830"
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
    "url": "/_nuxt/docs/components31.2ad6d96292c3f3c7a6b1.js",
    "revision": "23fbc24ad087d8180dc2d39cdcc36a66"
  },
  {
    "url": "/_nuxt/docs/components32.8882756cde9b3b65cda9.js",
    "revision": "51e61a68b94cb967f14856a2e7fc4b73"
  },
  {
    "url": "/_nuxt/docs/components33.71c0bd0b11ed1edb4e00.js",
    "revision": "6b4bcae8b3a26d2ebcb9638a2a9cec61"
  },
  {
    "url": "/_nuxt/docs/components34.86b0b4e32db5218c01a0.js",
    "revision": "2755b43a2f5927bbfb909847d99b15e2"
  },
  {
    "url": "/_nuxt/docs/components35.0411f79137e52abe6c99.js",
    "revision": "bc6f7c42a35a65cb4d167a86a048e25a"
  },
  {
    "url": "/_nuxt/docs/components4.bc3664ca7bc54ffca74c.js",
    "revision": "21a64ecbcfa21a08bfc83f5eec1204c4"
  },
  {
    "url": "/_nuxt/docs/components5.a52b62446afb2a858326.js",
    "revision": "df700eb46157cf91467002c464c3dec7"
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
    "url": "/_nuxt/docs/components8.bdd154044bad208f2640.js",
    "revision": "80766aafdf19e6aaaba6c44136a990bd"
  },
  {
    "url": "/_nuxt/docs/components9.64befb15031659e8d39e.js",
    "revision": "53b67bcaeb32d629824057cca203e405"
  },
  {
    "url": "/_nuxt/docs/directives0.9746c4b8b9190fc9ce49.js",
    "revision": "f28e405356b48c2bbdb18589ad1e37fc"
  },
  {
    "url": "/_nuxt/docs/directives1.0a8b3aaf3564e8c2422a.js",
    "revision": "547facfd584ccb2e3335a336d9cd3a56"
  },
  {
    "url": "/_nuxt/docs/directives2.002961e74231505bd0d4.js",
    "revision": "7c18ce3caf8e55d971cc6faaad6f1603"
  },
  {
    "url": "/_nuxt/docs/misc0.d27251999b75e3f9bdaf.js",
    "revision": "5b2cac74103516dcbbe844a437c5f7f2"
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
    "url": "/_nuxt/docs/reference2.cbc0b5d4de12d9e3df8d.js",
    "revision": "c301331d3d3b58243b403a29df12f52c"
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
    "url": "/_nuxt/docs/reference5.14a128ec5c0cd65117cc.js",
    "revision": "934a092305a7f997c0afe6d630b5a61f"
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
    "url": "/_nuxt/layouts/default.d0536e5b6b8db1b3f7d6.js",
    "revision": "08749c910a101997630bfd4f3779e2ab"
  },
  {
    "url": "/_nuxt/layouts/docs.4d6b2e8d031561982283.js",
    "revision": "37a3f8715222a1c28f053b32276bff49"
  },
  {
    "url": "/_nuxt/manifest.649bddb66c2923562a20.js",
    "revision": "c327d4bd82981824c8e4c2f0be137bce"
  },
  {
    "url": "/_nuxt/mSearch.20d955573e6fe4b1251e.js",
    "revision": "1c066ac5edf2709eba619f23c145b33d"
  },
  {
    "url": "/_nuxt/pages/docs/components/_slug.9cfb7c011387bb73ce30.js",
    "revision": "1370385d79f1e115db5791461fec3b1e"
  },
  {
    "url": "/_nuxt/pages/docs/components/index.224f3481e3ff5ef02beb.js",
    "revision": "3345bf881db80334b1a9d9939387eb2f"
  },
  {
    "url": "/_nuxt/pages/docs/directives/_slug.41944d17bbc56b9b2e0e.js",
    "revision": "a425562f54a7d2843dcf807e928ca5ae"
  },
  {
    "url": "/_nuxt/pages/docs/directives/index.0bd23b721e11900c8521.js",
    "revision": "d40fe5eaee98acf689e09894a8886f73"
  },
  {
    "url": "/_nuxt/pages/docs/index.29034544b7c7967f62c6.js",
    "revision": "31476a74409620f8327ee9443fe40503"
  },
  {
    "url": "/_nuxt/pages/docs/layout.5a1f8f8cbefc91a1c5da.js",
    "revision": "09c630d7152e0991d4a1be2fa3351b67"
  },
  {
    "url": "/_nuxt/pages/docs/misc/_slug.6074b2932ebaab072381.js",
    "revision": "a14d813e3da5ca6fa1c81ffc8eaf322a"
  },
  {
    "url": "/_nuxt/pages/docs/misc/index.3d213767da37731f9d39.js",
    "revision": "e4ed59be04159a7310ec5c669cf571cd"
  },
  {
    "url": "/_nuxt/pages/docs/reference/_slug.845eae573cc7480395a9.js",
    "revision": "b5167853232851df8d27d40bcdb9daf0"
  },
  {
    "url": "/_nuxt/pages/docs/reference/index.6de9220225be4220b662.js",
    "revision": "96d7600a5a875e3811928c8a0928f717"
  },
  {
    "url": "/_nuxt/pages/index.d1d26b29cd0c6a760c01.js",
    "revision": "2f78a8c4e195c6c242eae336feda7dd9"
  },
  {
    "url": "/_nuxt/pages/play.52c5494682f1b490f77f.js",
    "revision": "c911fd2bf816e69056995381257df636"
  },
  {
    "url": "/_nuxt/vendor.844c126d5ab20971fd82.js",
    "revision": "871682e3d24defa5b6902fdbb2c08594"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

