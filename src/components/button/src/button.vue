<template>
  <button
    class="ym-button"
    :class="[
      'ym-button--' + type,
      'ym-button--' + size,
      {
        'ym-button--radius': radius,
        'ym-button--disabled': disabled,
        'ym-button--plain': plain,
        'ym-button--block': block,
        'ym-button--inline': !block && inline,
        'ym-button--round': round,
        'ym-button--clear': clear,
        'ym-button--unfeedback': !clickEffect
      }
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <i class="ym-loading" v-if="showLoading"></i>
    <slot>
      <span class="yum-button-text">{{ text }}</span>
    </slot>
  </button>
</template>

<script type="text/javascript">

/**
 * @component ym-button
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
  name: 'ym-button',
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

<style src="./button.scss" lang="scss"></style>
