<template>
  <div class="demo-actionsheet">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">基本用法</div>
      <div class="ymu-doc-block__bd">
        <ymu-cell-group>
          <ymu-cell label="警用选项">
            <ymu-switch slot="value" v-model="option2.show"/>
          </ymu-cell>
          <ymu-cell label="自定义标题">
            <ymu-switch slot="value" v-model="option3.show"/>
          </ymu-cell>
          <ymu-cell label="点击幕布不关闭">
            <ymu-switch slot="value" v-model="option1.show"/>
          </ymu-cell>
        </ymu-cell-group>
      </div>
    </div>
    <ymu-actionsheet
      v-model="option1.show"
      :menus="option1.menus"
      :title="option1.title"
      :showCancel="option1.showCancel"
      :close-on-click-backdrop="false"
      :close-on-click-menu="false"
      @on-click-menu="onMenuClick"
      @on-after-show="onAfterShow"
      @on-after-hide="onAfterHide"
    />
    <ymu-actionsheet
      v-model="option2.show"
      :menus="option2.menus"
      :title="option2.title"
      @on-click-menu="onMenuClick"
      :showCancel="option2.showCancel"
    />
    <ymu-actionsheet
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
    </ymu-actionsheet>
  </div>
</template>

<script>
export default {
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
