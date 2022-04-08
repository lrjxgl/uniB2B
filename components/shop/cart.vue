<template>
	<view>
		<view class="fixCartBox-bg pointer"  @click="close" ></view>
		<scroll-view scroll-y="true" class="fixCartBox">
			<view class="flex">
				<view class="flex-1"></view>
				<view @click="close" class="pd-5 pointer">关闭</view>
			</view>
			<view class="flexlist">
				<view class="flexlist-item" v-for="(item,index) in list" :key="index">
					<image :src="item.imgurl+'.100x100.jpg'" mode="widthFix" class="flexlist-img"></image>
					<view class="flex-1">
						<view class="flexlist-title">{{item.title}}</view>
						<view class="flexlist-row">
							<view class="">{{item.ks_title}}</view>
							<view class="cl-money">
								￥{{item.price}}
							</view>
							<view class="flex-1"></view>
							<view class="numbox">
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
					共{{total_num}}件，总{{total_money}}元
				</view>

			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			shopid: 0
		},
		data: function() {
			return {
				list: [],
				total_num: 0,
				total_money: 0
			}
		},
		watch:{
			shopid:function(n,o){
				this.getPage();
			},
			show:function(n,o){
				if(n==true){
					this.getPage();
				}
			}
		},
		created: function() {
			if(this.shopid){
				this.getPage();
			}
			
		},
		methods: {
			close:function(){
				this.$emit("call-parent",{action:"close"})
			},
			getPage: function() {
				var that = this;
				that.app.get({
					url: that.app.apiHost + "/b2b_cart/getbyshop?ajax=1",
					unLogin: true,
					data: {
						shopid: this.shopid
					},
					success: function(res) {
						if (res.error) {
							return false;
						}
						that.list = res.data.list;
						that.total_num = res.data.total_num;
						that.total_money = res.data.total_money;
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
					url: that.app.apiHost + '/b2b_cart/add?ajax=1',
					data: {
						productid: productid,
						amount: amount,
						ksid: ksid,
						 
					},
					success: function(res) {
						that.$emit("call-parent",{action:"update"})
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
					url: that.app.apiHost + '/b2b_cart/add?ajax=1',
					data: {
						productid: productid,
						amount: amount,
						ksid: ksid,
						isdelete: isdelete
					},
					success: function(res) {
						that.$emit("call-parent",{action:"update"})
						that.getPage();
					}
				})
			},
		}
	}
</script>

<style>
	.fixCartBox-bg {
		background-color: #efefef;
		position: fixed;
		z-index: 9;
		opacity: 0.6;
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
	}

	.fixCartBox {
		background-color: #fff;
		position: fixed;
		z-index: 99;
		
		bottom: 60px;
		top: 100px;
		left: 5px;
		right: 5px;
		border-radius: 5px;
		padding: 5px;
		box-sizing: border-box;
	}
</style>
