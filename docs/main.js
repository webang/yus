import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import './styles/reset.scss'
import conf from './config/component'

Vue.use(Router)
Vue.config.productionTip = false

const routes = []
conf.forEach(value => {
  routes.push({
    path: `/${value.name}`,
    component: () => import(`../packages/${value.name}/README.md`)
  })
})

const router = new Router({
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
