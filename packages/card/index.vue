<template>
  <div class="ymu-card" :class="{'ymu-card--shadow': shadow}">
    <div class="ymu-card__hd">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="ymu-card__bd">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    header: String,
    shadow: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
