import Progress from './src/index.vue'

Progress.install = (Vue) => {
  Vue.component(Progress.name, Progress)
}

export default Progress
