import Slider from './src/index.vue'

Slider.install = (Vue) => {
  Vue.component(Slider.name, Range)
}

export default Slider
