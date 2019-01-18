<template>
  <button
    class="ymu-button"
    :class="[
      'ymu-button--' + type,
      'ymu-button--' + size,
      {
        'ymu-button--radius': radius,
        'ymu-button--disabled': disabled,
        'ymu-button--plain': plain,
        'ymu-button--block': block,
        'ymu-button--inline': !block && inline,
        'ymu-button--round': round,
        'ymu-button--clear': clear,
        'ymu-button--unfeedback': !clickEffect,
        'ymu-button--clickable': !disabled && clickable
      }
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <i class="ymu-loading" v-if="showLoading"></i>
    <slot>
      <span class="yum-button-text">{{ text }}</span>
    </slot>
  </button>
</template>

<script type="text/javascript">

/**
 * @component ymu-button
 * @param { string } [type=light] - 表现为按钮的背景色 light primary danger
 * @param { string } [size=normal] - 尺寸 - large normal small mini
 * @param { boolean } [block=false] - 块按钮
 * @param { boolean } [clear=false] - 没有边框没有背景颜色
 * @param { boolean } [disabled=false] - 禁用按钮
 * @param { boolean } [plain=false] - 幽灵按钮
 * @param { boolean } [round=false] - 圆角按钮
 * @param { string } 显示文本
 * @param { slot } - 默认插槽
 */
export default {
  name: 'ymu-button',
  props: {
    type: {
      type: String,
      default: 'light'
    },
    size: {
      type: String,
      default: 'normal'
    },
    radius: {
      type: Boolean,
      default: true
    },
    inline: {
      type: Boolean,
      default: true
    },
    'click-effect': {
      type: Boolean,
      default: true
    },
    clickable: {
      type: Boolean,
      default: true
    },
    text: String,
    block: Boolean,
    disabled: Boolean,
    plain: Boolean,
    clear: Boolean,
    round: Boolean,
    full: Boolean,
    showLoading: Boolean
  },
  methods: {
    onClick (event) {
      if (this.disabled) return
      this.$emit('click', event)
    }
  }
}
</script>

<style src="./index.scss" lang="scss"></style>
