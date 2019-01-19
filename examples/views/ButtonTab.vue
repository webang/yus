<template>
  <div class="page-button-tab">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">基本用法</div>
      <div class="ymu-doc-block__bd">
        <ButtonTabs v-model="tabIndex02">
          <ButtonTab>我的积分</ButtonTab>
          <ButtonTab>我的订单</ButtonTab>
          <ButtonTab>我的邀请</ButtonTab>
        </ButtonTabs>
        <ButtonTabs v-model="tabIndex03" style="margin-top: 20px">
          <ButtonTab>我的积分</ButtonTab>
          <ButtonTab>我的订单</ButtonTab>
          <ButtonTab>我的积分</ButtonTab>
          <ButtonTab>我的订单</ButtonTab>
        </ButtonTabs>
      </div>
      <div class="ymu-doc-block__title">禁用项</div>
      <div class="ymu-doc-block__bd">
        <ButtonTabs v-model="tabIndex01">
          <ButtonTab>我的积分</ButtonTab>
          <ButtonTab>我的订单</ButtonTab>
          <ButtonTab :disabled="true">我的邀请</ButtonTab>
        </ButtonTabs>
      </div>
    </div>
  </div>
</template>

<script>
import { ButtonTab, ButtonTabs } from 'ymu'
console.log(ButtonTab)
console.log(ButtonTabs)

export default {
  components: {
    ButtonTab,
    ButtonTabs
  },
  data () {
    return {
      tabIndex01: 1,
      tabIndex02: 0,
      tabIndex03: 1
    }
  }
}
</script>

<style lang="scss" scoped></style>
