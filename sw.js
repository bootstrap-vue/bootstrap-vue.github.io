importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "bootstrap-vue",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/14.1ef381545f5199aea1b3.js",
    "revision": "0efe96ecac25745ee7245d6115d83ce8"
  },
  {
    "url": "/_nuxt/15.aec9ada3ff59fbf1f3db.js",
    "revision": "965d3cdec4645c71225309cc9f37fe0b"
  },
  {
    "url": "/_nuxt/65.005bdf90e8ed64949953.js",
    "revision": "e3aba08129603c2d1086cc5d1f4a4d97"
  },
  {
    "url": "/_nuxt/app.2552787a3e78fc2d4a343e35a3c8ea39.css",
    "revision": "132b0b7fc74b8dd1ae3d56d3b1a00053"
  },
  {
    "url": "/_nuxt/app.8d6471881e27f87a4945.js",
    "revision": "bd2f30a4b0c9722f29f3eeb9cc85da94"
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
    "url": "/_nuxt/docs/components13.6639d786f1e9645ae008.js",
    "revision": "ed2642fe3f188466188e33e0c29c02a8"
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
    "url": "/_nuxt/docs/components17.cacd40883deb1b24493c.js",
    "revision": "5b43fc4b8bab325a736f9debbee8edef"
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
    "url": "/_nuxt/docs/components20.0ef648a0d0f0c019d8ed.js",
    "revision": "5883cb3f73480a635945f99906e43c74"
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
    "url": "/_nuxt/docs/components26.56d68da41cad1ca32009.js",
    "revision": "ee244cb62c840a706fe461251029d003"
  },
  {
    "url": "/_nuxt/docs/components27.7f486d8eefed237eb506.js",
    "revision": "e367495315d872567bcbfa9197751497"
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
    "url": "/_nuxt/docs/components9.096314eaef32b5f15893.js",
    "revision": "4f782838336c08cee631ce10f056b6e8"
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
    "url": "/_nuxt/docs/misc0.1b455b29f9ff96604f70.js",
    "revision": "f62e06124486c80d47563e4c4e36021b"
  },
  {
    "url": "/_nuxt/docs/misc1.763169650b5283c6721c.js",
    "revision": "6a53d3525d7bb4686abf5aa4eb34a57e"
  },
  {
    "url": "/_nuxt/docs/reference0.deef0df08716d63bd47c.js",
    "revision": "7a5120a2bff32c00fe3bad815832528b"
  },
  {
    "url": "/_nuxt/docs/reference1.db3ec327c33ccb385fe4.js",
    "revision": "737c0470145898b649141ae055aa886f"
  },
  {
    "url": "/_nuxt/docs/reference2.8c888bdbca8cc2a1389f.js",
    "revision": "d9160b9af6f52bedfe17f05a11e0ea10"
  },
  {
    "url": "/_nuxt/docs/reference3.72c5b32c0a71c75dd0d5.js",
    "revision": "3ee7bc95bb6f94715ae69906ac96668f"
  },
  {
    "url": "/_nuxt/docs/reference4.6b1240e431efc9f29a4b.js",
    "revision": "e52ca9951358b4f607483de71f6a1f3d"
  },
  {
    "url": "/_nuxt/docs/reference5.545af15fc914d1a47eb3.js",
    "revision": "77e981e12947665518a82d2039ebd7d0"
  },
  {
    "url": "/_nuxt/docs/reference6.cb1fc5a7782b7afd5707.js",
    "revision": "32eb34bac8dee75d809ad594f03cc1bd"
  },
  {
    "url": "/_nuxt/layouts/default.821dbde47cae59b7ddfe.js",
    "revision": "bacf2bc0e5954b0271881fa89e921244"
  },
  {
    "url": "/_nuxt/layouts/docs.6ab9e032cd230fe91e10.js",
    "revision": "387a43152a12f613c998e951f45af03a"
  },
  {
    "url": "/_nuxt/manifest.f7899ec448dad2efbbc4.js",
    "revision": "d84a9f2c9595e9fdedd291a8ef5b2f78"
  },
  {
    "url": "/_nuxt/mSearch.122fb878e71f39b81b74.js",
    "revision": "01593ecdb76e656afddcad92f2d4fe64"
  },
  {
    "url": "/_nuxt/pages/docs/components/_slug.cfbd976d22a2c7616ab3.js",
    "revision": "f744ed9d025efc3e92bf26eade9f3ee6"
  },
  {
    "url": "/_nuxt/pages/docs/components/index.224f3481e3ff5ef02beb.js",
    "revision": "3345bf881db80334b1a9d9939387eb2f"
  },
  {
    "url": "/_nuxt/pages/docs/directives/_slug.95a34160f33129d380bd.js",
    "revision": "5f711cb8c6c711e62617c5df82de7104"
  },
  {
    "url": "/_nuxt/pages/docs/directives/index.0bd23b721e11900c8521.js",
    "revision": "d40fe5eaee98acf689e09894a8886f73"
  },
  {
    "url": "/_nuxt/pages/docs/index.c2d2f20bdbfca9fd6eb5.js",
    "revision": "4cc329571b136bc684e0cfec20bb1567"
  },
  {
    "url": "/_nuxt/pages/docs/layout.5a1f8f8cbefc91a1c5da.js",
    "revision": "09c630d7152e0991d4a1be2fa3351b67"
  },
  {
    "url": "/_nuxt/pages/docs/misc/_slug.af0b264b31b73834cbdb.js",
    "revision": "4bf92324c87badf437a86deca4f4a4d9"
  },
  {
    "url": "/_nuxt/pages/docs/misc/index.3d213767da37731f9d39.js",
    "revision": "e4ed59be04159a7310ec5c669cf571cd"
  },
  {
    "url": "/_nuxt/pages/docs/reference/_slug.b2de1a2603ba0d418a02.js",
    "revision": "646516277fe6cff102506e786da26192"
  },
  {
    "url": "/_nuxt/pages/docs/reference/index.6de9220225be4220b662.js",
    "revision": "96d7600a5a875e3811928c8a0928f717"
  },
  {
    "url": "/_nuxt/pages/index.cca5cf81f70ed3e1b00e.js",
    "revision": "119af46a4b3c3178eac546eaa4bc19a0"
  },
  {
    "url": "/_nuxt/pages/play.52c5494682f1b490f77f.js",
    "revision": "e30454180b3172f15f0fe7e13b59c865"
  },
  {
    "url": "/_nuxt/vendor.2f15d71eae6107447877.js",
    "revision": "1a884757dd360fd5069459ed480d9ba9"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

