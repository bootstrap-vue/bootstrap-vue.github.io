(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{257:function(e,t,r){"use strict";var n=r(247),o=r(249),c=r(254),d=r(248),l=r(22),m=r(8);t.a={name:"BVMainDocs",functional:!0,props:{tag:{type:String,default:"main"},readme:{type:String,default:""},meta:{type:Object,default:null}},render(e,t){var{props:r,data:data,children:f}=t,{tag:v,readme:E,meta:meta}=r,{titleLead:y,body:body}=Object(l.f)(E||""),{version:D}=meta||{},h=e(d.a,{props:{tag:"header",play:!1},domProps:{innerHTML:y||""}}),M=e();D&&(M=e(d.a,{props:{play:!1}},[e("p",{staticClass:"font-italic"},["Available in BootstrapVue since ",e("code",{staticClass:"text-nowrap"},"v".concat(D))])]));var w=e(n.a),O=e(c.a),A=e(d.a,{props:{play:!0},domProps:{innerHTML:body||""}});return e(o.a,Object(m.a)(data,{props:{tag:v}}),[h,M,w,O,A,f])}}},308:function(e,t,r){var map={"./hover/README.md":[377,55],"./popover/README.md":[378,56],"./scrollspy/README.md":[379,57],"./tooltip/README.md":[380,58],"./visible/README.md":[381,59]};function n(e){if(!r.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],n=t[0];return r.e(t[1]).then((function(){return r.t(n,7)}))}n.keys=function(){return Object.keys(map)},n.id=308,e.exports=n},403:function(e,t,r){"use strict";r.r(t);var n=r(19),o=r(259),c=r(269),d=r(257),l=r(248),m=r(250),f=r(43);t.default={name:"BDVDirectives",layout:"docs",mixins:[m.a],validate(e){var{params:t}=e;return Boolean(f.f[t.slug])},asyncData:e=>Object(n.a)((function*(){var t,{params:n}=e,o=(yield(t=n.slug,r(308)("./".concat(t,"/README.md")))).default;return{meta:f.f[n.slug],readme:o}}))(),render(e){var t=e(l.a,{class:["bd-component-reference"]},[e(o.a,{props:{id:"directive-reference"}},"Directive reference"),e(c.a,{props:{meta:this.meta}})]);return e(d.a,{staticClass:"bd-components",props:{readme:this.readme,meta:this.meta}},[t])}}}}]);