(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-index"],{4292:function(e,t,n){var i=n("ec77");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("66206666",i,!0,{sourceMap:!1,shadowMode:!1})},"4fc7":function(e,t,n){"use strict";n.r(t);var i=n("5c7a"),o=n("f723");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("80e0");var s,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"1187d7ed",null,!1,i["a"],s);t["default"]=c.exports},"5c7a":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"loginBg"},[n("v-uni-view",{staticClass:"h30"}),n("v-uni-view",{staticClass:"flex-center "},[n("v-uni-view",{staticClass:"flex-center",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goHome()}}},[n("v-uni-image",{staticClass:"wh-60",attrs:{src:e.host+"/static/images/logo.png"}})],1)],1),n("v-uni-form",{staticClass:"loginBox",attrs:{autocomplete:"off",id:"login-form"},on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.formSubmit.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"flexIcon"},[n("v-uni-view",{staticClass:"flexIcon-icon iconfont icon-phone_light"}),n("v-uni-input",{staticClass:"flexIcon-text",attrs:{type:"text","placeholder-class":"cl-white",name:"a",autocomplete:"off",placeholder:"请输入手机号码"},model:{value:e.telephone,callback:function(t){e.telephone=t},expression:"telephone"}})],1),n("v-uni-view",{staticClass:"flexIcon"},[n("v-uni-view",{staticClass:"flexIcon-icon iconfont icon-password"}),n("v-uni-input",{staticClass:"flexIcon-text",attrs:{type:"password","placeholder-class":"cl-white",name:"b",autocomplete:"off",placeholder:"请输入登录密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("v-uni-view"),n("v-uni-button",{staticClass:"btn-row-submit",attrs:{type:"primary",formType:"submit"}},[e._v("登陆")]),n("v-uni-view",{staticClass:"flex mgb-20"},[n("v-uni-navigator",{staticClass:"cl-white pointer flex-1",attrs:{url:"../register/index"}},[e._v("注册")]),n("v-uni-navigator",{staticClass:"cl-white pointer",attrs:{url:"../login/findpwd"}},[e._v("忘记密码")])],1),e.isWeixin?n("v-uni-view",{staticClass:"otherBox mgb-20"},[n("v-uni-view",{staticClass:"otherBox-line"}),n("v-uni-view",{staticClass:"otherBox-text"},[e._v("其它方式登录")])],1):e._e(),e.isWeixin?n("v-uni-view",{staticClass:"flex flex-center"},[n("v-uni-view",{staticClass:"btn-round bg-success icon-weixin",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goWeixin()}}})],1):e._e()],1)],1)},a=[]},6411:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{pageLoad:!1,pageData:{},notephone:"请输入手机号码",notepwd:"请输入密码",isWeixin:!1,telephone:"",password:"",host:""}},onLoad:function(){this.host=this.app.apiHost,this.isWeixin=this.app.isWeixin()},methods:{goWeixin:function(){var e="/pages/index/index";this.app.goH5WeiXin(e)},goHome:function(){var e=this;e.app.goHome()},wxLogin:function(e){var t=this,n="";wx.getUserProfile({lang:"zh_CN",desc:"用户登录",fail:function(e){console.log(e)},success:function(e){var i=e.userInfo;console.log(i),wx.login({success:function(e){n=e.code,t.app.get({url:t.app.apiHost+"/index.php?m=open_wxapp&a=Login&ajax=1",data:{code:n,nickname:i.nickName,user_head:i.avatarUrl,gender:i.gender},success:function(e){"login"==e.data.action?(uni.showToast({title:"登录成功"}),uni.setStorageSync("token",e.data.token),uni.setStorageSync("refresh_token",e.data.refresh_token),t.app.setOpenid(e.data.openid),uni.reLaunch({url:"../index/index"})):"openlogin"==e.data.action&&uni.navigateTo({url:"../openlogin/index?openToken="+e.data.openToken})},fail:function(e){console.log(e)}})}})}})},formSubmit:function(e){var t=this;t.app.post({url:t.app.apiHost+"?m=login&a=loginsave&ajax=1",data:{telephone:t.telephone,password:t.password},success:function(e){e.data;e.error?uni.showToast({title:e.message}):(uni.setStorageSync("token",e.data.token),uni.setStorageSync("refresh_token",e.data.refresh_token),uni.showToast({title:e.data.message}),uni.reLaunch({url:"../index/index"}))}})}}};t.default=i},"80e0":function(e,t,n){"use strict";var i=n("4292"),o=n.n(i);o.a},ec77:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".otherBox[data-v-1187d7ed]{position:relative;height:%?79.2?%}.otherBox-line[data-v-1187d7ed]{width:100%;height:%?2.2?%;background-color:#d0d0d0;top:%?39.6?%;position:absolute}.otherBox-text[data-v-1187d7ed]{background-color:#50a8db;text-align:center;padding:%?0?% %?22?%;line-height:%?79.2?%;position:absolute;width:%?264?%;left:50%;margin-left:%?-132?%;color:#fff}.flexIcon[data-v-1187d7ed]{flex-direction:row;background-color:#2e85d8;margin-bottom:%?44?%;border-radius:%?44?%;padding:%?22?% %?22?%;align-items:center}.flexIcon-icon[data-v-1187d7ed]{margin-right:%?13.2?%;font-size:%?39.6?%;color:#fff}.flexIcon-text[data-v-1187d7ed]{color:#fff;border:0;flex:1;background:inherit;outline:0;font-size:%?35.2?%}.loginBox[data-v-1187d7ed]{position:absolute;top:50%;left:%?22?%;right:%?22?%;margin-top:%?-330?%;padding:%?33?% %?22?%;border-radius:%?44?%}.loginBg[data-v-1187d7ed]{background:linear-gradient(#29cee8,#619ad6);position:absolute;top:%?0?%;bottom:%?0?%;left:%?0?%;right:%?0?%}",""]),e.exports=t},f723:function(e,t,n){"use strict";n.r(t);var i=n("6411"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a}}]);