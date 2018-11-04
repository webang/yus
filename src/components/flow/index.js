import Flow from './src/flow'

Flow.install = (Vue) => {
  Vue.component(Flow.name, Flow)
}

export default Flow
