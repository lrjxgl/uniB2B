<template>
	<view>
		<view v-if="pageLoad">
			<div class="">
				<scroll-view scroll-y="true" :class="sideClass" :style="{top:esTop2+'px'}" class="side">
					 
					<div @click="setCat(0)" :class="{'side-menu-active':catid==0}" class="side-menu">推荐</div>
					<div @click="setCat(item.catid)" :class="{'side-menu-active':catid==item.catid}" v-for="(item,index) in catList"
					 :key="index" class="side-menu">
						{{item.title}}
					</div>
					 
				</scroll-view>
				<div class="flex-1 main">
					<div class="tabs-border">
						<div @click="setOrder('')" :class="{'tabs-border-active':orderby==''}" class="tabs-border-item">综合</div>
						<div @click="setOrder('buy_num')" :class="{'tabs-border-active':orderby=='buy_num'}" class="flex flex-center tabs-border-item">
							<span class="mgr-5">销量</span>
							<span class="iconfont icon-godown"></span>
						</div>
						<div @click="setOrder('price')" :class="{'tabs-border-active':orderby=='price'}" class="tabs-border-item flex flex-center ">
							<span class="mgr-5">价格</span>
							<span class="iconfont icon-godown"></span>
						</div>
					</div>
					<div class="flexlist">
						<div class="flexlist-item" v-for="(item,index) in list" :key="index">
							<img @click="goProduct(item.id)" class="flexlist-img" :src="item.imgurl+'.100x100.jpg'" />
							<div class="flex-1">
								<div @click="goProduct(item.id)" class="flexlist-title pointer">{{item.title}}</div>
								<div class="flex flex-ai-center mgb-5">
									<div class="cl-money f12">￥</div>
									<div class="cl-money f14 mgr-5">{{item.price}}</div>
									<div class="flex-1"></div>
									<div class="cl3 f10">已售{{item.buy_num}}件</div>


								</div>
								<div class="flex">
									<div class="flex-1"></div>
									<div v-if="item.isksid>0">
										<div @click="ksBox(item.id)" class="btn-small btn-outline-success">选规格</div>
									</div>
									<div class="pdb-5" v-else>

										<div v-if="item.incart" class="numbox prolist-numbox">
											<div @click="minusCart(item.id,item.cart_amount)" class="numbox-minus">-</div>
											<input type="text" name="amount" :value="item.cart_amount" class="numbox-num" />
											<div @click="plusCart(item.id,item.cart_amount)" class="numbox-plus">+</div>
										</div>
										<div @click="addCart(item.id)" class="btn-buy   iconfont icon-cart" v-else></div>
									</div>
								</div>
							</div>

						</div>
					</div>
					<div class="loadMore" v-if="per_page>0" @click="getList()">加载更多</div>

				</div>
			</div>
			<div class="footer-row"></div>
			<div class="footerBox pd-5">
				<div @click="goGuest" class=" w60 pointer flex-center mgr-5">
					<div class="iconfont icon-service cl-primary f18"></div>
					<div class="f12">客服</div>
				</div>
				<div v-if="cart.cart_total_num==0" class="flex-1 flex">
					<div class="cl2">暂无商品，快去选购吧</div>
				</div>
				<div @click="showCart=true" class="flex-1" v-if="cart.cart_total_num>0">
					<div class="cl-money">￥{{cart.cart_total_money}}</div>
					<div>运费金额 ￥{{cart.express_money}}</div>
				</div>
				<div v-if="cart.cart_total_num>0" class="btn" @click="goOrder">去结算</div>
			</div>
		</view>
		<!--规格-->
		<div v-if="ksShow">
			<div class="modal-mask" @click="ksHide"></div>
			<div class="modal">
				<div class="modal-header">
					<div class="modal-title">选择款式</div>
					<div class="modal-close icon-close" @click="ksHide"></div>
				</div>
				<div class="modal-body pdt-10">
					<div class="ksBox mgb-10">
						<div class="kslist mgb-10">
							<div class="kslist-label">{{ksproduct.ks_label_name}}</div>
							<div @click="ks1(item.id)" v-bind:class="{'kslist-active':item.id==ksid1}" class="kslist-item" v-for="(item,index) in ksList"
							 :key="index">{{item.title}}</div>
						</div>
						<div class="kslist">
							<div class="kslist-label">{{ksproduct.ks_label_size}}</div>
							<div class="kslist-item" @click="ks2(item.id)" v-bind:class="{'kslist-active':item.id==ksid}" v-for="(item,index) in ksList2"
							 :key="index">{{item.size}}</div>
						</div>
					</div>
					<div class="flex">
						<div class="cl2 mgr-10 mgl-10">价格</div>
						<div class="cl-money">￥{{ksproduct.price}}</div>
						<div class="flex-1"></div>
						<div v-if="ksproduct.incart" class="numbox prolist-numbox">
							<div @click="ksMinusCart(ksproduct.id,ksproduct.cart_amount)" class="numbox-minus">-</div>
							<input type="text" name="amount" :value="ksproduct.cart_amount" class="numbox-num" />
							<div @click="ksPlusCart(ksproduct.id,ksproduct.cart_amount)" class="numbox-plus">+</div>
						</div>
						<div @click="ksAddCart(ksproduct.id)" class="btn-buy" v-else>买</div>
					</div>
				</div>
			</div>
		</div>
		<shop-cart v-if="showCart" @call-parent="setCart" :shopid="shopid"></shop-cart>
	</view>
</template>

<script>
	
	import {mapState,mapMutations} from 'vuex'
	import shopCart from "./cart.vue"
	export default {
		components:{
			shopCart
		},
		props:{
			shopid:""
		}, 
		data: function() {
			return {
				page: "product",
				pageLoad: false,
				list: {},
				showCart:false, 
				shop: {},
				sideClass: "",
				catList: {},
				catid: 0,
				per_page: 0,
				isFirst: true,
				cart: {},
				ksShow: false,
				ksproduct: [],
				ksList: [],
				ksList2: [],
				ksid: 0,
				ksid1: 0,
				ksid2: 0,
				orderby: ""
			}
		},
		created: function(ops) {
	 
			if(this.shopid!=0){
				this.getList();
				this.statCart();
			} 
			
		},
		computed:{
			...mapState({
			  scrollTop: state => state.scrollTop,
			  esTop: state => state.esTop,
			   esTop2: state => state.esTop2
			})
		},
		watch:{
			shopid:function(n,o){
				this.getList();
				this.statCart();
			},
			scrollTop:function(n,o){
				if(this.scrollTop>this.esTop){
					this.sideClass="sideClass"
				}else{
					this.sideClass=""
				}
			}
		},
		methods: {
			setCart:function(e){
				if(e.action=="update"){
					this.statCart()
				}else if(e.action=="close"){
					this.showCart=false;
				}
			},
			goBack: function() {
				uni.navigateBack()
			},
			 
			 
			setCat: function(catid) {
				this.catid = catid;
				this.per_page = 0;
				this.isFirst = true;
				uni.pageScrollTo({
					scrollTop:this.esTop
				})
				this.getList();
			},
			setOrder: function(o) {
				this.orderby = o;
				this.isFirst = true;
				this.per_page = 0;
				this.getList();
			},
			getList: function() {
				var that = this;
				if (this.per_page == 0 && !this.isFirst) {
					return false;
				}
				that.app.get({
					dataType: "json",
					url: that.app.apiHost + "/b2b_product/index?shopid=" + this.shopid,
					data: {
						catid: that.catid,
						type: that.type,
						per_page: that.per_page,
						orderby: this.orderby,
					},
					dataType: "json",
					success: function(res) {
						if (res.error) {
							return false;
						}
	
						if (that.isFirst) {
							that.catList = res.data.catList;
							that.list = res.data.list;
							that.pageLoad=true;
						} else {
							for (var i in res.data.list) {
								that.list.push(res.data.list[i]);
							}
						}
						that.per_page = res.data.per_page;
						that.isFirst = false;
					}
				})
			},
			goOrder: function() {
				uni.navigateTo({
					url: "../../b2b/b2b_order/confirm?shopid=" + this.shopid
				})
			},
			goGuest: function() {
				uni.navigateTo({
					url: "../../b2b/b2b_guest/user?shopid=" + this.shopid
				})
	
			},
			goProduct: function(id) {
				uni.navigateTo({
					url: "../../b2b/b2b_product/show?id=" + id + "&shopid=" + this.shopid
				})
	
			},
			 
			/***购物车处理***/
			addCart: function(id, ksid) {
				var that = this;
				var id = id;
				var ksid = ksid == undefined ? 0 : ksid;
				var amount = 1;
				that.app.get({
					dataType: "json",
					url: that.app.apiHost + '/b2b_cart/add?ajax=1',
					data: {
						productid: id,
						amount: amount,
						ksid: ksid
					},
					method: 'GET',
					dataType: "json",
					success: function(res) {
						if (res.error == 1000) {
							window.location = "/login/index"
							return false;
						}
						if (res.error) {
							uni.showToast({
								title:res.message
							})
							return false;
						}
						that.statCart();
						for (var i = 0; i < that.list.length; i++) {
							if (that.list[i].id == id) {
								if (res.data.amount > 0) {
									that.list[i].incart = 1;
								}
								that.list[i].cart_amount = res.data.amount;
								break;
							}
						}
	
					}
				})
			},
			plusCart: function(id, amount, ksid) {
				var that = this;
				var id = id;
				var amount = amount;
				var ksid = ksid == undefined ? 0 : ksid;
				amount++;
				that.app.get({
					dataType: "json",
					url: that.app.apiHost + '/b2b_cart/add?ajax=1',
					data: {
						productid: id,
						amount: amount,
						ksid: ksid
					},
					method: 'GET',
					dataType: "json",
	
					success: function(res) {
						if (res.error) {
							uni.showToast({
								title:res.message
							})
							return false;
						}
						that.statCart();
						for (var i = 0; i < that.list.length; i++) {
							if (that.list[i].id == id) {
	
								that.list[i].cart_amount = res.data.amount;
								break;
							}
						}
	
	
					}
				})
			},
			minusCart: function(id, amount, ksid) {
				var that = this;
				var id = id;
				var amount = amount;
				var ksid = ksid == undefined ? 0 : ksid;
				amount--;
				var isdelete = 0;
				if (amount == 0) {
					isdelete = 1
				}
				that.app.get({
					dataType: "json",
					url: that.app.apiHost + '/b2b_cart/add?ajax=1',
					data: {
						productid: id,
						amount: amount,
						ksid: ksid,
						isdelete: isdelete
					},
					method: 'GET',
					dataType: "json",
	
					success: function(res) {
						if (res.error) {
							uni.showToast({
								title:res.message
							})
							return false;
						}
						that.statCart();
						for (var i = 0; i < that.list.length; i++) {
							if (that.list[i].id == id) {
								if (res.data.amount == 0) {
									that.list[i].incart = 0;
								}
								that.list[i].cart_amount = res.data.amount;
								break;
							}
						}
	
	
					}
				})
			},
	
			//规格操作
			ksBox: function(id) {
				var that = this;
				that.app.get({
					dataType: "json",
					url: that.app.apiHost + "/b2b_product_ks/index?productid=" + id,
					dataType: "json",
					success: function(res) {
						that.ksShow = true;
						that.ksproduct = res.data.product;
						that.ksList = res.data.ksList;
						that.ksList2 = res.data.ksList2;
						that.ksid1 = res.data.ksid;
						that.ksid = res.data.ksid;
					}
				})
			},
			ksHide: function() {
				this.ksid = 0;
				this.ksShow = false;
			},
			ks1: function(id) {
				var that = this;
				that.app.get({
					dataType: "json",
					url: that.app.apiHost + "/b2b_product_ks/sizeList?id=" + id,
					dataType: "json",
					success: function(res) {
						that.ksid1 = res.data.ksid;
						that.ksid = res.data.ksid;
						that.ksproduct = res.data.product;
						that.ksList2 = res.data.ksList2;
					}
				})
			},
			ks2: function(id) {
				var that = this;
				that.ksid = id;
				that.app.get({
					dataType: "json",
					url: that.app.apiHost + "/b2b_product_ks/get?id=" + id,
					dataType: "json",
					success: function(res) {
	
						that.ksproduct = res.data.product;
	
					}
				})
			},
			ksAddCart: function(id) {
				var that = this;
				var id = id;
				var ksid = that.ksid;
				var amount = 1;
				that.app.get({
					dataType: "json",
					url: that.app.apiHost + '/b2b_cart/add?ajax=1',
					data: {
						productid: id,
						amount: amount,
						ksid: ksid
					},
					method: 'GET',
					dataType: "json",
					success: function(res) {
						if (res.error == 1000) {
							window.location = "/login/index"
							return false;
						}
						if (res.error) {
							uni.showToast({
								title:res.message
							})
							return false;
						}
						that.statCart();
						that.ksproduct.incart = 1;
						that.ksproduct.cart_amount = res.data.amount;
					}
				})
			},
			ksPlusCart: function(id, amount) {
				var that = this;
				var id = id;
				var amount = amount;
				var ksid = that.ksid;
				amount++;
				that.app.get({
					dataType: "json",
					url: that.app.apiHost + '/b2b_cart/add?ajax=1',
					data: {
						productid: id,
						amount: amount,
						ksid: ksid
					},
					method: 'GET',
					dataType: "json",
	
					success: function(res) {
						if (res.error) {
							uni.showToast({
								title:res.message
							})
							return false;
						}
						that.statCart();
						that.ksproduct.cart_amount = res.data.amount;
					}
				})
			},
			ksMinusCart: function(id, amount) {
				var that = this;
				var id = id;
				var amount = amount;
				var ksid = that.ksid;
				amount--;
				var isdelete = 0;
				if (amount == 0) {
					isdelete = 1
				}
				that.app.get({
					dataType: "json",
					url: that.app.apiHost + '/b2b_cart/add?ajax=1',
					data: {
						productid: id,
						amount: amount,
						ksid: ksid,
						isdelete: isdelete
					},
					method: 'GET',
					dataType: "json",
	
					success: function(res) {
						if (res.error) {
							uni.showToast({
								title:res.message
							})
							return false;
						}
						that.statCart();
						if (res.data.amount == 0) {
							that.ksproduct.cart_amount = 0;
							that.ksproduct.incart = 0;
						} else {
							that.ksproduct.cart_amount = res.data.amount;
						}
	
					}
				})
			},
			statCart: function() {
				var that = this;
				that.app.get({
					 
					url: that.app.apiHost + "/b2b_cart/statshop?ajax=1",
					data: {
						shopid: this.shopid
					},
					unLogin:true, 
					success: function(res) {
						
						if (res.error) {
							that.cart = {
								cart_amount: 0,
								cart_total_money: 0,
								cart_total_num: 0,
								express_money: 0
							};
						} else {
							that.cart = {
								cart_amount: res.data.cart_amount,
								cart_total_money: res.data.cart_total_money,
								cart_total_num: res.data.cart_total_num,
								express_money: res.data.express_money
							};
						}
	
					}
				})
			}
		}
	}
</script>

<style>
	
	.side {
		position: absolute;
		top: 160px;
		left: 0px;
		width: 80px;
		bottom: 0;
		background-color: #fff;
	}
	.sideClass{
		position: fixed;
		top: 44px !important;
		left: 0;
		right: 0;
		bottom: 50px;
	}
	.side-menu {
		cursor: pointer;
		padding: 10px 5px;
		border-bottom: 1px solid #eee;
		color: #646464;
		font-size: 14px;
	}
	
	.side-menu-active {
		color: #f60;
	}
	
	.main {
		margin-left: 82px;
	}
</style>
