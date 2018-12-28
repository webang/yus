<template>
  <div class="page-badge">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基本用法</div>
      <div class="ym-doc-block__content">
        <ButtonTab></ButtonTab>
      </div>
    </div>
  </div>
</template>

<script>
import { Badge, Cell, ButtonTab } from 'ymu'
export default {
  components: {
    Cell,
    Badge,
    ButtonTab
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
