(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kefu/index"],{"64a3":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{pageLoad:!1,pageData:[],content:""}},created:function(){this.getPage()},methods:{getPage:function(){var a=this;a.app.get({url:a.app.apiHost+"/index.php?m=kefu&a=data&ajax=1",dataType:"json",success:function(e){a.pageLoad=!0,a.pageData=e.data,console.log(t(e.data," at pages\\kefu\\index.vue:66"))}})},submit:function(){var t=this;t.app.post({url:t.app.apiHost+"/index.php?m=kefu&a=save&ajax=1",data:{content:t.content},success:function(a){t.content="",t.getPage()}})}}};a.default=e}).call(this,e("0de9")["default"])},7011:function(t,a,e){"use strict";e.r(a);var n=e("9424"),u=e("a98a");for(var o in u)"default"!==o&&function(t){e.d(a,t,function(){return u[t]})}(o);var c=e("2877"),i=Object(c["a"])(u["default"],n["a"],n["b"],!1,null,null,null);a["default"]=i.exports},9424:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},u=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return u})},a98a:function(t,a,e){"use strict";e.r(a);var n=e("64a3"),u=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);a["default"]=u.a}},[["e081","common/runtime","common/vendor"]]]);