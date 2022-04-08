<template>
	<view class="bg-white pd-5">
		<div @click="goShop(item.shopid)" v-for="(item,index) in shoplist" :key="index" class="flexlist-item pointer">
			<image mode="widthFix" :src="item.imgurl+'.100x100.jpg'" class="flexlist-img bd-radius-50" ></image>
			<div class="flex-1">
				<div class="flexlist-title">{{item.shopname}}</div>
				<sky-raty len="5" mod="2" readonly="1" :grade="item.raty_grade" label="评价"></sky-raty>
				<div class="flex" v-if="item.prolist">
					<div v-for="(p,pindex) in item.prolist" :key="pindex" class="mgr-5">
						<img :src="p.imgurl+'.100x100.jpg'" class="wh-60 mgb-5" />

					</div>
				</div>
			</div>

			 
		</div>
	</view>
</template>

<script>
	import skyRaty from "./skyraty.vue";
	export default{
		components:{
			skyRaty
		},
		props:{
			shoplist:{}
		},
		data:function(){
			return {
				list:{}
			}
		},
		created:function(){
			 
		},
		methods:{
			goShop:function(shopid){
				uni.navigateTo({
					url:"../../b2b/b2b_shop/index?shopid="+shopid
				})
			}
		}
	}
</script>

<style>
	.mgr-3{
		margin-right: 3px;
	}
	.shopItem{
		display: flex;
		flex-direction: row;
		margin-bottom: 10px;
		border-bottom: 1px solid #eee;
	}
	.shopItem-img{
		width: 70px;
		height: 70px;
		margin-right: 10px;
		border-radius: 50%;
	}
	.shopItem-title{
		font-size: 40rpx;
		margin-bottom: 5px;
	}
	.shopItem-ratybox{
		width: 200rpx; 
		margin-bottom: -8px;
	}
	.shopItem-zsbtn{
		background-color: #fdd060;
		color: #666;
		font-size: 12px;
		padding: 3px 6px;
		border-radius: 5px;
	}
	.shopItem-mbtn{
		border:1px solid #fc9993;
		padding: 2px 3px;
		border-radius: 5px;
		font-size: 12px;
		transform: scale(0.8,0.8);
		transform-origin: 0 0px;
		box-sizing: border-box;
		margin-right: -10px;
		color: #fc9993;
	}
	.scalem2{
		transform: scale(0.7);
		transform-origin: 0 12px;
	}
</style>
