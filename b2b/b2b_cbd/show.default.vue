<template>
	<view class="pdt-5">
		<view v-if="!pageLoad">
			<page-loading></page-loading>
		</view>
		<view v-if="pageLoad" class="flexlist">
			<view v-for="(item,index) in pageData.list" :key="index" @click="goShop(item.shopid)" class="flexlist-item">
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
				
			</view>
		</view>
	</view>
</template>

<script>
	import skyRaty from "../../components/skyraty.vue";
	export default{
		components:{
			skyRaty
		},
		data:function(){
			return {
				pageData:{},
				pageLoad:false,
				cbdid:0
			}
		},
		onLoad:function(ops){
			this.cbdid=ops.cbdid;
			this.getPage();
		},
		methods:{
			goShop:function(shopid){
				uni.navigateTo({
					url:"../b2b_shop/index?shopid="+shopid
				})
			},
			getPage:function(){
				var that=this;
				this.app.get({
					url:this.app.apiHost+"/b2b_cbd/show?cbdid="+this.cbdid,
					success:function(res){
						uni.setNavigationBarTitle({
							title:res.data.cbd.title
						})
						that.pageData=res.data;
						that.pageLoad=true;
					}
				})
			}
		}
	}
</script>

<style>
</style>
