(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["b2b-b2b_search-index"],{"0edb":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{attrs:{id:"app"}},[a("v-uni-view",{staticClass:"tabs-border-group"},[a("v-uni-view",{staticClass:"tabs-border"},[a("v-uni-view",{staticClass:"tabs-border-item",class:{"tabs-border-active":"product"==t.page},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setPage("product")}}},[t._v("产品")]),a("v-uni-view",{staticClass:"tabs-border-item",class:{"tabs-border-active":"shop"==t.page},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setPage("shop")}}},[t._v("商家")])],1)],1),a("v-uni-view",{staticClass:"flex pd-5 bg-white mgb-5"},[a("v-uni-input",{staticClass:"input-flex-text bd-radius-10 outline-none",attrs:{id:"keyword"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("v-uni-view",{staticClass:"input-flex-btn w60",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}},[t._v("搜一下")])],1),t.pageLoad?a("v-uni-view",["product"==t.page?a("v-uni-view",{staticClass:"mtlist"},t._l(t.pageData.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"mtlist-item"},[a("v-uni-view",{staticClass:"mtlist-item-bd"},[a("v-uni-view",{staticClass:"mtlist-imgbox",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goProduct(e.shopid,e.id)}}},[a("v-uni-image",{staticClass:"mtlist-img",attrs:{mode:"widthFix",src:e.imgurl+".small.jpg"}})],1),a("v-uni-view",{staticClass:"mtlist-item-pd"},[a("v-uni-view",{staticClass:"mtlist-item-money"},[a("v-uni-view",{staticClass:"flex flex-1 flex-ai-center"},[a("v-uni-view",{staticClass:"cl-money f12"},[t._v("￥")]),a("v-uni-view",{staticClass:"cl-money f22"},[t._v(t._s(e.price))])],1),a("v-uni-view",{staticClass:"mtlist-item-money_num"},[t._v("月销"+t._s(e.buy_num)+"件")])],1),a("v-uni-view",{staticClass:"mtlist-title"},[t._v(t._s(e.title))])],1)],1)],1)})),1):t._e(),"shop"==t.page?a("v-uni-view",t._l(t.pageData.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"flexlist-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goShop(e.shopid)}}},[a("img",{staticClass:"flexlist-img bd-radius-50",attrs:{src:e.imgurl+".100x100.jpg"}}),a("v-uni-view",{staticClass:"flex-1"},[a("v-uni-view",{staticClass:"flexlist-title"},[t._v(t._s(e.shopname))]),a("sky-raty",{attrs:{len:"5",mod:"2",readonly:"1",grade:e.raty_grade,label:"评价"}}),e.prolist?a("v-uni-view",{staticClass:"flex"},t._l(e.prolist,(function(t,e){return a("v-uni-view",{key:e,staticClass:"mgr-5"},[a("img",{staticClass:"wh-60 mgb-5",attrs:{src:t.imgurl+".100x100.jpg"}})])})),1):t._e()],1),e.distance>0?a("v-uni-view",{staticClass:"cl3 f12"},[t._v("距您"+t._s(e.distance)+"Km")]):t._e()],1)})),1):t._e()],1):t._e()],1)],1)},n=[]},"1f05":function(t,e,a){"use strict";a.r(e);var i=a("db16"),s=a("cd6d");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("25c6");var r,u=a("f0c5"),o=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,"0169959e",null,!1,i["a"],r);e["default"]=o.exports},"25c6":function(t,e,a){"use strict";var i=a("dd96"),s=a.n(i);s.a},"2bda":function(t,e,a){"use strict";a.r(e);var i=a("834b"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},"466e":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".raty-num[data-v-0169959e]{margin-left:3px}",""]),t.exports=e},"5b01":function(t,e,a){"use strict";a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{len:0,grade:0,label:"",mod:0,fields:"",readonly:0},data:function(){return{num:0,items:[],gradeItems:[],half:!1,gclass:"mgb-10"}},watch:{num:function(t,e){this.$emit("call-parent",t)}},created:function(){console.log(this.label),void 0!=this.groupclass&&(this.gclass=this.groupclass);var t=[],e=this.len;0==e&&(e=5);for(var a=0;a<e;a++)t.push(a);this.items=t;var i=1;void 0!=this.mod&&(i=this.mod),this.grade%i!=0&&(console.log("mod"),this.half=!0);var s=parseInt(this.grade/i),n=[];for(a=0;a<s;a++)n.push(a);this.num=this.grade,this.gradeItems=n},methods:{setRaty:function(t){if(this.readonly)return!1;for(var e=[],a=t+1,i=0;i<a;i++)e.push(i);var s=1;void 0!=this.mod&&(s=this.mod),this.num=a*s,this.half=!1,this.gradeItems=e}}};e.default=i},"834b":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("1f05")),n={components:{skyRaty:s.default},data:function(){return{pageLoad:!1,pageData:{},keyword:"",page:"product"}},onLoad:function(t){this.keyword=t.keyword,this.getPage()},methods:{goProduct:function(t,e){uni.navigateTo({url:"../b2b_product/show?shopid="+t+"&id="+e})},goShop:function(t){},search:function(){this.getPage()},setPage:function(t){this.page=t,this.pageLoad=!1,this.pageData={},this.getPage()},getPage:function(){"product"==this.page?this.getProduct():this.getShop()},getShop:function(){var t=this;this.app.get({url:t.app.apiHost+"/module.php?m=b2b_search&a=shop&ajax=1",data:{keyword:this.keyword},dataType:"json",success:function(e){t.pageLoad=!0,t.pageData=e.data}})},getProduct:function(){var t=this;this.app.get({url:t.app.apiHost+"/module.php?m=b2b_search&a=product&ajax=1",data:{keyword:this.keyword},dataType:"json",success:function(e){t.pageLoad=!0,t.pageData=e.data}})}}};e.default=n},"910d":function(t,e,a){"use strict";a.r(e);var i=a("0edb"),s=a("2bda");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);var r,u=a("f0c5"),o=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,"ab6a8f56",null,!1,i["a"],r);e["default"]=o.exports},cd6d:function(t,e,a){"use strict";a.r(e);var i=a("5b01"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},db16:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"raty-group",class:t.gclass},[t.label.length>0?a("v-uni-view",{staticClass:"raty-label"},[t._v(t._s(t.label))]):t._e(),a("v-uni-input",{staticClass:"raty-value none",attrs:{type:"text",name:t.fields,value:t.num}}),a("v-uni-view",{staticClass:"raty-row"},[a("v-uni-view",{staticClass:"raty-item"},[t._l(t.items,(function(e,i){return a("v-uni-view",{key:i,staticClass:"raty-no",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setRaty(i)}}})})),a("v-uni-view",{staticClass:"raty-num"},[t._v(t._s(t.num))])],2),a("v-uni-view",{staticClass:"raty-item"},t._l(t.gradeItems,(function(e,i){return a("v-uni-view",{key:i,staticClass:"raty-yes",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setRaty(i)}}})})),1)],1)],1)],1)},n=[]},dd96:function(t,e,a){var i=a("466e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("6f299052",i,!0,{sourceMap:!1,shadowMode:!1})}}]);