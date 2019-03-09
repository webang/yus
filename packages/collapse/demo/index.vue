<template>
  <div class="demo-collapse">
    <div class="ymu-doc-block__hd">基本用法</div>
    <ymu-collapse>
      <ymu-collapse-item title="编译原理">
        <p>amazing fuck hello world</p>
      </ymu-collapse-item>
      <ymu-collapse-item title="操作系统">
        <p>amazing fuck hello world</p>
      </ymu-collapse-item>
      <ymu-collapse-item title="计算机基础" :border="false">
        <p>amazing fuck hello world</p>
      </ymu-collapse-item>
    </ymu-collapse>

    <div class="ymu-doc-block__hd">手风琴</div>
    <ymu-collapse accordion>
      <ymu-collapse-item title="编译原理">
        <p>amazing fuck hello world</p>
      </ymu-collapse-item>
      <ymu-collapse-item title="操作系统">
        <p>amazing fuck hello world</p>
      </ymu-collapse-item>
      <ymu-collapse-item title="计算机基础" :border="false">
        <p>amazing fuck hello world</p>
      </ymu-collapse-item>
    </ymu-collapse>

    <div class="ymu-doc-block__hd">默认展开</div>
    <ymu-collapse accordion>
      <ymu-collapse-item title="编译原理" :value="true">
        <p>amazing fuck hello world</p>
      </ymu-collapse-item>
      <ymu-collapse-item title="操作系统">
        <p>amazing fuck hello world</p>
      </ymu-collapse-item>
      <ymu-collapse-item title="计算机基础" :border="false">
        <p>amazing fuck hello world</p>
      </ymu-collapse-item>
    </ymu-collapse>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkboxGroupValue1: ['深圳'],
      checkboxGroupValue2: ['珠海'],
      checkboxGroupValue3: ['深圳'],
    }
  },
  watch: {
    checkboxGroupValue (val) {
      console.log(val)
    }
  }
}
</script>


<style lang="scss" scoped>
.demo-collapse {
  font-size: 14px;
}
.item {
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 10px;
}
</style>
