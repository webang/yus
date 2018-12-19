<template>
  <div class="page-badge">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基本用法</div>
      <div class="ym-doc-block__content">
        <Cell label="红点" clickable is-link>
          <div slot="value">
            <span>新消息</span>
            <Badge></Badge>
          </div>
        </Cell>
        <Cell label="个位数" clickable is-link>
          <template slot="value">
            <span>新消息</span>
            <Badge text="5"></Badge>
          </template>
        </Cell>
        <Cell label="多位数" clickable is-link>
          <template slot="value">
            <span>新消息</span>
            <Badge text="25"></Badge>
          </template>
        </Cell>
      </div>
    </div>
  </div>
</template>

<script>
import { Badge, Cell } from 'ymu'
export default {
  components: {
    Cell,
    Badge
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
