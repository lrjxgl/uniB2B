(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pageb2b/b2b_category/index"],{"2d31":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},o=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return o})},"4ff5":function(t,n,a){},"6f77":function(t,n,a){"use strict";a.r(n);var e=a("2d31"),o=a("d172");for(var i in o)"default"!==i&&function(t){a.d(n,t,function(){return o[t]})}(i);a("dee5");var u=a("2877"),c=Object(u["a"])(o["default"],e["a"],e["b"],!1,null,null,null);n["default"]=c.exports},"7faa":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=function(){return a.e("components/b2bfooter").then(a.bind(null,"0c52"))},o={components:{b2bFooter:e},data:function(){return{pageLoad:!1,pageData:{},catid:0,height:440,sideTop:44}},onLoad:function(n){var a=t.getSystemInfoSync();this.height=a.windowHeight-50,this.sideTop=0,this.getPage()},methods:{setCat:function(t){this.catid=t},goList:function(n){t.navigateTo({url:"../b2b_product/list?catid="+n})},getPage:function(){var t=this;t.app.get({url:t.app.apiHost+"/module.php?m=b2b_category&ajax=1",success:function(n){for(var a in t.pageData=n.data,n.data.catList){t.catid=n.data.catList[a].catid;break}t.pageLoad=!0}})}}};n.default=o}).call(this,a("6e42")["default"])},d172:function(t,n,a){"use strict";a.r(n);var e=a("7faa"),o=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,function(){return e[t]})}(i);n["default"]=o.a},dee5:function(t,n,a){"use strict";var e=a("4ff5"),o=a.n(e);o.a}},[["4255","common/runtime","common/vendor"]]]);