(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a28b6a8"],{"2f21":function(t,e,n){"use strict";var o=n("79e5");t.exports=function(t,e){return!!t&&o(function(){e?t.call(null,function(){},1):t.call(null)})}},"55dd":function(t,e,n){"use strict";var o=n("5ca1"),r=n("d8e8"),a=n("4bf8"),i=n("79e5"),c=[].sort,l=[1,2,3];o(o.P+o.F*(i(function(){l.sort(void 0)})||!i(function(){l.sort(null)})||!n("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(a(this)):c.call(a(this),r(t))}})},"6fba":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.layers,function(e,o){return n("div",{key:o},[n("div",[t._v("------------------------------------------------------")]),n("div",[t._v("id: "+t._s(e.id))]),n("div",[t._v("created_at: "+t._s(e.created_at))]),n("div",[t._v("画像:")]),n("div",{staticClass:"flexbox"},t._l(e.related_contents,function(e,o){return n("img",{key:e.id,staticClass:"image",attrs:{src:e.img_url},on:{touchstart:function(n){t.onClickImage(e)}}})})),n("div",[t._v("キーワード "+t._s(e.words.join(", ")))])])}))},r=[],a=(n("c5f6"),n("55dd"),n("ac6a"),n("7514"),n("96cf"),n("3040")),i=(n("cadf"),n("551c"),n("097d"),n("a5bc")),c=n("2ef0"),l=n.n(c),s=n("f633"),u=n("c8b5"),d=n.n(u),f=n("1157"),h=n.n(f),p=n("5ab3"),g=50,m=10,v=10,y={name:"Meeting",mixins:[s["a"]],components:{UserLayer:p["a"]},created:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e={wallId:this.$route.params.wallId},startRecognizeSpeachSDK(e),this.fetchTranscripts(),this.listenTranscriptsUpdate(),h()("body").css({overflow:"auto"});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),data:function(){var t=this;return{layers:[],isShowContentDetailModal:!1,currentContentDetailModalFloor:!1,currentDetailModalContent:null,currentDetailModalStyle:{},contextMenuStatuses:[],layerStyles:l.a.range(10).map(function(e){return t.getComputedStyleForLayer(e)}),keywordStyles:l.a.range(10).map(function(){return t.getRandomStyleForKeyWord()}),imageStyles:l.a.range(10).map(function(){return t.getRandomStyleForImage()}),positionMap:[]}},computed:{},methods:{onClickTest:function(){alert("test")},listenPersonalTouch:function(){window.addEventListener("CUSTOM_TOUCH_START",this.onClickTable)},fetchTranscripts:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,n,o,r,a,c,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$route.params.wallId,n="/next100/contents?wall_id=".concat(e),t.next=4,i["a"].get(n);case 4:o=t.sent,r=o.data,a=r.searches,r.search_first_index,r.search_last_index,c=r.related_contents,r.related_content_last_index,l=a.map(function(t){return t.related_contents=c.filter(function(e){return e.transcript_id===t.transcript_id}),t}),l=l.filter(function(t){return t.related_contents&&t.related_contents.length>0}),this.layers=l.slice(0,10);case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),onClickImage:function(t){var e=t.floorId,n=t.contentId;this.openContentDetailModal({floorId:e,contentId:n})},openContentDetailModal:function(t){var e=t.floorId,n=t.contentId;if(!this.isShowContentDetailModal){var o=this.layers.find(function(t){return t.related_contents.find(function(t){return t.id===n})});if(!o)return!1;var r=o.related_contents.find(function(t){return t.id===n});this.currentDetailModalStyle=this.getModalStyleByFloorId(e),this.currentDetailModalContent=r,this.isShowContentDetailModal=!0,this.contentDetailOpenTime=(new Date).getTime()}},closeContentDetailModal:function(){var t=1e3,e=(new Date).getTime()-this.contentDetailOpenTime;if(e<=t)return!1;this.isShowContentDetailModal=!1},onClickTable:function(t){var e=this,n=t.detail[0],o=!1,r=[];if(this.$refs.images.forEach(function(t){var a=t.getBoundingClientRect();if(e.isTouchObjectByRect(n,a))return o=!0,r.push(t),!1}),o){r.sort(function(t,e){var n=Number(t.getAttribute("data-content-id")),o=Number(e.getAttribute("data-content-id"));return n<o?-1:1});var a=r[0],i=n.floorId,c=Number(a.getAttribute("data-content-id"));return this.onClickImage({floorId:i,contentId:c}),!1}var l=this.$refs["context-menu-".concat(n.floorId)];l&&l.length>0&&!this.isTouchObjectByRect(n,l[0].getBoundingClientRect())?this.closeContextMenu(n):0===this.contextMenuStatuses.filter(function(t){return t.floorId===n.floorId}).length&&this.openContextMenu(n)},openContextMenu:function(t){var e=this.getTransformDegByFloorId(t.floorId),n={left:"".concat(t.x,"px"),top:"".concat(t.y,"px"),transform:"rotate(".concat(e,"deg)")},o="context-menu-".concat(t.floorId),r={floorId:t.floorId,style:n,refName:o};this.contextMenuStatuses.push(r)},closeContextMenu:function(t){var e=t.floorId;this.contextMenuStatuses=this.contextMenuStatuses.filter(function(t){return t.floorId!==e})},getStyleByContextMenuPosition:function(){},openPinList:function(){},createPin:function(){},removePin:function(){},offRecord:function(){},leave:function(){},exitWall:function(){},removeContent:function(){},removeWord:function(){},getRandomStyleForImage:function(){var t=l.a.random(window.innerWidth),e=l.a.random(window.innerHeight),n={left:"".concat(t,"px"),top:"".concat(e,"px")};return n},getRandomStyleForKeyWord:function(){var t=800,e=600,n=l.a.random(t,window.innerWidth-t),o=l.a.random(e,window.innerHeight-e),r={left:"".concat(n,"px"),top:"".concat(o,"px")};return r},getComputedStyleForLayer:function(t){var e=g-t*m,n=1-.08*t,o=v-t,r={transform:"translate3D(0px, 0px, ".concat(e,"px)"),opacity:n,zIndex:o};return r},getModalStyleByFloorId:function(t){var e=this.getTransformDegByFloorId(t);return{transform:"rotate(".concat(e,"deg)")}},getTransformDegByFloorId:function(t){var e={1:0,2:90,3:180,4:270};return e[t]},initializePinchEvent:function(){var t=this,e=document.querySelector("#app"),n=new d.a(e);n.get("pinch").set({enable:!0}),n.on("pinchout",function(e){t.logType("pinchout"),t.logEvent(e)}),n.on("pinchin",function(e){t.logType("pinchin"),t.logEvent(e)}),n.on("pinchmove",function(e){t.logType("pinchmove"),t.logEvent(e)})},logType:function(t){console.log(t)},logEvent:function(t){this.pinchScale=t.scale,console.log(t.scale)},randNum:function(t,e){return Math.floor(Math.random()*(t-e+1)+e)},arreyShuffle:function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),o=t[e];t[e]=t[n],t[n]=o}},calcSendPosition:function(){var t=[];h()("#media-send-leyer .send-area").each(function(e){var n=parseInt(h()(this).offset().left),o=parseInt(h()(this).offset().top),r=parseInt(n+h()(this).width()),a=parseInt(o+h()(this).height());console.log("x:"+n),console.log("y:"+o),console.log("x_max:"+r),console.log("y_max:"+a);var i={};i.x=n,i.y=o,i.x_max=r,i.y_max=a,t[e]=i}),this.arreyShuffle(t),this.positionMap=t},getLayerStyle:function(t){var e=["1deg","-0deg","-1deg","-2deg","-3deg","-4deg","-3deg","-2deg","-1deg","0deg"],n={transform:"translate3d(0,0,"+(500*t-4500)+"px) rotate("+e[t]+")",filter:"blur("+(90-10*t)+"px)",opacity:.1+.1*t};return n},getImageStyle:function(t){var e=this.positionMap,n=["0deg","90deg","180deg","270deg"],o=l.a.random(e[t].y_max,e[t].y),r=l.a.random(e[t].x_max,e[t].x),a=parseInt(window.innerWidth/4/2),i=parseInt(window.innerHeight/5/2);this.arreyShuffle(n);var c={top:o-i+"px",left:r-a+"px",transform:"rotate("+n[0]+")"};return c},getKeywordColor:function(t){var e=["red","blue","green","yellow","purple","vermilion","yellowgreen","orange","lightblue","gold","pink","bluegreen","white"];return e[t]},updateLayer:function(){i["a"].get("")},listenTranscriptsUpdate:function(){var t=this;setInterval(function(){t.fetchTranscripts()},1e3)}}},x=y,w=(n("7f1a"),n("2877")),_=Object(w["a"])(x,o,r,!1,null,null,null);_.options.__file="TestTranscripts.vue";e["default"]=_.exports},"7f1a":function(t,e,n){"use strict";var o=n("a1fb"),r=n.n(o);r.a},a1fb:function(t,e,n){}}]);
//# sourceMappingURL=chunk-3a28b6a8.ad23b5e5.js.map