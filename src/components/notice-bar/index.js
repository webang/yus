import NoticeBar from './src/index.vue'

NoticeBar.install = (Vue) => {
  Vue.component(NoticeBar.name, NoticeBar)
}

export default NoticeBar
