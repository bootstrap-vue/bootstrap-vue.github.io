(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{345:function(n,t){n.exports='<h1 id="images" class="bv-no-focus-ring"><span class="bd-content-title">Images</span></h1>\n<p class="bd-lead">Documentation and examples for opting images (via <code translate="no" class="notranslate text-nowrap">&lt;b-img&gt;</code> component) into responsive behavior\n(so they never become larger than their parent elements), optionally adding lightweight styles to\nthem — all via props.</p>\n<p>BootstrapVue&#39;s image components support rounded images, thumbnail styling, alignment, and even the\nability to create blank images with an optional solid background color. Support for lazy loaded\nimages is available via the <code translate="no" class="notranslate text-nowrap">&lt;b-img-lazy&gt;</code> complimentary component.</p>\n<h2 id="image-src-resolving" class="bv-no-focus-ring"><span class="bd-content-title">Image src resolving<a class="anchorjs-link" href="#image-src-resolving" aria-labelledby="image-src-resolving"></a></span></h2>\n<p>The <code translate="no" class="notranslate text-nowrap">src</code> prop (and <code translate="no" class="notranslate text-nowrap">blank-src</code> prop of <code translate="no" class="notranslate text-nowrap">&lt;b-img-lazy&gt;</code>), out of the box, works only with absolute or\nfully-qualified-domain-name URLs. If you are using project assets as image sources, please refer to\n<a href="/docs/reference/images" class="font-weight-bold">Component img src resolving</a> for configuring <code translate="no" class="notranslate text-nowrap">vue-loader</code> to understand\ncustom component props that specify image sources.</p>\n<h2 id="styling-images" class="bv-no-focus-ring"><span class="bd-content-title">Styling images<a class="anchorjs-link" href="#styling-images" aria-labelledby="styling-images"></a></span></h2>\n<p>Several props are available for styling the rendered image element. The following sub-sections cover\nthe various options.</p>\n<h3 id="responsive-images" class="bv-no-focus-ring"><span class="bd-content-title">Responsive images<a class="anchorjs-link" href="#responsive-images" aria-labelledby="responsive-images"></a></span></h3>\n<p>Images in BootstrapVue can be made responsive with the <code translate="no" class="notranslate text-nowrap">fluid</code> prop (which sets\n<code translate="no" class="notranslate text-nowrap">max-width: 100%; height: auto;</code> via CSS classes) so that it scales with the parent element - up to\nthe maximum native width of the image.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/1024/400/?image=41"</span> <span class="hljs-attr">fluid</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Responsive image"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-fluid.vue --&gt;</span></pre><p>To make a fluid image that will grow to fill the width of its container, use the <code translate="no" class="notranslate text-nowrap">fluid-grow</code> prop.\nNote this may cause blurring on small bitmap images.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Small image with <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>fluid<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/300/150/?image=41"</span> <span class="hljs-attr">fluid</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Fluid image"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"my-3"</span>&gt;</span>Small image with <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>fluid-grow<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/300/150/?image=41"</span> <span class="hljs-attr">fluid-grow</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Fluid-grow image"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-fluid-grow.vue --&gt;</span></pre><p>Use the <code translate="no" class="notranslate text-nowrap">block</code> prop to force the image to display as a block element rather than the browser\ndefault of inline-block element.</p>\n<p><strong>Note:</strong> <em>In Internet Explorer 10, SVG images with <code translate="no" class="notranslate text-nowrap">fluid</code> are disproportionately sized. To fix\nthis, add the style <code translate="no" class="notranslate text-nowrap">width: 100% \\9;</code> where necessary. This fix improperly sizes other image\nformats, so Bootstrap v4 doesn&#39;t apply it automatically.</em></p>\n<h3 id="image-thumbnails" class="bv-no-focus-ring"><span class="bd-content-title">Image thumbnails<a class="anchorjs-link" href="#image-thumbnails" aria-labelledby="image-thumbnails"></a></span></h3>\n<p>You can use prop <code translate="no" class="notranslate text-nowrap">thumbnail</code> to give an image a rounded light border appearance.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-container</span> <span class="hljs-attr">fluid</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-4 bg-dark"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-row</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">thumbnail</span> <span class="hljs-attr">fluid</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/250/250/?image=54"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Image 1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">thumbnail</span> <span class="hljs-attr">fluid</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/250/250/?image=58"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Image 2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">thumbnail</span> <span class="hljs-attr">fluid</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/250/250/?image=59"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Image 3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-container</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-thumbnail.vue --&gt;</span></pre><h3 id="rounded-corners" class="bv-no-focus-ring"><span class="bd-content-title">Rounded corners<a class="anchorjs-link" href="#rounded-corners" aria-labelledby="rounded-corners"></a></span></h3>\n<p>You can control which corners are rounded by setting the rounded prop to one of the following\nvalues:</p>\n<ul>\n<li><code translate="no" class="notranslate text-nowrap">true</code> (or prop present with no value): round all corners</li>\n<li><code translate="no" class="notranslate text-nowrap">false</code> (or prop not present): no explicit rounding or corners (default)</li>\n<li><code translate="no" class="notranslate text-nowrap">&#39;top&#39;</code>: round the top corners</li>\n<li><code translate="no" class="notranslate text-nowrap">&#39;right&#39;</code>: round the right corners</li>\n<li><code translate="no" class="notranslate text-nowrap">&#39;bottom&#39;</code>: round the bottom corners</li>\n<li><code translate="no" class="notranslate text-nowrap">&#39;left&#39;</code>: round the left corners</li>\n<li><code translate="no" class="notranslate text-nowrap">&#39;circle&#39;</code>: make a circle (if square image) or oval (if not square) border</li>\n<li><code translate="no" class="notranslate text-nowrap">&#39;0&#39;</code>: explicitly turn off rounding of corners</li>\n</ul>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">rounded</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Rounded image"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">rounded</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Top-rounded image"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">rounded</span>=<span class="hljs-string">"right"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Right-rounded image"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">rounded</span>=<span class="hljs-string">"bottom"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Bottom-rounded image"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">rounded</span>=<span class="hljs-string">"left"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Left-rounded image"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">rounded</span>=<span class="hljs-string">"circle"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Circle image"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">rounded</span>=<span class="hljs-string">"0"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Not rounded image"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">mainProps</span>: { <span class="hljs-attr">blank</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">blankColor</span>: <span class="hljs-string">\'#777\'</span>, <span class="hljs-attr">width</span>: <span class="hljs-number">75</span>, <span class="hljs-attr">height</span>: <span class="hljs-number">75</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">\'m1\'</span> }\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-rounded.vue --&gt;</span></pre><h3 id="aligning-images" class="bv-no-focus-ring"><span class="bd-content-title">Aligning images<a class="anchorjs-link" href="#aligning-images" aria-labelledby="aligning-images"></a></span></h3>\n<p>Align images with the boolean props <code translate="no" class="notranslate text-nowrap">left</code> (floats left) <code translate="no" class="notranslate text-nowrap">right</code>(floats right), and <code translate="no" class="notranslate text-nowrap">center</code> (auto\nleft+right margins). You can also center images by placing them in a container that has the class\n<code translate="no" class="notranslate text-nowrap">text-center</code>.</p>\n<p><strong>Left an Right aligned (float):</strong></p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"clearfix"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">left</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/125/125/?image=58"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Left image"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">right</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/125/125/?image=58"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Right image"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-left-right.vue --&gt;</span></pre><p><strong>Center aligned (block):</strong></p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">center</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/125/125/?image=58"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Center image"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-center.vue --&gt;</span></pre><p>Note: <code translate="no" class="notranslate text-nowrap">left</code> takes precedence over <code translate="no" class="notranslate text-nowrap">right</code> which takes precedence over <code translate="no" class="notranslate text-nowrap">center</code>.</p>\n<h2 id="blank-or-solid-color-images" class="bv-no-focus-ring"><span class="bd-content-title">Blank (or solid color) images<a class="anchorjs-link" href="#blank-or-solid-color-images" aria-labelledby="blank-or-solid-color-images"></a></span></h2>\n<p><code translate="no" class="notranslate text-nowrap">&lt;b-img&gt;</code> provides built-in support for generating blank images (transparent by default) of any\nwidth and height, by setting the <code translate="no" class="notranslate text-nowrap">blank</code> prop, and specifying <code translate="no" class="notranslate text-nowrap">width</code> and <code translate="no" class="notranslate text-nowrap">height</code> values (in\npixels). You can apply any of the other <code translate="no" class="notranslate text-nowrap">&lt;b-img&gt;</code> props to change the style/behavior of the\ngenerated image.</p>\n<p>Use the <code translate="no" class="notranslate text-nowrap">blank-color</code> prop to set the blank image color. The <code translate="no" class="notranslate text-nowrap">blank-color</code>prop can accept any CSS\ncolor value:</p>\n<ul>\n<li>Named colors — i.e. <code translate="no" class="notranslate text-nowrap">orange</code> or <code translate="no" class="notranslate text-nowrap">blue</code></li>\n<li>Hex colors — i.e. <code translate="no" class="notranslate text-nowrap">#FF9E2C</code></li>\n<li>RGB and RGBa colors — i.e. <code translate="no" class="notranslate text-nowrap">rgb(255, 158, 44)</code> and <code translate="no" class="notranslate text-nowrap">rgba(255, 158, 44, .5)</code></li>\n<li>HSL and HSLa colors — i.e. <code translate="no" class="notranslate text-nowrap">hsl(32, 100%, 59%)</code> and <code translate="no" class="notranslate text-nowrap">hsla(32, 100%, 59%, .5)</code></li>\n</ul>\n<p>The default <code translate="no" class="notranslate text-nowrap">blank-color</code> is <code translate="no" class="notranslate text-nowrap">transparent</code>.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Transparent image"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">"#777"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"HEX shorthand color image (#777)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">"red"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Named color image (red)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">"black"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Named color image (black)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">"#338833"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"HEX color image"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">"rgba(128, 255, 255, 0.5)"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"RGBa color image"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">"#88f"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"HEX shorthand color (#88f)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">mainProps</span>: { <span class="hljs-attr">blank</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">width</span>: <span class="hljs-number">75</span>, <span class="hljs-attr">height</span>: <span class="hljs-number">75</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">\'m1\'</span> }\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-blank.vue --&gt;</span></pre><p><strong>Notes:</strong></p>\n<ul>\n<li>In blank image mode, if only one of width or height is set, the image will be have both width and\nheight set to the same value.</li>\n<li>In blank image mode, if width and height are not set, both width and height will internally be set\nto 1.</li>\n<li>The <code translate="no" class="notranslate text-nowrap">blank</code> prop takes precedence over the <code translate="no" class="notranslate text-nowrap">src</code> prop. If you set both and later set <code translate="no" class="notranslate text-nowrap">blank</code> to\n<code translate="no" class="notranslate text-nowrap">false</code> the image specified in <code translate="no" class="notranslate text-nowrap">src</code> will then be displayed.</li>\n<li>Blank images are rendered using SVG image data URLs.</li>\n<li>The <code translate="no" class="notranslate text-nowrap">width</code> and <code translate="no" class="notranslate text-nowrap">height</code> props will also apply the <code translate="no" class="notranslate text-nowrap">width</code> and <code translate="no" class="notranslate text-nowrap">height</code> attributes to the rendered\n<code translate="no" class="notranslate text-nowrap">&lt;img&gt;</code> tag, even if <code translate="no" class="notranslate text-nowrap">blank</code> is not set.</li>\n</ul>\n<h2 id="srcset-support" class="bv-no-focus-ring"><span class="bd-content-title"><code translate="no" class="notranslate text-nowrap">srcset</code> support<a class="anchorjs-link" href="#srcset-support" aria-labelledby="srcset-support"></a></span></h2>\n<p><code translate="no" class="notranslate text-nowrap">&lt;b-img&gt;</code> supports the\n<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset" target="_blank" rel="noopener"><code translate="no" class="notranslate text-nowrap">srcset</code> and <code translate="no" class="notranslate text-nowrap">sizes</code> attributes</a>\non images. The props accept either a string value, or an array of strings (the array of strings will\nbe converted into a single string separated by commas).</p>\n<p>For details on usage of these attributes, refer to\n<a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images" target="_blank" rel="noopener">MDN&#39;s Responsive Images</a>\nguide.</p>\n<p><strong>Notes:</strong></p>\n<ul>\n<li>If the <code translate="no" class="notranslate text-nowrap">blank</code> prop is set, then <code translate="no" class="notranslate text-nowrap">srcset</code> and <code translate="no" class="notranslate text-nowrap">sizes</code> props are ignored</li>\n<li>IE 11 does not support <code translate="no" class="notranslate text-nowrap">srcset</code> and <code translate="no" class="notranslate text-nowrap">sizes</code>, so ensure you have a value for the <code translate="no" class="notranslate text-nowrap">src</code> prop</li>\n<li>Vue-loader does not support project relative URLs (asset URLs) on the <code translate="no" class="notranslate text-nowrap">srcset</code> attribute. Instead\nuse <code translate="no" class="notranslate text-nowrap">require(...)</code> to resolve the individual URL paths. Be cautious of creating a string of data\nURI&#39;s longer than supported by the maximum attribute value length of the browser. If your webpack\nconfig has a limit for the <code translate="no" class="notranslate text-nowrap">url-loader</code> and you want to prevent inline data-urls, you may have to\noverwrite the loader limits: <code translate="no" class="notranslate text-nowrap">require(&#39;!!url-loader?limit=0!./assets/photo.jpg&#39;)</code></li>\n<li>Support for <code translate="no" class="notranslate text-nowrap">srcset</code> and <code translate="no" class="notranslate text-nowrap">sizes</code> was added in release <code translate="no" class="notranslate text-nowrap">2.1.0</code></li>\n</ul>\n<h2 id="lazy-loaded-images" class="bv-no-focus-ring"><span class="bd-content-title">Lazy loaded images<a class="anchorjs-link" href="#lazy-loaded-images" aria-labelledby="lazy-loaded-images"></a></span></h2>\n<p class="bd-lead">Use our complementary <code translate="no" class="notranslate text-nowrap">&lt;b-img-lazy&gt;</code> image component (based on <code translate="no" class="notranslate text-nowrap">&lt;b-img&gt;</code>) to lazy load images as\nthey are scrolled into view (or within <code translate="no" class="notranslate text-nowrap">offset</code> pixels of the viewport).</p>\n<p>Lazy loading images uses\n<a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noopener"><code translate="no" class="notranslate text-nowrap">IntersectionObserver</code></a>\nif supported by the browser (or via a polyfill) to detect with the image should be shown. If\n<code translate="no" class="notranslate text-nowrap">IntersectionObserver</code> support is <em>not detected</em>, then the image will <em>always</em> be shown.</p>\n<h3 id="usage" class="bv-no-focus-ring"><span class="bd-content-title">Usage<a class="anchorjs-link" href="#usage" aria-labelledby="usage"></a></span></h3>\n<p>Set the <code translate="no" class="notranslate text-nowrap">src</code> prop to the URL of the image you want loaded lazily, and either specify a placeholder\nimage URL via the prop <code translate="no" class="notranslate text-nowrap">blank-src</code>, or have a blank placeholder image generated for you by leaving\n<code translate="no" class="notranslate text-nowrap">blank-src</code> as <code translate="no" class="notranslate text-nowrap">null</code>.</p>\n<p>Specify the width and height of the placeholder via the <code translate="no" class="notranslate text-nowrap">blank-width</code> and <code translate="no" class="notranslate text-nowrap">blank-height</code> props. If\nthese props are not set, then they will fall back to the <code translate="no" class="notranslate text-nowrap">width</code> and <code translate="no" class="notranslate text-nowrap">height</code> props (which are\napplied to the image specified via <code translate="no" class="notranslate text-nowrap">src</code>).</p>\n<p>Control the generated blank image color by setting the prop <code translate="no" class="notranslate text-nowrap">blank-color</code>.</p>\n<p>Placeholder images (either explicitly provided, or dynamically generated) should have the same width\nand height values, or at least the same aspect ratio, as the <code translate="no" class="notranslate text-nowrap">src</code> image.</p>\n<p>Feel free to use the <code translate="no" class="notranslate text-nowrap">fluid</code>, <code translate="no" class="notranslate text-nowrap">fluid-grow</code>, <code translate="no" class="notranslate text-nowrap">thumbnail</code>, and <code translate="no" class="notranslate text-nowrap">rounded</code> props of <code translate="no" class="notranslate text-nowrap">&lt;b-img&gt;</code>.</p>\n<p>The <code translate="no" class="notranslate text-nowrap">offset</code> prop specifies the number of pixels that an image needs to be near to the viewport to\ntrigger it to be shown. The default value is <code translate="no" class="notranslate text-nowrap">360</code>.</p>\n<p>The <code translate="no" class="notranslate text-nowrap">throttle</code> prop controls how long (in ms) after a <code translate="no" class="notranslate text-nowrap">scroll</code> (or <code translate="no" class="notranslate text-nowrap">resize</code>, or <code translate="no" class="notranslate text-nowrap">orientationchange</code>,\nor <code translate="no" class="notranslate text-nowrap">transitionend</code>) event happens before checking if the image has come within view (or within\n<code translate="no" class="notranslate text-nowrap">offset</code> of view). The default is <code translate="no" class="notranslate text-nowrap">100</code> (ms). <code translate="no" class="notranslate text-nowrap">throttle</code> has no effect if IntersectionObserver\nsupport is detected.</p>\n<p>Once an image has come into view and is shown, the event listeners and/or Intersection Observer are\nremoved.</p>\n<p><strong>Example usage:</strong></p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">"getImageUrl(80)"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Image 1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img-lazy</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">"getImageUrl(82)"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Image 2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img-lazy</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">"getImageUrl(84)"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Image 3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img-lazy</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">"getImageUrl(85)"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Image 4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img-lazy</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">"getImageUrl(88)"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Image 5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img-lazy</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">"getImageUrl(90)"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Image 6"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img-lazy</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">"getImageUrl(92)"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Image 7"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img-lazy</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"mainProps"</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">"getImageUrl(94)"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Image 8"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img-lazy</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">mainProps</span>: {\n          <span class="hljs-attr">center</span>: <span class="hljs-literal">true</span>,\n          <span class="hljs-attr">fluidGrow</span>: <span class="hljs-literal">true</span>,\n          <span class="hljs-attr">blank</span>: <span class="hljs-literal">true</span>,\n          <span class="hljs-attr">blankColor</span>: <span class="hljs-string">\'#bbb\'</span>,\n          <span class="hljs-attr">width</span>: <span class="hljs-number">600</span>,\n          <span class="hljs-attr">height</span>: <span class="hljs-number">400</span>,\n          <span class="hljs-attr">class</span>: <span class="hljs-string">\'my-5\'</span>\n        }\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      getImageUrl(imageId) {\n        <span class="hljs-keyword">const</span> { width, height } = <span class="hljs-keyword">this</span>.mainProps\n        <span class="hljs-keyword">return</span> <span class="hljs-string">`https://picsum.photos/<span class="hljs-subst">${width}</span>/<span class="hljs-subst">${height}</span>/?image=<span class="hljs-subst">${imageId}</span>`</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-lazy.vue --&gt;</span></pre><h3 id="force-show-of-lazy-loaded-image" class="bv-no-focus-ring"><span class="bd-content-title">Force show of lazy loaded image<a class="anchorjs-link" href="#force-show-of-lazy-loaded-image" aria-labelledby="force-show-of-lazy-loaded-image"></a></span></h3>\n<p>To force the final image to be shown, set the <code translate="no" class="notranslate text-nowrap">show</code> prop to <code translate="no" class="notranslate text-nowrap">true</code>. The <code translate="no" class="notranslate text-nowrap">show</code> prop supports the\nVue <code translate="no" class="notranslate text-nowrap">.sync</code> modifier, and will be updated to <code translate="no" class="notranslate text-nowrap">true</code> when the final image is shown.</p>\n<h3 id="lazy-loaded-srcset-support" class="bv-no-focus-ring"><span class="bd-content-title">Lazy loaded <code translate="no" class="notranslate text-nowrap">srcset</code> support<a class="anchorjs-link" href="#lazy-loaded-srcset-support" aria-labelledby="lazy-loaded-srcset-support"></a></span></h3>\n<p><code translate="no" class="notranslate text-nowrap">&lt;b-img-lazy&gt;</code> supports setting the <a href="#srcset-support" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">srcset</code> and <code translate="no" class="notranslate text-nowrap">sizes</code></a> attributes on the\nrendered <code translate="no" class="notranslate text-nowrap">&lt;img&gt;</code> element. These props will only be applied to the image once it has come into view.</p>\n<p>See <a href="#srcset-support" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">srcset</code> support</a> above for prop usage details and limitations.</p>\n<p>Support for <code translate="no" class="notranslate text-nowrap">srcset</code> and <code translate="no" class="notranslate text-nowrap">sizes</code> was added in release <code translate="no" class="notranslate text-nowrap">2.1.0</code>.</p>\n\x3c!-- Component reference added automatically from component package.json --\x3e\n'}}]);