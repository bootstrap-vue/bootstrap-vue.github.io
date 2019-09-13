(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{334:function(n,l){n.exports='<h1 id="form-validation"><span class="bd-content-title">Form Validation</span></h1>\n<p class="bd-lead">BootstrapVue does not include form validation by default; we leave that up to the many existing\nform validation plugins. Below are some examples of plugins and how they may be integrated.</p>\n<h2 id="vuelidate"><span class="bd-content-title">Vuelidate<a class="anchorjs-link" href="#vuelidate" aria-label="Anchor"></a></span></h2>\n<p><a href="https://github.com/vuelidate/vuelidate/" target="_blank" rel="noopener">Vuelidate</a> provides &quot;Simple, lightweight model-based\nvalidation for Vue.js&quot;. Installation instructions and other documentation can be found at\n<a href="https://vuelidate.netlify.com/" target="_blank" rel="noopener">https://vuelidate.netlify.com/</a>.</p>\n<h3 id="vuelidate-example"><span class="bd-content-title">Vuelidate example<a class="anchorjs-link" href="#vuelidate-example" aria-label="Anchor"></a></span></h3>\n<p>This example shows how to add different validation and feedback to two form fields, as well as\ndynamically disable the submit button based on the form validity.</p>\n<p>This is a verbose example designed to show how BootstrapVue and Vuelidate interact; in larger\napplications, you&#39;d likely want to abstract some of the functionality, such as creating a standard\nerror message component.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form</span> @<span class="hljs-attr">submit.stop.prevent</span>=<span class="hljs-string">"onSubmit"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"example-input-group-1"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Name"</span> <span class="hljs-attr">label-for</span>=<span class="hljs-string">"example-input-1"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span>\n          <span class="hljs-attr">id</span>=<span class="hljs-string">"example-input-1"</span>\n          <span class="hljs-attr">name</span>=<span class="hljs-string">"example-input-1"</span>\n          <span class="hljs-attr">v-model</span>=<span class="hljs-string">"$v.form.name.$model"</span>\n          <span class="hljs-attr">:state</span>=<span class="hljs-string">"$v.form.name.$dirty ? !$v.form.name.$error : null"</span>\n          <span class="hljs-attr">aria-describedby</span>=<span class="hljs-string">"input-1-live-feedback"</span>\n        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-invalid-feedback</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"input-1-live-feedback"</span>&gt;</span>\n          This is a required field and must be at least 3 characters.\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-invalid-feedback</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"example-input-group-2"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Food"</span> <span class="hljs-attr">label-for</span>=<span class="hljs-string">"example-input-2"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-select</span>\n          <span class="hljs-attr">id</span>=<span class="hljs-string">"example-input-2"</span>\n          <span class="hljs-attr">name</span>=<span class="hljs-string">"example-input-2"</span>\n          <span class="hljs-attr">v-model</span>=<span class="hljs-string">"$v.form.food.$model"</span>\n          <span class="hljs-attr">:options</span>=<span class="hljs-string">"foods"</span>\n          <span class="hljs-attr">:state</span>=<span class="hljs-string">"$v.form.food.$dirty ? !$v.form.food.$error : null"</span>\n          <span class="hljs-attr">aria-describedby</span>=<span class="hljs-string">"input-2-live-feedback"</span>\n        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-select</span>&gt;</span>\n\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-invalid-feedback</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"input-2-live-feedback"</span>&gt;</span>\n          This is a required field.\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-invalid-feedback</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"$v.form.$invalid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">import</span> { validationMixin } <span class="hljs-keyword">from</span> <span class="hljs-string">\'vuelidate\'</span>\n  <span class="hljs-keyword">import</span> { required, minLength } <span class="hljs-keyword">from</span> <span class="hljs-string">\'vuelidate/lib/validators\'</span>\n\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">mixins</span>: [validationMixin],\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">foods</span>: [<span class="hljs-string">\'apple\'</span>, <span class="hljs-string">\'orange\'</span>],\n        <span class="hljs-attr">form</span>: {\n          <span class="hljs-attr">name</span>: <span class="hljs-literal">null</span>,\n          <span class="hljs-attr">food</span>: <span class="hljs-literal">null</span>\n        }\n      }\n    },\n    <span class="hljs-attr">validations</span>: {\n      <span class="hljs-attr">form</span>: {\n        <span class="hljs-attr">food</span>: {\n          required\n        },\n        <span class="hljs-attr">name</span>: {\n          required,\n          <span class="hljs-attr">minLength</span>: minLength(<span class="hljs-number">3</span>)\n        }\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      onSubmit() {\n        <span class="hljs-keyword">this</span>.$v.form.$touch()\n        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.$v.form.$anyError) {\n          <span class="hljs-keyword">return</span>\n        }\n\n        <span class="hljs-comment">// Form submit logic</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></pre><h2 id="veevalidate"><span class="bd-content-title">VeeValidate<a class="anchorjs-link" href="#veevalidate" aria-label="Anchor"></a></span></h2>\n<p><a href="https://logaretm.github.io/vee-validate/" target="_blank" rel="noopener">VeeValidate</a> is a plugin for Vue.js that allows you to\nvalidate input fields and display errors. It has full support for\n<a href="https://kazupon.github.io/vue-i18n/" target="_blank" rel="noopener">Vue I18n</a> and provides fairly good out of the box error\nmessages.</p>\n<p><strong>Important</strong></p>\n<p>You <strong>must</strong> configure <code translate="no" class="notranslate text-nowrap">vee-validate</code>&#39;s <code translate="no" class="notranslate text-nowrap">fields</code> property or it will conflict with the <code translate="no" class="notranslate text-nowrap">:fields</code>\nproperty of <code translate="no" class="notranslate text-nowrap">&lt;b-table&gt;</code> (and possibly other components) when it injects itself.</p>\n<pre class="hljs js text-monospace p-2 notranslate" translate="no"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">\'vue\'</span>\n<span class="hljs-keyword">import</span> VeeValidate <span class="hljs-keyword">from</span> <span class="hljs-string">\'vee-validate\'</span>\n\nVue.use(VeeValidate, {\n  <span class="hljs-comment">// This is the default</span>\n  inject: <span class="hljs-literal">true</span>,\n  <span class="hljs-comment">// Important to name this something other than \'fields\'</span>\n  fieldsBagName: <span class="hljs-string">\'veeFields\'</span>,\n  <span class="hljs-comment">// This is not required but avoids possible naming conflicts</span>\n  errorBagName: <span class="hljs-string">\'veeErrors\'</span>\n})</pre><h3 id="veevalidate-example"><span class="bd-content-title">VeeValidate example<a class="anchorjs-link" href="#veevalidate-example" aria-label="Anchor"></a></span></h3>\n<p>Same example as above, just modified for VeeValidate:</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form</span> @<span class="hljs-attr">submit.stop.prevent</span>=<span class="hljs-string">"onSubmit"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"example-input-group-1"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Name"</span> <span class="hljs-attr">label-for</span>=<span class="hljs-string">"example-input-1"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span>\n          <span class="hljs-attr">id</span>=<span class="hljs-string">"example-input-1"</span>\n          <span class="hljs-attr">name</span>=<span class="hljs-string">"example-input-1"</span>\n          <span class="hljs-attr">v-model</span>=<span class="hljs-string">"form.name"</span>\n          <span class="hljs-attr">v-validate</span>=<span class="hljs-string">"{ required: true, min: 3 }"</span>\n          <span class="hljs-attr">:state</span>=<span class="hljs-string">"validateState(\'example-input-1\')"</span>\n          <span class="hljs-attr">aria-describedby</span>=<span class="hljs-string">"input-1-live-feedback"</span>\n        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-invalid-feedback</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"input-1-live-feedback"</span>&gt;</span>\n          This is a required field and must be at least 3 characters.\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-invalid-feedback</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"example-input-group-2"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Food"</span> <span class="hljs-attr">label-for</span>=<span class="hljs-string">"example-input-2"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-select</span>\n          <span class="hljs-attr">id</span>=<span class="hljs-string">"example-input-2"</span>\n          <span class="hljs-attr">name</span>=<span class="hljs-string">"example-input-2"</span>\n          <span class="hljs-attr">v-model</span>=<span class="hljs-string">"form.food"</span>\n          <span class="hljs-attr">v-validate</span>=<span class="hljs-string">"{ required: true }"</span>\n          <span class="hljs-attr">:options</span>=<span class="hljs-string">"foods"</span>\n          <span class="hljs-attr">:state</span>=<span class="hljs-string">"validateState(\'example-input-2\')"</span>\n          <span class="hljs-attr">aria-describedby</span>=<span class="hljs-string">"input-2-live-feedback"</span>\n        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-select</span>&gt;</span>\n\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-invalid-feedback</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"input-2-live-feedback"</span>&gt;</span>\n          This is a required field.\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-invalid-feedback</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"veeErrors.any()"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">foods</span>: [<span class="hljs-string">\'apple\'</span>, <span class="hljs-string">\'orange\'</span>],\n        <span class="hljs-attr">form</span>: {\n          <span class="hljs-attr">name</span>: <span class="hljs-literal">null</span>,\n          <span class="hljs-attr">food</span>: <span class="hljs-literal">null</span>\n        }\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      validateState(ref) {\n        <span class="hljs-keyword">if</span> (\n          <span class="hljs-keyword">this</span>.veeFields[ref] &amp;&amp;\n          (<span class="hljs-keyword">this</span>.veeFields[ref].dirty || <span class="hljs-keyword">this</span>.veeFields[ref].validated)\n        ) {\n          <span class="hljs-keyword">return</span> !<span class="hljs-keyword">this</span>.veeErrors.has(ref)\n        }\n        <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>\n      },\n      onSubmit() {\n        <span class="hljs-keyword">this</span>.$validator.validateAll().then(<span class="hljs-function">(<span class="hljs-params">result</span>) =&gt;</span> {\n          <span class="hljs-keyword">if</span> (!result) {\n            <span class="hljs-keyword">return</span>\n          }\n\n          <span class="hljs-comment">// Form submit logic</span>\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></pre>'}}]);