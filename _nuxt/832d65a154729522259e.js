(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{415:function(s,a){s.exports='<h1 id="buttons">Buttons</h1>\n<blockquote>\n<p>Use Bootstrap&#x2019;s custom <code>b-button</code> component for actions in forms, dialogs, and more.\nIncludes support for a handful of contextual variations, sizes, states, and more.</p>\n</blockquote>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;variant in [&apos;primary&apos;,&apos;secondary&apos;,&apos;success&apos;,&apos;outline-success&apos;,&apos;warning&apos;,&apos;danger&apos;,&apos;link&apos;]&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-md-4 pb-2&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;size in [&apos;sm&apos;,&apos;&apos;,&apos;lg&apos;]&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;`${variant}_${size}`&quot;</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;size&quot;</span> <span class="hljs-attr">:variant</span>=<span class="hljs-string">&quot;variant&quot;</span>&gt;</span>\n                {{variant}} {{size}}\n            <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- button-1.vue --&gt;</span>\n</pre>\n<h2 id="button-element-type">Button element type</h2>\n<p>The <code>&lt;b-button&gt;</code> component generally renders a <code>&lt;button&gt;</code> element. However, you can also\nrender an <code>&lt;a&gt;</code> element by providing an <code>href</code> prop value. You man also generate\n<code>vue-router</code> <code>&lt;router-link&gt;</code> when providing a value for the <code>to</code> prop (<code>vue-router</code>\nis required).</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>I am a Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>I am a Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- button-2.vue --&gt;</span>\n</pre>\n<h2 id="button-type">Button type</h2>\n<p>When neither <code>href</code> nor <code>to</code> props are provided, <code>&lt;b-button&gt;</code> renders an html <code>&lt;button&gt;</code>\nelement. You can specify the button&apos;s type by setting the prop <code>type</code> to <code>button</code>,\n<code>submit</code> or <code>reset</code>. The default type is <code>button</code>.</p>\n<h2 id="button-sizing">Button sizing</h2>\n<p>Fancy larger or smaller buttons? Specify <code>lg</code> or <code>sm</code> via the <code>size</code> prop.</p>\n<p>Create block level buttons &#x2014; those that span the full width of a parent &#x2014; by\nsetting the <code>block</code> prop.</p>\n<h2 id="button-contextual-variants">Button contextual variants</h2>\n<p>Use the <code>variant</code> prop to generate the various bootstrap contextual button variants.</p>\n<p>By default <code>&lt;b-button&gt;</code> will render with the <code>secondary</code> variant.</p>\n<h3 id="solid-color-variants">Solid color variants</h3>\n<p><code>primary</code>, <code>secondary</code>, <code>success</code>, <code>warning</code>, and <code>danger</code>.</p>\n<h3 id="outline-color-variants">Outline color variants</h3>\n<p>In need of a button, but not the hefty background colors they bring? Use the\n<code>outline-*</code> variants to remove all background images and colors on any <code>&lt;b-button&gt;</code>:</p>\n<p><code>outline-primary</code>, <code>outline-secondary</code>, <code>outline-success</code>, <code>outline-warning</code>,\nand <code>outline-danger</code>.</p>\n<h3 id="link-variant">Link variant</h3>\n<p>Variant <code>link</code> will render a button with the appearance of a link while maintaining the\ndefault padding and size of a button.</p>\n<h2 id="disabled-state">Disabled state</h2>\n<p>Set the <code>disabled</code> prop to disable button default functionality. <code>disabled</code> also\nworks with buttons, rendered as <code>&lt;a&gt;</code> elements and <code>&lt;router-link&gt;</code>.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Not Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- button-3.vue --&gt;</span>\n</pre>\n<h2 id="pressed-state-and-toggling">Pressed state and toggling</h2>\n<p>Buttons will appear pressed (with a darker background, darker border, and inset shadow)\nwhen the prop <code>pressed</code> is set to <code>true</code>.</p>\n<p>The <code>pressed</code> prop can be set to one of three values:</p>\n<ul>\n<li><code>true</code>: Sets the <code>.active</code> class and adds the attribute <code>aria-pressed=&quot;true&quot;</code>.</li>\n<li><code>false</code>: Clears the <code>.active</code> class and adds the attribute <code>aria-pressed=&quot;false&quot;</code>.</li>\n<li><code>null</code>: (default) Neither the class <code>.active</code> nor the attribute <code>aria-pressed</code> will be set.</li>\n</ul>\n<p>To create a button that can be toggled between active and non-active states, use\nthe <code>.sync</code> prop modifier (available in Vue 2.3+) on the <code>pressed</code> property</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Pressed and un-pressed state<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">:pressed</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Always Pressed<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">:pressed</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Not Pressed<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Toggleable Button<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">:pressed.sync</span>=<span class="hljs-string">&quot;myToggle&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Toggle Me<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Pressed State: <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{ myToggle }}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>In a button group<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;btn in buttons&quot;</span> <span class="hljs-attr">:pressed.sync</span>=<span class="hljs-string">&quot;btn.state&quot;</span> <span class="hljs-attr">:variant</span>=<span class="hljs-string">&quot;btn.variant&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;btn.variant&quot;</span>&gt;</span>\n        {{ btn.caption }}\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Pressed States: <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{ btnStates }}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">myToggle</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">buttons</span>: [\n        { <span class="hljs-attr">variant</span>: <span class="hljs-string">&apos;primary&apos;</span>, <span class="hljs-attr">caption</span>: <span class="hljs-string">&apos;Toggle 1&apos;</span>, <span class="hljs-attr">state</span>: <span class="hljs-literal">true</span> },\n        { <span class="hljs-attr">variant</span>: <span class="hljs-string">&apos;danger&apos;</span>, <span class="hljs-attr">caption</span>: <span class="hljs-string">&apos;Toggle 2&apos;</span>, <span class="hljs-attr">state</span>: <span class="hljs-literal">false</span> },\n        { <span class="hljs-attr">variant</span>: <span class="hljs-string">&apos;warning&apos;</span>, <span class="hljs-attr">caption</span>: <span class="hljs-string">&apos;Toggle 3&apos;</span>, <span class="hljs-attr">state</span>: <span class="hljs-literal">true</span> },\n        { <span class="hljs-attr">variant</span>: <span class="hljs-string">&apos;success&apos;</span>, <span class="hljs-attr">caption</span>: <span class="hljs-string">&apos;No Toggle&apos;</span>, <span class="hljs-attr">state</span>: <span class="hljs-literal">null</span> },\n        { <span class="hljs-attr">variant</span>: <span class="hljs-string">&apos;outline-success&apos;</span>, <span class="hljs-attr">caption</span>: <span class="hljs-string">&apos;Toggle 5&apos;</span>, <span class="hljs-attr">state</span>: <span class="hljs-literal">false</span> },\n        { <span class="hljs-attr">variant</span>: <span class="hljs-string">&apos;outline-primary&apos;</span>, <span class="hljs-attr">caption</span>: <span class="hljs-string">&apos;Toggle 6&apos;</span>, <span class="hljs-attr">state</span>: <span class="hljs-literal">false</span> }\n      ]\n    }\n  },\n  <span class="hljs-attr">computed</span>: {\n    btnStates () {\n      <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.buttons.map(<span class="hljs-function"><span class="hljs-params">btn</span> =&gt;</span> btn.state)\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- button-4.vue --&gt;</span>\n</pre>\n<p>If using toggle button style for a radio or checkbox style interface, it is best to use the\nbuilt-in <code>button</code> style support of <a href="/docs/components/form-radios"><code>&lt;b-form-radio-group&gt;</code></a> and\n<a href="/docs/components/form-checkboxes"><code>&lt;b-checkbox-group&gt;</code></a>.</p>\n<h2 id="router-link-support">Router link support</h2>\n<p>Refer to the <a href="/docs/reference/router-links"><code>Router support</code></a> reference docs for the\nvarious supported <code>&lt;router-link&gt;</code> related props.</p>\n<p>Note the <code>&lt;router-link&gt;</code> prop <code>tag</code> is referred to as <code>router-tag</code> in <code>bootstrap-vue</code>.</p>\n<h2 id="button-component-alias">Button component alias</h2>\n<p><code>&lt;b-button&gt;</code> can also be used by its shorter alias <code>&lt;b-btn&gt;</code>.</p>\n<h2 id="see-also">See also</h2>\n<ul>\n<li><a href="/docs/components/button-group"><code>&lt;b-button-group&gt;</code></a></li>\n<li><a href="/docs/components/button-toolbar"><code>&lt;b-button-toolbar&gt;</code></a></li>\n<li><a href="/docs/components/link"><code>&lt;b-link&gt;</code></a></li>\n<li><a href="/docs/reference/router-links"><code>Router Link Support</code></a></li>\n</ul>\n<h2 id="component-reference">Component Reference</h2>\n'}}]);