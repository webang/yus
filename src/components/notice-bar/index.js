import NoticeBar from './src/notice-bar.vue'

NoticeBar.install = (Vue) => {
  Vue.component(NoticeBar.name, NoticeBar)
}

export default NoticeBar
