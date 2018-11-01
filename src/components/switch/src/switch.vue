<template>
  <div
    class="wui-switch"
    :class="[
      { 'wui-switch--on': value },
      { 'wui-switch--disabled': disabled }
    ]"
    @click="handleClick"
  >
    <div class="wui-switch__node"></div>
  </div>
</template>

<script>
export default {
  name: 'wui-switch',
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

<style lang="scss" src="./switch.scss"></style>