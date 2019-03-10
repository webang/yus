import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import './styles/reset.scss'
import conf from './config/component'
import './docs.router.config'
import docsEntryConf from './docs-entry'

console.log(docsEntryConf)

Vue.use(Router)
Vue.config.productionTip = false

// 组件文档
const routes = []
conf.forEach(element => {
  routes.push({
    path: `/${element.name}`,
    component: () => import(`../packages/${element.name}/zh-CN.md`)
  })
})

Object.keys(docsEntryConf).forEach(element => {
  routes.push({
    path: docsEntryConf[element].path,
    component: docsEntryConf[element].component
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
