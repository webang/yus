<template>
  <div class="page-actionsheet">
    <Alert
      v-model="option1.show"
      :menus="option1.menus"
      :title="option1.title"
      :showCancel="option1.showCancel"
      :close-on-click-backdrop="false"
      :close-on-click-menu="false"
      @on-menu-click="onMenuClick"
    ></Alert>
    <div>
      <button @click="option1.show=!option1.show">option1</button>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/alert'
export default {
  components: {
    Alert
  },
  data () {
    return {
      option1: {
        show: false,
        title: '选择图片来源',
        showCancel: true,
        menus: [{
          text: '从相册中选择'
        }, {
          text: '从相机中选择'
        }]
      },
      option2: {
        show: false,
        title: '选择图片来源',
        showCancel: true,
        menus: [{
          text: '从相册中选择',
          disabled: true
        }, {
          text: '从相机中选择'
        }]
      },
      option3: {
        show: false,
        title: '选择图片来源',
        showCancel: true,
        menus: [{
          text: '从相册中选择',
          disabled: true
        }, {
          text: '从相机中选择'
        }]
      }
    }
  },
  methods: {
    onMenuClick (item, index) {
      console.log(item, index)
    },
    handleAfterShow () {
      console.log('handleAfterShow')
    },
    handleAfterHide () {
      console.log('handleAfterHide')
    }
  }
}
</script>

<style lang="scss">

</style>
