import MarqueeItem from './src/marquee-item'

MarqueeItem.install = (Vue) => {
  Vue.component(MarqueeItem.name, MarqueeItem)
}

export default MarqueeItem
