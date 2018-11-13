<template>
  <div class="ym-tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ym-tabbar',
  props: {
    value: {
      type: Number,
      default: 0
    },
    fixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style src="./tabbar.scss" lang="scss"></style>
