(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{359:function(e,r,n){var map={"./alert/README.md":[380,7],"./badge/README.md":[381,8],"./breadcrumb/README.md":[382,19],"./button-group/README.md":[384,41],"./button-toolbar/README.md":[385,46],"./button/README.md":[383,30],"./calendar/README.md":[386,47],"./card/README.md":[387,48],"./carousel/README.md":[388,49],"./collapse/README.md":[389,50],"./dropdown/README.md":[390,9],"./embed/README.md":[391,10],"./form-checkbox/README.md":[393,12],"./form-datepicker/README.md":[394,13],"./form-file/README.md":[395,14],"./form-group/README.md":[396,15],"./form-input/README.md":[397,16],"./form-radio/README.md":[398,17],"./form-select/README.md":[399,18],"./form-spinbutton/README.md":[400,20],"./form-tags/README.md":[401,21],"./form-textarea/README.md":[402,22],"./form-timepicker/README.md":[403,23],"./form/README.md":[392,11],"./image/README.md":[404,24],"./input-group/README.md":[405,25],"./jumbotron/README.md":[406,26],"./layout/README.md":[407,27],"./link/README.md":[408,28],"./list-group/README.md":[409,29],"./media/README.md":[410,31],"./modal/README.md":[411,32],"./nav/README.md":[412,33],"./navbar/README.md":[413,34],"./pagination-nav/README.md":[415,36],"./pagination/README.md":[414,35],"./popover/README.md":[416,37],"./progress/README.md":[417,38],"./spinner/README.md":[418,39],"./table/README.md":[419,40],"./tabs/README.md":[420,42],"./time/README.md":[421,43],"./toast/README.md":[422,44],"./tooltip/README.md":[423,45]};function t(e){if(!n.o(map,e))return Promise.resolve().then((function(){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=map[e],t=r[0];return n.e(r[1]).then((function(){return n.t(t,7)}))}t.keys=function(){return Object.keys(map)},t.id=359,e.exports=t},449:function(e,r,n){"use strict";n.r(r);var t=n(23),o=(n(47),n(313)),E=n(328),m=n(323),d=n(306),c=n(307),D=n(308),M=n(65);r.default={name:"BDVComponents",layout:"docs",mixins:[D.a],validate:function(e){var r=e.params;return Boolean(M.d[r.slug])},asyncData:function(e){var r,t,meta;return regeneratorRuntime.async((function(o){for(;;)switch(o.prev=o.next){case 0:return r=e.params,o.next=3,regeneratorRuntime.awrap((E=r.slug,n(359)("./".concat(E,"/README.md"))));case 3:return t=o.sent.default,meta=M.d[r.slug],o.abrupt("return",{readme:t,meta:meta});case 6:case"end":return o.stop()}var E}))},render:function(e){var r=e(c.a,{props:{play:!0},domProps:{innerHTML:this.readme}}),n=e(c.a,{class:["bd-component-reference"]},[e(o.a,{props:{id:"component-reference"}},"Component reference")].concat(Object(t.a)(this.meta.components.map((function(r){var component=r.component,n=r.events,t=r.rootEventListeners,o=r.slots,m=r.aliases,d=r.props,c=r.version;return e(E.a,{props:{component:component,events:n,rootEventListeners:t,slots:o,aliases:m,propsMeta:d,version:c}})}))),[e(m.a,{props:{meta:this.meta}})]));return e(d.a,{staticClass:"bd-components"},[r,n])}}}}]);