(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{247:function(n,t,e){"use strict";e(12);var o=e(15),l=e(40);t.a={data:()=>({scrollTimeout:null}),computed:{content(){return this.$route.params.slug&&this._content[this.$route.params.slug]||{}},headTitle(){const n=this.$route.name;let title="",section="";return this.meta&&this.meta.title&&(title=this.meta.title),"docs-components-slug"===n?section="Components":"docs-directives-slug"===n?section="Directives":"docs-reference-slug"===n?section="Reference":"docs-misc-slug"===n&&(section="Misc"),[title,section,"BootstrapVue"].filter(Boolean).join(" | ")},headMeta(){const meta=[{hid:"og:title",name:"og:title",property:"og:title",content:this.headTitle}];if(this.meta&&this.meta.description){const desc=this.meta.description;meta.push({hid:"description",name:"description",content:desc}),meta.push({hid:"og:description",name:"og:description",property:"og:description",content:desc})}else l.b&&meta.push({hid:"description",name:"description",content:l.b});return meta}},head(){return{title:this.headTitle,meta:this.headMeta}},mounted(){clearTimeout(this.scrollTimeout),this.scrollTimeout=null,this.focusScroll(),this.$nextTick(()=>{this.$root.$emit("setTOC",this.readme||"",this.meta||null)})},updated(){clearTimeout(this.scrollTimeout),this.scrollTimeout=null,this.focusScroll()},beforeDestroy(){this.$root.$emit("setTOC","")},methods:{focusScroll(){let n=this.$route.hash;this.$nextTick(()=>{let t;n&&(t=this.$el.querySelector('[id="'.concat(n.replace("#",""),'"]')),this.scrollIntoView(t)),t||(t=this.$el.querySelector("h1")),t&&(t.tabIndex=-1,t.focus())})},scrollIntoView(n){if(n){const t=document.scrollingElement||document.documentElement||document.body;this.scrollTimeout=setTimeout(()=>{Object(o.f)(t,Object(o.c)(n)-70,100),this.scrollTimeout=null},100)}}}}},256:function(n,t){n.exports='<h1 id="getting-started"><span class="bd-content-title">Getting Started</span></h1>\n<ul>\n<li><a href="https://vuejs.org">Vue.js</a> version {{ vueVersion }} (or greater) is recommended</li>\n<li>BootstrapVue requires <a href="https://getbootstrap.com">Bootstrap</a> version {{ bootstrapVersion }} (or\ngreater) SCSS/CSS</li>\n</ul>\n<h2 id="general"><span class="bd-content-title">General<a class="anchorjs-link" href="#general" aria-label="Anchor"></a></span></h2>\n<p>If you are using module bundlers like <a href="https://webpack.js.org/">webpack</a>,\n<a href="https://rollupjs.org">rollup.js</a>, etc you may prefer to directly include the package into your\nproject. To get started, use <code>yarn</code> or <code>npm</code> to get the latest version of Vue.js, BootstrapVue and\nBootstrap 4:</p>\n<pre class="hljs bash text-monospace p-2"><span class="hljs-comment"># With npm</span>\nnpm i vue bootstrap-vue bootstrap\n\n<span class="hljs-comment"># With yarn</span>\nyarn add vue bootstrap-vue bootstrap</pre><p>Then, register BootstrapVue plugin in your app entry point:</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-comment">// app.js</span>\n<span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">\'vue\'</span>\n<span class="hljs-keyword">import</span> BootstrapVue <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue\'</span>\n\nVue.use(BootstrapVue)</pre><p>And import Bootstrap and BootstrapVue <code>css</code> files:</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-comment">// app.js</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'bootstrap/dist/css/bootstrap.css\'</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'bootstrap-vue/dist/bootstrap-vue.css\'</span></pre><p>Or import Bootstrap and BootstrapVue <code>scss</code> files via a custom SCSS file:</p>\n<pre class="hljs scss text-monospace p-2"><span class="hljs-comment">// custom.scss</span>\n@<span class="hljs-keyword">import</span> <span class="hljs-string">\'node_modules/bootstrap/scss/bootstrap\'</span>;\n@<span class="hljs-keyword">import</span> <span class="hljs-string">\'node_modules/bootstrap-vue/src/index.scss\'</span>;</pre><pre class="hljs js text-monospace p-2"><span class="hljs-comment">// app.js</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'custom.scss\'</span></pre><p>Be sure to include your custom variables before <code>bootstrap.scss</code> and include BootstrapVue SCSS\n<em>after</em> Bootstrap SCSS to ensure variables are set up correctly.</p>\n<p><strong>Note</strong>: <em>Requires webpack configuration to load CSS/SCSS files\n(<a href="https://webpack.js.org/guides/asset-management/#loading-css">official guide</a>)</em>.</p>\n<h2 id="nuxtjs-module"><span class="bd-content-title">Nuxt.js Module<a class="anchorjs-link" href="#nuxtjs-module" aria-label="Anchor"></a></span></h2>\n<p><a href="https://nuxtjs.org">Nuxt.js</a> version {{ nuxtVersion }} (or greater) is recommended.</p>\n<p>Install dependencies:</p>\n<pre class="hljs bash text-monospace p-2"><span class="hljs-comment"># With npm</span>\nnpm i bootstrap-vue\n\n<span class="hljs-comment"># With yarn</span>\nyarn add bootstrap-vue</pre><p>Add <code>bootstrap-vue/nuxt</code> to modules section of <strong>nuxt.config.js</strong>.</p>\n<p>This will include both <code>boostrap.css</code> and <code>bootstrap-vue.css</code> default CSS.</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">modules</span>: [<span class="hljs-string">\'bootstrap-vue/nuxt\'</span>]\n}</pre><p>If you are using custom Bootstrap SCSS, you can disable automatic inclusion of Bootstrap and\nBootstrapVue pre-compiled CSS files by setting the following option(s) to <code>false</code>:</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">modules</span>: [<span class="hljs-string">\'bootstrap-vue/nuxt\'</span>],\n  <span class="hljs-attr">bootstrapVue</span>: {\n    <span class="hljs-attr">bootstrapCSS</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// or `css`</span>\n    bootstrapVueCSS: <span class="hljs-literal">false</span> <span class="hljs-comment">// or `bvCSS`</span>\n  }\n}</pre><p>BootstrapVue&#39;s custom CSS relies on some Bootstrap SCSS variables. You can include Bootstrap and\nBootstrapVue SCSS in your project&#39;s custom SCSS file:</p>\n<pre class="hljs scss text-monospace p-2"><span class="hljs-comment">// custom.scss</span>\n\n<span class="hljs-comment">// Custom overrides go first</span>\n<span class="hljs-variable">$grid-breakpoints</span>: (\n  xs: <span class="hljs-number">0</span>,\n  sm: <span class="hljs-number">480px</span>,\n  md: <span class="hljs-number">640px</span>,\n  lg: <span class="hljs-number">992px</span>,\n  xl: <span class="hljs-number">1300px</span>\n);\n\n<span class="hljs-comment">// Then include the following</span>\n@<span class="hljs-keyword">import</span> <span class="hljs-string">\'bootstrap/scss/bootstrap.scss\'</span>;\n@<span class="hljs-keyword">import</span> <span class="hljs-string">\'bootstrap-vue/src/index.scss\'</span>;</pre><p>In your app main entry point include the single custom SCSS file (when using <code>sass-loader</code>):</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-comment">// app.js</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'custom.scss\'</span></pre><h3 id="tree-shaking-with-nuxtjs"><span class="bd-content-title">Tree shaking with Nuxt.js<a class="anchorjs-link" href="#tree-shaking-with-nuxtjs" aria-label="Anchor"></a></span></h3>\n<p>If you wish to reduce your bundle size because you only use a subset of the available BootstrapVue\nplugins, you can configure the list of BootstrapVue <code>componentPlugins</code> or <code>directivePlugins</code> you\nwant to globally install in your Nuxt.js project.</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">modules</span>: [<span class="hljs-string">\'bootstrap-vue/nuxt\'</span>],\n  <span class="hljs-attr">bootstrapVue</span>: {\n    <span class="hljs-attr">componentPlugins</span>: [<span class="hljs-string">\'Form\'</span>, <span class="hljs-string">\'FormCheckbox\'</span>, <span class="hljs-string">\'FormInput\'</span>, <span class="hljs-string">\'FormRadio\'</span>],\n    <span class="hljs-attr">directivePlugins</span>: [<span class="hljs-string">\'Popover\'</span>]\n  }\n}</pre><h3 id="passing-custom-bootstrapvue-config-with-nuxtjs"><span class="bd-content-title">Passing custom BootstrapVue config with Nuxt.js<a class="anchorjs-link" href="#passing-custom-bootstrapvue-config-with-nuxtjs" aria-label="Anchor"></a></span></h3>\n<p>If you need to pass a custom\n<a href="/docs/misc/settings#default-bootstrapvue-configuration">BootstrapVue configuration</a>, you may due so\nby setting the <code>config</code> property in your <code>nuxt.config.js</code>:</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">modules</span>: [<span class="hljs-string">\'bootstrap-vue/nuxt\'</span>],\n  <span class="hljs-attr">bootstrapVue</span>: {\n    <span class="hljs-attr">config</span>: {\n      <span class="hljs-comment">// Custom config options here</span>\n    }\n  }\n}</pre><h3 id="using-pretranspiled-version-of-bootstrapvue-for-nuxtjs"><span class="bd-content-title">Using pretranspiled version of BootstrapVue for Nuxt.js<a class="anchorjs-link" href="#using-pretranspiled-version-of-bootstrapvue-for-nuxtjs" aria-label="Anchor"></a></span></h3>\n<p>Nuxt module uses precompiled version of BootstrapVue for faster development builds and source of\nBootstrapVue for higher quality production builds.</p>\n<p>You can override this option using <code>usePretranspiled</code> option. Setting to <code>true</code> uses <code>es/</code> instead\nof <code>src/</code>. By default is enabled for development mode only.</p>\n<h2 id="vue-cli-2"><span class="bd-content-title">Vue CLI 2<a class="anchorjs-link" href="#vue-cli-2" aria-label="Anchor"></a></span></h2>\n<p>BootstrapVue has two Vue CLI templates available:</p>\n<ul>\n<li><a href="https://github.com/bootstrap-vue/webpack-simple">webpack-simple</a>: Quick scaffold for a proof of\nconcept or small app</li>\n<li><a href="https://github.com/bootstrap-vue/webpack">webpack</a>: Larger, production ready template with more\noptions</li>\n</ul>\n<pre class="hljs bash text-monospace p-2"><span class="hljs-comment"># Ensure Vue CLI is installed and up to date</span>\nnpm i -g vue-cli\n\n<span class="hljs-comment"># Initialize a BootstrapVue project in the directory \'my-project\'</span>\nvue init bootstrap-vue/webpack-simple my-project\n\n<span class="hljs-comment"># Change into the directory</span>\n<span class="hljs-built_in">cd</span> my-project\n\n<span class="hljs-comment"># Install dependencies</span>\nnpm i\n\n<span class="hljs-comment"># Fire up the dev server with HMR</span>\nnpm run dev</pre><p>You can repeat the commands above replacing <code>bootstrap-vue/webpack-simple</code> with\n<code>bootstrap-vue/webpack</code> for the webpack template.</p>\n<h2 id="vue-cli-3"><span class="bd-content-title">Vue CLI 3<a class="anchorjs-link" href="#vue-cli-3" aria-label="Anchor"></a></span></h2>\n<p>Unlike V2, Vue CLI 3 doesn&#39;t use templates.</p>\n<p>Create a new project in the directory <code>my-project</code>:</p>\n<pre class="hljs bash text-monospace p-2">npx @vue/cli create my-project</pre><p>Enter the <code>my-project</code> directory and install <code>bootstrap-vue</code>:</p>\n<pre class="hljs bash text-monospace p-2">npm i bootstrap-vue</pre><p>Under the hood, Vue CLI uses webpack, so we can register the BootstrapVue plugin as with the webpack\ninstructions.</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">\'vue\'</span>\n<span class="hljs-keyword">import</span> BootstrapVue <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue\'</span>\n\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'bootstrap/dist/css/bootstrap.css\'</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'bootstrap-vue/dist/bootstrap-vue.css\'</span>\n\nVue.use(BootstrapVue)</pre><p>Optionally, you can import components individually, as\n<a href="#individual-components-and-directives">below</a>. To shorten import paths, we can add a webpack alias\nvia <code>vue.config.js</code>.</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'path\'</span>)\n\n<span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">configureWebpack</span>: {\n    <span class="hljs-attr">resolve</span>: {\n      <span class="hljs-attr">alias</span>: {\n        <span class="hljs-string">\'bootstrap-components\'</span>: path.resolve(__dirname, <span class="hljs-string">\'node_modules/bootstrap-vue/es/components\'</span>)\n      }\n    }\n  }\n}</pre><p>For additional configuration for Vue CLI 3 for using project relative paths for image src props on\nvarious BootstrapVue components, refer to the Vue CLI 3 section of the\n<a href="/docs/reference/images#vue-cli-3-support">Image Src Resolving</a> reference page.</p>\n<h2 id="individual-components-and-directives"><span class="bd-content-title">Individual components and directives<a class="anchorjs-link" href="#individual-components-and-directives" aria-label="Anchor"></a></span></h2>\n<p>If you would like to only pull in a specific component or set of components, you can do this by\ndirectly importing those components.</p>\n<p>To cherry pick a component/directive, start by importing it in the file where it is being used:</p>\n\x3c!-- eslint-disable no-unused-vars --\x3e\n\n<pre class="hljs js text-monospace p-2"><span class="hljs-keyword">import</span> BModal <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue/es/components/modal/modal\'</span>\n<span class="hljs-keyword">import</span> BModalDirective <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue/es/directives/modal/modal\'</span></pre><p>Then add it to your component definition:</p>\n\x3c!-- eslint-disable no-undef --\x3e\n\n<pre class="hljs js text-monospace p-2">Vue.component(<span class="hljs-string">\'my-component\'</span>, {\n  <span class="hljs-attr">components</span>: {\n    <span class="hljs-string">\'b-modal\'</span>: BModal\n  },\n  <span class="hljs-attr">directives</span>: {\n    <span class="hljs-string">\'b-modal\'</span>: BModalDirective\n  }\n  <span class="hljs-comment">// ...</span>\n})</pre><p>Or register them globally:</p>\n\x3c!-- eslint-disable no-undef --\x3e\n\n<pre class="hljs js text-monospace p-2">Vue.component(<span class="hljs-string">\'b-modal\'</span>, BModal)\nVue.directive(<span class="hljs-string">\'b-modal\'</span>, BModalDirective)</pre><p>Vue and ES2015 allow for various syntaxes here, so feel free to utilize kebab-casing (shown),\ncamelCasing, PascalCasing, and/or object property shorthand.</p>\n<h3 id="component-groups-and-directives-as-vue-plugins"><span class="bd-content-title">Component groups and Directives as Vue plugins<a class="anchorjs-link" href="#component-groups-and-directives-as-vue-plugins" aria-label="Anchor"></a></span></h3>\n<p>You can also import component groups and directives as Vue plugins by importing the component group\nor directive directory:</p>\n\x3c!-- eslint-disable import/first, import/no-duplicates --\x3e\n\n<pre class="hljs js text-monospace p-2"><span class="hljs-comment">// This imports all the layout components such as &lt;b-container&gt;, &lt;b-row&gt;, &lt;b-col&gt;:</span>\n<span class="hljs-keyword">import</span> { Layout } <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue/es/components\'</span>\nVue.use(Layout)\n\n<span class="hljs-comment">// This imports &lt;b-modal&gt; as well as the v-b-modal directive as a plugin:</span>\n<span class="hljs-keyword">import</span> { Modal } <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue/es/components\'</span>\nVue.use(Modal)\n\n<span class="hljs-comment">// This imports &lt;b-card&gt; along with all the &lt;b-card-*&gt; sub-components as a plugin:</span>\n<span class="hljs-keyword">import</span> { Card } <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue/es/components\'</span>\nVue.use(Card)\n\n<span class="hljs-comment">// This imports directive v-b-scrollspy as a plugin:</span>\n<span class="hljs-keyword">import</span> { Scrollspy } <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue/es/directives\'</span>\nVue.use(Scrollspy)</pre><p>When importing as plugins, all subcomponents and related directives are imported in most cases. i.e.\nWhen importing <code>&lt;b-nav&gt;</code>, all the <code>&lt;nav-*&gt;</code> sub components are also included, as well all dropdown\nsub components. Component shorthand aliases (if any) are also included in the plugin.</p>\n<p>Refer to the component and directive documentation for details.</p>\n<h3 id="webpack--babel"><span class="bd-content-title">webpack + Babel<a class="anchorjs-link" href="#webpack--babel" aria-label="Anchor"></a></span></h3>\n<p>When importing components/directives individually, you must configure your app to properly build the\nBootstrapVue library source code. This commonly involves white-listing the node module for your\nbabel loader rule in webpack.</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-comment">// webpack.config.js</span>\n<span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'path\'</span>)\n\n<span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">entry</span>: <span class="hljs-string">\'./app.js\'</span>,\n  <span class="hljs-attr">output</span>: {\n    <span class="hljs-attr">filename</span>: <span class="hljs-string">\'bundle.js\'</span>\n  },\n  <span class="hljs-attr">module</span>: {\n    <span class="hljs-attr">rules</span>: [\n      {\n        <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\\.js$/</span>,\n        <span class="hljs-attr">include</span>: [\n          <span class="hljs-comment">// Use `include` vs `exclude` to whitelist vs blacklist</span>\n          path.resolve(__dirname, <span class="hljs-string">\'src\'</span>), <span class="hljs-comment">// Whitelist your app source files</span>\n          <span class="hljs-built_in">require</span>.resolve(<span class="hljs-string">\'bootstrap-vue\'</span>) <span class="hljs-comment">// Whitelist bootstrap-vue</span>\n        ],\n        <span class="hljs-attr">loader</span>: <span class="hljs-string">\'babel-loader\'</span>\n      }\n    ]\n  }\n}</pre><h2 id="browser"><span class="bd-content-title">Browser<a class="anchorjs-link" href="#browser" aria-label="Anchor"></a></span></h2>\n<pre class="hljs html text-monospace p-2"><span class="hljs-comment">&lt;!-- Add this to &lt;head&gt; --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/css"</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"//unpkg.com/bootstrap/dist/css/bootstrap.min.css"</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">link</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">"text/css"</span>\n  <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>\n  <span class="hljs-attr">href</span>=<span class="hljs-string">"//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css"</span>\n/&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"//unpkg.com/@babel/polyfill@latest/dist/polyfill.min.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"//unpkg.com/vue@latest/dist/vue.min.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></pre><h2 id="build-variants"><span class="bd-content-title">Build Variants<a class="anchorjs-link" href="#build-variants" aria-label="Anchor"></a></span></h2>\n<p>Choosing the best variant for your build environment / packager helps less bundle sizes. If your\nbundler supports es modules, it will automatically prefer it over commonjs.</p>\n<div class="table-responsive-sm"><table class="table b-table table-striped table-sm bv-docs-table">\n<thead class="thead-default">\n<tr>\n<th>Variant</th>\n<th>Environments</th>\n<th>Package path</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><strong>ES Module</strong></td>\n<td>webpack 2 / rollup.js</td>\n<td><code>es/index.js</code></td>\n</tr>\n<tr>\n<td><strong>ESM Module</strong></td>\n<td>webpack 2 / rollup.js</td>\n<td><code>dist/bootstrap-vue.esm.js</code> <em>or</em> <code>dist/bootstrap-vue.esm.min.js</code></td>\n</tr>\n<tr>\n<td>commonjs2</td>\n<td>webpack 1 / ...</td>\n<td><code>dist/bootstrap-vue.common.js</code> <em>or</em> <code>dist/bootstrap-vue.common.min.js</code></td>\n</tr>\n<tr>\n<td>UMD</td>\n<td>Browser</td>\n<td><code>dist/bootstrap-vue.js</code> <em>or</em> <code>dist/bootstrap-vue.min.js</code></td>\n</tr>\n</tbody></table>\n</div><h2 id="migrating-a-project-already-using-bootstrap"><span class="bd-content-title">Migrating a project already using Bootstrap<a class="anchorjs-link" href="#migrating-a-project-already-using-bootstrap" aria-label="Anchor"></a></span></h2>\n<p>If you&#39;ve already been using Bootstrap 4, there are a couple adjustments you may need to make to\nyour project:</p>\n<ul>\n<li>Remove the bootstrap.js file from your page scripts or build pipeline</li>\n<li>If Bootstrap is the only thing relying on jQuery, you can safely remove it — BootstrapVue <strong>does\nnot</strong> depend on jQuery</li>\n<li>Convert your native Bootstrap HTML markup into the simplified BootstrapVue custom component markup</li>\n</ul>\n<h2 id="browser-support"><span class="bd-content-title">Browser Support<a class="anchorjs-link" href="#browser-support" aria-label="Anchor"></a></span></h2>\n<h3 id="css"><span class="bd-content-title">CSS<a class="anchorjs-link" href="#css" aria-label="Anchor"></a></span></h3>\n<p>BootstrapVue is to be used with Bootstrap 4 CSS/SCSS. Please see\n<a href="https://getbootstrap.com/docs/4.3/getting-started/browsers-devices">Browsers and devices</a> for more\ninformation about browsers currently supported by Bootstrap 4.</p>\n<h3 id="js"><span class="bd-content-title">JS<a class="anchorjs-link" href="#js" aria-label="Anchor"></a></span></h3>\n<p>BootstrapVue is written in Vue.js! So this is up to your project and bundler which browsers are\nsupported.</p>\n<p>If you want to support older IE, Android and IOS devices, you may want to use\n<a href="https://babeljs.io/docs/usage/polyfill">Babel Polyfill</a>:</p>\n<ul>\n<li><code>npm install @babel/polyfill</code></li>\n<li>Import it in your app main entry point with <code>import &#39;@babel/polyfill&#39;</code></li>\n</ul>\n<h2 id="tooling-support"><span class="bd-content-title">Tooling Support<a class="anchorjs-link" href="#tooling-support" aria-label="Anchor"></a></span></h2>\n<h3 id="vs-code--vetur"><span class="bd-content-title">VS Code + Vetur<a class="anchorjs-link" href="#vs-code--vetur" aria-label="Anchor"></a></span></h3>\n<p>If you are using <a href="https://code.visualstudio.com/">VS Code</a> as your text editor, BootstrapVue has\nintellisense autocompletion for component attributes available when using the\n<a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur">Vetur extension</a>.</p>\n<p><a href="https://twitter.com/AlexSashaRegan/status/912769997776158723">Twitter: Vetur + BootstrapVue</a></p>\n'},318:function(n,t,e){"use strict";e.r(t);var o=e(40),l=e(247),r=e(256),c=e.n(r);t.default={mixins:[l.a],data:()=>({readme:c(),bootstrapVersion:o.a,vueVersion:o.j,nuxtVersion:o.h,defaultConfig:o.d}),template:'<main class="container"><div class="bd-content">'.concat(c.a,"</div></main>"),layout:"docs"}}}]);
//# sourceMappingURL=df8753a041b4e77f64d7.js.map