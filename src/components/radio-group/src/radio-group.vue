<template>
  <div class="ymu-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'radio-group',
  props: {
    value: [String, Number, Boolean]
  }
}
</script>

<style lang="scss" src="./radio-group.scss"></style>
