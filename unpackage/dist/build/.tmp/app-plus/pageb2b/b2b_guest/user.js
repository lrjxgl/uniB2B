(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pageb2b/b2b_guest/user"],{"41f1":function(t,a,e){"use strict";e.r(a);var n=e("9087"),u=e("fca5");for(var o in u)"default"!==o&&function(t){e.d(a,t,function(){return u[t]})}(o);var i=e("2877"),s=Object(i["a"])(u["default"],n["a"],n["b"],!1,null,null,null);a["default"]=s.exports},"619c":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e,n=0,u={data:function(){return{pageLoad:!1,pageData:[],content:""}},onLoad:function(t){this.shopid=t.shopid,this.id=t.id,this.getPage()},methods:{getPage:function(){var a=this;a.app.get({url:a.app.apiHost+"/module.php?m=b2b_guest&a=b2b&ajax=1",data:{shopid:e,id:n},dataType:"json",success:function(e){a.pageLoad=!0,a.pageData=e.data,console.log(t(e.data," at pageb2b\\b2b_guest\\user.vue:74"))}})},submit:function(){var t=this;this.app.post({url:this.app.apiHost+"/module.php?m=b2b_guest&a=save&ajax=1",data:{content:t.content,shopid:e,id:n},success:function(a){t.getPage()}})}}};a.default=u}).call(this,e("0de9")["default"])},9087:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},u=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return u})},fca5:function(t,a,e){"use strict";e.r(a);var n=e("619c"),u=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);a["default"]=u.a}},[["4337","common/runtime","common/vendor"]]]);