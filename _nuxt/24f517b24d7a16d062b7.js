(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{307:function(t,e,n){"use strict";var o=n(7);e.a={name:"BVMain",functional:!0,props:{tag:{type:String,default:"main"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;return t(n.tag,Object(o.a)(data,{staticClass:"bd-main"}),[r])}}},308:function(t,e,n){"use strict";n(21);var o=n(7),r=n(26),c=function(t){if(t&&"click"===t.type){var e=t.target&&t.target.closest?t.target.closest("a[href]"):null;if(!(!e||"click"!==t.type||e.__vue__||e.closest(".bd-example")||e.closest("pre")||t.defaultPrevented)){var n=e.getAttribute("href");n&&0===n.indexOf("/")&&0!==n.indexOf("//")?(t.preventDefault(),"undefined"!=typeof window&&window.$nuxt&&window.$nuxt.$router.push(n)):n&&0===n.indexOf("#")&&function(t,e){t.preventDefault(),t.stopPropagation();var n=(e||"").replace(/#/g,""),o=document.body.querySelector('[id="'.concat(n,'"]'));if(o){var c=document.scrollingElement||document.documentElement||document.body;Object(r.h)(c,Object(r.d)(o)-70,100,(function(){o.tabIndex=-1,o.focus()}))}}(t,n)}}};e.a={name:"BVSection",functional:!0,props:{tag:{type:String,default:"section"},play:{type:Boolean,default:!1}},render:function(t,e){var n=e.props,data=e.data,r=e.children,l=[];return n.play&&l.push({name:"play"}),t(n.tag,Object(o.a)(data,{class:["bd-content"],directives:l,on:{click:c}}),[r])}}},309:function(t,e,n){"use strict";n(21),n(102),n(32),n(28);var o=n(26),r=n(65),c={};e.a={data:function(){return{scrollTimeout:null}},computed:{content:function(){return this.$route.params.slug&&this._content[this.$route.params.slug]||{}},headTitle:function(){var t=this.$route.name,title="",section="";return this.meta&&this.meta.title&&(title=this.meta.title),/^docs-components/.test(t)?section="Components":/^docs-directives/.test(t)?section="Directives":/^docs-reference/.test(t)?section="Reference":/^docs-misc/.test(t)&&(section="Miscellaneous"),[title,section,"BootstrapVue"].filter(Boolean).join(" | ")},headMeta:function(){var section=this.$route.name.split("-")[1],t=section?r.i.find((function(t){return t.base==="".concat(section,"/")})):null,e=this.meta&&this.meta.description?this.meta.description:t&&t.description?t.description:r.c,meta=[{hid:"og:title",name:"og:title",property:"og:title",content:this.headTitle}];return e&&(meta.push({hid:"description",name:"description",content:e}),meta.push({hid:"og:description",name:"og:description",property:"og:description",content:e})),meta}},mounted:function(){var t=this;this.clearScrollTimeout(),this.focusScroll(),this.$nextTick((function(){setTimeout((function(){var e="".concat(t.$route.path,"_").concat(t.$route.params.slug||""),n=c[e]||(c[e]=Object(o.c)(t.readme||"",t.meta||null));t.$root.$emit("docs-set-toc",n)}),1)}))},updated:function(){this.clearScrollTimeout(),this.focusScroll()},beforeDestroy:function(){this.clearScrollTimeout(),this.$root.$emit("docs-set-toc",{})},methods:{clearScrollTimeout:function(){this.scrollTimeout&&(clearTimeout(this.scrollTimeout),this.scrollTimeout=null)},focusScroll:function(){var t=this,e=this.$route.hash;this.$nextTick((function(){var n;e&&(n=t.$el.querySelector('[id="'.concat(e.replace("#",""),'"]')),t.scrollIntoView(n)),n||(n=t.$el.querySelector("h1")),n&&(n.tabIndex=-1,n.focus())}))},scrollIntoView:function(t){var e=this;if(t){var n=document.scrollingElement||document.documentElement||document.body;this.scrollTimeout=setTimeout((function(){e.clearScrollTimeout(),Object(o.h)(n,Object(o.d)(t)-70,100)}),100)}}},head:function(){return{title:this.headTitle,meta:this.headMeta}}}},314:function(t,e,n){"use strict";n(20);var o=n(7);e.a={name:"BVAnchoredHeading",functional:!0,props:{id:{type:String,default:""},level:{type:[Number,String],default:2}},render:function(t,e){var n=e.props,data=e.data,r=e.children,c=t("b-link",{staticClass:"anchorjs-link",props:{to:{hash:"#".concat(n.id)}},attrs:{"aria-labelledby":n.id||null,"aria-label":n.id?null:"Anchor"}},[t()]),l=t("span",{staticClass:"bd-content-title"},[r,c]);return t("h".concat(n.level),Object(o.a)(data,{staticClass:"bv-no-focus-ring",attrs:{id:n.id,tabindex:"-1"}}),[l])}}},321:function(t,e,n){var o=n(345);t.exports=function(t){return null==t?"":o(t)}},324:function(t,e,n){"use strict";var o=n(23),r=(n(21),n(28),n(339)),c=n.n(r),l=n(118),f=n(26),d=n(314),m={name:"BVImportdoc",components:{AnchoredHeading:d.a},props:{meta:{}},computed:{importPath:function(){return"bootstrap-vue"},isComponentRoute:function(){var t=this.$route.name;return"docs-components-slug"===t||"docs-icons"===t},pluginDir:function(){return this.$route.params.slug||this.meta.slug},pluginName:function(){var t=this.isComponentRoute?"":"VB";return"".concat(t).concat(c()(this.pluginDir).replace(/\s+/g,""),"Plugin")},componentImports:function(){var t=this;return this.components.map((function(e){return{component:t.componentTag(e),namedExport:e,importPath:t.importPath}}))},directiveImports:function(){var t=this;return this.directives.map((function(e){return{directive:t.directiveAttr(e),namedExport:e,importPath:t.importPath}}))},pluginImports:function(){return[{namedExport:this.pluginName,importPath:this.importPath}]},components:function(){var t=[];return this.meta.components&&(t=this.meta.components.map((function(t){return t.component}))),[].concat(this.meta.component,t).filter((function(t){return t}))},directives:function(){return[].concat(this.meta.directive,this.meta.directives).filter((function(t){return t})).map((function(t){return"string"==typeof t?t:t.directive}))},componentImportCode:function(){var t=this.components[0],e=this.componentImports[0];return["import { ".concat(t," } from '").concat(e.importPath,"'"),"Vue.component('".concat(this.componentName(t),"', ").concat(t,")")].join("\n")},directiveImportCode:function(){var t=this.directives[0];return["import { ".concat(t," } from '").concat("bootstrap-vue","'"),"// Note: Vue automatically prefixes the directive name with 'v-'","Vue.directive('".concat(this.directiveName(t),"', ").concat(t,")")].join("\n")},pluginImportCode:function(){return["import { ".concat(this.pluginName," } from 'bootstrap-vue'"),"Vue.use(".concat(this.pluginName,")")].join("\n")}},mounted:function(){Object(o.a)(this.$el.querySelectorAll("pre.hljs")).forEach((function(pre){l.a.highlightBlock(pre)}))},methods:{componentName:function(component){return Object(f.b)(component).replace("{","-{")},componentTag:function(component){return"<".concat(this.componentName(component),">")},directiveName:function(t){return Object(f.b)(t).replace(/^v-/,"").replace(/^vb-/,"b-")},directiveAttr:function(t){return Object(f.b)(t).replace(/^vb-/,"v-b-")}}},v=n(29),h=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.components.length>0||t.directives.length>0?n("section",{staticClass:"bd-content"},[t.components.length>0?[n("article",{staticClass:"bd-content"},[n("anchored-heading",{attrs:{id:"importing-individual-components",level:"3"}},[t._v("\n        Importing individual components\n      ")]),t._v(" "),n("p",[t._v("\n        You can import individual components into your project via the following named\n        exports:\n      ")]),t._v(" "),n("b-table",{attrs:{items:t.componentImports,"table-class":"bv-docs-table",responsive:"sm","head-variant":"default",striped:""},scopedSlots:t._u([{key:"cell(component)",fn:function(e){var o=e.value;return[n("code",{staticClass:"text-nowrap notranslate",attrs:{translate:"no"}},[t._v(t._s(o))])]}},{key:"cell(namedExport)",fn:function(e){var o=e.value;return[n("code",{staticClass:"text-nowrap notranslate",attrs:{translate:"no"}},[t._v(t._s(o))])]}},{key:"cell(importPath)",fn:function(e){var o=e.value;return[n("code",{staticClass:"text-nowrap notranslate",attrs:{translate:"no"}},[t._v(t._s(o))])]}}],null,!1,4171270198)}),t._v(" "),t._m(0),t._v(" "),n("pre",{staticClass:"hljs language-js text-monospace p-2 notranslate",attrs:{translate:"no"}},[t._v(t._s(t.componentImportCode))])],1)]:t._e(),t._v(" "),t.directives.length>0?[n("article",{staticClass:"bd-content"},[n("anchored-heading",{attrs:{id:"importing-individual-directives",level:"3"}},[t._v("\n        Importing individual directives\n      ")]),t._v(" "),n("p",[t._v("\n        You can import individual directives into your project via the following named\n        exports:\n      ")]),t._v(" "),n("b-table",{attrs:{items:t.directiveImports,"table-class":"bv-docs-table",responsive:"sm","head-variant":"default",striped:""},scopedSlots:t._u([{key:"cell(directive)",fn:function(e){var o=e.value;return[n("code",{staticClass:"text-nowrap notranslate",attrs:{translate:"no"}},[t._v(t._s(o))])]}},{key:"cell(namedExport)",fn:function(e){var o=e.value;return[n("code",{staticClass:"text-nowrap notranslate",attrs:{translate:"no"}},[t._v(t._s(o))])]}},{key:"cell(importPath)",fn:function(e){var o=e.value;return[n("code",{staticClass:"text-nowrap notranslate",attrs:{translate:"no"}},[t._v(t._s(o))])]}}],null,!1,1188869902)}),t._v(" "),t._m(1),t._v(" "),n("pre",{staticClass:"hljs language-js text-monospace p-2 notranslate",attrs:{translate:"no"}},[t._v(t._s(t.directiveImportCode))])],1)]:t._e(),t._v(" "),n("article",{staticClass:"bd-content"},[n("anchored-heading",{attrs:{id:"importing-as-a-plugin",level:"3"}},[t._v("\n      Importing as a Vue.js plugin\n    ")]),t._v(" "),t.isComponentRoute?n("p",[t._v("\n      This plugin includes all of the above listed individual\n      components"),t.directives.length?n("span",[t._v(" and directives")]):t._e(),t._v(".\n      Plugins also include any component aliases.\n    ")]):n("p",[t._v("\n      This plugin includes all of the above listed individual directives.\n    ")]),t._v(" "),n("b-table",{attrs:{items:t.pluginImports,fileds:["namedExport","importPath"],"table-class":"bv-docs-table",responsive:"sm","head-variant":"default","caption-top":"",striped:""},scopedSlots:t._u([{key:"cell(namedExport)",fn:function(e){var o=e.value;return[n("code",{staticClass:"text-nowrap notranslate",attrs:{translate:"no"}},[t._v(t._s(o))])]}},{key:"cell(importPath)",fn:function(e){var o=e.value;return[n("code",{staticClass:"text-nowrap notranslate",attrs:{translate:"no"}},[t._v(t._s(o))])]}}],null,!1,1384809790)}),t._v(" "),t.meta.plugins&&t.meta.plugins.length>0?[n("p",[t._v("This plugin also automatically includes the following plugins:")]),t._v(" "),n("ul",t._l(t.meta.plugins,(function(e){return n("li",{key:e},[n("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v(t._s(e))])])})),0)]:t._e(),t._v(" "),t._m(2),t._v(" "),n("pre",{staticClass:"hljs language-js text-monospace p-2 notranslate",attrs:{translate:"no"}},[t._v(t._s(t.pluginImportCode))])],2)],2):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Example:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Example:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Example:")])])}],!1,null,null,null);e.a=h.exports},325:function(t,e){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function(t){return n.test(t)}},339:function(t,e,n){var o=n(340),r=n(352),c=o((function(t,e,n){return t+(n?" ":"")+r(e)}));t.exports=c},340:function(t,e,n){var o=n(341),r=n(342),c=n(348),l=RegExp("['’]","g");t.exports=function(t){return function(e){return o(c(r(e).replace(l,"")),t,"")}}},341:function(t,e){t.exports=function(t,e,n,o){var r=-1,c=null==t?0:t.length;for(o&&c&&(n=t[++r]);++r<c;)n=e(n,t[r],r,t);return n}},342:function(t,e,n){var o=n(343),r=n(321),c=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=r(t))&&t.replace(c,o).replace(l,"")}},343:function(t,e,n){var o=n(344)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=o},344:function(t,e){t.exports=function(object){return function(t){return null==object?void 0:object[t]}}},345:function(t,e,n){var o=n(124),r=n(346),c=n(347),l=n(177),f=1/0,d=o?o.prototype:void 0,m=d?d.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(c(e))return r(e,t)+"";if(l(e))return m?m.call(e):"";var n=e+"";return"0"==n&&1/e==-f?"-0":n}},346:function(t,e){t.exports=function(t,e){for(var n=-1,o=null==t?0:t.length,r=Array(o);++n<o;)r[n]=e(t[n],n,t);return r}},347:function(t,e){var n=Array.isArray;t.exports=n},348:function(t,e,n){var o=n(349),r=n(350),c=n(321),l=n(351);t.exports=function(t,pattern,e){return t=c(t),void 0===(pattern=e?void 0:pattern)?r(t)?l(t):o(t):t.match(pattern)||[]}},349:function(t,e){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(n)||[]}},350:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},351:function(t,e){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+n+"]",r="\\d+",c="[\\u2700-\\u27bf]",l="[a-z\\xdf-\\xf6\\xf8-\\xff]",f="[^\\ud800-\\udfff"+n+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",v="[A-Z\\xc0-\\xd6\\xd8-\\xde]",h="(?:"+l+"|"+f+")",x="(?:"+v+"|"+f+")",_="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?"+_+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",d,m].join("|")+")[\\ufe0e\\ufe0f]?"+_+")*"),j="(?:"+[c,d,m].join("|")+")"+y,E=RegExp([v+"?"+l+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,v,"$"].join("|")+")",x+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,v+h,"$"].join("|")+")",v+"?"+h+"+(?:['’](?:d|ll|m|re|s|t|ve))?",v+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,j].join("|"),"g");t.exports=function(t){return t.match(E)||[]}},352:function(t,e,n){var o=n(353)("toUpperCase");t.exports=o},353:function(t,e,n){var o=n(354),r=n(325),c=n(356),l=n(321);t.exports=function(t){return function(e){e=l(e);var n=r(e)?c(e):void 0,f=n?n[0]:e.charAt(0),d=n?o(n,1).join(""):e.slice(1);return f[t]()+d}}},354:function(t,e,n){var o=n(355);t.exports=function(t,e,n){var r=t.length;return n=void 0===n?r:n,!e&&n>=r?t:o(t,e,n)}},355:function(t,e){t.exports=function(t,e,n){var o=-1,r=t.length;e<0&&(e=-e>r?0:r+e),(n=n>r?r:n)<0&&(n+=r),r=e>n?0:n-e>>>0,e>>>=0;for(var c=Array(r);++o<r;)c[o]=t[o+e];return c}},356:function(t,e,n){var o=n(357),r=n(325),c=n(358);t.exports=function(t){return r(t)?c(t):o(t)}},357:function(t,e){t.exports=function(t){return t.split("")}},358:function(t,e){var n="[\\ud800-\\udfff]",o="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\\ud83c[\\udffb-\\udfff]",c="[^\\ud800-\\udfff]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",d="(?:"+o+"|"+r+")"+"?",m="[\\ufe0e\\ufe0f]?"+d+("(?:\\u200d(?:"+[c,l,f].join("|")+")[\\ufe0e\\ufe0f]?"+d+")*"),v="(?:"+[c+o+"?",o,l,f,n].join("|")+")",h=RegExp(r+"(?="+r+")|"+v+m,"g");t.exports=function(t){return t.match(h)||[]}}}]);