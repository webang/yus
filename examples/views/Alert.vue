<template>
  <div class="page-alert">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基本用法</div>
      <div class="ym-doc-block__content list">
        <CellGroup>
          <Cell label="基本用法">
            <button slot="value" @click="option1.show=!option1.show">切换</button>
          </Cell>
          <Cell label="基本用法">
            <button slot="value" @click="option2.show=!option2.show">切换</button>
          </Cell>
        </CellGroup>
      </div>
    </div>
    <Alert v-model="option1.show" :title="option1.title">
      <p slot="content">真的要离开我吗?</p>
    </Alert>

    <Alert v-model="option2.show" :title="option2.title">
      <div slot="title">自定义 title</div>
      <p slot="content">自定义 content</p>
      <div slot="footer" style="flex: 1" @click="option2.show=false">自定义 footer</div>
    </Alert>
  </div>
</template>

<script>
import { Alert, Cell, CellGroup } from 'ymu'
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
