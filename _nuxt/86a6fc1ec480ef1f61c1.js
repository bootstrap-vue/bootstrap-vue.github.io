(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{354:function(n,l){n.exports='<h1 id="list-group" class="bv-no-focus-ring"><span class="bd-content-title">List group</span></h1>\n<p class="bd-lead">List groups are a flexible and powerful component for displaying a series of content. List group\nitems can be modified to support just about any content within. They can also be used as\nnavigation via various props.</p>\n<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Morbi leo risus<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Porta ac consectetur ac<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Vestibulum at eros<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group.vue --&gt;</span></pre></div><h2 id="active-items" class="bv-no-focus-ring"><span class="bd-content-title">Active items<a class="anchorjs-link" href="#active-items" aria-labelledby="active-items"></a></span></h2>\n<p>Set the <code class="text-nowrap" translate="no">active</code> prop on a <code class="text-nowrap" translate="no">&lt;b-list-group-item&gt;</code> to indicate the current active selection.</p>\n<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">active</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Morbi leo risus<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Porta ac consectetur ac<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Vestibulum at eros<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-active.vue --&gt;</span></pre></div><h2 id="disabled-items" class="bv-no-focus-ring"><span class="bd-content-title">Disabled items<a class="anchorjs-link" href="#disabled-items" aria-labelledby="disabled-items"></a></span></h2>\n<p>Set the <code class="text-nowrap" translate="no">disabled</code> prop on a <code class="text-nowrap" translate="no">&lt;b-list-group-item&gt;</code> to make it appear disabled (also works with\nactionalable items. see below).</p>\n<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Morbi leo risus<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Porta ac consectetur ac<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Vestibulum at eros<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-disabled.vue --&gt;</span></pre></div><h2 id="actionable-list-group-items" class="bv-no-focus-ring"><span class="bd-content-title">Actionable list group items<a class="anchorjs-link" href="#actionable-list-group-items" aria-labelledby="actionable-list-group-items"></a></span></h2>\n<p>Turn a <code class="text-nowrap" translate="no">&lt;b-list-group-item&gt;</code> into an actionable <em>link</em> (<code class="text-nowrap" translate="no">&lt;a href=&quot;...&quot;&gt;</code>) by specifying either an\n<code class="text-nowrap" translate="no">href</code> prop or <a href="/docs/reference/router-links" class="font-weight-bold">router-link</a> <code class="text-nowrap" translate="no">to</code> prop.</p>\n<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#some-link"</span>&gt;</span>Awesome link<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">active</span>&gt;</span>Link with active state<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Action links are easy<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#foobar"</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled link<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-link.vue --&gt;</span></pre></div><p>Or if you prefer <code class="text-nowrap" translate="no">&lt;button&gt;</code> elements over links, set the <code class="text-nowrap" translate="no">button</code> prop to <code class="text-nowrap" translate="no">true</code>.</p>\n<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">button</span>&gt;</span>Button item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">button</span>&gt;</span>I am a button<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">button</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled button<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">button</span>&gt;</span>This is a button too<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-button.vue --&gt;</span></pre></div><p><strong>Notes:</strong></p>\n<ul>\n<li>When the prop <code class="text-nowrap" translate="no">button</code> is <code class="text-nowrap" translate="no">true</code>, all <a href="/docs/components/link" class="font-weight-bold">link related props</a> (other than\n<code class="text-nowrap" translate="no">active</code>) and the <code class="text-nowrap" translate="no">tag</code> prop will have no effect.</li>\n<li>When <code class="text-nowrap" translate="no">href</code> or <code class="text-nowrap" translate="no">to</code> are set, the <code class="text-nowrap" translate="no">tag</code> prop has no effect.</li>\n</ul>\n<p>Refer to the <a href="/docs/reference/router-links" class="font-weight-bold">Router support</a> reference page for router-link specific\nprops.</p>\n<h2 id="contextual-variants" class="bv-no-focus-ring"><span class="bd-content-title">Contextual variants<a class="anchorjs-link" href="#contextual-variants" aria-labelledby="contextual-variants"></a></span></h2>\n<p>Use contextual variants to style list items with a stateful background and color, via the <code class="text-nowrap" translate="no">variant</code>\nprop.</p>\n<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Default list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span>Primary list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"secondary"</span>&gt;</span>Secondary list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span>&gt;</span>Success list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"danger"</span>&gt;</span>Danger list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"warning"</span>&gt;</span>Warning list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span>&gt;</span>Info list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"light"</span>&gt;</span>Light list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"dark"</span>&gt;</span>Dark list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-variant.vue --&gt;</span></pre></div><p>Contextual variants also work with action items. Note the addition of the hover styling here not\npresent in the previous example. Also supported is the <code class="text-nowrap" translate="no">active</code> state; set it to indicate an active\nselection on a contextual list group item.</p>\n<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Default list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span>Primary list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"secondary"</span>&gt;</span>Secondary list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span>&gt;</span>Success list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"danger"</span>&gt;</span>Danger list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"warning"</span>&gt;</span>Warning list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span>&gt;</span>Info list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"light"</span>&gt;</span>Light list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"dark"</span>&gt;</span>Dark list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-variant-action.vue --&gt;</span></pre></div><h3 id="conveying-meaning-to-assistive-technologies" class="bv-no-focus-ring"><span class="bd-content-title">Conveying meaning to assistive technologies<a class="anchorjs-link" href="#conveying-meaning-to-assistive-technologies" aria-labelledby="conveying-meaning-to-assistive-technologies"></a></span></h3>\n<p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of\nassistive technologies – such as screen readers. Ensure that information denoted by the color is\neither obvious from the content itself (e.g. the visible text), or is included through alternative\nmeans, such as additional text hidden using the <code class="text-nowrap" translate="no">.sr-only</code> class.</p>\n<h2 id="with-badges" class="bv-no-focus-ring"><span class="bd-content-title">With badges<a class="anchorjs-link" href="#with-badges" aria-labelledby="with-badges"></a></span></h2>\n<p>Add <a href="/docs/components/badge" class="font-weight-bold">badges</a> to any list group item to show unread counts, activity, and\nmore with the help of some <a href="http://getbootstrap.com/docs/4.0/utilities/flex/" target="_blank" rel="noopener">utility classes</a>.</p>\n<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex justify-content-between align-items-center"</span>&gt;</span>\n    Cras justo odio\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">pill</span>&gt;</span>14<span class="hljs-tag">&lt;/<span class="hljs-name">b-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex justify-content-between align-items-center"</span>&gt;</span>\n    Dapibus ac facilisis in\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">pill</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">b-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex justify-content-between align-items-center"</span>&gt;</span>\n    Morbi leo risus\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">pill</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">b-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-badges.vue --&gt;</span></pre></div><h2 id="list-groups-inside-cards" class="bv-no-focus-ring"><span class="bd-content-title">List groups inside cards<a class="anchorjs-link" href="#list-groups-inside-cards" aria-labelledby="list-groups-inside-cards"></a></span></h2>\n<p>Incorporate list groups into <a href="/docs/components/card" class="font-weight-bold">cards</a>. Use the <code class="text-nowrap" translate="no">&lt;b-list-group&gt;</code> prop <code class="text-nowrap" translate="no">flush</code>\nprop when using cards with <code class="text-nowrap" translate="no">no-body</code> to make the sides of the list group flush with the card.</p>\n<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-card-group</span> <span class="hljs-attr">deck</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">header</span>=<span class="hljs-string">"Card with list group"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Vestibulum at eros<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"card-text mt-2"</span>&gt;</span>\n      Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum\n      consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur\n      mollit voluptate est in duis laboris ad sit ipsum anim Lorem.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span> <span class="hljs-attr">header</span>=<span class="hljs-string">"Card with flush list group"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span> <span class="hljs-attr">flush</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Vestibulum at eros<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card-body</span>&gt;</span>\n      Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum\n      consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur\n      mollit voluptate est in duis laboris ad sit ipsum anim Lorem.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-card-body</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-card-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-card.vue --&gt;</span></pre></div><h2 id="horizontal-list-groups" class="bv-no-focus-ring"><span class="bd-content-title">Horizontal list groups<a class="anchorjs-link" href="#horizontal-list-groups" aria-labelledby="horizontal-list-groups"></a></span></h2>\n<p>Set the prop <code class="text-nowrap" translate="no">horizontal</code> to <code class="text-nowrap" translate="no">true</code> to change the layout of list group items from vertical to\nhorizontal across all breakpoints. Alternatively, set <code class="text-nowrap" translate="no">horizontal</code> to a responsive breakpoint (<code class="text-nowrap" translate="no">sm</code>,\n<code class="text-nowrap" translate="no">md</code>, <code class="text-nowrap" translate="no">lg</code> or <code class="text-nowrap" translate="no">xl</code>) to make a list group horizontal starting at that breakpoint&#39;s min-width.\nCurrently horizontal list groups cannot be combined with <code class="text-nowrap" translate="no">flush</code> list groups.</p>\n<p><strong>ProTip:</strong> Want equal-width list group items when horizontal? Add the class <code class="text-nowrap" translate="no">flex-fill</code> to each\nlist group item.</p>\n<p><strong>Always horizontal:</strong></p>\n<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span> <span class="hljs-attr">horizontal</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Morbi leo risus<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-horizontal.vue --&gt;</span></pre></div><p><strong>Horizontal at breakpoint <code class="text-nowrap" translate="no">md</code> and above:</strong></p>\n<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span> <span class="hljs-attr">horizontal</span>=<span class="hljs-string">"md"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Morbi leo risus<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-horizontal-md.vue --&gt;</span></pre></div><h2 id="custom-content" class="bv-no-focus-ring"><span class="bd-content-title">Custom content<a class="anchorjs-link" href="#custom-content" aria-labelledby="custom-content"></a></span></h2>\n<p>Add nearly any HTML or component within, even for linked list groups like the one below, with the\nhelp of <a href="/docs/reference/utility-classes" class="font-weight-bold">flexbox utility classes</a>.</p>\n<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">active</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-column align-items-start"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex w-100 justify-content-between"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-1"</span>&gt;</span>List group item heading<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">small</span>&gt;</span>3 days ago<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-1"</span>&gt;</span>\n      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">small</span>&gt;</span>Donec id elit non mi porta.<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-column align-items-start"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex w-100 justify-content-between"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-1"</span>&gt;</span>List group item heading<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">small</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-muted"</span>&gt;</span>3 days ago<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-1"</span>&gt;</span>\n      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">small</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-muted"</span>&gt;</span>Donec id elit non mi porta.<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex-column align-items-start"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex w-100 justify-content-between"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-1"</span>&gt;</span>Disabled List group item<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">small</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-muted"</span>&gt;</span>3 days ago<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-1"</span>&gt;</span>\n      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">small</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-muted"</span>&gt;</span>Donec id elit non mi porta.<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-content.vue --&gt;</span></pre></div>\x3c!-- Component reference added automatically from component package.json --\x3e\n'}}]);