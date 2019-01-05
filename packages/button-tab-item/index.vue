<template>
  <div
    class="ymu-button-tab-item"
    :class="{
      'ymu-button-tab-item--first': isFirstChild,
      'ymu-button-tab-item--last': isLastChild,
      'ymu-button-tab-item--middle': isMiddleChild,
      'ymu-button-tab-item--active': isActive,
      'ymu-button-tab-item--disabled': isDisabled
    }"
    @click="onClick"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ymu-button-tab-item',
  props: {
    disabled: Boolean
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
    }
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
