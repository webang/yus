<template>
  <div class="ym-progress">
    <slot name="start"></slot>
    <div class="ym-progress__bar">
      <div class="ym-progress__track" :style="{ width: percentage + '%'}"></div>
    </div>
    <slot name="end"></slot>
  </div>
</template>

<script>
export default {
  name: 'ym-progress',
  props: {
    percentage: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" src="./progress.scss"></style>
