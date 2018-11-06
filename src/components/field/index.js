import Field from './src/field'

Field.install = (Vue) => {
  Vue.component(Field.name, Field)
}

export default Field
