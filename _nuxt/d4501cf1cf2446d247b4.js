(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{323:function(e,t,r){"use strict";var n=r(313),o=r(315),m=r(320),E=r(314),d=r(32),c=r(8);t.a={name:"BVMainDocs",functional:!0,props:{tag:{type:String,default:"main"},readme:{type:String,default:""},meta:{type:Object,default:null}},render:function(e,t){var r=t.props,data=t.data,D=t.children,M=r.tag,R=r.readme,meta=r.meta,A=Object(d.f)(R||""),l=A.titleLead,body=A.body,f=(meta||{}).version,v=e(E.a,{props:{tag:"header",play:!1},domProps:{innerHTML:l||""}}),h=e();f&&(h=e(E.a,{props:{play:!1}},[e("p",{staticClass:"font-italic"},["Available in BootstrapVue since ",e("code",{staticClass:"text-nowrap"},"v".concat(f))])]));var y=e(n.a),w=e(m.a),k=e(E.a,{props:{play:!0},domProps:{innerHTML:body||""}});return e(o.a,Object(c.a)(data,{props:{tag:M}}),[v,h,y,w,k,D])}}},372:function(e,t,r){var map={"./alert/README.md":[393,7],"./aspect/README.md":[394,8],"./avatar/README.md":[395,19],"./badge/README.md":[396,30],"./breadcrumb/README.md":[397,41],"./button-group/README.md":[399,51],"./button-toolbar/README.md":[400,52],"./button/README.md":[398,50],"./calendar/README.md":[401,53],"./card/README.md":[402,54],"./carousel/README.md":[403,9],"./collapse/README.md":[404,10],"./dropdown/README.md":[405,11],"./embed/README.md":[406,12],"./form-checkbox/README.md":[408,14],"./form-datepicker/README.md":[409,15],"./form-file/README.md":[410,16],"./form-group/README.md":[411,17],"./form-input/README.md":[412,18],"./form-radio/README.md":[413,20],"./form-select/README.md":[414,21],"./form-spinbutton/README.md":[415,22],"./form-tags/README.md":[416,23],"./form-textarea/README.md":[417,24],"./form-timepicker/README.md":[418,25],"./form/README.md":[407,13],"./image/README.md":[419,26],"./input-group/README.md":[420,27],"./jumbotron/README.md":[421,28],"./layout/README.md":[422,29],"./link/README.md":[423,31],"./list-group/README.md":[424,32],"./media/README.md":[425,33],"./modal/README.md":[426,34],"./nav/README.md":[427,35],"./navbar/README.md":[428,36],"./overlay/README.md":[429,37],"./pagination-nav/README.md":[431,39],"./pagination/README.md":[430,38],"./popover/README.md":[432,40],"./progress/README.md":[433,42],"./sidebar/README.md":[434,43],"./spinner/README.md":[435,44],"./table/README.md":[436,45],"./tabs/README.md":[437,46],"./time/README.md":[438,47],"./toast/README.md":[439,48],"./tooltip/README.md":[440,49]};function n(e){if(!r.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],n=t[0];return r.e(t[1]).then((function(){return r.t(n,7)}))}n.keys=function(){return Object.keys(map)},n.id=372,e.exports=n},466:function(e,t,r){"use strict";r.r(t);var n=r(23),o=(r(48),r(24)),m=r(325),E=r(340),d=r(335),c=r(323),D=r(314),M=r(316),R=r(65);t.default={name:"BDVComponents",layout:"docs",mixins:[M.a],validate:function(e){var t=e.params;return Boolean(R.d[t.slug])},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,meta;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,t.next=3,m=n.slug,r(372)("./".concat(m,"/README.md"));case 3:return o=t.sent.default,meta=R.d[n.slug],t.abrupt("return",{meta:meta,readme:o});case 6:case"end":return t.stop()}var m}),t)})))()},render:function(e){var t=e(D.a,{class:["bd-component-reference"]},[e(m.a,{props:{id:"component-reference"}},"Component reference")].concat(Object(n.a)(this.meta.components.map((function(t){var component=t.component,r=t.events,n=t.rootEventListeners,o=t.slots,m=t.aliases,d=t.props,c=t.version;return e(E.a,{props:{component:component,events:r,rootEventListeners:n,slots:o,aliases:m,propsMeta:d,version:c}})}))),[e(d.a,{props:{meta:this.meta}})]));return e(c.a,{key:this.$route.path,staticClass:"bd-components",props:{readme:this.readme||"",meta:this.meta}},[t])}}}}]);