import Vue from 'vue'
import Router from 'vue-router'
import ExpressInfoComponent from './components/ExpressInfoComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ExpressInfoComponent',
      component: ExpressInfoComponent
    }
  ]
})
