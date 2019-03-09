<template>
  <div
    class="ymu-segment-item"
    :class="{
      'ymu-segment-item--first': isFirstChild,
      'ymu-segment-item--last': isLastChild,
      'ymu-segment-item--middle': isMiddleChild,
      'ymu-segment-item--active': isActive,
      'ymu-segment-item--disabled': isDisabled
    }"
    @click="onClick"
  >
    <slot></slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('segment-item')

export default useName({
  props: {
    disabled: Boolean,
    label: [Number, String]
  },
  data () {
    return {
      parent: null
    }
  },
  computed: {
    isActive () {
      return this.$parent.value === this.index
    },
    isDisabled () {
      return !!this.disabled
    },
    index () {
      return this.$parent.$children.indexOf(this)
    },
    isFirstChild () {
      return this.index === 0
    },
    isLastChild () {
      return this.index === (this.$parent.$children.length - 1)
    },
    isMiddleChild () {
      return !this.isFirstChild && !this.isLastChild
    }
  },
  methods: {
    onClick () {
      if (!this.isDisabled && (this.$parent.value !== this.index)) {
        this.$parent.toggleValue(this.index)
      }
      this.$emit('on-click')
    }
  }
})
</script>
