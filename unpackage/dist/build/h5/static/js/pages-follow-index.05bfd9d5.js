(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-follow-index"],{"31aa":function(t,a,s){"use strict";var i;s.d(a,"b",(function(){return e})),s.d(a,"c",(function(){return o})),s.d(a,"a",(function(){return i}));var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main-body",attrs:{id:"App"}},[s("div",{staticClass:"tabs-border"},[s("div",{staticClass:"tabs-border-item ",class:"follow"==t.tab?"tabs-border-active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.setTab("follow")}}},[t._v("关注")]),s("div",{staticClass:"tabs-border-item",class:"followed"==t.tab?"tabs-border-active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.setTab("followed")}}},[t._v("粉丝")])]),s("div",{staticClass:"list"},[0==Object.keys(t.list).length?s("div",{staticClass:"emptyData"},[t._v("暂无")]):t._e(),t._l(t.list,(function(a,i){return s("div",{key:i,staticClass:"row-box flex mgb-5"},[s("img",{staticClass:"wh-60 mgr-5",attrs:{src:a.user_head+".100x100.jpg"},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.goUser(a.userid)}}}),s("div",{staticClass:"flex-1"},[s("div",{staticClass:"mgb-5",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.goUser(a.userid)}}},[t._v(t._s(a.nickname))]),s("div",{staticClass:"flex"},[s("div",{staticClass:"mgr-5"},[t._v("关注")]),s("div",{staticClass:"mgr-5 cl-num"},[t._v(t._s(a.follow_num))]),s("div",{staticClass:"mgr-5"},[t._v("粉丝")]),s("div",{staticClass:"cl-num"},[t._v(t._s(a.followed_num))])])]),s("div",[a.isfollow?s("div",{staticClass:"btn-mini",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.followToggle(a)}}},[t._v("取消关注")]):s("div",{staticClass:"btn-mini",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.followToggle(a)}}},[t._v("关注")])])])}))],2)])},o=[]},a07a:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{list:[],tab:"follow",isFirst:!0,per_page:0,userid:0}},onLoad:function(t){void 0!=t.userid&&(this.userid=t.userid),void 0!=t.tab&&(this.tab=t.tab),this.getFollow()},methods:{getFollow:function(){var t=this;if(t.per_page&&!t.isFirst)return!1;t.app.get({url:t.app.apiHost+"/index.php?m=follow&ajax=1",dataType:"json",data:{userid:this.userid},success:function(a){for(var s in t.isFirst=!1,t.per_page=a.data.per_page,a.data.list)t.list.push(a.data.list[s])}})},getFollowed:function(){var t=this;t.app.get({url:t.app.apiHost+"/index.php?m=follow&a=followed&ajax=1",dataType:"json",data:{userid:this.userid},success:function(a){for(var s in t.isFirst=!1,t.per_page=a.data.per_page,a.data.list)t.list.push(a.data.list[s])}})},setTab:function(t){this.tab=t,this.list=[],this.per_page=0,this.isFirst=!0,"follow"==t?this.getFollow():this.getFollowed()},followToggle:function(t){var a=this;switch(a.tab){case"follow":uni.showModal({title:"提示",content:"确认取消关注吗?",success:function(s){s.confirm&&a.app.get({url:a.app.apiHost+"/index.php?m=follow&a=Toggle&ajax=1",dataType:"json",data:{t_userid:t.userid},success:function(s){var i=Array();for(var e in a.list)a.list[e].userid!=t.userid&&i.push(a.list[e]);a.list=i}})}});break;default:a.app.get({url:a.app.apiHost+"/index.php?m=follow&a=Toggle&ajax=1",dataType:"json",data:{t_userid:t.userid},success:function(a){t.isfollow=a.follow}});break}},goUser:function(t){uni.navigateTo({url:"../../pagesblog/sblog_home/index?userid="+t})}}};a.default=i},aa9d:function(t,a,s){"use strict";s.r(a);var i=s("a07a"),e=s.n(i);for(var o in i)"default"!==o&&function(t){s.d(a,t,(function(){return i[t]}))}(o);a["default"]=e.a},f61a:function(t,a,s){"use strict";s.r(a);var i=s("31aa"),e=s("aa9d");for(var o in e)"default"!==o&&function(t){s.d(a,t,(function(){return e[t]}))}(o);var l,n=s("f0c5"),r=Object(n["a"])(e["default"],i["b"],i["c"],!1,null,"161a6903",null,!1,i["a"],l);a["default"]=r.exports}}]);