(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/recharge/my"],{"0bd6":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},o=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return o})},"684d":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e("8be9"),o=0,u=!0,r=0,i={data:function(){return{pageLoad:!1,pageHide:!1,pageData:{}}},onLoad:function(a){t.setNavigationBarTitle({title:"充值记录"}),this.getPage()},onReachBottom:function(){this.getList()},onPullDownRefresh:function(){this.refresh()},methods:{getPage:function(){var a=this;t.request({url:n.apiHost+"?m=recharge&a=my&ajax=1",data:{authcode:n.getAuthCode()},success:function(t){u=!1,a.pageLoad=!0,a.pageData=t.data.data,o=t.data.data.per_page}})},getList:function(){var a=this;if(!u&&0==o)return!1;t.request({url:n.apiHost+"?m=recharge&a=my&ajax=1",data:{per_page:o,catid:r,authcode:n.getAuthCode()},success:function(t){t.data.error||(u?(a.pageData.list=t.data.data.list,u=!1):a.pageData.list=n.json_add(a.pageData.list,t.data.data.list),o=t.data.data.per_page)}})},refresh:function(){this.getPage(),setTimeout(function(){t.stopPullDownRefresh()},1e3)},loadMore:function(){this.getList()}}};a.default=i}).call(this,e("6e42")["default"])},"86fe":function(t,a,e){"use strict";e.r(a);var n=e("0bd6"),o=e("9bb7");for(var u in o)"default"!==u&&function(t){e.d(a,t,function(){return o[t]})}(u);var r=e("2877"),i=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a["default"]=i.exports},"9bb7":function(t,a,e){"use strict";e.r(a);var n=e("684d"),o=e.n(n);for(var u in n)"default"!==u&&function(t){e.d(a,t,function(){return n[t]})}(u);a["default"]=o.a}},[["1642","common/runtime","common/vendor"]]]);