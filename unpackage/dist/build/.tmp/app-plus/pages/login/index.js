(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/index"],{4930:function(a,e,t){"use strict";var n=function(){var a=this,e=a.$createElement;a._self._c},o=[];t.d(e,"a",function(){return n}),t.d(e,"b",function(){return o})},5718:function(a,e,t){"use strict";t.r(e);var n=t("4930"),o=t("7626");for(var i in o)"default"!==i&&function(a){t.d(e,a,function(){return o[a]})}(i);t("9b16");var d=t("2877"),u=Object(d["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},7626:function(a,e,t){"use strict";t.r(e);var n=t("d9d0"),o=t.n(n);for(var i in n)"default"!==i&&function(a){t.d(e,a,function(){return n[a]})}(i);e["default"]=o.a},"8a68":function(a,e,t){},"9b16":function(a,e,t){"use strict";var n=t("8a68"),o=t.n(n);o.a},d9d0:function(a,e,t){"use strict";(function(a,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{pageLoad:!1,pageData:{},notephone:"请输入手机号码",notepwd:"请输入密码",isWeixin:!1,telephone:"",password:""}},onLoad:function(){this.isWeixin=this.app.isWeixin()},methods:{goWeixin:function(){var a="/pages/fenlei/index";this.app.goH5WeiXin(a)},goHome:function(){var a=this;a.app.goHome()},wxLogin:function(e){var n=this,o=e.detail.userInfo;a.login({provider:"weixin",success:function(e){var i=e.code;console.log(t(i," at pages\\login\\index.vue:85")),a.request({url:n.app.apiHost+"/?m=open_wxapp&a=Login&ajax=1",data:{code:i,nickname:o.nickName,user_head:o.avatarUrl,gender:o.gender},success:function(e){"login"==e.data.data.action?(a.showToast({title:"登录成功"}),n.app.setAuthCode(e.data.data.authcode),n.app.setAuthCodeLong(e.data.data.authcodeLong),n.app.setOpenid(e.data.data.openid),setTimeout(function(){a.navigateBack()},300)):"openlogin"==e.data.data.action&&a.navigateTo({url:"../openlogin/index?openToken="+e.data.data.openToken})},fail:function(a){console.log(t(a," at pages\\login\\index.vue:114"))}})}})},formSubmit:function(e){var t=this;a.request({url:t.app.apiHost+"?m=login&a=loginsave&ajax=1",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{telephone:t.telephone,password:t.password},success:function(e){var n=e.data;e.data.error?a.showToast({title:e.data.message}):(t.app.setAuthCode(n.data.authcode),t.app.setAuthCodeLong(n.data.authcodeLong),a.showToast({title:e.data.message}),setTimeout(function(){a.navigateBack({delta:1})},300))}})}}};e.default=n}).call(this,t("6e42")["default"],t("0de9")["default"])}},[["5792","common/runtime","common/vendor"]]]);