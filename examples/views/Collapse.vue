<template>
  <div class="page-collapse">
    <div class="ymu-doc-block__title">基本用法</div>
    <Collapse>
      <CollapseItem title="编译原理">
        <p>amazing fuck hello world</p>
      </CollapseItem>
      <CollapseItem title="操作系统">
        <p>amazing fuck hello world</p>
      </CollapseItem>
      <CollapseItem title="计算机基础" :border="false">
        <p>amazing fuck hello world</p>
      </CollapseItem>
    </Collapse>

    <div class="ymu-doc-block__title">手风琴</div>
    <Collapse accordion>
      <CollapseItem title="编译原理">
        <p>amazing fuck hello world</p>
      </CollapseItem>
      <CollapseItem title="操作系统">
        <p>amazing fuck hello world</p>
      </CollapseItem>
      <CollapseItem title="计算机基础" :border="false">
        <p>amazing fuck hello world</p>
      </CollapseItem>
    </Collapse>

    <div class="ymu-doc-block__title">默认展开</div>
    <Collapse accordion>
      <CollapseItem title="编译原理" :value="true">
        <p>amazing fuck hello world</p>
      </CollapseItem>
      <CollapseItem title="操作系统">
        <p>amazing fuck hello world</p>
      </CollapseItem>
      <CollapseItem title="计算机基础" :border="false">
        <p>amazing fuck hello world</p>
      </CollapseItem>
    </Collapse>
  </div>
</template>

<script>
import { Collapse, CollapseItem } from 'ymu'
export default {
  components: {
    Collapse,
    CollapseItem
  },
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
.page-collapse {
  font-size: 14px;
}
.item {
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 10px;
}
</style>
