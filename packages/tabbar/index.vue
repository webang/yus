<template>
  <div class="ymu-tabbar" :class="{'ymu-tabbar--fixed': fixed}">
    <slot></slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('tabbar')

export default {
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