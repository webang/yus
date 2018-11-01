<template>
  <div class="page-navbar">
    <ul>
      <li>
        <navbar title="NavBar" leftText="返回" @on-click-left="handleClickLeft" @on-click-right="handleClickRight"></navbar>
      </li>
      <li>
        <navbar :left-text="''">NavBar</navbar>
      </li>
      <li>
        <navbar>
          <span>NavBar</span>
          <div class="left-wrapper" slot="left">自定义内容</div>
          <div class="right-wrapper" slot="right">自定义内容</div>
        </navbar>
      </li>
    </ul>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
export default {
  components: {
    navbar
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
      // this.$router.go(-1)
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
