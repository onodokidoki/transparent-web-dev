(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5caae1f2"],{"8d29":function(t,e,o){"use strict";var n=4;e["a"]={methods:{login:function(){var t=this.$store.state.loginUsers.length+1,e={floorId:t,name:"randomName".concat(1e3),pins:[]};if(!(this.$store.state.loginUsers.length<n))throw"参加人数は4名まで";this.$store.commit("addLoginUser",e)},getStyleByFloorId:function(t){var e={1:{bottom:0,left:"auto",right:"auto"},2:{bottom:"auto",left:0,top:"auto"},3:{top:0,left:"auto",right:"auto"},4:{bottom:"auto",right:0,top:"auto"}};return e[t]}}}},bb51:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"fill",attrs:{id:"homeTarget"}},[o("h1",[t._v("TOUCH"),o("br"),t._v("AND"),o("br"),t._v("TALK")])])}],r=o("8d29"),a={name:"home",mixins:[r["a"]],created:function(){var t=this;this.$nextTick(function(){var e=document.querySelector("#homeTarget");e.addEventListener("click",t.onClickStart)})},methods:{onClickStart:function(){this.login(),this.$router.push("/welcome")}}},s=a,c=o("2877"),u=Object(c["a"])(s,n,i,!1,null,null,null);u.options.__file="Home.vue";e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-5caae1f2.014099d1.js.map