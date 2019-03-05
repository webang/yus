<template>
  <div class="view view-loading">
    <div class="ymu-doc-block">

      <div class="ymu-doc-block__hd">circle</div>
      <div class="ymu-doc-block__bd">
        <loading></loading>
        <loading color="white"></loading>
      </div>

      <div class="ymu-doc-block__hd">triple-bounce</div>
      <div class="ymu-doc-block__bd">
        <loading type="triple-bounce"></loading>
      </div>

      <div class="ymu-doc-block__hd">spinner</div>
      <div class="ymu-doc-block__bd">
        <loading type="spinner"></loading>
        <loading type="spinner" color="white"></loading>
      </div>
    </div>
  </div>
</template>

<script>
import { Loading } from 'ymu'
export default {
  components: {
    Loading
  }
}
</script>

<style lang="scss" scoped>
.view-loading /deep/ .ymu-loading {
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 20px;
}
</style>
