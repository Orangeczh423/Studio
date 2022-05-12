
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import Dailyvue from '@/components/Dailyvue'
import Home from '@/components/Home'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Daily',
      name: 'Daily',
      component: Dailyvue
    }
  ]
})
