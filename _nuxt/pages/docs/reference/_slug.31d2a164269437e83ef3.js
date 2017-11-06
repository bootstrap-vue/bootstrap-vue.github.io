webpackJsonp([5],{"+f7m":function(e,t){e.exports={name:"@bootstrap-vue/table",version:"1.0.0",meta:{title:"Table",component:"bTable",events:[{event:"row-clicked",description:"Emitted when a row is clicked.",args:[{arg:"item",description:"Item data of the row being clicked."},{arg:"index",description:"Index of the row being clicked."},{arg:"event",description:"Native event object."}]},{event:"row-dblclicked",description:"Emitted when a row is double clicked.",args:[{arg:"item",description:"Item data of the row being double clicked."},{arg:"index",description:"Index of the row being double clicked."},{arg:"event",description:"Native event object."}]},{event:"row-hovered",description:"Emitted when a row is hovered.",args:[{arg:"item",description:"Item data of the row being hovered."},{arg:"index",description:"Index of the row being hovered."},{arg:"event",description:"Native event object."}]},{event:"head-clicked",description:"Emitted when a header or footer cell is clicked.",args:[{arg:"key",description:"Column key clicked (field name)."},{arg:"field",description:"Field definition object."},{arg:"event",description:"Native event object."}]},{event:"sort-changed",description:"Emitted when the sorting on the table has changed",args:[{arg:"ctx",description:"Table state context object. See docs."}]},{event:"context-changed",description:"Emitted whenever the table state context has changed",args:[{arg:"ctx",description:"Table state context object. See docs."}]},{event:"filtered",description:"Emitted when local filtering causes a change in the number of items.",args:[{arg:"filteredItems",description:"Array of items after filtering (before local pagination occurs)."}]},{event:"refreshed",description:"Emitted when the items provider function has returned data."}],slots:[{name:"table-caption",description:"Content to display in the table's caption element"},{name:"table-colgroup",description:"Slot to place custom colgroup and col elements"},{name:"[field]",description:"Scoped slot for custom data rendering of field data. See docs for scoped data"},{name:"HEAD_[field]",description:"Scoped slot for custom rendering of field header. See docs for scoped header"},{name:"FOOT_[field]",description:"Scoped slot for custom rendering of field footer. See docs for scoped footer"},{name:"row-details",description:"Scoped slot for optional rendering additional record details. See docs for Row details support"},{name:"empty",description:"Content to display when no items are present in the `items` array"},{name:"emptyfiltered",description:"Content to display when no items are present in the filtered `items` array"},{name:"top-row",description:"Fixed top row slot for user supplied TD cells. Scoped data: columns - number of TDs to provide, fields - fields object"},{name:"bottom-row",description:"Fixed bottom row slot for user supplied TD cells. Scoped data: columns - number of TDs to provide, fields - fields object"}]}}},"+mcN":function(e,t,o){"use strict";var n=o("Xxa5"),s=o.n(n),r=o("exGp"),a=o.n(r),i=o("rzRs"),c=o("R6eK");t.a={mixins:[c.a],layout:"docs",validate:function(e){var t=e.params;return Boolean(i.e[t.slug])},asyncData:function(){function e(e){return t.apply(this,arguments)}var t=a()(s.a.mark(function e(t){var n,r,a=t.params;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("xrP2")("./"+a.slug+"/README.md");case 2:return n=e.sent,r=i.e[a.slug],e.abrupt("return",{readme:n,meta:r});case 5:case"end":return e.stop()}},e,this)}));return e}()}},"/RSe":function(e,t){e.exports={name:"@bootstrap-vue/card",version:"1.0.0",meta:{title:"Card",component:"bCard",components:["bCardHeader","bCardFooter","bCardImg","bCardGroup"],slots:[{name:"img",description:"Slot for custom img tag, for finer grained control of image"},{name:"header",description:"For custom rendering of header content"},{name:"footer",description:"For custom rendering of footer content"}]}}},"/h/w":function(e,t){e.exports={name:"@bootstrap-vue/scrollspy",version:"0.0.0",meta:{title:"Scrollspy",directive:"vBScrollspy"}}},"0Hg4":function(e,t,o){function n(e){return o(s(e))}function s(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./color-variants/meta.json":"VfcC","./images/meta.json":"cZRA","./router-links/meta.json":"c6PT","./size-props/meta.json":"80JZ","./spacing-classes/meta.json":"nEqD","./starter-templates/meta.json":"xY7C"};n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id="0Hg4"},"2oQI":function(e,t){e.exports={name:"@bootstrap-vue/nav",version:"1.0.0",meta:{title:"Nav",component:"bNav",components:["bNavItem","bNavText","bNavForm","bNavItemDropdown"],plugins:["Dropdown"]}}},"5RXe":function(e,t){e.exports={name:"@bootstrap-vue/popover",version:"0.0.0",meta:{title:"Popover",directive:"vBPopover"}}},"5qSi":function(e,t){e.exports={name:"@bootstrap-vue/jumbotron",version:"1.0.0",meta:{title:"Jumbotron",component:"bJumbotron",slots:[{name:"header",description:"Slot for custom header content. Placed inside 'header-tag'"},{name:"lead",description:"For custom rendering of lead text content. Placed inside 'lead-tag'"}]}}},"72xY":function(e,t){e.exports={name:"@bootstrap-vue/form-file",version:"1.0.0",meta:{title:"Form File",component:"bFormFile",events:[{event:"change",description:"original native change event on input",args:[{arg:"event"}]},{event:"input",description:"[see above docs]"}]}}},"7EpO":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("+mcN"),s=o("EK7M"),r=o("VU/8"),a=r(n.a,s.a,!1,null,null,null);t.default=a.exports},"7YgM":function(e,t){e.exports={name:"bootstrap-vue",version:"1.0.0",description:"Quickly integrate Bootstrap 4 components with Vue.js",main:"dist/bootstrap-vue.common.js",web:"dist/bootstrap-vue.js",module:"es/index.js","jsnext:main":"es/index.js",style:"dist/bootstrap-vue.css",license:"MIT",homepage:"https://bootstrap-vue.github.io",contributors:[{name:"Pooya Parsa",url:"https://github.com/pi0"},{name:"Troy Morehouse",url:"https://github.com/tmorehouse"},{name:"SirLamer",url:"https://github.com/SirLamer"},{name:"Vitaly Mosin",url:"https://github.com/mosinve"},{name:"vizo",url:"https://github.com/vizo"},{name:"Alex Regan",url:"https://github.com/alexsasharegan"}],bugs:{url:"https://github.com/bootstrap-vue/bootstrap-vue/issues"},repository:{type:"git",url:"git+https://github.com/bootstrap-vue/bootstrap-vue.git"},files:["src","dist","nuxt","es"],scripts:{build:"build/build",watch:"rollup -c build/rollup.config.js --watch","docs-dev":"nuxt dev -c docs/nuxt.config.js","docs-gen":"nuxt generate -c docs/nuxt.config.js","docs-publish":"gh-pages -t -d docs-dist -b master -r git@github.com:bootstrap-vue/bootstrap-vue.github.io.git",test:"NODE_ENV=test jest",release:"npm run build && npm run test && standard-version",postinstall:"opencollective postinstall || exit 0"},peerDependencies:{vue:"^2.4.2"},dependencies:{"lodash.startcase":"^4.4.0",opencollective:"^1.0.3","popper.js":"^1.12.6","vue-functional-data-merge":"^1.0.6"},devDependencies:{"@nuxtjs/pwa":"^1.0.0","babel-cli":"^6.26.0","babel-plugin-external-helpers":"^6.22.0","babel-plugin-istanbul":"^4.1.5",bootstrap:"^4.0.0-beta.2","clean-css":"^4.1.9",codecov:"^3.0.0",codemirror:"^5.31.0","cross-env":"^5.1.0",eslint:"^4.10.0","eslint-plugin-html":"^3.2.2","eslint-plugin-vue":"^2.1.0","eslint-plugin-vue-libs":"^1.2.1","gh-pages":"^1.0.0","highlight-loader":"^0.7.2",highlightjs:"^9.8.0","html-loader":"^0.5.1",jest:"^21.2.1",lodash:"^4.17.4","markdown-loader":"^2.0.1",marked:"^0.3.6",nuxt:"1.0.0-rc11",rollup:"^0.50.0","rollup-plugin-babel":"^3.0.2","rollup-plugin-commonjs":"^8.2.6","rollup-plugin-node-resolve":"^3.0.0","rollup-plugin-vue":"^2.5.2","rollup-watch":"^4.3.1","standard-version":"^4.2.0","uglify-es":"^3.1.7","vue-jest":"^1.0.2","vue-test-utils":"^1.0.0-beta.4"},jest:{testRegex:"spec.js$",moduleFileExtensions:["js","vue"],transform:{"^.+\\.js$":"babel-jest",".*\\.(vue)$":"vue-jest"},coverageDirectory:"./coverage/",collectCoverage:!0,mapCoverage:!0},keywords:["Bootstrap","Bootstrap 4","Bootstrap for Vue","SSR","Web","Components","Directives","Polymer","Vue","VueJS","Vue2","WebComponents","jquery","Popper.js","vue-strap","vueify","vuestrap","CSS","Flexbox","Alert","Breadcrumb","Button","Checkbox","Radio","Card","Carousel","Slider","Collapse","Dropdown","Select","Option","Input","Jumbotron","List","Nav","Modal","Upload","Dropzone","Navbar","Pagination","Popover","Progress","Tab","Table","Tag","Tooltip"],collective:{type:"opencollective",url:"https://opencollective.com/bootstrap-vue",logo:"https://opencollective.com/opencollective/logo.txt"}}},"80JZ":function(e,t){e.exports={title:"Size props and classes",slug:"size-props"}},"8bom":function(e,t){e.exports={name:"@bootstrap-vue/tabs",version:"1.0.0",meta:{title:"Tabs",component:"bTabs",components:["bTab"],events:[{event:"input",description:"Emits when a tab is shown. USed to update the v-model",args:[{arg:"tab_index"}]}],slots:[{name:"tabs",description:"Additional tabs without content"},{name:"empty",description:"Renders this slot if no tabs are present"}]}}},Av5r:function(e,t){e.exports={name:"@bootstrap-vue/layout",version:"1.0.0",meta:{title:"Layout and Grid System",slug:"layout",components:["bContainer","bRow","bCol","bFormRow"]}}},BGcK:function(e,t){e.exports={name:"@bootstrap-vue/button-toolbar",version:"1.0.0",meta:{title:"Button toolbar",component:"bButtonToolbar"}}},CrPL:function(e,t){e.exports={name:"@bootstrap-vue/tooltip",version:"1.0.0",meta:{title:"Tooltip",component:"bTooltip",events:[{event:"show",description:"When tooltip is about to be shown. Cancelable",args:[{arg:"bvEvent",description:"bvEvent object. Call bvEvent.preventDefault() to cancel show."}]},{event:"shown",description:"When tooltip is shown",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"hide",description:"When tooltip is about to be hidden. Cancelable",args:[{arg:"bvEvent",description:"bvEvent object. Call bvEvent.preventDefault() to cancel hide."}]},{event:"hidden",description:"When tooltip is hidden",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"bv::tooltip::show",description:"Emitted on $root when tooltip is about to be shown. Cancelable",args:[{arg:"bvEvent",description:"bvEvent object. Call bvEvent.preventDefault() to cancel show."}]},{event:"bv::tooltip::shown",description:"Emitted on $root when tooltip is shown",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"bv::tooltip::hide",description:"Emitted on $root when tooltip is about to be hidden. Cancelable",args:[{arg:"bvEvent",description:"bvEvent object. Call bvEvent.preventDefault() to cancel hide."}]},{event:"bv::tooltip::hidden",description:"Emitted on $root when tooltip is hidden",args:[{arg:"bvEvent",description:"bvEvent object."}]}]}}},DqH2:function(e,t){e.exports={title:"Contributing"}},EK7M:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("div",{staticClass:"bd-content",domProps:{innerHTML:e._s(e.readme)}})])},s=[],r={render:n,staticRenderFns:s};t.a=r},G0wi:function(e,t){e.exports='<p align=center> <a href=https://bootstrap-vue.js.org> <img src=https://github.com/bootstrap-vue/bootstrap-vue/raw/master/banner.png width=300px> </a> <br> Quickly integrate <a href=https://getbootstrap.com/docs/4.0>Bootstrap 4</a> Components with <a href=https://vuejs.org>Vue.js</a> <br> <br> <a href=https://getbootstrap.com/docs/4.0> <img alt="" src="https://img.shields.io/badge/bootstrap-4.0.0--beta-800080.svg?style=flat-square"> </a> <a href=https://vuejs.org> <img alt="" src="https://img.shields.io/badge/vue.js-2.4.x-green.svg?style=flat-square"> </a> <a href=https://github.com/bootstrap-vue/bootstrap-vue> <img alt="" src="https://david-dm.org/bootstrap-vue/bootstrap-vue.svg?style=flat-square"> </a> <a href="http://packagequality.com/#?package=bootstrap-vue"> <img alt="package quality" src="http://npm.packagequality.com/shield/bootstrap-vue.png?style=flat-square"> </a> <br> <a href=https://circleci.com/gh/bootstrap-vue/bootstrap-vue> <img alt="" src="https://img.shields.io/circleci/project/github/bootstrap-vue/bootstrap-vue/master.svg?style=flat-square"> </a> <a href=https://www.npmjs.com/package/bootstrap-vue> <img alt="" src="https://img.shields.io/npm/dt/bootstrap-vue.svg?style=flat-square"> </a> <a href=https://www.npmjs.com/package/bootstrap-vue> <img alt="" src="https://img.shields.io/npm/dm/bootstrap-vue.svg?style=flat-square"> </a> <a href=https://www.npmjs.com/package/bootstrap-vue> <img alt="" src="https://img.shields.io/npm/v/bootstrap-vue.svg?style=flat-square"> </a> <br> <a href=#backers> <img alt="" src="https://opencollective.com/bootstrap-vue/backers/badge.svg?style=flat-square"> </a> <a href=#sponsors> <img alt="" src="https://opencollective.com/bootstrap-vue/sponsors/badge.svg?style=flat-square"> </a> </p> <p>If you have discovered a &#x1F41C; or have a feature suggestion, feel free to create an issue on Github.</p> <p>This branch is for <a href=https://getbootstrap.com/docs/4.0>Bootstrap4 Beta</a>. If you are looking for old alpha 6 please head to <a href=https://github.com/bootstrap-vue/bootstrap-vue/tree/alpha>alpha</a> branch. alpha docs are available <a href=https://bootstrap-vue-alpha.surge.sh>here</a>.</p> <h1 id=links>Links</h1> <ul> <li>&#x1F4D8; <a href=https://bootstrap-vue.js.org>Documentation</a></li> <li>&#x1F528; <a href=https://bootstrap-vue.js.org/docs/misc/changelog>Release Notes</a></li> <li>&#x1F4AC; <a href=https://bootstrap-vue.now.sh>Slack Community</a></li> </ul> <h2 id=contributors>Contributors</h2> <p>This project exists thanks to all the people who contribute. <a href=CONTRIBUTING.md>[Contribute]</a>. <a href=graphs/contributors><img src="https://opencollective.com/bootstrap-vue/contributors.svg?width=890"></a></p> <h2 id=backers>Backers</h2> <p>Thank you to all our backers! &#x1F64F; [<a href=https://opencollective.com/bootstrap-vue#backer>Become a backer</a>]</p> <p><a href=https://opencollective.com/bootstrap-vue#backers target=_blank><img src="https://opencollective.com/bootstrap-vue/backers.svg?width=890"></a></p> <h2 id=sponsors>Sponsors</h2> <p>Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [<a href=https://opencollective.com/bootstrap-vue#sponsor>Become a sponsor</a>]</p> <p><a href=https://opencollective.com/bootstrap-vue/sponsor/0/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/0/avatar.svg></a> <a href=https://opencollective.com/bootstrap-vue/sponsor/1/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/1/avatar.svg></a> <a href=https://opencollective.com/bootstrap-vue/sponsor/2/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/2/avatar.svg></a> <a href=https://opencollective.com/bootstrap-vue/sponsor/3/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/3/avatar.svg></a> <a href=https://opencollective.com/bootstrap-vue/sponsor/4/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/4/avatar.svg></a> <a href=https://opencollective.com/bootstrap-vue/sponsor/5/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/5/avatar.svg></a> <a href=https://opencollective.com/bootstrap-vue/sponsor/6/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/6/avatar.svg></a> <a href=https://opencollective.com/bootstrap-vue/sponsor/7/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/7/avatar.svg></a> <a href=https://opencollective.com/bootstrap-vue/sponsor/8/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/8/avatar.svg></a> <a href=https://opencollective.com/bootstrap-vue/sponsor/9/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/9/avatar.svg></a></p> <h1 id=license>License</h1> <p>Released under The MIT <a href=./LICENSE>License</a>. Copyright (c) BootstrapVue.</p> <p><a href="https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fbootstrap-vue%2Fbootstrap-vue?ref=badge_small"><img src="https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fbootstrap-vue%2Fbootstrap-vue.svg?type=small" alt="FOSSA Status"></a></p> '},GUC9:function(e,t){e.exports={name:"@bootstrap-vue/progress",version:"1.0.0",meta:{title:"Progress",component:"bProgress",components:["bProgressBar"]}}},Gfqs:function(e,t,o){function n(e){return o(s(e))}function s(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./alert/package.json":"Wkvv","./badge/package.json":"lkd2","./breadcrumb/package.json":"edhI","./button-group/package.json":"UlFk","./button-toolbar/package.json":"BGcK","./button/package.json":"LH9z","./card/package.json":"/RSe","./carousel/package.json":"IZV0","./collapse/package.json":"drpw","./dropdown/package.json":"xDVA","./embed/package.json":"s26O","./form-checkbox/package.json":"P5SY","./form-file/package.json":"72xY","./form-group/package.json":"d3hi","./form-input/package.json":"iRKB","./form-radio/package.json":"KBj4","./form-select/package.json":"V8qu","./form-textarea/package.json":"HRPh","./form/package.json":"aBNC","./image/package.json":"mzua","./input-group/package.json":"LfL0","./jumbotron/package.json":"5qSi","./layout/package.json":"Av5r","./link/package.json":"emmp","./list-group/package.json":"KAUE","./media/package.json":"Up1I","./modal/package.json":"hb+f","./nav/package.json":"2oQI","./navbar/package.json":"HkM+","./pagination-nav/package.json":"i4Zx","./pagination/package.json":"RqpV","./popover/package.json":"Ovir","./progress/package.json":"GUC9","./table/package.json":"+f7m","./tabs/package.json":"8bom","./tooltip/package.json":"CrPL"};n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id="Gfqs"},HRPh:function(e,t){e.exports={name:"@bootstrap-vue/form-textarea",version:"1.0.0",meta:{title:"Form Textarea",component:"bFormTextarea",events:[{event:"input",description:"Emitted when the textarea receives input from user.",args:[{arg:"value",description:"current value of the textarea"}]}]}}},"HkM+":function(e,t){e.exports={name:"@bootstrap-vue/navbar",version:"1.0.0",meta:{title:"Navbar",breaking:!0,component:"bNavbar",components:["bNavbarNav","bNavbarBrand","bNavbarToggle"],plugins:["Nav","Dropdown","Collapse"]}}},IZV0:function(e,t){e.exports={name:"@bootstrap-vue/carousel",version:"1.0.0",meta:{title:"Carousel",component:"bCarousel",components:["bCarouselSlide"],events:[{event:"sliding-start",description:"Emitted when transitioning to a new slide has started.",args:[{arg:"slide",description:"Slide number that is being slid to."}]},{event:"sliding-end",description:"Emitted when transitioning to a new slide has ended.",args:[{arg:"slide",description:"Slide number that was slid to."}]}]}}},JMyG:function(e,t,o){function n(e){return o(s(e))}function s(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./popover/package.json":"5RXe","./scrollspy/package.json":"/h/w","./tooltip/package.json":"zRSF"};n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id="JMyG"},KAUE:function(e,t){e.exports={name:"@bootstrap-vue/list-group",version:"1.0.0",meta:{title:"List group",component:"bListGroup",components:["bListGroupItem"]}}},KBj4:function(e,t){e.exports={name:"@bootstrap-vue/form-radio",version:"1.0.0",meta:{title:"Form Radio",component:"bFormRadioGroup",components:["bFormRadio"],events:[{event:"input",description:"Emitted when the selected value is changed",args:[{arg:"checked",description:"current selected Value of radio group."}]},{event:"change",description:"Emitted when selected value is changed due to user interaction",args:[{arg:"checked",description:"current selected Value of radio group."}]}]}}},LH9z:function(e,t){e.exports={name:"@bootstrap-vue/button",version:"1.0.0",meta:{title:"Button",component:"bButton",components:["bButtonClose"],events:[{event:"click",description:"when clicked on button"}]}}},LfL0:function(e,t){e.exports={name:"@bootstrap-vue/input-group",version:"1.0.0",meta:{title:"Input Group",component:"bInputGroup",components:["bInputGroupAddon","bInputGroupButton"],slots:[{name:"left",description:"Left attachment"},{name:"right",description:"Right attachment"}]}}},OMmf:function(e,t,o){function n(e){return o(s(e))}function s(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./changelog/meta.json":"tF3C","./contributing/meta.json":"DqH2"};n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id="OMmf"},Ovir:function(e,t){e.exports={name:"@bootstrap-vue/popover",version:"1.0.0",meta:{title:"Popover",component:"bPopover",events:[{event:"show",description:"When popover is about to be shown. Cancelable",args:[{arg:"bvEvent",description:"bvEvent object. Call bvEvent.preventDefault() to cancel show."}]},{event:"shown",description:"When popover is shown",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"hide",description:"When popover is about to be hidden. Cancelable",args:[{arg:"bvEvent",description:"bvEvent object. Call bvEvent.preventDefault() to cancel hide."}]},{event:"hidden",description:"When popover is hidden",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"bv::popover::show",description:"Emitted on $root when popover is about to be shown. Cancelable",args:[{arg:"bvEvent",description:"bvEvent object. Call bvEvent.preventDefault() to cancel show."}]},{event:"bv::popover::shown",description:"Emitted on $root when popover is shown",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"bv::popover::hide",description:"Emitted on $root when popover is about to be hidden. Cancelable",args:[{arg:"bvEvent",description:"bvEvent object. Call bvEvent.preventDefault() to cancel hide."}]},{event:"bv::popover::hidden",description:"Emitted on $root when popover is hidden",args:[{arg:"bvEvent",description:"bvEvent object."}]}],slots:[{name:"title",description:"Optional slot for title (html supported)"}]}}},P5SY:function(e,t){e.exports={name:"@bootstrap-vue/form-checkbox",version:"1.0.0",meta:{title:"Form Checkbox",component:"bFormCheckboxGroup",components:["bFormCheckbox"],events:[{event:"input",description:"Emitted when the selected value(s) is changed",args:[{arg:"checked",description:"Value of checkbox(es). When bound to multiple checkboxes, value will be an array."}]},{event:"change",description:"Emitted when selected value(s) is changed due to user interaction",args:[{arg:"checked",description:"Value of checkbox(es). When bound to multiple checkboxes, value will be an array."}]}]}}},R6eK:function(e,t,o){"use strict";var n=o("VtUA");t.a={data:function(){return{scrollTimout:null}},computed:{content:function(){return this.$route.params.slug&&this._content[this.$route.params.slug]||{}}},head:function(){return{title:(this.meta&&this.meta.title||"Docs")+" - BootstrapVue"}},mounted:function(){clearTimeout(this.scrollTimeout),this.scrollTimeout=null,this.focusScroll(),this.$root.$emit("setTOC",this.readme)},updated:function(){clearTimeout(this.scrollTimeout),this.scrollTimeout=null,this.focusScroll()},beforeDestroy:function(){this.$root.$emit("setTOC","")},methods:{focusScroll:function(){var e=this,t=this.$route.hash;this.$nextTick(function(){var o=void 0;t&&(o=e.$el.querySelector('[id="'+t.replace("#","")+'"]'),e.scrollIntoView(o)),o||(o=e.$el.querySelector("h1")),o&&(o.tabIndex=-1,o.focus())})},scrollIntoView:function(e){var t=this;if(e){var o=document.scrollingElement||document.documentElement||document.body;this.scrollTimeout=setTimeout(function(){Object(n.d)(o,Object(n.c)(e)-70,100),t.scrollTimeout=null},100)}}}}},RqpV:function(e,t){e.exports={name:"@bootstrap-vue/pagination",version:"1.0.0",meta:{title:"Pagination",component:"bPagination",events:[{event:"input",description:"when page changes via user interaction or programmatically",args:[{arg:"page",description:"Selected page number (starting with 1)"}]},{event:"change",description:"when page changes via user interaction",args:[{arg:"page",description:"Selected page number (starting with 1)"}]}]}}},UlFk:function(e,t){e.exports={name:"@bootstrap-vue/button-group",version:"1.0.0",meta:{title:"Button group",component:"bButtonGroup"}}},Up1I:function(e,t){e.exports={name:"@bootstrap-vue/media",version:"1.0.0",meta:{title:"Media",component:"bMedia",components:["bMediaAside","bMediaBody"],slots:[{name:"aside",description:"Media Aside"}]}}},V8qu:function(e,t){e.exports={name:"@bootstrap-vue/form-select",version:"1.0.0",meta:{title:"Form Select",component:"bFormSelect",events:[{event:"input",description:"Emitted with the select value changes",args:[{arg:"value",desccription:"current selected value of the select."}]},{event:"change",description:"Emitted with the select value changes via user interaction",args:[{arg:"value",desccription:"current selected value of the select."}]}]}}},VfcC:function(e,t){e.exports={title:"Color Variants"}},VtUA:function(e,t,o){"use strict";function n(e){return e.replace(/<[^>]+>/g,"")}function s(e){return e.replace(/"/g,"")}function r(e){if(!e)return{};var t=[],o="",r="",a=e.match(/<h1 id=([^> ]+)>(.+?)<\/h1>/)||[];a&&(o="#"+s(a[1]),r=n(a[2]));var i=e.match(/<h([23]) id=[^> ]+>.+?<\/h\1>/g)||[],c=0;return i.forEach(function(e){var o=e.match(/^<(h[23]) id=([^> ]+)>(.+?)<\/\1>$/);if(o){var r=o[1],a="#"+s(o[2]),i=n(o[3]);"h2"===r?(t.push({href:a,label:i}),c=t.length):"h3"===r&&(t[c]=t[c]||[],t[c].push({href:a,label:i}))}}),{toc:t,title:r,top:o}}function a(e){var t={};return e.keys().map(e).map(function(e){return e.meta||e}).map(function(e){return d()({slug:e.slug||(e.title||"").replace(" ","-").toLowerCase()},e)}).forEach(function(e){t[e.slug]=e}),t}function i(e,t,o,n){return(e/=n/2)<1?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t)}function c(e,t,o,n){var s=e.scrollTop,r=t-s,a=0;!function t(){a+=20;var c=i(a,s,r,o);e.scrollTop=Math.round(c),a<o?setTimeout(t,20):n&&"function"==typeof n&&n()}()}function p(e){if(!e.getClientRects().length)return 0;var t=e.getBoundingClientRect(),o=e.ownerDocument.defaultView;return t.top+o.pageYOffset}t.b=r,t.a=a,t.d=c,t.c=p;var l=o("woOf"),d=o.n(l)},Wkvv:function(e,t){e.exports={name:"@bootstrap-vue/alert",version:"1.0.0",meta:{title:"Alert",component:"bAlert",events:[{event:"dismissed",description:"Alert dismissed"},{event:"dismiss-count-down",description:"When dismissAfterSeconds enabled, this event emits every second on countdown.",args:[{arg:"dismissCountDown",description:"Time remaining to dismissed"}]}],slots:[{name:"dismiss",description:"Content for the dismiss button."}]}}},aBNC:function(e,t){e.exports={name:"@bootstrap-vue/form",version:"1.0.0",meta:{title:"Form",slug:"form",component:"bForm",components:["bFormText","bFormFeedback","bFormRow"],events:[{event:"submit",description:"Emitted when the form is being submitted",args:[{arg:"event",description:"Native submit event."}]}]}}},c6PT:function(e,t){e.exports={title:"Router support",slug:"router-links"}},cZRA:function(e,t){e.exports={title:"Component img src resolving",slug:"images"}},d3hi:function(e,t){e.exports={name:"@bootstrap-vue/form-group",version:"1.0.0",meta:{title:"Form Group",component:"bFormGroup",slots:[{name:"label",description:"Content to place inside the <label> element."},{name:"description",description:"Content to place in the description area."},{name:"feedback",description:"Content to place in the invalid feedback area"}]}}},drpw:function(e,t){e.exports={name:"@bootstrap-vue/collapse",version:"1.0.0",meta:{title:"Collapse",component:"bCollapse",directives:["vBToggle"],events:[{event:"show",description:"emitted when collaspe has started to open"},{event:"shown",description:"emitted when collaspe has finised opening"},{event:"hide",description:"emitted when collaspe has started to close"},{event:"hidden",description:"emitted when collaspe has finished closing"},{event:"bv::toggle::collapse",description:"toggles visible state of collaspe when this event is emitted on $root",args:[{arg:"id",description:"collapse id to toggle"}]}]}}},edhI:function(e,t){e.exports={name:"@bootstrap-vue/breadcrumb",version:"1.0.0",meta:{title:"Breadcrumb",component:"bBreadcrumb",components:["bBreadcrumbItem","bBreadcrumbLink"],events:[]}}},emmp:function(e,t){e.exports={name:"@bootstrap-vue/link",version:"1.0.0",meta:{title:"Link",component:"bLink",events:[{event:"click",description:"when link clicked"}]}}},"hb+f":function(e,t){e.exports={name:"@bootstrap-vue/modal",version:"1.0.0",meta:{title:"Modal",component:"bModal",directives:["vBModal"],events:[{event:"change",description:"new modal visibility state",args:[{arg:"is_visible",description:"true if modal is visible, false otherwise"}]},{event:"show",description:"always emits just before modal is shown. cancelable",args:[{arg:"bvEvt",description:"BvEvent object. Call bvEvt.preventDefault() to cancel show"}]},{event:"shown",description:"always emits when modal is shown",args:[{arg:"bvEvt",description:"BvEvent object"}]},{event:"hide",description:"always emits just before modal has hidden",args:[{arg:"bvEvt",description:"BvEvent object. Call bvEvt.preventDefault() to cancel hide"}]},{event:"hidden",description:"always emits after modal is hidden",args:[{arg:"bvEvt",description:"BvEvent object"}]},{event:"ok",description:"when default OK button pressed, just before modal has hidden. Cancelable",args:[{arg:"bvEvt",description:"BvEvent object. Call bvEvt.preventDefault() to cancel hide"}]},{event:"cancel",description:"when default CANCEL button pressed, just before modal has hidden. Cancelable",args:[{arg:"bvEvt",description:"BvEvent object. Call bvEvt.preventDefault() to cancel hide"}]}],slots:[{name:"modal-header",description:"Entire modal header container contents. Also removes the top right X close button."},{name:"modal-title",description:"Modal title. If modal-header slot is used, this slot will not be shown."},{name:"modal-header-close",description:"Content of Modal heaqder close button. If modal-header slot is used, this slot will not be shown."},{name:"modal-footer",description:"Modal footer content. Also removes default OK and CANCEL buttons."},{name:"modal-ok",description:"Modal OK button content."},{name:"modal-cancel",description:"Modal CANCEL button content."}]}}},i4Zx:function(e,t){e.exports={name:"@bootstrapvue/pagination",version:"1.0.0",meta:{title:"Pagination Nav",component:"bPaginationNav"}}},iRKB:function(e,t){e.exports={name:"@bootstrap-vue/form-input",version:"1.0.0",meta:{title:"Form Input",component:"bFormInput",events:[{event:"input",description:"Emitted when the input receives input from user.",args:[{arg:"value",description:"current value of the input"}]},{event:"change",description:"Emitted when the input changes.",args:[{arg:"value",description:"current value of the input"}]}]}}},lkd2:function(e,t){e.exports={name:"@bootstrap-vue/badge",version:"1.0.0",meta:{title:"Badge",component:"bBadge"}}},mzua:function(e,t){e.exports={name:"@bootstrap-vue/image",version:"1.0.0",meta:{title:"Image",component:"bImg",components:["bImgLazy"]}}},nEqD:function(e,t){e.exports={title:"Spacing classes"}},rzRs:function(e,t,o){"use strict";o.d(t,"a",function(){return i}),o.d(t,"b",function(){return p}),o.d(t,"e",function(){return d}),o.d(t,"c",function(){return v}),o.d(t,"d",function(){return m});var n=o("G0wi"),s=(o.n(n),o("VtUA")),r=o("7YgM");o.n(r);o.o(r,"version")&&o.d(t,"f",function(){return r.version});var a=o("Gfqs"),i=Object(s.a)(a),c=o("JMyG"),p=Object(s.a)(c),l=o("0Hg4"),d=Object(s.a)(l),u=o("OMmf"),v=Object(s.a)(u),m=[{title:"Getting started",base:""},{title:"Components",base:"components/",pages:i},{title:"Directives",base:"directives/",pages:p},{title:"Reference",base:"reference/",pages:d},{title:"Misc",base:"misc/",pages:v}]},s26O:function(e,t){e.exports={name:"@bootstrap-vue/embed",version:"1.0.0",meta:{title:"Embed",component:"bEmbed"}}},tF3C:function(e,t){e.exports={title:"ChangeLog"}},xDVA:function(e,t){e.exports={name:"@bootstrap-vue/dropdown",version:"1.0.0",meta:{title:"Dropdown",component:"bDropdown",components:["bDropdownItem","bDropdownItemButton","bDropdownHeader","bDropdownDivider"],events:[{event:"shown",description:"Emitted When dropdown is shown"},{event:"hidden",description:"Emitted When dropdown is hidden"},{event:"click",description:"Emitted when split button clicked in split mode."}],slots:[{name:"button-content",description:"Can be used to implement custom text with icons and more styling"},{name:"text",description:"Deprecated. please use 'button-content' slot instead."}]}}},xY7C:function(e,t){e.exports={title:"Starter Templates"}},xrP2:function(e,t,o){function n(e){var t=s[e];return t?o.e(t[1]).then(function(){return o(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var s={"./color-variants/README.md":["lWiF",62],"./images/README.md":["UD92",61],"./router-links/README.md":["s+jy",60],"./size-props/README.md":["ChR+",59],"./spacing-classes/README.md":["lAen",58],"./starter-templates/README.md":["7Bth",57]};n.keys=function(){return Object.keys(s)},n.id="xrP2",e.exports=n},zRSF:function(e,t){e.exports={name:"@bootstrap-vue/tooltip",version:"0.0.0",meta:{title:"Tooltip",directive:"vBTooltip"}}}});
//# sourceMappingURL=_slug.31d2a164269437e83ef3.js.map