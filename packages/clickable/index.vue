<template>
  <div
    :class="clickCls"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    @touchmove="handleTouchMove"
    @click="handleClick"
  >
    <slot></slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('clickable')

export default useName({
  data () {
    return {
      clickCls: ['ymu-clickable']
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleTouchStart() {
      if (!this.disabled) {
        this.clickCls = ['ymu-clickable', 'ymu-clickable--active']
      }
      this.$emit('touchstart')
    },
    handleTouchEnd () {
      this.clickCls = ['ymu-clickable']
      this.$emit('touchend')
    },
    handleTouchMove () {
      this.clickCls = ['ymu-clickable']
      this.$emit('touchmove')
    },
    handleClick () {
      this.$emit('click')
    }
  }
})
</script>

index.scss