<template>
  <div
    class="ym-switch"
    :class="[
      { 'ym-switch--on': value },
      { 'ym-switch--disabled': disabled }
    ]"
    @click="handleClick"
  >
    <div class="ym-switch__node"></div>
  </div>
</template>

<script>
export default {
  name: 'ym-switch',
  props: {
    value: Boolean,
    disabled: Boolean
  },
  methods: {
    handleClick () {
      if (!this.disabled) {
        this.$emit('input', !this.value)
      }
    }
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
