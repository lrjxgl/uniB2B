<template>
	<view v-if="pageLoad">
		<view class="tabs-border">
			<view @click="setTable('mod_b2b_shop')" :class="tablename=='mod_b2b_shop'?' tabs-border-active':''" class="tabs-border-item">店铺</view>
			<view @click="setTable('mod_b2b_product')" :class="tablename=='mod_b2b_product'?' tabs-border-active':''"  class="tabs-border-item">产品</view>
			 
		</view>
		<view v-if="pageData.list.length==0">
			<view class="emptyData">暂无收藏</view>
		</view>
		<view v-else>
			<view v-for="(item,key) in pageData.list" :key="key">
				<view v-if="tablename=='mod_b2b_product'">
					<view @click="goProduct(item.id,item.shopid)" class="row-item bg-fff">
						<view class="flex-1">
						<view class="cl1 f18">{{item.title}}</view> 
						<view class="cl2">{{item.description}}</view>
						</view>
					</view>
				</view>	
				 
				<view v-else-if="tablename=='mod_b2b_shop'">
					<view @click="goShop(item.shopid)" class="row-item bg-fff">
						<view class="flex-1">
						<view class="cl1 f18">{{item.shopname}}</view> 
						 
						</view>
					</view>
				</view> 
			</view>
		</view>

	</view>
</template>

<script>
	 
 

	export default {

		data: function() {
			return {
				pageLoad: false,
				pageData: {},
				tablename: "mod_b2b_shop"
			}
		},
		onLoad: function(option) {

			uni.setNavigationBarTitle({
				title: '我的收藏'
			});
			this.getPage();
		},
		onReachBottom: function() {
			this.getList();
		},
		onPullDownRefresh: function() {
			this.refresh();
		},
		methods: {
			getPage: function() {
				var that = this;
				that.app.get({
					url: that.app.apiHost + "/fav/mylist?ajax=1",
					data: {
						tablename: that.tablename
					},
					success: function(res) {
						isfirst = false;
						that.pageData = res.data;
						that.pageLoad = true;
						per_page = res.data.per_page;
					}
				})
			},

			getList: function() {
				var that = this;
				if (!isfirst && per_page == 0) return false;
				that.app.get({
					url: that.app.apiHost + "/fav/mylist?ajax=1",
					data: {
						per_page: per_page,
						tablename: that.tablename
					},
					success: function(res) {

						if (!res.error) {
							if (isfirst) {
								that.pageData.list = res.data.list;
								isfirst = false;
							} else {

								that.pageData.list = that.app.json_add(that.pageData.list, res.data.list);
							}
							per_page = res.data.per_page;

						}


					}
				})
			},
			 
			goProduct: function(id,shopid) {
				uni.navigateTo({
					url: "../b2b_product/show?id=" + id+"&shopid="+shopid
				})
			},
			goShop: function(shopid) {
				uni.navigateTo({
					url: "../b2b_shop/index?shopid=" + shopid
				})
			},
			refresh: function() {
				this.getPage();
				setTimeout(function() {
					uni.stopPullDownRefresh();
				}, 1000)
			},
			loadMore: function() {
				this.getList();
			},
			setTable:function(tablename){
				this.tablename=tablename;
				isfirst=true;
				per_page=0;
				this.getList();
			}
		},
	}
</script>

<style>


</style>
