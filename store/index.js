import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		scrollTop:0,
		esTop:1000,
		esTop2:1000,
		isLogin:false
	},
    mutations: {
		setScrollTop:function(state,val){
			state.scrollTop=val;
		},
		setEsTop:function(state,v){
			state.esTop=v;
		},
		setEsTop2:function(state,v){
			state.esTop2=v;
		}
	},
    actions: {
		set:function(){
			
		}
	}
})

export default store