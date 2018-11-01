<template>
  <div class="ymu-cell" @click="handleClick">
    <div class="ymu-cell__media" v-if="$slots.media">
      <slot name="media"></slot>
    </div>
    <div class="ymu-cell__title">
      <slot name="title" v-if="title">{{ title }}</slot>
    </div>
    <div class="ymu-cell__value">
      <slot name="value">{{ value }}</slot>
    </div>
    <img v-if="isLink" class="ymu-icon-arrow-right" src="../../../icons/icon_arrow_right.svg">
  </div>
</template>

<script>
export default {
  name: 'ymu-cell',
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
