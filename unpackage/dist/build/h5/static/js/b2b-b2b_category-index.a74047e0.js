(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["b2b-b2b_category-index"],{"57a1":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"main-body bg-white mh100"},[e("v-uni-view",{staticClass:"list-side",style:{top:t.sideTop+"px"}},t._l(t.pageData.catList,(function(i,a){return e("v-uni-view",{key:a,staticClass:"list-side-item",class:{"list-side-item-active":t.catid==i.catid},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setCat(i.catid)}}},[t._v(t._s(i.title))])})),1),e("v-uni-view",{staticClass:"list-main",style:{"min-height":t.height+"upx"}},t._l(t.pageData.catList,(function(i,a){return e("v-uni-view",{key:a,staticClass:"list-cat-item"},[i.catid==t.catid?e("v-uni-view",[e("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goList(i.catid)}}},[e("v-uni-image",{staticClass:"list-cat-img",attrs:{mode:"widthFix",src:i.imgurl+".middle.jpg"}})],1),e("v-uni-view",{staticClass:"list-cat-hd"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"list-child"},t._l(i.child,(function(i,a){return e("v-uni-view",{key:a,staticClass:"list-child-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goList(i.catid)}}},[e("v-uni-image",{staticClass:"list-child-img",attrs:{mode:"widthFix",src:i.imgurl+".middle.jpg"}}),e("v-uni-view",{staticClass:"list-child-title"},[t._v(t._s(i.title))])],1)})),1)],1):t._e()],1)})),1)],1),e("b2b-footer",{attrs:{tab:"category"}})],1)},o=[]},"5c5d":function(t,i,e){"use strict";e.r(i);var a=e("fcc7"),n=e("bfbf");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);var c,s=e("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"bb29ce6c",null,!1,a["a"],c);i["default"]=r.exports},"5e83":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.list-side[data-v-48f5e2a8]{position:fixed;left:%?0?%;top:%?110?%;bottom:%?130?%;width:%?170?%;border-right:%?2?% solid #eee;text-align:center;background-color:#fff}.list-side-item[data-v-48f5e2a8]{color:#707070;padding:%?22?% %?11?%;font-size:14px;display:block;cursor:pointer}.list-side-item-active[data-v-48f5e2a8]{color:#ff842b;border-left:%?7?% solid #ff842b}.list-main[data-v-48f5e2a8]{margin-left:%?180?%;padding-top:%?11?%}.list-cat-img[data-v-48f5e2a8]{max-width:100%;padding-right:%?11?%}.list-cat-hd[data-v-48f5e2a8]{text-align:center;padding:%?22?% 0;color:#666;font-size:14px;position:relative}.list-cat-hd[data-v-48f5e2a8]:before{display:block;width:%?44?%;height:%?2?%;background-color:#e0e0e0;position:absolute;right:60%;top:50%;content:"-";overflow:hidden;color:#666}.list-cat-hd[data-v-48f5e2a8]:after{display:block;width:%?44?%;height:%?2?%;background-color:#e0e0e0;position:absolute;left:60%;top:50%;content:"-";overflow:hidden;color:#666}.list-child[data-v-48f5e2a8]{margin-bottom:%?22?%;flex-direction:row;flex-wrap:wrap}.list-child-item[data-v-48f5e2a8]{float:left;display:block;width:33.333%;margin-bottom:%?22?%;padding:0 %?22?%;box-sizing:border-box;font-size:14px;color:#666;text-align:center}.list-child-img[data-v-48f5e2a8]{width:100%;height:%?60?%;display:block;margin-bottom:%?11?%}.list-child-title[data-v-48f5e2a8]{height:%?66?%;line-height:%?66?%;overflow:hidden}',""]),t.exports=i},"66ae":function(t,i,e){"use strict";e.r(i);var a=e("8f30"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"68b5":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={props:{tab:""},data:function(){return{list:""}},methods:{goCategory:function(){uni.reLaunch({url:"../../b2b/b2b_category/index"})},goHome:function(){uni.reLaunch({url:"../../pages/index/index"})},goCart:function(){uni.reLaunch({url:"../../b2b/b2b_cart/index"})},goOrder:function(){uni.reLaunch({url:"../../b2b/b2b_order/my"})},goUser:function(){uni.reLaunch({url:"../../b2b/b2b_user/index"})}}};i.default=a},"8c37":function(t,i,e){"use strict";var a=e("a78e"),n=e.n(a);n.a},"8ed2":function(t,i,e){"use strict";e.r(i);var a=e("57a1"),n=e("66ae");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("8c37");var c,s=e("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"48f5e2a8",null,!1,a["a"],c);i["default"]=r.exports},"8f30":function(t,i,e){"use strict";var a=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("5c5d")),o={components:{b2bFooter:n.default},data:function(){return{pageLoad:!1,pageData:{},catid:0,height:440,sideTop:44}},onLoad:function(t){var i=uni.getSystemInfoSync();this.height=i.windowHeight-50,this.getPage()},methods:{setCat:function(t){this.catid=t},goList:function(t){uni.navigateTo({url:"../b2b_product/list?catid="+t})},getPage:function(){var t=this;t.app.get({url:t.app.apiHost+"/module.php?m=b2b_category&ajax=1",success:function(i){for(var e in t.pageData=i.data,i.data.catList){t.catid=i.data.catList[e].catid;break}t.pageLoad=!0}})}}};i.default=o},a78e:function(t,i,e){var a=e("5e83");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("4d5ce81c",a,!0,{sourceMap:!1,shadowMode:!1})},bfbf:function(t,i,e){"use strict";e.r(i);var a=e("68b5"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},fcc7:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"footer-row"}),e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-item icon-home",class:{"footer-active":"index"==t.tab},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goHome()}}},[t._v("首页")]),e("div",{staticClass:"footer-item icon-cascades",class:{"footer-active":"category"==t.tab},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goCategory()}}},[t._v("分类")]),e("div",{staticClass:"footer-item icon-cart",class:{"footer-active":"cart"==t.tab},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goCart()}}},[t._v("购物车")]),e("div",{staticClass:"footer-item icon-my_light ",class:{"footer-active":"user"==t.tab},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUser()}}},[t._v("我的")])])],1)},o=[]}}]);