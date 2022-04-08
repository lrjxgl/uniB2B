<template>
	<view>
		<view class="main-body" id="app" v-if="pageLoad">
			 
			<view  class="sglist">
				 
				<view v-for="(item,index) in pageData.list" :key="index"  class="sglist-item">
					
					<view @click="goBlog(item.id)" class="sglist-title">{{item.content}}</view>
					<view @click="goBlog(item.id)" class="sglist-imglist">
						 
						<img v-for="(img,imgIndex) in item.imgslist" :key="imgIndex" :src="img+'.100x100.jpg'" class="sglist-imglist-img" />
						
					</view>
					<view class="sglist-ft">
						<view class="sglist-ft-love">{{item.love_num}}</view>
						<view class="sglist-ft-cm">{{item.comment_num}}</view>
						<view class="sglist-ft-view">{{item.view_num}}</view>
						<view @click="del(item.id)" class="flex-1 cl-danger iconfont pointer icon-delete"></view>
					</view>
					
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default({
		 
		data:function(){
			return {
				pageData:{},
				pageLoad:false
			}
		},
		created:function(){
			this.getPage();
		},
		methods:{
	 
			goBlog:function(id){
				uni.navigateTo({
					url:"../b2b_blog/show?id="+id
				})
			},
			del:function(id){
				var that=this;
				if(confirm("删除后不可恢复，确认删除吗？")){
					that.app.get({
						url:that.app.apiHost+"/b2b_blog/delete?id="+id,
					
						dataType:"json",
						success:function(res){
							var list=that.pageData.list;
							var newlist=[];
							for(var i=0;i<list.length;i++){
								if(list[i].id!=id){
									newlist.push(list[i]);
								}
							}
							that.pageData.list=newlist;
							 
						}
					})
				}
				
			},
			getPage:function(){
				var that=this;
				that.app.get({
					url:that.app.apiHost+"/b2b_blog/my?ajax=1",
					
					dataType:"json",
					success:function(res){
						that.pageLoad=true;
						that.pageData=res.data;
					}
				})
			}
		}
	})
</script>

<style>
</style>
