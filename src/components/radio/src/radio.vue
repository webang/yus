<template>
  <div
    class="ym-radio"
    :class="{'ym-radio--checked': value}"
    @click="toggleValue"
  >
    <span class="ym-radio__input">
      <input class="ym-radio__control" type="radio" :checked="value">
      <i class="ym-icon" :class="iconClass"></i>
    </span>
    <span class="ym-radio__label">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ym-radio',
  props: {
    value: Boolean
  },
  computed: {
    iconClass () {
      return this.value ? 'icon-radio_checked' : 'icon-radio'
    }
  },
  methods: {
    toggleValue () {
      if (!this.disabled) {
        this.$emit('input', !this.value)
      }
    }
  }
}
</script>

<style lang="scss" src="./radio.scss"></style>
