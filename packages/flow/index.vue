<template>
  <div :class="flowCls">
    <slot></slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('flow')

export default useName({
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    finishIcon: String,
    processIcon: String,
    waitingIcon: String
  },
  computed: {
    flowCls () {
      return [
        'ymu-flow',
        'ymu-flow--' + this.direction
      ]
    }
  }
})
</script>

<style lang="scss" src="./index.scss"></style>
