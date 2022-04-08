<template>
	<view>
		<view id="app">
			<view class="tabs-border">
				<view @click="setType('all')" v-bind:class="{'tabs-border-active':type=='all'}" class="tabs-border-item ">全部</view>
				<view @click="setType('unpay')"  v-bind:class="{'tabs-border-active':type=='unpay'}" class="tabs-border-item">待付款</view>
				<view @click="setType('unsend')"  v-bind:class="{'tabs-border-active':type=='unsend'}" class="tabs-border-item">待发货</view>
				<view @click="setType('unreceive')"  v-bind:class="{'tabs-border-active':type=='unreceive'}" class="tabs-border-item">待收货</view>
				<view @click="setType('unraty')"  v-bind:class="{'tabs-border-active':type=='unraty'}" class="tabs-border-item">待评价</view>
			</view>
			<view class="item row-box mgb-10" v-for="(item,index) in  list" :key="index">
				<view class="flex bd-mp-5 flex-ai-center">
					<img @click="goShop(item.shop.shopid)" :src="item.shop.imgurl+'.100x100.jpg'" class="wh-40 mgr-5" />
					<view class="flex-1">{{item.shop.shopname}}</view>
					<view @click="goGuest(item.shop.shopid)" class="btn-round wh-30 btn-icon icon-service_light flex-c"></view>
				</view>
				<view class="flex bd-mp-5">
					<view class="flex-1 cl2">订单号：{{item.orderno}}</view>
					<view class="cl-primary">{{item.status_name}}</view>
				</view>
				<view class="flexlist-item" v-for="(pro,proIndex) in item.prolist" :key="proIndex">
					<img class="flexlist-img" :src="pro.imgurl+'.100x100.jpg'">
					<view class="flex-1">
						<view class="flexlist-title">{{pro.title}}</view>
						<view class="flexlist-ks">{{pro.ks_title}}</view>
						<view class="flex ">
							<view class="flex-1 cl-money">￥{{pro.price}}</view>
							<view class="cl3">x {{pro.amount}}</view>
						</view>
						
					</view>
				</view>
				 
				<view class="flex mgb-10">
					 共<view class="cl-num">{{item.total_num}}</view>件商品  
					 合计：<view class="cl-money">￥{{item.money}}</view>元 
					 <view class="flex-1"></view> 
					 
				</view>
				<view v-if="item.status==0" class="flex flex-jc-end">
					
					<view v-if="item.ispay==0" @click="pay(item.orderid)" class="btn-small btn-outline-danger mgr-10">去支付</view>
					<view class="btn-small  btn-outline-danger" @click="goOrder(item.orderid)">查看详情</view>
				</view>
				<view v-else-if="item.status==1" class="flex flex-jc-end">
					<view class="btn-small  btn-outline-danger" @click="goOrder(item.orderid)">查看详情</view>
				</view>
				<view v-else-if="item.status==2" class="flex flex-jc-end">
					<view class="btn-small  btn-outline-danger" @click="goOrder(item.orderid)">查看详情</view>
				</view>
				<view v-else-if="item.status==3" class="flex flex-jc-end">
					<view class="btn-small  btn-outline-danger" @click="goOrder(item.orderid)">查看详情</view>
				</view>	
			</view>
		</view>
		 
	</view>
</template>

<script>
	import b2bFooter from "../../components/b2bfooter.vue";
	export default{
		components:{
			b2bFooter			
		},
		data:function(){
			return {
				pageData:[],
				type:"all",
				list:[],
				isFirst:true,
				per_page:0
			}
		},
		onLoad:function(ops){
			uni.setNavigationBarTitle({
				title:"我的订单"
			})
			if(ops.type!=undefined){
				this.type=ops.type;
			}
			this.getPage();
		},
		onReachBottom:function(){
			this.getList();
		},
		methods:{
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
			getPage:function(){
				var that=this;
				that.app.get({
					url:that.app.apiHost+"/b2b_order/my?ajax=1",
					data:{
						type:that.type
					},
					dataType:"json",
					success:function(res){
						that.list=res.data.list;
						that.per_page=res.data.per_page;
						that.isFirst=false;
					}
				})
			},
			getList:function(){
				var that=this;
				if(that.per_page==0 && !that.isFirst){
					return false;
				}
				that.app.get({
					url:that.app.apiHost+"/b2b_order/my?ajax=1",
					data:{
						type:that.type,
						per_page:that.per_page
					},
					dataType:"json",
					success:function(res){
						if(that.isFirst){
							that.list=res.data.list;
							that.isFirst=false;
						}else{
							for(var i in res.data.list){
								that.list.push(res.data.list[i])
							}
						}
						that.per_page=res.data.per_page;
						
					}
				})
			},
			goOrder:function(orderid){
				uni.navigateTo({
					url:"../b2b_order/show?orderid="+orderid
				})
			},
			setType:function(t){
				this.type=t;
				this.isFirst=true;
				this.per_page=0;
				this.getPage();
			},
			pay:function(orderid){
				uni.navigateTo({
					url:"../b2b_order/pay?orderid="+orderid
				})
			}
		}
	}
</script>

<style>
</style>
