<template>
  <div class="ym-cell-group">
    <div class="ym-cell-group__hd">
      <slot name="title">
        <div class="ym-cell-group__title" v-if="title">{{ title }}</div>
      </slot>
    </div>
    <div class="ym-cell-group__bd">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ym-cell-group',
  props: {
    title: String
  }
}
</script>

<style lang="scss" src="./cell-group.scss"></style>
