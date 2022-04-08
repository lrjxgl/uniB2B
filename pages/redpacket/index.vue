<template>
	<view>
		<view class="redpacket-box">
			<view class="flex mgb-20">
				<view class="flex-1">
					<view class="fb7">美食红包</view>
					<view class="f12 cl2">有效期自2019.08.31</view>
				</view>
				<view>
					<view class="flex flex-ai-end">
						<view class="cl-money f14">￥</view>
						<view class="cl-money f30">7</view>
					</view>
					<view class="f12 cl2">满25可用</view>
				</view>
			</view>
			<view class="bd-mp-5"></view>
			<view class="redpacket-box-ft">限非到店自取订单，下午茶、夜宵、美食、蛋糕、水果</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.f30{
		font-size:30px;
		line-height:1;
	}
	.fb7{
		color:#fb7f78;
		font-size:16px;
		margin-bottom:5px;
	}
	.redpacket-box{
		margin: 10px;
		border-radius: 20px;
		background-color: #fff;
		padding: 10px;
	}
	.redpacket-box-ft{
		height:20px;
		font-size:14px;
		color:#969696;
		white-space: nowrap;
		text-overflow: ellipsis;
		transform: scale(0.7);
		transform-origin: 0;
		
	}
</style>
