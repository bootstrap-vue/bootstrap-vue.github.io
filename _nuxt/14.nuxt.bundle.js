webpackJsonp([14,15,17],{155:function(t,e,n){var s,a;s=n(179);var o=n(184);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=s},156:function(t,e,n){var s,a;s=n(186);var o=n(187);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=s},157:function(t,e,n){var s,a;s=n(189);var o=n(190);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=s},175:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={nav:[{title:"Getting started",slug:"",pages:[]},{title:"Components",slug:"components",pages:[{title:"Alerts"},{title:"Breadcrumb"},{title:"Buttons"},{title:"Button group"},{title:"Dropdowns"},{title:"Form Inputs"},{title:"Form Radio"},{title:"Form Checkbox"},{title:"Form Select"},{title:"Nav"},{title:"NavBar"},{title:"Pagination"},{title:"Tables"}]}]}},176:function(t,e,n){var s,a;s=n(185);var o=n(188);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=s},177:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(175),o=s(a);e.default={data:function(){return{site:o.default}}}},178:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(175),o=s(a);e.default={data:function(){return{site:o.default}}}},179:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(181),o=s(a),i=n(180),r=s(i);e.default={components:{mNav:o.default,mFooter:r.default},mounted:function(){this.$ga.page(window.location.pathname)}}},180:function(t,e,n){var s,a;s=n(177);var o=n(182);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=s},181:function(t,e,n){var s,a;s=n(178);var o=n(183);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=s},182:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"bd-footer text-muted"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"bd-footer-links"},[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/docs/"}},[t._v("Documentation")])],1),t._m(0)]),t._m(1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"https://github.com/bootstrap-vue/bootstrap-vue",target:"_blank"}},[t._v("Fork on GitHub")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n            Designed and built with all the love in the world.\n            Maintained by the "),n("a",{attrs:{href:"https://github.com/orgs/bootstrap-vue/people"}},[t._v("core team")]),t._v("\n            With the help of\n            "),n("a",{attrs:{href:"https://github.com/bootstrap-vue/bootstrap-vue/graphs/contributors"}},[t._v("our contributors")]),t._v(".\n        ")])}]}},183:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar navbar-light navbar-static-top bd-navbar"},[n("div",{staticClass:"container"},[n("nav",[n("div",{staticClass:"clearfix"},[n("button",{staticClass:"navbar-toggler float-xs-right hidden-sm-up",attrs:{type:"button","data-toggle":"collapse","data-target":"#bd-main-nav","aria-controls":"bd-main-nav","aria-expanded":"false","aria-label":"Toggle navigation"}}),n("router-link",{staticClass:"navbar-brand hidden-sm-up",attrs:{to:"/"}},[t._v("\n                    Bootstrap Vue\n                ")])],1),n("div",{staticClass:"collapse navbar-toggleable-xs",attrs:{id:"bd-main-nav"}},[n("ul",{staticClass:"nav navbar-nav"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/","active-class":"active",exact:!0}},[t._v("\n                            Bootstrap Vue\n                        ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-item nav-link ",attrs:{to:"/docs","active-class":"active"}},[t._v("Documentation")])],1)]),t._m(0)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"nav navbar-nav",staticStyle:{float:"right"}},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-item nav-link ",attrs:{href:"https://github.com/bootstrap-vue/bootstrap-vue",target:"_blank"}},[t._v("❤ Fork on GitHub")])])])}]}},184:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bd-home"},[t._m(0),n("m-nav"),t._t("default"),n("m-footer")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"sr-only sr-only-focusable",attrs:{id:"skippy",href:"#content"}},[n("div",{staticClass:"container"},[n("span",{staticClass:"skiplink-text"},[t._v("Skip to main content")])])])}]}},185:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(175),o=s(a);e.default={data:function(){return{site:o.default}}}},186:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(155),o=s(a),i=n(176),r=s(i);e.default={components:{layout:o.default,mSidebar:r.default},data:function(){return{}},computed:{github:function(){var t="https://github.com/bootstrap-vue/bootstrap-vue/tree/master/docs/pages",e=window.location.pathname;return(e.endsWith("/docs")||e.endsWith("/docs/"))&&(e+="/index"),t+e+".vue"}},methods:{editPage:function(){window.open(this.github,"_blank"),this.$ga.event("docs","edit_page")},issue:function(){window.open("https://github.com/bootstrap-vue/bootstrap-vue/issues/new","_blank"),this.$ga.event("docs","open_issue")}},mounted:function(){if(document.disqus)DISQUS.reset({reload:!0});else{var t=document.createElement("script");t.src="//bootstrap-vue.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),document.getElementById("disqus_script").appendChild(t),document.disqus=!0}}}},187:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",[n("div",{staticClass:"bd-pageheader"},[n("div",{staticClass:"container"},[n("h1",[t._t("title")],2),n("p",{staticClass:"lead"},[t._t("lead")],2)])]),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-3 push-md-9 bd-sidebar"},[n("m-sidebar")],1),n("div",{staticClass:"col-12 col-md-9 pull-md-3 bd-content"},[n("div",{staticClass:"float-xs-right"},[n("b-button-group",{attrs:{toolbar:""}},[t._t("actions"),n("b-btn",{attrs:{size:"sm",variant:"warning"},on:{click:t.issue}},[t._v("‼ Report an issue")]),n("b-btn",{attrs:{size:"sm",variant:"info"},on:{click:t.editPage}},[t._v("📝️Edit this page")])],2)],1),t._t("content")],2)])]),n("div",{staticClass:"container"},[n("div",{attrs:{id:"disqus_script"}}),n("div",{attrs:{id:"disqus_thread"}})])])},staticRenderFns:[]}},188:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"bd-links",attrs:{id:"docsNavbarContent"}},t._l(t.site.nav,function(e){return n("div",{staticClass:"bd-toc-item active"},[n("router-link",{staticClass:"bd-toc-link",attrs:{to:"/docs/"+e.slug}},[t._v("\n            "+t._s(e.title)+"\n        ")]),n("ul",{staticClass:"nav bd-sidenav"},t._l(e.pages,function(s){return n("li",[n("router-link",{attrs:{to:"/docs/"+e.slug+"/"+s.title.replace(" ","-").toLowerCase(),"active-class":"active"}},[t._v("\n                    "+t._s(s.title)+"\n                ")])],1)}))],1)}))},staticRenderFns:[]}},189:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(47),o=s(a),i=n(156),r=s(i),c=n(176),u=s(c),l=n(2),d=s(l);e.default={components:{layout:r.default,mSidebar:u.default},props:{docs:{type:Object,default:function(){return{events:[]}}}},computed:{props_fields:function(){return{prop:{label:"Property"},type:{label:"Type"},default:{label:"Default Value"}}},events_fields:function(){return{event:{label:"Event"},args:{label:"Arguments"},description:{label:"Description"}}},props_items:function(){var t=d.default.options.components[this.docs.component],e=t.options.props;return(0,o.default)(e).map(function(t){var n=e[t];return{prop:t,type:n.type?n.type.name:"-",default:n.default instanceof Function?"[Computed]":n.default+""}})},githubURL:function(){var t="https://github.com/bootstrap-vue/bootstrap-vue/tree/master/components",e=this.docs.component.replace(/(?:^|\.?)([A-Z])/g,function(t,e){return"-"+e.toLowerCase()}).replace(/^b-/,"");return t+"/"+e+".vue"}},methods:{viewSrc:function(){window.open(this.githubURL,"_blank"),this.$ga.event("docs","view_source",this.docs.component)}}}},190:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",[n("template",{slot:"title"},[t._v("Components")]),n("template",{slot:"lead"},[t._v("\n        Over a dozen reusable components built to provide buttons, dropdowns, input groups, navigation, alerts, and\n        much more.\n    ")]),n("template",{slot:"actions"},[n("b-btn",{attrs:{size:"sm",variant:"success"},on:{click:t.viewSrc}},[t._v("Component source")])],1),n("template",{slot:"content"},[n("h1",{staticClass:"bd-title",attrs:{id:"content"}},[t._t("name")],2),n("p",[t._t("description")],2),n("h2",[t._v("Examples")]),n("small",{staticClass:"text-muted"},[t._v("To view this examples source code use edit page button")]),n("br"),n("div",{staticClass:"bd-example"},[t._t("demo")],2),n("h2",[t._v("Usage")]),n("code",{directives:[{name:"code",rawName:"v-code"}],staticClass:"html"},[t._t("usage")],2),t.props_items&&t.props_items.length>0?[n("h2",[t._v("Properties")]),n("br"),n("b-table",{attrs:{items:t.props_items,fields:t.props_fields},scopedSlots:{prop:function(e){return[n("code",[t._v(t._s(e.value))])]},default:function(e){return[n("code",[t._v(t._s(e.value))])]}}})]:t._e(),t.docs.events&&t.docs.events.length>0?[n("h2",[t._v("Events")]),n("br"),n("b-table",{attrs:{items:t.docs.events,fields:t.events_fields},scopedSlots:{event:function(e){return[n("code",[t._v(t._s(e.value))])]},args:function(e){return t._l(e.value,function(e){return n("div",[n("code",[t._v(t._s(e.arg))]),n("span",{domProps:{innerHTML:t._s(e.description)}})])})}}})]:t._e()],2)],2)},staticRenderFns:[]}}});