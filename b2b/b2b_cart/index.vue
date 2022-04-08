<template>
	<view>
		<view class="main-body" id="app" v-if="pageLoad">
			<view v-if="!pageData.shopCarts || pageData.shopCarts.length==0">
				<div class="emptyData">购物车，暂无商品</div>
				<b2b-reclist ptitle="猜你喜欢"></b2b-reclist>
			</view>
			<view v-else>
				<view v-for="(shop,spindex) in pageData.shopCarts" :key="spindex" class="shop">
					<view @click="goShop(shop.shopid)" class="row-box-hd bg-white pdl-5">
						<view class="flex-1">{{shop.shopname}}</view>
						<view class="row-box-more"></view>
					</view>
				<view class="flexlist" >
					<view class="flexlist-item" v-for="(item,index) in shop.cart" :key="index">
						<img :src="item.imgurl+'.100x100.jpg'" class="flexlist-img" />
						<view class="flex-1">
							<view class="flexlist-title">{{item.title}}</view>
							<view class="flexlist-row">
								<view class="">{{item.ks_title}}</view>
								<view class="cl-money">
									￥{{item.price}}
								</view>
								<view class="flex-1"></view>
								<view   class="numbox">
									<view @click="minusCart(item.productid,item.amount,item.ksid)" class="numbox-minus">-</view>
									<input type="text" name="amount" :value="item.amount" class="numbox-num" />
									<view @click="plusCart(item.productid,item.amount,item.ksid)" class="numbox-plus">+</view>	
								</view>
							</view>
							
						</view>
					</view>	
				</view>
				<view class="pd-10 flex">
					<view class="flex-1">
						共{{shop.total_num}}件，总{{shop.total_money}}元
					</view>
					<view @click="goConfirm(shop.shopid)" class="btn">确认购买</view>
				</view>
				</view>
			</view>
		</view>
		<b2b-footer tab="cart"></b2b-footer>
	</view>
</template>

<script>
	import b2bFooter from "../../components/b2bfooter.vue"; 
	import b2bReclist from "../../components/b2b-reclist.vue";
	export default{
		components:{
			b2bFooter,
			b2bReclist
		}, 
		data: function() {
			return {
				pageData: {},
				pageLoad:false,
			}
		},
		created: function() {
			this.getPage();
		},
		methods: {
			getPage: function() {
				var that = this;
				that.app.get({
					url: that.app.apiHost+"/b2b_cart/index?ajax=1",
					success: function(res) {
						if(res.error==1000){
							uni.showToast({
								title:"请先登录"
							})	
							return false;
						}
						that.pageLoad=true;
						that.pageData = res.data;
					}
				})
			},
			plusCart: function(id, amount, ksid) {
				var that = this;
				var productid = id;
				var amount = amount;
				var ksid = ksid == undefined ? 0 : ksid;
				amount++;
				that.app.get({
					url: that.app.apiHost+'/b2b_cart/add?ajax=1',
					data: {
						productid: productid,
						amount: amount,
						ksid: ksid
					},
					success: function(res) {
						that.getPage();
					}
				})
			},
			minusCart: function(id, amount, ksid) {
				var that = this;
				var productid = id;
				var amount = amount;
				var ksid = ksid == undefined ? 0 : ksid;
				amount--;
				var isdelete = 0;
				if (amount == 0) {
					isdelete = 1
				}
				that.app.get({
					url: that.app.apiHost+'/b2b_cart/add?ajax=1',
					data: {
						productid: productid,
						amount: amount,
						ksid: ksid,
						isdelete: isdelete
					},
					success: function(res) {
						that.getPage();
					}
				})
			},
			goConfirm:function(shopid){
				uni.navigateTo({
					url:"../b2b_order/confirm?shopid="+shopid
				})
			},
			goShop:function(shopid){
				uni.navigateTo({
					url:"../b2b_shop/index?shopid="+shopid
				})
			} 
		}
	};
	
</script>

<style>
</style>
