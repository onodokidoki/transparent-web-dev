(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a7e384e"],{"08bb":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"wrapper",style:t.wrapperStyle},[n("div",{staticClass:"child",style:t.childStyle},[t._l(t.layers,function(e,a){return[n("div",{staticClass:"layer",style:t.layerStyles[a],attrs:{"data-layer-id":a}},[n("img",{attrs:{src:"http://placehold.it/200x200?text="+e.name}})])]})],2)]),n("div",{staticClass:"control"},[t._v("\n    translateZ: "),n("input",{attrs:{type:"number",value:"0"},on:{input:t.onInputTranslateZ}}),t._v("px"),n("br"),t._v("\n    perspective: "),n("input",{attrs:{type:"number",value:"100"},on:{input:t.onInputPerspective}}),t._v("px"),n("br"),n("button",{on:{click:t.onClickAddLayer}},[t._v("add layer")]),n("br"),t._v("\n    -"),n("br")])])},r=[],i=(n("cadf"),n("551c"),n("097d"),n("1157"),n("2ef0"),{name:"MeetingTest",created:function(){this.stopWindowPinchAction()},data:function(){return{layers:[{name:"layer-5"},{name:"layer-4"},{name:"layer-3"},{name:"layer-2"},{name:"layer-1"},{name:"layer-0"}],wrapperStyle:{},childStyle:{}}},computed:{layerStyles:function(){var t=50,e=this.layers.map(function(e,n){return{transform:"translate3D(0px, 0px, ".concat(0-n*t,"px)")}});return e}},methods:{stopWindowPinchAction:function(){document.addEventListener("touchstart",function(t){t.touches.length>1&&t.preventDefault()},!0)},onInputTranslateZ:function(t){var e=t.target.value;this.childStyle={transform:"translate3D(0px, 0px, ".concat(e,"px)")}},onInputPerspective:function(t){var e=t.target.value;this.wrapperStyle={perspective:"".concat(e,"px")}},onInputLayer:function(t){var e=t.target.value,n=t.target.getAttribute("data-layer-id");this.layerStyles[n]={transform:"translate3D(0px, 0px, ".concat(e,"px)")}},onClickAddLayer:function(){var t={name:"layer-".concat(this.layers.length)};this.layers.unshift(t)}}}),l=i,s=(n("2398"),n("2877")),c=Object(s["a"])(l,a,r,!1,null,"96acf0d6",null);c.options.__file="MeetingTest.vue";e["default"]=c.exports},2398:function(t,e,n){"use strict";var a=n("6391"),r=n.n(a);r.a},6391:function(t,e,n){}}]);
//# sourceMappingURL=chunk-1a7e384e.fc83a066.js.map