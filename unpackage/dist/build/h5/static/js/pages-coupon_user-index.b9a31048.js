(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coupon_user-index"],{"2b23":function(t,a,s){"use strict";var e;s.d(a,"b",(function(){return i})),s.d(a,"c",(function(){return n})),s.d(a,"a",(function(){return e}));var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-uni-view",[s("div",{staticClass:"list"},[0==t.listNum?s("div",{staticClass:"emptyData"},[t._v("暂无优惠券")]):t._e(),t._l(t.pageData.list,(function(a,e){return s("div",{key:e,staticClass:"row-box mgb-5"},[s("div",{staticClass:"flex mgb-5"},[s("div",{staticClass:" mgb-5"},[t._v(t._s(a.title))]),s("div",{staticClass:"flex-1"}),1==a.status?s("div",{staticClass:"cl-primary"},[t._v("已使用")]):s("div",{staticClass:"cl-primary"},[t._v("未使用")])]),s("div",{staticClass:"flex"},[s("div",{staticClass:"cl2 f12"},[t._v("截止时间："+t._s(a.end_time))]),s("div",{staticClass:"flex-1"}),s("div",{staticClass:"cl2 f12 mgb-5"},[t._v("金额 "+t._s(a.money)+"元")])])])}))],2)])},n=[]},"74c8":function(t,a,s){"use strict";s.r(a);var e=s("2b23"),i=s("913a");for(var n in i)"default"!==n&&function(t){s.d(a,t,(function(){return i[t]}))}(n);var c,u=s("f0c5"),r=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,"5ce01035",null,!1,e["a"],c);a["default"]=r.exports},"8db6":function(t,a,s){"use strict";s("b64b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{pageData:{},pageLoad:!1,listNum:0}},created:function(){this.getPage()},methods:{getPage:function(){var t=this;t.app.get({url:t.app.apiHost+"/index.php?m=coupon_user&ajax=1",dataType:"json",success:function(a){t.pageData=a.data,t.pageLoad=!0,t.listNum=Object.keys(t.pageData.list).length}})}}};a.default=e},"913a":function(t,a,s){"use strict";s.r(a);var e=s("8db6"),i=s.n(e);for(var n in e)"default"!==n&&function(t){s.d(a,t,(function(){return e[t]}))}(n);a["default"]=i.a}}]);