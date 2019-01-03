<template>
  <div class="ymu-tab">
    <slot name="title">
      <span v-text="title"></span>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'ymu-tab',
  props: {
    title: String
  }
}
</script>
