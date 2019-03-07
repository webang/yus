<template>
  <div class="demo-tab">
    <div class="ymu-doc-block__title">基本用法</div>
    <div class="ymu-doc-block__content">
      <ymu-tab v-model="active">
        <ymu-tab-item>物理</ymu-tab-item>
        <ymu-tab-item>化学</ymu-tab-item>
        <ymu-tab-item>数学</ymu-tab-item>
        <ymu-tab-item>外语</ymu-tab-item>
        <ymu-tab-item>音乐</ymu-tab-item>
      </ymu-tab>
    </div>
    <div class="ymu-doc-block__title">禁用选项</div>
    <div class="ymu-doc-block__content">
      <ymu-tab v-model="active2">
        <ymu-tab-item disabled>物理</ymu-tab-item>
        <ymu-tab-item>化学</ymu-tab-item>
        <ymu-tab-item>数学</ymu-tab-item>
        <ymu-tab-item>外语</ymu-tab-item>
        <ymu-tab-item>音乐</ymu-tab-item>
      </ymu-tab>
    </div>
    <div class="ymu-doc-block__title">滚动</div>
    <div class="ymu-doc-block__content">
      <ymu-tab v-model="active3" scrollable>
        <ymu-tab-item>物理</ymu-tab-item>
        <ymu-tab-item>化学</ymu-tab-item>
        <ymu-tab-item>数学</ymu-tab-item>
        <ymu-tab-item>外语</ymu-tab-item>
        <ymu-tab-item>音乐</ymu-tab-item>
        <ymu-tab-item>结构力学</ymu-tab-item>
        <ymu-tab-item>数学分析</ymu-tab-item>
      </ymu-tab>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      active: 0,
      active2: 0,
      active3: 0
    }
  },
  watch: {
    active (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>

</style>
