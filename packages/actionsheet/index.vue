<template>
  <div class="ymu-actionsheet">
    <Backdrop :value="value" @click="onBackdropClick"></Backdrop>
    <div
      class="ymu-actionsheet__content"
      :class="{'ymu-actionsheet__content--show': value}"
      ref="menuWrapper"
    >
      <div class="ymu-actionsheet__head ymu-actionsheet__cell" v-if="hasHeaderSlot || title">
        <slot name="header">
          <span>{{ title }}</span>
        </slot>
      </div>
      <div class="ymu-actionsheet__menu">
        <div
          class="ymu-actionsheet__cell"
          :class="[{
            'ymu-actionsheet__cell--disabled': item.disabled,
            'ymu-actionsheet__cell--clickable': !item.disabled && buttonClickable
          }]"
          v-for="(item, key) in menus"
          :key="key"
          @click="onMenuItemClick(item, key)"
        >
          <span>{{ item.text }}</span>
        </div>
        <div
          class="ymu-actionsheet__cancel ymu-actionsheet__cell"
          :class="[{
            'ymu-actionsheet__cell--clickable': buttonClickable
          }]"
          @click="onCancelClick"
          v-if="showCancel"
        >
          <span>{{ cancelText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Backdrop from '../backdrop'
import use from '../../src/utils/use'
const [useName, useBem] = use('actionsheet')

export default useName({
  components: {
    Backdrop
  },
  props: {
    value: Boolean,
    title: String,
    cancelText: {
      type: String,
      default: '取消'
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    menus: {
      type: [Object, Array],
      default: () => []
    },
    closeOnClickMenu: {
      type: Boolean,
      default: true
    },
    closeOnClickBackdrop: {
      type: Boolean,
      default: true
    },
    buttonClickable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      show: false,
      hasHeaderSlot: false
    }
  },
  watch: {
    value: {
      handler: function (val) {
        this.show = val
      },
      immediate: true
    }
  },
  methods: {
    useBem,
    onTransitionEnd (event) {
      if (this.$refs.menuWrapper === event.target) {
        this.$emit(this.show ? 'on-after-show' : 'on-after-hide')
      }
    },
    onBackdropClick () {
      this.$emit('on-click-backdrop')
      if (this.closeOnClickBackdrop) {
        this.$emit('input', false)
      }
    },
    onMenuItemClick (item, key) {
      if (item.disabled) return
      this.$emit('on-click-menu', item, key)
      if (this.closeOnClickMenu) {
        this.$emit('input', false)
      }
    },
    onCancelClick () {
      this.$emit('input', false)
    }
  },
  mounted () {
    this.hasHeaderSlot = !!this.$slots.header
    this.$nextTick(() => {
      this.$refs.menuWrapper.addEventListener('transitionend', this.onTransitionEnd)
    })
  },
  beforeDestroy () {
    this.$refs.menuWrapper.removeEventListener('transitionend', this.onTransitionEnd)
  }
})
</script>
