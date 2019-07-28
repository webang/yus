<template>
  <div class="demo-badge">
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">基本用法</div>
      <div class="yus-demo-block__bd">
        <yus-cell title="红点" is-link>
          <div slot="value">
            <span>新消息</span>
            <yus-badge/>
          </div>
        </yus-cell>
        <yus-cell title="个位数" is-link>
          <template slot="value">
            <span>新消息</span>
            <yus-badge text="5"/>
          </template>
        </yus-cell>
        <yus-cell title="多位数" is-link>
          <template slot="value">
            <span>新消息</span>
            <yus-badge text="25"/>
          </template>
        </yus-cell>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.demo-badge {
  /deep/ .yus-badge {
    margin-left: 5px;
  }
  /deep/ .yus-cell__value {
    color: #999;
  }
}
</style>
