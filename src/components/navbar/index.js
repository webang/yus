import Navbar from './src/index'

Navbar.install = (Vue) => {
  Vue.component(Navbar.name, Navbar)
}

export default Navbar
