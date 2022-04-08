<template>
	<view>
		<view v-if="pageLoad">
			<image :src="pageData.data.imgurl" mode="widthFix" class="d-img"></image>
			<view class="row-box mgb-5">
				<view class="d-title bd-mp-10">{{pageData.data.title}}</view>

				<view v-if="pageData.data.isksid>0">
					<view id="ks1" class="kslist bd-mp-10">
						<view class="kslist-label">{{pageData.data.ks_label_name}}</view>

						<view @click="ks1(item.id)" class="kslist-item" v-bind:class="{'kslist-active':item.id==ksid1}" v-for="(item,index) in ksList" :key="index">{{item.title}}</view>


					</view>
					<view id="ks2" class="kslist bd-mp-10">
						<view class="kslist-label">{{pageData.data.ks_label_size}}</view>
						<view class="flex kslist-list">

							<view @click="ks2(item.id)" v-bind:class="{'kslist-active':item.id==ksid}" class="kslist-item" v-for="(item,index) in ksList2" :key="index">{{item.size}}</view>

						</view>
					</view>
				</view>
				<view class="flex flex-ai-center bd-mp-10">
					价格 <view class="flex-1 cl-money f22 mgl-5" id="price">￥{{price}}</view>
					<view class="numbox">
						<view @click="dMinus" class="numbox-minus">-</view>
						<input class="numbox-num" id="cart-amount" v-model="cart_amount" readonly=""  />
						<view @click="dPlus" class="numbox-plus">+</view>
					</view>

				</view>

			</view>
			<view class="row-box mgb-5">
				<view class="flex">
					<image mode="widthFix" @click="goShop(pageData.shop.shopid)" class="wh-60 mgr-5" :src="pageData.shop.imgurl+'.100x100.jpg'"></image>
					<view class="flex-1">
						<view @click="goShop(pageData.shop.shopid)" class="f16 cl1 mgb-10">{{pageData.shop.shopname}}</view>
						<sky-raty readonly="1"  len="5" mod="2" :grade="pageData.shop.raty_grade" label="综合评价"></sky-raty>
					</view>
					 
				</view>
			</view>
			<view class="pd-10 bg-fff">



				<view class="d-content">
					<rich-text :value="pageData.data.content"></rich-text>


				</view>
			</view>
		
		<view class="h60"></view>
		 
		<view class="flcart">
			<navigator :url="'../b2b_shop/index?shopid='+pageData.shop.shopid" class="flcart-f1">
				<view class="flcart-icon iconfont icon-shop cl-money"></view>
				首页
			</navigator>
			<view @click="goGuest(pageData.data.id,pageData.shop.shopid)" class="flcart-f1">
				<view class="flcart-icon iconfont icon-service"></view>
				客服
			</view>
			<view class="flcart-f2" @click="addCart">加入购物车</view>
			<view @click="goBuy" class="flcart-f2 bg-f30">立即购买</view>
		</view>
		</view>
	</view>
</template>

<script>
	var shopid=0;
	import skyRaty from "../../components/skyraty.vue";
	export default {
		components:{
			skyRaty
		},
		data: function() {
			return {
				pageData: {},
				pageLoad: false,
				ksid:0,
				ksid1:0,
				ksList:[],
				ksList2:[],
				price:0,
				cart_amount:0
			}
		},
		onLoad:function(ops){
			this.getPage(ops.id);
		},
		methods: {
			goGuest:function(id,shopid){
				uni.navigateTo({
					url:"../b2b_guest/user?shopid="+shopid+"&id="+id
				})
			},
			goShop:function(shopid){
				uni.navigateTo({
					url:"../b2b_shop/index?shopid="+shopid
				})
			},
			getPage: function(id) {
				var that = this;
				that.app.get({
					url: that.app.apiHost + "/b2b_product/show?id=" + id,
					success: function(res) {
						that.pageLoad = true;
						that.pageData = res.data;
						shopid=res.data.shop.shopid;
						that.ksList=res.data.ksList;
						that.ksList2=res.data.ksList2;
						that.ksid=res.data.ksid;
						that.ksid1=res.data.ksid;
						that.price=res.data.data.price;
						that.cart_amount=res.data.cart_amount;
					}
				})
			},
			dMinus:function(){
				if(this.cart_amount>1){
					this.cart_amount--;
				}
				
			},
			dPlus:function(){
				this.cart_amount++;
			},
			ks1:function(id){
				var that=this;
				that.app.get({
					url:that.app.apiHost+"/b2b_product_ks/sizeList?id="+id,
					success:function(res){
						that.ksid1=res.data.ksid;
						that.ksid=res.data.ksid;
						that.ksproduct=res.data.product;
						that.price=res.data.ks.price;
						that.cart_amount=res.data.product.cart_amount;
						that.ksList2=res.data.ksList2;
					}
				})
			},
			ks2:function(id){
				var that=this;
				that.ksid=id;
				that.app.get({
					url:that.app.apiHost+"/b2b_product_ks/get?id="+id,
					success:function(res){
						that.ksproduct=res.data.product;
						that.price=res.data.ks.price;
						that.cart_amount=res.data.product.cart_amount; 
					}
				 })
			},
			addCart: function() {
				var that = this; 
				var ksid=that.ksid;				 
				that.app.get({
					url: that.app.apiHost+'/b2b_cart/add?ajax=1',
					data: {
						productid: that.pageData.data.id,
						amount: that.cart_amount,
						ksid: ksid,
						shopid:shopid,
					},
					success: function(res) {
						if(res.error){
							uni.showToast({
								title:res.message
							})
							return false;
						}
						uni.showToast({
							title:"加入成功"
						})
						 
					}
				})
			},
			goBuy:function(){
				var that = this; 
				var ksid=that.ksid;				 
				that.app.get({
					url: that.app.apiHost+'/b2b_cart/add?ajax=1',
					data: {
						productid: that.pageData.data.id,
						amount: that.cart_amount,
						ksid: ksid,
						shopid:shopid,
					},
					success: function(res) {
						if(res.error==1000){
							uni.navigateTo({
								url:"../login/index"
							});
							return false;
						}
						if(res.data.action=='delete'){
							return false;
						}
						uni.navigateTo({
							url:"../b2b_order/confirm?cartid="+res.data.cartid+"&shopid="+that.pageData.shop.shopid
						})
						 
					}
				})
			}
		}
	}
</script>

<style>
	.flcart {
		display: flex;
		flex-direction: row;
		position: fixed;
		left: 0px;
		right: 0px;
		bottom: 0px;
		font-size: 12px;
		line-height: 1.2;
		border-top: 1px solid #eee;
		background-color: #fff;
		text-align: center;
	}
	
	.flcart-icon:before {
		padding-top: 5px;
		clear: both;
		display: block;
		font-size: 14px;
		line-height: 1.2;
	}
	
	.flcart-f1 {
		width: 50px;
		display: inline-block;
		height: 45px;
		line-height: 22px;
		font-size: 14px;
		color: #646464;
	}
	
	.flcart-f2 {
		margin-top: 8px;
		flex: 1;
		height: 30px;
		line-height: 30px;
		border-radius: 20px;
		background-color: #f90;
		color: #fff;
		font-size: 12px;
		margin-right: 5px;
	}
	
	 
	.kslist {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 10px;
	}
	
	.kslist-label {
		margin-right: 6px;
		color: #646464;
	}
	
	.kslist-item {
		border: 1px solid #eee;
		padding: 4px 8px;
		margin-right: 10px;
	}
	
	.kslist-active {
		color: #007AFF;
	}
	
</style>
