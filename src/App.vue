<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <ol class="nav">
      <li><router-link to="/" exact>首页</router-link></li>
      <li><router-link :to="{ name : 'Hello', params: { id : 1, name : 'bar'}}">Hello_1</router-link></li>
      <li><router-link :to="{ name : 'Hello', params: { id : 2, name : 'foo'}}">Hello_2</router-link></li>
      <li><router-link to="/transition" exact>transition</router-link></li>
      <li><router-link to="/ada" exact>随便一个页面</router-link></li>
    </ol>
    <br>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ol.nav li{
  text-align: left;
}
.fade-enter,.fade-leave-active{
  opacity: 0;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity .5s;
}
</style>
