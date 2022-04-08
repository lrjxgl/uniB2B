<template>
	<view>
		<div class="row-box">
			<div class="row-item-text ">
				<div class="row-item-icon icon-location_light"></div>
				<div class="cl2 mgr-5">地址：</div>
				<div class="flex-1">{{shop.address}}</div>
			</div>
			<div class="row-item-text ">
				<div class="row-item-icon icon-time"></div>
				<div class="cl2 mgr-5">营业时间：</div>
				<div class="flex-1"> {{shop.yystart}}-{{shop.yyend}}</div>
			</div>
			 
			<div v-for="(cert,certIndex) in certList" :key="certIndex" class="row-item">
				<div @click="showPic(0,cert.imgslist)" class="row-item-title">{{cert.title}}</div>
				
			</div>
			 
			<div class="row-item-text ">
				<div class="row-item-icon icon-read"></div>
				<div class="flex-1">公司简介</div>
			</div>
			<div class="pdl-10 pdr-10">
				<rich-text v-if="shop.content!=null" :nodes="shop.content"></rich-text>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		props: {
			shopid: 0
		},
		data: function() {
			return {
				shop: {},
				certList: []
			}
		},
		created: function() {
			if(this.shopid!=0){
				this.getPage();
			}
		},
		watch:{
			shopid:function(n,o){
				this.getPage();
			}
		},
		methods: {
			showPic:function(index,list){
				var olist=[];
				for(var i in list){
					olist.push(list+".middle.jpg");
				}
				uni.previewImage({
					current:index,
					urls:olist
				})
			},
			getPage: function() {
				var that = this;
				that.app.get({
				 
					url: that.app.apiHost+"/b2b_shop/detail?shopid=" + this.shopid,
					success: function(res) {
						that.shop = res.data.shop;
						that.certList = res.data.certList;
					}
				})
			}
		}
	}
</script>

<style>
</style>
