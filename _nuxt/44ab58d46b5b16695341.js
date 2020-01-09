(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{310:function(t,e,o){},320:function(t,e,o){"use strict";o(15),o(13),o(23),o(32),o(11),o(14);var n=o(3),r=(o(56),o(57),o(10),o(17)),l=o.n(r),c=o(327),d=o(27);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"BDVComponentdoc",components:{AnchoredHeading:o(305).a},props:{component:{},srcComponent:{},propsMeta:{type:Array,default:function(){return[]}},slots:{type:Array,default:function(){return[]}},events:{type:Array,default:function(){return[]}},rootEventListeners:{type:Array,default:function(){return[]}},aliases:{type:Array,default:function(){return[]}},version:{type:String,default:null}},computed:{componentOptions:function(){var component=l.a.options.components[this.srcComponent||this.component];if(!component)return{};var t={};return component.options||"function"!=typeof component?t=component.options||{}:component((function(e){"[object Object]"===Object.prototype.toString.call(e)?t=v({},e):e&&e.options&&(t=e.options)})),t},componentFunctional:function(){return this.componentOptions.functional},componentVModel:function(){var t=this.componentOptions.model||{};return!(!t.prop||!t.event)&&t},componentProps:function(){return this.componentOptions.props||{}},hasRouterProps:function(){return this.propsItems.some((function(p){return"to"===p.prop||"split-to"===p.prop||"exact-active-class"===p.prop}))},hasHtmlProps:function(){return this.propsItems.some((function(p){return p.xss}))},componentPropsMetaObj:function(){return this.propsMeta.reduce((function(t,e){return e.prop&&(t[e.prop]=e),t}),{})},propsFields:function(){var t=[{key:"prop",label:"Property",sortable:this.propsItems.length>9},{key:"type",label:"Type"},{key:"defaultValue",label:"Default"}];return this.propsItems.some((function(p){return p.description}))&&t.push({key:"description",label:"Description"}),t},eventsFields:function(){return[{key:"event",label:"Event"},{key:"args",label:"Arguments"},{key:"description",label:"Description"}]},rootEventListenersFields:function(){return[{key:"event",label:"Event"},{key:"args",label:"Arguments"},{key:"description",label:"Description"}]},slotsFields:function(){var t=[{key:"name",label:"Slot Name",sortable:this.slotsItems.length>9},{key:"description",label:"Description"}];return this.slots.length>0&&this.slots.some((function(s){return s.scope}))&&t.push({key:"scope",label:"Scoped"}),t},propsItems:function(){var t=this,e=this.componentProps,o=this.componentPropsMetaObj;return Object.keys(e).map((function(n){var p=e[n],meta=o[n]||{},r=p.type;r=Array.isArray(r)?r.map((function(t){return t.name})).join(" or "):void 0===r?"Any":r.name;var l=p.default;l instanceof Function&&!Array.isArray(l)&&(l=l()),null==l&&(l=""),"''"===(l=JSON.stringify(l).replace(/"/g,"'"))&&(l="");var h=c[n]||{},v=void 0===meta.description?h.description:meta.description,f=void 0===meta.version?h.version:meta.version;return{prop:Object(d.b)(n),type:r,defaultValue:l,required:p.required||!1,description:v||"",version:f,xss:/[a-z]Html$/.test(n),isVModel:t.componentVModel&&t.componentVModel.prop===n,deprecated:p.deprecated||!1,deprecation:p.deprecation||!1,_showDetails:"string"==typeof p.deprecated||"string"==typeof p.deprecation}}))},slotsItems:function(){return this.slots?this.slots.map((function(s){return v({},s)})):[]},componentName:function(){return Object(d.b)(this.component).replace("{","-{")},componentNameClean:function(){return this.componentName.replace("{","").replace("}","")},tag:function(){return"<".concat(this.componentName,">")},githubURL:function(){var t=this.componentName.replace(/^b-/,"");if(-1!==t.indexOf("{"))return"";var e=this.$route.params.slug;return"".concat("https://github.com/bootstrap-vue/bootstrap-vue/tree/dev/src/components","/").concat(e,"/").concat(t,".js")}},methods:{kebabCase:d.b}},m=(o(328),o(29)),_=Object(m.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.component?o("section",{staticClass:"bd-content"},[o("b-row",{attrs:{tag:"header","align-v":"center"}},[o("b-col",{attrs:{sm:"9"}},[o("anchored-heading",{attrs:{id:"comp-ref-"+t.componentNameClean,level:"3"}},[o("code",{staticClass:"notranslate bigger",attrs:{translate:"no"}},[t._v(t._s(t.tag))])]),t._v(" "),t.version?o("b-badge",{attrs:{variant:"success"}},[t._v("v"+t._s(t.version)+"+")]):t._e(),t._v(" "),t.componentFunctional?o("b-badge",{attrs:{variant:"secondary",target:"_blank",href:"https://vuejs.org/v2/guide/render-function.html#Functional-Components"}},[t._v("\n        Functional Component\n      ")]):t._e()],1),t._v(" "),o("b-col",{staticClass:"text-sm-right",attrs:{sm:"3"}},[t.githubURL?o("b-btn",{attrs:{variant:"outline-secondary",size:"sm",href:t.githubURL,target:"_blank"}},[t._v("\n        View source\n      ")]):t._e()],1)],1),t._v(" "),o("ul",{staticClass:"component-ref-mini-toc my-3"},[t.aliases&&t.aliases.length>0?o("li",[o("a",{attrs:{href:"#comp-ref-"+t.componentName+"-aliases"}},[o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v(t._s(t.tag))]),t._v(" Component aliases\n      ")])]):t._e(),t._v(" "),t.propsItems&&t.propsItems.length>0?o("li",[o("a",{attrs:{href:"#comp-ref-"+t.componentName+"-props"}},[o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v(t._s(t.tag))]),t._v(" Properties\n      ")])]):t._e(),t._v(" "),t.componentVModel?o("li",[o("a",{attrs:{href:"#comp-ref-"+t.componentName+"-v-model"}},[o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v(t._s(t.tag))]),t._v(" v-model\n      ")])]):t._e(),t._v(" "),t.slots&&t.slots.length>0?o("li",[o("a",{attrs:{href:"#comp-ref-"+t.componentName+"-slots"}},[o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v(t._s(t.tag))]),t._v(" Slots\n      ")])]):t._e(),t._v(" "),t.events&&t.events.length>0?o("li",[o("a",{attrs:{href:"#comp-ref-"+t.componentName+"-events"}},[o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v(t._s(t.tag))]),t._v(" Events\n      ")])]):t._e(),t._v(" "),t.rootEventListeners&&t.rootEventListeners.length>0?o("li",[o("a",{attrs:{href:"#comp-ref-"+t.componentName+"-rootEventListeners"}},[o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v(t._s(t.tag))]),t._v(" "),o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v("$root")]),t._v(" Event Listeners\n      ")])]):t._e()]),t._v(" "),t.aliases&&t.aliases.length>0?o("article",{staticClass:"bd-content"},[o("anchored-heading",{staticClass:"mb-3",attrs:{id:"comp-ref-"+t.componentName+"-aliases",level:"4"}},[t._v("\n      Component aliases\n    ")]),t._v(" "),o("p",[o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v(t._s(t.tag))]),t._v(" can also be used via the following aliases:")]),t._v(" "),o("ul",t._l(t.aliases,(function(e){return o("li",{key:e},[o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v("<"+t._s(t.kebabCase(e))+">")])])})),0),t._v(" "),t._m(0)],1):t._e(),t._v(" "),t.propsItems&&t.propsItems.length>0?o("article",{staticClass:"bd-content"},[o("anchored-heading",{staticClass:"mb-3",attrs:{id:"comp-ref-"+t.componentName+"-props",level:"4"}},[t._v("\n      Properties\n    ")]),t._v(" "),o("b-table",{attrs:{items:t.propsItems,fields:t.propsFields,"primary-key":"prop","table-class":"bv-docs-table",responsive:"sm","sort-icon-left":"",striped:""},scopedSlots:t._u([{key:"cell(prop)",fn:function(e){var n=e.value,r=e.item;return[o("code",{staticClass:"text-nowrap notranslate",attrs:{translate:"no"}},[t._v(t._s(n))]),t._v(" "),r.required?o("b-badge",{attrs:{variant:"info"}},[t._v("Required")]):t._e(),t._v(" "),r.version?o("b-badge",{attrs:{variant:"secondary"}},[t._v("v"+t._s(r.version)+"+")]):t._e(),t._v(" "),r.isVModel?o("b-badge",{attrs:{variant:"primary"}},[t._v("v-model")]):t._e(),t._v(" "),r.xss?o("b-badge",{attrs:{variant:"warning"}},[t._v("Use with caution")]):t._e(),t._v(" "),r.deprecated?o("b-badge",{attrs:{variant:"danger"}},[t._v("Deprecated")]):r.deprecation?o("b-badge",{attrs:{variant:"warning"}},[t._v("Deprecation")]):t._e()]}},{key:"cell(defaultValue)",fn:function(e){var n=e.value;return[n?o("code",{staticClass:"word-wrap-normal notranslate",attrs:{translate:"no"}},[t._v(t._s(n))]):t._e()]}},{key:"row-details",fn:function(e){var n=e.item;return["string"==typeof n.deprecated?o("p",{staticClass:"mb-1 small"},[t._v("\n          "+t._s(n.deprecated)+"\n        ")]):t._e(),t._v(" "),"string"==typeof n.deprecation?o("p",{staticClass:"mb-1 small"},[t._v("\n          "+t._s(n.deprecation)+"\n        ")]):t._e()]}}],null,!1,572050373)}),t._v(" "),t.hasRouterProps?o("div",{staticClass:"alert alert-info"},[o("p",{staticClass:"mb-0 small"},[o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v(t._s(t.tag))]),t._v(" supports generating\n        "),o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v("<router-link>")]),t._v(" or\n        "),o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v("<nuxt-link>")]),t._v(" component (if using Nuxt.js).\n        For more details on the router link (or nuxt link) specific props, see the\n        "),o("b-link",{staticClass:"alert-link",attrs:{to:"/docs/reference/router-links"}},[t._v("Router support")]),t._v("\n        reference section.\n      ")],1)]):t._e(),t._v(" "),t.hasHtmlProps?o("div",{staticClass:"alert alert-warning"},[o("p",{staticClass:"mb-0 small"},[o("strong",[t._v("Caution:")]),t._v(" Props that support HTML strings\n        ("),o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v("*-html")]),t._v(") can be vulnerable to\n        "),o("b-link",{staticClass:"alert-link",attrs:{href:"https://en.wikipedia.org/wiki/Cross-site_scripting",target:"_blank"}},[t._v("\n          Cross Site Scripting (XSS) attacks\n        ")]),t._v("\n        when passed raw user supplied values. You must properly\n        "),o("b-link",{staticClass:"alert-link",attrs:{href:"https://en.wikipedia.org/wiki/HTML_sanitization",target:"_blank"}},[t._v("\n          sanitize\n        ")]),t._v("\n        the user input first!\n      ")],1)]):t._e()],1):t._e(),t._v(" "),t.componentVModel?o("article",{staticClass:"bd-content"},[o("anchored-heading",{staticClass:"mb-3",attrs:{id:"comp-ref-"+t.componentName+"-v-model",level:"4"}},[t._v("\n      v-model\n    ")]),t._v(" "),o("b-table-lite",{attrs:{items:[t.componentVModel],fields:[{key:"prop",label:"Property"},"event"],"table-class":"bv-docs-table",responsive:"sm",striped:""},scopedSlots:t._u([{key:"cell(prop)",fn:function(e){var n=e.value;return[o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v(t._s(t.kebabCase(n)))])]}},{key:"cell(event)",fn:function(e){var n=e.value;return[o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v(t._s(n))])]}}],null,!1,4148569090)})],1):t._e(),t._v(" "),t.slots&&t.slots.length>0?o("article",{staticClass:"bd-content"},[o("anchored-heading",{staticClass:"mb-3",attrs:{id:"comp-ref-"+t.componentName+"-slots",level:"4"}},[t._v("\n      Slots\n    ")]),t._v(" "),o("b-table",{attrs:{items:t.slotsItems,fields:t.slotsFields,"primary-key":"name","table-class":"bv-docs-table",responsive:"sm","sort-icon-left":"",striped:""},scopedSlots:t._u([{key:"cell(name)",fn:function(e){var n=e.value,r=e.item;return[o("code",{staticClass:"text-nowrap notranslate",attrs:{translate:"no"}},[t._v(t._s(n))]),t._v(" "),r.version?o("b-badge",{attrs:{variant:"secondary"}},[t._v("v"+t._s(r.version)+"+")]):t._e()]}},{key:"cell(scope)",fn:function(e){var n=e.value,r=e.toggleDetails;return[n?o("b-button",{staticClass:"py-0",attrs:{variant:"info",size:"sm"},on:{click:function(t){return r()}}},[t._v("\n          Scope\n        ")]):t._e()]}},{key:"row-details",fn:function(e){var n=e.item;return[o("b-card",[n.scope?o("b-table-lite",{staticClass:"mb-0",attrs:{items:n.scope,fields:[{key:"prop",label:"Property"},"type","description"],"primary-key":"prop","head-variant":"dark",striped:"",small:"","caption-top":""},scopedSlots:t._u([{key:"thead-top",fn:function(){return[o("b-tr",[o("b-th",{staticClass:"text-center",attrs:{colspan:"3"}},[t._v("\n                  Slot\n                  "),o("code",{staticClass:"text-nowrap notranslate text-white",attrs:{translate:"no"}},[t._v("\n                    "+t._s(n.name)+"\n                  ")]),t._v("\n                  scoped properties\n                ")])],1)]},proxy:!0},{key:"cell(prop)",fn:function(e){var n=e.value,r=e.item;return[o("code",{staticClass:"text-nowrap notranslate",attrs:{translate:"no"}},[t._v(t._s(n))]),t._v(" "),r.version?o("b-badge",{attrs:{variant:"secondary"}},[t._v("v"+t._s(r.version)+"+")]):t._e()]}},{key:"cell(type)",fn:function(e){var n=e.value;return[n?o("span",{staticClass:"text-nowrap notranslate",attrs:{translate:"no"}},[t._v(t._s(n))]):[t._v("Any")]]}}],null,!0)}):t._e()],1)]}}],null,!1,3701360991)})],1):t._e(),t._v(" "),t.events&&t.events.length>0?o("article",{staticClass:"bd-content"},[o("anchored-heading",{staticClass:"mb-3",attrs:{id:"comp-ref-"+t.componentName+"-events",level:"4"}},[t._v("\n      Events\n    ")]),t._v(" "),o("b-table",{attrs:{items:t.events,fields:t.eventsFields,"primary-key":"event","table-class":"bv-docs-table",responsive:"sm",striped:""},scopedSlots:t._u([{key:"cell(event)",fn:function(e){var n=e.value,r=e.item;return[o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v(t._s(n))]),t._v(" "),r.version?o("b-badge",{attrs:{variant:"secondary"}},[t._v("v"+t._s(r.version)+"+")]):t._e()]}},{key:"cell(args)",fn:function(e){var n=e.value,r=e.item;return[n&&n.length>0?o("ol",{staticClass:"list-unstyled mb-0"},t._l(n,(function(e,n){return o("li",{key:"event-"+r.event+"-"+(e.arg||n)},[e.arg?[o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v(t._s(e.arg))]),t._v(" -\n            ")]:t._e(),t._v(" "),e.description?o("span",[t._v(t._s(e.description))]):t._e()],2)})),0):t._e()]}}],null,!1,3359378)})],1):t._e(),t._v(" "),t.rootEventListeners&&t.rootEventListeners.length>0?o("article",{staticClass:"bd-content"},[o("anchored-heading",{staticClass:"mb-3",attrs:{id:"comp-ref-"+t.componentName+"-rootEventListeners",level:"4"}},[o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v("$root")]),t._v(" Event Listeners\n    ")]),t._v(" "),o("p",[t._v("\n      You can control "),o("code",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v(t._s(t.tag))]),t._v(" by emitting the\n      following events on "),o("samp",{staticClass:"notranslate",attrs:{translate:"no"}},[t._v("$root")]),t._v(":\n    ")]),t._v(" "),o("b-table-lite",{attrs:{items:t.rootEventListeners,fields:t.rootEventListenersFields,"primary-key":"event","table-class":"bv-docs-table",responsive:"sm",striped:""},scopedSlots:t._u([{key:"cell(event)",fn:function(e){var n=e.value,r=e.item;return[o("code",{staticClass:"text-nowrap notranslate",attrs:{translate:"no"}},[t._v(t._s(n))]),t._v(" "),r.version?o("b-badge",{attrs:{variant:"secondary"}},[t._v("v"+t._s(r.version)+"+")]):t._e()]}},{key:"cell(args)",fn:function(e){var n=e.value,r=e.item;return t._l(n,(function(e){return o("p",{key:"event-"+r.event+"-"+(e.arg?e.arg:"none"),staticClass:"mb-1"},[e.arg?[o("code",{staticClass:"text-nowrap notranslate",attrs:{translate:"no"}},[t._v(t._s(e.arg))]),t._v(" "),e.description?o("span",[t._v(" - "+t._s(e.description))]):t._e()]:t._e()],2)}))}}],null,!1,3693369500)})],1):t._e()],1):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert alert-info"},[e("p",{staticClass:"mb-0 small"},[this._v("\n        Note: component aliases are only available when importing all of BootstrapVue or using\n        the component group plugin.\n      ")])])}],!1,null,"0ce4b7b0",null);e.a=_.exports},327:function(t){t.exports=JSON.parse('{"id":{"description":"Used to set the \'id\' attribute on the rendered content, and used as the base to generate any additional element IDs as needed"},"variant":{"description":"Applies one of the Bootstrap theme color variants to the component"},"textVariant":{"description":"Applies one of the Bootstrap theme color variants to the text"},"bgVariant":{"description":"Applies one of the Bootstrap theme color variants to the background"},"borderVariant":{"description":"Applies one of the Bootstrap theme color variants to the border"},"headerVariant":{"description":"Applies one of the Bootstrap theme color variants to the header"},"headerTextVariant":{"description":"Applies one of the Bootstrap theme color variants to the header text"},"titleTextVariant":{"description":"Applies one of the Bootstrap theme color variants to the title text"},"subTitleTextVariant":{"description":"Applies one of the Bootstrap theme color variants to the sub title text"},"headerBgVariant":{"description":"Applies one of the Bootstrap theme color variants to the header background"},"headerBorderVariant":{"description":"Applies one of the Bootstrap theme color variants to the header border"},"footerVariant":{"description":"Applies one of the Bootstrap theme color variants to the footer"},"footerTextVariant":{"description":"Applies one of the Bootstrap theme color variants to the footer text"},"footerBgVariant":{"description":"Applies one of the Bootstrap theme color variants to the footer background"},"footerBorderVariant":{"description":"Applies one of the Bootstrap theme color variants to the footer border"},"bodyVariant":{"description":"Applies one of the Bootstrap theme color variants to the body"},"bodyTextVariant":{"description":"Applies one of the Bootstrap theme color variants to the body text"},"bodyBgVariant":{"description":"Applies one of the Bootstrap theme color variants to the body background"},"bodyBorderVariant":{"description":"Applies one of the Bootstrap theme color variants to the body border"},"tag":{"description":"Specify the HTML tag to render instead of the default tag"},"headerTag":{"description":"Specify the HTML tag to render instead of the default tag for the header"},"footerTag":{"description":"Specify the HTML tag to render instead of the default tag for the footer"},"bodyTag":{"description":"Specify the HTML tag to render instead of the default tag for the body"},"titleTag":{"description":"Specify the HTML tag to render instead of the default tag for the title"},"subTitleTag":{"description":"Specify the HTML tag to render instead of the default tag for the sub title"},"textTag":{"description":"Specify the HTML tag to render instead of the default tag for the text content"},"headerClass":{"description":"CSS class (or classes) to apply to the header"},"footerClass":{"description":"CSS class (or classes) to apply to the footer"},"bodyClass":{"description":"CSS class (or classes) to apply to the body"},"titleClass":{"description":"CSS class (or classes) to apply to the title"},"header":{"description":"Text content to place in the header"},"headerHtml":{"description":"HTML string content to place in the header. Use with caution"},"footer":{"description":"Text content to place in the footer"},"footerHtml":{"description":"HTML string content to place in the footer. Use with caution"},"title":{"description":"Text content to place in the title"},"titleHtml":{"description":"HTML string content to place in the title. Use with caution"},"subTitle":{"description":"Text content to place in the sub title"},"size":{"description":"Set the size of the component\'s appearance. \'sm\', \'md\' (default), or \'lg\'"},"required":{"description":"Adds the \'required\' attribute to the form control"},"form":{"description":"ID of the form that the form control belongs to. Sets the \'form\' attribute on the control"},"name":{"description":"Sets the value of the \'name\' attribute on the form control"},"placeholder":{"description":"Sets the \'placeholder\' attribute value on the form control"},"readonly":{"description":"Sets the \'readonly\' attribute on hte form control"},"plaintext":{"description":"Set the form control as readonly and renders the control to look like plain text (no borders)"},"autocomplete":{"description":"Sets the \'autocomplete\' attribute value on the form control"},"autofocus":{"description":"When set to \'true\', attempts to auto-focus the control when it is mounted, or re-activated when in a keep-alive. Does not set the \'autofocus\' attribute on the control"},"state":{"description":"Controls the validation state appearance of the component. \'true\' for valid, \'false\' for invalid\', or \'null\' for no validation state"},"options":{"description":"Array of items to render in the component"},"valueField":{"description":"Field name in the \'options\' array that should be used for the value"},"textField":{"description":"Field name in the \'options\' array that should be used for the text label"},"htmlField":{"description":"Field name in the \'options\' array that should be used for the html label instead of text field. Use with caution."},"disabledField":{"description":"Field name in the \'options\' array that should be used for the disabled state"},"plain":{"description":"Render the form control in plain mode, rather than custom styled mode"},"static":{"description":"Renders the content of the component in-place in the DOM, rather than portalling it to be appended to the body element"},"src":{"description":"URL to set for the \'src\' attribute"},"alt":{"description":"Value to set for the \'alt\' attribute"},"role":{"description":"Sets the ARIA attribute \'role\' to a specific value"},"ariaRole":{"description":"Sets the ARIA attribute \'role\' to a specific value"},"ariaLabel":{"description":"Sets the value of \'aria-label\' attribute on the rendered element"},"ariaLabelledby":{"description":"The ID of the element that provides a label for this component. Used as the value for the \'aria-labelledby\' attribute"},"ariaDescribedby":{"description":"The ID of the element that provides additional context for this component. Used as the value for the \'aria-describedby\' attribute"},"ariaLive":{"description":"When the rendered element is an aria-live region (for screen reader users), set to either \'polite\' or \'assertive\'"},"fade":{"description":"When set to \'true\', enables the fade animation/transition on the component"},"noFade":{"description":"When set to \'true\', disables the fade animation/transition on the component"},"disabled":{"description":"When set to \'true\', disables the component\'s functionality and places it in a disabled state"},"active":{"description":"When set to \'true\', places the component in the active state with active styling"},"rel":{"description":"Sets the \'rel\' attribute on the rendered link"},"target":{"description":"Sets the \'target\' attribute on the rendered link"},"href":{"description":"Denotes the target URL of the link for standard a links"},"to":{"description":"router-link prop: Denotes the target route of the link. When clicked, the value of the to prop will be passed to router.push() internally, so the value can be either a string or a Location descriptor object"},"replace":{"description":"router-link prop: Setting the replace prop will call \'router.replace()\' instead of \'router.push()\' when clicked, so the navigation will not leave a history record"},"append":{"description":"router-link prop: Setting append prop always appends the relative path to the current path"},"exact":{"description":"router-link prop: The default active class matching behavior is inclusive match. Setting this prop forces the mode to exactly match the route"},"activeClass":{"description":"router-link prop: Configure the active CSS class applied when the link is active. Typically you will want to set this to class name \'active\'"},"exactActiveClass":{"description":"router-link prop: Configure the active CSS class applied when the link is active with exact match. Typically you will want to set this to class name \'active\'"},"routerTag":{"description":"router-link prop: Specify which tag to render, and it will still listen to click events for navigation. \'router-tag\' translates to the tag prop on the final rendered router-link. Typically you should use the default value"},"event":{"description":"router-link prop: Specify the event that triggers the link. In most cases you should leave this as the default"},"noPrefetch":{"description":"nuxt-link prop: To improve the responsiveness of your Nuxt.js applications, when the link will be displayed within the viewport, Nuxt.js will automatically prefetch the code splitted page. Setting \'no-prefetch\' will disabled this feature for the specific link"}}')},328:function(t,e,o){"use strict";var n=o(310);o.n(n).a}}]);