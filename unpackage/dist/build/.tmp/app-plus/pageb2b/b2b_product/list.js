(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pageb2b/b2b_product/list"],{"266b":function(t,a,i){"use strict";i.r(a);var e=i("a0fd"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,function(){return e[t]})}(o);a["default"]=n.a},"378b":function(t,a,i){"use strict";i.r(a);var e=i("43b5"),n=i("266b");for(var o in n)"default"!==o&&function(t){i.d(a,t,function(){return n[t]})}(o);var u=i("2877"),c=Object(u["a"])(n["default"],e["a"],e["b"],!1,null,null,null);a["default"]=c.exports},"43b5":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c},n=[];i.d(a,"a",function(){return e}),i.d(a,"b",function(){return n})},a0fd:function(t,a,i){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{catid:0,pageLoad:!1,pageData:{},pageCatid:0}},onLoad:function(t){this.catid=t.catid,this.getPage()},methods:{setCat:function(t){this.catid=t,this.getList()},goProduct:function(a,i){t.navigateTo({url:"../b2b_product/show?id="+a+"&shopid="+i})},getPage:function(){var a=this;a.app.get({url:a.app.apiHost+"/module.php?m=b2b_product&a=list&ajax=1&catid="+a.catid,success:function(i){a.pageData=i.data,a.pageLoad=!0,0==a.pageCatid&&(a.pageCatid=i.data.cat.catid),t.setNavigationBarTitle({title:i.data.cat.title})}})},getList:function(){var a=this;a.app.get({url:a.app.apiHost+"/module.php?m=b2b_product&a=list&ajax=1&catid="+a.catid,success:function(i){a.pageData.list=i.data.list,a.pageLoad=!0,t.setNavigationBarTitle({title:i.data.cat.title})}})}}};a.default=i}).call(this,i("6e42")["default"])}},[["ada4","common/runtime","common/vendor"]]]);