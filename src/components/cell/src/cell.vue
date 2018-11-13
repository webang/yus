<template>
  <div class="ym-cell" @click="handleClick">
    <div class="ym-cell__media" v-if="$slots.media">
      <slot name="media"></slot>
    </div>
    <div class="ym-cell__title">
      <slot name="title">
        <span v-if="title">{{ title }}</span>
      </slot>
    </div>
    <div class="ym-cell__value">
      <slot name="value">{{ value }}</slot>
    </div>
    <img v-if="isLink" class="ym-icon-arrow-right" src="../../../icons/icon_arrow_right.svg">
  </div>
</template>

<script>
export default {
  name: 'ym-cell',
  props: {
    'is-link': Boolean,
    'title': String,
    'value': String,
    'to': {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick () {
      if (this.to) {
        this.$router.push(this.to)
      }
    }
  }
}
</script>

<style lang="scss" src="./cell.scss"></style>
