(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["b2b-b2b_product-show"],{"1f05":function(t,a,i){"use strict";i.r(a);var s=i("db16"),e=i("cd6d");for(var n in e)"default"!==n&&function(t){i.d(a,t,(function(){return e[t]}))}(n);i("25c6");var o,c=i("f0c5"),r=Object(c["a"])(e["default"],s["b"],s["c"],!1,null,"0169959e",null,!1,s["a"],o);a["default"]=r.exports},"25c6":function(t,a,i){"use strict";var s=i("dd96"),e=i.n(s);e.a},"282c":function(t,a,i){"use strict";i.r(a);var s=i("f9b3"),e=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(a,t,(function(){return s[t]}))}(n);a["default"]=e.a},"291c":function(t,a,i){var s=i("3e1d");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var e=i("4f06").default;e("73d2ba06",s,!0,{sourceMap:!1,shadowMode:!1})},"3e1d":function(t,a,i){var s=i("24fb");a=s(!1),a.push([t.i,".flcart[data-v-90c546be]{display:flex;flex-direction:row;position:fixed;left:0;right:0;bottom:0;font-size:12px;line-height:1.2;border-top:1px solid #eee;background-color:#fff;text-align:center}.flcart-icon[data-v-90c546be]:before{padding-top:5px;clear:both;display:block;font-size:14px;line-height:1.2}.flcart-f1[data-v-90c546be]{width:50px;display:inline-block;height:45px;line-height:22px;font-size:14px;color:#646464}.flcart-f2[data-v-90c546be]{margin-top:8px;flex:1;height:30px;line-height:30px;border-radius:20px;background-color:#f90;color:#fff;font-size:12px;margin-right:5px}.kslist[data-v-90c546be]{display:flex;flex-direction:row;align-items:center;padding-left:10px}.kslist-label[data-v-90c546be]{margin-right:6px;color:#646464}.kslist-item[data-v-90c546be]{border:1px solid #eee;padding:4px 8px;margin-right:10px}.kslist-active[data-v-90c546be]{color:#007aff}",""]),t.exports=a},"466e":function(t,a,i){var s=i("24fb");a=s(!1),a.push([t.i,".raty-num[data-v-0169959e]{margin-left:3px}",""]),t.exports=a},"5b01":function(t,a,i){"use strict";i("e25e"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s={props:{len:0,grade:0,label:"",mod:0,fields:"",readonly:0},data:function(){return{num:0,items:[],gradeItems:[],half:!1,gclass:"mgb-10"}},watch:{num:function(t,a){this.$emit("call-parent",t)}},created:function(){console.log(this.label),void 0!=this.groupclass&&(this.gclass=this.groupclass);var t=[],a=this.len;0==a&&(a=5);for(var i=0;i<a;i++)t.push(i);this.items=t;var s=1;void 0!=this.mod&&(s=this.mod),this.grade%s!=0&&(console.log("mod"),this.half=!0);var e=parseInt(this.grade/s),n=[];for(i=0;i<e;i++)n.push(i);this.num=this.grade,this.gradeItems=n},methods:{setRaty:function(t){if(this.readonly)return!1;for(var a=[],i=t+1,s=0;s<i;s++)a.push(s);var e=1;void 0!=this.mod&&(e=this.mod),this.num=i*e,this.half=!1,this.gradeItems=a}}};a.default=s},7583:function(t,a,i){"use strict";var s=i("291c"),e=i.n(s);e.a},c794:function(t,a,i){"use strict";i.r(a);var s=i("f3c9"),e=i("282c");for(var n in e)"default"!==n&&function(t){i.d(a,t,(function(){return e[t]}))}(n);i("7583");var o,c=i("f0c5"),r=Object(c["a"])(e["default"],s["b"],s["c"],!1,null,"90c546be",null,!1,s["a"],o);a["default"]=r.exports},cd6d:function(t,a,i){"use strict";i.r(a);var s=i("5b01"),e=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(a,t,(function(){return s[t]}))}(n);a["default"]=e.a},db16:function(t,a,i){"use strict";var s;i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){return s}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("v-uni-view",{staticClass:"raty-group",class:t.gclass},[t.label.length>0?i("v-uni-view",{staticClass:"raty-label"},[t._v(t._s(t.label))]):t._e(),i("v-uni-input",{staticClass:"raty-value none",attrs:{type:"text",name:t.fields,value:t.num}}),i("v-uni-view",{staticClass:"raty-row"},[i("v-uni-view",{staticClass:"raty-item"},[t._l(t.items,(function(a,s){return i("v-uni-view",{key:s,staticClass:"raty-no",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.setRaty(s)}}})})),i("v-uni-view",{staticClass:"raty-num"},[t._v(t._s(t.num))])],2),i("v-uni-view",{staticClass:"raty-item"},t._l(t.gradeItems,(function(a,s){return i("v-uni-view",{key:s,staticClass:"raty-yes",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.setRaty(s)}}})})),1)],1)],1)],1)},n=[]},dd96:function(t,a,i){var s=i("466e");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var e=i("4f06").default;e("6f299052",s,!0,{sourceMap:!1,shadowMode:!1})},f3c9:function(t,a,i){"use strict";var s;i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){return s}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[t.pageLoad?i("v-uni-view",[i("v-uni-image",{staticClass:"d-img",attrs:{src:t.pageData.data.imgurl,mode:"widthFix"}}),i("v-uni-view",{staticClass:"row-box mgb-5"},[i("v-uni-view",{staticClass:"d-title bd-mp-10"},[t._v(t._s(t.pageData.data.title))]),t.pageData.data.isksid>0?i("v-uni-view",[i("v-uni-view",{staticClass:"kslist bd-mp-10",attrs:{id:"ks1"}},[i("v-uni-view",{staticClass:"kslist-label"},[t._v(t._s(t.pageData.data.ks_label_name))]),t._l(t.ksList,(function(a,s){return i("v-uni-view",{key:s,staticClass:"kslist-item",class:{"kslist-active":a.id==t.ksid1},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.ks1(a.id)}}},[t._v(t._s(a.title))])}))],2),i("v-uni-view",{staticClass:"kslist bd-mp-10",attrs:{id:"ks2"}},[i("v-uni-view",{staticClass:"kslist-label"},[t._v(t._s(t.pageData.data.ks_label_size))]),i("v-uni-view",{staticClass:"flex kslist-list"},t._l(t.ksList2,(function(a,s){return i("v-uni-view",{key:s,staticClass:"kslist-item",class:{"kslist-active":a.id==t.ksid},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.ks2(a.id)}}},[t._v(t._s(a.size))])})),1)],1)],1):t._e(),i("v-uni-view",{staticClass:"flex flex-ai-center bd-mp-10"},[t._v("价格"),i("v-uni-view",{staticClass:"flex-1 cl-money f22 mgl-5",attrs:{id:"price"}},[t._v("￥"+t._s(t.price))]),i("v-uni-view",{staticClass:"numbox"},[i("v-uni-view",{staticClass:"numbox-minus",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.dMinus.apply(void 0,arguments)}}},[t._v("-")]),i("v-uni-input",{staticClass:"numbox-num",attrs:{id:"cart-amount",readonly:""},model:{value:t.cart_amount,callback:function(a){t.cart_amount=a},expression:"cart_amount"}}),i("v-uni-view",{staticClass:"numbox-plus",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.dPlus.apply(void 0,arguments)}}},[t._v("+")])],1)],1)],1),i("v-uni-view",{staticClass:"row-box mgb-5"},[i("v-uni-view",{staticClass:"flex"},[i("v-uni-image",{staticClass:"wh-60 mgr-5",attrs:{mode:"widthFix",src:t.pageData.shop.imgurl+".100x100.jpg"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goShop(t.pageData.shop.shopid)}}}),i("v-uni-view",{staticClass:"flex-1"},[i("v-uni-view",{staticClass:"f16 cl1 mgb-10",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goShop(t.pageData.shop.shopid)}}},[t._v(t._s(t.pageData.shop.shopname))]),i("sky-raty",{attrs:{readonly:"1",len:"5",mod:"2",grade:t.pageData.shop.raty_grade,label:"综合评价"}})],1)],1)],1),i("v-uni-view",{staticClass:"pd-10 bg-fff"},[i("v-uni-view",{staticClass:"d-content"},[i("v-uni-rich-text",{attrs:{value:t.pageData.data.content}})],1)],1),i("v-uni-view",{staticClass:"h60"}),i("v-uni-view",{staticClass:"flcart"},[i("v-uni-navigator",{staticClass:"flcart-f1",attrs:{url:"../b2b_shop/index?shopid="+t.pageData.shop.shopid}},[i("v-uni-view",{staticClass:"flcart-icon iconfont icon-shop cl-money"}),t._v("首页")],1),i("v-uni-view",{staticClass:"flcart-f1",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goGuest(t.pageData.data.id,t.pageData.shop.shopid)}}},[i("v-uni-view",{staticClass:"flcart-icon iconfont icon-service"}),t._v("客服")],1),i("v-uni-view",{staticClass:"flcart-f2",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.addCart.apply(void 0,arguments)}}},[t._v("加入购物车")]),i("v-uni-view",{staticClass:"flcart-f2 bg-f30",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goBuy.apply(void 0,arguments)}}},[t._v("立即购买")])],1)],1):t._e()],1)},n=[]},f9b3:function(t,a,i){"use strict";var s=i("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=s(i("1f05")),n=0,o={components:{skyRaty:e.default},data:function(){return{pageData:{},pageLoad:!1,ksid:0,ksid1:0,ksList:[],ksList2:[],price:0,cart_amount:0}},onLoad:function(t){this.getPage(t.id)},methods:{goGuest:function(t,a){uni.navigateTo({url:"../b2b_guest/user?shopid="+a+"&id="+t})},goShop:function(t){uni.navigateTo({url:"../b2b_shop/index?shopid="+t})},getPage:function(t){var a=this;a.app.get({url:a.app.apiHost+"/module.php?m=b2b_product&a=show&ajax=1&id="+t,success:function(t){a.pageLoad=!0,a.pageData=t.data,n=t.data.shop.shopid,a.ksList=t.data.ksList,a.ksList2=t.data.ksList2,a.ksid=t.data.ksid,a.ksid1=t.data.ksid,a.price=t.data.data.price,a.cart_amount=t.data.cart_amount}})},dMinus:function(){this.cart_amount>1&&this.cart_amount--},dPlus:function(){this.cart_amount++},ks1:function(t){var a=this;a.app.get({url:a.app.apiHost+"/module.php?m=b2b_product_ks&a=sizeList&ajax=1&id="+t,success:function(t){a.ksid1=t.data.ksid,a.ksid=t.data.ksid,a.ksproduct=t.data.product,a.price=t.data.ks.price,a.cart_amount=t.data.product.cart_amount,a.ksList2=t.data.ksList2}})},ks2:function(t){var a=this;a.ksid=t,a.app.get({url:a.app.apiHost+"/module.php?m=b2b_product_ks&a=get&ajax=1&id="+t,success:function(t){a.ksproduct=t.data.product,a.price=t.data.ks.price,a.cart_amount=t.data.product.cart_amount}})},addCart:function(){var t=this,a=t.ksid;t.app.get({url:t.app.apiHost+"/module.php?m=b2b_cart&a=add&ajax=1",data:{productid:t.pageData.data.id,amount:t.cart_amount,ksid:a,shopid:n},success:function(t){if(t.error)return uni.showToast({title:t.message}),!1;uni.showToast({title:"加入成功"})}})},goBuy:function(){var t=this,a=t.ksid;t.app.get({url:t.app.apiHost+"/module.php?m=b2b_cart&a=add&ajax=1",data:{productid:t.pageData.data.id,amount:t.cart_amount,ksid:a,shopid:n},success:function(a){return 1e3==a.error?(uni.navigateTo({url:"../login/index"}),!1):"delete"!=a.data.action&&void uni.navigateTo({url:"../b2b_order/confirm?cartid="+a.data.cartid+"&shopid="+t.pageData.shop.shopid})}})}}};a.default=o}}]);