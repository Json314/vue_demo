import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		count: 123
	},
	mutations: {
		add (state){
			return state.count ++;
		},
		reduce: state => state.count--
	},
	getters: {
		count: state => state.count += 77
	},
	actions: {
		addPlus({commit}){
			commit('add');
			setTimeout(function(){
				commit('reduce');
				console.log('计时器被执行了');
			},3000);
			console.log('我先被执行了');
		}
	}
});