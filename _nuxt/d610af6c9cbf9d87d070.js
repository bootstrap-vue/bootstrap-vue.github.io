(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{238:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__),vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7),vue__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_4__),lodash_debounce__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(91),lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__),codesandbox_lib_api_define__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(254),codesandbox_lib_api_define__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(codesandbox_lib_api_define__WEBPACK_IMPORTED_MODULE_6__),_utils_needs_transpiler__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(93),_content__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(40),_content__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(30),_content__WEBPACK_IMPORTED_MODULE_9___namespace=__webpack_require__.t(30,1),_components_codemirror__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(257);function ownKeys(object,t){var e=Object.keys(object);return Object.getOwnPropertySymbols&&e.push.apply(e,Object.getOwnPropertySymbols(object)),t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e}function _objectSpread(t){for(var i=1;i<arguments.length;i++)if(i%2){var source=null!=arguments[i]?arguments[i]:{};ownKeys(source,!0).forEach(function(e){Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.a)(t,e,source[e])})}else Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[i])):ownKeys(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(arguments[i],e))});return t}var DEFAULT_HTML='<div>\n  <b-button size="sm" @click="toggle">\n    {{ show ? \'Hide\' : \'Show\' }} Alert\n  </b-button>\n  <b-alert\n    v-model="show"\n    class="mt-3"\n    dismissible\n    @dismissed="dismissed"\n  >\n    Hello {{ name }}!\n  </b-alert>\n</div>',DEFAULT_JS="{\n  data() {\n    return {\n      name: 'BootstrapVue',\n      show: true\n    }\n  },\n  watch: {\n    show(newVal) {\n      console.log('Alert is now ' + (newVal ? 'visible' : 'hidden'))\n    }\n  },\n  methods: {\n    toggle() {\n      console.log('Toggle button clicked')\n      this.show = !this.show\n    },\n    dismissed() {\n      console.log('Alert dismissed')\n    }\n  }\n}",storage="undefined"!=typeof window&&window.localStorage||null,STORAGE_KEY_PREFIX="BV_playground",STORAGE_KEYS={html:"".concat(STORAGE_KEY_PREFIX,"_html"),js:"".concat(STORAGE_KEY_PREFIX,"_js"),layout:"".concat(STORAGE_KEY_PREFIX,"_layout"),timestamp:"".concat(STORAGE_KEY_PREFIX,"_ts")},STORAGE_MAX_RETENTION=6048e5,removeNode=t=>t&&t.parentNode&&t.parentNode.removeChild(t),indent=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,{indent:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{indent:" "};return 0===e?t:t.replace(/^(?!\s*$)/gm,r.repeat(e))};__webpack_exports__.a={components:{"code-mirror":_components_codemirror__WEBPACK_IMPORTED_MODULE_10__.a},data:()=>({html:"",js:"",compiledJs:null,logIdx:1,messages:[],vertical:!1,full:!1,isOk:!1,loading:!1,ready:!1,compiling:!1,building:!1}),head(){var title="".concat(this.title," | BootstrapVue"),t="Interactively play and test BootstrapVue components online.";return{title:title,meta:[{hid:"og:title",name:"og:title",property:"og:title",content:title},{hid:"og:description",name:"og:description",property:"og:description",content:t},{hid:"description",name:"description",content:t}]}},computed:{title:()=>"Online Playground",isDefault(){return this.js.trim()===DEFAULT_JS.trim()&&this.html.trim()===DEFAULT_HTML.trim()},isBusy(){return this.compiling||this.building||this.loading||!this.ready},needsTranspiler:()=>_utils_needs_transpiler__WEBPACK_IMPORTED_MODULE_7__.a,appData(){return{html:this.html.trim(),js:this.compiledJs}},layout(){return this.full?"full":this.vertical?"vertical":"horizontal"},exportData(){var html=this.html.trim(),t=this.js.trim()||"{}",e="{}"===t?"{ el: '#app' }":t.replace(/^\{/,"{\r\n  el: '#app',");return e="new Vue(".concat(e,")"),e="window.onload = () => {\r\n".concat(indent(e,2),"\r\n}"),{html:html,js:t,css:"body { padding: 1rem; }",extendedHtml:'<div id="app">\r\n'.concat(indent(html,2),"\r\n</div>"),extendedJs:e,externalCss:["//unpkg.com/bootstrap@".concat(_content__WEBPACK_IMPORTED_MODULE_8__.a,"/dist/css/bootstrap.min.css"),"//unpkg.com/bootstrap-vue@".concat(_content__WEBPACK_IMPORTED_MODULE_9__.d,"/dist/bootstrap-vue.css")],externalJs:["//unpkg.com/babel-polyfill/dist/polyfill.min.js","//unpkg.com/vue@".concat(_content__WEBPACK_IMPORTED_MODULE_8__.k,"/dist/vue.min.js"),"//unpkg.com/bootstrap-vue@".concat(_content__WEBPACK_IMPORTED_MODULE_9__.d,"/dist/bootstrap-vue.js")]}},codepenData(){var{css:t,extendedHtml:e,extendedJs:r,externalCss:n,externalJs:o}=this.exportData,data={editors:"101",layout:"left",html_pre_processor:"none",css_pre_processor:"none",css_prefix:"autoprefixer",js_pre_processor:"babel",head:'<meta name="viewport" content="width=device-width">',css_external:n.join(";"),js_external:o.join(";"),html:e,js:r,css:t};return JSON.stringify(data)},codesandboxData(){var{html:html,js:t,css:e}=this.exportData,r=["<template>",indent(html,2),"</template>","","<style>",indent(e,2),"</style>","","<script>",indent("export default ".concat(t),2),"<\/script>"].join("\r\n").replace(/\\\//g,"/"),n=["import Vue from 'vue'","import BootstrapVue from 'bootstrap-vue'","import App from './App'","","import 'bootstrap/dist/css/bootstrap.css'","import 'bootstrap-vue/dist/bootstrap-vue.css'","","Vue.use(BootstrapVue)","","new Vue({ el: '#app', render: h => h(App) })"].join("\r\n"),o={bootstrap:_content__WEBPACK_IMPORTED_MODULE_8__.a,"bootstrap-vue":_content__WEBPACK_IMPORTED_MODULE_9__.d,vue:_content__WEBPACK_IMPORTED_MODULE_8__.k};return Object(codesandbox_lib_api_define__WEBPACK_IMPORTED_MODULE_6__.getParameters)({files:{"App.vue":{content:r},"index.html":{content:'<div id="app"></div>'},"index.js":{content:n},"package.json":{content:{dependencies:o}}}})},fakeConsole(){var t,e,r,n,o,l,_=this.log,c=this.clear;try{t=window.console,e=window.console.info,r=window.console.log,n=window.console.warn,o=window.console.error,l=window.console.clear}catch(t){}return{info:function(){try{_("info",...arguments),e.apply(t,arguments)}catch(t){}},log:function(){try{_("info",...arguments),r.apply(t,arguments)}catch(t){}},warn:function(){try{_("warning",...arguments),n.apply(t,arguments)}catch(t){}},error:function(){try{_("danger",...arguments),o.apply(t,arguments)}catch(t){}},clear:function(){try{c(),l.apply(t)}catch(t){}}}}},watch:{layout(t,e){t!==e&&this.saveToStorage()}},created(){this.playVM=null,this.contentUnWatch=null,this.jsUnWatch=null,this.run=()=>{},this.compileJs=()=>{},this.compiler=code=>code},beforeMount(){this.loadFromStorage()},mounted(){this.loading=_utils_needs_transpiler__WEBPACK_IMPORTED_MODULE_7__.a,_utils_needs_transpiler__WEBPACK_IMPORTED_MODULE_7__.a?this.$nextTick(()=>{this.$nuxt&&this.$nuxt.$loading&&this.$nuxt.$loading.start(),Promise.all([__webpack_require__.e(1),__webpack_require__.e(0)]).then(__webpack_require__.bind(null,226)).then(t=>{this.compiler=t.default||t,this.loading=!1,this.$nuxt&&this.$nuxt.$loading&&this.$nuxt.$loading.finish(),this.doSetup(750)})}):this.doSetup()},beforeDestroy(){this.jsUnWatch&&this.jsUnWatch(),this.contentUnWatch&&this.contentUnWatch(),this.$isServer||this.destroyVM()},methods:{doSetup(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;this.run=lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(this._run,500),this.compileJs=lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(this._compileJs,t),this.$nextTick(()=>{this.contentUnWatch=this.$watch("appData",(t,e)=>{this.run()},{deep:!0}),this.jsUnWatch=this.$watch(()=>this.js.trim(),(t,e)=>{this.compileJs()},{immediate:!0}),this.ready=!0})},destroyVM(){var t=this.playVM;if(t){var e;try{e=t.$parent,t.$destroy(),removeNode(t.$el),t.$el.innerHTML=""}catch(t){}try{e.$destroy()}catch(t){}}this.playVM=t=null,this.$refs.result.innerHTML=""},createVM(){var playground=this,js=this.compiledJs,html=this.html.trim();if(this.isOk=!1,null!==js){var options={};try{eval("var console = this.fakeConsole; ".concat(js))}catch(t){return this.errHandler(t,"javascript"),void window.console.error("Error in javascript",t)}if(html||"string"==typeof options.template||"function"==typeof options.render)if(html||"string"!=typeof options.template||"#"!==options.template.charAt(0))if(options.el)this.errHandler('Do not set "el" property',"javascript");else if(options.render&&"function"!=typeof options.render)this.errHandler("render must be a function","javascript");else{options.render?delete options.template:options.template='<div id="playground-app">'.concat(options.template||html,"</div>"),options.methods&&Object.keys(options.methods).forEach(t=>{var e=options.methods[t];"function"!=typeof e?this.errorHandler("TypeError: ".concat(t," is not a function"),"methods"):options.methods[t]=function(){try{return e.apply(this,arguments)}catch(e){playground.errHandler(e,'method "'.concat(t,'"'))}}});try{var holder=document.createElement("div");this.$refs.result.appendChild(holder),this.playVM=new vue__WEBPACK_IMPORTED_MODULE_4___default.a(_objectSpread({},options,{el:holder,router:this.$router,parent:new vue__WEBPACK_IMPORTED_MODULE_4___default.a({template:"<span></span>",errorCaptured:(t,e,r)=>(playground.errHandler(t,r),!1)})}))}catch(t){return this.destroyVM(),void this.errHandler(t,"app create")}this.isOk=!0,this.saveToStorage()}else this.errHandler("Do not set template to an element ID","template");else this.errHandler("No template or render function provided","template")}},errHandler(t,e){this.log("danger","Error in ".concat(e,": ").concat(String(t))),this.destroyVM()},_compileJs(){if(this.$isServer)this.compiledJs=null;else{var t=this.js.trim()||"{}";this.compiling=!0;var e=null;this.$nextTick(()=>{this.requestAF(()=>{try{e=this.compiler(";options = ".concat(t,";"))}catch(t){this.errHandler(t,"javascript"),window.console.error("Error in javascript",t),e=null}this.compiledJs=e,this.$nextTick(()=>{this.compiling=!1})})})}},_run(){this.$isServer||(this.building=!0,this.destroyVM(),this.clear(),this.requestAF(()=>{this.createVM(),this.$nextTick(()=>{this.building=!1})}))},toggleVertical(){this.vertical=!this.vertical},toggleFull(){this.full=!this.full},log(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];if(-1===String(r[0]).indexOf("Avoid mutating a prop directly")){var o=r.map(String).join(" ");this.messages.length&&-1!==o.indexOf("Error in render")&&o===this.messages[0][1]||(this.messages.length>10&&this.messages.splice(10),this.messages.unshift([t,o,this.logIdx++]))}},clear(){this.logIdx=1,this.messages.splice(0)},reset(){this.$bvModal.msgBoxConfirm("Are you sure that you want to reset to the playground to the default values?",{title:"Please Confirm Reset",size:"sm",buttonSize:"sm",okTitle:"YES",cancelTitle:"NO",titleTag:"h6",headerClass:"p-2",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then(t=>{t&&this.doReset()}).catch(t=>{console.log(t)})},doReset(){this.js=this.html="",this.$nextTick(()=>{this.js=DEFAULT_JS.trim(),this.html=DEFAULT_HTML.trim(),this.saveToStorage()})},clearStorage(){storage&&Object.keys(STORAGE_KEYS).forEach(t=>{storage.removeItem(t)})},loadFromStorage(){if(!storage)return this.js=DEFAULT_JS.trim(),void(this.html=DEFAULT_HTML.trim());var t=parseInt(storage.getItem(STORAGE_KEYS.timestamp),10)||0;Date.now()-t>STORAGE_MAX_RETENTION&&this.clearStorage(),this.html=storage.getItem(STORAGE_KEYS.html)||DEFAULT_HTML.trim(),this.js=storage.getItem(STORAGE_KEYS.js)||DEFAULT_JS.trim();var e=storage.getItem(STORAGE_KEYS.layout)||"horizontal";"full"===e?this.full=!0:"vertical"===e?(this.vertical=!0,this.full=!1):"horizontal"===e&&(this.vertical=!1,this.full=!1)},saveToStorage(){if(storage)try{storage.setItem(STORAGE_KEYS.html,this.html),storage.setItem(STORAGE_KEYS.js,this.js),storage.setItem(STORAGE_KEYS.layout,this.layout),storage.setItem(STORAGE_KEYS.timestamp,String(Date.now()))}catch(t){}},requestAF(t){var e="undefined"==typeof window?{}:window;return(e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||e.oRequestAnimationFrame||(t=>setTimeout(t,16)))(t)}}}},239:function(t,e,r){},254:function(t,e,r){"use strict";e.__esModule=!0;var n=r(255);e.getParameters=n.getParameters},255:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(256);e.getParameters=function(t){return input=JSON.stringify(t),n.compressToBase64(input).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");var input}},256:function(t,e,r){var n,o=function(){var t=String.fromCharCode,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={};function o(t,e){if(!n[t]){n[t]={};for(var i=0;i<t.length;i++)n[t][t.charAt(i)]=i}return n[t][e]}var l={compressToBase64:function(input){if(null==input)return"";var t=l._compress(input,6,function(a){return e.charAt(a)});switch(t.length%4){default:case 0:return t;case 1:return t+"===";case 2:return t+"==";case 3:return t+"="}},decompressFromBase64:function(input){return null==input?"":""==input?null:l._decompress(input.length,32,function(t){return o(e,input.charAt(t))})},compressToUTF16:function(input){return null==input?"":l._compress(input,15,function(a){return t(a+32)})+" "},decompressFromUTF16:function(t){return null==t?"":""==t?null:l._decompress(t.length,16384,function(e){return t.charCodeAt(e)-32})},compressToUint8Array:function(t){for(var e=l.compress(t),r=new Uint8Array(2*e.length),i=0,n=e.length;i<n;i++){var o=e.charCodeAt(i);r[2*i]=o>>>8,r[2*i+1]=o%256}return r},decompressFromUint8Array:function(e){if(null==e)return l.decompress(e);for(var r=new Array(e.length/2),i=0,n=r.length;i<n;i++)r[i]=256*e[2*i]+e[2*i+1];var o=[];return r.forEach(function(e){o.push(t(e))}),l.decompress(o.join(""))},compressToEncodedURIComponent:function(input){return null==input?"":l._compress(input,6,function(a){return r.charAt(a)})},decompressFromEncodedURIComponent:function(input){return null==input?"":""==input?null:(input=input.replace(/ /g,"+"),l._decompress(input.length,32,function(t){return o(r,input.charAt(t))}))},compress:function(e){return l._compress(e,16,function(a){return t(a)})},_compress:function(t,e,r){if(null==t)return"";var i,n,o,l={},_={},c="",d="",h="",m=2,f=3,v=2,E=[],y=0,O=0;for(o=0;o<t.length;o+=1)if(c=t.charAt(o),Object.prototype.hasOwnProperty.call(l,c)||(l[c]=f++,_[c]=!0),d=h+c,Object.prototype.hasOwnProperty.call(l,d))h=d;else{if(Object.prototype.hasOwnProperty.call(_,h)){if(h.charCodeAt(0)<256){for(i=0;i<v;i++)y<<=1,O==e-1?(O=0,E.push(r(y)),y=0):O++;for(n=h.charCodeAt(0),i=0;i<8;i++)y=y<<1|1&n,O==e-1?(O=0,E.push(r(y)),y=0):O++,n>>=1}else{for(n=1,i=0;i<v;i++)y=y<<1|n,O==e-1?(O=0,E.push(r(y)),y=0):O++,n=0;for(n=h.charCodeAt(0),i=0;i<16;i++)y=y<<1|1&n,O==e-1?(O=0,E.push(r(y)),y=0):O++,n>>=1}0==--m&&(m=Math.pow(2,v),v++),delete _[h]}else for(n=l[h],i=0;i<v;i++)y=y<<1|1&n,O==e-1?(O=0,E.push(r(y)),y=0):O++,n>>=1;0==--m&&(m=Math.pow(2,v),v++),l[d]=f++,h=String(c)}if(""!==h){if(Object.prototype.hasOwnProperty.call(_,h)){if(h.charCodeAt(0)<256){for(i=0;i<v;i++)y<<=1,O==e-1?(O=0,E.push(r(y)),y=0):O++;for(n=h.charCodeAt(0),i=0;i<8;i++)y=y<<1|1&n,O==e-1?(O=0,E.push(r(y)),y=0):O++,n>>=1}else{for(n=1,i=0;i<v;i++)y=y<<1|n,O==e-1?(O=0,E.push(r(y)),y=0):O++,n=0;for(n=h.charCodeAt(0),i=0;i<16;i++)y=y<<1|1&n,O==e-1?(O=0,E.push(r(y)),y=0):O++,n>>=1}0==--m&&(m=Math.pow(2,v),v++),delete _[h]}else for(n=l[h],i=0;i<v;i++)y=y<<1|1&n,O==e-1?(O=0,E.push(r(y)),y=0):O++,n>>=1;0==--m&&(m=Math.pow(2,v),v++)}for(n=2,i=0;i<v;i++)y=y<<1|1&n,O==e-1?(O=0,E.push(r(y)),y=0):O++,n>>=1;for(;;){if(y<<=1,O==e-1){E.push(r(y));break}O++}return E.join("")},decompress:function(t){return null==t?"":""==t?null:l._decompress(t.length,32768,function(e){return t.charCodeAt(e)})},_decompress:function(e,r,n){var i,o,l,_,c,d,h,m=[],f=4,v=4,E=3,y="",O=[],data={val:n(0),position:r,index:1};for(i=0;i<3;i+=1)m[i]=i;for(l=0,c=Math.pow(2,2),d=1;d!=c;)_=data.val&data.position,data.position>>=1,0==data.position&&(data.position=r,data.val=n(data.index++)),l|=(_>0?1:0)*d,d<<=1;switch(l){case 0:for(l=0,c=Math.pow(2,8),d=1;d!=c;)_=data.val&data.position,data.position>>=1,0==data.position&&(data.position=r,data.val=n(data.index++)),l|=(_>0?1:0)*d,d<<=1;h=t(l);break;case 1:for(l=0,c=Math.pow(2,16),d=1;d!=c;)_=data.val&data.position,data.position>>=1,0==data.position&&(data.position=r,data.val=n(data.index++)),l|=(_>0?1:0)*d,d<<=1;h=t(l);break;case 2:return""}for(m[3]=h,o=h,O.push(h);;){if(data.index>e)return"";for(l=0,c=Math.pow(2,E),d=1;d!=c;)_=data.val&data.position,data.position>>=1,0==data.position&&(data.position=r,data.val=n(data.index++)),l|=(_>0?1:0)*d,d<<=1;switch(h=l){case 0:for(l=0,c=Math.pow(2,8),d=1;d!=c;)_=data.val&data.position,data.position>>=1,0==data.position&&(data.position=r,data.val=n(data.index++)),l|=(_>0?1:0)*d,d<<=1;m[v++]=t(l),h=v-1,f--;break;case 1:for(l=0,c=Math.pow(2,16),d=1;d!=c;)_=data.val&data.position,data.position>>=1,0==data.position&&(data.position=r,data.val=n(data.index++)),l|=(_>0?1:0)*d,d<<=1;m[v++]=t(l),h=v-1,f--;break;case 2:return O.join("")}if(0==f&&(f=Math.pow(2,E),E++),m[h])y=m[h];else{if(h!==v)return null;y=o+o.charAt(0)}O.push(y),m[v++]=o+y.charAt(0),o=y,0==--f&&(f=Math.pow(2,E),E++)}}};return l}();void 0===(n=function(){return o}.call(e,r,e,t))||(t.exports=n)},257:function(t,e,r){"use strict";e.a={name:"CodeMirror",props:{value:{type:String,default:""},mode:{type:[String,Object],default:""},theme:{type:String,default:"default"},tabMode:{type:String,default:"indent"},tabSize:{type:[Number,String],default:2},lineWrapping:{type:Boolean,default:!0},lineNumbers:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1}},data:()=>({CM:null}),computed:{componentData:()=>({staticClass:"notranslate m-0 p-0",style:{minHeight:"300px"},attrs:{translate:"no"}})},watch:{value(t,e){e&&""!==e||this.CM.setValue(t)}},mounted(){Promise.all([r.e(73),r.e(3)]).then(r.bind(null,265)).then(t=>{var e=t.default||t;this.CM=e.fromTextArea(this.$refs.input,{mode:this.mode,theme:this.theme,tabMode:this.tabMode,tabSize:parseInt(this.tabSize,10)||2,lineWrapping:this.lineWrapping,lineNumbers:this.lineNumbers,autoCloseTags:!0,autoCloseBrackets:!0,readOnly:this.readOnly}),this.CM.on("changes",()=>{this.$emit("input",this.CM.getValue())}),this.$nextTick(()=>{this.$nextTick(()=>{this.CM.setValue(this.value)})})})},beforeDestroy(){this.CM&&this.CM.toTextArea(),this.CM=null},render(t){return t("div",this.componentData,[t("textarea",{ref:"input",staticClass:"w-100 border-0",style:{minWidth:"100px"},props:{value:this.value}})])}}},258:function(t,e,r){"use strict";var n=r(239);r.n(n).a},343:function(t,e,r){"use strict";r.r(e);var n=r(238).a,o=(r(258),r(12)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"pb-5",attrs:{fluid:"",tag:"main"}},[r("div",{staticClass:"bd-content mb-4"},[r("h1",[r("span",{staticClass:"bd-content-title"},[t._v(t._s(t.title))])]),t._v(" "),r("p",{staticClass:"bd-lead"},[t._v("\n      Here you can interactively play and test components with a fresh Vue.js instance. Please\n      refer to the "),r("b-link",{attrs:{to:"/docs"}},[t._v("Docs")]),t._v(" section for more information about\n      available components and usage.\n    ")],1)]),t._v(" "),t.loading?r("b-row",[r("b-col",{staticClass:"mb-2 mb-md-0"},[r("b-alert",{staticClass:"text-center",attrs:{variant:"info",show:""}},[t._v("\n        Loading JavaScript compiler...\n      ")])],1)],1):t._e(),t._v(" "),t.ready&&t.needsTranspiler?r("b-container",[r("b-row",[r("b-col",[r("b-alert",{staticClass:"mb-3",attrs:{variant:"info",show:"",fade:"",dismissible:""}},[t._v("\n          Your browser does not support modern ES6 JavaScript syntax. However, the code in the\n          JavaScipt editor will be transpiled to work with your browser, except for any ES6 code\n          that is in the Template editor (i.e. destructuring, arrow functions, etc.)\n        ")])],1)],1)],1):t._e(),t._v(" "),r("b-row",[r("b-col",{staticClass:"mb-2 mb-md-0"},[r("b-btn",{attrs:{size:"sm",variant:"danger",disabled:t.isDefault||t.isBusy},on:{click:t.reset}},[t._v("\n        Reset to default\n      ")])],1),t._v(" "),r("b-col",{staticClass:"mt-2 mt-md-0",attrs:{md:"auto"}},[r("b",{staticClass:"d-block d-sm-inline-block mr-sm-2 mb-1 mb-sm-0"},[t._v("Export to")]),t._v(" "),r("b-form",{staticClass:"d-inline-block mr-1 notranslate",attrs:{translate:"no",method:"post",action:"https://codepen.io/pen/define",target:"_blank"}},[r("input",{attrs:{type:"hidden",name:"data"},domProps:{value:t.codepenData}}),t._v(" "),r("b-btn",{attrs:{size:"sm",type:"submit",disabled:!t.isOk||t.isBusy}},[t._v("CodePen")])],1),t._v(" "),r("b-form",{staticClass:"d-inline-block mr-1 notranslate",attrs:{translate:"no",method:"post",action:"https://codesandbox.io/api/v1/sandboxes/define",target:"_blank"}},[r("input",{attrs:{type:"hidden",name:"parameters"},domProps:{value:t.codesandboxData}}),t._v(" "),r("b-btn",{attrs:{size:"sm",type:"submit",disabled:!t.isOk||t.isBusy}},[t._v("CodeSandbox")])],1),t._v(" "),r("b-form",{staticClass:"d-inline-block notranslate",attrs:{translate:"no",method:"post",action:"https://jsfiddle.net/api/post/library/pure/",target:"_blank"}},[r("input",{attrs:{type:"hidden",name:"html"},domProps:{value:t.exportData.extendedHtml}}),t._v(" "),r("input",{attrs:{type:"hidden",name:"js"},domProps:{value:t.exportData.extendedJs}}),t._v(" "),r("input",{attrs:{type:"hidden",name:"resources"},domProps:{value:t.exportData.externalCss.concat([t.exportData.externalJs]).join(",")}}),t._v(" "),r("input",{attrs:{type:"hidden",name:"css"},domProps:{value:t.exportData.css}}),t._v(" "),r("input",{attrs:{type:"hidden",name:"js_wrap",value:"l"}}),t._v(" "),r("b-btn",{attrs:{size:"sm",type:"submit",disabled:!t.isOk||t.isBusy}},[t._v("JSFiddle")])],1)],1)],1),t._v(" "),r("transition-group",{staticClass:"row",attrs:{tag:"div",name:"flip"}},[r("b-col",{key:"A",attrs:{cols:t.full?12:null}},[r("transition-group",{staticClass:"row",attrs:{tag:"div",name:"flip"}},[r("b-col",{key:"A1",staticClass:"mt-3",attrs:{md:t.vertical&&!t.full?6:12,sm:"12"}},[r("b-card",{attrs:{"no-body":"","header-tag":"header"}},[r("div",{staticClass:"d-flex justify-content-between align-items-center",attrs:{slot:"header"},slot:"header"},[r("h5",{staticClass:"mb-0"},[r("span",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v("Template")])]),t._v(" "),r("b-btn",{staticClass:"d-none d-md-inline-block",attrs:{size:"sm",variant:"outline-info"},on:{click:t.toggleFull}},[r("span",[t._v(t._s(t.full?"Split":"Full"))])])],1),t._v(" "),r("code-mirror",{attrs:{mode:"htmlmixed"},model:{value:t.html,callback:function(e){t.html=e},expression:"html"}})],1)],1),t._v(" "),r("b-col",{key:"A2",staticClass:"mt-3",attrs:{md:t.vertical&&!t.full?6:12,sm:"12"}},[r("b-card",{attrs:{"no-body":"","header-tag":"header"}},[r("div",{staticClass:"d-flex justify-content-between align-items-center",attrs:{slot:"header"},slot:"header"},[r("h5",{staticClass:"mb-0"},[r("span",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v("JavaScript")]),t._v(" "),t.compiling?r("small",{staticClass:"text-muted"},[t._v(" compiling")]):t._e()]),t._v(" "),r("b-btn",{staticClass:"d-none d-md-inline-block",attrs:{size:"sm",variant:"outline-info"},on:{click:t.toggleFull}},[r("span",[t._v(t._s(t.full?"Split":"Full"))])])],1),t._v(" "),r("code-mirror",{attrs:{mode:"javascript"},model:{value:t.js,callback:function(e){t.js=e},expression:"js"}})],1)],1)],1)],1),t._v(" "),r("b-col",{key:"B",attrs:{md:t.vertical||t.full?12:6,sm:"12"}},[r("b-row",[r("b-col",{staticClass:"mt-3",attrs:{cols:"12"}},[r("b-card",{staticClass:"play-result",attrs:{"header-tag":"header"}},[r("div",{staticClass:"d-flex justify-content-between align-items-center",attrs:{slot:"header"},slot:"header"},[r("h5",{staticClass:"mb-0"},[r("span",[t._v("Result")]),t._v(" "),t.compiling||t.building?r("small",{staticClass:"text-muted"},[t._v(" building")]):t._e()]),t._v(" "),t.full?t._e():r("b-btn",{staticClass:"d-none d-md-inline-block",attrs:{size:"sm",variant:"outline-info"},on:{click:t.toggleVertical}},[r("span",[t._v(t._s(t.vertical?"Horizontal":"Vertical"))])])],1),t._v(" "),r("div",{ref:"result",staticClass:"notranslate",attrs:{translate:"no"}})])],1),t._v(" "),r("b-col",{staticClass:"mt-3 notranslate",attrs:{cols:"12",translate:"no"}},[r("b-card",{attrs:{"no-body":"","header-tag":"header"}},[r("div",{staticClass:"d-flex justify-content-between align-items-center",attrs:{slot:"header"},slot:"header"},[r("h5",{staticClass:"mb-0"},[r("span",[t._v("Console log")])]),t._v(" "),r("b-btn",{attrs:{disabled:0===t.messages.length,size:"sm",variant:"outline-danger"},on:{click:t.clear}},[r("span",[t._v("Clear")])])],1),t._v(" "),r("transition-group",{staticClass:"list-group list-group-flush play-log",attrs:{tag:"ul",name:"flip-list"}},[t.messages.length?t._e():r("b-list-group-item",{key:"empty-console"},[t._v("\n                 \n              ")]),t._v(" "),t._l(t.messages,function(e){return r("b-list-group-item",{key:"console-"+e[2],staticClass:"py-2 d-flex"},[r("b-badge",{staticClass:"mr-1",staticStyle:{"font-size":"90%"},attrs:{variant:e[0]}},[t._v("\n                  "+t._s("danger"===e[0]?"error":"warning"===e[0]?"warn":"log")+"\n                ")]),t._v(" "),r("span",{class:["text-"+e[0],"text-monospace","small","d-block"],staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(e[1]))])],1)})],2)],1)],1)],1)],1)],1)],1)},[],!1,null,"2af07cd0",null);e.default=component.exports}}]);