<template>
  <div class="yus-tabbar" :class="{'yus-tabbar--fixed': fixed}">
    <slot></slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('tabbar')

export default useName({
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
})
</script>