(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{417:function(n,t){n.exports='<h1 id="settings" class="bv-no-focus-ring"><span class="bd-content-title">Settings</span></h1>\n<p class="bd-lead">BootstrapVue provides a few options for customizing component default values, and more.</p>\n<h2 id="configuring-defaults" class="bv-no-focus-ring"><span class="bd-content-title">Configuring defaults<a class="anchorjs-link" href="#configuring-defaults" aria-label="Anchor"></a></span></h2>\n<p>BootstrapVue is pre-configured for the default Bootstrap v4.x configuration. It assumes the\nbreakpoints are the standard breakpoint names of <code translate="no" class="notranslate text-nowrap">xs</code>, <code translate="no" class="notranslate text-nowrap">sm</code>, <code translate="no" class="notranslate text-nowrap">md</code>, <code translate="no" class="notranslate text-nowrap">lg</code>, and <code translate="no" class="notranslate text-nowrap">xl</code>. Also various\nBootstrapVue components have props with default variants and text content.</p>\n<p>BootstrapVue provides several methods for changing the default configuration.</p>\n<p>Note that it is not possible to change the defaults when using BootstrapVue via a <code translate="no" class="notranslate text-nowrap">&lt;script&gt;</code> tag.</p>\n<h3 id="default-configuration" class="bv-no-focus-ring"><span class="bd-content-title">Default configuration<a class="anchorjs-link" href="#default-configuration" aria-label="Anchor"></a></span></h3>\n<p>Default breakpoint names are stored in the <code translate="no" class="notranslate text-nowrap">breakpoints</code> property, default form control size is\nstored under the <code translate="no" class="notranslate text-nowrap">formControls</code> property, while component specific defaults are keyed by their\n<samp class="notranslate" translate="no">PascalCase</samp> name with the props as <samp class="notranslate" translate="no">camelCase</samp> properties. Only properties\ndefined in the default configuration can be overridden. Attempting to set a config property that is\nnot defined in the default will generate a console warning.</p>\n<pre class="hljs json text-monospace p-2 notranslate" translate="no">{{ defaultConfig }}</pre><h3 id="setting-new-configuration-values" class="bv-no-focus-ring"><span class="bd-content-title">Setting new configuration values<a class="anchorjs-link" href="#setting-new-configuration-values" aria-label="Anchor"></a></span></h3>\n<p>When you <code translate="no" class="notranslate text-nowrap">Vue.use(BootstrapVue)</code>, you can optionally pass a configuration object which specifies new\nvalues to replace the default values. For example if you wish to define new breakpoint names (which\nwill generate appropriate properties on components such as <code translate="no" class="notranslate text-nowrap">&lt;b-col&gt;</code> and <code translate="no" class="notranslate text-nowrap">&lt;b-form-group&gt;</code>), so that\nthe new breakpoints are <code translate="no" class="notranslate text-nowrap">[&#39;aa&#39;, &#39;bb&#39;, &#39;cc&#39;, &#39;dd&#39;]</code> then <code translate="no" class="notranslate text-nowrap">&lt;b-col&gt;</code> will now have <code translate="no" class="notranslate text-nowrap">bb</code>, <code translate="no" class="notranslate text-nowrap">cc</code>, and <code translate="no" class="notranslate text-nowrap">dd</code>\nprops instead of <code translate="no" class="notranslate text-nowrap">sm</code>, <code translate="no" class="notranslate text-nowrap">md</code>, <code translate="no" class="notranslate text-nowrap">lg</code> and <code translate="no" class="notranslate text-nowrap">xl</code> props (Similar for the <code translate="no" class="notranslate text-nowrap">label-cols-{breakpoint}</code> and\n<code translate="no" class="notranslate text-nowrap">label-align-{breakpoint}</code>props on <code translate="no" class="notranslate text-nowrap">&lt;b-form-group&gt;</code>):</p>\n<pre class="hljs js text-monospace p-2 notranslate" translate="no"><span class="hljs-keyword">import</span> BootstrapVue <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue\'</span>\nVue.use(BootstrapVue, {\n  <span class="hljs-attr">breakpoints</span>: [<span class="hljs-string">`xs`</span>, <span class="hljs-string">\'sm\'</span>, <span class="hljs-string">\'md\'</span>, <span class="hljs-string">\'lg\'</span>, <span class="hljs-string">\'xl\'</span>, <span class="hljs-string">\'xxl\'</span>]\n})</pre><p>Or if changing the default variants for <code translate="no" class="notranslate text-nowrap">&lt;b-button&gt;</code> and <code translate="no" class="notranslate text-nowrap">&lt;b-alert&gt;</code>:</p>\n<pre class="hljs js text-monospace p-2 notranslate" translate="no"><span class="hljs-keyword">import</span> BootstrapVue <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue\'</span>\nVue.use(BootstrapVue, {\n  <span class="hljs-attr">BAlert</span>: { <span class="hljs-attr">variant</span>: <span class="hljs-string">\'danger\'</span> },\n  <span class="hljs-attr">BButton</span>: { <span class="hljs-attr">variant</span>: <span class="hljs-string">\'primary\'</span> }\n})</pre><p>The values provided as the config option to <code translate="no" class="notranslate text-nowrap">Vue.use</code> will be merged with the default values.</p>\n<p><strong>Note:</strong> When defining custom breakpoints, keep the names short (2 to 3 characters). At least two\nbreakpoint names must be defined. The breakpoint names <strong>must</strong> match the breakpoint names defined\nin your custom Bootstrap SCSS. Breakpoint names must not conflict with non-breakpoint prop names\nused on various components (i.e. avoid <code translate="no" class="notranslate text-nowrap">to</code>, <code translate="no" class="notranslate text-nowrap">col</code>, etc)</p>\n<h3 id="setting-config-via-individual-component-group-plugin-imports" class="bv-no-focus-ring"><span class="bd-content-title">Setting config via individual component group plugin imports<a class="anchorjs-link" href="#setting-config-via-individual-component-group-plugin-imports" aria-label="Anchor"></a></span></h3>\n<p>When importing individual component plugins, you can specify a config as well (using the same config\nstructure as above. You only need to provide configuration to the first component you import, but\neach successive config will be merged with the previous config provided.</p>\n<p>Note breakpoint names should be defined before using any components as they are required to generate\ncomponent breakpoint specific props. Once the component that has breakpoint specific props is used,\nand subsequent changes to the breakpoints will <strong>not</strong> be reflected.</p>\n<p><strong>Example 1 (least preferred method):</strong></p>\n\x3c!-- eslint-disable import/first, import/no-duplicates --\x3e\n\n<pre class="hljs js text-monospace p-2 notranslate" translate="no"><span class="hljs-comment">// Component group plugins</span>\n<span class="hljs-keyword">import</span> { LayoutPlugin, AlertPlugin, ButtonPlugin } <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue\'</span>\n\n<span class="hljs-comment">// Supply configs via each plugin as it is `Vue.use()`\'d</span>\nVue.use(LayoutPlugin, { <span class="hljs-attr">breakpoints</span>: [<span class="hljs-string">\'xs\'</span>, <span class="hljs-string">\'sm\'</span>, <span class="hljs-string">\'lg\'</span>, <span class="hljs-string">\'xl\'</span>, <span class="hljs-string">\'xxl\'</span>] })\nVue.use(AlertPlugin, { <span class="hljs-attr">BAlert</span>: { <span class="hljs-attr">variant</span>: <span class="hljs-string">\'danger\'</span> } })\nVue.use(ButtonPlugin, { <span class="hljs-attr">BButton</span>: { <span class="hljs-attr">variant</span>: <span class="hljs-string">\'primary\'</span> } })</pre><p><strong>Example 2:</strong></p>\n\x3c!-- eslint-disable import/first, import/no-duplicates --\x3e\n\n<pre class="hljs js text-monospace p-2 notranslate" translate="no"><span class="hljs-comment">// Component group plugins</span>\n<span class="hljs-keyword">import</span> { LayoutPlugin, AlertPlugin, ButtonPlugin } <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue\'</span>\n\n<span class="hljs-comment">// Supply complete config to first `Vue.use()`\'d plugin</span>\nVue.use(LayoutPlugin, {\n  <span class="hljs-attr">breakpoints</span>: [<span class="hljs-string">\'xs\'</span>, <span class="hljs-string">\'sm\'</span>, <span class="hljs-string">\'lg\'</span>, <span class="hljs-string">\'xl\'</span>, <span class="hljs-string">\'xxl\'</span>],\n  <span class="hljs-attr">BAlert</span>: { <span class="hljs-attr">variant</span>: <span class="hljs-string">\'danger\'</span> },\n  <span class="hljs-attr">BButton</span>: { <span class="hljs-attr">variant</span>: <span class="hljs-string">\'primary\'</span> }\n})\nVue.use(AlertPlugin)\nVue.use(ButtonPlugin)</pre><p><strong>Example 3 (most preferred method):</strong></p>\n\x3c!-- eslint-disable import/first, import/no-duplicates --\x3e\n\n<pre class="hljs js text-monospace p-2 notranslate" translate="no"><span class="hljs-comment">// BootstrapVue configuration helper plugin and Component group plugins</span>\n<span class="hljs-keyword">import</span> { BVConfigPlugin, LayoutPlugin, AlertPlugin, ButtonPlugin } <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue\'</span>\n\n<span class="hljs-comment">// Supply complete config to the BVConfigPlugin helper plugin</span>\nVue.use(BVConfigPlugin, {\n  <span class="hljs-attr">breakpoints</span>: [<span class="hljs-string">\'xs\'</span>, <span class="hljs-string">\'sm\'</span>, <span class="hljs-string">\'lg\'</span>, <span class="hljs-string">\'xl\'</span>, <span class="hljs-string">\'xxl\'</span>],\n  <span class="hljs-attr">BAlert</span>: { <span class="hljs-attr">variant</span>: <span class="hljs-string">\'danger\'</span> },\n  <span class="hljs-attr">BButton</span>: { <span class="hljs-attr">variant</span>: <span class="hljs-string">\'primary\'</span> }\n})\n\n<span class="hljs-comment">// Then use component plugins</span>\nVue.use(LayoutPlugin)\nVue.use(AlertPlugin)\nVue.use(ButtonPlugin)</pre><p><strong>Example 4 when importing individual components (preferred method):</strong></p>\n\x3c!-- eslint-disable import/first, import/no-duplicates --\x3e\n\n<pre class="hljs js text-monospace p-2 notranslate" translate="no"><span class="hljs-comment">// Import BootstrapVue configuration helper plugin and Individual components</span>\n<span class="hljs-keyword">import</span> { BVConfigPlugin, BAlert, BButton, BRow, BCol } <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue\'</span>\n\n<span class="hljs-comment">// Supply complete config to the BVConfig helper plugin</span>\nVue.use(BVConfigPlugin, {\n  <span class="hljs-attr">breakpoints</span>: [<span class="hljs-string">\'xs\'</span>, <span class="hljs-string">\'sm\'</span>, <span class="hljs-string">\'lg\'</span>, <span class="hljs-string">\'xl\'</span>, <span class="hljs-string">\'xxl\'</span>],\n  <span class="hljs-attr">BAlert</span>: { <span class="hljs-attr">variant</span>: <span class="hljs-string">\'danger\'</span> },\n  <span class="hljs-attr">BButton</span>: { <span class="hljs-attr">variant</span>: <span class="hljs-string">\'primary\'</span> }\n})\n\n<span class="hljs-comment">// Then install components globally</span>\nVue.component(<span class="hljs-string">\'b-alert\'</span>, BAlert)\nVue.component(<span class="hljs-string">\'b-button\'</span>, BButton)\nVue.component(<span class="hljs-string">\'b-row\'</span>, BRow)\nVue.component(<span class="hljs-string">\'b-col\'</span>, BCol)\n\n<span class="hljs-comment">// Or register components as local to your custom component</span>\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">name</span>: <span class="hljs-string">\'MyComponent\'</span>,\n  <span class="hljs-attr">components</span>: {\n    BAlert,\n    BButton,\n    BRow,\n    BCol\n  }\n  <span class="hljs-comment">// ...</span>\n}</pre><p><strong>Caveat:</strong> Vue only installs plugins <em>once</em>. If you import a plugin that has already been imported\nby another component plugin, the configuration passed to the component plugin will <strong>not</strong> be merged\nin. It is best to set the complete configuration using the <code translate="no" class="notranslate text-nowrap">BVConfigPlugin</code> helper plugin as shown\nin <strong>Example 3</strong> and <strong>Example 4</strong> above. The <code translate="no" class="notranslate text-nowrap">BVConfigPlugin</code> plugin should be used in the main\nentry point of your app, and <strong>before</strong> any <code translate="no" class="notranslate text-nowrap">Vue.use()</code> of component plugins or <code translate="no" class="notranslate text-nowrap">Vue.component()</code> or\nindividual components.</p>\n<h3 id="setting-the-config-via-nuxtjs-bootstrapvue-plugin" class="bv-no-focus-ring"><span class="bd-content-title">Setting the config via Nuxt.js BootstrapVue plugin<a class="anchorjs-link" href="#setting-the-config-via-nuxtjs-bootstrapvue-plugin" aria-label="Anchor"></a></span></h3>\n<p>Refer to the <a href="/docs/#nuxtjs-plugin-module" class="font-weight-bold">Getting Started</a> documentation for information on passing\nthe config object to the Nuxt.js plugin module.</p>\n<h2 id="disabling-bootstrapvue-console-warnings" class="bv-no-focus-ring"><span class="bd-content-title">Disabling BootstrapVue console warnings<a class="anchorjs-link" href="#disabling-bootstrapvue-console-warnings" aria-label="Anchor"></a></span></h2>\n<p>BootstrapVue will warn (via <code translate="no" class="notranslate text-nowrap">console.warn</code>) when you try and use a deprecated prop, or pass an\ninvalid value to certain props. These warnings are provided to help you ensure that your application\nis using the correct props and values.</p>\n<p>In some cases, you may want to disable these warnings (not recommended). You can do so by setting\nthe following process environment variable:</p>\n\x3c!-- eslint-disable no-unused-vars --\x3e\n\n<pre class="hljs js text-monospace p-2 notranslate" translate="no">process.env.BOOTSTRAP_VUE_NO_WARN = <span class="hljs-literal">true</span></pre><p>By ignoring warnings, you may find that your project fails/breaks when using future releases of\nbootstrapVue where deprecated props have been removed.</p>\n<p><strong>Warnings should be corrected before moving your project into production!</strong></p>\n'}}]);