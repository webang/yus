<template>
  <div
    class="ymu-steps"
    :class="['ymu-steps--'+direction]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ymu-step',
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    },
    'active-color': {
      type: String,
      default: 'rgb(255, 68, 68)'
    },
    'active-index': {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" src="./step.scss"></style>
