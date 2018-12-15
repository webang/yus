<template>
  <div class="ym-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ym-collapse',
  props: {
    accordion: Boolean
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
