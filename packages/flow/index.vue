<template>
  <div class="ymu-flows" :class="flowCls">
    <slot></slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('flows')

export default useName({
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    flowCls () {
      return [
        'ymu-flows--' + this.direction
      ]
    }
  }
})
</script>

<style lang="scss" src="./index.scss"></style>
