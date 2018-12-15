import Cell from './src/index.vue'

Cell.install = (Vue) => {
  Vue.component(Cell.name, Cell)
}

export default Cell
