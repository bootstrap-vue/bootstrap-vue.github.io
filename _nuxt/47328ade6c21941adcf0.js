(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{426:function(s,a){s.exports='<h1 id="spacing">Spacing</h1>\n<blockquote>\n<p>Bootstrap V4 CSS includes a wide range of shorthand responsive margin and\npadding utility classes to modify an element&apos;s appearance.</p>\n</blockquote>\n<h2 id="how-it-works">How it works</h2>\n<p>Assign responsive-friendly margin or padding values to an element or a subset of its\nsides with shorthand classes. Includes support for individual properties, all properties,\nand vertical and horizontal properties. Classes are built from a default Sass map\nranging from .25rem to 3rem.</p>\n<h2 id="notation">Notation</h2>\n<p>Spacing utilities that apply to all breakpoints, from xs to xl, have no breakpoint abbreviation\nin them. This is because those classes are applied from <code>min-width: 0</code> and up, and thus are\nnot bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.</p>\n<p>The classes are named using the format <code>{property}{sides}-{size}</code> for <code>xs</code> and\n<code>{property}{sides}-{breakpoint}-{size}</code> for <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.</p>\n<p>Where <em>property</em> is one of:</p>\n<ul>\n<li><code>m</code> - for classes that set margin</li>\n<li><code>p</code> - for classes that set padding</li>\n</ul>\n<p>Where <em>sides</em> is one of:</p>\n<ul>\n<li><code>t</code> - for classes that set margin-top or padding-top</li>\n<li><code>b</code> - for classes that set margin-bottom or padding-bottom</li>\n<li><code>l</code> - for classes that set margin-left or padding-left</li>\n<li><code>r</code> - for classes that set margin-right or padding-right</li>\n<li><code>x</code> - for classes that set both <em>-left and </em>-right</li>\n<li><code>y</code> - for classes that set both <em>-top and </em>-bottom</li>\n<li>blank - for classes that set a margin or padding on all 4 sides of the element</li>\n</ul>\n<p>Where <em>size</em> is one of:</p>\n<ul>\n<li><code>0</code> - for classes that eliminate the margin or padding by setting it to 0</li>\n<li><code>1</code> - (by default) for classes that set the margin or padding to $spacer * .25</li>\n<li><code>2</code> - (by default) for classes that set the margin or padding to $spacer * .5</li>\n<li><code>3</code> - (by default) for classes that set the margin or padding to $spacer</li>\n<li><code>4</code> - (by default) for classes that set the margin or padding to $spacer * 1.5</li>\n<li><code>5</code> - (by default) for classes that set the margin or padding to $spacer * 3</li>\n</ul>\n<p><em>(You can add more sizes by adding entries to the $spacers Sass map variable.)</em></p>\n<h2 id="examples">Examples</h2>\n<p>Here are some representative examples of these classes:</p>\n<pre class="hljs"><span class="hljs-selector-class">.mt-0</span> {\n  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">0</span> <span class="hljs-meta">!important</span>;\n}\n\n<span class="hljs-selector-class">.ml-1</span> {\n  <span class="hljs-attribute">margin-left</span>: ($spacer * .<span class="hljs-number">25</span>) <span class="hljs-meta">!important</span>;\n}\n\n<span class="hljs-selector-class">.px-2</span> {\n  <span class="hljs-attribute">padding-left</span>: ($spacer * .<span class="hljs-number">5</span>) <span class="hljs-meta">!important</span>;\n  <span class="hljs-attribute">padding-right</span>: ($spacer * .<span class="hljs-number">5</span>) <span class="hljs-meta">!important</span>;\n}\n\n<span class="hljs-selector-class">.p-3</span> {\n  <span class="hljs-attribute">padding</span>: $spacer <span class="hljs-meta">!important</span>;\n}\n</pre>\n<h2 id="horizontal-centering">Horizontal centering</h2>\n<p>Additionally, Bootstrap also includes an <code>.mx-auto</code> class for horizontally centering\nfixed-width block level content &#x2014; that is, content that has <code>display: block</code> and a <code>width</code>\nset&#x2014;by setting the horizontal margins to <code>auto</code>.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mx-auto bg-info&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 200px;&quot;</span>&gt;</span>\n  Centered element\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- horizontal-cetering.vue --&gt;</span>\n</pre>\n'}}]);