<template>
  <div
    class="vmu-button-tab-item"
    :class="{
      'vmu-button-tab-item--first': isFirstChild,
      'vmu-button-tab-item--last': isLastChild,
      'vmu-button-tab-item--middle': isMiddleChild,
      'vmu-button-tab-item--active': isActive,
      'vmu-button-tab-item--disabled': isDisabled
    }"
    @click="onClick"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vmu-button-tab-item',
  props: {
    disabled: Boolean
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
        this.$parent.$emit('input', this.index)
      }
    }
  },
  mounted () {
    console.log(this.$parent.$children)
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
