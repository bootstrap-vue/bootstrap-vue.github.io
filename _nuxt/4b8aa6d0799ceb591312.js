(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{398:function(n,l){n.exports='<h1 id="media" class="bv-no-focus-ring"><span class="bd-content-title">Media</span></h1>\n<p class="bd-lead">The media object helps build complex and repetitive components where some media is positioned\nalongside content that doesn&#39;t wrap around said media. Plus, it does this with only two required\nclasses thanks to flexbox.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-media</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:aside</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">"#ccc"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"64"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"placeholder"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-0"</span>&gt;</span>Media Title<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\n        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque\n        penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-media</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:aside</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">"#ccc"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"64"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"placeholder"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n        <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-0"</span>&gt;</span>Nested Media<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-0"</span>&gt;</span>\n          Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in\n          faucibus.\n        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-media</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-media</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-media.vue --&gt;</span></pre><h2 id="usage" class="bv-no-focus-ring"><span class="bd-content-title">Usage<a class="anchorjs-link" href="#usage" aria-label="Anchor"></a></span></h2>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-media</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:aside</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"..."</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Media Aside"</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Media Body<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Some text<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n    <span class="hljs-comment">&lt;!-- b-[Optional: add media children here for nesting] --&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-media</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre><h2 id="no-body-with-sub-components" class="bv-no-focus-ring"><span class="bd-content-title">No body (with sub-components)<a class="anchorjs-link" href="#no-body-with-sub-components" aria-label="Anchor"></a></span></h2>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-media</span> <span class="hljs-attr">no-body</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-media-aside</span> <span class="hljs-attr">vertical-align</span>=<span class="hljs-string">"center"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">"#ccc"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"128"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"256"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"placeholder"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-media-aside</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-media-body</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ml-3"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-0"</span>&gt;</span>Media Title<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante\n          sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce\n          condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-0"</span>&gt;</span>\n          Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis\n          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-media</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:aside</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">"#ccc"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"64"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"placeholder"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-0"</span>&gt;</span>Nested Media<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n          Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in\n          faucibus.\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-media</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-media-body</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-media</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-media-no-body.vue --&gt;</span></pre><h2 id="order" class="bv-no-focus-ring"><span class="bd-content-title">Order<a class="anchorjs-link" href="#order" aria-label="Anchor"></a></span></h2>\n<p>Change the order of content in media objects by adding <code translate="no" class="notranslate text-nowrap">right-align</code> property.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-media</span> <span class="hljs-attr">right-align</span> <span class="hljs-attr">vertical-align</span>=<span class="hljs-string">"center"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:aside</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">"#ccc"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"80"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"placeholder"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-0 mb-1"</span>&gt;</span>Media object<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-0"</span>&gt;</span>\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n      Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac\n      nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-media</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-media-order.vue --&gt;</span></pre><h2 id="nesting" class="bv-no-focus-ring"><span class="bd-content-title">Nesting<a class="anchorjs-link" href="#nesting" aria-label="Anchor"></a></span></h2>\n<p>You can easily nest media objects by including another <code translate="no" class="notranslate text-nowrap">&lt;b-media&gt;</code> inside parent&#39;s body.</p>\n<h2 id="vertical-align" class="bv-no-focus-ring"><span class="bd-content-title">Vertical align<a class="anchorjs-link" href="#vertical-align" aria-label="Anchor"></a></span></h2>\n<p>Aside can be vertical aligned using <code translate="no" class="notranslate text-nowrap">vertical-align</code> should be either <code translate="no" class="notranslate text-nowrap">top</code>, <code translate="no" class="notranslate text-nowrap">center</code> or <code translate="no" class="notranslate text-nowrap">end</code>.\nDefault is <code translate="no" class="notranslate text-nowrap">top</code>.</p>\n<h2 id="media-list" class="bv-no-focus-ring"><span class="bd-content-title">Media list<a class="anchorjs-link" href="#media-list" aria-label="Anchor"></a></span></h2>\n<p>Because the media object has so few structural requirements, you can also use these component as\nlist HTML elements. On your <code translate="no" class="notranslate text-nowrap">&lt;ul&gt;</code> or <code translate="no" class="notranslate text-nowrap">&lt;ol&gt;</code>, add the class <code translate="no" class="notranslate text-nowrap">list-unstyled</code> to remove any browser\ndefault list styles, and then use the <code translate="no" class="notranslate text-nowrap">&lt;b-media&gt;</code> component with <code translate="no" class="notranslate text-nowrap">tag</code> prop set to <code translate="no" class="notranslate text-nowrap">li</code>. As always,\nuse spacing utilities wherever needed to fine tune.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"list-unstyled"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-media</span> <span class="hljs-attr">tag</span>=<span class="hljs-string">"li"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:aside</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">"#abc"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"64"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"placeholder"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-0 mb-1"</span>&gt;</span>List-based media object<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-0"</span>&gt;</span>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\n        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-media</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-media</span> <span class="hljs-attr">tag</span>=<span class="hljs-string">"li"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"my-4"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:aside</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">"#cba"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"64"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"placeholder"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-0 mb-1"</span>&gt;</span>List-based media object<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-0"</span>&gt;</span>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\n        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-media</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-media</span> <span class="hljs-attr">tag</span>=<span class="hljs-string">"li"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:aside</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">"#bac"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"64"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"placeholder"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-0 mb-1"</span>&gt;</span>List-based media object<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-0"</span>&gt;</span>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\n        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-media</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-media-list.vue --&gt;</span></pre>\x3c!-- Component reference added automatically from component package.json --\x3e\n'}}]);