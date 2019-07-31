<template>
  <div class="yus-demo yus-demo-icon">
    <div class="yus-demo-block__hd">图标组件</div>
    <div class="yus-demo-block__bd">
      <div
        class="icon-wrapper"
        v-for="(item, index) in icons"
        :key="index"
        :data-clipboard-text="item"
      >
        <yus-icon class="icon" :name="item"/>
        <div class="name">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard';
import icons from 'ymuicon/lib';

export default {
  data() {
    return {
      icons
    };
  },
  mounted() {
    const clipboard = new ClipboardJS('.icon-wrapper');
    clipboard.on('success', function(e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      e.clearSelection();
    });
    clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
    });
  }
};
</script>

<style lang="scss">
.icon-wrapper {
  float: left;
  width: 50%;
  height: 80px;
  padding: 5px;
  box-sizing: border-box;
  font-size: 24px;
  color: burlywood;
  text-align: center;
  .name {
    font-size: 12px;
  }
}
</style>
