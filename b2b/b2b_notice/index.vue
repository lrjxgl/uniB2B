<template>
	<view>
		<div class="tabs-border">
			<div @click="setTab('guest')" :class="tab=='guest'?'tabs-border-active':''" class="tabs-border-item">客服消息</div>
			<div @click="setTab('notice')" :class="tab=='notice'?'tabs-border-active':''" class="tabs-border-item">站内消息</div>
			
			<div @click="setTab('sysmsg')" :class="tab=='sysmsg'?'tabs-border-active':''" class="tabs-border-item">系统通知</div>	 
		</div>
		<div v-if="tab=='guest'">
			<page-guest></page-guest>
		</div>
		<div v-if="tab=='notice'">
			<page-notice></page-notice>
		</div>
		
		<div v-if="tab=='sysmsg'">
			 
			<page-sysmsg></page-sysmsg>
		</div>
		<mt-footer tab="notice"></mt-footer>
	</view>
</template>

<script>
	import pageNotice from "./page-notice.vue";
	import pageGuest from "./page-guest.vue";
	import pageSysmsg from "./page-sysmsg.vue";
	
	import mtFooter from "../../components/b2bfooter.vue";
	export default{
		components:{
			pageNotice,
			pageGuest,
			pageSysmsg,
			mtFooter
		},
		data:function(){
			return {
				pageLoad:false,
				 
				tab:"guest"
				
			}
		},
		onLoad:function(){
		  
		},
		methods:{
			setTab:function(t){
				this.tab=t;
				 
			}
			 
		}
	}
	
</script>

<style>
	
</style>
