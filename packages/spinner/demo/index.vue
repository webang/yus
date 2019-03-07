<template>
  <div class="demo-spinner">
    <div class="ymu-doc-block">

      <div class="ymu-doc-block__hd">android</div>
      <div class="ymu-doc-block__bd">
        <ymu-spinner type="android"></ymu-spinner>
      </div>

      <div class="ymu-doc-block__hd">ios</div>
      <div class="ymu-doc-block__bd">
        <ymu-spinner type="ios"></ymu-spinner>
      </div>

      <div class="ymu-doc-block__hd">triple-bounce</div>
      <div class="ymu-doc-block__bd">
        <ymu-spinner type="triple-bounce"></ymu-spinner>
      </div>

      <!-- <div class="ymu-doc-block__hd">spinner</div>
      <div class="ymu-doc-block__bd">
        <ymu-spinner type="spinner"></ymu-spinner>
        <ymu-spinner type="spinner" color="white"></ymu-spinner>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.demo-spinner /deep/ .ymu-spinner {
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 20px;
  // color: #c9c9c9;
}
</style>
