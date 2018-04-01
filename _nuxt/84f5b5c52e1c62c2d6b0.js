(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{406:function(s,a){s.exports='<h1 id="form-checkbox-inputs">Form Checkbox Inputs</h1>\n<blockquote>\n<p>For cross browser consistency, <code>&lt;b-form-checkbox-group&gt;</code> and <code>&lt;b-form-checkbox&gt;</code> use\nBootstrap&apos;s custom checkbox input to replace the browser default checkbox input. It\nis built on top of semantic and accessible markup, so it is a solid replacement for\nthe default checkbox input.</p>\n</blockquote>\n<p><strong>Example 1:</strong> Single checkbox</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;checkbox1&quot;</span>\n                     <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;status&quot;</span>\n                     <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;accepted&quot;</span>\n                     <span class="hljs-attr">unchecked-value</span>=<span class="hljs-string">&quot;not_accepted&quot;</span>&gt;</span>\n      I accept the terms and use\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>State: <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{status}}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">status</span>: <span class="hljs-string">&apos;not_accepted&apos;</span>\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- form-checkbox-1.vue --&gt;</span>\n</pre>\n<p><strong>Example 2:</strong> Multiple choice checkboxes</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Using &lt;code&gt;options&lt;/code&gt; array:&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox-group</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;checkboxes1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;flavour1&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;selected&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Using sub-components:&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox-group</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;checkboxes2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;flavour2&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;selected&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;orange&quot;</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;pineapple&quot;</span>&gt;</span>Pineapple<span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;grape&quot;</span>&gt;</span>Grape<span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">hr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Selected: <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{ selected }}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">selected</span>: [], <span class="hljs-comment">// Must be an array reference!</span>\n      options: [\n        {<span class="hljs-attr">text</span>: <span class="hljs-string">&apos;Orange&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&apos;orange&apos;</span>},\n        {<span class="hljs-attr">text</span>: <span class="hljs-string">&apos;Apple&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&apos;apple&apos;</span>},\n        {<span class="hljs-attr">text</span>: <span class="hljs-string">&apos;Pineapple&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&apos;pineapple&apos;</span>},\n        {<span class="hljs-attr">text</span>: <span class="hljs-string">&apos;Grape&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&apos;grape&apos;</span>}\n      ]\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- form-checkbox-2.vue --&gt;</span>\n</pre>\n<p>Feel free to mix and match <code>options</code> prop and <code>&lt;b-form-checkbox&gt;</code> in <code>&lt;b-form-checkbox-group&gt;</code>.\nManually placed <code>&lt;b-form-checkbox&gt;</code> inputs will appear <em>below</em> any checkbox inputs generated by\nthe <code>options</code> prop. To have them apper <em>above</em> the inputs generated by <code>options</code>, place them\nin the named slot <code>first</code>.</p>\n<h2 id="options">Options</h2>\n<p>Please see options in <a href="/docs/components/form-select"><code>&lt;b-form-select&gt;</code></a> docs for details on passing\noptions (value array) to <code>&lt;b-form-checkboxes&gt;</code>.</p>\n<h2 id="inline-and-stacked-checkboxes">Inline and Stacked checkboxes</h2>\n<p><code>&lt;b-form-checkbox&gt;</code> components render as inline elements by default. Set the prop <code>stacked</code> on\n<code>&lt;b-form-checkbox-group&gt;</code> to place each form control is on a separate line.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Inline checkboxes (default)&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;selected&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;flavour1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Stacked  checkboxes&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox-group</span> <span class="hljs-attr">stacked</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;selected&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;flavour2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">selected</span>: [], <span class="hljs-comment">// Must be an array reference!</span>\n      options: [\n        {<span class="hljs-attr">text</span>: <span class="hljs-string">&apos;Orange&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&apos;orange&apos;</span>},\n        {<span class="hljs-attr">text</span>: <span class="hljs-string">&apos;Apple&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&apos;apple&apos;</span>},\n        {<span class="hljs-attr">text</span>: <span class="hljs-string">&apos;Pineapple&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&apos;pineapple&apos;</span>},\n        {<span class="hljs-attr">text</span>: <span class="hljs-string">&apos;Grape&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&apos;grape&apos;</span>}\n      ]\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- form-checkbox-stacked-1.vue --&gt;</span>\n</pre>\n<h2 id="value-s-">Value(s)</h2>\n<p>By default, <code>&lt;b-form-checkbox&gt;</code> value will be <code>true</code> when checked and <code>false</code> when unchecked.\nYou can customize the checked and unchecked values by specifying the <code>value</code> and <code>unchecked-value</code>\nproperties.</p>\n<p><code>v-model</code> binds to the <code>checked</code> property. When you have multiple checkboxes that bind to a\nsingle data state variable, you <strong>must</strong> provide an array reference <code>[]</code> to your <code>v-model</code>!</p>\n<p>Note that when <code>v-model</code> is bound to multiple checkboxes (i.e an array ref), the\n<code>unchecked-value</code> is <strong>not used</strong>. Only the value(s) of the checked chcekboxes will\nbe returned in the <code>v-model</code> bound array. You should provide unique values for each\ncheckbox&apos;s <code>value</code> prop.</p>\n<h3 id="multiple-checkboxes-and-accessibility">Multiple checkboxes and accessibility</h3>\n<p>When binding multiple checkboxes together, you should set the <code>name</code> prop to the same\nvalue for all <code>&lt;b-formcheckbox&gt;</code>s in the group individually or via the <code>name</code> prop\nof <code>&lt;b-form-checkbox-group&gt;</code>. This will inform users of assitive technologies that the\ncheckboxes are related.</p>\n<p>Whenever using multple checkboxes, it is recommended that the <code>&lt;b-form-check-group&gt;</code>\nbe placed in a <a href="/docs/components/form-group"><code>&lt;b-form-group&gt;</code></a> component to\nassociate a label with the entire group of checkboxes.</p>\n<h2 id="button-style-checkboxes">Button style checkboxes</h2>\n<p>Render checkboxes with the look of a button by setting the prop <code>buttons</code> on <code>&lt;b-form-checkbox-group&gt;</code>.\nChange the button variant by setting the <code>button-variant</code> prop to one of the standard Bootstrap\nbutton variants (see <a href="/docs/components/button"><code>&lt;b-button&gt;</code></a> for supported variants). The\ndefault <code>button-variant</code> is <code>secondary</code>.</p>\n<p>Button style checkboxes will have the class <code>.active</code> automatically applied to the label\nwhen they are in the <em>checked</em> state.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Button style checkboxes&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox-group</span> <span class="hljs-attr">buttons</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;selected&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;butons1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Button style checkboxes with variant &lt;code&gt;primary&lt;/code&gt; and large buttons&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;selected&quot;</span>\n                             <span class="hljs-attr">buttons</span>\n                             <span class="hljs-attr">button-variant</span>=<span class="hljs-string">&quot;primary&quot;</span>\n                             <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>\n                             <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;buttons2&quot;</span>\n                             <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Stacked (vertical) button style checkboxes&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox-group</span> <span class="hljs-attr">buttons</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;selected&quot;</span> <span class="hljs-attr">stacked</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">selected</span>: [], <span class="hljs-comment">// Must be an array reference!</span>\n      options: [\n        {<span class="hljs-attr">text</span>: <span class="hljs-string">&apos;Orange&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&apos;orange&apos;</span>},\n        {<span class="hljs-attr">text</span>: <span class="hljs-string">&apos;Apple&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&apos;apple&apos;</span>},\n        {<span class="hljs-attr">text</span>: <span class="hljs-string">&apos;Pineapple&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&apos;pineapple&apos;</span>},\n        {<span class="hljs-attr">text</span>: <span class="hljs-string">&apos;Grape&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&apos;grape&apos;</span>}\n      ]\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- form-checkboxs-buttons.vue --&gt;</span>\n</pre>\n<p><strong>Note:</strong> <code>&lt;b-form-checkbox-group&gt;</code> uses the HTML attribute <code>data-toggle=&quot;buttons&quot;</code> to\napply the button styling to the checkboxes. This can cause a potential conflict if you\nare including Bootstrap V4&apos;s jQuery code in your project for other purposes.\nTo get around this, you will need to exclude the Bootstrap V4 jQuery buttons plugin, and\ninclude only the other Bootstrap V4 jQuery plugins you reqwuire.</p>\n<h2 id="non-custom-check-inputs-plain-">Non custom check inputs (plain)</h2>\n<p>You can have <code>&lt;b-form-checkbox-group&gt;</code> or <code>&lt;b-form-checkbox&gt;</code> render a browser native\nchechbox input by setting the <code>plain</code> prop.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Plain inline checkboxes&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox-group</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;selected&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Plain stacked checkboxes&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox-group</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">stacked</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;selected&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">selected</span>: [], <span class="hljs-comment">// Must be an array reference!</span>\n      options: [\n        {<span class="hljs-attr">text</span>: <span class="hljs-string">&apos;Orange&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&apos;orange&apos;</span>},\n        {<span class="hljs-attr">text</span>: <span class="hljs-string">&apos;Apple&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&apos;apple&apos;</span>},\n        {<span class="hljs-attr">text</span>: <span class="hljs-string">&apos;Pineapple&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&apos;pineapple&apos;</span>},\n        {<span class="hljs-attr">text</span>: <span class="hljs-string">&apos;Grape&apos;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&apos;grape&apos;</span>}\n      ]\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- form-checkbox-plain-1.vue --&gt;</span>\n</pre>\n<p><strong>Note:</strong> The <code>plain</code> prop has no effect when <code>button</code> is set.</p>\n<h2 id="contextual-states">Contextual states</h2>\n<p>Bootstrap includes validation styles for <code>valid</code> and <code>invalid</code> states\non most form controls.</p>\n<p>Generally speaking, you&#x2019;ll want to use a particular state for specific types of feedback:</p>\n<ul>\n<li><code>&apos;invalid&apos;</code> (or <code>false</code>) is great for when there&#x2019;s a blocking or required field. A user must fill in\nthis field properly to submit the form.</li>\n<li><code>&apos;valid&apos;</code> (or <code>true</code>) is ideal for situations when you have per-field validation throughout a form\nand want to encourage a user through the rest of the fields.</li>\n<li><code>null</code> Displays no validation state</li>\n</ul>\n<p>To apply one of the contextual state icons on <code>&lt;b-form-checkbox&gt;</code>, set the <code>state</code> prop\nto <code>&apos;invalid&apos;</code> (or <code>false</code>), <code>&apos;valid&apos;</code> (or <code>true</code>), or <code>null</code>.</p>\n<p><strong>Note:</strong> Contextual states are <strong>not</strong> supported when in button mode.</p>\n<h2 id="indeterminate-tri-state-support">Indeterminate (tri-state) support</h2>\n<p>Normally a checkbox input can only have two states: <em>checked</em> or <em>unchecked</em>. They can\nhave any value, but they either submit that value (<em>checked</em>) or don&apos;t (<em>unchecked</em>) with\na form submission (although Bootstrap-Vue allows a value for the <em>unchecked</em> state)</p>\n<p><em>Visually</em>, there are actually three states a checkbox can be in: <em>checked</em>,\n<em>unchecked</em>, or <strong><em>indeterminate</em></strong>.</p>\n<p>The <em>indeterminate</em> state is <strong>visual only</strong>. The checkbox is still either checked or\nunchecked as a value. That means the visual indeterminate state masks the real value\nof the checkbox, so that better make sense in your UI!</p>\n<p><code>&lt;b-form-checkbox&gt;</code> supports setting this visual indeterminate state via the <code>indeterminate</code>\nprop (defaults to <code>false</code>). Clicking the checkbox will clear its indeterminate state.\nThe <code>indeterminate</code> prop can be synced to the checkboxe&apos;s state by v-binding the\n<code>indeterminate</code> prop with the <code>.sync</code> modifier.</p>\n<p><strong>Note:</strong> indeterminate is not supported in button mode, nor is it supported in\n<code>&lt;b-form-checkbox-group&gt;</code> (multiple checkboxes).</p>\n<p><strong>Single Indeterminate checkbox:</strong></p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">:indeterminate.sync</span>=<span class="hljs-string">&quot;indeterminate&quot;</span>&gt;</span>\n      Click me to see what happens\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-3&quot;</span>&gt;</span>\n      Checked: <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{ checked }}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n      Indeterminate: <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{ indeterminate }}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleIndeterminate&quot;</span>&gt;</span>Toggle Indeterminate State<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>,\n      <span class="hljs-attr">indeterminate</span>: <span class="hljs-literal">true</span>\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    toggleIndeterminate () {\n      <span class="hljs-keyword">this</span>.indeterminate = !<span class="hljs-keyword">this</span>.indeterminate\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- form-checkbox-indeterminate-1.vue --&gt;</span>\n</pre>\n<p><strong>Indeterminate checkbox use-case:</strong></p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;label&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>Choose your flavours:<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;allSelected&quot;</span>\n                         <span class="hljs-attr">:indeterminate</span>=<span class="hljs-string">&quot;indeterminate&quot;</span>\n                         <span class="hljs-attr">aria-describedby</span>=<span class="hljs-string">&quot;flavours&quot;</span>\n                         <span class="hljs-attr">aria-controls</span>=<span class="hljs-string">&quot;flavours&quot;</span>\n                         @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;toggleAll&quot;</span>\n         &gt;</span>\n          {{ allSelected ? &apos;Un-select All&apos; : &apos;Select All&apos; }}\n         <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox-group</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;flavors&quot;</span>\n                             <span class="hljs-attr">stacked</span>\n                             <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;selected&quot;</span>\n                             <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;flavs&quot;</span>\n                             <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;flavours&quot;</span>\n                             <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ml-4&quot;</span>\n                             <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Individual flavours&quot;</span>\n      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n      Selected: <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{ selected }}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n      All Selected: <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{ allSelected }}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n      Indeterminate: <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{ indeterminate }}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">flavours</span>: [<span class="hljs-string">&apos;Orange&apos;</span>, <span class="hljs-string">&apos;Grape&apos;</span>, <span class="hljs-string">&apos;Apple&apos;</span>, <span class="hljs-string">&apos;Lime&apos;</span>, <span class="hljs-string">&apos;Very Berry&apos;</span>],\n      <span class="hljs-attr">selected</span>: [],\n      <span class="hljs-attr">allSelected</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">indeterminate</span>: <span class="hljs-literal">false</span>\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    toggleAll (checked) {\n      <span class="hljs-keyword">this</span>.selected = checked ? <span class="hljs-keyword">this</span>.flavours.slice() : []\n    }\n  },\n  <span class="hljs-attr">watch</span>: {\n    selected (newVal, oldVal) {\n      <span class="hljs-comment">// Handle changes in individual flavour checkboxes</span>\n      <span class="hljs-keyword">if</span> (newVal.length === <span class="hljs-number">0</span>) {\n        <span class="hljs-keyword">this</span>.indeterminate = <span class="hljs-literal">false</span>\n        <span class="hljs-keyword">this</span>.allSelected = <span class="hljs-literal">false</span>\n      } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (newVal.length === <span class="hljs-keyword">this</span>.flavours.length) {\n        <span class="hljs-keyword">this</span>.indeterminate = <span class="hljs-literal">false</span>\n        <span class="hljs-keyword">this</span>.allSelected = <span class="hljs-literal">true</span>\n      } <span class="hljs-keyword">else</span> {\n        <span class="hljs-keyword">this</span>.indeterminate = <span class="hljs-literal">true</span>\n        <span class="hljs-keyword">this</span>.allSelected = <span class="hljs-literal">false</span>\n      }\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- form-checkbox-indeterminate-2.vue --&gt;</span>\n</pre>\n<p><strong>Note:</strong> indeterminate is not supported in <code>button</code> mode, nor in multiple checkbox mode.</p>\n<h3 id="indeterminate-state-and-accessibility">Indeterminate state and accessibility</h3>\n<p>Not all screen readers will convey the indeterminate state to screen reader users.\nSo it is recommended to provide some form of textual feedback to the user (possibly\nby via the <code>.sr-only</code> class) if the indeterminate state has special contextual\nmeaning in your application.</p>\n<h2 id="checkbox-component-aliases">Checkbox component aliases</h2>\n<ul>\n<li><code>&lt;b-form-checkbox-group&gt;</code> can be used by the shorter aliases <code>&lt;b-checkbox-group&gt;</code> and <code>&lt;b-check-group&gt;</code>.</li>\n<li><code>&lt;b-form-checkbox&gt;</code> can be used by thes shorter aliases <code>&lt;b-checkbox&gt;</code> and <code>&lt;b-check&gt;</code>.</li>\n</ul>\n<h2 id="component-reference">Component Reference</h2>\n'}}]);