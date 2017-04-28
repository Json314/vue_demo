<template>
  <div class="hello">
  <el-button type="primary">主要按钮</el-button>
    <h1>{{ count }}</h1>
    <div>
      <button type="button" @click="$store.commit('add');">add</button>
      <button type="button" @click="addPlus()">add plus</button>
    </div>
    <h2>{{$route.params.id}} + {{$route.params.name}}</h2>
    
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex';
export default {
  name: 'hello',
  data () {
    return {
     
    }
  },
  computed: {
    ...mapState(['count']),
    // ...mapGetters(['count'])
  },
  methods: {
    // ...mapActions(['addPlus']);
   addPlus(){
    this.$store.dispatch('addPlus');
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
