<template>
	<view>
		<view v-if="!pageLoad">
			<page-loading></page-loading>
		</view>
		<view v-else>
			<view class="pd-5">
				<view class="flex">
					<image :src="site.logo" mode="widthFix" class="wh-30 mgr-5"></image>
					<input placeholder="老白茶、2008银针" v-model="keyword" type="text" class="header-search pdl-5">
					<view @click="search" class="header-search-btn  iconfont icon-search"></view>
				</view>
			</view>
			<view >
				<swiper :style="{height:swiperHeight+'px'}" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="(item,key) in flashList" :key="key">
						<view class="swiper-item">
							<image @click="gourl(item.link1)" :src="item.imgurl" style="width:100%" mode="widthFix"></image>
						</view>
					</swiper-item>
				
				</swiper>
			</view>
			<view class="m-navPic mgt-5 mgb-5">
				<navigator v-for="(item,key) in  navList" :key="key" :url="item.link1" class="m-navPic-item">
					<image class="m-navPic-img" mode="widthFix" :src="item.imgurl"></image>
					<view class="m-navPic-title">{{item.title}}</view>
				</navigator>

			</view>
			
			<div @click="gourl('/b2b/b2b_shoplist/index')" class="row-box-hd  pdl-10">
				<div class="flex-1 f16">商家推荐</div>
				<div  class="row-box-more">更多</div>
			</div> 
			<shop-item :shoplist="recShop"></shop-item>
			<div @click="gourl('/b2b/b2b_group_product/index?gkey=recommend')" class="row-box-hd  pdl-10">
				<div class="iconfont mgr-10 icon-moneybag cl-f30 f20"></div>
				<div class="flex-1 ">
					<div class="f14">猜你喜欢</div>
					<div class="cl3 f12">Guess You Like It</div>
				</div>
				<div class="row-box-more"></div>
			</div>
			<view class="mtlist">

				<view v-for="(item,index) in  recList" :key="index" @click="goProduct(item.id)" class="mtlist-item">
					<view class="mtlist-item-bd">
						<image mode="widthFix" class="mtlist-img " :src="item.imgurl+'.small.jpg'"></image>
						<view class="mtlist-item-pd">
							<view class="mtlist-item-money">
								<view class="mtlist-item-money-flex">￥
									<text class="mtlist-item-money_money">{{item.price}}</text>
								</view>
								<view class="mtlist-item-money_num">月销{{item.buy_num}}件</view>
							</view>
							<view class="mtlist-title">{{item.title}}</view>

						</view>
					</view>
				</view>

			</view>

			<div @click="gourl('/b2b/b2b_group_product/index?gkey=hot')" class="row-box-hd  pdl-10 mtt10">
				<div class="iconfont mgr-10 icon-hot_light cl-f30 f20"></div>
				<div class="flex-1 ">
					<div class="f14">热销商品</div>
					<div class="cl3 f12">Hot Goods</div>
				</div>
				<div class="row-box-more"></div>
			</div>
			<view class="mtlist">

				<view v-for="(item,index) in  hotList" :key="index" @click="goProduct(item.id)" class="mtlist-item">
					<view class="mtlist-item-bd">
						<image mode="widthFix" class="mtlist-img " :src="item.imgurl+'.small.jpg'"></image>
						<view class="mtlist-item-pd">
							<view class="mtlist-item-money">
								<view class="mtlist-item-money-flex">￥
									<text class="mtlist-item-money_money">{{item.price}}</text>
								</view>
								<view class="mtlist-item-money_num">月销{{item.buy_num}}件</view>
							</view>
							<view class="mtlist-title">{{item.title}}</view>

						</view>
					</view>
				</view>

			</view>
		</view>
		<b2b-footer tab="index"></b2b-footer>
	</view>

</template>

<script>
	var cacheKey = "index_index";
	import b2bFooter from "../../components/b2bfooter.vue";
	import shopItem from "../../components/shop-item.vue";
	export default {
		components: {
			b2bFooter,
			shopItem
		},
		data() {
			return {
				flashList:[],
				navList:[],
				adList:[],
				pageLoad: false,
				keyword: "",
				site:{},
				recList:[],
				hotList:[],
				bmList:[],
				recShop:[],
				swiperHeight: 200
			}
		},
		onLoad: function(ops) {
			var sys=uni.getSystemInfoSync();
			 
			this.swiperHeight=Math.min(640,sys.windowWidth)/2;
			this.getPage();
			this.getSite();
		},
		
		onPullDownRefresh: function() {
			this.refresh();
		},
		onShareAppMessage:function(){
			
		},
		methods: {
			getSite:function(){
				var that=this;
				that.app.get({
					url:that.app.apiHost+"/site/index",
					success:function(res){
						that.site=res.data.site;
					}
				})
			},
			gourl: function(url) {
				uni.navigateTo({
					url: url
				})
			},
			search: function() {
				uni.navigateTo({
					url: "../../b2b/b2b_search/index?keyword=" + this.keyword
				})
			},
			goProduct: function(id) {
				uni.navigateTo({
					url: "../../b2b/b2b_product/show?id=" + id
				})
			},
			getPage: function() {
				var that = this;
				that.app.get({
					url: this.app.apiHost + "/b2b/index?ajax=1",
					success: function(res) {
						that.hotList=res.data.hotList;
						that.recList=res.data.recList;
						that.recShop=res.data.recShop;
						that.flashList=res.data.flashList;
						that.navList=res.data.navList;
						that.pageLoad = true;
					}
				})
			},
			refresh: function() {
				this.getPage();
				setTimeout(function() {
					uni.stopPullDownRefresh();
				}, 1000)
			},
		}
	}
</script>

<style>
 
</style>
