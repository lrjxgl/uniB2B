(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/show"],{"2c16":function(a,t,e){"use strict";var n=function(){var a=this,t=a.$createElement;a._self._c},o=[];e.d(t,"a",function(){return n}),e.d(t,"b",function(){return o})},5669:function(a,t,e){"use strict";e.r(t);var n=e("8379"),o=e.n(n);for(var i in n)"default"!==i&&function(a){e.d(t,a,function(){return n[a]})}(i);t["default"]=o.a},8379:function(a,t,e){"use strict";(function(a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(){return Promise.all([e.e("common/vendor"),e.e("components/cmform")]).then(e.bind(null,"adfc"))},i=function(){return Promise.all([e.e("common/vendor"),e.e("components/skyshare")]).then(e.bind(null,"d2ff"))},r={components:{skyShare:i,cmform:o},data:function(){return{pageLoad:!1,pageData:{},skyShareShow:0,shareLink:""}},onLoad:function(a){n=a.id,this.getPage()},onShareAppMessage:function(){},methods:{share:function(){var a=this;this.skyShareShow=0,setTimeout(function(){a.skyShareShow=1},30)},getPage:function(){var t=this;a.request({url:t.app.apiHost+"?m=article&ajax=1&a=show&id="+n,data:{authcode:t.app.getAuthCode()},success:function(a){t.pageLoad=!0,a.data.data.data.content=t.app.html(a.data.data.data.content),t.pageData=a.data.data,t.shareLink=t.app.apiHost+"/index.php?m=article&a=show&id="+a.data.data.data.id}})},favToggle:function(t){var e=this;a.request({url:e.app.apiHost+"?fromapp=wxapp&m=fav&a=toggle&ajax=1",data:{objectid:t,authcode:e.app.getAuthCode(),tablename:"article"},success:function(a){"delete"==a.data.data?e.pageData.isfav=!1:e.pageData.isfav=!0}})},loveToggle:function(t){var e=this;a.request({url:e.app.apiHost+"?m=love&a=toggle&ajax=1",data:{fromapp:e.app.fromapp(),objectid:t,authcode:e.app.getAuthCode(),tablename:"article"},success:function(a){"delete"==a.data.data?e.pageData.islove=!1:e.pageData.islove=!0}})}}};t.default=r}).call(this,e("6e42")["default"])},c4de:function(a,t,e){"use strict";e.r(t);var n=e("2c16"),o=e("5669");for(var i in o)"default"!==i&&function(a){e.d(t,a,function(){return o[a]})}(i);var r=e("2877"),u=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports}},[["b0b4","common/runtime","common/vendor"]]]);