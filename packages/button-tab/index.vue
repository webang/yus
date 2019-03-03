<template>
  <div
    class="ymu-button-tab"
    :class="{
      'ymu-button-tab--first': isFirstChild,
      'ymu-button-tab--last': isLastChild,
      'ymu-button-tab--middle': isMiddleChild,
      'ymu-button-tab--active': isActive,
      'ymu-button-tab--disabled': isDisabled
    }"
    @click="onClick"
  >
    <slot></slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('button-tab')

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
      return this.$parent.childList.indexOf(this)
    },
    isFirstChild () {
      return this.index === 0
    },
    isLastChild () {
      return this.index === (this.$parent.childList.length - 1)
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

index.scss
