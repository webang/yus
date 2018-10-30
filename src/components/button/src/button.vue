<template>
  <a
    class="ymu-button"
    :class="[
      'ymu-button--color-' + color,
      'ymu-button--size-' + size,
      'ymu-button--radius',
      {
        'ymu-button--disabled': disabled,
        'ymu-button--plain': plain,
        'ymu-button--block': block,
        'ymu-button--round': round,
        'ymu-button--clear': clear,
        'ymu-button--icon': icon || $slots.icon,
        'ymu-button--active': active
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div class="ymu-button-content">
      <i class="ymu-loading" v-show="showLoading"></i>
      <slot>
        <span class="yum-button__text">{{ text }}</span>
      </slot>
    </div>
  </a>
</template>

<script type="text/javascript">

/**
 * @component ymu-button
 * @param { string } [color=light] - 表现为按钮的背景色
 * @param { string } [size=normal] - 尺寸 - normal, small, large
 * @param { boolean } [block=false] - 块按钮
 * @param { boolean } [clear=false] - 没有边框没有背景颜色
 * @param { boolean } [disabled=false] - 禁用按钮
 * @param { boolean } [plain=false] - 幽灵按钮
 * @param { boolean } [round=false] - 圆角按钮
 * @param { slot } - 显示文本
 * @param { slot } [icon] 显示图标
 */
export default {
  name: 'ymu-button',
  props: {
    icon: String,
    color: {
      type: String,
      default: 'light'
    },
    size: {
      type: String,
      default: 'normal'
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
  data () {
    return {
      active: false
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    },
    triggerEvent (type, isActive, evt) {
      if (isActive !== this.active) {
        this.active = isActive
      }
    },
    onTouchStart (evt) {
      if (this.disabled) { return }
      this.triggerEvent('TouchStart', true, evt)
    },
    onTouchEnd (evt) {
      this.triggerEvent('TouchEnd', false, evt)
    }
  }
}
</script>

<style src="./button.scss" lang="scss"></style>
