import MarqueeItem from './src/index'

MarqueeItem.install = (Vue) => {
  Vue.component(MarqueeItem.name, MarqueeItem)
}

export default MarqueeItem
