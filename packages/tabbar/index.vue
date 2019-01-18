<template>
  <div class="ymu-tabbar" :class="{'ymu-tabbar--fixed': fixed}">
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

<style src="./index.scss" lang="scss"></style>
