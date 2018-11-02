<template>
  <div
    class="ymu-switch"
    :class="[
      { 'ymu-switch--on': value },
      { 'ymu-switch--disabled': disabled }
    ]"
    @click="handleClick"
  >
    <div class="ymu-switch__node"></div>
  </div>
</template>

<script>
export default {
  name: 'ymu-switch',
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
