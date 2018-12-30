<template>
  <div class="page-badge">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基本用法</div>
      <div class="ym-doc-block__bd">
        <ButtonTab>
          <ButtonTabItem>我的积分</ButtonTabItem>
          <ButtonTabItem>我的订单</ButtonTabItem>
          <ButtonTabItem>我的邀请</ButtonTabItem>
        </ButtonTab>
      </div>
    </div>
  </div>
</template>

<script>
import { Badge, Cell, ButtonTab, ButtonTabItem } from 'ymu'
console.log(ButtonTabItem)
export default {
  components: {
    Cell,
    Badge,
    ButtonTab,
    ButtonTabItem
  }
}
</script>

<style lang="scss" scoped>
.page-badge {
  /deep/ .ym-badge {
    margin-left: 5px;
  }
  /deep/ .ym-cell__value {
    color: #999;
  }
}
</style>
