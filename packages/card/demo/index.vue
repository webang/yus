<template>
  <div class="yus-demo yus-demo-icon">
    <div class="yus-demo-block__hd">基本用法</div>
    <div class="yus-demo-block__bd">
      <yus-card title="我的订单">
        <ul slot="body">
          <li>订单收货率报表</li>
          <li>订单收货率报表</li>
          <li>订单收货率报表</li>
          <li>订单收货率报表</li>
          <li>订单收货率报表</li>
        </ul>
        <div slot="footer">请及时留意订单信息变更</div>
      </yus-card>
    </div>
    <div class="yus-demo-block__hd">投影模式</div>
    <div class="yus-demo-block__bd">
      <yus-card title="我的订单" shadow>
        <ul slot="body">
          <li>订单收货率报表</li>
          <li>订单收货率报表</li>
          <li>订单收货率报表</li>
          <li>订单收货率报表</li>
          <li>订单收货率报表</li>
        </ul>
      </yus-card>
    </div>
    <div class="yus-demo-block__hd">自定义标题</div>
    <div class="yus-demo-block__bd">
      <yus-card shadow>
        <div slot="header" class="title">未完结订单</div>
        <ul slot="body">
          <li>订单收货率报表</li>
          <li>订单收货率报表</li>
          <li>订单收货率报表</li>
          <li>订单收货率报表</li>
          <li>订单收货率报表</li>
        </ul>
      </yus-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.yus-demo {
  font-size: 14px;
}

.title {
  font-size: 16px;
  font-weight: bold;
}
</style>
