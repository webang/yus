<template>
  <label
    class="ym-radio"
    :class="[{
      'ym-radio--checked': checked,
      'ym-radio--disabled': disabled
    }]"
    @click="$emit('click')"
  >
    <span class="ym-radio__input">
      <input
        class="ym-radio__control"
        type="radio"
        v-model="vModel"
        :value="label"
        :disabled="disabled"
      >
      <slot name="icon">
        <i class="ym-icon" :class="iconClass"></i>
      </slot>
    </span>
    <span class="ym-radio__label" v-if="$slots.default || name">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ym-radio',
  props: {
    label: [String, Number, Boolean],
    value: null,
    name: String,
    disabled: Boolean
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  computed: {
    iconClass () {
      return this.checked ? 'icon-radio-fill' : 'icon-radio-outline'
    },
    vModel: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    checked () {
      return this.value === this.label
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  }
}
</script>

<style lang="scss" src="./radio.scss"></style>
