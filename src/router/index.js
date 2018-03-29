import Vue from 'vue'
import Router from 'vue-router'
import checkout from '@/components/checkout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'checkout',
      component: checkout
    }
  ]
})
