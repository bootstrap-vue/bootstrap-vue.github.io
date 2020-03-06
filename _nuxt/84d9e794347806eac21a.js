(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{249:function(t,e,o){"use strict";var n=o(7);e.a={name:"BVMain",functional:!0,props:{tag:{type:String,default:"main"}},render(t,e){var{props:o,data:data,children:r}=e;return t(o.tag,Object(n.a)(data,{staticClass:"bd-main"}),[r])}}},250:function(t,e,o){"use strict";o(17);var n=o(7),r=o(21),c=t=>{if(t&&"click"===t.type){var e=t.target&&t.target.closest?t.target.closest("a[href]"):null;if(!(!e||"click"!==t.type||e.__vue__||e.closest(".bd-example")||e.closest("pre")||t.defaultPrevented)){var o=e.getAttribute("href");o&&0===o.indexOf("/")&&0!==o.indexOf("//")?(t.preventDefault(),"undefined"!=typeof window&&window.$nuxt&&window.$nuxt.$router.push(o)):o&&0===o.indexOf("#")&&((t,e)=>{t.preventDefault(),t.stopPropagation();var o=(e||"").replace(/#/g,""),n=document.body.querySelector('[id="'.concat(o,'"]'));if(n){var c=document.scrollingElement||document.documentElement||document.body;Object(r.h)(c,Object(r.d)(n)-70,100,()=>{n.tabIndex=-1,n.focus()})}})(t,o)}}};e.a={name:"BVSection",functional:!0,props:{tag:{type:String,default:"section"},play:{type:Boolean,default:!1}},render(t,e){var{props:o,data:data,children:r}=e,l=[];return o.play&&l.push({name:"play"}),t(o.tag,Object(n.a)(data,{class:["bd-content"],directives:l,on:{click:c}}),[r])}}},251:function(t,e,o){"use strict";o(17),o(23);var n=o(21),r=o(44),c={};e.a={data:()=>({scrollTimeout:null}),computed:{content(){return this.$route.params.slug&&this._content[this.$route.params.slug]||{}},headTitle(){var t=this.$route.name,title="",section="";return this.meta&&this.meta.title&&(title=this.meta.title),/^docs-components/.test(t)?section="Components":/^docs-directives/.test(t)?section="Directives":/^docs-reference/.test(t)?section="Reference":/^docs-misc/.test(t)&&(section="Miscellaneous"),[title,section,"BootstrapVue"].filter(Boolean).join(" | ")},headMeta(){var section=this.$route.name.split("-")[1],t=section?r.i.find(t=>t.base==="".concat(section,"/")):null,e=this.meta&&this.meta.description?this.meta.description:t&&t.description?t.description:r.c,meta=[{hid:"og:title",name:"og:title",property:"og:title",content:this.headTitle}];return e&&(meta.push({hid:"description",name:"description",content:e}),meta.push({hid:"og:description",name:"og:description",property:"og:description",content:e})),meta}},mounted(){this.clearScrollTimeout(),this.focusScroll(),this.$nextTick(()=>{setTimeout(()=>{var t="".concat(this.$route.path,"_").concat(this.$route.params.slug||""),e=c[t]||(c[t]=Object(n.c)(this.readme||"",this.meta||null));this.$root.$emit("docs-set-toc",e)},1)})},updated(){this.clearScrollTimeout(),this.focusScroll()},beforeDestroy(){this.clearScrollTimeout(),this.$root.$emit("docs-set-toc",{})},methods:{clearScrollTimeout(){this.scrollTimeout&&(clearTimeout(this.scrollTimeout),this.scrollTimeout=null)},focusScroll(){var t=this.$route.hash;this.$nextTick(()=>{var e;t&&(e=this.$el.querySelector('[id="'.concat(t.replace("#",""),'"]')),this.scrollIntoView(e)),e||(e=this.$el.querySelector("h1")),e&&(e.tabIndex=-1,e.focus())})},scrollIntoView(t){if(t){var e=document.scrollingElement||document.documentElement||document.body;this.scrollTimeout=setTimeout(()=>{this.clearScrollTimeout(),Object(n.h)(e,Object(n.d)(t)-70,100)},100)}}},head(){return{title:this.headTitle,meta:this.headMeta}}}},253:function(t,e,o){},254:function(t,e,o){"use strict";var n=o(253);o.n(n).a},255:function(t,e,o){"use strict";o(23),o(17);var main=o(249),section=o(250),n=o(44).i.reduce((t,g)=>{return t[g.base.replace(/\/$/,"")]=g,t},{}),r={name:"BVSectionToc",layout:"docs",components:{Main:main.a,Section:section.a},computed:{slug(){return this.$route.path.replace(/^\//,"").split("/")[1]||""},id(){return"bd-section-toc-".concat(this.slug)},group(){return n[this.slug]||{}},groupDescription(){return this.group.description},groupTitle(){var title=this.group.title||"";return"Components"===title?"Component groups":"Misc"===title?"Miscellaneous":title||""},pages(){return this.group.pages||[]}}},c=(o(254),o(22)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Main",[o("Section",[o("h1",{staticClass:"bv-no-focus-ring",attrs:{id:t.id,tabindex:"-1"}},[o("span",{staticClass:"bd-content-title"},[t._v("\n        "+t._s(t.groupTitle)+" "),o("span",{staticClass:"small text-muted"},[t._v("- table of contents")])])]),t._v(" "),t.groupDescription?o("p",{staticClass:"bd-lead"},[t._v(t._s(t.groupDescription))]):t._e(),t._v(" "),o("b-list-group",{staticClass:"mb-5",attrs:{tag:"nav","aria-label":t.groupTitle+" section navigation"}},t._l(t.pages,(function(e){return o("b-list-group-item",{key:e.slug,attrs:{to:"/docs/"+t.slug+"/"+e.slug,"active-class":""}},[o("strong",{staticClass:"text-primary"},[t._v(t._s(e.title))]),t._v(" —\n        "),e.new?o("b-badge",{attrs:{variant:"success"}},[t._v("NEW")]):t._e(),t._v(" "),o("span",{staticClass:"text-muted"},[t._v(t._s(e.description))]),t._v(" "),e.version?o("b-badge",{attrs:{variant:"secondary"}},[t._v("v"+t._s(e.version))]):t._e()],1)})),1)],1)],1)}),[],!1,null,"4a6ea704",null);e.a=component.exports},392:function(t,e,o){"use strict";o.r(e);var n=o(255),r=o(251);e.default={name:"BVDocsMiscIndex",mixins:[r.a],extends:n.a}}}]);