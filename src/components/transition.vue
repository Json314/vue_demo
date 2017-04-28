<template>
	<div>
		<button type="button" @click="show = !show">点击</button>
		<transition name="fade">
			<p v-if="show">Hello World</p>
		</transition>
	</div>
</template>
<script>

	export default {
		name: 'demo',
		data () {
			return {
				show: true
			}
		},
		methods:{
			autoUpdate(){
				console.log('自动以方法开始了');
			}
		},
		beforeCreate(){
			console.log(1 + ' 创建之前beforeCreate');
		},
		created(){
			console.log(2 + ' 创建完成created');
		},
		beforeMount(){
			console.log(3 + ' 挂载之前beforeMount');
		},
		mounted(){
			console.log(4 + ' 挂载成功mounted');
			this.autoUpdate();
		},
		beforeUpdate(){
			console.log(5 + ' 更新之前beforeUpdate');
		},
		updated(){
			console.log(6 + ' 更新完成updated');
		}
	}

</script>
<style scoped>
	.fade-enter,.fade-leave-active{
		opacity: 0;
	}
	.fade-enter-active,.fade-leave-active{
		transition: opacity .5s;
	}
</style>