(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{302:function(e,o,E){var map={"./alert/README.md":[324,7],"./badge/README.md":[325,8],"./breadcrumb/README.md":[326,19],"./button-group/README.md":[328,41],"./button-toolbar/README.md":[329,46],"./button/README.md":[327,30],"./calendar/README.md":[330,47],"./card/README.md":[331,48],"./carousel/README.md":[332,49],"./collapse/README.md":[333,50],"./dropdown/README.md":[334,9],"./embed/README.md":[335,10],"./form-checkbox/README.md":[337,12],"./form-datepicker/README.md":[338,13],"./form-file/README.md":[339,14],"./form-group/README.md":[340,15],"./form-input/README.md":[341,16],"./form-radio/README.md":[342,17],"./form-select/README.md":[343,18],"./form-spinbutton/README.md":[344,20],"./form-tags/README.md":[345,21],"./form-textarea/README.md":[346,22],"./form-timepicker/README.md":[347,23],"./form/README.md":[336,11],"./image/README.md":[348,24],"./input-group/README.md":[349,25],"./jumbotron/README.md":[350,26],"./layout/README.md":[351,27],"./link/README.md":[352,28],"./list-group/README.md":[353,29],"./media/README.md":[354,31],"./modal/README.md":[355,32],"./nav/README.md":[356,33],"./navbar/README.md":[357,34],"./pagination-nav/README.md":[359,36],"./pagination/README.md":[358,35],"./popover/README.md":[360,37],"./progress/README.md":[361,38],"./spinner/README.md":[362,39],"./table/README.md":[363,40],"./tabs/README.md":[364,42],"./time/README.md":[365,43],"./toast/README.md":[366,44],"./tooltip/README.md":[367,45]};function r(e){if(!E.o(map,e))return Promise.resolve().then((function(){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}));var o=map[e],r=o[0];return E.e(o[1]).then((function(){return E.t(r,7)}))}r.keys=function(){return Object.keys(map)},r.id=302,e.exports=r},393:function(e,o,E){"use strict";E.r(o);var r=E(19),t=E(255),m=E(271),n=E(265),d=E(248),D=E(249),M=E(250),A=E(44);o.default={name:"BDVComponents",layout:"docs",mixins:[M.a],validate(e){var{params:o}=e;return Boolean(A.d[o.slug])},asyncData:e=>Object(r.a)((function*(){var o,{params:r}=e;return{readme:(yield(o=r.slug,E(302)("./".concat(o,"/README.md")))).default,meta:A.d[r.slug]}}))(),render(e){var o=e(D.a,{props:{play:!0},domProps:{innerHTML:this.readme}}),E=e(D.a,{class:["bd-component-reference"]},[e(t.a,{props:{id:"component-reference"}},"Component reference"),...this.meta.components.map(o=>{var{component:component,events:E,rootEventListeners:r,slots:t,aliases:n,props:d,version:D}=o;return e(m.a,{props:{component:component,events:E,rootEventListeners:r,slots:t,aliases:n,propsMeta:d,version:D}})}),e(n.a,{props:{meta:this.meta}})]);return e(d.a,{staticClass:"bd-components"},[o,E])}}}}]);