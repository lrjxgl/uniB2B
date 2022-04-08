<template>
	<view>
		<view v-if="pageLoad" class="list" id="app">
			 
			<view v-for="(item,index) in pageData.list" :key="index" class="bg-white pd-10">
				 
				<view class="flex" v-if="item.author=='user'">
					<img :src="item.user_head+'.100x100.jpg'" class="wh-40 mgr-10" />
					
					<view class="flex-1">
						<view class="flex mgb-5">
							<view class="cl2 flex-1">{{item.nickname}}</view>
							<view class="cl3 f12">{{item.timeago}}</view>
						</view>
						<view class="cl3">{{item.content}}</view>
					</view>
				</view>
				<view class="flex" v-else>
				<view class="flex-1"></view>
				<view class="w200">
					
					<view class="cl2 mgb-5 flex">
						<view class="flex-1"></view>
						{{pageData.shop.shopname}}
					</view>
					<view class="cl3">{{item.content}}</view>
				</view>
			 
				<img :src="pageData.shop.imgurl+'.100x100.jpg'" class="wh-40 mgl-10" />
				</view>
			</view>
			 
		</view>
		<view class="footer-row"></view>
		<view style="position: fixed;bottom: 0;left: 0;right: 0;">
			<view class="input-flex">
				<input type="text" v-model="content" id="content" class="input-flex-text" />
				<view class="input-flex-btn" @click="submit">发送</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default({
		 
		data:function(){
			return {
				pageLoad:false,
				pageData:[],
				content:"",
				shopid:0,
				id:0
			}
		},
		onLoad:function(ops){
			this.shopid=ops.shopid;
			this.id=ops.id;
			this.getPage();
		},
		methods:{
			getPage:function(){
				var that=this;
				that.app.get({
					url:that.app.apiHost+"/b2b_guest/b2b?ajax=1",
					data:{
						shopid:this.shopid,
						id:this.id
					},
					dataType:"json",
					success:function(res){
						that.pageLoad=true;
						that.pageData=res.data
						console.log(res.data);
					}
				})
			},
			submit:function(){
				var that=this;
				this.app.post({
					url:this.app.apiHost+"/b2b_guest/save?ajax=1",
					data:{
						content:that.content,
						shopid:this.shopid,
						id:this.id
					},
					success:function(res){
						that.content="";
						that.getPage();
					}
				})
			}
		}
	})
</script>

<style>
</style>
