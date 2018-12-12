import TabbarItem from './src/index.vue'

TabbarItem.install = (Vue) => {
  Vue.component(TabbarItem.name, TabbarItem)
}

export default TabbarItem
