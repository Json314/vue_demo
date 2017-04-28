<template>
	<div class="component_b">
		<h3>{{content}}</h3>
		<h4>{{name}}</h4>
	</div>
</template>
<script>
	export default{
		props: ['value', 's'],
		data(){
			return {
				name: '我是拉不拉卡'
			}
		},
		computed: {
			content(){
				return  this.value;
			},
			con(){
				return this.s;
			}
		},
		created(){
			//接收自定义事件
			this.con.$on('data',(value) =>{
				this.name = '接收到a组件派发的事件'
			});
		}
	}
</script>
<style>
	.component_b{
		border: 1px solid #afa;
	}
</style>