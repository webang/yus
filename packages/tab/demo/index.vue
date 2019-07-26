<template>
  <div class="demo-tab">
    <div class="yus-demo-block__hd">基本用法</div>
    <div class="yus-demo-block__bd">
      <yus-tab v-model="active">
        <yus-tab-item>物理</yus-tab-item>
        <yus-tab-item>化学</yus-tab-item>
        <yus-tab-item>数学</yus-tab-item>
        <yus-tab-item>外语</yus-tab-item>
        <yus-tab-item>音乐</yus-tab-item>
      </yus-tab>
    </div>
    <div class="yus-demo-block__hd">禁用选项</div>
    <div class="yus-demo-block__bd">
      <yus-tab v-model="active2">
        <yus-tab-item disabled>物理</yus-tab-item>
        <yus-tab-item>化学</yus-tab-item>
        <yus-tab-item>数学</yus-tab-item>
        <yus-tab-item>外语</yus-tab-item>
        <yus-tab-item>音乐</yus-tab-item>
      </yus-tab>
    </div>
    <div class="yus-demo-block__hd">滚动</div>
    <div class="yus-demo-block__bd">
      <div class="wrapper" ref="wrapper">
        <yus-tab v-model="active3" scrollable ref="scrollTab">
          <yus-tab-item>物理</yus-tab-item>
          <yus-tab-item>化学</yus-tab-item>
          <yus-tab-item>数学</yus-tab-item>
          <yus-tab-item>外语</yus-tab-item>
          <yus-tab-item>音乐</yus-tab-item>
          <yus-tab-item>结构力学</yus-tab-item>
          <yus-tab-item>数学分析</yus-tab-item>
        </yus-tab>
      </div>
    </div>
    <yus-button @click="scrollTo" style="margin-top: 10px; margin-left: 12px">scrollTo</yus-button>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      active: 0,
      active2: 0,
      active3: 1
    };
  },
  methods: {
    scrollTo() {
      this.$refs.scrollTab.scrolltoView(this.active3);
    }
  }
};
</script>
