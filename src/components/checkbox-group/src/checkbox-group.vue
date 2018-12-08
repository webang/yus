<template>
  <div class="ym-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ym-checkbox-group',
  props: {
    value: [Array],
    min: Number,
    max: Number,
    useCell: Boolean
  }
}
</script>
