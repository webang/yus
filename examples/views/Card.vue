<template>
  <div class="page-badge">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">基本用法</div>
      <div class="ymu-doc-block__bd">
        <Card header="收货率报表">
          <ul>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
          </ul>
        </Card>
        <Card header="没有阴影" :shadow="false" style="margin-top: 10px">
          <ul>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
          </ul>
        </Card>
        <Card :shadow="false" style="margin-top: 10px">
          <h3 slot="header" style="margin: 0">自定义header</h3>
          <ul>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
            <li>订单收货率报表</li>
          </ul>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import { Card } from 'ymu'
export default {
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
.page-badge {
  /deep/ .ymu-badge {
    margin-left: 5px;
  }
  /deep/ .ymu-cell__value {
    color: #999;
  }
}
</style>
