(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["b2b-b2b_guest-user"],{"8ca7":function(t,a,i){"use strict";i.r(a);var e=i("f8e1"),s=i("f2e2");for(var n in s)"default"!==n&&function(t){i.d(a,t,(function(){return s[t]}))}(n);var u,c=i("f0c5"),o=Object(c["a"])(s["default"],e["b"],e["c"],!1,null,"678b7b0b",null,!1,e["a"],u);a["default"]=o.exports},a4c0:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e,s=0,n={data:function(){return{pageLoad:!1,pageData:[],content:""}},onLoad:function(t){this.shopid=t.shopid,this.id=t.id,this.getPage()},methods:{getPage:function(){var t=this;t.app.get({url:t.app.apiHost+"/module.php?m=b2b_guest&a=b2b&ajax=1",data:{shopid:e,id:s},dataType:"json",success:function(a){t.pageLoad=!0,t.pageData=a.data,console.log(a.data)}})},submit:function(){var t=this;this.app.post({url:this.app.apiHost+"/module.php?m=b2b_guest&a=save&ajax=1",data:{content:t.content,shopid:e,id:s},success:function(a){t.getPage()}})}}};a.default=n},f2e2:function(t,a,i){"use strict";i.r(a);var e=i("a4c0"),s=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(a,t,(function(){return e[t]}))}(n);a["default"]=s.a},f8e1:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return s})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){return e}));var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[t.pageLoad?i("v-uni-view",{staticClass:"list",attrs:{id:"app"}},t._l(t.pageData.list,(function(a,e){return i("v-uni-view",{key:e,staticClass:"bg-white pd-10"},["user"==a.author?i("v-uni-view",{staticClass:"flex"},[i("img",{staticClass:"wh-40 mgr-10",attrs:{src:a.user_head+".100x100.jpg"}}),i("v-uni-view",{staticClass:"flex-1"},[i("v-uni-view",{staticClass:"flex mgb-5"},[i("v-uni-view",{staticClass:"cl2 flex-1"},[t._v(t._s(a.nickname))]),i("v-uni-view",{staticClass:"cl3 f12"},[t._v(t._s(a.timeago))])],1),i("v-uni-view",{staticClass:"cl3"},[t._v(t._s(a.content))])],1)],1):i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",{staticClass:"flex-1"}),i("v-uni-view",{staticClass:"w200"},[i("v-uni-view",{staticClass:"cl2 mgb-5 flex"},[i("v-uni-view",{staticClass:"flex-1"}),t._v(t._s(t.pageData.shop.shopname))],1),i("v-uni-view",{staticClass:"cl3"},[t._v(t._s(a.content))])],1),i("img",{staticClass:"wh-40 mgl-10",attrs:{src:t.pageData.shop.imgurl+".100x100.jpg"}})],1)],1)})),1):t._e(),i("v-uni-view",{staticClass:"footer-row"}),i("v-uni-view",{staticStyle:{position:"fixed",bottom:"0",left:"0",right:"0"}},[i("v-uni-view",{staticClass:"input-flex"},[i("v-uni-input",{staticClass:"input-flex-text",attrs:{type:"text",id:"content"},model:{value:t.content,callback:function(a){t.content=a},expression:"content"}}),i("v-uni-view",{staticClass:"input-flex-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}}},[t._v("发送")])],1)],1)],1)},n=[]}}]);