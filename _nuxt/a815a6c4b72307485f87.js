(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{354:function(n,t){n.exports='<h1 id="navbar" class="bv-no-focus-ring"><span class="bd-content-title">Navbar</span></h1>\n<p class="bd-lead">The component <code translate="no" class="notranslate text-nowrap">&lt;b-navbar&gt;</code> is a wrapper that positions branding, navigation, and other elements\ninto a concise header. It&#39;s easily extensible and thanks to the <code translate="no" class="notranslate text-nowrap">&lt;b-collapse&gt;</code> component, it can\neasily integrate responsive behaviors.</p>\n<p><strong>Example:</strong></p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar</span> <span class="hljs-attr">toggleable</span>=<span class="hljs-string">"lg"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"dark"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar-brand</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>NavBar<span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar-brand</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar-toggle</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"nav-collapse"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar-toggle</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"nav-collapse"</span> <span class="hljs-attr">is-nav</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar-nav</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar-nav</span>&gt;</span>\n\n      <span class="hljs-comment">&lt;!-- Right aligned nav items --&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar-nav</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ml-auto"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-form</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr-sm-2"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Search"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"my-2 my-sm-0"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span>&gt;</span>Search<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-form</span>&gt;</span>\n\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item-dropdown</span> <span class="hljs-attr">text</span>=<span class="hljs-string">"Lang"</span> <span class="hljs-attr">right</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>EN<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>ES<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>RU<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>FA<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item-dropdown</span>&gt;</span>\n\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item-dropdown</span> <span class="hljs-attr">right</span>&gt;</span>\n          <span class="hljs-comment">&lt;!-- Using \'button-content\' slot --&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:button-content</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">em</span>&gt;</span>User<span class="hljs-tag">&lt;/<span class="hljs-name">em</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Profile<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Sign Out<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item-dropdown</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar-nav</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-navbar.vue --&gt;</span></pre><h2 id="color-schemes" class="bv-no-focus-ring"><span class="bd-content-title">Color schemes<a class="anchorjs-link" href="#color-schemes" aria-labelledby="color-schemes"></a></span></h2>\n<p><code translate="no" class="notranslate text-nowrap">&lt;b-navbar&gt;</code> supports the standard Bootstrap v4 available background color variants. Set the\n<code translate="no" class="notranslate text-nowrap">variant</code> prop to one of the following values to change the background color: <code translate="no" class="notranslate text-nowrap">primary</code>, <code translate="no" class="notranslate text-nowrap">success</code>,\n<code translate="no" class="notranslate text-nowrap">info</code>, <code translate="no" class="notranslate text-nowrap">warning</code>, <code translate="no" class="notranslate text-nowrap">danger</code>, <code translate="no" class="notranslate text-nowrap">dark</code>, or <code translate="no" class="notranslate text-nowrap">light</code>.</p>\n<p>Control the text color by setting <code translate="no" class="notranslate text-nowrap">type</code> prop to <code translate="no" class="notranslate text-nowrap">light</code> for use with light background color\nvariants, or <code translate="no" class="notranslate text-nowrap">dark</code> for dark background color variants.</p>\n<h2 id="placement" class="bv-no-focus-ring"><span class="bd-content-title">Placement<a class="anchorjs-link" href="#placement" aria-labelledby="placement"></a></span></h2>\n<p>Control the placement of the navbar by setting one of two props:</p>\n<div class="table-responsive-sm"><table class="b-table table table-bordered table-striped bv-docs-table">\n<thead class="thead-default">\n<tr>\n<th>prop</th>\n<th>type</th>\n<th>default</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code translate="no" class="notranslate text-nowrap">fixed</code></td>\n<td>String</td>\n<td><code translate="no" class="notranslate text-nowrap">null</code></td>\n<td>Set to <code translate="no" class="notranslate text-nowrap">top</code> for fixed to the top of the viewport, or <code translate="no" class="notranslate text-nowrap">bottom</code> for fixed to the <code translate="no" class="notranslate text-nowrap">bottom</code> of the viewport.</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">sticky</code></td>\n<td>Boolean</td>\n<td><code translate="no" class="notranslate text-nowrap">false</code></td>\n<td>Set to <code translate="no" class="notranslate text-nowrap">true</code> to make the navbar stick to the top of the viewport (or parent container that has <code translate="no" class="notranslate text-nowrap">position: relative</code> set) when scrolled.</td>\n</tr>\n</tbody></table>\n</div><p><strong>Notes:</strong></p>\n<ul>\n<li>Fixed positioning uses CSS <code translate="no" class="notranslate text-nowrap">position: fixed</code>. You may need to adjust your document top/bottom\npadding or margin.</li>\n<li>CSS <code translate="no" class="notranslate text-nowrap">position: sticky</code> (used for <code translate="no" class="notranslate text-nowrap">sticky</code>) is not fully supported in every browser. For browsers\nthat do not support <code translate="no" class="notranslate text-nowrap">position: sticky</code>, it will fallback natively to <code translate="no" class="notranslate text-nowrap">position: relative</code>.</li>\n</ul>\n<h2 id="supported-content" class="bv-no-focus-ring"><span class="bd-content-title">Supported content<a class="anchorjs-link" href="#supported-content" aria-labelledby="supported-content"></a></span></h2>\n<p>Navbars come with built-in support for a handful of sub-components. Choose from the following as\nneeded:</p>\n<ul>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-navbar-brand&gt;</code> for your company, product, or project name.</li>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-navbar-toggle&gt;</code> for use with the <code translate="no" class="notranslate text-nowrap">&lt;b-collapse is-nav&gt;</code> component.</li>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-collapse is-nav&gt;</code> for grouping and hiding navbar contents by a parent breakpoint.</li>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-navbar-nav&gt;</code> for a full-height and lightweight navigation (including support for dropdowns).\nThe following sub-components inside <code translate="no" class="notranslate text-nowrap">&lt;b-navbar-nav&gt;</code> are supported:<ul>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-nav-item&gt;</code> for link (and router-link) action items</li>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-nav-item-dropdown&gt;</code> for nav dropdown menus</li>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-nav-text&gt;</code> for adding vertically centered strings of text.</li>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-nav-form&gt;</code> for any form controls and actions.</li>\n</ul>\n</li>\n</ul>\n<h3 id="b-navbar-brand" class="bv-no-focus-ring"><span class="bd-content-title"><code translate="no" class="notranslate text-nowrap">&lt;b-navbar-brand&gt;</code><a class="anchorjs-link" href="#b-navbar-brand" aria-labelledby="b-navbar-brand"></a></span></h3>\n<p>The <code translate="no" class="notranslate text-nowrap">&lt;b-navbar-brand&gt;</code> generates a link if <code translate="no" class="notranslate text-nowrap">href</code> is provided, or a <code translate="no" class="notranslate text-nowrap">&lt;router-link&gt;</code> if <code translate="no" class="notranslate text-nowrap">to</code> is\nprovided. If neither is given it renders as a <code translate="no" class="notranslate text-nowrap">&lt;div&gt;</code> tag. You can override the tag type by setting\nthe <code translate="no" class="notranslate text-nowrap">tag</code> prop to the element you would like rendered:</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- As a link --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"faded"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"light"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar-brand</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>BootstrapVue<span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar-brand</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-navbar-brand-link.vue --&gt;</span></pre><pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- As a heading --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"faded"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"light"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar-brand</span> <span class="hljs-attr">tag</span>=<span class="hljs-string">"h1"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-0"</span>&gt;</span>BootstrapVue<span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar-brand</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-navbar-brand-heading.vue --&gt;</span></pre><p>Adding images to the <code translate="no" class="notranslate text-nowrap">&lt;b-navbar-brand&gt;</code> will likely always require custom styles or utilities to\nproperly size. Here are some examples to demonstrate:</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- Just an image --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"faded"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"light"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar-brand</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://placekitten.com/g/30/30"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Kitten"</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar-brand</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-navbar-brand-image.vue --&gt;</span></pre><pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- Image and text --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"faded"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"light"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar-brand</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://placekitten.com/g/30/30"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-inline-block align-top"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Kitten"</span>&gt;</span>\n      BootstrapVue\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar-brand</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-navbar-brand-image-and-text.vue --&gt;</span></pre><h3 id="b-navbar-nav" class="bv-no-focus-ring"><span class="bd-content-title"><code translate="no" class="notranslate text-nowrap">&lt;b-navbar-nav&gt;</code><a class="anchorjs-link" href="#b-navbar-nav" aria-labelledby="b-navbar-nav"></a></span></h3>\n<p>Navbar navigation links build on the <code translate="no" class="notranslate text-nowrap">&lt;b-navbar-nav&gt;</code> parent component and requires the use of\n<code translate="no" class="notranslate text-nowrap">&lt;b-collapse is-nav&gt;</code> and <code translate="no" class="notranslate text-nowrap">&lt;b-nav-toggle&gt;</code> toggler for proper responsive styling. Navigation in\nnavbars will also grow to occupy as much horizontal space as possible to keep your navbar contents\nsecurely aligned.</p>\n<p><code translate="no" class="notranslate text-nowrap">&lt;b-navbar-nav&gt;</code> supports the following child components:</p>\n<ul>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-nav-item&gt;</code> for link (and router-link) action items</li>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-nav-text&gt;</code> for adding vertically centered strings of text.</li>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-nav-item-dropdown&gt;</code> for navbar dropdown menus</li>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-nav-form&gt;</code> for adding simple forms to the navbar.</li>\n</ul>\n<h3 id="b-nav-item" class="bv-no-focus-ring"><span class="bd-content-title"><code translate="no" class="notranslate text-nowrap">&lt;b-nav-item&gt;</code><a class="anchorjs-link" href="#b-nav-item" aria-labelledby="b-nav-item"></a></span></h3>\n<p><code translate="no" class="notranslate text-nowrap">&lt;b-nav-item&gt;</code> is the primary link (and <code translate="no" class="notranslate text-nowrap">&lt;router-link&gt;</code>) component. Providing a <code translate="no" class="notranslate text-nowrap">to</code> prop value will\ngenerate a <code translate="no" class="notranslate text-nowrap">&lt;router-link&gt;</code> while providing an <code translate="no" class="notranslate text-nowrap">href</code> prop value will generate a standard link.</p>\n<p>Set the <code translate="no" class="notranslate text-nowrap">&lt;b-nav-item&gt;</code> <code translate="no" class="notranslate text-nowrap">active</code> prop will highlight the item as being the active page, Disable a\n<code translate="no" class="notranslate text-nowrap">&lt;b-nav-item&gt;</code> by setting the prop <code translate="no" class="notranslate text-nowrap">disabled</code> to true.</p>\n<p>Handle click events by specifying a handler for the <code translate="no" class="notranslate text-nowrap">@click</code> event on <code translate="no" class="notranslate text-nowrap">&lt;b-nav-item&gt;</code>.</p>\n<h3 id="b-nav-text" class="bv-no-focus-ring"><span class="bd-content-title"><code translate="no" class="notranslate text-nowrap">&lt;b-nav-text&gt;</code><a class="anchorjs-link" href="#b-nav-text" aria-labelledby="b-nav-text"></a></span></h3>\n<p>Navbars may contain bits of text with the help of <code translate="no" class="notranslate text-nowrap">&lt;b-nav-text&gt;</code>. This component adjusts vertical\nalignment and horizontal spacing for strings of text.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar</span> <span class="hljs-attr">toggleable</span>=<span class="hljs-string">"sm"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"light"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"light"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar-toggle</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"nav-text-collapse"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar-toggle</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar-brand</span>&gt;</span>BootstrapVue<span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar-brand</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"nav-text-collapse"</span> <span class="hljs-attr">is-nav</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar-nav</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-text</span>&gt;</span>Navbar text<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-text</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar-nav</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-navbar-text.vue --&gt;</span></pre><h3 id="b-nav-item-dropdown" class="bv-no-focus-ring"><span class="bd-content-title"><code translate="no" class="notranslate text-nowrap">&lt;b-nav-item-dropdown&gt;</code><a class="anchorjs-link" href="#b-nav-item-dropdown" aria-labelledby="b-nav-item-dropdown"></a></span></h3>\n<p>For <code translate="no" class="notranslate text-nowrap">&lt;b-nav-item-dropdown&gt;</code> usage, see the <a href="/docs/components/dropdown" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-dropdown&gt;</code></a> docs. Note\nsplit dropdowns are not supported in <code translate="no" class="notranslate text-nowrap">&lt;b-navbar&gt;</code> and <code translate="no" class="notranslate text-nowrap">&lt;b-navbar-nav&gt;</code>.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"dark"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"dark"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar-nav</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n\n      <span class="hljs-comment">&lt;!-- Navbar dropdowns --&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item-dropdown</span> <span class="hljs-attr">text</span>=<span class="hljs-string">"Lang"</span> <span class="hljs-attr">right</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>EN<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>ES<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>RU<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>FA<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item-dropdown</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item-dropdown</span> <span class="hljs-attr">text</span>=<span class="hljs-string">"User"</span> <span class="hljs-attr">right</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Account<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Settings<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item-dropdown</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar-nav</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-navbar-dropdown.vue --&gt;</span></pre><h3 id="b-nav-form" class="bv-no-focus-ring"><span class="bd-content-title"><code translate="no" class="notranslate text-nowrap">&lt;b-nav-form&gt;</code><a class="anchorjs-link" href="#b-nav-form" aria-labelledby="b-nav-form"></a></span></h3>\n<p>Use <code translate="no" class="notranslate text-nowrap">&lt;b-nav-form&gt;</code> to place inline form controls into your navbar</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"light"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"light"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-form</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr-sm-2"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Search"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-success"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"my-2 my-sm-0"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span>&gt;</span>Search<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-navbar-form.vue --&gt;</span></pre><p>Input groups work as well:</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-navbar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"light"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"light"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-form</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">prepend</span>=<span class="hljs-string">"@"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Username"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-navbar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-navbar-form-inputs.vue --&gt;</span></pre><h3 id="b-navbar-toggle-and-b-collapse-is-nav" class="bv-no-focus-ring"><span class="bd-content-title"><code translate="no" class="notranslate text-nowrap">&lt;b-navbar-toggle&gt;</code> and <code translate="no" class="notranslate text-nowrap">&lt;b-collapse is-nav&gt;</code><a class="anchorjs-link" href="#b-navbar-toggle-and-b-collapse-is-nav" aria-labelledby="b-navbar-toggle-and-b-collapse-is-nav"></a></span></h3>\n<p>Navbars are not responsive by default, but you can easily modify them to change that. Responsive\nbehavior depends on our <code translate="no" class="notranslate text-nowrap">&lt;b-collapse&gt;</code> component.</p>\n<p>Wrap <code translate="no" class="notranslate text-nowrap">&lt;b-navbar-nav&gt;</code> components in a <code translate="no" class="notranslate text-nowrap">&lt;b-collapse is-nav&gt;</code> (<strong>remember to set the <code translate="no" class="notranslate text-nowrap">is-nav</code> prop!</strong>)\nto specify content that will collapse based on a particular breakpoint. Assign a document unique\n<code translate="no" class="notranslate text-nowrap">id</code> value on the <code translate="no" class="notranslate text-nowrap">&lt;b-collapse&gt;</code>.</p>\n<p>Use the <code translate="no" class="notranslate text-nowrap">&lt;b-navbar-toggle&gt;</code> component to control the collapse component, and set the <code translate="no" class="notranslate text-nowrap">target</code> prop\nof <code translate="no" class="notranslate text-nowrap">&lt;b-navbar-toggle&gt;</code> to the <code translate="no" class="notranslate text-nowrap">id</code> of <code translate="no" class="notranslate text-nowrap">&lt;b-collapse&gt;</code>.</p>\n<p>Set the <code translate="no" class="notranslate text-nowrap">toggleable</code> prop on <code translate="no" class="notranslate text-nowrap">&lt;b-navbar&gt;</code> to the desired breakpoint you would like content to\nautomatically expand at. Possible <code translate="no" class="notranslate text-nowrap">toggleable</code> values are <code translate="no" class="notranslate text-nowrap">sm</code>, <code translate="no" class="notranslate text-nowrap">md</code>, <code translate="no" class="notranslate text-nowrap">lg</code> and <code translate="no" class="notranslate text-nowrap">xl</code>. Setting\n<code translate="no" class="notranslate text-nowrap">toggleable</code> to <code translate="no" class="notranslate text-nowrap">true</code> (or an empty string) will set the navbar to be always collapsed, while\nsetting it to <code translate="no" class="notranslate text-nowrap">false</code> (the default) will disable collapsing (always expanded).</p>\n<p><code translate="no" class="notranslate text-nowrap">&lt;b-navbar-toggle&gt;</code> components are left-aligned by default, but should they follow a sibling element\nlike <code translate="no" class="notranslate text-nowrap">&lt;b-navbar-brand&gt;</code>, they&#39;ll automatically be aligned to the far right. Reversing your markup\nwill reverse the placement of the toggler.</p>\n<p>See the first example on this page for reference, and also refer to\n<a href="/docs/components/collapse" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-collapse&gt;</code></a> for details on the collapse component.</p>\n<h2 id="printing" class="bv-no-focus-ring"><span class="bd-content-title">Printing<a class="anchorjs-link" href="#printing" aria-labelledby="printing"></a></span></h2>\n<p>Navbars are hidden by default when printing. Force them to be printed by setting the <code translate="no" class="notranslate text-nowrap">print</code> prop.</p>\n<h2 id="see-also" class="bv-no-focus-ring"><span class="bd-content-title">See also<a class="anchorjs-link" href="#see-also" aria-labelledby="see-also"></a></span></h2>\n<p>Refer to the <a href="/docs/reference/router-links" class="font-weight-bold">Router support</a> reference page for router-link specific\nprops.</p>\n<p>Also see <a href="/docs/components/nav" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-nav&gt;</code></a> for additional components and sub-component aliases.</p>\n\x3c!-- Component reference added automatically from component package.json --\x3e\n'}}]);