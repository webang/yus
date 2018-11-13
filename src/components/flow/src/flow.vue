<template>
  <div class="ym-flows" :class="['ym-flows--' + direction]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ym-flow',
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    },
    'active-index': {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" src="./flow.scss"></style>
