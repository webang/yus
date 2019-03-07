<template>
  <div class="demo-navbar">

    <div class="ymu-doc-block__title">默认</div>
    <div class="ymu-doc-block__content">
      <ymu-navbar title="NavBar"/>
    </div>

    <div class="ymu-doc-block__title">设置left-text</div>
    <div class="ymu-doc-block__content">
      <ymu-navbar title="NavBar" leftText="返回"/>
    </div>

    <div class="ymu-doc-block__title">不展示left-arrow</div>
    <div class="ymu-doc-block__content">
      <ymu-navbar title="Title" :left-arrow="false" leftText="返回"/>
    </div>

    <div class="ymu-doc-block__title">点击左侧不返回</div>
    <div class="ymu-doc-block__content">
      <ymu-navbar title="NavBar" :back="false" leftText="返回"/>
    </div>

    <div class="ymu-doc-block__title">自定义内容</div>
    <ymu-navbar>
      <span>NavBar</span>
      <div class="left-wrapper" slot="left">自定义内容</div>
      <div class="right-wrapper" slot="right">自定义内容</div>
    </ymu-navbar>
  </div>
</template>

<script>
import { NavBar } from 'ymu'
export default {
  components: {
    NavBar
  },
  data () {
    return {
      n1Options: {
        title: 'NavBar',
        leftText: '返回'
      },
      n2Options: {
        title: '',
        leftText: ''
      }
    }
  },
  methods: {
    handleClickLeft () {
      console.log('handleClickLeft')
    },
    handleClickRight () {
      console.log('handleClickRight')
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  margin-top: 10px;
}
.ymu-navbar-button {
  padding: 0 15px;
  margin: 0 -15px;
}
</style>
