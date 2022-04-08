<template>
	<view>
		<div class="main-body" id="App">
			
			<div  v-if="pageLoad">
				
				<div class="pos-relative">
					<div class="tab-select  pdl-10 pdr-10">
						<div class="tab-select-item" @click="showSelect('category')">
							<div class="tab-select-label">{{cat_label}}</div>
							<div class="tab-select-t3down "></div>
		
						</div>
						<!--
						<div class="tab-select-item" @click="showSelect('scarea')">
							<div class="tab-select-label">{{scarea_label}}</div>
							<div class="tab-select-t3down "></div>
		
						</div>
						-->
		
						<div class="tab-select-item" @click="showSelect('order')">
							<div class="tab-select-label">{{order_label}}</div>
							<div class="tab-select-t3down "></div>
						</div>
						<div class="tab-select-item" @click="showSelect('choice')">
							
							<div class="tab-select-label">{{choice_label}}</div>
							<div class="tab-select-t3down "></div>
						</div>
					</div>
					<div v-show="tabSelectBox=='category'" class="tab-select-box tab-select-show">
						<div @click="setCat(0,'全部')" class="tab-select-box-item">全部</div>
						<div @click="setCat(item.catid,item.title)" v-for="(item,index) in pageData.catList" :key="index"  class="tab-select-box-item" >{{item.title}}</div>
					</div>
					<!--
					<div  v-show="tabSelectBox=='scarea'" class="choice-box tab-select-box tab-select-show">
					 
						<div @click="setScarea(0,'区域')" class="tab-select-box-item">区域</div>
						<div @click="setScarea(item.sc_id,item.title)" v-for="(item,index) in pageData.site_city" :key="index" class="tab-select-box-item" >{{item.title}}</div>
						 
					</div>
					-->
					<div v-show="tabSelectBox=='order'" class="tab-select-box tab-select-show">
						 
						<div @click="setOrder(index,item)" class="tab-select-box-item" v-for="(item,index) in pageData.orderList" :key="index">{{item}}</div>
					</div>
					<div v-show="tabSelectBox=='choice'" class="tab-select-box tab-select-show">
						<div @click="setChoice('','全部')" class="tab-select-box-item" >全部</div>
						<div @click="setChoice('cspf','超时赔付')" class="tab-select-box-item">超时赔付</div>
					
						<div @click="setChoice('isnew','新店')" class="tab-select-box-item">新店</div>
					</div>
					<div class="modal-mask" @click="hideSelect" v-if="tabSelectBox!=''"></div>
				</div>
				<div @click="goShop(item.shopid)" v-for="(item,index) in pageData.shopList" :key="index" class="flexlist-item pointer">
					<img :src="item.imgurl+'.100x100.jpg'" class="flexlist-img bd-radius-50" />
					<div class="flex-1">
						<div class="flexlist-title">{{item.shopname}}</div>
						<sky-raty len="5" mod="2" readonly="1" :grade="item.raty_grade" label="评价"></sky-raty>
						<div class="flex" v-if="item.prolist">
							<div v-for="(p,pindex) in item.prolist" :key="pindex" class="mgr-5">
								<img :src="p.imgurl+'.100x100.jpg'" class="wh-60 mgb-5" />
		
							</div>
						</div>
					</div>
		
					 
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	import skyRaty from "../../components/skyraty.vue"
 
	export default{
		components:{
			skyRaty
		},
		data:function(){
			return {
				pageLoad:false,
				pageData:{},
				catid:0,
				tabSelectBox:"",
				order:"",
				sc_id:0,
				filter:"",
				choice:"",
				scarea_label:"区域",
				cat_label:"全部",
				order_label:"排序",
				choice_label:"筛选"
			}
		},
		onLoad:function(){
			 
			this.getPage();
		},	
		methods:{
			goShop:function(shopid){
				uni.navigateTo({
					url:"../../b2b/b2b_shop/index?shopid="+shopid
				})
	 
			},
			getPage:function(){
				var that=this;
				that.app.get({
					url:that.app.apiHost+"/b2b_shoplist/list?ajax=1",
					data:{
						catid:that.catid,
						filter:this.filter,
						orderby:this.order,
						sc_id:this.sc_id
					},
					dataType:"json",
					success:function(res){
						that.per_page=res.data.per_page;
						that.isFirst=false;
						that.pageData=res.data;
						that.pageLoad=true;
					}
				})
			},
			getList:function(){
				var that=this;
				that.app.get({
					url:that.app.apiHost+"/b2b_shoplist/list?ajax=1",
					data:{
						catid:that.catid,
						filter:this.filter,
						orderby:this.order,
						sc_id:this.sc_id,
						per_page:this.per_page,
						choice:this.choice
					},
					dataType:"json",
					success:function(res){
						that.per_page=res.data.per_page;
						that.isFirst=false;
						that.pageData=res.data;
						that.pageLoad=true;
					}
				})
			},
			showSelect:function(tab){
				if(this.tabSelectBox==tab){
					this.tabSelectBox="";
				}else{
					this.tabSelectBox=tab
				}
			},
			hideSelect:function(){
				this.tabSelectBox="";
			},
			setCat:function(cid,title){
				this.catid=cid;
				this.isFirst=true;
				this.per_page=0;
				this.cat_label=title;
				this.getList();
				this.hideSelect();
			},
			setScarea:function(sc_id,title){
				this.sc_id=sc_id;
				this.isFirst=true;
				this.per_page=0;
				this.scarea_label=title;
				this.getList();
				this.hideSelect();
			},
			setOrder:function(index,title){
				this.order=index;
				this.isFirst=true;
				this.per_page=0;
				this.order_label=title;
				this.getList();
				this.hideSelect();
			},
			setChoice:function(k,v){
				this.choice_label=v;
				this.choice=k;
				this.isFirst=true;
				this.per_page=0;
				this.getList();
				this.hideSelect();
			}
			
		}
	}
	
</script>

<style>
</style>
