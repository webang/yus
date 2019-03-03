<template>
  <div class="ymu-cell-group">
    <div class="ymu-cell-group__hd">
      <slot name="title">
        <div class="ymu-cell-group__title" v-if="title">{{ title }}</div>
      </slot>
    </div>
    <div class="ymu-cell-group__bd">
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
