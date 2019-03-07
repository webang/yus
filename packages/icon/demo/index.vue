<template>
  <div class="demo-icon">
    <div class="ymu-doc-block__title">点击复制</div>
    <div class="ymu-doc-block__bd">
      <div class="ymu-icon" v-for="(item, index) in icons" :key="index" :data-clipboard-text="item">
        <Icon :name="item"></Icon>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon, Toast } from 'ymu'
import ClipboardJS from 'clipboard'
import icons from 'ymuicon/lib'

export default {
  components: {
    Icon
  },
  data () {
    return {
      icons
    }
  },
  mounted () {
    const clipboard = new ClipboardJS('.ymu-icon')
    clipboard.on('success', function(e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      Toast({
        position: 'bottom',
        message: `已复制到剪切板：${e.text}`
      })
      e.clearSelection();
    });
    clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
    });
  }
}
</script>


<style lang="scss">
.ymu-doc-block__content {
  overflow: hidden;
}

.ymu-icon {
  float: left;
  padding: 5px;
  font-size: 24px;
  box-sizing: border-box;
  color: burlywood;
  &__name {
    font-size: 12px;
  }
}
</style>
