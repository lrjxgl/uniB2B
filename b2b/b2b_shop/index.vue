
<template>
	<view>
		<div>
			<div v-if="pageLoad">
				<div @click="goBack" class="header-back-fixed"></div>

				<div @click="favShopToggle(shop.shopid)" :class='shopFavClass' class="header-fav-btn iconfont icon-favor">收藏</div>

				<div class="modal-group" id="header-more-box">
					<div class="modal-mask"></div>
					<div class="header-fixtop-menu">
						<div class="row-item-text pointer">
							<div class="row-item-icon icon-share"></div>分享店铺
						</div>
						<div class="row-item-text pointer">
							<div class="row-item-icon icon-warn_light"></div>举报商家
						</div>
					</div>
				</div>

				<div class="wshop-logo">
					<image model="widthFix" class="wshop-logo-img" :src="shop.imgurl+'.100x100.jpg'"></image>
				</div>
				<div class="wshop mgb-5">

					<div>
						<div class="wshop-shopname">{{shop.shopname}}</div>
						<div class="flex pd-5">
							<div class="btn-coupon" v-for="(c,ic) in couponList" :key="ic">
								{{c.title}}
							</div>
						</div>
						
					</div>

				</div>
				<div id="esDot"></div>
				<div :class="tabClass" class="tabs-border">
					<div @click="page='product'" :class="{'tabs-border-active':page=='product'}" class="tabs-border-item">商品</div>
					<div @click="page='raty'" :class="{'tabs-border-active':page=='raty'}" class="tabs-border-item">评价</div>
					<div @click="page='detail'" :class="{'tabs-border-active':page=='detail'}" class="tabs-border-item">商家</div>
				</div>
				<div id="esDot2"></div>
				<div :class="tabRowClass"></div>
			</div>
			
		</div>
		<div v-if="page=='product'">
			<shop-index :shopid="shopid"></shop-index>
		</div>
		<div v-else-if="page=='raty'">
			<shop-raty :shopid="shopid"></shop-raty>		
		</div>
		<div v-else>
			<shop-detail :shopid="shopid"></shop-detail>
		</div>
	</view>
</template>

<script>
	import shopIndex from "../../components/shop/shop-product.vue";
	import shopRaty from "../../components/shop/shop-raty.vue";
	import shopDetail from "../../components/shop/shop-detail.vue";
	var shopid = 0;
	import {mapState,mapMutations} from 'vuex'
	export default {
		components: {
			shopIndex,
			shopRaty,
			shopDetail
		},
		data: function() {
			return {
				page: "product",
				pageLoad: false,
				list: {},
				shopid: 0,
				shop: {},

				shopFavClass: "",
				tabClass: "",
				tabRowClass: "",
				couponList:[]
			}
		},
		onLoad: function(ops) {
			var that=this;
			shopid = this.shopid=ops.shopid;
			if (this.shopid != 0) {
				this.page = "product";
			}
			this.getPage();
			 
		},
		onPageScroll: function(e) {
			var that = this;
			this.$store.commit("setScrollTop",e.scrollTop);
			if(e.scrollTop>this.esTop){
				this.tabClass="tabClass";
				this.tabRowClass="tabRowClass";
			}else{
				this.tabClass="";
				this.tabRowClass="";
			}
		},
		computed:{
			...mapState({
			  scrollTop: state => state.scrollTop,
			  esTop:state=>state.esTop,
			  esTop2:state=>state.esTop2,
			})
		},
		methods: {
			goBack: function() {
				this.app.goBack();
			},
			 
			getPage: function() {
				var that = this;
				that.app.get({
					dataType: "json",
					url: that.app.apiHost + "/b2b_shop/index?ajax=1",
					data:{
						shopid:this.shopid
					},
					success: function(res) {
						that.shop = res.data.shop;
						that.pageLoad = true;
						that.isFav = res.data.isfav;
						that.couponList=res.data.couponList;
						if(res.data.isfav){
							that.shopFavClass="btn-fav-active"
						}
						setTimeout(function() {
							
							// #ifdef H5
							var esTop = document.getElementById("esDot").offsetTop;
							that.$store.commit("setEsTop",esTop);
							var esTop2 = document.getElementById("esDot2").offsetTop;
							that.$store.commit("setEsTop2",esTop2);
							// #endif	
							// #ifndef H5
							const query = uni.createSelectorQuery().in(that);
							query.select('#esDot').boundingClientRect(res => {
								var esTop = res.top;
								console.log(esTop);
								that.$store.commit("setEsTop",esTop);
							}).exec();
							query.select('#esDot2').boundingClientRect(res => {
								var esTop = res.top;
							 
								that.$store.commit("setEsTop2",esTop);
							}).exec();
							// #endif
						}, 300) 
					}
				})
			},
			 
			goGuest: function() {
				uni.navigateTo({
					url: "../b2b_guest/user?shopid=" + shopid
				})

			}, 
			
			favShopToggle: function(shopid) {
				var that = this;
				that.app.get({
					url: that.app.apiHost + "/fav/toggle?ajax=1",
					data: {
						tablename: "mod_b2b_shop",
						objectid: shopid
					},
					dataType: "json",
					success: function(res) {
						if (res.error) {
							skyToast(res.message)
						}

						if (res.data == "add") {
							that.shopFavClass = 'btn-fav-active';
						} else {
							that.shopFavClass = '';
						}
					}
				})
			},
			 
		}
	}
</script>

<style>
	.header-back-fixed {
		color: #fff;
		width: 30px;
		height: 30px;
		line-height: 30px;
	}

	.header-fixtop-menu {
		position: absolute;
		top: 40px;
		border-radius: 10px;
		right: 5px;
		width: 100px;
		z-index: 999;
		background-color: #fff;
	}

	.header-fav-btn {
		position: absolute;
		top: 5px;
		right: 5px;
		display: flex;
		flex-direction: row;
		font-size: 14px;
		padding: 5px;
		color: #666;
	}

	.header-fav-btn:before {
		font-size: 14px;
		color: #666;
	}

	.btn-fav-active,
	.btn-fav-active::before {
		color: #FFC107;
	}
	
	.wshop {
		background-color: #fff;
		padding-top: 20px;
		padding-bottom: 10px;
	}

	.wshop-logo {
		height: 60px;
		background-color: #0099a8;
		text-align: center;
	}

	.wshop-logo-img {
		width: 50px;
		height: 50px;
		margin: 0 auto;
		position: relative;
		top: 25px;
		border-radius: 10px;
	}

	.wshop-shopname {
		color: #323232;
		margin-bottom: 5px;
		position: relative;
		font-size: 16px;
		text-align: center;
	}

	.wshop-welcome {
		color: #fff;
		font-size: 14px;
	}

	.btn-service {
		display: flex;
		flex-direction: row;
		font-family: iconfont;
		cursor: pointer;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0 10px;
		border: 1px solid #aaa;
		font-size: 14px;
		height: 26px;
		border-color: #e30;
		color: #e30;
		border-radius: 5px;
	}

	.btn-fav {
		height: 28px;

		border-radius: 5px;
	}

	.btn-service:before {
		font-family: iconfont;
		content: "\e7e6";
		font-size: 14px;
		margin-right: 3px;
	}
	.btn-coupon{
		padding: 3px 5px;
		border: 1px solid #F1C40F;
		border-radius: 5px;
		color: #323232;
		font-size: 12px;
		line-height: 1;
		margin-right: 5px;
	}
	.rp-list {
		overflow: hidden;

	}

	.rp-item {
		width: 30%;
		padding-right: 2px;
		box-sizing: border-box;

	}

	

	.tabClass {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}

	.tabRowClass {
		height: 46px;
	}

	.sideClass {
		position: fixed;
		top: 44px;
		left: 0;
		right: 0;
		bottom: 50px;
	}
</style>
