(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{326:function(n,t){n.exports='<h1 id="button-group" class="bv-no-focus-ring"><span class="bd-content-title">Button group</span></h1>\n<p class="bd-lead">Group a series of buttons together on a single line with <code translate="no" class="notranslate text-nowrap">&lt;b-button-group&gt;</code>.</p>\n<p><strong>Example 1:</strong> Default button group and button group using contextual variants</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Button 1<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Button 2<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Button 3<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"warning"</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-group.vue --&gt;</span></pre><h2 id="sizing" class="bv-no-focus-ring"><span class="bd-content-title">Sizing<a class="anchorjs-link" href="#sizing" aria-labelledby="sizing"></a></span></h2>\n<p>Set the size prop to <code translate="no" class="notranslate text-nowrap">lg</code> or <code translate="no" class="notranslate text-nowrap">sm</code> to render larger or smaller, respectively, buttons. There is no\nneed to specify the size on the individual buttons.</p>\n<p><strong>Example 2:</strong> Default, Small, and Large button groups</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Button 1<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Button 2<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Button 3<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Left<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Middle<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Right<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Left<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Middle<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Right<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-group-sizes.vue --&gt;</span></pre><h2 id="vertical-variation" class="bv-no-focus-ring"><span class="bd-content-title">Vertical variation<a class="anchorjs-link" href="#vertical-variation" aria-labelledby="vertical-variation"></a></span></h2>\n<p>Make a set of buttons appear vertically stacked rather than horizontally by setting the <code translate="no" class="notranslate text-nowrap">vertical</code>\nprop. Split button dropdowns are not supported here.</p>\n<p><strong>Example 3:</strong> Vertical button group</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">vertical</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Top<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Middle<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Bottom<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-group-vertical.vue --&gt;</span></pre><h2 id="dropdown-menu-support" class="bv-no-focus-ring"><span class="bd-content-title">Dropdown menu support<a class="anchorjs-link" href="#dropdown-menu-support" aria-labelledby="dropdown-menu-support"></a></span></h2>\n<p>Add <a href="/docs/components/dropdown" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-dropdown&gt;</code></a> menus directly inside your <code translate="no" class="notranslate text-nowrap">&lt;b-button-group&gt;</code>. Note\nthat split dropdown menus are not supported when prop <code translate="no" class="notranslate text-nowrap">vertical</code> is set.</p>\n<p><strong>Example 4:</strong> button group with dropdown menus</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown</span> <span class="hljs-attr">right</span> <span class="hljs-attr">text</span>=<span class="hljs-string">"Menu"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Item 1<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Item 2<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-divider</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-divider</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Item 3<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown</span> <span class="hljs-attr">right</span> <span class="hljs-attr">split</span> <span class="hljs-attr">text</span>=<span class="hljs-string">"Split Menu"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Item 1<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Item 2<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-divider</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-divider</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Item 3<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-group-menu.vue --&gt;</span></pre><h2 id="see-also" class="bv-no-focus-ring"><span class="bd-content-title">See also<a class="anchorjs-link" href="#see-also" aria-labelledby="see-also"></a></span></h2>\n<p>Also check out the <a href="/docs/components/button-toolbar" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-button-toolbar&gt;</code></a> component for generating\ntoolbars containing button groups and input groups.</p>\n\x3c!-- Component reference added automatically from component package.json --\x3e\n'}}]);