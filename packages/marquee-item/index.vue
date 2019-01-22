<template>
  <div class="ymu-marquee-item" :style="itemStyle">
    <slot></slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('marquee-item')

export default useName({
  computed: {
    itemStyle () {
      return {
        height: this.$parent.height
      }
    }
  }
})
</script>

<style lang="scss" src="./index.scss"></style>
