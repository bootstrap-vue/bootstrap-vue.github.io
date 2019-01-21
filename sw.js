importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "bootstrap-vue",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/01848fa7cacdc13f5810.js",
    "revision": "20ad4304a8d4dd73c5d2f71e87fb6f53"
  },
  {
    "url": "/_nuxt/04820af9c56e613e31ff.js",
    "revision": "5226e424c6e5a7d3b6d1ed162fc8f5ed"
  },
  {
    "url": "/_nuxt/074f8493e85c3c46ea19.js",
    "revision": "2bf44d308ebd688669e1026a2b0ab996"
  },
  {
    "url": "/_nuxt/07dec4d86d55f17f8ebc.js",
    "revision": "c5d7d41e84297c628724d33b200dd667"
  },
  {
    "url": "/_nuxt/09128456582969591c3e.js",
    "revision": "892136dc31397277cc2ba2668017c681"
  },
  {
    "url": "/_nuxt/0945efa6eb756deec5e5.js",
    "revision": "e428b0a5c071f04781e3ad8cdf419ce5"
  },
  {
    "url": "/_nuxt/09c6261b3b6c4a5078a5.js",
    "revision": "7c1855c62a31b47f6cdd11d7822dd9c3"
  },
  {
    "url": "/_nuxt/0b376365fceef029b959.js",
    "revision": "78deed0bc8a771546164796e36aa2083"
  },
  {
    "url": "/_nuxt/0cf5182a3977afbeb728.js",
    "revision": "61957ec4395fb33e868da855643e941f"
  },
  {
    "url": "/_nuxt/0f62c217f3fafe60ae6b.js",
    "revision": "65320ed51ac06949b3ba3b1e22cce325"
  },
  {
    "url": "/_nuxt/11716482889a8c22a4fa.js",
    "revision": "deeecc5873ca9edee2ec8713cb73bb64"
  },
  {
    "url": "/_nuxt/13eb4b8b02f52438a5c7.js",
    "revision": "019f5da5f7e9dc4536a8900274806bb3"
  },
  {
    "url": "/_nuxt/1525dd3ddab3cb17e271.css",
    "revision": "83ad4b4959367dcb5d138a5d8b29c39e"
  },
  {
    "url": "/_nuxt/16a322adc79758c88b9f.css",
    "revision": "aec7399b06721d10d8e63f4cc75a50b3"
  },
  {
    "url": "/_nuxt/17b7a55b7da77b9514ca.js",
    "revision": "d13ea1e7d53b81e20dc9c02871c592a0"
  },
  {
    "url": "/_nuxt/19cb44325288c2b52b34.js",
    "revision": "28df8bce3208148b4c2a87420e06cd24"
  },
  {
    "url": "/_nuxt/19cc93aa11a8518ebcd8.js",
    "revision": "6850860a26fb2cea02687630a864f02d"
  },
  {
    "url": "/_nuxt/23a4e36d821c0115a2a6.css",
    "revision": "f868c19dd5b0727848e91c7240389625"
  },
  {
    "url": "/_nuxt/262124ef67c73f5650a3.js",
    "revision": "0cc4ec1f694fd3c1f6f84c34e70cc3d3"
  },
  {
    "url": "/_nuxt/29b9669676d9eac2db98.js",
    "revision": "39f351f53617bad4a10038d9aabf7a2b"
  },
  {
    "url": "/_nuxt/2b9ef29d93429a57cbb2.js",
    "revision": "292f87e2d4640d8b41b2ee8f35f55d65"
  },
  {
    "url": "/_nuxt/480115b54abd1aac6fb0.js",
    "revision": "bd2a54004fbff13ffb8ab0ebf8bcf6a3"
  },
  {
    "url": "/_nuxt/49364e1c8c0d5e005b06.css",
    "revision": "2564c77dad346758626bcb5124a302bc"
  },
  {
    "url": "/_nuxt/50b990ee68683441fd41.js",
    "revision": "4dd3197f6d76d97c360843b9d3e6a4c0"
  },
  {
    "url": "/_nuxt/52a7d92e45ba698868a7.js",
    "revision": "7370cf4ce24eebd5801f9f03a5fbfc95"
  },
  {
    "url": "/_nuxt/5504dc5d5623dc7e1854.js",
    "revision": "39b50dfaa17c69b6e8ac4aa5c476201b"
  },
  {
    "url": "/_nuxt/5b33ca6fc6a21181c1b7.js",
    "revision": "e2ce886d90c5d7da383e54223db7b1bd"
  },
  {
    "url": "/_nuxt/6727b35fae1187840585.js",
    "revision": "1ef9de9e112f2c4125d07ee870cc7c40"
  },
  {
    "url": "/_nuxt/6b56626ecc2efca9773a.js",
    "revision": "fcc8942bf8d77716ec5ee7f0a786d70d"
  },
  {
    "url": "/_nuxt/70b7d20d6e4b61a7ed95.css",
    "revision": "08f1748e415acc5026a70c8b2efdae5c"
  },
  {
    "url": "/_nuxt/71a0a884f826bab19883.js",
    "revision": "b753e0aa7cf1d1afaa38a7e9579205a9"
  },
  {
    "url": "/_nuxt/734c00dd55844b42c787.js",
    "revision": "b567c58b5aba1bd58ef8d92b97327eea"
  },
  {
    "url": "/_nuxt/7c17a728441ec7aeef8b.js",
    "revision": "fd64c528cae6f25dcfabd55e017027e2"
  },
  {
    "url": "/_nuxt/7d472f824b21e5b775a7.js",
    "revision": "445e700bcf58dc8ee1041b3923ff45a7"
  },
  {
    "url": "/_nuxt/7e1cc45b1baeb38a02b7.js",
    "revision": "bb532839aeac7b3484186bd227a22829"
  },
  {
    "url": "/_nuxt/806b364f21c2d75524c4.js",
    "revision": "a3e8ede301b6f4f2a835012f435a12ff"
  },
  {
    "url": "/_nuxt/837529246ee7ac1c6742.js",
    "revision": "fac2a3bf72cdb5e054991e76bee642ed"
  },
  {
    "url": "/_nuxt/8c97ebb5e84ad9ef4c90.js",
    "revision": "f809ccda6d6617470a61dfa837ceec8c"
  },
  {
    "url": "/_nuxt/93be90edb1652809524d.js",
    "revision": "9e2e8b45da0d5bf94bf0862cc10f4675"
  },
  {
    "url": "/_nuxt/975b14ad00938c49d53a.js",
    "revision": "329dccfbbb52cdbd631cd4f48eb87adb"
  },
  {
    "url": "/_nuxt/9a1e84c8187c90e4468d.js",
    "revision": "b0dd5edcac2f6b10cf9085375e443473"
  },
  {
    "url": "/_nuxt/9b1685af243ef6cf59f2.js",
    "revision": "36b7b54d91b996fa9cd85fc16bd9e5d6"
  },
  {
    "url": "/_nuxt/9dc2781fb280bd17413b.js",
    "revision": "5a833c506361adf765124712f6dd2dd1"
  },
  {
    "url": "/_nuxt/9f3d0ed14b781237cf13.js",
    "revision": "0d7aa30e03fcc547339c1bb64517d147"
  },
  {
    "url": "/_nuxt/a0f119bf8459f7e308bf.js",
    "revision": "b5a1d664c2c80dc9ef32ca370bd44b03"
  },
  {
    "url": "/_nuxt/a617b3377432d603693e.js",
    "revision": "2cbca340e4307208eddbf56d1bf0af2d"
  },
  {
    "url": "/_nuxt/aedc7f124bb899032fe9.js",
    "revision": "f023d1ec2c3bf52a4b7e6ac38b80fc81"
  },
  {
    "url": "/_nuxt/b05235ff4ff75bd75f2d.js",
    "revision": "aadb8eaa77d1687ee9ff0f9528dc8ab1"
  },
  {
    "url": "/_nuxt/b325e0c29066b0848ab1.js",
    "revision": "5854c725bc07511ab7fbf76595c49ea5"
  },
  {
    "url": "/_nuxt/b32fdc3fe7f8608a9726.js",
    "revision": "428921754307c577fc6d74f6a13c05ef"
  },
  {
    "url": "/_nuxt/b67385cf408cb4e18c58.js",
    "revision": "21359dd93012a66690d7d520f6e1443d"
  },
  {
    "url": "/_nuxt/b69b8b236100fed93612.js",
    "revision": "56573e771a491ae0e60b6227de98c645"
  },
  {
    "url": "/_nuxt/c37ea307e3e1b968ca5f.js",
    "revision": "7a187b8be2ab1d51920fed30ac852944"
  },
  {
    "url": "/_nuxt/c6e64772fd26684eaf97.js",
    "revision": "05a1a4468de9b0da18c163670b6b6b58"
  },
  {
    "url": "/_nuxt/cb44a184b77fef4b171b.js",
    "revision": "2b08c8676402befdff0a8669b15132cc"
  },
  {
    "url": "/_nuxt/d90057e810ecb529d778.css",
    "revision": "111f454ca8568d988c2f8a18a27d464b"
  },
  {
    "url": "/_nuxt/da35c273eb3ae1de6bca.js",
    "revision": "935624c756c3ca3b8dff868cc7e943d8"
  },
  {
    "url": "/_nuxt/df162ff0fe9c4be43754.js",
    "revision": "4f155bf7bbb9070b403c495c590d9ce3"
  },
  {
    "url": "/_nuxt/e19ce43249783bf499aa.js",
    "revision": "dd43485fae34c0e1f8a27e719127b6f2"
  },
  {
    "url": "/_nuxt/e51af24ac63ccf61398b.js",
    "revision": "47ffd8354a0f135f48e9f9b1929d93a9"
  },
  {
    "url": "/_nuxt/e69370d48aab1398fb8d.js",
    "revision": "c796d353b19d043c9408b2e4e8e2e318"
  },
  {
    "url": "/_nuxt/e74d76cb326f8fe1dc00.js",
    "revision": "8153ea532366f31d2120f9c533216108"
  },
  {
    "url": "/_nuxt/e7c171748245943ed26c.js",
    "revision": "eb23fe541c4f1cd49b9cf4edfc5fba3a"
  },
  {
    "url": "/_nuxt/e8bd3f453b4117496e01.js",
    "revision": "49726045fd03f8d094ddf3ac6b75b006"
  },
  {
    "url": "/_nuxt/e8c26398eced689657c9.js",
    "revision": "0cb4965c7fb5d9e37e484bc787c5e38d"
  },
  {
    "url": "/_nuxt/ea2b8f575265d60bc0ea.js",
    "revision": "e6966c6a23afe11833c29ee2499d2fa2"
  },
  {
    "url": "/_nuxt/ec79d2b3917426a53c88.js",
    "revision": "ceb8449b497823ded941c68d4ccfb48f"
  },
  {
    "url": "/_nuxt/ec86c4e9e2f56e272cf3.js",
    "revision": "5466cb8a15f893572f9504e29d80e360"
  },
  {
    "url": "/_nuxt/f10cb1abbfccb1bed28f.js",
    "revision": "6e611afdfedbf56e4684f64409fdd918"
  },
  {
    "url": "/_nuxt/f2e3763b9f6477766c10.js",
    "revision": "e08d24db527eddbeb081398ead1008bf"
  },
  {
    "url": "/_nuxt/f4a223d4a2760b03bc96.js",
    "revision": "d4dab4181f89c95bded3c2d8592a5a30"
  },
  {
    "url": "/_nuxt/f8a327a86a2f3d9950b8.js",
    "revision": "2d351a22649d8c2096b3fca4f4145c0e"
  },
  {
    "url": "/_nuxt/fa27e0803afdbadd5378.js",
    "revision": "3db1a71ca07221f10037347909649137"
  },
  {
    "url": "/_nuxt/fca4af7ca126328285aa.js",
    "revision": "1ba1a012be2f3806372ce98be81fc4a1"
  },
  {
    "url": "/_nuxt/fd00273e6a20719e35c7.js",
    "revision": "1389472c9701d7a88b08449a259dc75f"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

