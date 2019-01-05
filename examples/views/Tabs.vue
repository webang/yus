<template>
  <div class="page-tabs">
    <div class="ym-doc-block">
      <div class="ym-doc-block__hd">基本用法</div>
      <div class="ym-doc-block__bd">
        <Tabs class="menu" v-model="index1">
          <Tab title="数学分析">
            <div>1</div>
          </Tab>
          <Tab title="高等代数">
            <div>2</div>
          </Tab>
          <Tab title="大学物理" disabled>
            <div>1</div>
          </Tab>
          <Tab title="结构力学">
            <div>2</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs, Tab } from 'ymu'
export default {
  components: {
    Tabs,
    Tab
  },
  data () {
    return {
      index1: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  background: #fff;
}
</style>
