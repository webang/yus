import Backdrop from './src/backdrop.vue'

Backdrop.install = (Vue) => {
  Vue.component(Backdrop.name, Backdrop)
}

export default Backdrop
