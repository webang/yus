<template>
  <div class="ymu-collapse">
    <slot></slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('collapse')

export default useName({
  props: {
    accordion: Boolean
  }
})
</script>

index.scss
