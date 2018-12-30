<template>
  <div
    class="vmu-button-tab-item"
    :class="{'is-active': isActive}"
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
    index () {
      return this.$parent.$children.indexOf(this)
    }
  },
  methods: {
    onClick () {
      if (!this.disabled && (this.$parent.value !== this.index)) {
        this.$parent.$emit('input', this.index)
      }
    }
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
