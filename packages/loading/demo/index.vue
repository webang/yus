<template>
  <div class="demo-loading">
    <div class="ymu-doc-block">

      <div class="ymu-doc-block__hd">circle</div>
      <div class="ymu-doc-block__bd">
        <ymu-loading></ymu-loading>
        <ymu-loading color="white"></ymu-loading>
      </div>

      <div class="ymu-doc-block__hd">triple-bounce</div>
      <div class="ymu-doc-block__bd">
        <ymu-loading type="triple-bounce"></ymu-loading>
      </div>

      <div class="ymu-doc-block__hd">spinner</div>
      <div class="ymu-doc-block__bd">
        <ymu-loading type="spinner"></ymu-loading>
        <ymu-loading type="spinner" color="white"></ymu-loading>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.demo-loading /deep/ .ymu-loading {
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 20px;
}
</style>
