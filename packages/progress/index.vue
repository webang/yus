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
export default {
  name: 'ymu-progress',
  props: {
    percentage: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
