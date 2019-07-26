<template>
  <div class="yus-demo yus-demo-icon">
    <div class="yus-demo-block__hd">基本用法</div>
    <div class="yus-demo-block__bd">
      <yus-cell title="从底部弹出">
        <yus-switch slot="value" v-model="v1"></yus-switch>
      </yus-cell>
      <yus-cell title="从顶部弹出">
        <yus-switch slot="value" v-model="v2"></yus-switch>
      </yus-cell>
      <yus-cell title="从左侧弹出">
        <yus-switch slot="value" v-model="v3"></yus-switch>
      </yus-cell>
      <yus-cell title="从右侧弹出">
        <yus-switch slot="value" v-model="v4"></yus-switch>
      </yus-cell>
    </div>
    <yus-popup v-model="v1">
      <ul>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
      </ul>
    </yus-popup>
    <yus-popup v-model="v2" position="top">
      <ul>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
      </ul>
    </yus-popup>
    <yus-popup v-model="v3" position="left">
      <ul>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
      </ul>
    </yus-popup>
    <yus-popup v-model="v4" position="right">
      <ul>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
        <li>啊实打实大苏打大苏打的</li>
      </ul>
    </yus-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      v1: false,
      v2: false,
      v3: false,
      v4: false
    };
  }
};
</script>

<style lang="scss" scoped>
ul {
  padding: 10px 0;
}
li {
  padding: 0 12px;
  line-height: 24px;
}
</style>
