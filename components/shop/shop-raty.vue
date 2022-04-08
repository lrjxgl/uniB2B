<template>
	<div>
		<div v-if="list.length==0" class="emptyData">暂无评价</div>
		<div v-else>
			<div class="flexlist-item flex-ai-center">
				<img class="flexlist-img" :src="shop.imgurl+'.100x100.jpg'" />
				<div class="flex-1">

					<sky-raty len="10" groupclass="mgb-5" label="综合" readonly="1" :grade="shop.raty_grade"></sky-raty>
					<sky-raty len="10" groupclass="mgb-5" label="产品" readonly="1" :grade="shop.raty_grade_product"></sky-raty>
					<sky-raty len="10" groupclass="mgb-5" label="物流" readonly="1" :grade="shop.raty_grade_express"></sky-raty>
				</div>
			</div>
			<div v-for="(item,index) in list" :key="index" class="bg-white pd-10 flex mgb-5">
				<img class="wh-60 mgr-10" :src="item.user_head+'.100x100.jpg'">
				<div class="flex-1">
					<div class="flex mgb-5">
						<div class="flex-1">{{item.nickname}}</div>
						<div class="cl3"> {{item.timeago}}</div>
					</div>
					<sky-raty len="10" readonly="1" label="评价" :grade="item.raty_service"></sky-raty>
					<div class="cl2">{{item.content}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import skyRaty from "../skyraty.vue";
	export default{
		components:{
			skyRaty
		},
		props:{
			shopid:0
		},
		data:function(){
			return {
				shop:{},
				list:[],
				pageLoad:false
			}
		},
		created:function(){
			this.getPage();
		},
		methods:{
			getPage:function(){
				var that=this;
				that.app.get({
					 
					url:that.app.apiHost+"/b2b_shop/raty?shopid="+this.shopid,
					success:function(res){
						that.list = res.data.ratyList;
						that.shop=res.data.shop;
						that.pageLoad = true;
					}
				})
			}
		}
	}
</script>

<style>
</style>
