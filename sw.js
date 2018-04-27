importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "bootstrap-vue",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/00a2d6e6b0c31ed995c1.js",
    "revision": "d9fdd4468df5d8216766f12a2d529283"
  },
  {
    "url": "/_nuxt/027e262cc5a4fb37c4cb.js",
    "revision": "471464c1a00bf48a69f5a990f6ec6482"
  },
  {
    "url": "/_nuxt/02ce16ad2dee1e6d8e28.js",
    "revision": "5affa24a2cab358e24e402e6f1fe6de5"
  },
  {
    "url": "/_nuxt/052ea82629e51e257570.js",
    "revision": "c925fa364964e6288b640f471f0b391b"
  },
  {
    "url": "/_nuxt/080b1b5d8b75fe00f106.js",
    "revision": "5632468bad756a5a520d8ca574d08898"
  },
  {
    "url": "/_nuxt/098b46d91e6c3464977e.js",
    "revision": "d9026d5b768adb6507b34a18581cc990"
  },
  {
    "url": "/_nuxt/0ef67254a781a77bf1a3.js",
    "revision": "c1075b560637da29e030ece9b01d1da7"
  },
  {
    "url": "/_nuxt/11319aceda1861a08fa8.js",
    "revision": "4f87f54c78010ea9ff85535c646bfef0"
  },
  {
    "url": "/_nuxt/1199a83b91657b643827.js",
    "revision": "ef1ffcce091733bbd816ee160b76e96b"
  },
  {
    "url": "/_nuxt/22c327b60af651313453.js",
    "revision": "8cabf88a81c1db7c4888ae688e0bfc56"
  },
  {
    "url": "/_nuxt/27b8284459f4f3e51751.js",
    "revision": "a3bfe8cbb087cc2c41fb7046175523e2"
  },
  {
    "url": "/_nuxt/34161ccf3ee363c56f84.js",
    "revision": "56d4e1896e81b380eeeff9c8771686aa"
  },
  {
    "url": "/_nuxt/346dd737b0dfc9046ee5.js",
    "revision": "51ec9436654b032c4033fab0018bcbd2"
  },
  {
    "url": "/_nuxt/36c5aea8a16de53aa829.js",
    "revision": "506412da5ebd4be474d88e300a6d3778"
  },
  {
    "url": "/_nuxt/38929db77e427f5b418c.js",
    "revision": "647a3bfaaf098390ee24a0a1c65146dd"
  },
  {
    "url": "/_nuxt/3a645ae57b1a46bb9ae2.js",
    "revision": "e7ce789e7a30cd2f12f807a95cc8511e"
  },
  {
    "url": "/_nuxt/3af79c4fff81d277c344.js",
    "revision": "86ae58904a05e4f360a1702ea74058ca"
  },
  {
    "url": "/_nuxt/3b85e209b388dc496e59.js",
    "revision": "508113832efcc3b68fd108e0a547adec"
  },
  {
    "url": "/_nuxt/3eca530fd81da914dd69.js",
    "revision": "3656b9736521d826b60ea84310463fa0"
  },
  {
    "url": "/_nuxt/4029b10c4cc914525b4e.js",
    "revision": "e6d267110002bc4091480ca98dc20dfb"
  },
  {
    "url": "/_nuxt/45cd2b5681648aed5837.js",
    "revision": "5f3928b1c82a13cfbd0ede3f4d2942df"
  },
  {
    "url": "/_nuxt/476e1ac3305cbec02cec.js",
    "revision": "2166bcd330888ba06151e0a5ecefcc7a"
  },
  {
    "url": "/_nuxt/4d507d95f610ba8ab29a.css",
    "revision": "0b5ab074a1a0f42926907d0558a3dd5a"
  },
  {
    "url": "/_nuxt/4df360e4b4ed8330a87e.css",
    "revision": "79dd25652017a281190d9279f33a01e3"
  },
  {
    "url": "/_nuxt/4f55c490ec41c55861f5.js",
    "revision": "11ed3c417317230e9b6da5f45c9e0d84"
  },
  {
    "url": "/_nuxt/53564c296df77d226ef6.js",
    "revision": "e15b8acaccfd02dcf2398a83b5d60685"
  },
  {
    "url": "/_nuxt/5afd8ab1713952197185.js",
    "revision": "404010111799387ec0cd4c5fb781d902"
  },
  {
    "url": "/_nuxt/61df3a0f6f8118630a98.js",
    "revision": "1688593d4150f0950cf3e9c1636ba7d0"
  },
  {
    "url": "/_nuxt/62e7e7016080f78a097e.js",
    "revision": "b8b2e98e8ba29bd117f1fd44fbb743ce"
  },
  {
    "url": "/_nuxt/68113779ab348d112a1c.js",
    "revision": "c7cd71e657e0ae6ab0834ca7ff4a0817"
  },
  {
    "url": "/_nuxt/6a06762ab8d3b8f04579.js",
    "revision": "f3cec57fced493ea771d6cea43a21e41"
  },
  {
    "url": "/_nuxt/6ba3502933ea174cd4e7.js",
    "revision": "338326802b9bf1503b0ffccdc508ce0d"
  },
  {
    "url": "/_nuxt/6e2a0fd3a12de3e556bf.js",
    "revision": "41ea4b559d59063ebd4063cdf560f5a2"
  },
  {
    "url": "/_nuxt/700d8a3fcd9252e95694.js",
    "revision": "c7203a03cb0173761f9c9d1382c6a7ee"
  },
  {
    "url": "/_nuxt/704def023953b389f2d3.js",
    "revision": "0e0c1dd1679f2350462af471804016b6"
  },
  {
    "url": "/_nuxt/75b028c3e624003a9187.css",
    "revision": "4f3a21fb067822faecfc117f735ac7f1"
  },
  {
    "url": "/_nuxt/7998b6814c73869cd6e8.js",
    "revision": "0b978a5822752b5d41d2fbbe41496026"
  },
  {
    "url": "/_nuxt/7b73b327610237021cbc.js",
    "revision": "e823cb3d8d0784a20893779f161a5dfd"
  },
  {
    "url": "/_nuxt/881526c54e8676e3c3b1.js",
    "revision": "7b6ebad20bb00e1e7a4f1db6670fc351"
  },
  {
    "url": "/_nuxt/89329734495555182081.css",
    "revision": "e8c0ca094d374affc31f8a7662709cf7"
  },
  {
    "url": "/_nuxt/906b6f79dfa6ba10788d.js",
    "revision": "2cf83eb6f317f29304141337ec63b4c4"
  },
  {
    "url": "/_nuxt/90aa40acae3c3795d6c6.js",
    "revision": "72c7af67f94bc83dc9fac9bf131a2009"
  },
  {
    "url": "/_nuxt/90aa7526c732cd7b4b90.js",
    "revision": "6b63af4903d2eba11c91e80cef353269"
  },
  {
    "url": "/_nuxt/91433363c04e7c9f2eb5.js",
    "revision": "2c27871dfc489594260bf86232db1732"
  },
  {
    "url": "/_nuxt/9442a5b15b26a8d902c3.js",
    "revision": "8e0c0bc954d45dc32cef8a7978d758c6"
  },
  {
    "url": "/_nuxt/954a2c1aa36ad0e41fbb.js",
    "revision": "7a03a2cf63fb6ea8913a50b0954cc414"
  },
  {
    "url": "/_nuxt/97c351ba556249c62f1f.js",
    "revision": "28df8bce3208148b4c2a87420e06cd24"
  },
  {
    "url": "/_nuxt/996f44a5b7dc18dab0b1.css",
    "revision": "ebc80249feb95b7b656cc090c7aa3349"
  },
  {
    "url": "/_nuxt/a607684e03bbc5708229.js",
    "revision": "fe86848d4ec5e7e7432e5ba7da746c18"
  },
  {
    "url": "/_nuxt/a904d76d3b7a18d81313.js",
    "revision": "3ff448d84649c112a2ba26563f510fbe"
  },
  {
    "url": "/_nuxt/a9a495e7124e44e7e65d.js",
    "revision": "31f388d3a237e3e1d72935855c7387c9"
  },
  {
    "url": "/_nuxt/a9f344851821009408bb.js",
    "revision": "f0a1c99c8f876c759602cd975f116e48"
  },
  {
    "url": "/_nuxt/ac377a36ef5ed78af35f.js",
    "revision": "d39189ebef1cc8595aab1c9b3ed9cfbf"
  },
  {
    "url": "/_nuxt/b00869dfa765cb427037.js",
    "revision": "489f507219f77cb65e3fd2e83f1c78a8"
  },
  {
    "url": "/_nuxt/b2423bde591dcebb9d6c.js",
    "revision": "4aa3a270e3c574f6a60ab22594ed2964"
  },
  {
    "url": "/_nuxt/b50f974a3bdd8802d9f8.js",
    "revision": "98096954d0cf418ec9d0e9178dcbb613"
  },
  {
    "url": "/_nuxt/b94ac36de4931d7cbae4.js",
    "revision": "75f2b852a23ffd05bee10cbe1fee56aa"
  },
  {
    "url": "/_nuxt/bccba8d04586817d5504.js",
    "revision": "68a03d56cb9123197ac04fb512a1b56d"
  },
  {
    "url": "/_nuxt/c18a3027e578ce9ccc59.js",
    "revision": "ffee2b6e11724e345420bae3ac9d0979"
  },
  {
    "url": "/_nuxt/c1b4fd986a9e065d9942.js",
    "revision": "282de5936eaa46e917634c92b0f440d1"
  },
  {
    "url": "/_nuxt/c572c59cda2b7db64241.js",
    "revision": "fa5ac6016dcd0b13513aafddb59a78e6"
  },
  {
    "url": "/_nuxt/c818b687a672d14f939e.js",
    "revision": "371630c557e4d965cf7a10ef3982c8ff"
  },
  {
    "url": "/_nuxt/cb5068e4c1feb8a80a89.js",
    "revision": "0266565d08fd962b6ae8b3fac6bcbd0d"
  },
  {
    "url": "/_nuxt/d15830d7e393f94b392f.js",
    "revision": "d4de382db27b5ee3c62f86f767e727e0"
  },
  {
    "url": "/_nuxt/d3f90f0a3a39c52ca4d1.js",
    "revision": "3118b6ca003247f75d5c87ee71146390"
  },
  {
    "url": "/_nuxt/d9a76f787bcebe42d0fb.js",
    "revision": "238b525ce36bab835540fd7f6d177c93"
  },
  {
    "url": "/_nuxt/e2b02dd33b28eba86178.js",
    "revision": "3c03b10fdd2744d61b5dcde5369e8054"
  },
  {
    "url": "/_nuxt/e674b8c0d59fea84fc53.css",
    "revision": "d5d5c2b68b12b36c3194a51fa1a19c52"
  },
  {
    "url": "/_nuxt/e7793f4d1acaf4a42512.js",
    "revision": "0b7200162cb0412ef06eb69e8b22902d"
  },
  {
    "url": "/_nuxt/e9864c8302e3e9f9e80b.js",
    "revision": "ab984d10b334974fd5e0ce95bac568c3"
  },
  {
    "url": "/_nuxt/f0213d8abd262c4012f0.js",
    "revision": "c509ae2647b8bbe6febe9b4b41738ae8"
  },
  {
    "url": "/_nuxt/f0eddd01ba60259857a6.js",
    "revision": "0cc4ec1f694fd3c1f6f84c34e70cc3d3"
  },
  {
    "url": "/_nuxt/f60549c75b687fc49734.js",
    "revision": "e4df79990700b1d342f62a8b8b1f0b51"
  },
  {
    "url": "/_nuxt/f6822ccc3ef13c3e082a.js",
    "revision": "fcbb695d2fd201a85274a98de1c3212e"
  },
  {
    "url": "/_nuxt/ffb196ba844834474b8a.js",
    "revision": "2bec25dbf84c7be737814c7504a190c3"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

