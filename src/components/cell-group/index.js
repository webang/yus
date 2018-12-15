import CellGroup from './src/index.vue'

CellGroup.install = (Vue) => {
  Vue.component(CellGroup.name, CellGroup)
}

export default CellGroup
