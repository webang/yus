<template>
  <transition :name="transition">
    <div
      class="ym-backdrop"
      @click="handleClick"
      @touchmove="onTouchMove"
      v-show="value"
    >
      <slot></slot>
    </div>
 </transition>
</template>

<script>
export default {
  name: 'ym-backdrop',
  props: {
    value: Boolean,
    transition: {
      type: String,
      default: 'ym-backdrop'
    },
    'prevent-on-touchmove': {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    },
    onTouchMove (event) {
      if (this.preventOnTouchmove) {
        event.preventDefault()
      }
      this.$emit('touchmove')
    }
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
