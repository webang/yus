<template>
  <div class="yus-demo yus-demo-icon">
    <div class="yus-demo-block__bd">
      <yus-cell title="切换幕布" style="margin-top: 10px">
        <yus-switch slot="value" v-model="visible1"></yus-switch>
      </yus-cell>
      <yus-backdrop :value="visible1" @click="visible1=false"></yus-backdrop>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible1: false
    };
  }
};
</script>

<style lang="scss">
</style>
