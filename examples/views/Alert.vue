<template>
  <div class="page-alert">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基本用法</div>
      <div class="ym-doc-block__content list">
        <CellGroup>
          <Cell title="基本用法">
            <button slot="value" @click="option1.show=!option1.show">切换</button>
          </Cell>
        </CellGroup>
      </div>
    </div>
    <Alert
      v-model="option1.show"
      :menus="option1.menus"
      :title="option1.title"
      :showCancel="option1.showCancel"
      :close-on-click-menu="false"
      @on-menu-click="onMenuClick"
    >
      <p>真的要离开我吗?</p>
    </Alert>
  </div>
</template>

<script>
import Alert from '@/components/alert'
import Cell from '@/components/cell'
import CellGroup from '@/components/cell-group'
export default {
  components: {
    Alert,
    Cell,
    CellGroup
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
