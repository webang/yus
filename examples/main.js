import Vue from 'vue'
import App from './App'
import router from './router'
import '../packages/index.scss'
import './assets/main.scss'
import './assets/global.scss'
import ymu from '../packages'
require('ymuicon/dist/style.css')

ymu.install(Vue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
