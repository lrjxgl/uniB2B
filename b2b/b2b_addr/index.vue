<template>
	<view>
		<view class="flex pd-10 flex-ai-center bg-white">
			<view class="iconfont icon-location_light"></view>
			<view @click="gourl('city')" class="mgr-5">{{city}}</view>
			<view class="flex-1">
				<view class="header-search-box">
					<view class="header-search-icon icon-search"></view>
					<input  v-model="keyword" @click="searchShow" @input="search" placeholder="请输入收货地址" type="search" class="header-search" />				
					<view @click="aaBoxClass=''" :class="aaBoxClass" class="header-search-close icon-close"></view>
				</view>
			</view>
		</view>
		<view class="row-box flex flex-ai-center ">
			<view>
				{{localAddress}}
			</view>
			<view class="flex-1"></view>
			<view class="flex flex-ai-center" @click="getLocation">
				<view class="iconfont icon-location_light cl-num"></view>
				<view class="cl-num">重新定位</view>
			</view>
		</view>
		<view class="row-box">
			<view class="flex flex-ai-center mgb-10">
				<view class="iconfont icon-home mgr-10"></view>
				<view>我的收货地址</view>
			</view>
			<view class="pdl-20">
				<view @click="setLocation(item.address)" class="bd-mp-10" v-for="(item,index) in addrList" :key="index">
					<view class="mgb-5 f14">{{item.address}}</view>
					<view class="cl2 f12">
						{{item.truename}}
						{{item.telephone}}
					</view>
				</view>
			</view>
		</view>
		
		<view class="row-box" style="margin-top: -20px;">
			<view class="flex flex-ai-center mgb-10">
				<view class="iconfont icon-location_light mgr-10 "></view>
				<view>附近地址</view>
			</view>
			<view class="pdl-20">
				<view @click="setGpsLocal(item)" class="bd-mp-10 flex" v-for="(item,index) in nearList" :key="index">
					<view class="f14 mgb-5 cl1">{{item.name}}</view>
					<view class="flex-1"></view>
					<view class="f12 cl3">{{item.distance}}</view>
					
				</view>
			</view>
		</view>
		<view class="ffBox-row"></view>
		<view @click="gourl('../../pages/user_address/add')" class="ffBox flex-ai-center">
			<view class="flex-1"></view>
			<view class="iconfont icon-add_light cl-num"></view>
			<view class="cl-num">新增收货地址</view>
			<view class="flex-1"></view>
		</view>
		<scroll-view scroll-y="true" class="aaBox" :class="aaBoxClass">
			<view @click="setGpsLocal(item)" v-for="(item,index) in searchList" :key="index" class="flex bd-mp-5">
				<view>
					<view class="f14 mgb-5 cl1">{{item.name}}</view>
					<view class="f12 cl2">{{item.address}}</view>
				</view>
				<view class="flex-1"></view>
				<view class="f12 cl3">{{item.distance}}</view>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data:function(){
			return {
				oldWord:"",
				keyword:"",
				addrList:[],
				localAddress:"",
				aaBoxClass:"",
				searchList:"",
				nearList:"",
				lat:"",
				lng:"",
				city:"厦门",
			}
		},
		onLoad:function(){
			var city=this.app.getCity();
			if(city){
				this.city=city;
			}
			this.userAddrList();
			this.localAddress=this.app.getLocalAddress();
			if(this.localAddress==''){
				this.getLocation();
			}
			
			this.getNearList();
			
		},
		onShow:function(){
			var city=this.app.getCity();
			if(city){
				this.city=city;
			}
		},
		methods:{
			gourl:function(url){
				uni.navigateTo({
					url:url
				})
			},
			searchShow:function(){
				this.aaBoxClass="flex-col";
			},
			search:function(){
				var that=this;
				var latlng=this.app.getGps();
				setTimeout(function(){
					if(that.oldWord!=that.keyword){
						that.oldWord=that.keyword;
						that.app.get({
							url:that.app.apiHost+"/lbs/index&keyword="+that.keyword,
							data:{
								lat:latlng.lat,
								lng:latlng.lng,
								city:that.city
							},
							success:function(res){
								that.searchList=res.data
							}
						}) 
					}
				},10)
				
				
			},
			userAddrList:function(){
				var that=this;
				that.app.get({
					url:that.app.apiHost+"/user_address/my?ajax=1",
					success:function(res){
						that.addrList=res.data.list;
					}
				})
			},
			getNearList:function(){
				var that=this;
				var latlng=this.app.getGps();
				that.app.get({
					url:that.app.apiHost+"/lbs/near?",
					data:{
						lat:latlng.lat,
						lng:latlng.lng,
						city:that.city
					},
					success:function(res){
						that.nearList=res.data
					}
				}) 
			},
			
			setGpsLocal:function(item){
				this.localAddress=item.address;
				this.app.setLocalAddress(item.address);
				this.app.setGps(item.lat,item.lng);
				uni.reLaunch({
					url:"../../pages/index/index"
				});
			},
			setLocation:function(addr){
				this.localAddress=addr;
				this.app.setLocalAddress(addr);
				uni.reLaunch({
					url:"../../pages/index/index"
				});
			},
			getLocation:function(){
				var that=this;
				uni.getLocation({
					type: 'wgs84',
					success: function (res) {
						that.lat=res.latitude;
						that.lng=res.longitude;
					},
					fail:function(e){
						console.log(e)
					}
				});
			}	
		}
	}
</script>

<style>
	.pdl-20{
		padding-left:25px;
	}
	.aaBox{
		display:none;
		position:absolute;
		top:50px;
		left:0px;
		right:0px;
		bottom:0px;
		background-color:#fff;
		padding:10px 20px;
		box-sizing: border-box;
	}
	.header-search-close{
		display:none;
		position:absolute;
		width:30px;
		height:30px;
		right:0px;
		top:0px;
		font-family:iconfont;
		align-items: center;
		 
		flex-direction: row;
		text-align: center;
		justify-content: center;
	}
	.ffBox-row{
		height: 40px;
	}
	.ffBox{
		position: fixed;
		bottom: 0px;
		left: 0;
		right: 0;
		height: 40px;
		display: flex;
		flex-direction: row;
		text-align: center;
		background-color: #eee;
	}
</style>
