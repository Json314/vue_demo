import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Transition from '@/components/transition'
import Home from '@/components/Home';

Vue.use(Router);
const Page404 = {
  template: `
    <h1>error 页面走丢了</h1>
  `
}
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/vue/:id/:name',
      name: 'Hello',
      component: Hello    
    },
    {
      path: '/transition',
      component: Transition
      // beforeEnter: (to, from, next) =>{
      //   console.log(to);
      //   console.log(from);
      //   if(from.name == 'Hello'){
      //     next();
      //   }else{
      //     next(false);
      //     alert('只允许从Hello页面跳转')
      //   }
        
      // }
    },
    {
      path: '*',
      component: Page404
    }
  ]
})
