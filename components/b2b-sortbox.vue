<template>
	<view>
		<view class="modal-mask none" @click="zhpxBoxClass=''" :class="zhpxBoxClass"></view>
		<view class="modal-mask none" @click="choiceBoxClass=''" :class="choiceBoxClass"></view>
		 
		<view id="sortNavBox" :style="pstyle" :class="(pfixed || scrollTop>=sortTop)?'sortNavBoxFix':''" class="sortNavBox">
			<view class="sortNav">
				<view @click="toggleOrder" :class="orderTab=='zhpx'?'sortNav-active':''" class="sortNav-item w100 flex zhpx">
					<span>{{orderLabel}}</span>
					<span class="tab-select-t3down"></span>
				</view>
				<view @click="setOrderTab('sold_num')" :class="orderTab=='sold_num'?'sortNav-active':''" class="sortNav-item">销量最高</view>
				<view @click="setOrderTab('distance')" :class="orderTab=='distance'?'sortNav-active':''" class="sortNav-item">距离最近</view>

				<view @click="setOrderTab('choice')" class="sortNav-item flex">筛选<span class="iconfont icon-filter"></span></view>
			</view>

			<view :class="zhpxBoxClass" class="sortNavBox-order">

				<view @click="setOrder(item,index)" class="bItem" v-for="(item,index) in orderList" :key="index">{{item}}</view>


			</view>

			<view class="choiceBox" :class="choiceBoxClass">
				<scroll-view scroll-y>
					<view class="mgb-10">
						<view class="choiceBox-hd flex">商家特色<text class="cl3 f12">(可多选)</text></view>
						<view class="flex">
							<view v-for="(item,index) in choiceClass" @click="checkChoice(item.id)" :key="index" class="choice-item">
								<view :class="item.classname" class="btn3">{{item.name}}</view>
							</view>


						</view>
					</view>
					<view class="mgb-10">
						<view class="choiceBox-hd">人均价</view>
						<view class="flex">
							<view @click="setPrice(item)" v-for="(item,index) in priceList" :key="index" class="choice-item">
								<view :class="item==priceItem?'choice-item-active':''" class="btn3">{{item}}</view>
							</view>

						</view>
					</view>
					<view class="mgb-20">
						<view class="choiceBox-hd">优惠活动</view>
						<view class="flex">
							<view @click="setDisc(name)" v-for="(item,name,index) in discList" :key="index" class="choice-item">
								<view :class="name==discItem?'choice-item-active':''" class="btn3">{{item}}</view>
							</view>
						</view>
					</view>
				</scroll-view>
				<view class="flex choiceBtns">
					<view @click="choiceClear" class="qkBtn">清空</view>
					<view @click="choiceFinish" class="wcBtn">完成</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var query, sortquery;
	import {mapState,mapMutations} from 'vuex'
	export default {
		name: "b2b-sortbox",
		props:{
			pstyle:"",
			pfixed:false,
		},
		computed:{
			...mapState({
			  scrollTop: state => state.scrollTop
			})
		},
		data: function() {
			return {
				sortTop:1000,
				orderLabel: "综合排序",
				sortNavBoxFix: "",
				zhpxBoxClass: "",
				orderTab: "zhpx",
				choiceBoxClass: "",
				orderby: "",
				orderList: "",
				isFirst: true,
				per_page: 0,
				choiceClass: [],
				priceList: [],
				priceItem: "",
				discList: [],
				discItem: ""
			}
		},
		created: function() {
			query = uni.createSelectorQuery().in(this);
			this.getFilter();
		},
		
		methods: {
			choiceFinish: function() {
				this.isFirst = true;
				this.per_page = 0;
				this.choiceBoxClass = "";
				this.getList();
			},
			choiceClear: function() {
				var that = this;
				var choiceClass = this.choiceClass;
				for (var i in choiceClass) {
					choiceClass[i].classname = "";
				}
				that.choiceClass = choiceClass;
				that.discItem = "";
				that.priceItem = "";


			},
			setDisc: function(it) {
				if (this.discItem == it) {
					this.discItem = "";
				} else {
					this.discItem = it;
				}
			},
			setPrice: function(it) {
				if (this.priceItem == it) {
					this.priceItem = "";
				} else {
					this.priceItem = it;
				}
			},
			checkChoice: function(index) {
				var that = this;
				var choiceClass = this.choiceClass;
				for(var i in choiceClass){
					if(choiceClass[i].id==index){
						if(choiceClass[i].classname==""){
							choiceClass[i].classname="choice-item-active"
						}else{
							choiceClass[i].classname=""
						}
					}
				}
				this.choiceClass =  choiceClass;
				 

			},
			setOrder: function(v, k) {
				this.zhpxBoxClass = "";

				this.orderLabel = v;
				this.orderTab = 'zhpx';
				this.orderby = k;
				this.per_page = 0;
				this.isFirst = true;
				this.getList();

			},
			setOrderTab: function(t) {
				this.orderTab = t;
				this.orderby = t;
				this.zhpxBoxClass = "";

				this.per_page = 0;
				this.isFirst = true;
				if (t == 'choice') {
					if (this.choiceBoxClass == "") {
						this.choiceBoxClass = "block";
						uni.pageScrollTo({
							scrollTop: this.sortTop
						})
					} else {
						this.choiceBoxClass = "";
					}


				} else {
					this.choiceBoxClass = "";
					this.getList();
				}


			},

			toggleOrder: function() {
				this.choiceBoxClass = "";
				if (this.zhpxBoxClass == '') {
					this.zhpxBoxClass = "block";
					uni.pageScrollTo({
						scrollTop: this.sortTop
					})
				} else {
					this.zhpxBoxClass = "";
				}
			},
			getFilter: function() {
				var that = this;
				that.app.get({
					url: that.app.apiHost + "/b2b_shoplist/filter",
					success: function(res) {
						that.orderList = res.data.orderList;
						that.discList = res.data.discList;
					
						that.priceList = res.data.priceList;
						var choiceClass = Array();
						for (var i in res.data.filterList) {
						
							choiceClass.push({
								id:i,
								name:res.data.filterList[i],
								classname:""
							});
						}
						that.choiceClass=choiceClass;
						
						setTimeout(function() {
							// #ifdef H5
							that.sortTop = document.getElementById("sortNavBox").offsetTop;
							// #endif	
							// #ifndef H5	
							query.select('#sortNavBox').boundingClientRect(res => {
								that.sortTop = res.top;
							}).exec();
							// #endif
						}, 300)
					}
				})
			},
			getList:function(){
				var that=this;
				var choiceStr="";
				for(var k in that.choiceClass){
					if(that.choiceClass[k].classname!=''){
						if(choiceStr!=""){
							choiceStr+=",";
						}
						choiceStr+=that.choiceClass[k].id;
					}
				}
				var redata={
					discount:that.discItem,
					price:that.priceItem,
					choice:choiceStr,
					orderby:that.orderby,
				}
				this.$emit("call-parent",redata);
 
			}

		}
	}
</script>

<style>
	.sortNavBox {
		position: relative;
		left: 0;
		right: 0;
		background-color: #fff;
		z-index: 999;
	}
	
	.sortNavBoxFix {
		position: fixed;
		top: 0px;
		
	}
	
	/*  #ifdef  H5  */
	.sortNavBoxFix {
		top: 44px;
	}
	
	/* #endif */
	.sortNav {
		display: flex;
		flex-direction: row;
		height: 40px;
		background-color: #fff;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		margin-bottom: 5px;
		padding: 0px 10px;
	
	}
	
	.sortNav-active {
		font-weight: bolder;
	}
	
	.sortNav-item {
		flex: 1;
		text-align: center;
		align-items: center;
		position: relative;
		height: 40px;
		line-height: 40px;
		justify-content: center;
	}
	
	.sortNavBox-order {
		position: absolute;
		left: 0px;
		right: 0;
		top: 40px;
		padding: 0px 10px;
		background-color: #fff;
		z-index: 999;
		display: none;
	}
	
	.zhpx {
		width: 120px;
		flex: none;
	}
	
	.zhpx:after {
		content: ' ';
		display: inline-block;
		width: 8px;
		height: 8px;
		border-top: 1px solid #e4e4e4;
		border-left: 1px solid #e4e4e4;
		position: absolute;
		left: 45%;
		bottom: -8%;
		z-index: 5;
		background-color: #fff;
		-webkit-transform: translateX(-50%) rotateZ(45deg);
		transform: translateX(-50%) rotateZ(45deg);
	}
	
	.bItem {
		height: 42px;
		line-height: 42px;
		border-bottom: 1px solid #eee;
	}
	.choiceBox{
		position:fixed;
		z-index:999;
		left:0;
		right:0;
		top:45px;
		bottom:120px;
		background-color:#fff;
		padding:10px;
		display:none;
	}
	/* #ifdef H5 */
	.choiceBox{
		top:85px;
	}
	/* #endif */
	.choiceBox-hd{
		margin-bottom:10px;
		font-size:14px;
		font-weight:bolder;
		padding-left:5px;
	}
	.choice-item{
		width:33.333%;
		padding:0px 5px;
		box-sizing:border-box;
	}
	.choice-item-active{
		color: #f30 !important;
	}
	.btn3{
		background-color:#eee;
		padding:4px 6px;
		color:#666;	
	}
	.choiceBtns{
		position:absolute;
		bottom:10px;
		left:0;
		right:0;
	}
	.qkBtn,.wcBtn{
		flex:1;
		height:36px;
		line-height:36px;
		text-align:center;
	}
	.qkBtn{
		background-color:#fafafa;
	}
	.wcBtn{
		background-color:#ffd161;
	}
	.scItem{
		width: 240rpx; 
		margin-right: 10rpx;
		overflow: hidden;
	}
	.scItem-img{
		width: 240rpx;
		height:160rpx;
		border-radius: 20rpx;
		margin-bottom: 3px;
	}
	.scItem-title{
		font-size: 12px;
		color: #333;
		white-space:nowrap;
		text-overflow:ellipsis;
		overflow: hidden;
		margin-bottom: 5px;
	}
	.scItem-desc{
		font-size: 12px;
		color: #666;
	}
	.sortNav-active {
		font-weight:bolder;
	} 
</style>
