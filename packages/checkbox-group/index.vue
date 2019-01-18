<template>
  <div class="ymu-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ymu-checkbox-group',
  props: {
    value: [Array],
    min: Number,
    max: Number,
    useCell: Boolean
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
