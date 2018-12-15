import Backdrop from './src/index.vue'

Backdrop.install = (Vue) => {
  Vue.component(Backdrop.name, Backdrop)
}

export default Backdrop
