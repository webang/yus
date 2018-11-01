import Cell from './src/cell.vue'

Cell.install = (Vue) => {
  Vue.component(Cell.name, Cell)
}

export default Cell
