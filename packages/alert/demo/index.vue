<template>
  <div class="demo-alert">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">基本用法</div>
      <div class="ymu-doc-block__bd">
        <ymu-cell-group>
          <ymu-cell label="基本用法">
            <ymu-switch slot="value" v-model="option1.show"/>
          </ymu-cell>
          <ymu-cell label="基本用法">
            <ymu-switch slot="value" v-model="option2.show"/>
          </ymu-cell>
        </ymu-cell-group>
      </div>
    </div>
    <ymu-alert v-model="option1.show" :title="option1.title">
      <p slot="content">真的要离开我吗?</p>
    </ymu-alert>
    <ymu-alert v-model="option2.show" :title="option2.title">
      <div slot="title">自定义 title</div>
      <p slot="content">自定义 content</p>
      <div slot="footer" style="flex: 1" @click="option2.show=false">自定义 footer</div>
    </ymu-alert>
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
    handleAfterShow () {
      console.log('handleAfterShow')
    },
    handleAfterHide () {
      console.log('handleAfterHide')
    }
  }
}
</script>
