<template>
  <div class="page-actionsheet">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">基本用法</div>
      <div class="ymu-doc-block__content list">
        <CellGroup>
          <Cell header="警用选项">
            <YSwitch slot="value" v-model="option2.show"/>
          </Cell>
          <Cell header="自定义标题">
            <YSwitch slot="value" v-model="option3.show"/>
          </Cell>
          <Cell header="点击幕布不关闭">
            <YSwitch slot="value" v-model="option1.show"/>
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
      @on-click-menu="onMenuClick"
      @on-after-show="onAfterShow"
      @on-after-hide="onAfterHide"
    ></Actionsheet>
    <Actionsheet
      v-model="option2.show"
      :menus="option2.menus"
      :title="option2.title"
      @on-click-menu="onMenuClick"
      :showCancel="option2.showCancel"
    ></Actionsheet>
    <Actionsheet
      v-model="option3.show"
      :menus="option3.menus"
      :title="option3.title"
      :showCancel="option3.showCancel"
      @on-click-menu="onMenuClick"
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
import { Cell, CellGroup, Actionsheet, Switch as YSwitch } from 'ymu'

console.log(Actionsheet)

export default {
  components: {
    Cell,
    CellGroup,
    Actionsheet,
    YSwitch
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
    onAfterShow () {
      console.log('onAfterShow')
    },
    onAfterHide () {
      console.log('onAfterHide')
    }
  }
}
</script>
