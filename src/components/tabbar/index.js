import Tabbar from './src/index.vue'

Tabbar.install = (Vue) => {
  Vue.component(Tabbar.name, Tabbar)
}

export default Tabbar
