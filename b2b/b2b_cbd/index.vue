<template>
	<view class="pdt-5">
		<view v-if="!pageLoad">
			<page-loading></page-loading>
		</view>
		<view v-else class="mtlist">
			<view v-for="(item,index) in pageData.list" :key="index" @click="goCbd(item.cbdid)" class="mtlist-item">
				<view class="mtlist-item-bd">
					<img class="mtlist-img" mode="widthFix" :src="item.imgurl+'.small.jpg'" />
					<view class="mtlist-item-pd">
					<view class="mtlist-title">{{item.title}}</view>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data:function(){
			return {
				pageData:{},
				pageLoad:false
			}
		},
		onReady:function(){
			
		},
		onLoad:function(){
			this.getPage();
		},
		methods:{
			goCbd:function(cbdid){
				uni.navigateTo({
					url:"../b2b_cbd/show?cbdid="+cbdid
				})
			},
			getPage:function(){
				var that=this;
				this.app.get({
					url:this.app.apiHost+"/module.php/b2b_cbd/index?",
					success:function(res){
						if(res.data.seo!=null){
							uni.setNavigationBarTitle({
								title:res.data.seo.title
							})
						}
						that.pageData=res.data;
						that.pageLoad=true;
					}
				})
			}
		}
	}
</script>

<style>
</style>
