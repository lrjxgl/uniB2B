(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-paypwd"],{"657f":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{pageLoad:!1,pageData:{}}},onLoad:function(t){uni.setNavigationBarTitle({title:"支付密码"}),this.getPage()},methods:{getPage:function(){var t=this;t.app.get({url:this.app.apiHost+"/index.php?m=user&a=paypwd",success:function(a){t.pageLoad=!0,t.pageData=a.data}})},submit:function(t){var a=this;a.app.post({url:this.app.apiHost+"?m=user&a=paypwdsave",data:t.detail.value,success:function(t){uni.showToast({title:t.message}),t.error||setTimeout((function(){uni.navigateBack()}),600)}})}}};a.default=n},"65e6":function(t,a,e){"use strict";e.r(a);var n=e("657f"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a["default"]=i.a},d3e3:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-form",{on:{submit:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"input-flex"},[e("v-uni-view",{staticClass:"input-flex-label"},[t._v("支付密码")]),e("v-uni-input",{staticClass:"input-flex-text",attrs:{password:"password",name:"paypwd"}})],1),e("v-uni-view",{staticClass:"input-flex"},[e("v-uni-view",{staticClass:"input-flex-label"},[t._v("登录密码")]),e("v-uni-input",{staticClass:"input-flex-text",attrs:{password:"password",name:"password"}})],1),e("v-uni-button",{staticClass:"btn-row-submit",attrs:{"form-type":"submit"}},[t._v("保存")])],1)],1)},s=[]},e39c:function(t,a,e){"use strict";e.r(a);var n=e("d3e3"),i=e("65e6");for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);var u,r=e("f0c5"),o=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"7a552923",null,!1,n["a"],u);a["default"]=o.exports}}]);