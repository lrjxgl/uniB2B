(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fav/my"],{6998:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},o=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return o})},a5e6:function(t,a,e){"use strict";e.r(a);var n=e("6998"),o=e("d433");for(var i in o)"default"!==i&&function(t){e.d(a,t,function(){return o[t]})}(i);var u=e("2877"),r=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a["default"]=r.exports},bfcb:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=0,n=!0,o={data:function(){return{pageLoad:!1,pageData:{},tablename:"article"}},onLoad:function(a){t.setNavigationBarTitle({title:"我的收藏"}),this.getPage()},onReachBottom:function(){this.getList()},onPullDownRefresh:function(){this.refresh()},methods:{getPage:function(){var a=this;t.request({url:a.app.apiHost+"?m=fav&a=mylist&ajax=1",data:{authcode:a.app.getAuthCode(),fromapp:a.app.fromapp(),tablename:a.tablename},success:function(t){n=!1,a.pageData=t.data.data,a.pageLoad=!0,e=t.data.data.per_page}})},getList:function(){var a=this;if(!n&&0==e)return!1;t.request({url:a.app.apiHost+"?m=fav&a=mylist&ajax=1",data:{per_page:e,fromapp:a.app.fromapp(),authcode:a.app.getAuthCode(),tablename:a.tablename},success:function(t){t.data.error||(n?(a.pageData.list=t.data.data.list,n=!1):a.pageData.list=a.app.json_add(a.pageData.list,t.data.data.list),e=t.data.data.per_page)}})},goBook:function(a){t.navigateTo({url:"../mbook/show?bookid="+a})},goForum:function(a){t.navigateTo({url:"../forum/show?id="+a})},goArticle:function(a){t.navigateTo({url:"../article/show?id="+a})},refresh:function(){this.getPage(),setTimeout(function(){t.stopPullDownRefresh()},1e3)},loadMore:function(){this.getList()},setTable:function(t){this.tablename=t,n=!0,e=0,this.getList()}}};a.default=o}).call(this,e("6e42")["default"])},d433:function(t,a,e){"use strict";e.r(a);var n=e("bfcb"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);a["default"]=o.a}},[["7522","common/runtime","common/vendor"]]]);