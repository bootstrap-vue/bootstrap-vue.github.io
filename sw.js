importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "bootstrap-vue",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/14.1ef381545f5199aea1b3.js",
    "revision": "7a310d574e6487c62e4ef9d36ca6b12e"
  },
  {
    "url": "/_nuxt/15.aec9ada3ff59fbf1f3db.js",
    "revision": "42e015fbcf4fff003befab4a60bdb6a0"
  },
  {
    "url": "/_nuxt/65.b44c36ba843c5041fa96.js",
    "revision": "300082720347b318523d56aeca2f0d85"
  },
  {
    "url": "/_nuxt/app.208fa07106e0b04c4631.js",
    "revision": "7fb2c35c4800b8e3e9e1e99d436c5b18"
  },
  {
    "url": "/_nuxt/docs/components0.ea16a0366621776e46df.js",
    "revision": "f71b9c29589db8495e6993f87f6b0da1"
  },
  {
    "url": "/_nuxt/docs/components1.e280696389672810c997.js",
    "revision": "7f19d611254c88b0e7baca5b4316025f"
  },
  {
    "url": "/_nuxt/docs/components10.05d908f668070dbc770b.js",
    "revision": "c259a7515c030517e156c0351c8623d6"
  },
  {
    "url": "/_nuxt/docs/components11.36940536927ee35eb66f.js",
    "revision": "5efb761fc641af847d07993bc64ab88a"
  },
  {
    "url": "/_nuxt/docs/components12.19bef9df05c005d5ba2a.js",
    "revision": "51f32b86a0fcf11df76dff366b2e0f73"
  },
  {
    "url": "/_nuxt/docs/components13.e975098747a1097cf777.js",
    "revision": "bcc77cf01162bf2908a6d7a045f93fbc"
  },
  {
    "url": "/_nuxt/docs/components14.1ae3a5fe4ce4ff777d3d.js",
    "revision": "4f7b302c008f149e1f0feae1925a739c"
  },
  {
    "url": "/_nuxt/docs/components15.8b2800b90eddf9371374.js",
    "revision": "98e50af7c91a0359a6a455d8a8bab1e8"
  },
  {
    "url": "/_nuxt/docs/components16.2433caf8080198f3550f.js",
    "revision": "9426373b44758fae69c51241ad5985ab"
  },
  {
    "url": "/_nuxt/docs/components17.d8194aa9f0d74f19dfe3.js",
    "revision": "55d4ef222f07cb3205250537bb6871ad"
  },
  {
    "url": "/_nuxt/docs/components18.b006846c9b3ceb837a10.js",
    "revision": "5b34c8e59aeecfa419048d338fc71c77"
  },
  {
    "url": "/_nuxt/docs/components19.e83a973053ae6e668ff7.js",
    "revision": "c3f2efb54261240c0984d7bef336a3e8"
  },
  {
    "url": "/_nuxt/docs/components2.81b027994c30b178bec5.js",
    "revision": "5fb1198bbc0764ffae21d3603b586b11"
  },
  {
    "url": "/_nuxt/docs/components20.c05a2335b04a38780e25.js",
    "revision": "a41e964bb7990f6741f5738eb2312277"
  },
  {
    "url": "/_nuxt/docs/components21.bbe48ef3502a8b8bd855.js",
    "revision": "7aeed5e1d0f01d9ec1ef494556b97ee1"
  },
  {
    "url": "/_nuxt/docs/components22.eca4e0c89bb0925d9462.js",
    "revision": "1124e2cfb4c02ef9776e6e6ce9616a24"
  },
  {
    "url": "/_nuxt/docs/components23.54eaa6c33b597a35d3be.js",
    "revision": "24db57c7747edb2fc9a37305354e79a6"
  },
  {
    "url": "/_nuxt/docs/components24.00765d4b15de2013aef2.js",
    "revision": "7c79db87b6bc0cf17a671050b4f1cfb9"
  },
  {
    "url": "/_nuxt/docs/components25.f53e0c55bf02d844d34c.js",
    "revision": "82713b83446ee3160aa191f7974c069a"
  },
  {
    "url": "/_nuxt/docs/components26.94da1fb621ac621239c2.js",
    "revision": "ccd2aaaff139ba5e9f8e13cb38cedcd6"
  },
  {
    "url": "/_nuxt/docs/components27.f72b08297300f45fd9e0.js",
    "revision": "3fb450294d93704a5960d2ffa3a0b172"
  },
  {
    "url": "/_nuxt/docs/components28.cfc537c380a2556a8a38.js",
    "revision": "f4bbf8f76169086bbfe0e7de9efd694b"
  },
  {
    "url": "/_nuxt/docs/components29.f1d67a8020b3c3ecfbb8.js",
    "revision": "562666389c5c9a221b037fa36a509ddc"
  },
  {
    "url": "/_nuxt/docs/components3.7cf2f24b33bc0f2e999a.js",
    "revision": "2ff6bed4c09591fa2e4fe1cf0e3f3ede"
  },
  {
    "url": "/_nuxt/docs/components30.3d40331ea26fb6d83348.js",
    "revision": "9214051bc9a066703e075808f98fe3d4"
  },
  {
    "url": "/_nuxt/docs/components31.15738bb1d612397d1695.js",
    "revision": "12988a86bead1e7f865d15fd5aa2858a"
  },
  {
    "url": "/_nuxt/docs/components32.25dab38b6251f56a15dc.js",
    "revision": "b471afcb5532d6c8b4dbda058771ade9"
  },
  {
    "url": "/_nuxt/docs/components33.766c5a55c202e3d0d050.js",
    "revision": "e6d865647f0fd099eaeb1a61befe4c00"
  },
  {
    "url": "/_nuxt/docs/components34.4b808ea7684601e30d25.js",
    "revision": "c796637221bf5f91f378f0e917d30056"
  },
  {
    "url": "/_nuxt/docs/components35.3c038521ec3d83f941ff.js",
    "revision": "64f1bfbbf35373b7a8eb0ea7be893369"
  },
  {
    "url": "/_nuxt/docs/components4.4e858e7df676b97ba7ce.js",
    "revision": "6b5890a2267c0fb6e537ba7ced6d30c0"
  },
  {
    "url": "/_nuxt/docs/components5.b6187ffaf077c8e4359a.js",
    "revision": "15f9f004d44586ddb7b29ddeea77f886"
  },
  {
    "url": "/_nuxt/docs/components6.1312b1f1133bf71a3f47.js",
    "revision": "30cf42c9dd77cb21f4567ab6ec6aba1b"
  },
  {
    "url": "/_nuxt/docs/components7.869d71b1bc34452ec338.js",
    "revision": "e847a3a96d55ca63f1be75ebd859f763"
  },
  {
    "url": "/_nuxt/docs/components8.82ef7cd543d348fd6332.js",
    "revision": "53e2bd80eef0fa6fc8b02893267f4793"
  },
  {
    "url": "/_nuxt/docs/components9.288449d65a83e8b557bb.js",
    "revision": "35d09205137aa1c79a4090f3482bc0df"
  },
  {
    "url": "/_nuxt/docs/directives0.c9ea72e92a7f8943a77b.js",
    "revision": "d9474648fc317614eb27b1b55e68cae6"
  },
  {
    "url": "/_nuxt/docs/directives1.0232380a24d41b7200e5.js",
    "revision": "c0f9600d7717aa3dba69b400d29a0f51"
  },
  {
    "url": "/_nuxt/docs/directives2.df890a6340b8ddfa6783.js",
    "revision": "ba8b86dafe069fadc771bc871e9708da"
  },
  {
    "url": "/_nuxt/docs/misc0.0e27ef3ac2d50ffa390a.js",
    "revision": "556079ddfeffd91e52a5096bf1245a32"
  },
  {
    "url": "/_nuxt/docs/misc1.74c6e786642fc1bf638e.js",
    "revision": "22e6b4bd968db6284ba1dc969ffd8b1a"
  },
  {
    "url": "/_nuxt/docs/reference0.3ed2c52bc89b84f0a197.js",
    "revision": "e331b8e4fb3fd4d29ecbc044748134e9"
  },
  {
    "url": "/_nuxt/docs/reference1.46b5b93250ad3ba52b63.js",
    "revision": "f1f8e4f93d188525088863ef7c0aae67"
  },
  {
    "url": "/_nuxt/docs/reference2.c0b6049b1c8b88ff5ef1.js",
    "revision": "9fc4ea6f3caf7392bea9d0425b1396d6"
  },
  {
    "url": "/_nuxt/docs/reference3.19784125b5c4ea9c2767.js",
    "revision": "8baacfeb59168f409e371d86682db6eb"
  },
  {
    "url": "/_nuxt/docs/reference4.aec38d48753affe30802.js",
    "revision": "680555d0ba18858408b44e24d91cc778"
  },
  {
    "url": "/_nuxt/docs/reference5.e00d94c4ea109d7b16f6.js",
    "revision": "702db69fcdb801c377f8aa9467836bba"
  },
  {
    "url": "/_nuxt/docs/reference6.daf25b0096d45c7c304b.js",
    "revision": "41582e53450b47267b4d0f02bc181648"
  },
  {
    "url": "/_nuxt/layouts/default.9beeda0295db45488f92.js",
    "revision": "c16727f6017934b90270a7421c9d27e6"
  },
  {
    "url": "/_nuxt/layouts/docs.4db32e31c03f43233b02.js",
    "revision": "06476c69be4fcc8538ea0b7f5deada58"
  },
  {
    "url": "/_nuxt/manifest.fd5fd95e1fa86d09fcd3.js",
    "revision": "97c1e7c6a414b036a13193f8d6cd1cca"
  },
  {
    "url": "/_nuxt/mSearch.2f94b495c9696646338d.js",
    "revision": "039033b629bbb806e7f31038e478d86f"
  },
  {
    "url": "/_nuxt/pages/docs/components/_slug.31e9da60e33e5a4ad44e.js",
    "revision": "e27da66bcd762f63880e006c0317dbbc"
  },
  {
    "url": "/_nuxt/pages/docs/components/index.86c4c729504834691c54.js",
    "revision": "8f1105447ffd76caff31d1d776c65f47"
  },
  {
    "url": "/_nuxt/pages/docs/directives/_slug.670c00fc50942f5b5d7e.js",
    "revision": "9369ef46b399a6f0ce8a8f958c257ff3"
  },
  {
    "url": "/_nuxt/pages/docs/directives/index.cc8fb73fbbc7b3c051be.js",
    "revision": "587c2bb0f389a2069a9046d424a8ada7"
  },
  {
    "url": "/_nuxt/pages/docs/index.4464693ac5a64884023a.js",
    "revision": "3977812687d669d732d0dbb618d3fd60"
  },
  {
    "url": "/_nuxt/pages/docs/layout.49fe801ecc56836b06ac.js",
    "revision": "03cb2edf50a8f55501b5c17bb3b22d02"
  },
  {
    "url": "/_nuxt/pages/docs/misc/_slug.a5d00cb4de645df9783d.js",
    "revision": "ea85d4da0a0bdf1b587bcf9e58617edd"
  },
  {
    "url": "/_nuxt/pages/docs/misc/index.672875722b5f75948b62.js",
    "revision": "de2d600d1719c568c0d873ae8834189a"
  },
  {
    "url": "/_nuxt/pages/docs/reference/_slug.8c9c9c94ce02e8e4c964.js",
    "revision": "0a32490586eaee75c44961471d6a6dc7"
  },
  {
    "url": "/_nuxt/pages/docs/reference/index.cbba731588e57f34f35f.js",
    "revision": "ff6e8ca6f65d6cbd5dd409f2c50cac9e"
  },
  {
    "url": "/_nuxt/pages/index.9678b6f9b54d1d212a0e.js",
    "revision": "c9589a9eaa8fc7848d0523b74ec4c4b5"
  },
  {
    "url": "/_nuxt/pages/play.4e5e86cb8084e8b384e1.js",
    "revision": "7008ca15b3fbe05dc12319a9afee6e6e"
  },
  {
    "url": "/_nuxt/vendor.56be72df49e17bdca794.js",
    "revision": "a5568a20f20db91af10abe36f9e3fd5e"
  },
  {
    "url": "/_nuxt/vendor.5de41997d5c9feaf2c793d47cb2b0680.css",
    "revision": "cb88263c7aca10a844cb57c329ce4865"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

