<template>
	<view>
		<view class="row-box mg-10 bd-radius-10 ">
			<view class="flex flex-center mgb-20 mgt-10">
				<view class="iconfont icon-squarecheck cl-red f36 mgr-5"></view>
				<view class="">
					<view class="f18">恭喜下单成功</view>
					<view class="f14">感谢您的下单！</view>
				</view>
			</view>
			<view class="flex flex-jc-center  mgb-20">
				 
				<view class="btn btn-primary" @click="goHome">返回首页</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			goHome:function(){
				this.app.goHome();
			}
		}
	}
</script>

<style>
</style>
