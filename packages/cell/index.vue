<template>
  <div class="ym-cell" @click="handleClick" :class="{'ym-cell--clickable': clickable || to || url}">
    <div class="ym-cell__media" v-if="$slots.media">
      <slot name="media"></slot>
    </div>
    <div class="ym-cell__label">
      <slot name="label">
        <span v-if="label">{{ label }}</span>
      </slot>
    </div>
    <div class="ym-cell__value">
      <slot name="value">{{ value }}</slot>
    </div>
    <img v-if="isLink" class="ym-icon-arrow-right" src="../../src/icons/icon_arrow_right.svg">
  </div>
</template>

<script>
export default {
  name: 'ym-cell',
  props: {
    isLink: Boolean,
    label: String,
    value: String,
    to: String,
    url: String,
    clickable: Boolean
  },
  methods: {
    handleClick () {
      this.$emit('click')
      if (this.to) {
        this.$router.push(this.to)
      } else if (this.url) {
        window.location.href = this.url
      }
    }
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
