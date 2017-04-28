<template>
	<div class="component_a">
		<h3>{{message}}</h3>
		<button type="button" @click="clickMe">修改父组件</button>
		<br>
		<br>
		<button type="button" @click="changeSibling">修改兄弟组件</button>
	</div>
</template>
<script>
	export default{
		props:['value', 's'],
		data (){
			return {
			}
		},
		methods: {
			clickMe(){
				this.$emit('changeParent','父组件修改');
			},
			changeSibling (){
				//通过中转站派发自定义事件
				this.con.$emit('data','susu');
			}
		},
		computed: {
			message (){
				return this.value;
			},
			con (){
				return this.s
			}
		}
	}
</script>
<style>
	.component_a{
		border: 1px solid #faa;
		margin-bottom: 15px;
		padding: 15px;
	}
</style>