(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a41fdc6"],{"17a6":function(t,e,a){},"519b":function(t,e,a){"use strict";var s=a("17a6"),n=a.n(s);n.a},eec5:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"media-send-leyer"}},[a("div",{staticClass:"send-area"}),a("div",{staticClass:"send-area"}),a("div",{staticClass:"send-area"}),a("div",{staticClass:"send-area"}),a("div",{staticClass:"send-area"}),a("div",{staticClass:"send-area"}),a("div",{staticClass:"send-area"}),a("div",{staticClass:"send-area"}),a("div",{staticClass:"send-area"}),a("div",{staticClass:"send-area"})])])}],i=a("c93e"),r=(a("96cf"),a("3040")),o=(a("7514"),a("a5bc")),c=a("c1df"),l=a.n(c),d=a("2f62"),u=a("8d29"),f=a("f633"),m=a("5ab3"),v=a("6f3e"),h={name:"welcome",components:{UserLayer:m["a"]},mixins:[u["a"],f["a"],v["a"]],data:function(){return{isShowConfirmOverlay:!1}},created:function(){window.addEventListener("CUSTOM_TOUCH_START",this.onClickTable)},methods:{onClickTable:function(t){var e=t.detail[0].floorId;if(0===e)return this.$_wallMixin_showOutsideClickAlert(),!1;var a=this.loginUsers.find(function(t){return t.floorId===e}),s=!!a;s?this.confirmStartMeeting(e):this.login(e)},startmeeting:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.createWall();case 2:e=t.sent,window.removeEventListener("CUSTOM_TOUCH_START",this.onClickTable),a=e.data,this.$router.push("/walls/".concat(a.id,"/meeting?key=").concat(e.data.key)),this.$store.commit("setState",{isSmallHue:!1}),this.$store.commit("setState",{loginUsers:this.$store.state.loginUsers.map(function(t){return t.isStartTalkModal=!1,t})});case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),confirmStartMeeting:function(t){this.isShowUserOverlay||createjs.Sound.play("hue"),this.$store.commit("setState",{isSmallHue:!0}),this.$store.commit("updateLoginUser",{floorId:t,params:{isStartTalkModal:!0}})},onClickStartButton:function(){this.startmeeting()},createWall:function(){var t=l()().format("MMDDHHm"),e={name:"NEXT100-".concat(t),default_langcode:0,version:"next100"};return o["a"].post("/walls",e)}},computed:Object(i["a"])({},Object(d["c"])(["loginUsers","isStartTalkModal"]),Object(d["b"])(["isShowUserOverlay"])),beforeDestroy:function(){window.removeEventListener("CUSTOM_TOUCH_START",this.onClickTable)}},w=h,C=(a("519b"),a("2877")),S=Object(C["a"])(w,s,n,!1,null,"c06ee762",null);S.options.__file="Welcome.vue";e["default"]=S.exports}}]);
//# sourceMappingURL=chunk-6a41fdc6.59e3b9df.js.map