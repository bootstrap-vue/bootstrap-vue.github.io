(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{295:function(e,o,r){var map={"./alert/README.md":[317,7],"./badge/README.md":[318,8],"./breadcrumb/README.md":[319,19],"./button-group/README.md":[321,40],"./button-toolbar/README.md":[322,41],"./button/README.md":[320,30],"./card/README.md":[323,42],"./carousel/README.md":[324,43],"./collapse/README.md":[325,44],"./dropdown/README.md":[326,45],"./embed/README.md":[327,9],"./form-checkbox/README.md":[329,11],"./form-file/README.md":[330,12],"./form-group/README.md":[331,13],"./form-input/README.md":[332,14],"./form-radio/README.md":[333,15],"./form-select/README.md":[334,16],"./form-tags/README.md":[335,17],"./form-textarea/README.md":[336,18],"./form/README.md":[328,10],"./image/README.md":[337,20],"./input-group/README.md":[338,21],"./jumbotron/README.md":[339,22],"./layout/README.md":[340,23],"./link/README.md":[341,24],"./list-group/README.md":[342,25],"./media/README.md":[343,26],"./modal/README.md":[344,27],"./nav/README.md":[345,28],"./navbar/README.md":[346,29],"./pagination-nav/README.md":[348,32],"./pagination/README.md":[347,31],"./popover/README.md":[349,33],"./progress/README.md":[350,34],"./spinner/README.md":[351,35],"./table/README.md":[352,36],"./tabs/README.md":[353,37],"./toast/README.md":[354,38],"./tooltip/README.md":[355,39]};function n(e){if(!r.o(map,e))return Promise.resolve().then((function(){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}));var o=map[e],n=o[0];return r.e(o[1]).then((function(){return r.t(n,7)}))}n.keys=function(){return Object.keys(map)},n.id=295,e.exports=n},380:function(e,o,r){"use strict";r.r(o);var n=r(20),t=r(248),E=r(264),m=r(258),d=r(241),D=r(242),M=r(243),A=r(43);o.default={name:"BDVComponents",layout:"docs",mixins:[M.a],validate(e){var{params:o}=e;return Boolean(A.d[o.slug])},asyncData:e=>Object(n.a)((function*(){var o,{params:n}=e;return{readme:(yield(o=n.slug,r(295)("./".concat(o,"/README.md")))).default,meta:A.d[n.slug]}}))(),render(e){var o=e(D.a,{props:{play:!0},domProps:{innerHTML:this.readme}}),r=e(D.a,{class:["bd-component-reference"]},[e(t.a,{props:{id:"component-reference"}},"Component reference"),...this.meta.components.map(o=>{var{component:component,events:r,rootEventListeners:n,slots:t,aliases:m,props:d,version:D}=o;return e(E.a,{props:{component:component,events:r,rootEventListeners:n,slots:t,aliases:m,propsMeta:d,version:D}})}),e(m.a,{props:{meta:this.meta}})]);return e(d.a,{staticClass:"bd-components"},[o,r])}}}}]);