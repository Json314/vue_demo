<template>
	<div>
		<Sibling_a @changeParent="parentChange" :value="message" :s="s"></Sibling_a>
		<Sibling_b :value="content" :s="s"></Sibling_b>
	</div>
</template>
<script>
	import Sibling_a from './sibling_a';
	import Sibling_b from './sibling_b';
	import Vue from 'vue';
	var s = new Vue()
	export default {
		name: 'home',
		data (){
			return {
				message: 'hello',
				content: '拉先生',
				s 		//s:s
			}
		},
		methods: {
			parentChange(value){
				// console.log(value);
				this.content = value;
			}
		},
		components: {Sibling_a, Sibling_b}
	}
</script>
<style scoped></style>