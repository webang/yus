import Marquee from './src/marquee'

Marquee.install = (Vue) => {
  Vue.component(Marquee.name, Marquee)
}

export default Marquee
