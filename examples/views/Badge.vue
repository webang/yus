<template>
  <div class="page-badge">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">基本用法</div>
      <div class="ymu-doc-block__content">
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
  /deep/ .ymu-badge {
    margin-left: 5px;
  }
  /deep/ .ymu-cell__value {
    color: #999;
  }
}
</style>
