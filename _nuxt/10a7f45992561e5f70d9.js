(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{247:function(t,e,r){"use strict";e.a={name:"BVCarbonAd",props:{id:{type:String,default:"_carbonads_js"},url:{type:String,default:"//cdn.carbonads.com/carbon.js"},serve:{type:String,default:"CE7ITK77"},placement:{type:String,default:"bootstrap-vuejsorg"}},computed:{src(){return"".concat(this.url,"?serve=").concat(this.serve,"&placement=").concat(this.placement)}},render(t){return t("aside",{staticClass:"bv-carbon-ad"},[t("client-only",[t("script",{attrs:{id:this.id,async:"async",type:"text/javascript",src:this.src}})])])}}},267:function(t,e,r){},268:function(t,e,r){},311:function(t,e,r){"use strict";var o=r(267);r.n(o).a},312:function(t,e,r){"use strict";var o=r(268);r.n(o).a},406:function(t,e,r){"use strict";r.r(e);r(17);var o=r(34),content=r(43),n=r(247),l=(r(11),r(39),r(10),r(3)),c=r(8),d={name:"BVContributorsContainer",functional:!0,props:{type:{type:String,required:!0},contributors:{type:Array,default:()=>[]},showName:{type:Boolean,default:!0},nofollow:{type:Boolean,default:!0}},render(t,e){var{props:r,data:data}=e,{type:o,contributors:n,showName:l,nofollow:d}=r;if(0===n.length)return t();return t("div",Object(c.a)(data,{staticClass:"contributors-container",class:[o,"d-flex","flex-wrap","mx-n2","text-center","justify-content-center","font-weight-bold"]}),n.map(e=>(e=>{var{name:r,slug:o,imageUrl:n,website:c}=e,v=t("b-img-lazy",{props:{src:n,block:!0,fluidGrow:!0,alt:"Contributor image"}}),h=t("div",{staticClass:"".concat("contributor","-thumbnail"),class:["img-thumbnail","d-flex","flex-wrap","align-items-center","justify-content-center","overflow-hidden"]},[v]),m=t();l&&r&&(m=t("div",{staticClass:"".concat("contributor","-name"),class:["mb-0","pt-1","text-break"]},r));var _=[h,m];return c&&(_=t("b-link",{class:["text-reset d-block"],props:{href:c,target:"_blank",rel:d?"noopener nofollow external":"noopener external"}},[_])),t("div",{staticClass:"contributor",class:["m-1","position-relative"],key:o},[_])})(e)))}};function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={status:"active",tierSlug:null,limit:200},m={name:"BVContributors",components:{BVContributorsContainer:d},data:()=>({platinumSponsors:[],goldSponsors:[],silverSponsors:[],bronzeSponsors:[],backers:[],donors:[]}),computed:{sponsors(){return[...this.platinumSponsors,...this.goldSponsors,...this.silverSponsors,...this.bronzeSponsors]}},methods:{makeOcRequest(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},h,{},e);var r=Object.keys(e).reduce((t,r)=>e[r]?"".concat(t).concat(t?"&":"").concat(r,"=").concat(e[r]):t,""),o="".concat("https://rest.opencollective.com/v2/bootstrap-vue/orders/","?").concat(r),n=new XMLHttpRequest;n.open("GET",o,!0),n.addEventListener("load",()=>{if(4===n.readyState)if(200===n.status){var e=JSON.parse(n.responseText)||{};t(this.processOcNodes(e.nodes||[]),null)}else t([],n.statusText)}),n.send()},processOcNodes(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(t=>{var e=t.totalDonations.value,r=t.amount.value,o=t.fromAccount.slug,n=o?"https://opencollective.com/".concat(o):null;return{slug:o,name:t.fromAccount.name,type:t.fromAccount.type,imageUrl:t.fromAccount.imageUrl,website:Math.max(r||0,e||0)<24?null:t.fromAccount.website||n,status:t.status,amount:r,totalAmount:e,frequency:t.frequency,tier:(t.tier||{}).slug||null,date:new Date(t.createdAt)}})},sortCompare(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(b.totalAmount||0)-(a.totalAmount||0)||(b.date||0)-(a.date||0)},processPlatinumSponsors(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.platinumSponsors=t.sort(this.sortCompare)},processGoldSponsors(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.goldSponsors=t.sort(this.sortCompare)},processSilverSponsors(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.silverSponsors=t.sort(this.sortCompare)},processBronzeSponsors(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.bronzeSponsors=t.sort(this.sortCompare)},processBackers(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.backers=t.filter(b=>null===b.tier||"backers"===b.tier).sort(this.sortCompare).slice(0,32)},processDonors(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.donors=t.reduce((t,e)=>(-1===t.map(t=>t.slug).indexOf(e.slug)&&t.push(e),t),[]).sort(this.sortCompare).slice(0,64)},visibleHandler(t){t&&(this.makeOcRequest(this.processPlatinumSponsors.bind(this),{tierSlug:"platinum-sponsors"}),this.makeOcRequest(this.processGoldSponsors.bind(this),{tierSlug:"gold-sponsors"}),this.makeOcRequest(this.processSilverSponsors.bind(this),{tierSlug:"silver-sponsors"}),this.makeOcRequest(this.processBronzeSponsors.bind(this),{tierSlug:"bronze-sponsors"}),this.makeOcRequest(this.processBackers.bind(this),{status:"active"}),this.makeOcRequest(this.processDonors.bind(this),{status:"paid"}))}}},_=(r(311),r(23)),f=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"b-visible",rawName:"v-b-visible.once.1000",value:t.visibleHandler,expression:"visibleHandler",modifiers:{1e3:!0,once:!0}}]},[t.sponsors.length>0?[r("h3",{staticClass:"h4 mx-auto mt-4 text-muted"},[t._v("Sponsors")]),t._v(" "),t.platinumSponsors.length>0?[r("h4",{staticClass:"h5 mx-auto mt-3 text-muted"},[t._v("Platinum Sponsors")]),t._v(" "),r("BVContributorsContainer",{attrs:{type:"platinum-sponsors",contributors:t.platinumSponsors,nofollow:!1}})]:t._e(),t._v(" "),t.goldSponsors.length>0?[r("h4",{staticClass:"h5 mx-auto mt-3 text-muted"},[t._v("Gold Sponsors")]),t._v(" "),r("BVContributorsContainer",{attrs:{type:"gold-sponsors",contributors:t.goldSponsors,nofollow:!1}})]:t._e(),t._v(" "),t.silverSponsors.length>0?[r("h4",{staticClass:"h5 mx-auto mt-3 text-muted"},[t._v("Silver Sponsors")]),t._v(" "),r("BVContributorsContainer",{attrs:{type:"silver-sponsors",contributors:t.silverSponsors,nofollow:!1}})]:t._e(),t._v(" "),t.bronzeSponsors.length>0?[r("h4",{staticClass:"h5 mx-auto mt-3 text-muted"},[t._v("Bronze Sponsors")]),t._v(" "),r("BVContributorsContainer",{attrs:{type:"bronze-sponsors",contributors:t.bronzeSponsors,nofollow:!1}})]:t._e()]:t._e(),t._v(" "),t.backers.length>0?[r("h3",{staticClass:"h4 mx-auto mt-4 text-muted"},[t._v("Backers")]),t._v(" "),r("BVContributorsContainer",{attrs:{type:"backers",contributors:t.backers}})]:t._e(),t._v(" "),t.donors.length>0?[r("h3",{staticClass:"h4 mx-auto mt-4 text-muted"},[t._v("Donors")]),t._v(" "),r("BVContributorsContainer",{attrs:{type:"donors",contributors:t.donors,"show-name":!1}})]:t._e()],2)}),[],!1,null,"58111a70",null).exports,x={components:{BVCarbonAd:n.a,BVContributors:f},data:()=>({isIE:!1,showLogo:!1}),computed:{version:()=>o.d,bootstrapVersionMinor:()=>content.b.replace(/\.\d+$/,""),vueVersionMinor:()=>content.n.replace(/\.\d+$/,""),bootstrapUrl(){return"https://getbootstrap.com/docs/".concat(this.bootstrapVersionMinor)}},mounted(){this.$nextTick(()=>{this.isIE=/msie|trident/i.test(window.navigator.userAgent||""),this.showLogo=!0})}},C=(r(312),Object(_.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{attrs:{id:"content",role:"main"}},[r("section",{staticClass:"bd-masthead pt-3 pt-sm-5 pb-2"},[r("b-container",{attrs:{tag:"article"}},[r("b-row",{staticClass:"mb-2 mb-md-3 mb-lg-4",attrs:{"align-v":"center","no-gutters":""}},[r("b-col",{staticClass:"logo-aside mb-4 mb-md-0",attrs:{tag:"aside",cols:"12",md:"4","order-md":"2"}},[t.showLogo?r("svg",{staticClass:"bv-logo",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 1200",version:"1.1","shape-rendering":"geometricPrecision","fill-rule":"evenodd","clip-rule":"evenodd",preserveAspectRatio:"xMidYMid meet",role:"img",focusable:"false"}},[r("title",[t._v("BootstrapVue")]),t._v(" "),r("defs",[r("filter",{attrs:{id:"logo-shadow",filterUnits:"objectBoundingBox",x:"-50%",y:"-50%",width:"200%",height:"200%"}},[r("feOffset",{attrs:{in:"SourceAlpha",dx:"-10",dy:"25",result:"ALPHA1"}}),t._v(" "),r("feMorphology",{attrs:{in:"ALPHA1",operator:"dilate",radius:"15",result:"ALPHA"}}),t._v(" "),r("feGaussianBlur",{attrs:{in:"ALPHA",stdDeviation:"20",result:"DROP"}}),t._v(" "),r("feFlood",{attrs:{in:"DROP","flood-color":"#333",result:"SOLID"}}),t._v(" "),r("feComposite",{attrs:{in:"DROP",in2:"SOLID",operator:"in",result:"SHADOW1"}}),t._v(" "),r("feComponentTransfer",{attrs:{in:"SHADOW1",result:"SHADOW"}},[r("feFuncA",{attrs:{type:"linear",slope:"0.55"}})],1),t._v(" "),r("feMerge",[r("feMergeNode",{attrs:{in:"SHADOW"}}),t._v(" "),r("feMergeNode",{attrs:{in:"SourceGraphic"}})],1)],1)]),t._v(" "),r("g",{attrs:{filter:t.isIE?"url(#logo-shadow)":null}},[r("g",{staticClass:"logo-dark-v",attrs:{filter:t.isIE?null:"url(#logo-shadow)"}},[r("path",{attrs:{fill:"#34495E",d:"M747 311L602 562 458 311H227l375 651 376-651z"}})]),t._v(" "),r("g",{staticClass:"logo-purple-v",attrs:{filter:t.isIE?null:"url(#logo-shadow)"}},[r("path",{attrs:{fill:"#563D7C","fill-rule":"nonzero",d:"M219 195h762L599 857z"}}),t._v(" "),r("path",{staticClass:"logo-white-b",attrs:{fill:"#ffffff",d:"M501 282l132 0c25,0 44,5 59,16 15,12 22,28 22,51 0,14 -3,26 -10,35 -7,10 -16,18 -29,23l0 1c17,3 30,11 38,24 9,12 13,27 13,46 0,11 -2,21 -6,30 -3,9 -9,17 -17,24 -9,6 -19,12 -32,16 -12,4 -28,6 -45,6l-125 0 0 -272 0 0zm48 114l77 0c12,0 21,-4 29,-10 8,-7 11,-16 11,-28 0,-14 -3,-24 -10,-29 -7,-6 -17,-9 -30,-9l-77 0 0 76 0 0zm0 119l84 0c14,0 26,-4 33,-11 8,-8 13,-19 13,-32 0,-14 -4,-24 -13,-31 -8,-8 -19,-11 -33,-11l-84 0 0 85z"}})]),t._v(" "),r("g",{staticClass:"logo-green-v",attrs:{filter:t.isIE?null:"url(#logo-shadow)"}},[r("path",{attrs:{fill:"#41B883",d:"M839 357L600 771 361 357H202l398 690 398-690z"}})])])]):t._e()]),t._v(" "),r("b-col",{attrs:{tag:"header",cols:"12",md:"8","order-md":"1"}},[r("h1",{staticClass:"mb-3 text-center text-md-left bd-text-purple-bright"},[t._v("\n            Bootstrap"),r("span",{staticClass:"text-vue-green"},[t._v("Vue")])]),t._v(" "),r("p",{staticClass:"lead"},[t._v("\n            With "),r("span",{staticClass:"font-weight-bolder"},[t._v("BootstrapVue")]),t._v(" you can build responsive,\n            mobile-first, and ARIA accessible projects on the web using\n            "),r("span",{staticClass:"text-muted font-weight-bolder"},[t._v("Vue.js")]),t._v(" and the world's most popular\n            front-end CSS library —\n            "),r("span",{staticClass:"text-muted font-weight-bolder"},[t._v("Bootstrap v4")]),t._v(".\n          ")]),t._v(" "),r("b-media",{staticClass:"my-3",attrs:{"no-body":""}},[r("b-media-aside",{attrs:{"vertical-align":"center"}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 612 612",width:"30px",height:"30px",focusable:"false",role:"img"}},[r("title",[t._v("Bootstrap logo")]),t._v(" "),r("path",{attrs:{fill:"#563D7C",d:"M612 510c0 56.1-45.9 102-102 102H102C45.9 612 0 566.1 0 510V102C0 45.9 45.9 0 102 0h408c56.1 0 102 45.9 102 102v408z"}}),t._v(" "),r("path",{attrs:{fill:"#FFF",d:"M166.3 133h173.5c32 0 57.7 7.3 77 22s29 36.8 29 66.5c0 18-4.4 33.4-13.2 46.2-8.8 12.8-21.4 22.8-37.8 29.8v1c22 4.7 38.7 15.1 50 31.2 11.3 16.2 17 36.4 17 60.8 0 14-2.5 27.1-7.5 39.2-5 12.2-12.8 22.7-23.5 31.5s-24.3 15.8-41 21-36.5 7.8-59.5 7.8h-164V133zm62.5 149.5h102c15 0 27.5-4.2 37.5-12.8s15-20.8 15-36.8c0-18-4.5-30.7-13.5-38s-22-11-39-11h-102v98.6zm0 156.5h110.5c19 0 33.8-4.9 44.2-14.8 10.5-9.8 15.8-23.8 15.8-41.8 0-17.7-5.2-31.2-15.8-40.8s-25.2-14.2-44.2-14.2H228.8V439z"}})])]),t._v(" "),r("b-media-body",{staticClass:"ml-3 text-muted align-self-center"},[r("a",{attrs:{href:t.bootstrapUrl,target:"_blank"}},[t._v("Bootstrap v4")]),t._v(" is the world's most popular\n              framework for building responsive, mobile-first sites.\n            ")])],1),t._v(" "),r("b-media",{staticClass:"mb-4",attrs:{"no-body":""}},[r("b-media-aside",{attrs:{"vertical-align":"center"}},[r("svg",{staticClass:"media-vue-logo",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 196.32 170.02",width:"30px",height:"30px",focusable:"false",role:"img"}},[r("title",[t._v("Vue.js logo")]),t._v(" "),r("path",{attrs:{fill:"#42b883",d:"M120.83 0L98.16 39.26 75.49 0H0l98.16 170.02L196.32 0h-75.49z"}}),t._v(" "),r("path",{attrs:{fill:"#35495e",d:"M120.83 0L98.16 39.26 75.49 0H39.26l58.9 102.01L157.06 0h-36.23z"}})])]),t._v(" "),r("b-media-body",{staticClass:"ml-3 text-muted align-self-center"},[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Vue.js")]),t._v("\n              (pronounced "),r("span",{staticClass:"text-nowrap"},[t._v("/"),r("i",[t._v("vjuː")]),t._v("/")]),t._v(", like view)\n              is a progressive framework for building user interfaces.\n            ")])],1)],1)],1),t._v(" "),r("p",{staticClass:"mb-0 text-muted text-center mb-n4 mb-md-n5"},[t._v("\n        Current Version"),r("br"),t._v(" "),r("b-link",{staticClass:"small",attrs:{to:"/docs/misc/changelog"}},[t._v("v"+t._s(t.version))])],1)],1)],1),t._v(" "),r("section",{staticClass:"bv-section bv-gray-color"},[r("b-container",{attrs:{tag:"article"}},[r("div",{staticClass:"d-flex flex-column"},[r("div",{staticClass:"order-2 order-md-1"},[r("h2",{staticClass:"h4 text-center bd-text-purple-bright"},[t._v("Overview")]),t._v(" "),r("b-row",{staticClass:"mb-4"},[r("b-col",{attrs:{lg:"10","offset-lg":"1"}},[r("p",{staticClass:"text-lg-center"},[t._v("\n                With more than 85 components, over 45 available plugins, several directives, and 500+ icons,\n                "),r("span",{staticClass:"bd-text-purple-bright"},[t._v("BootstrapVue")]),t._v(" provides one of the most\n                comprehensive implementations of the\n                "),r("span",{staticClass:"bd-text-purple-bright"},[t._v("Bootstrap v"+t._s(t.bootstrapVersionMinor))]),t._v(" component and grid system\n                available for "),r("span",{staticClass:"bd-text-purple-bright"},[t._v("Vue.js v"+t._s(t.vueVersionMinor))]),t._v(", complete with\n                extensive and automated\n                "),r("b-link",{attrs:{href:"https://www.w3.org/WAI/standards-guidelines/aria/",target:"_blank"}},[r("abbr",{attrs:{title:"Web Accessibility Initiative – Accessible Rich Internet Applications"}},[t._v("WAI-ARIA")])]),t._v("\n                accessibility markup.\n              ")],1)])],1),t._v(" "),r("b-row",{staticClass:"justify-content-lg-center"},[r("b-col",{attrs:{md:"4",lg:"3"}},[r("b-btn",{staticClass:"mb-3 mb-md-0",attrs:{to:"/docs",variant:"bd-primary",size:"lg",block:""}},[t._v("\n                Get started\n              ")])],1),t._v(" "),r("b-col",{attrs:{md:"4",lg:"3"}},[r("b-btn",{staticClass:"mb-3 mb-md-0",attrs:{to:"/play",variant:"bd-primary",size:"lg",block:""}},[t._v("\n                Playground\n              ")])],1),t._v(" "),r("b-col",{attrs:{md:"4",lg:"3"}},[r("b-btn",{attrs:{href:"https://github.com/bootstrap-vue/bootstrap-vue",variant:"outline-secondary",size:"lg",target:"_blank",block:""}},[t._v("\n                GitHub\n              ")])],1)],1)],1),t._v(" "),r("div",{staticClass:"order-1 order-md-2"},[r("BVCarbonAd")],1)])])],1),t._v(" "),r("section",{staticClass:"bv-section bv-white"},[r("b-container",[r("h2",{staticClass:"h4 text-center text-muted"},[t._v("Reasons to choose BootstrapVue")]),t._v(" "),r("b-card-group",{staticClass:"mb-sm-4",attrs:{deck:""}},[r("b-card",{staticClass:"rounded-0 border-0",attrs:{tag:"article","body-text-variant":"muted"}},[r("b-card-text",{staticClass:"h5 text-center mb-2 bd-text-purple-bright",attrs:{"text-tag":"h3"}},[r("b-icon",{staticClass:"mx-auto d-block mb-3",attrs:{icon:"phone",width:"2.5em",height:"2.5em"}}),t._v(" "),r("span",[t._v("Responsive")])],1),t._v(" "),r("b-card-text",{staticClass:"text-center"},[t._v("\n            Mobile first "),r("b-link",{attrs:{to:"/docs/components/layout"}},[t._v("responsive")]),t._v(" layout\n          ")],1)],1),t._v(" "),r("b-card",{staticClass:"rounded-0 border-0",attrs:{tag:"article","body-text-variant":"muted"}},[r("b-card-text",{staticClass:"h5 text-center bd-text-purple-bright mb-2",attrs:{"text-tag":"h3"}},[r("b-icon",{staticClass:"mx-auto d-block mb-3",attrs:{icon:"puzzle",width:"2.5em",height:"2.5em"}}),t._v(" "),r("span",[t._v("Modular")])],1),t._v(" "),r("b-card-text",{staticClass:"text-center"},[r("b-link",{attrs:{to:"/docs/#tree-shaking-with-module-bundlers"}},[t._v("Import")]),t._v(" only the features that you need\n          ")],1)],1),t._v(" "),r("b-card",{staticClass:"rounded-0 border-0",attrs:{tag:"article","body-text-variant":"muted"}},[r("b-card-text",{staticClass:"h5 text-center bd-text-purple-bright mb-2",attrs:{"text-tag":"h3"}},[r("b-icon",{staticClass:"mx-auto d-block mb-3",attrs:{icon:"eye-slash",width:"2.5em",height:"2.5em",scale:"1.2"}}),t._v(" "),r("span",[t._v("Accessible")])],1),t._v(" "),r("b-card-text",{staticClass:"text-center"},[t._v("\n            Automated "),r("b-link",{attrs:{to:"/docs/reference/accessibility"}},[t._v("WAI-ARIA accessibility")]),t._v(" markup\n          ")],1)],1)],1),t._v(" "),r("b-card-group",{staticClass:"mb-n3",attrs:{deck:""}},[r("b-card",{staticClass:"rounded-0 border-0",attrs:{tag:"article","body-text-variant":"muted"}},[r("b-card-text",{staticClass:"h5 text-center bd-text-purple-bright mb-2",attrs:{"text-tag":"h3"}},[r("svg",{staticClass:"mx-auto d-block mb-3",attrs:{xmlns:"http://www.w3.org/2000/svg",height:"2.5em",viewBox:"0 0 448 512","aria-hidden":"true",focusable:"false",role:"img"}},[r("path",{attrs:{fill:"currentColor",d:"M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"}})]),t._v(" "),r("span",[t._v("Modern")])]),t._v(" "),r("b-card-text",{staticClass:"text-center",attrs:{"bg-variant":"light"}},[t._v("\n            Built with "),r("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue.js v"+t._s(t.vueVersionMinor))]),t._v(" and\n            "),r("a",{attrs:{href:"https://getbootstrap.com"}},[t._v("Bootstrap SCSS v"+t._s(t.bootstrapVersionMinor))])])],1),t._v(" "),r("b-card",{staticClass:"rounded-0 border-0",attrs:{tag:"article","body-text-variant":"muted","body-class":"px-2"}},[r("b-card-text",{staticClass:"h5 text-center bd-text-purple-bright mb-2",attrs:{"text-tag":"h3"}},[r("b-icon",{staticClass:"mx-auto d-block mb-3",attrs:{icon:"gear",width:"2.5em",height:"2.5em"}}),t._v(" "),r("span",[t._v("Configurable")])],1),t._v(" "),r("b-card-text",{staticClass:"text-center"},[t._v("\n            Create "),r("b-link",{attrs:{to:"/docs/reference/theming"}},[t._v("themes")]),t._v(" with SCSS variables and "),r("b-link",{attrs:{to:"/docs/misc/settings"}},[t._v("global options")])],1)],1),t._v(" "),r("b-card",{staticClass:"rounded-0 border-0",attrs:{tag:"article","body-text-variant":"muted"}},[r("b-card-text",{staticClass:"h5 text-center bd-text-purple-bright mb-2",attrs:{"text-tag":"h3"}},[r("svg",{staticClass:"mx-auto d-block mb-3",attrs:{xmlns:"http://www.w3.org/2000/svg",height:"2.5em",viewBox:"0 0 496 512","aria-hidden":"true",focusable:"false",role:"img"}},[r("path",{attrs:{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}})]),t._v(" "),r("span",[t._v("Free")])]),t._v(" "),r("b-card-text",{staticClass:"text-center"},[t._v("\n            Open sourced on "),r("a",{attrs:{href:"https://github.com/bootstrap-vue/bootstrap-vue/",target:"_blank"}},[t._v("GitHub")]),t._v(",\n            "),r("a",{attrs:{href:"https://github.com/bootstrap-vue/bootstrap-vue/blob/master/LICENSE",target:"_blank"}},[t._v("MIT")]),t._v(" License\n          ")])],1)],1)],1)],1),t._v(" "),r("section",{staticClass:"bv-section bv-gray"},[r("b-container",{staticClass:"text-center",attrs:{tag:"article"}},[r("h2",{staticClass:"h4 text-center bd-text-purple-bright"},[t._v("Integrate with Nuxt.js")]),t._v(" "),r("div",{staticClass:"mb-2 d-flex flex-row justify-content-center align-items-center"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"3.5em",width:"3.5em",viewBox:"0 0 400 400",version:"1","aria-hidden":"true",focusable:"false",role:"img"}},[r("title",[t._v("Nuxt.js logo")]),t._v(" "),r("g",{attrs:{transform:"translate(0 49)",fill:"none","fill-rule":"evenodd"}},[r("path",{attrs:{fill:"#00C58E",d:"M123 292l-1-1c-2-4-2-8-2-12H25L167 27l59 107 19-14-59-107c-1-2-8-13-20-13-5 0-13 2-19 13L4 268c-1 2-7 14-1 24 2 5 8 10 21 10h120c-13 0-19-5-21-10z"}}),t._v(" "),r("path",{attrs:{fill:"#108775",d:"M395 269L280 62c-2-2-8-13-20-13-5 0-12 2-19 13l-15 24v48l34-59 114 204h-43a20 20 0 0 1-2 12v1c-6 10-19 10-21 10h68c2 0 15 0 21-10 2-5 4-13-2-23z"}}),t._v(" "),r("path",{attrs:{fill:"#2F495E","fill-rule":"nonzero",d:"M332 292v-1l1-2c1-3 2-7 1-10l-4-11-90-158-13-24h-1l-13 24-91 158-3 11a21 21 0 0 0 2 13c3 5 9 10 21 10h168c3 0 16 0 22-10zM226 134l83 145H144l82-145z"}})])]),t._v(" "),r("b",{staticClass:"text-muted h2",attrs:{"aria-hidden":"true"}},[t._v("+")]),t._v(" "),r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"3em",width:"3em",viewBox:"0 0 2041 2160","clip-rule":"evenodd","fill-rule":"evenodd"}},[r("title",[t._v("BootstrapVue logo")]),t._v(" "),r("path",{attrs:{d:"m1397 271-370 642-371-642h-592l963 1667 962-1667z",fill:"#34495e"}}),t._v(" "),r("path",{attrs:{d:"m44 0h1952l-979 1696z",fill:"#563d7c","fill-rule":"nonzero"}}),t._v(" "),r("path",{attrs:{d:"m1633 392-612 1061-613-1061h-408l1021 1768 1020-1768z",fill:"#41b883"}}),t._v(" "),r("path",{attrs:{d:"m767 196h339c62 0 112 14 150 43 38 28 56 71 56 129 0 36-8 66-25 91s-42 44-74 58v2c43 9 75 29 98 61 22 31 33 71 33 118 0 28-5 53-15 77s-25 44-46 61c-21 18-47 31-80 41-32 11-71 16-116 16h-320zm122 292h199c29 0 54-9 73-25 20-17 29-41 29-72 0-35-8-60-26-75-17-14-43-21-76-21h-199zm0 305h216c37 0 66-10 86-29s31-46 31-81-10-61-31-80-49-28-86-28h-216z",fill:"#fff"}})])]),t._v(" "),r("b-row",{staticClass:"mb-3"},[r("b-col",{attrs:{lg:"10","offset-lg":"1"}},[r("p",{staticClass:"text-lg-center mb-0"},[t._v("\n            Easily integrate BootstrapVue into your Nuxt.js projects using our included Nuxt.js module.\n            You can optionally specify only the components, directives and/or plugins you require.\n          ")])])],1),t._v(" "),r("b-button",{staticClass:"mb-3",attrs:{to:"/docs#nuxtjs-module",size:"sm",variant:"outline-secondary"}},[t._v("\n        BootstrapVue Nuxt.js module\n      ")]),t._v(" "),r("p",{staticClass:"mb-0 text-center"},[t._v("\n        BootstrapVue's documentation is created using\n        "),r("span",{staticClass:"bd-text-purple-bright"},[t._v("BootstrapVue")]),t._v(" and\n        generated with "),r("a",{attrs:{href:"https://nuxtjs.org",target:"_blank"}},[t._v("Nuxt.js")])])],1)],1),t._v(" "),r("section",{staticClass:"bv-section bv-white"},[r("b-container",{staticClass:"text-center",attrs:{tag:"article"}},[r("h2",{staticClass:"h4 text-center bd-text-purple-bright mb-3"},[r("svg",{staticClass:"d-block mx-auto mb-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 41",width:"2.5em",height:"2.5em",fill:"currentColor","fill-rule":"evenodd","aria-hidden":"true",focusable:"false",role:"img"}},[r("title",[t._v("Open Collective logo")]),t._v(" "),r("path",{attrs:{"fill-opacity":".4",d:"M32.8 21c0 2.4-.8 4.9-2 6.9l5.1 5.1c2.5-3.4 4.1-7.6 4.1-12 0-4.6-1.6-8.8-4-12.2L30.7 14c1.2 2 2 4.3 2 7z"}}),t._v(" "),r("path",{attrs:{d:"M20 33.7a12.8 12.8 0 0 1 0-25.6c2.6 0 5 .7 7 2.1L32 5a20 20 0 1 0 .1 31.9l-5-5.2a13 13 0 0 1-7 2z"}})]),t._v("\n        Support BootstrapVue on Open Collective\n      ")]),t._v(" "),r("b-button",{staticClass:"mb-2",attrs:{href:"https://opencollective.com/bootstrap-vue#sponsor",size:"sm",variant:"outline-secondary",target:"_blank"}},[t._v("\n        Become a sponsor\n      ")]),t._v(" "),r("b-button",{staticClass:"mb-2",attrs:{href:"https://opencollective.com/bootstrap-vue#backer",size:"sm",variant:"outline-secondary",target:"_blank"}},[t._v("\n        Become a backer\n      ")]),t._v(" "),r("b-button",{staticClass:"mb-2",attrs:{href:"https://opencollective.com/bootstrap-vue#donate",size:"sm",variant:"outline-secondary",target:"_blank"}},[t._v("\n        Donate\n      ")]),t._v(" "),r("BVContributors")],1)],1),t._v(" "),r("div",{staticClass:"bv-section bv-gray bv-p-reset",attrs:{"aria-hidden":"true"}})])}),[],!1,null,"4192c68c",null));e.default=C.exports}}]);