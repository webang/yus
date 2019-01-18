<template>
  <div class="page-navbar">
    <ul>
      <li>
        <NavBar title="NavBar" leftText="返回" @on-click-left="handleClickLeft" @on-click-right="handleClickRight"></NavBar>
      </li>
      <li>
        <NavBar :left-text="''">NavBar</NavBar>
      </li>
      <li>
        <NavBar>
          <span>NavBar</span>
          <div class="left-wrapper" slot="left">自定义内容</div>
          <div class="right-wrapper" slot="right">自定义内容</div>
        </NavBar>
      </li>
    </ul>
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
