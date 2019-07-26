<template>
  <div class="yus-demo yus-demo-icon">
    <div class="yus-demo-block__hd">基本用法</div>
    <div class="yus-demo-block__bd">
      <yus-segment v-model="tabIndex1">
        <yus-segment-item>我的积分</yus-segment-item>
        <yus-segment-item>我的订单</yus-segment-item>
      </yus-segment>
      <yus-segment v-model="tabIndex2" style="margin-top: 20px">
        <yus-segment-item>我的积分</yus-segment-item>
        <yus-segment-item>我的订单</yus-segment-item>
        <yus-segment-item>我的积分</yus-segment-item>
        <yus-segment-item>我的订单</yus-segment-item>
      </yus-segment>
    </div>
    <div class="yus-demo-block__hd">禁用选项</div>
    <div class="yus-demo-block__bd">
      <yus-segment v-model="tabIndex3" style="margin-top: 20px">
        <yus-segment-item>我的积分</yus-segment-item>
        <yus-segment-item>我的订单</yus-segment-item>
        <yus-segment-item :disabled="true">我的邀请</yus-segment-item>
      </yus-segment>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex1: 0,
      tabIndex2: 1,
      tabIndex3: 1
    };
  }
};
</script>
