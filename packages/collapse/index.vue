<template>
  <div class="ymu-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ymu-collapse',
  props: {
    accordion: Boolean
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
