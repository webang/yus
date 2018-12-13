import Icon from './src/index.vue'

Icon.install = (Vue) => {
  Vue.component(Icon.name, Icon)
}

export default Icon
