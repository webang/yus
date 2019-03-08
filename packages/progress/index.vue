<template>
  <div class="ymu-progress">
    <slot name="start"></slot>
    <div class="ymu-progress__bar">
      <div class="ymu-progress__track" :style="{ width: percentage + '%'}"></div>
    </div>
    <slot name="end"></slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('progress')

export default useName({
  props: {
    percentage: {
      type: Number,
      default: 0
    }
  }
})
</script>
