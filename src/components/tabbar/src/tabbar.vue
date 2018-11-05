<template>
  <div class="ymu-tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ymu-tabbar',
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
