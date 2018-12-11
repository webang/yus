import Marquee from './src/index'

Marquee.install = (Vue) => {
  Vue.component(Marquee.name, Marquee)
}

export default Marquee
