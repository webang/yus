import CellGroup from './src/cell-group.vue'

CellGroup.install = (Vue) => {
  Vue.component(CellGroup.name, CellGroup)
}

export default CellGroup
