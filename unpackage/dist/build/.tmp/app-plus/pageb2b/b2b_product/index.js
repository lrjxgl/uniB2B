(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pageb2b/b2b_product/index"],{"07e0":function(t,a,e){},"27bb":function(t,a,e){"use strict";var s=e("07e0"),o=e.n(s);o.a},"71b9":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c},o=[];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return o})},"7f0f":function(t,a,e){"use strict";e.r(a);var s=e("ac59"),o=e.n(s);for(var d in s)"default"!==d&&function(t){e.d(a,t,function(){return s[t]})}(d);a["default"]=o.a},ac59:function(t,a,e){"use strict";(function(t,s){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=0,d=function(){return e.e("components/b2bfooter").then(e.bind(null,"0c52"))},r={components:{b2bFooter:d},data:function(){return{pageData:{},pageLoad:!1,sideTop:44,show:"flex",catActive:"cl-money",ksShow:!1,ksproduct:[],ksList:[],ksList2:[],ksid:0,ksid1:0,ksid2:0}},onLoad:function(){t.setNavigationBarTitle({title:"点餐"}),this.sideTop=44,this.getPage()},methods:{goProduct:function(a){t.navigateTo({url:"../b2b_product/show?id="+a})},getPage:function(){var a=this;t.request({url:a.app.apiHost+"/module.php?m=b2b_product&ajax=1",data:{authcode:a.app.getAuthCode()},success:function(t){var e=t.data;a.pageData=e.data,a.pageLoad=!0}})},getList:function(){var a=this;t.request({url:a.app.apiHost+"/module.php?m=b2b_product&ajax=1",data:{catid:o,authcode:a.app.getAuthCode()},dataType:"json",success:function(t){console.log(s(t," at pageb2b\\b2b_product\\index.vue:136"));var e=t.data;for(var d in e.data.catList)e.data.catList[d].catid==o?e.data.catList[d].isactive=1:e.data.catList[d].isactive=0;a.pageData=e.data}})},setCat:function(t){var a=this;o=t,a.catActive=0==o?"cl-money":"",this.getList()},addCart:function(a,e){var s=this,o=(a=a,e=void 0==e?0:e,1);t.request({url:s.app.apiHost+"/module.php?m=b2b_cart&a=add&ajax=1",data:{productid:a,amount:o,ksid:e,authcode:s.app.getAuthCode()},method:"GET",dataType:"json",success:function(e){var o=e.data;if(o.error)return t.showToast({title:o.message}),!1;for(var d=s.pageData.list,r=0;r<d.length;r++)if(d[r].id==a){o.data.amount>0&&(d[r].incart=1),d[r].cart_amount=o.data.amount;break}s.pageData.list=s.parseList(d)}})},plusCart:function(a,e,s){var o=this;a=a,e=e,s=void 0==s?0:s;e++,t.request({url:o.app.apiHost+"/module.php?m=b2b_cart&a=add&ajax=1",data:{productid:a,amount:e,ksid:s,authcode:o.app.getAuthCode()},method:"GET",dataType:"json",success:function(e){var s=e.data;if(s.error)return t.showToast({title:s.message}),!1;for(var d=o.pageData.list,r=0;r<d.length;r++)if(d[r].id==a){d[r].cart_amount=s.data.amount;break}o.pageData.list=o.parseList(d)}})},minusCart:function(a,e,s){var o=this;a=a,e=e,s=void 0==s?0:s;e--;var d=0;0==e&&(d=1),t.request({url:o.app.apiHost+"/module.php?m=b2b_cart&a=add&ajax=1",data:{productid:a,amount:e,ksid:s,isdelete:d,authcode:o.app.getAuthCode()},method:"GET",dataType:"json",success:function(e){var s=e.data;if(s.error)return t.showToast({title:s.message}),!1;for(var d=o.pageData.list,r=0;r<d.length;r++)if(d[r].id==a){0==s.data.amount&&(d[r].incart=0),d[r].cart_amount=s.data.amount;break}o.pageData.list=o.parseList(d)}})},parseList:function(t){for(var a=0;a<t.length;a++)t[a].cart_num>0?t[a].cart_num_class="prolist-item-row-cart-active":t[a].cart_num_class="";return t},ksBox:function(a){var e=this;t.request({url:e.app.apiHost+"/module.php?m=b2b_product_ks&ajax=1&productid="+a,data:{authcode:e.app.getAuthCode()},dataType:"json",success:function(a){var s=a.data;if(s.error)return t.showToast({title:s.message}),!1;e.ksShow=!0,e.ksproduct=s.data.product,e.ksList=s.data.ksList,e.ksList2=s.data.ksList2,e.ksid1=s.data.ksid,e.ksid=s.data.ksid}})},ksHide:function(){this.ksid=0,this.ksShow=!1},ks1:function(a){var e=this;t.request({url:e.app.apiHost+"/module.php?m=b2b_product_ks&a=sizeList&ajax=1&id="+a,dataType:"json",data:{authcode:e.app.getAuthCode()},success:function(a){var s=a.data;if(s.error)return t.showToast({title:s.message}),!1;e.ksid1=s.data.ksid,e.ksid=s.data.ksid,e.ksproduct=s.data.product,e.ksList2=s.data.ksList2}})},ks2:function(a){var e=this;e.ksid=a,t.request({url:e.app.apiHost+"/module.php?m=b2b_product_ks&a=get&ajax=1&id="+a,dataType:"json",data:{authcode:e.app.getAuthCode()},success:function(a){var s=a.data;if(s.error)return t.showToast({title:s.message}),!1;e.ksproduct=s.data.product}})},ksAddCart:function(a){var e=this,s=(a=a,e.ksid),o=1;t.request({url:e.app.apiHost+"/module.php?m=b2b_cart&a=add&ajax=1",data:{productid:a,amount:o,ksid:s,authcode:e.app.getAuthCode()},method:"GET",dataType:"json",success:function(a){var s=a.data;if(s.error)return t.showToast({title:s.message}),!1;e.ksproduct.incart=1,e.ksproduct.cart_amount=s.data.amount}})},ksPlusCart:function(a,e){var s=this,o=(a=a,e=e,s.ksid);e++,t.request({url:s.app.apiHost+"/module.php?m=b2b_cart&a=add&ajax=1",data:{productid:a,amount:e,ksid:o,authcode:s.app.getAuthCode()},method:"GET",dataType:"json",success:function(a){var e=a.data;if(e.error)return t.showToast({title:e.message}),!1;s.ksproduct.cart_amount=e.data.amount}})},ksMinusCart:function(a,e){var s=this,o=(a=a,e=e,s.ksid);e--;var d=0;0==e&&(d=1),t.request({url:s.app.apiHost+"/module.php?m=b2b_cart&a=add&ajax=1",data:{productid:a,amount:e,ksid:o,isdelete:d,authcode:s.app.getAuthCode()},method:"GET",dataType:"json",success:function(a){var e=a.data;if(e.error)return t.showToast({title:e.message}),!1;0==e.data.amount?(s.ksproduct.cart_amount=0,s.ksproduct.incart=0):s.ksproduct.cart_amount=e.data.amount}})}}};a.default=r}).call(this,e("6e42")["default"],e("0de9")["default"])},b702:function(t,a,e){"use strict";e.r(a);var s=e("71b9"),o=e("7f0f");for(var d in o)"default"!==d&&function(t){e.d(a,t,function(){return o[t]})}(d);e("27bb");var r=e("2877"),u=Object(r["a"])(o["default"],s["a"],s["b"],!1,null,null,null);a["default"]=u.exports}},[["7aa6","common/runtime","common/vendor"]]]);