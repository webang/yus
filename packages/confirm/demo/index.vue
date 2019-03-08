<template>
  <div class="page-alert">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">基本用法</div>
      <div class="ymu-doc-block__bd">
        <ymu-cell-group>
          <ymu-cell label="显示">
            <ymu-switch slot="value" v-model="demo1.show"/>
          </ymu-cell>
          <ymu-cell label="输入框">
            <ymu-switch slot="value" v-model="demo2.show"/>
          </ymu-cell>
          <ymu-cell label="点击幕布不关闭">
            <ymu-switch slot="value" v-model="demo3.show"/>
          </ymu-cell>
        </ymu-cell-group>
      </div>
    </div>
    <ymu-confirm
      v-model="demo3.show"
      :title="demo3.title"
      :closeOnClickBackdrop="false"
      @on-cancel="demo3.show=false"
      @on-confirm="demo3.show=false"
    >
      <p>确认要退出登录吗？</p>
    </ymu-confirm>
    <ymu-confirm
      v-model="demo1.show"
      :title="demo1.title"
      @on-cancel="onCancel"
      @on-confirm="confirm"
    >
      <p>确认要退出登录吗？</p>
    </ymu-confirm>
    <ymu-confirm
      v-model="demo2.show"
      :title="demo2.title"
      :show-input="true"
      @on-cancel="onCancel2"
      @on-confirm="confirm2"
      :placeholder="demo2.placeholder"
      :inputValue="demo2.inputValue"
      @on-input-change="onInputChange"
    >
      <p>确认要退出登录吗？</p>
    </ymu-confirm>
  </div>
</template>

<script>
export default {
  data () {
    return {
      demo1: {
        show: false,
        title: '系统提示'
      },
      demo2: {
        show: false,
        showInput: true,
        title: '系统提示',
        placeholder: '请输入验证码',
        inputValue: 5
      },
      demo3: {
        show: false,
        title: '系统提示'
      }
    }
  },
  methods: {
    onCancel () {
      // Toast({
      //   message: '您选择了取消'
      // })
      this.demo1.show = false
    },
    confirm () {
      // Toast({
      //   message: '您选择了确定'
      // })
      this.demo1.show = false
    },
    onCancel2 () {
      // Toast({
      //   message: '您选择了取消'
      // })
      this.demo2.show = false
    },
    confirm2 () {
      // Toast({
      //   message: `您填写了${this.demo2.inputValue}`
      // })
      this.demo2.show = false
    },
    onInputChange (val) {
      this.demo2.inputValue = val
    }
  }
}
</script>
