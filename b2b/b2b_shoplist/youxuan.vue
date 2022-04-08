<template>
	<view>
		<image mode="widthFix" style="width: 100%;" :src="cbd.imgurl"></image>
		<view>
			<view @click="goShop(item.shopid)" v-for="(item,index) in shopList" :key="index" class="aBox">
				<view class="flex">
					<image class="w60 mgr-10" mode="widthFix" :src="item.imgurl+'.100x100.jpg'"></image>
					<view class="flex-1">
						<view class="f16 b mgb-5">{{item.shopname}}</view>
						<view class="flex flex-ai-center mgb-5">
							<view class="cl2">起送￥{{item.send_startprice}}</view>
							<view class="aBox-line"></view>
							<view class="cl2">配送￥{{item.express_money}}</view>
							<view class="aBox-line"></view>
							<view>{{item.distance}}</view>
						</view>
						<view class="flex">
							<view class="aBox-btnc">30减4</view>
							<view class="aBox-btnc">30减4</view>
							<view class="aBox-btnc">30减4</view>
						</view>
					</view>
					<view class="aBox-btn">进店</view>
				</view>
				<view class="flex">
					<view v-for="(p,pkey) in item.prolist" :key="pkey" class="apBox">
						<image class="apBox-img" mode="widthFix" :src="p.imgurl+'.100x100.jpg'"></image>
						<view class="apBox-title">{{p.title}}</view>
						<view class="flex flex-ai-center">
							<text class="f12 cl-money">￥</text>
							<text  class="f14 cl-money">{{p.price}}</text>
						</view>
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
				shopList:{},
				cbd:{}
			}
		},
		onLoad:function(){
			this.getPage()
		},
		methods:{
			goShop:function(shopid){
				uni.navigateTo({
					url:"../../b2b/b2b_shop/index?shopid="+shopid
				})
			},
			getPage:function(){
				var that=this;
				that.app.get({
					url:that.app.apiHost+"/b2b_cbd/show?cbdid=3",
					success:function(res){
						that.shopList=res.data.list;
						that.cbd=res.data.cbd;
						uni.setNavigationBarTitle({
							title:res.data.cbd.title
						})
					}
				})
			}
		}
	}
</script>

<style>
	.b{
		font-weight: bolder;
	}
	.aBox{
		background-color: #fff;
		margin-bottom: 5px;
		padding: 10px;
	}
	.aBox-line{
		height: 10px;
		background-color: #eee;
		width: 1px;
		margin: 0 8px;
	}
	.aBox-btn{
		width: 80rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		font-size: 12px;
		background-color: #ffd356;
		color: #333;
		border-radius: 3px;
		cursor: pointer;
	}
	.aBox-btnc{
		border: 1px solid #eee;
		padding: 3px 5px;
		color: #fb4e44;
		margin-right: 5px;
		border-radius: 5px;
		font-size: 12px;
	}
	.apBox{
		width: 33.3%;
		padding: 5px;
		box-sizing: border-box;
	}
	.apBox-img{
		width: 80%;
		margin: 0 auto;
		margin-bottom: 3px;
	}
	.apBox-title{
		font-size: 12px;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-bottom: 5px;
		color: #323232;
	}
</style>
