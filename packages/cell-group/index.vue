<template>
  <div class="yus-cell-group">
    <div class="yus-cell-group__hd">
      <slot name="title">
        <div class="yus-cell-group__title" v-if="title">{{ title }}</div>
      </slot>
    </div>
    <div class="yus-cell-group__bd">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('cell-group')

export default useName({
  props: {
    title: String
  }
})
</script>

index.scss
