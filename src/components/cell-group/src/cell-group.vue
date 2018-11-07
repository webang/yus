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
export default {
  name: 'ymu-cell-group',
  props: {
    title: String
  }
}
</script>

<style lang="scss" src="./cell-group.scss"></style>
