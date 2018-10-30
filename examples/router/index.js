import Vue from 'vue'
import Router from 'vue-router'

const Button = () => import('../views/Button')
const Actionsheet = () => import('../views/Actionsheet')
const Alert = () => import('../views/Alert')

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
    },
    {
      path: '/Alert',
      name: 'Alert',
      component: Alert
    }
  ]
})
