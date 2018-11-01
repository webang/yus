import Navbar from './src/navbar.vue'

Navbar.install = (Vue) => {
  Vue.component(Navbar.name, Navbar)
}

export default Navbar
