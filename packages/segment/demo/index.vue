<template>
  <div class="page-button-tab">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">基本用法</div>
      <div class="ymu-doc-block__bd">
        <ymu-segment v-model="tabIndex02">
          <ymu-segment-item>我的积分</ymu-segment-item>
          <ymu-segment-item>我的订单</ymu-segment-item>
          <ymu-segment-item>我的邀请</ymu-segment-item>
        </ymu-segment>
        <ymu-segment v-model="tabIndex03" style="margin-top: 20px">
          <ymu-segment-item>我的积分</ymu-segment-item>
          <ymu-segment-item>我的订单</ymu-segment-item>
          <ymu-segment-item>我的积分</ymu-segment-item>
          <ymu-segment-item>我的订单</ymu-segment-item>
        </ymu-segment>
      </div>
      <div class="ymu-doc-block__hd">禁用项</div>
      <div class="ymu-doc-block__bd">
        <ymu-segment v-model="tabIndex01">
          <ymu-segment-item>我的积分</ymu-segment-item>
          <ymu-segment-item>我的订单</ymu-segment-item>
          <ymu-segment-item :disabled="true">我的邀请</ymu-segment-item>
        </ymu-segment>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
