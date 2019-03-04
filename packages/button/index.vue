<template>
  <button :class="buttonCls" :disabled="disabled" @click="onClick" role="button">
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
import Clickable from '../clickable'
import use from '../../src/utils/use'
const [useName, useBem] = use('button')

export default useName({
  components: {
    Clickable
  },
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
    text: String,
    block: Boolean,
    disabled: Boolean,
    plain: Boolean,
    clear: Boolean,
    round: Boolean,
    full: Boolean,
    showLoading: Boolean
  },
  computed: {
    buttonCls () {
      return [
        'ymu-button',
        'ymu-button--' + this.type,
        'ymu-button--' + this.size,
        {
          'ymu-button--radius': this.radius,
          'ymu-button--disabled': this.disabled,
          'ymu-button--plain': this.plain,
          'ymu-button--block': this.block,
          'ymu-button--inline': !this.block && this.inline,
          'ymu-button--round': this.round,
          'ymu-button--clear': this.clear,
          'ymu-button--clickable': !this.disabled
        }
      ]
    }
  },
  methods: {
    onClick (event) {
      if (this.disabled) return
      this.$emit('click', event)
    }
  }
})
</script>
