<template>
  <div class="page-actionsheet">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基本用法</div>
      <div class="ym-doc-block__content list">
        <CellGroup>
          <Cell title="警用选项">
            <button slot="value" @click="option2.show=!option2.show">切换</button>
          </Cell>
          <Cell title="自定义标题">
            <button slot="value" @click="option3.show=!option3.show">切换</button>
          </Cell>
          <Cell title="点击幕布不关闭">
            <button slot="value" @click="option1.show=!option1.show">切换</button>
          </Cell>
        </CellGroup>
      </div>
    </div>
    <Actionsheet
      v-model="option1.show"
      :menus="option1.menus"
      :title="option1.title"
      :showCancel="option1.showCancel"
      :close-on-click-backdrop="false"
      :close-on-click-menu="false"
      @on-menu-click="onMenuClick"
    ></Actionsheet>
    <Actionsheet
      v-model="option2.show"
      :menus="option2.menus"
      :title="option2.title"
      :showCancel="option2.showCancel"
    ></Actionsheet>
    <Actionsheet
      v-model="option3.show"
      :menus="option3.menus"
      :title="option3.title"
      :showCancel="option3.showCancel"
      @on-after-show="handleAfterShow"
      @on-after-hide="handleAfterHide"
    >
      <div slot="header">
        <div>
          <p>I Miss You</p>
          <p>idiot</p>
        </div>
      </div>
    </Actionsheet>
  </div>
</template>

<script>
import Cell from '@/components/cell'
import CellGroup from '@/components/cell-group'
import Actionsheet from '@/components/actionsheet'
export default {
  components: {
    Cell,
    CellGroup,
    Actionsheet
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
