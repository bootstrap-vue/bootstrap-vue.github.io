(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{249:function(t,e,o){"use strict";var r=o(7);e.a={name:"BVMain",functional:!0,props:{tag:{type:String,default:"main"}},render(t,e){var{props:o,data:data,children:n}=e;return t(o.tag,Object(r.a)(data,{staticClass:"bd-main"}),[n])}}},250:function(t,e,o){"use strict";o(17);var r=o(7),n=o(21),c=t=>{if(t&&"click"===t.type){var e=t.target&&t.target.closest?t.target.closest("a[href]"):null;if(!(!e||"click"!==t.type||e.__vue__||e.closest(".bd-example")||e.closest("pre")||t.defaultPrevented)){var o=e.getAttribute("href");o&&0===o.indexOf("/")&&0!==o.indexOf("//")?(t.preventDefault(),"undefined"!=typeof window&&window.$nuxt&&window.$nuxt.$router.push(o)):o&&0===o.indexOf("#")&&((t,e)=>{t.preventDefault(),t.stopPropagation();var o=(e||"").replace(/#/g,""),r=document.body.querySelector('[id="'.concat(o,'"]'));if(r){var c=document.scrollingElement||document.documentElement||document.body;Object(n.h)(c,Object(n.d)(r)-70,100,()=>{r.tabIndex=-1,r.focus()})}})(t,o)}}};e.a={name:"BVSection",functional:!0,props:{tag:{type:String,default:"section"},play:{type:Boolean,default:!1}},render(t,e){var{props:o,data:data,children:n}=e,l=[];return o.play&&l.push({name:"play"}),t(o.tag,Object(r.a)(data,{class:["bd-content"],directives:l,on:{click:c}}),[n])}}},251:function(t,e,o){"use strict";o(17),o(23);var r=o(21),n=o(44),c={};e.a={data:()=>({scrollTimeout:null}),computed:{content(){return this.$route.params.slug&&this._content[this.$route.params.slug]||{}},headTitle(){var t=this.$route.name,title="",section="";return this.meta&&this.meta.title&&(title=this.meta.title),/^docs-components/.test(t)?section="Components":/^docs-directives/.test(t)?section="Directives":/^docs-reference/.test(t)?section="Reference":/^docs-misc/.test(t)&&(section="Miscellaneous"),[title,section,"BootstrapVue"].filter(Boolean).join(" | ")},headMeta(){var section=this.$route.name.split("-")[1],t=section?n.i.find(t=>t.base==="".concat(section,"/")):null,e=this.meta&&this.meta.description?this.meta.description:t&&t.description?t.description:n.c,meta=[{hid:"og:title",name:"og:title",property:"og:title",content:this.headTitle}];return e&&(meta.push({hid:"description",name:"description",content:e}),meta.push({hid:"og:description",name:"og:description",property:"og:description",content:e})),meta}},mounted(){this.clearScrollTimeout(),this.focusScroll(),this.$nextTick(()=>{setTimeout(()=>{var t="".concat(this.$route.path,"_").concat(this.$route.params.slug||""),e=c[t]||(c[t]=Object(r.c)(this.readme||"",this.meta||null));this.$root.$emit("docs-set-toc",e)},1)})},updated(){this.clearScrollTimeout(),this.focusScroll()},beforeDestroy(){this.clearScrollTimeout(),this.$root.$emit("docs-set-toc",{})},methods:{clearScrollTimeout(){this.scrollTimeout&&(clearTimeout(this.scrollTimeout),this.scrollTimeout=null)},focusScroll(){var t=this.$route.hash;this.$nextTick(()=>{var e;t&&(e=this.$el.querySelector('[id="'.concat(t.replace("#",""),'"]')),this.scrollIntoView(e)),e||(e=this.$el.querySelector("h1")),e&&(e.tabIndex=-1,e.focus())})},scrollIntoView(t){if(t){var e=document.scrollingElement||document.documentElement||document.body;this.scrollTimeout=setTimeout(()=>{this.clearScrollTimeout(),Object(r.h)(e,Object(r.d)(t)-70,100)},100)}}},head(){return{title:this.headTitle,meta:this.headMeta}}}},306:function(t,e,o){var map={"./accessibility/README.md":[378,60],"./color-variants/README.md":[379,61],"./images/README.md":[380,62],"./router-links/README.md":[381,63],"./size-props/README.md":[382,64],"./spacing-classes/README.md":[383,65],"./starter-templates/README.md":[384,66],"./theming/README.md":[385,67],"./utility-classes/README.md":[386,68],"./validation/README.md":[387,69]};function r(t){if(!o.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return o.e(e[1]).then((function(){return o.t(r,7)}))}r.keys=function(){return Object.keys(map)},r.id=306,t.exports=r},397:function(t,e,o){"use strict";o.r(e);var r=o(19),n=o(249),c=o(250),l=o(251),d=o(44);e.default={name:"BDVReference",layout:"docs",mixins:[l.a],validate(t){var{params:e}=t;return Boolean(d.l[e.slug])},asyncData:t=>Object(r.a)((function*(){var e,{params:r}=t;return{readme:(yield(e=r.slug,o(306)("./".concat(e,"/README.md")))).default,meta:d.l[r.slug]}}))(),render(t){var e=t(c.a,{props:{play:!0},domProps:{innerHTML:this.readme}});return t(n.a,{staticClass:"bd-components"},[e])}}}}]);