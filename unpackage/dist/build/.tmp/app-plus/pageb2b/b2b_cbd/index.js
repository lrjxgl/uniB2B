(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pageb2b/b2b_cbd/index"],{"753c":function(t,n,a){"use strict";a.r(n);var e=a("c92c"),o=a.n(e);for(var u in e)"default"!==u&&function(t){a.d(n,t,function(){return e[t]})}(u);n["default"]=o.a},8249:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},o=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return o})},"8c1d":function(t,n,a){"use strict";a.r(n);var e=a("8249"),o=a("753c");for(var u in o)"default"!==u&&function(t){a.d(n,t,function(){return o[t]})}(u);var c=a("2877"),i=Object(c["a"])(o["default"],e["a"],e["b"],!1,null,null,null);n["default"]=i.exports},c92c:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{pageData:{},pageLoad:!1}},onReady:function(){},onLoad:function(){this.getPage()},methods:{goCbd:function(n){t.navigateTo({url:"../b2b_cbd/show?cbdid="+n})},getPage:function(){var n=this;this.app.get({url:this.app.apiHost+"/module.php?m=b2b_cbd",success:function(a){null!=a.data.seo&&t.setNavigationBarTitle({title:a.data.seo.title}),n.pageData=a.data,n.pageLoad=!0}})}}};n.default=a}).call(this,a("6e42")["default"])}},[["9f3f","common/runtime","common/vendor"]]]);