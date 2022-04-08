<template>
	<view>
		<view class="footer-row"></view>
		<div class="footer">
			<div @click="goHome()" class="footer-item icon-home" :class="{'footer-active':tab=='index'}" >首页</div>
			<div @click="goCategory()" class="footer-item icon-cascades" :class="{'footer-active':tab=='category'}">分类</div>
		 
			<div @click="goCart()" class="footer-item icon-cart" :class="{'footer-active':tab=='cart'}">购物车</div>
			<view class="footer-item icon-message_light" v-bind:class="{'footer-active':tab=='notice'}" @click="goPm()">消息<text v-if="pm_num>0" class="badge  badge-abs">{{pm_num}}</text></view>
			  
			<div @click="goUser()" class="footer-item icon-my_light " :class="{'footer-active':tab=='user'}">我的</div>
		</div>
	 
	</view>
</template>

<script>
	export default{
		props:{
			tab:''
		},
		data:function(){
			return {
				pm_num:0
			}
		},
		methods:{
			getPm:function(){
				var that=this;
				that.app.get({
					url:that.app.apiHost+"/allmsg/GetAllNum",
					unLogin:true,
					success:function(res){
						that.pm_num=res.num;
					}
				})	
			}, 
			goPm:function(){
				uni.reLaunch({
					url:"/b2b/b2b_notice/index"
				})
			},
			goCategory:function(){
				uni.reLaunch({
					url:"../../b2b/b2b_category/index"
				})
			},
			goHome:function(){
				uni.reLaunch({
					url:"../../pages/index/index"
				})
			},
			goCart:function(){
				uni.reLaunch({
					url:"../../b2b/b2b_cart/index"
				})
			},
			goOrder:function(){
				uni.reLaunch({
					url:"../../b2b/b2b_order/my"
				})
			},
			goUser:function(){
				uni.reLaunch({
					url:"../../b2b/b2b_user/index"
				})
			},
		}
	}
</script>

<style>
</style>
