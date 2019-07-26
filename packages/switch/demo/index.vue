<template>
  <div class="yus-demo yus-demo-icon">
    <div class="yus-demo-block__hd">基本使用</div>
    <div class="yus-demo-block__bd">
      <!-- <yus-switch slot="value" v-model="value3" :disabled="true"></yus-switch> -->
      <yus-cell title="开启定时">
        <yus-switch slot="value" v-model="value1"></yus-switch>
      </yus-cell>
      <yus-cell title="禁用状态">
        <yus-switch slot="value" v-model="value2" :disabled="true"></yus-switch>
      </yus-cell>
      <yus-cell title="禁用状态">
        <yus-switch slot="value" v-model="value3" :disabled="true"></yus-switch>
      </yus-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: false,
      value2: false,
      value3: true
    };
  }
};
</script>

<style lang="scss">
</style>
