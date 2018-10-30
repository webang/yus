import Vue from 'vue'
import Router from 'vue-router'
import Button from '../views/Button'
import Actionsheet from '../views/Actionsheet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Button',
      component: Button
    },
    {
      path: '/Actionsheet',
      name: 'Actionsheet',
      component: Actionsheet
    }
  ]
})
