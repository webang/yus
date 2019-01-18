<template>
  <div class="page-alert">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">基本用法</div>
      <div class="ymu-doc-block__content list">
        <CellGroup>
          <Cell label="显示">
            <XSwitch slot="value" v-model="demo1.show"></XSwitch>
          </Cell>
          <Cell label="输入框">
            <XSwitch slot="value" v-model="demo2.show"></XSwitch>
          </Cell>
          <Cell label="点击幕布不关闭">
            <XSwitch slot="value" v-model="demo3.show"></XSwitch>
          </Cell>
        </CellGroup>
      </div>
    </div>
    <Confirm
      v-model="demo3.show"
      :title="demo3.title"
      :closeOnClickBackdrop="false"
      @on-cancel="demo3.show=false"
      @on-confirm="demo3.show=false"
    >
      <p>确认要退出登录吗？</p>
    </Confirm>
    <Confirm
      v-model="demo1.show"
      :title="demo1.title"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
    >
      <p>确认要退出登录吗？</p>
    </Confirm>
    <Confirm
      v-model="demo2.show"
      :title="demo2.title"
      :show-input="true"
      @on-cancel="onCancel2"
      @on-confirm="onConfirm2"
      :placeholder="demo2.placeholder"
      :inputValue="demo2.inputValue"
      @on-input-change="onInputChange"
    >
      <p>确认要退出登录吗？</p>
    </Confirm>
  </div>
</template>

<script>
import { Alert, Cell, CellGroup, Confirm, Toast, Switch as XSwitch } from 'ymu'
export default {
  components: {
    Alert,
    Cell,
    CellGroup,
    Confirm,
    XSwitch
  },
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
      Toast({
        message: '您选择了取消'
      })
      this.demo1.show = false
    },
    onConfirm () {
      Toast({
        message: '您选择了确定'
      })
      this.demo1.show = false
    },
    onCancel2 () {
      Toast({
        message: '您选择了取消'
      })
      this.demo2.show = false
    },
    onConfirm2 () {
      Toast({
        message: `您填写了${this.demo2.inputValue}`
      })
      this.demo2.show = false
    },
    onInputChange (val) {
      this.demo2.inputValue = val
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
