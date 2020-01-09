(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{402:function(n,t){n.exports='<h1 id="pagination" class="bv-no-focus-ring"><span class="bd-content-title">Pagination</span></h1>\n<p class="bd-lead">Quick first, previous, next, last, and page buttons for pagination control of another component\n(such as <code translate="no" class="notranslate text-nowrap">&lt;b-table&gt;</code> or lists).</p>\n<p>For pagination that changes to a new URL, use the\n<a href="/docs/components/pagination-nav" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-pagination-nav&gt;</code></a> component instead.</p>\n<p><strong>Example Usage with <code translate="no" class="notranslate text-nowrap">&lt;b-table&gt;</code>:</strong></p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"overflow-auto"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-pagination</span>\n      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"currentPage"</span>\n      <span class="hljs-attr">:total-rows</span>=<span class="hljs-string">"rows"</span>\n      <span class="hljs-attr">:per-page</span>=<span class="hljs-string">"perPage"</span>\n      <span class="hljs-attr">aria-controls</span>=<span class="hljs-string">"my-table"</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-pagination</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>Current Page: {{ currentPage }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-table</span>\n      <span class="hljs-attr">id</span>=<span class="hljs-string">"my-table"</span>\n      <span class="hljs-attr">:items</span>=<span class="hljs-string">"items"</span>\n      <span class="hljs-attr">:per-page</span>=<span class="hljs-string">"perPage"</span>\n      <span class="hljs-attr">:current-page</span>=<span class="hljs-string">"currentPage"</span>\n      <span class="hljs-attr">small</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-table</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">perPage</span>: <span class="hljs-number">3</span>,\n        <span class="hljs-attr">currentPage</span>: <span class="hljs-number">1</span>,\n        <span class="hljs-attr">items</span>: [\n          { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">first_name</span>: <span class="hljs-string">\'Fred\'</span>, <span class="hljs-attr">last_name</span>: <span class="hljs-string">\'Flintstone\'</span> },\n          { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">first_name</span>: <span class="hljs-string">\'Wilma\'</span>, <span class="hljs-attr">last_name</span>: <span class="hljs-string">\'Flintstone\'</span> },\n          { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">first_name</span>: <span class="hljs-string">\'Barney\'</span>, <span class="hljs-attr">last_name</span>: <span class="hljs-string">\'Rubble\'</span> },\n          { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">first_name</span>: <span class="hljs-string">\'Betty\'</span>, <span class="hljs-attr">last_name</span>: <span class="hljs-string">\'Rubble\'</span> },\n          { <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>, <span class="hljs-attr">first_name</span>: <span class="hljs-string">\'Pebbles\'</span>, <span class="hljs-attr">last_name</span>: <span class="hljs-string">\'Flintstone\'</span> },\n          { <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">first_name</span>: <span class="hljs-string">\'Bamm Bamm\'</span>, <span class="hljs-attr">last_name</span>: <span class="hljs-string">\'Rubble\'</span> },\n          { <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>, <span class="hljs-attr">first_name</span>: <span class="hljs-string">\'The Great\'</span>, <span class="hljs-attr">last_name</span>: <span class="hljs-string">\'Gazzoo\'</span> },\n          { <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>, <span class="hljs-attr">first_name</span>: <span class="hljs-string">\'Rockhead\'</span>, <span class="hljs-attr">last_name</span>: <span class="hljs-string">\'Slate\'</span> },\n          { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">first_name</span>: <span class="hljs-string">\'Pearl\'</span>, <span class="hljs-attr">last_name</span>: <span class="hljs-string">\'Slaghoople\'</span> }\n        ]\n      }\n    },\n    <span class="hljs-attr">computed</span>: {\n      rows() {\n        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.items.length\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-pagination.vue --&gt;</span></pre><h2 id="overview" class="bv-no-focus-ring"><span class="bd-content-title">Overview<a class="anchorjs-link" href="#overview" aria-label="Anchor"></a></span></h2>\n<p><code translate="no" class="notranslate text-nowrap">&lt;b-pagination&gt;</code> is a custom input component that provides a current page number input control. The\nvalue should be bound via <code translate="no" class="notranslate text-nowrap">v-model</code> in your app. Page numbers are indexed from 1. The number of\npages is computed from the provided prop values for <code translate="no" class="notranslate text-nowrap">total-rows</code> and <code translate="no" class="notranslate text-nowrap">per-page</code>.</p>\n<h2 id="customizing-appearance" class="bv-no-focus-ring"><span class="bd-content-title">Customizing appearance<a class="anchorjs-link" href="#customizing-appearance" aria-label="Anchor"></a></span></h2>\n<p><code translate="no" class="notranslate text-nowrap">&lt;b-pagination&gt;</code> supports several props/slots that allow you to customize the appearance. All\n<code translate="no" class="notranslate text-nowrap">*-text</code> props are text-only and strip out HTML but you can use their equally named slot\ncounterparts for that.</p>\n<h3 id="limiting-the-number-of-displayed-buttons" class="bv-no-focus-ring"><span class="bd-content-title">Limiting the number of displayed buttons<a class="anchorjs-link" href="#limiting-the-number-of-displayed-buttons" aria-label="Anchor"></a></span></h3>\n<p>To restrict the number of page buttons (including the ellipsis, but excluding the first, prev, next,\nand last buttons) shown, use the <code translate="no" class="notranslate text-nowrap">limit</code> prop to specify the desired number of page buttons\n(including the ellipsis, if shown). The default <code translate="no" class="notranslate text-nowrap">limit</code> is <code translate="no" class="notranslate text-nowrap">5</code>. The minimum supported value is <code translate="no" class="notranslate text-nowrap">3</code>.\nWhen <code translate="no" class="notranslate text-nowrap">limit</code> is set to <code translate="no" class="notranslate text-nowrap">3</code>, no ellipsis indicators will be shown for practical purposes.</p>\n<p>The <code translate="no" class="notranslate text-nowrap">first</code> and <code translate="no" class="notranslate text-nowrap">last</code> buttons can be optionally hidden by setting the <code translate="no" class="notranslate text-nowrap">hide-goto-end-buttons</code> prop.</p>\n<p>The showing of the <code translate="no" class="notranslate text-nowrap">ellipsis</code> can be optionally disabled by setting the <code translate="no" class="notranslate text-nowrap">hide-ellipsis</code> prop.</p>\n<h4 id="small-screen-support" class="bv-no-focus-ring"><span class="bd-content-title">Small screen support<a class="anchorjs-link" href="#small-screen-support" aria-label="Anchor"></a></span></h4>\n<p>On smaller screens (i.e. mobile), some of the <code translate="no" class="notranslate text-nowrap">&lt;b-pagination&gt;</code> buttons will be hidden to minimize\nthe potential of the pagination interface wrapping onto multiple lines:</p>\n<ul>\n<li>The ellipsis indicators will be hidden on screens <code translate="no" class="notranslate text-nowrap">xs</code> and smaller.</li>\n<li>Page number buttons will be limited to a maximum of 3 visible on <code translate="no" class="notranslate text-nowrap">xs</code> screens and smaller.</li>\n</ul>\n<p>This ensures that no more than 3 page number buttons are visible, along with the goto <em>first</em>,\n<em>prev</em>, <em>next</em>, and <em>last</em> buttons.</p>\n<h3 id="button-content" class="bv-no-focus-ring"><span class="bd-content-title">Button content<a class="anchorjs-link" href="#button-content" aria-label="Anchor"></a></span></h3>\n<p>For a full list of all available slots see the <a href="#comp-ref-b-pagination-slots" class="font-weight-bold">Slots</a> section below.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"overflow-auto"</span>&gt;</span>\n    <span class="hljs-comment">&lt;!-- Use text in props --&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-pagination</span>\n      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"currentPage"</span>\n      <span class="hljs-attr">:total-rows</span>=<span class="hljs-string">"rows"</span>\n      <span class="hljs-attr">:per-page</span>=<span class="hljs-string">"perPage"</span>\n      <span class="hljs-attr">first-text</span>=<span class="hljs-string">"First"</span>\n      <span class="hljs-attr">prev-text</span>=<span class="hljs-string">"Prev"</span>\n      <span class="hljs-attr">next-text</span>=<span class="hljs-string">"Next"</span>\n      <span class="hljs-attr">last-text</span>=<span class="hljs-string">"Last"</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-pagination</span>&gt;</span>\n\n    <span class="hljs-comment">&lt;!-- Use emojis in props --&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-pagination</span>\n      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"currentPage"</span>\n      <span class="hljs-attr">:total-rows</span>=<span class="hljs-string">"rows"</span>\n      <span class="hljs-attr">:per-page</span>=<span class="hljs-string">"perPage"</span>\n      <span class="hljs-attr">first-text</span>=<span class="hljs-string">"⏮"</span>\n      <span class="hljs-attr">prev-text</span>=<span class="hljs-string">"⏪"</span>\n      <span class="hljs-attr">next-text</span>=<span class="hljs-string">"⏩"</span>\n      <span class="hljs-attr">last-text</span>=<span class="hljs-string">"⏭"</span>\n      <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-4"</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-pagination</span>&gt;</span>\n\n    <span class="hljs-comment">&lt;!-- Use HTML and sub-components in slots --&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-pagination</span>\n      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"currentPage"</span>\n      <span class="hljs-attr">:total-rows</span>=<span class="hljs-string">"rows"</span>\n      <span class="hljs-attr">:per-page</span>=<span class="hljs-string">"perPage"</span>\n      <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-4"</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:first-text</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-success"</span>&gt;</span>First<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:prev-text</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-danger"</span>&gt;</span>Prev<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:next-text</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-warning"</span>&gt;</span>Next<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:last-text</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-info"</span>&gt;</span>Last<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:ellipsis-text</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">small</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"grow"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">small</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"grow"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">small</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"grow"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:page</span>=<span class="hljs-string">"{ page, active }"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">"active"</span>&gt;</span>{{ page }}<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">v-else</span>&gt;</span>{{ page }}<span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-pagination</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">rows</span>: <span class="hljs-number">100</span>,\n        <span class="hljs-attr">perPage</span>: <span class="hljs-number">10</span>,\n        <span class="hljs-attr">currentPage</span>: <span class="hljs-number">1</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-pagination-appearance.vue --&gt;</span></pre><p>The slot <code translate="no" class="notranslate text-nowrap">page</code> is always scoped, while the slots <code translate="no" class="notranslate text-nowrap">first-text</code>, <code translate="no" class="notranslate text-nowrap">prev-text</code>, <code translate="no" class="notranslate text-nowrap">next-text</code> and\n<code translate="no" class="notranslate text-nowrap">last-text</code> are optionally scoped. The <code translate="no" class="notranslate text-nowrap">ellipsis-text</code> slot is not scoped.</p>\n<p><strong>Scoped variables properties available to the <code translate="no" class="notranslate text-nowrap">page</code> slot:</strong></p>\n<div class="table-responsive-sm"><table class="b-table table table-bordered table-striped bv-docs-table">\n<thead class="thead-default">\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code translate="no" class="notranslate text-nowrap">page</code></td>\n<td>Number</td>\n<td>Page number (from <code translate="no" class="notranslate text-nowrap">1</code> to <code translate="no" class="notranslate text-nowrap">numberOfPages</code>)</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">index</code></td>\n<td>Number</td>\n<td>Page number (indexed from <code translate="no" class="notranslate text-nowrap">0</code> to <code translate="no" class="notranslate text-nowrap">numberOfPages -1</code>)</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">active</code></td>\n<td>Boolean</td>\n<td>If the page is the active page</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">disabled</code></td>\n<td>Boolean</td>\n<td>If the page button is disabled</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">content</code></td>\n<td>String</td>\n<td>Page number as a string</td>\n</tr>\n</tbody></table>\n</div><p><strong>Scoped variables properties available to the <code translate="no" class="notranslate text-nowrap">first-text</code>, <code translate="no" class="notranslate text-nowrap">prev-text</code>, <code translate="no" class="notranslate text-nowrap">next-text</code> and\n<code translate="no" class="notranslate text-nowrap">last-text</code> slots:</strong></p>\n<div class="table-responsive-sm"><table class="b-table table table-bordered table-striped bv-docs-table">\n<thead class="thead-default">\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code translate="no" class="notranslate text-nowrap">page</code></td>\n<td>Number</td>\n<td>Page number (from <code translate="no" class="notranslate text-nowrap">1</code> to <code translate="no" class="notranslate text-nowrap">numberOfPages</code>)</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">index</code></td>\n<td>Number</td>\n<td>Page number (indexed from <code translate="no" class="notranslate text-nowrap">0</code> to <code translate="no" class="notranslate text-nowrap">numberOfPages -1</code>)</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">disabled</code></td>\n<td>Boolean</td>\n<td>If the page button is disabled</td>\n</tr>\n</tbody></table>\n</div><h3 id="button-size" class="bv-no-focus-ring"><span class="bd-content-title">Button size<a class="anchorjs-link" href="#button-size" aria-label="Anchor"></a></span></h3>\n<p>Optionally change from the default button size by setting the <code translate="no" class="notranslate text-nowrap">size</code> prop to either <code translate="no" class="notranslate text-nowrap">&#39;sm&#39;</code> for\nsmaller buttons or <code translate="no" class="notranslate text-nowrap">&#39;lg&#39;</code> for larger buttons.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"overflow-auto"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h6</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-name">h6</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"currentPage"</span> <span class="hljs-attr">:total-rows</span>=<span class="hljs-string">"rows"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-pagination</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h6</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-name">h6</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"currentPage"</span> <span class="hljs-attr">:total-rows</span>=<span class="hljs-string">"rows"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-pagination</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h6</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-name">h6</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"currentPage"</span> <span class="hljs-attr">:total-rows</span>=<span class="hljs-string">"rows"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-pagination</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">rows</span>: <span class="hljs-number">100</span>,\n        <span class="hljs-attr">currentPage</span>: <span class="hljs-number">1</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-pagination-size.vue --&gt;</span></pre><h3 id="pill-style" class="bv-no-focus-ring"><span class="bd-content-title">Pill style<a class="anchorjs-link" href="#pill-style" aria-label="Anchor"></a></span></h3>\n<p>Easily switch to pill style buttons by setting the <code translate="no" class="notranslate text-nowrap">pills</code> prop</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"overflow-auto"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h6</span>&gt;</span>Small Pills<span class="hljs-tag">&lt;/<span class="hljs-name">h6</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"currentPage"</span> <span class="hljs-attr">pills</span> <span class="hljs-attr">:total-rows</span>=<span class="hljs-string">"rows"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-pagination</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h6</span>&gt;</span>Default Pills<span class="hljs-tag">&lt;/<span class="hljs-name">h6</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"currentPage"</span> <span class="hljs-attr">pills</span> <span class="hljs-attr">:total-rows</span>=<span class="hljs-string">"rows"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-pagination</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h6</span>&gt;</span>Large Pills<span class="hljs-tag">&lt;/<span class="hljs-name">h6</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"currentPage"</span> <span class="hljs-attr">pills</span> <span class="hljs-attr">:total-rows</span>=<span class="hljs-string">"rows"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-pagination</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">rows</span>: <span class="hljs-number">100</span>,\n        <span class="hljs-attr">currentPage</span>: <span class="hljs-number">1</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-pagination-pills.vue --&gt;</span></pre><p><strong>Note:</strong> Pill styling requires BootstrapVue&#39;s custom CSS/SCSS.</p>\n<h3 id="alignment" class="bv-no-focus-ring"><span class="bd-content-title">Alignment<a class="anchorjs-link" href="#alignment" aria-label="Anchor"></a></span></h3>\n<p>By default the pagination component is left aligned. Change the alignment to <code translate="no" class="notranslate text-nowrap">center</code>, <code translate="no" class="notranslate text-nowrap">right</code>\n(<code translate="no" class="notranslate text-nowrap">right</code> is an alias for <code translate="no" class="notranslate text-nowrap">end</code>), or <code translate="no" class="notranslate text-nowrap">fill</code> by setting the prop <code translate="no" class="notranslate text-nowrap">align</code> to the appropriate value.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"overflow-auto"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h6</span>&gt;</span>Left alignment (default)<span class="hljs-tag">&lt;/<span class="hljs-name">h6</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"currentPage"</span> <span class="hljs-attr">:total-rows</span>=<span class="hljs-string">"rows"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-pagination</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h6</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span>Center alignment<span class="hljs-tag">&lt;/<span class="hljs-name">h6</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"currentPage"</span> <span class="hljs-attr">:total-rows</span>=<span class="hljs-string">"rows"</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"center"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-pagination</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h6</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-right"</span>&gt;</span>Right (end) alignment<span class="hljs-tag">&lt;/<span class="hljs-name">h6</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"currentPage"</span> <span class="hljs-attr">:total-rows</span>=<span class="hljs-string">"rows"</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-pagination</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h6</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span>Fill alignment<span class="hljs-tag">&lt;/<span class="hljs-name">h6</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"currentPage"</span> <span class="hljs-attr">:total-rows</span>=<span class="hljs-string">"rows"</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"fill"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-pagination</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">rows</span>: <span class="hljs-number">100</span>,\n        <span class="hljs-attr">currentPage</span>: <span class="hljs-number">3</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-pagination-alignment.vue --&gt;</span></pre><h2 id="accessibility" class="bv-no-focus-ring"><span class="bd-content-title">Accessibility<a class="anchorjs-link" href="#accessibility" aria-label="Anchor"></a></span></h2>\n<p>The <code translate="no" class="notranslate text-nowrap">&lt;b-pagination&gt;</code> component provides many features to support assistive technology users, such as\n<code translate="no" class="notranslate text-nowrap">aria-</code> attributes and keyboard navigation.</p>\n<h3 id="aria-controls" class="bv-no-focus-ring"><span class="bd-content-title"><code translate="no" class="notranslate text-nowrap">aria-controls</code><a class="anchorjs-link" href="#aria-controls" aria-label="Anchor"></a></span></h3>\n<p>When pagination is controlling another component on the page (such as <code translate="no" class="notranslate text-nowrap">&lt;b-table&gt;</code>), set the\n<code translate="no" class="notranslate text-nowrap">aria-controls</code> prop to the <code translate="no" class="notranslate text-nowrap">id</code> of the element it is controlling. This will help non-sighted users\nknow what component is being updated/controlled.</p>\n<h3 id="aria-labels" class="bv-no-focus-ring"><span class="bd-content-title">ARIA labels<a class="anchorjs-link" href="#aria-labels" aria-label="Anchor"></a></span></h3>\n<p><code translate="no" class="notranslate text-nowrap">&lt;b-pagination&gt;</code> provides various <code translate="no" class="notranslate text-nowrap">*-label-*</code> props which are used to set the <code translate="no" class="notranslate text-nowrap">aria-label</code>\nattributes on the various elements within the component, which will help users of assistive\ntechnology.</p>\n<div class="table-responsive-sm"><table class="b-table table table-bordered table-striped bv-docs-table">\n<thead class="thead-default">\n<tr>\n<th>Prop</th>\n<th><code translate="no" class="notranslate text-nowrap">aria-label</code> content default</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code translate="no" class="notranslate text-nowrap">label-first-page</code></td>\n<td>&quot;Goto first page&quot;</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">label-prev-page</code></td>\n<td>&quot;Goto previous page&quot;</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">label-next-page</code></td>\n<td>&quot;Goto next page&quot;</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">label-last-page</code></td>\n<td>&quot;Goto last page&quot;</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">label-page</code></td>\n<td>&quot;Goto page&quot;, appended with the page number</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">aria-label</code></td>\n<td>&quot;Pagination&quot;, applied to the outer pagination container</td>\n</tr>\n</tbody></table>\n</div><p>The <code translate="no" class="notranslate text-nowrap">label-page</code> will optionally accept a function to generate the aria-label. The function is\npassed a single argument which is the page number (indexed from 1 to number of pages).</p>\n<p>You can remove any label by setting the prop to an empty string (<code translate="no" class="notranslate text-nowrap">&#39;&#39;</code>), although this is not\nrecommended unless the content of the button textually conveys it&#39;s purpose.</p>\n<h3 id="keyboard-navigation-support" class="bv-no-focus-ring"><span class="bd-content-title">Keyboard navigation support<a class="anchorjs-link" href="#keyboard-navigation-support" aria-label="Anchor"></a></span></h3>\n<p><code translate="no" class="notranslate text-nowrap">&lt;b-pagination&gt;</code> supports keyboard navigation out of the box, and follows the\n<a href="https://www.w3.org/TR/wai-aria-practices-1.2/#kbd_roving_tabindex" target="_blank" rel="noopener">WAI-ARIA roving tabindex</a>\npattern.</p>\n<ul>\n<li>Tabbing into the pagination component will autofocus the current active page button</li>\n<li><kbd class="notranslate" translate="no">LEFT</kbd> (or <kbd class="notranslate" translate="no">UP</kbd>) and <kbd class="notranslate" translate="no">RIGHT</kbd> (or <kbd class="notranslate" translate="no">DOWN</kbd>) arrow keys will focus\nthe previous and next buttons, respectively, in the page list</li>\n<li><kbd class="notranslate" translate="no">ENTER</kbd> or <kbd class="notranslate" translate="no">SPACE</kbd> keys will select (click) the currently focused page button</li>\n<li>Pressing <kbd class="notranslate" translate="no">TAB</kbd> will move to the next control or link on the page, while pressing\n<kbd class="notranslate" translate="no">SHIFT</kbd>+<kbd class="notranslate" translate="no">TAB</kbd> will move to the previous control or link on the page.</li>\n</ul>\n<h2 id="see-also" class="bv-no-focus-ring"><span class="bd-content-title">See also<a class="anchorjs-link" href="#see-also" aria-label="Anchor"></a></span></h2>\n<p>For navigation based pagination, please see the\n<a href="/docs/components/pagination-nav" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-pagination-nav&gt;</code></a> component.</p>\n\x3c!-- Component reference added automatically from component package.json --\x3e\n'}}]);