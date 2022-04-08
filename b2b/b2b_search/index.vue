<template>
	<view>
		<view id="app" >
			<view class="tabs-border-group">
				<view class="tabs-border">
					<view @click="setPage('product')" :class="{'tabs-border-active':page=='product'}" class="tabs-border-item">产品</view>
					<view @click="setPage('shop')" :class="{'tabs-border-active':page=='shop'}" class="tabs-border-item">商家</view>
				</view>
			</view>
			<view class="flex pd-5 bg-white mgb-5">
				<input class="input-flex-text bd-radius-10 outline-none" v-model="keyword"   id="keyword" />
				<view class="input-flex-btn w60" @click="search">搜一下</view>
			</view>
			<view v-if="pageLoad">
			<view class="mtlist" v-if="page=='product'">
				<view class="mtlist-item" v-for="(item,index) in pageData.list" :key="index">	 
					<view class="mtlist-item-bd">
						<view class="mtlist-imgbox" @click="goProduct(item.shopid,item.id)">
							<image mode="widthFix" class="mtlist-img" :src="item.imgurl+'.small.jpg'"></image>
						</view>
						<view class="mtlist-item-pd">
							<view class="mtlist-item-money">
								<view class="flex flex-1 flex-ai-center">
									<view class="cl-money f12">￥</view>
									<view class="cl-money f22">{{item.price}}</view>
								</view>
								<view class="mtlist-item-money_num">月销{{item.buy_num}}件</view>
							</view>
							<view class="mtlist-title">{{item.title}}</view>
							 
						</view>
					</view>						
				</view>
			</view>
			<view v-if="page=='shop'">
				<view @click="goShop(item.shopid)" v-for="(item,index) in pageData.list" :key="index" class="flexlist-item">
					<img :src="item.imgurl+'.100x100.jpg'" class="flexlist-img bd-radius-50" />
					<view class="flex-1">
						<view class="flexlist-title">{{item.shopname}}</view>
						<sky-raty len="5" mod="2" readonly="1" :grade="item.raty_grade" label="评价"></sky-raty>
						<view class="flex" v-if="item.prolist">
							<view v-for="(p,pindex) in item.prolist" :key="pindex" class="mgr-5">
								<img :src="p.imgurl+'.100x100.jpg'" class="wh-60 mgb-5" />
								 
							</view>
						</view>
					</view>
					
					<view v-if="item.distance>0" class="cl3 f12">距您{{item.distance}}Km</view>
				</view>
			</view>
			</view>
		</view>
	</view>
</template>

<script>
	import skyRaty from "../../components/skyraty.vue";
	export default({
		components:{
			skyRaty
		},
		data:function(){
			return {
				pageLoad:false,
				pageData:{},
				keyword:"",
				page:"product"
			}
		},
		onLoad:function(ops){
			this.keyword=ops.keyword;
			this.getPage();
		},
		methods:{
			goProduct:function(shopid,id){
				uni.navigateTo({
					url:"../b2b_product/show?shopid="+shopid+"&id="+id
				})
				 
			},
			goShop:function(shopid){
				
			},
			search:function(){
				this.getPage();
			},
			setPage:function(page){
				this.page=page;
				this.pageLoad=false;
				this.pageData={};
				this.getPage();
			},
			getPage:function(){
				if(this.page=="product"){
					this.getProduct();
				}else{
					this.getShop();
				}
			},
			getShop:function(){
				var that=this;
				this.app.get({
					url:that.app.apiHost+"/b2b_search/shop?ajax=1",
					data:{
						keyword:this.keyword
					},
					dataType:"json",
					success:function(res){
						that.pageLoad=true;
						that.pageData=res.data;
					}
				})
			},
			getProduct:function(){
				var that=this;
				this.app.get({
					url:that.app.apiHost+"/b2b_search/product?ajax=1",
					data:{
						keyword:this.keyword
					},
					dataType:"json",
					success:function(res){
						that.pageLoad=true;
						that.pageData=res.data;
					}
				})
			}
		}
	});
</script>

<style>
</style>
