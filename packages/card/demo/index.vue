<template>
  <div class="demo-card">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">基本用法</div>
      <div class="ymu-doc-block__bd">
        <ymu-card header="收货率报表">
          <ul>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
          </ul>
        </ymu-card>
        <ymu-card header="没有阴影" :shadow="false" style="margin-top: 10px">
          <ul>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
          </ul>
        </ymu-card>
        <ymu-card :shadow="false" header="footer" style="margin-top: 10px">
          <ul>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
          </ul>
          <p slot="footer">下单之前请确认收货地址</p>
        </ymu-card>
        <ymu-card :shadow="false" style="margin-top: 10px">
          <h3 slot="header" style="margin: 0">自定义header</h3>
          <ul>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
          </ul>
        </ymu-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.demo-card {
  min-height: 100vh;
  padding-bottom: 12px;
  background: #f5f5f9;
}
</style>
