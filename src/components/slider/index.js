import Slider from './src/slider.vue'

Slider.install = (Vue) => {
  Vue.component(Slider.name, Range)
}

export default Slider
