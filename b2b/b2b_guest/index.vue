<template>
	<view>
		<div @click="goDetail(item)" v-for="(item,index) in list" :key="index"  class="flexlist-item pointer">
			<img class="flexlist-img" :src="item.shop_imgurl+'.100x100.jpg'" />
			<div class="flex-1">
				<div class="flex mgb-5">
					<div class="flex-1 f16 cl2">{{item.shopname}}</div>
					<div class="cl3 f12">{{item.timeago}}</div>
				</div>
				<div class="flexlist-desc">{{item.content}}</div>
			</div>
		</div>
		<div class="loadMore" @click="getList" v-if="per_page>0">加载更多</div>
	</view>
</template>

<script>
	
	export default{
		data:function(){
			return {
				pageLoad:false,
				list:[],
				per_page:0,
				isFirst:true
			}
		},
		onLoad:function(){
			this.getPage();
		},
		onReachBottom:function(){
			this.getList();
		},
		onPullDownRefresh:function(){
			this.getPage();
			uni.stopPullDownRefresh();
		},
		onShareAppMessage:function(){
			
		},
		onShareTimeline:function(){
			
		},
		methods: {
			gourl:function(url){
				uni.navigateTo({
					url:url
				})
			},
			goDetail:function(item){
				uni.navigateTo({
					url:"../b2b_guest/user?shopid="+item.shopid
				})
			},
			getPage:function() {
				var that=this;
				that.app.get({
					url:that.app.apiHost+"/b2b_guest/index?ajax=1",
					success:function(res){
						that.pageLoad=true;
						that.list=res.data.list;
						that.per_page=res.data.per_page;
					}
				})
			},
			getList:function() {
				var that=this;
				if(that.per_page==0 && !that.isFirst){
					return false;
				}
				that.app.get({
					url:that.app.apiHost+"/b2b_guest/index?ajax=1",
					data:{
						per_page:that.per_page
					},
					success:function(res){						 
						that.per_page=res.data.per_page;
						if(that.isFirst){
							that.list=res.data.list;
							that.isFirst=false;
						}else{
							for(var i in res.data.list){
								that.list.push(res.data.list[i]);
							}							
						}
						
					}
				})
			}
		},
	}
</script>

<style>
</style>
