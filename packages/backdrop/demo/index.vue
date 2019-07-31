<template>
  <div class="yus-demo yus-demo-icon">
    <div class="yus-demo-block__bd">
      <yus-cell title="切换幕布" style="margin-top: 10px">
        <yus-switch slot="value" v-model="v1"></yus-switch>
      </yus-cell>
      <yus-backdrop :value="v1" @click="v1=false"></yus-backdrop>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      v1: false
    };
  }
};
</script>