(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["b2b-b2b_product-list"],{6818:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{catid:0,pageLoad:!1,pageData:{},pageCatid:0}},onLoad:function(t){this.catid=t.catid,this.getPage()},methods:{setCat:function(t){this.catid=t,this.getList()},goProduct:function(t,i){uni.navigateTo({url:"../b2b_product/show?id="+t+"&shopid="+i})},getPage:function(){var t=this;t.app.get({url:t.app.apiHost+"/module.php?m=b2b_product&a=list&ajax=1&catid="+t.catid,success:function(i){t.pageData=i.data,t.pageLoad=!0,0==t.pageCatid&&(t.pageCatid=i.data.cat.catid),uni.setNavigationBarTitle({title:i.data.cat.title})}})},getList:function(){var t=this;t.app.get({url:t.app.apiHost+"/module.php?m=b2b_product&a=list&ajax=1&catid="+t.catid,success:function(i){t.pageData.list=i.data.list,t.pageLoad=!0,uni.setNavigationBarTitle({title:i.data.cat.title})}})}}};i.default=e},8122:function(t,i,a){"use strict";a.r(i);var e=a("6818"),s=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,(function(){return e[t]}))}(n);i["default"]=s.a},"88f6":function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return s})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return e}));var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[t.pageData.catList?a("v-uni-view",{staticClass:"tabs-border"},t._l(t.pageData.catList,(function(i,e){return a("v-uni-view",{key:e,staticClass:"tabs-border-item",class:{"tabs-border-active":t.catid==i.catid},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.setCat(i.catid)}}},[t._v(t._s(i.title))])})),1):t._e(),a("v-uni-view",{staticClass:"mtlist mgt-5"},t._l(t.pageData.list,(function(i,e){return a("v-uni-view",{key:e,staticClass:"mtlist-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goProduct(i.id,i.shopid)}}},[a("v-uni-view",{staticClass:"mtlist-item-bd"},[a("a",{staticClass:"mtlist-imgbox"},[a("v-uni-image",{staticClass:"mtlist-img",attrs:{mode:"widthFix",src:i.imgurl+".small.jpg"}})],1),a("v-uni-view",{staticClass:"mtlist-item-pd"},[a("v-uni-view",{staticClass:"mtlist-item-money"},[a("v-uni-view",{staticClass:"mtlist-item-money-flex"},[t._v("￥"),a("v-uni-text",{staticClass:"mtlist-item-money_money"},[t._v(t._s(i.price))])],1),a("v-uni-view",{staticClass:"mtlist-item-money_num"},[t._v("月销"+t._s(i.buy_num)+"件")])],1),a("v-uni-view",{staticClass:"mtlist-title"},[t._v(t._s(i.title))]),a("v-uni-view",{staticClass:"mtlist-desc"},[t._v(t._s(i.description))])],1)],1)],1)})),1)],1)},n=[]},b12a:function(t,i,a){"use strict";a.r(i);var e=a("88f6"),s=a("8122");for(var n in s)"default"!==n&&function(t){a.d(i,t,(function(){return s[t]}))}(n);var c,u=a("f0c5"),l=Object(u["a"])(s["default"],e["b"],e["c"],!1,null,"6c325159",null,!1,e["a"],c);i["default"]=l.exports}}]);