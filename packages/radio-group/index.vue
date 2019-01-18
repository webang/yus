<template>
  <div class="ymu-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ymu-radio-group',
  props: {
    value: [String, Number, Boolean]
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
