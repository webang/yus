<template>
  <div class="yus-demo yus-demo-pull-refresh">
    <div class="yus-demo-block__hd">基本用法(仅支持移动设备)</div>
    <div class="yus-demo-block__bd">
      <div class="yus-demo-row">
        <yus-button type="primary" block @click="activeIndex=0">使用div容器</yus-button>
      </div>
      <div class="yus-demo-row">
        <yus-button type="primary" block @click="activeIndex=1">使用body容器</yus-button>
      </div>
      <BoxContainer v-if="activeIndex===0"></BoxContainer>
      <BodyContainer v-if="activeIndex===1"></BodyContainer>
    </div>
  </div>
</template>

<script>
import BoxContainer from './use-box';
import BodyContainer from './use-body';

export default {
  components: {
    BoxContainer,
    BodyContainer
  },
  data() {
    return {
      activeIndex: 0
    };
  }
};
</script>