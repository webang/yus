function install (Vue) {
  const { name } = this
  Vue.component(name, this)
}

export default (name, originName) => component => {
  component.name = name
  component.originName = originName
  component.install = install
  return component
}
