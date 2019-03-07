<template>
  <div class="demo-badge">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">基本用法</div>
      <div class="ymu-doc-block__content">
        <ymu-cell label="红点" is-link>
          <div slot="value">
            <span>新消息</span>
            <ymu-badge/>
          </div>
        </ymu-cell>
        <ymu-cell label="个位数" is-link>
          <template slot="value">
            <span>新消息</span>
            <ymu-badge text="5"/>
          </template>
        </ymu-cell>
        <ymu-cell label="多位数" is-link>
          <template slot="value">
            <span>新消息</span>
            <ymu-badge text="25"/>
          </template>
        </ymu-cell>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.demo-badge {
  /deep/ .ymu-badge {
    margin-left: 5px;
  }
  /deep/ .ymu-cell__value {
    color: #999;
  }
}
</style>
