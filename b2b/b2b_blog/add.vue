<template>
	<view>
		<view v-if="pageLoad">
			<view class="main-body">
				<form  @submit="formSubmit"  >
					 
					 
					<view class="textarea-flex">
					 
						<textarea name="content" class="h100 textarea-flex-text"></textarea>
					</view>
					<upimg-box></upimg-box>
					<button formType="submit" class="btn-row-submit">提交</button>
				</form>
			</view>
		</view>
	</view>
</template>

<script>
	import pickergroup from "../../components/pickergroup.vue";
	import upimgBox from "../../components/upimgbox.vue";
	 
	var id;
	export default {
		components:{
			pickergroup,
			upimgBox
		},
		data:function(){
			return {
				pageLoad:false, 
				pageHide:false,
				pageData:{},
			}
			
		},
		onLoad: function (option) {
			id = option.id;
			this.getPage();
		},
		onReady: function () {
			uni.setNavigationBarTitle({
				title: "发布微贴",
			})
		},
		methods: {
			
			getPage: function () {
				var that = this;
				that.app.get({
					url: that.app.apiHost + "/b2b_blog/index?a=add",
					success: function (res) {
						if(res.error==1000){
							that.app.goLogin();
							return false;
						}
						that.pageLoad = true;
						that.pageData = res.data;

					}
				})
			},
			
			formSubmit:function(e){
				that.app.post({
					url:app.apiHost+"/b2b_blog/save?ajax=1",
					data:e.detail.value,
					success:function(res){
						uni.showToast({
							title: res.message,
							duration: 2000
						});
						if(!res.error){
							uni.navigateBack({
								delta: 2
							});
						}
					}
				})
			}
		},
	}
</script>

<style>

</style>
