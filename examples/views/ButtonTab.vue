<template>
  <div class="page-button-tab">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">基本用法</div>
      <div class="ymu-doc-block__bd">
        <ButtonTab v-model="tabIndex02">
          <ButtonTabItem>我的积分</ButtonTabItem>
          <ButtonTabItem>我的订单</ButtonTabItem>
          <ButtonTabItem>我的邀请</ButtonTabItem>
        </ButtonTab>
        <ButtonTab v-model="tabIndex03" style="margin-top: 20px">
          <ButtonTabItem>我的积分</ButtonTabItem>
          <ButtonTabItem>我的订单</ButtonTabItem>
          <ButtonTabItem>我的积分</ButtonTabItem>
          <ButtonTabItem>我的订单</ButtonTabItem>
        </ButtonTab>
      </div>
      <div class="ymu-doc-block__title">禁用项</div>
      <div class="ymu-doc-block__bd">
        <ButtonTab v-model="tabIndex01">
          <ButtonTabItem>我的积分</ButtonTabItem>
          <ButtonTabItem>我的订单</ButtonTabItem>
          <ButtonTabItem :disabled="true">我的邀请</ButtonTabItem>
        </ButtonTab>
      </div>
    </div>
  </div>
</template>

<script>
import { ButtonTab, ButtonTabItem } from 'ymu'
export default {
  components: {
    ButtonTab,
    ButtonTabItem
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
