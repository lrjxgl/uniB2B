(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/list"],{"16a3":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e("8be9"),n=0,o=!0,r=0,s="tabs-border-active",u={data:function(){return{defaultActive:"tabs-border-active",pageLoad:!1,pageHide:!1,pageData:{}}},onLoad:function(a){r=a.catid,t.setNavigationBarTitle({title:"资讯"}),this.getPage()},onShow:function(){this.pageHide&&(this.pageHide=!1,this.getPage())},onHide:function(){this.pageHide=!0},onReachBottom:function(){this.getList()},onPullDownRefresh:function(){this.refresh()},methods:{getPage:function(){var a=this;t.request({url:i.apiHost+"?fromapp=wxapp&m=article&ajax=1",data:{catid:r,authcode:i.getAuthCode()},success:function(e){1e3==e.data.error?t.navigateTo({url:"/pages/login/index"}):(o=!1,a.pageLoad=!0,a.pageData=e.data.data,n=e.data.data.per_page)}})},setCat:function(t){r=t,o=!0,n=0,this.defaultActive=0==r?s:"";var a=this.pageData.catlist;for(var e in a)a[e].catid==r?a[e].isactive=1:a[e].isactive=0;this.pageData.catlist=a,this.getList()},getList:function(){var a=this;if(!o&&0==n)return!1;t.request({url:i.apiHost+"?fromapp=wxapp&m=article&ajax=1",data:{per_page:n,catid:r,authcode:i.getAuthCode()},success:function(t){t.data.error||(o?(a.pageData.list=t.data.data.list,o=!1):a.pageData.list=i.json_add(a.pageData.list,t.data.data.list),n=t.data.data.per_page)}})},goArticle:function(a){t.navigateTo({url:"/pages/article/show?id="+a})},refresh:function(){this.getPage(),setTimeout(function(){t.stopPullDownRefresh()},1e3)},loadMore:function(){this.getList()}}};a.default=u}).call(this,e("6e42")["default"])},e2e7:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},eaad:function(t,a,e){"use strict";e.r(a);var i=e("16a3"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);a["default"]=n.a},f50c:function(t,a,e){"use strict";e.r(a);var i=e("e2e7"),n=e("eaad");for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);var r=e("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);a["default"]=s.exports}},[["730d","common/runtime","common/vendor"]]]);