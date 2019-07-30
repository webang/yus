<template>
  <div class="ymu-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('checkbox-group')

export default useName({
  props: {
    value: [Array],
    min: Number,
    max: Number,
    useCell: Boolean
  }
})
</script>

index.scss
