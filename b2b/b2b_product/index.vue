<template>
	<view>
		 
		 <view class="mtlist mgt-5">
		 	 
		 	<view @click="goProduct(item.id,item.shopid)" v-for="(item,index) in list" :key="index" class="mtlist-item">
		 		<view class="mtlist-item-bd">
		 			<div class="mtlist-imgbox" >
		 				<image mode="widthFix" class="mtlist-img" :src="item.imgurl+'.small.jpg'"></image>
		 			</div>
		 			<view class="mtlist-item-pd">
		 				<view class="mtlist-item-money">
		 					<view class="mtlist-item-money-flex">￥
		 						<text class="mtlist-item-money_money">{{item.price}}</text>
		 					</view>
		 					<view class="mtlist-item-money_num">月销{{item.buy_num}}件</view>
		 				</view>
		 				<view class="mtlist-title">{{item.title}}</view>
		 				<view class="mtlist-desc">{{item.description}}</view>
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
				pageLoad:false,
				type:"",
				list:[]
			}
		},
		onLoad:function(ops){
			this.type=ops.type
			this.getPage();
		},
		methods:{
			 
			goProduct:function(id,shopid){
				uni.navigateTo({
					url:"../b2b_product/show?id="+id+"&shopid="+shopid
				})
			},
			getPage:function(){
				var that=this;
				that.app.get({
					url:that.app.apiHost+"/b2b_product/index?catid="+that.catid,
					success:function(res){
						that.list=res.data.list;
						that.pageLoad=true;
						 
					}
				})
			},
			getList:function(){
				var that=this;
				that.app.get({
					url:that.app.apiHost+"/b2b_product/list?catid="+that.catid,
					success:function(res){
						that.pageData.list=res.data.list;
						that.pageLoad=true;
						 
						uni.setNavigationBarTitle({
							title:res.data.cat.title
						})
					}
				})
			},
		}
	}
</script>

<style>
</style>
