(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/index"],{6356:function(t,a,e){"use strict";e.r(a);var n=e("85fd"),i=e("e964");for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);var r=e("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);a["default"]=s.exports},"85fd":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},i=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})},cdc2:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(){return e.e("components/footer").then(e.bind(null,"1e2e"))},i=0,o=!0,r=0,s="tabs-border-active",c={components:{mtFooter:n},data:function(){return{pageLoad:!1,pageData:{},winHeight:600,defaultActive:"tabs-border-active"}},onLoad:function(a){var e=t.getSystemInfoSync();this.winHeight=e.windowHeight-50,t.setNavigationBarTitle({title:"福鼎头条新闻"}),this.getPage()},onReachBottom:function(){this.getList()},onPullDownRefresh:function(){this.refresh()},methods:{getPage:function(){var a=this;t.request({url:a.app.apiHost+"?m=article&ajax=1",success:function(t){o=!1,a.pageLoad=!0,a.pageData=t.data.data,i=t.data.data.per_page}})},setCat:function(t){r=t,o=!0,i=0,this.defaultActive=0==r?s:"";var a=this.pageData.catlist;for(var e in a)a[e].catid==r?a[e].isactive=1:a[e].isactive=0;this.pageData.catlist=a,this.getList()},getList:function(){var a=this;if(!o&&0==i)return!1;t.request({url:a.app.apiHost+"?m=article&ajax=1",data:{per_page:i,catid:r},success:function(t){t.data.error||(o?(a.pageData.list=t.data.data.list,o=!1):a.pageData.list=a.app.json_add(a.pageData.list,t.data.data.list),i=t.data.data.per_page)}})},goArticle:function(a){t.navigateTo({url:"../article/show?id="+a})},refresh:function(){this.getPage(),setTimeout(function(){t.stopPullDownRefresh()},1e3)},loadMore:function(){this.getList()}}};a.default=c}).call(this,e("6e42")["default"])},e964:function(t,a,e){"use strict";e.r(a);var n=e("cdc2"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);a["default"]=i.a}},[["2590","common/runtime","common/vendor"]]]);