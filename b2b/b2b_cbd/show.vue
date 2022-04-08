<template>
	<view>
		<view class="main-body" >
			<view style="height: 44px;"></view>
			<b2b-sortbox pfixed="true" pstyle="" @call-parent="sortParent"></b2b-sortbox>
			<shop-item :shoplist="shopList"></shop-item>
		</view>
	</view>
</template>

<script>
	 
	import shopItem from "../../components/shop-item.vue";
	import b2bSortbox from "../../components/b2b-sortbox.vue";
	import {mapState,mapMutations} from 'vuex'
	var  query,sortquery,sortTop;
	export default({
		components:{
			b2bSortbox, 
			shopItem
		},
		data:function(){
			return {
				pageLoad:false,
				pageData:{},
				catid:0,
				cbdid:0,
				isFirst:true,
				per_page:0,
				shopList:{},
				discount:"",
				price:"",
				choice:"",
				orderby:"",
			}
		},
		onLoad:function(ops){
			this.cbdid=ops.cbdid;
			this.getPage();
		},
		onPageScroll: function(e) {
			var that = this;
			this.$store.commit("setScrollTop",e.scrollTop);
		},
		methods:{
			sortParent:function(ops){
				this.discount=ops.discount;
				this.price=ops.price;
				this.choice=ops.choice;
				this.orderby=ops.orderby;
				this.per_page=0;
				this.isFirst=true;
				console.log(ops)
				this.getList();
			},
			goShop:function(shopid){
				uni.navigateTo({
					url:"../b2b_shop/index?shopid="+shopid
				})
				 
			},
			getPage:function(){
				var that=this;
				var latlng=this.app.getGps();
				that.app.get({
					url:that.app.apiHost+"/b2b_cbd/show?cbdid="+this.cbdid,
					data:{
						lat:latlng.lat,
						lng:latlng.lng
					},
					dataType:"json",
					success:function(res){
						uni.setNavigationBarTitle({
							title:res.data.cbd.title
						}) 
						that.shopList=res.data.list;
						that.pageData=res.data;
						that.pageLoad=true;
					}
				})
			},
			getList:function(){
				var that=this;
				if(that.per_page==0 && !that.isFirst){
					return false;
				}
				var latlng=this.app.getGps();
				that.app.get({
					url:that.app.apiHost+"/b2b_cbd/show?cbdid="+this.cbdid,
					data:{
						discount:that.discount,
						price:that.price,
						choice:that.choice,
						orderby:that.orderby,
						lat:latlng.lat,
						lng:latlng.lng
					},
					dataType:"json",
					success:function(res){
						that.per_page=res.data.per_page;
						if(that.isFirst){
							that.isFirst=false;
							that.shopList = res.data.list;
						}else{
							var list=that.shopList;
							for(var i in res.data.list){
								list.push(res.data.list[i]);
							}
							that.shopList=list;
						} 
					}
				})
			}
		}
	});
</script>

<style>
	@import url("../../common/shoplist.css");
</style>
