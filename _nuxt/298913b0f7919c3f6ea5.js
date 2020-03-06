(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{437:function(n,t){n.exports='<h1 id="router-link-support" class="bv-no-focus-ring"><span class="bd-content-title">Router link support</span></h1>\n<p class="bd-lead">Several BootstrapVue components support rendering <code class="text-nowrap" translate="no">&lt;router-link&gt;</code> components compatible with <em>Vue\nRouter</em> and <em>Nuxt.js</em>. For more information, see the\n<a href="https://router.vuejs.org/" target="_blank" rel="noopener">official Vue Router docs</a> and\n<a href="https://nuxtjs.org/" target="_blank" rel="noopener">official Nuxt.js docs</a>.</p>\n<h2 id="common-router-link-props" class="bv-no-focus-ring"><span class="bd-content-title">Common router link props<a class="anchorjs-link" href="#common-router-link-props" aria-labelledby="common-router-link-props"></a></span></h2>\n<p>In the following sections, we are using the <code class="text-nowrap" translate="no">&lt;b-link&gt;</code> component to render router links. <code class="text-nowrap" translate="no">&lt;b-link&gt;</code>\nis the building block of most of BootstrapVue&#39;s <em>actionable</em> components. You could use any other\ncomponent that supports link generation such as <a href="/docs/components/link" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-link&gt;</code></a>,\n<a href="/docs/components/button" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-button&gt;</code></a>, <a href="/docs/components/breadcrumb" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-breadcrumb-item&gt;</code></a>,\n<a href="/docs/components/list-group" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-list-group-item&gt;</code></a>, <a href="/docs/components/nav" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-nav-item&gt;</code></a>,\n<a href="/docs/components/dropdown" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-dropdown-item&gt;</code></a>, and\n<a href="/docs/components/pagination-nav" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-pagination-nav&gt;</code></a>. Note that not all props are available on\nall components. Refer to the respective component documentation for details.</p>\n<h3 id="to" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">to</code><a class="anchorjs-link" href="#to" aria-labelledby="to"></a></span></h3>\n<ul>\n<li>type: <code class="text-nowrap" translate="no">string | Location</code></li>\n<li>required to generate a <code class="text-nowrap" translate="no">&lt;router-link&gt;</code></li>\n</ul>\n<p>Denotes the target route of the link. When clicked, the value of the <code class="text-nowrap" translate="no">to</code> prop will be passed to\n<code class="text-nowrap" translate="no">router.push()</code> internally, so the value can be either a string or a location descriptor object.</p>\n<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- Literal string --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">"home"</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- Renders to --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"home"</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- JavaScript expression using `v-bind` --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">v-bind:to</span>=<span class="hljs-string">"\'home\'"</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- Omitting `v-bind` is fine, just as binding any other prop --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">"\'home\'"</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- Same as above --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">"{ path: \'home\' }"</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- Named route --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">"{ name: \'user\', params: { userId: 123 } }"</span>&gt;</span>User<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- With query, resulting in `/register?plan=private` --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">"{ path: \'register\', query: { plan: \'private\' } }"</span>&gt;</span>Register<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- Render a non-router link by omitting `to` and specifying an `href` --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"/home"</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre></div><h3 id="replace" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">replace</code><a class="anchorjs-link" href="#replace" aria-labelledby="replace"></a></span></h3>\n<ul>\n<li>type: <code class="text-nowrap" translate="no">boolean</code></li>\n<li>default: <code class="text-nowrap" translate="no">false</code></li>\n</ul>\n<p>Setting <code class="text-nowrap" translate="no">replace</code> prop will call <code class="text-nowrap" translate="no">router.replace()</code> instead of <code class="text-nowrap" translate="no">router.push()</code> when clicked, so the\nnavigation will not leave a history record.</p>\n<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">"{ path: \'/abc\'}"</span> <span class="hljs-attr">replace</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre></div><h3 id="append" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">append</code><a class="anchorjs-link" href="#append" aria-labelledby="append"></a></span></h3>\n<ul>\n<li>type: <code class="text-nowrap" translate="no">boolean</code></li>\n<li>default: <code class="text-nowrap" translate="no">false</code></li>\n</ul>\n<p>Setting <code class="text-nowrap" translate="no">append</code> prop always appends the relative path to the current path. For example, assuming we\nare navigating from <code class="text-nowrap" translate="no">/a</code> to a relative link <code class="text-nowrap" translate="no">b</code>, without <code class="text-nowrap" translate="no">append</code> we will end up at <code class="text-nowrap" translate="no">/b</code>, but with\n<code class="text-nowrap" translate="no">append</code> we will end up at <code class="text-nowrap" translate="no">/a/b</code>.</p>\n<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">"{ path: \'relative/path\'}"</span> <span class="hljs-attr">append</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre></div><h3 id="router-tag" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">router-tag</code><a class="anchorjs-link" href="#router-tag" aria-labelledby="router-tag"></a></span></h3>\n<ul>\n<li>type: <code class="text-nowrap" translate="no">string</code></li>\n<li>default: <code class="text-nowrap" translate="no">&#39;a&#39;</code></li>\n</ul>\n<p>Sometimes we want <code class="text-nowrap" translate="no">&lt;router-link&gt;</code> to render as another tag, e.g <code class="text-nowrap" translate="no">&lt;li&gt;</code>. Then we can use <code class="text-nowrap" translate="no">router-tag</code>\nprop to specify which tag to render to, and it will still listen to click events for navigation.\n<code class="text-nowrap" translate="no">router-tag</code> translates to the <code class="text-nowrap" translate="no">tag</code> prop on the final rendered <code class="text-nowrap" translate="no">&lt;router-link&gt;</code>.</p>\n<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">"/foo"</span> <span class="hljs-attr">router-tag</span>=<span class="hljs-string">"li"</span>&gt;</span>foo<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- Renders as --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>foo<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre></div><p><strong>Note:</strong> Changing the tag from anything other than <code class="text-nowrap" translate="no">&lt;a&gt;</code> is discouraged, as it hinders\naccessibility of keyboard and/or screen-reader users, and is also not very SEO friendly.</p>\n<h3 id="active-class" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">active-class</code><a class="anchorjs-link" href="#active-class" aria-labelledby="active-class"></a></span></h3>\n<ul>\n<li>type: <code class="text-nowrap" translate="no">string</code></li>\n<li>default: <code class="text-nowrap" translate="no">&#39;router-link-active&#39;</code> (<code class="text-nowrap" translate="no">&#39;nuxt-link-active&#39;</code> when using Nuxt.js)</li>\n</ul>\n<p>Configure the active CSS class applied when the link is active. Note the default value can also be\nconfigured globally via the <code class="text-nowrap" translate="no">linkActiveClass</code>\n<a href="https://router.vuejs.org/api/#linkactiveclass" target="_blank" rel="noopener">router constructor option</a>.</p>\n<p>With components that support router links (have a <code class="text-nowrap" translate="no">to</code> prop), you will want to set this to the class\n<code class="text-nowrap" translate="no">&#39;active&#39;</code> (or a space separated string that includes <code class="text-nowrap" translate="no">&#39;active&#39;</code>) to apply Bootstrap&#39;s active\nstyling on the component when the current route matches the <code class="text-nowrap" translate="no">to</code> prop.</p>\n<h3 id="exact" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">exact</code><a class="anchorjs-link" href="#exact" aria-labelledby="exact"></a></span></h3>\n<ul>\n<li>type: <code class="text-nowrap" translate="no">boolean</code></li>\n<li>default: <code class="text-nowrap" translate="no">false</code></li>\n</ul>\n<p>The default active class matching behavior is <strong>inclusive match</strong>. For example, <code class="text-nowrap" translate="no">&lt;b-link to=&quot;/a&quot;&gt;</code>\nwill get this class applied as long as the current path starts with <code class="text-nowrap" translate="no">/a/</code> or is <code class="text-nowrap" translate="no">/a</code>.</p>\n<p>One consequence of this is that <code class="text-nowrap" translate="no">&lt;b-link to=&quot;/&quot;&gt;</code> will be active for every route! To force the link\ninto &quot;exact match mode&quot;, use the <code class="text-nowrap" translate="no">exact</code> prop:</p>\n<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- This link will only be active at `/` --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">"/"</span> <span class="hljs-attr">exact</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre></div><p>Check out more examples explaining active link class <a href="https://jsfiddle.net/8xrk1n9f/" target="_blank" rel="noopener">live</a>.</p>\n<h3 id="exact-active-class" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">exact-active-class</code><a class="anchorjs-link" href="#exact-active-class" aria-labelledby="exact-active-class"></a></span></h3>\n<ul>\n<li>type: <code class="text-nowrap" translate="no">string</code></li>\n<li>default: <code class="text-nowrap" translate="no">&#39;router-link-exact-active&#39;</code> (<code class="text-nowrap" translate="no">&#39;nuxt-link-exact-active&#39;</code> when using Nuxt.js)</li>\n<li>availability: Vue Router 2.5.0+</li>\n</ul>\n<p>Configure the active CSS class applied when the link is active with exact match. Note the default\nvalue can also be configured globally via the <code class="text-nowrap" translate="no">linkExactActiveClass</code>\n<a href="https://router.vuejs.org/api/#linkexactactiveclass" target="_blank" rel="noopener">router constructor option</a>.</p>\n<p>With components that support router links (have a <code class="text-nowrap" translate="no">to</code> prop), you will want to set this to the class\n<code class="text-nowrap" translate="no">&#39;active&#39;</code> (or a space separated string that includes <code class="text-nowrap" translate="no">&#39;active&#39;</code>) to apply Bootstrap&#39;s active\nstyling on the component when the current route matches the <code class="text-nowrap" translate="no">to</code> prop.</p>\n<h2 id="nuxtjs-specific-router-link-props" class="bv-no-focus-ring"><span class="bd-content-title">Nuxt.js specific router link props<a class="anchorjs-link" href="#nuxtjs-specific-router-link-props" aria-labelledby="nuxtjs-specific-router-link-props"></a></span></h2>\n<p>When BootstrapVue detects that your app is running under <a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a>, it will\nrender a <a href="https://nuxtjs.org/api/components-nuxt-link" target="_blank" rel="noopener"><code class="text-nowrap" translate="no">&lt;nuxt-link&gt;</code></a> sub component instead of a\n<code class="text-nowrap" translate="no">&lt;router-link&gt;</code>. <code class="text-nowrap" translate="no">&lt;nuxt-link&gt;</code> supports all of the above router link props, plus the following\nadditional Nuxt.js specific props.</p>\n<h3 id="no-prefetch" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">no-prefetch</code><a class="anchorjs-link" href="#no-prefetch" aria-labelledby="no-prefetch"></a></span></h3>\n<ul>\n<li>type: <code class="text-nowrap" translate="no">boolean</code></li>\n<li>default: <code class="text-nowrap" translate="no">false</code></li>\n<li>availability: Nuxt.js 2.4.0+</li>\n</ul>\n<p>To improve the responsiveness of your Nuxt.js applications, when the link will be displayed within\nthe viewport, Nuxt.js will automatically prefetch the code splitted page. Setting <code class="text-nowrap" translate="no">no-prefetch</code> will\ndisabled this feature for the specific link.</p>\n<p><strong>Note:</strong> If you have prefetching disabled in your <code class="text-nowrap" translate="no">nuxt.config.js</code> configuration\n(<code class="text-nowrap" translate="no">router: { prefetchLinks: false}</code>), or are using a version of Nuxt.js <code class="text-nowrap" translate="no">&lt; 2.4.0</code>, then this prop\nwill have no effect.</p>\n<p>Prefetching support requires\n<a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noopener">IntersectionObserver</a>\nto be supported (see <a href="https://caniuse.com/#feat=intersectionobserver" target="_blank" rel="noopener">CanIUse</a>). For browsers that\ndo not support IntersectionObserver, you can use the following conditional polyfill in\n<code class="text-nowrap" translate="no">nuxt.config.js</code>:</p>\n<div class="bd-code"><pre class="hljs js p-2" translate="no"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">head</span>: {\n    <span class="hljs-attr">script</span>: [\n      {\n        <span class="hljs-attr">src</span>: <span class="hljs-string">\'https://polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver\'</span>,\n        <span class="hljs-attr">body</span>: <span class="hljs-literal">true</span>\n      }\n    ]\n  }\n}</pre></div>'}}]);