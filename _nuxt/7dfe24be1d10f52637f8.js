(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{399:function(n,t){n.exports='<h1 id=button-group class=bv-no-focus-ring><span class=bd-content-title>Button group</span></h1> <p class=bd-lead>Group a series of buttons together on a single line with <code class=text-nowrap translate=no>&lt;b-button-group&gt;</code>.</p> <h2 id=overview class=bv-no-focus-ring><span class=bd-content-title>Overview<a class=anchorjs-link href=#overview aria-labelledby=overview></a></span></h2> <p>Button groups are an easy way to group a series of buttons together.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-button-group</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>Button 1<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>Button 2<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>Button 3<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-button-group</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-3"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-button-group</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"success"</span>&gt;</span>Success<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"info"</span>&gt;</span>Info<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"warning"</span>&gt;</span>Warning<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-button-group</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-button-group.vue --&gt;</span></pre></div><h2 id=sizing class=bv-no-focus-ring><span class=bd-content-title>Sizing<a class=anchorjs-link href=#sizing aria-labelledby=sizing></a></span></h2> <p>Set the size prop to <code class=text-nowrap translate=no>lg</code> or <code class=text-nowrap translate=no>sm</code> to render larger or smaller, respectively, buttons. There is no need to specify the size on the individual buttons.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-button-group</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>Button 1<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>Button 2<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>Button 3<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-button-group</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-3"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-button-group</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"sm"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>Left<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>Middle<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>Right<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-button-group</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-3"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-button-group</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"lg"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>Left<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>Middle<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>Right<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-button-group</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-button-group-sizes.vue --&gt;</span></pre></div><h2 id=vertical-variation class=bv-no-focus-ring><span class=bd-content-title>Vertical variation<a class=anchorjs-link href=#vertical-variation aria-labelledby=vertical-variation></a></span></h2> <p>Make a set of buttons appear vertically stacked rather than horizontally by setting the <code class=text-nowrap translate=no>vertical</code> prop. Split button dropdowns are not supported here.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button-group</span> <span class=hljs-attr>vertical</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>Top<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>Middle<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>Bottom<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-button-group</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-button-group-vertical.vue --&gt;</span></pre></div><h2 id=dropdown-menu-support class=bv-no-focus-ring><span class=bd-content-title>Dropdown menu support<a class=anchorjs-link href=#dropdown-menu-support aria-labelledby=dropdown-menu-support></a></span></h2> <p>Add <a href=/docs/components/dropdown class=font-weight-bold><code class=text-nowrap translate=no>&lt;b-dropdown&gt;</code></a> menus directly inside your <code class=text-nowrap translate=no>&lt;b-button-group&gt;</code>. Note that split dropdown menus are not supported when prop <code class=text-nowrap translate=no>vertical</code> is set.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button-group</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-dropdown</span> <span class=hljs-attr>right</span> <span class=hljs-attr>text</span>=<span class=hljs-string>"Menu"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-dropdown-item</span>&gt;</span>Item 1<span class=hljs-tag>&lt;/<span class=hljs-name>b-dropdown-item</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-dropdown-item</span>&gt;</span>Item 2<span class=hljs-tag>&lt;/<span class=hljs-name>b-dropdown-item</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-dropdown-divider</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-dropdown-divider</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-dropdown-item</span>&gt;</span>Item 3<span class=hljs-tag>&lt;/<span class=hljs-name>b-dropdown-item</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-dropdown</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-dropdown</span> <span class=hljs-attr>right</span> <span class=hljs-attr>split</span> <span class=hljs-attr>text</span>=<span class=hljs-string>"Split Menu"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-dropdown-item</span>&gt;</span>Item 1<span class=hljs-tag>&lt;/<span class=hljs-name>b-dropdown-item</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-dropdown-item</span>&gt;</span>Item 2<span class=hljs-tag>&lt;/<span class=hljs-name>b-dropdown-item</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-dropdown-divider</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-dropdown-divider</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-dropdown-item</span>&gt;</span>Item 3<span class=hljs-tag>&lt;/<span class=hljs-name>b-dropdown-item</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-dropdown</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-button-group</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-button-group-menu.vue --&gt;</span></pre></div><h2 id=see-also class=bv-no-focus-ring><span class=bd-content-title>See also<a class=anchorjs-link href=#see-also aria-labelledby=see-also></a></span></h2> <p>Also check out the <a href=/docs/components/button-toolbar class=font-weight-bold><code class=text-nowrap translate=no>&lt;b-button-toolbar&gt;</code></a> component for generating toolbars containing button groups and input groups.</p> '}}]);