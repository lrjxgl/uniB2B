(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user_head"],{"0372":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{pageLoad:!1,pageData:{},user_head:""}},onLoad:function(e){this.getPage()},methods:{getPage:function(){var e=this;e.app.get({url:e.app.apiHost+"/index.php?m=user&a=user_head&ajax=1",success:function(a){e.pageLoad=!0,e.pageData=a.data,e.user_head=a.data.data.user_head}})},upload:function(){var e=this;uni.chooseImage({success:function(a){var t=a.tempFilePaths;uni.uploadFile({url:e.app.apiHost+"/index.php?m=upload&a=img&ajax=1&loginToken="+e.app.getToken(),filePath:t[0],name:"upimg",success:function(a){var t=JSON.parse(a.data);e.app.post({url:e.app.apiHost+"?m=user&a=user_head_save",data:{user_head:t.data.imgurl},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){e.user_head=t.data.trueimgurl}})}})}})}}};a.default=n},7354:function(e,a,t){"use strict";t.r(a);var n=t("0372"),u=t.n(n);for(var i in n)"default"!==i&&function(e){t.d(a,e,(function(){return n[e]}))}(i);a["default"]=u.a},"9c6f":function(e,a,t){"use strict";var n;t.d(a,"b",(function(){return u})),t.d(a,"c",(function(){return i})),t.d(a,"a",(function(){return n}));var u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",[e.pageLoad?t("v-uni-view",[t("v-uni-view",{staticClass:"flex flex-center mgt-10 mgb-10"},[t("v-uni-image",{staticClass:"wh-200 pointer",attrs:{mode:"widthFix",src:e.user_head},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.upload()}}})],1)],1):e._e()],1)},i=[]},c6e6:function(e,a,t){"use strict";t.r(a);var n=t("9c6f"),u=t("7354");for(var i in u)"default"!==i&&function(e){t.d(a,e,(function(){return u[e]}))}(i);var r,s=t("f0c5"),o=Object(s["a"])(u["default"],n["b"],n["c"],!1,null,"bd09800a",null,!1,n["a"],r);a["default"]=o.exports}}]);