<template>
  <div class="ym-actionsheet">
    <Backdrop :value="value" @click="onBackdropClick"></Backdrop>
    <div class="ym-actionsheet__content" :class="{'ym-actionsheet__content--show': value}" ref="menuWrapper">
      <div
        class="ym-actionsheet__head ym-actionsheet__cell"
        v-if="!hasHeaderSlot && title"
      >
        <span>{{ title }}</span>
      </div>
      <div
        class="ym-actionsheet__head ym-actionsheet__cell"
        v-if="hasHeaderSlot"
      >
        <slot name="header"></slot>
      </div>
      <div class="ym-actionsheet__menu">
        <div
          class="ym-actionsheet__cell"
          :class="{'ym-actionsheet__cell--disabled': item.disabled}"
          v-for="(item, key) in menus"
          :key="key"
          @click="onMenuItemClick(item, key)"
        >
          <span>{{ item.text }}</span>
        </div>
        <div
          class="ym-actionsheet__cell ym-actionsheet__cancel"
          @click="onCancelClick"
          v-if="showCancel"
        >
          <span>{{ cancelText || '取消' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Backdrop from '../../backdrop'
export default {
  name: 'ym-actionsheet',
  components: {
    Backdrop
  },
  props: {
    value: Boolean,
    title: String,
    cancelText: String,
    showCancel: Boolean,
    menus: {
      type: [Object, Array],
      default: () => ({})
    },
    closeOnClickMenu: {
      type: Boolean,
      default: true
    },
    closeOnClickBackdrop: {
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
    show (val) {
      console.log(val)
    },
    value: {
      handler: function (val) {
        this.show = val
      },
      immediate: true
    }
  },
  methods: {
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
      this.$emit('on-menu-click', item, key)
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
}
</script>

<style lang="scss" src="./actionsheet.scss"></style>
