<template>
  <label
    class="ym-radio"
    :class="[{
      'ym-radio--checked': checked,
      'ym-radio--disabled': disabled
    }]"
    @click="$emit('click')"
  >
    <span class="ym-radio__input" :style="inputStyle">
      <input
        class="ym-radio__control"
        type="radio"
        :name="name"
        :value="label"
        v-model="currentValue"
        :disabled="disabled"
      >
      <slot name="icon" :checked="checked">
        <i class="ymuicon" :class="iconClass"></i>
      </slot>
    </span>
    <span
      class="ym-radio__label"
      v-if="$slots.default || $scopedSlots.default"
      :style="lableStyle"
    >
      <slot :checked="checked"></slot>
      <template v-if="!$slots.default && !$scopedSlots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
import findParentMixin from '../../../mixins/findParent'
export default {
  name: 'ym-radio',
  mixins: [findParentMixin],
  props: {
    label: [String, Number, Boolean],
    value: [String, Number, Boolean],
    disabled: Boolean,
    name: [String, Number, Boolean],
    checkedColor: String,
    checkedLabelStyle: Object
  },
  computed: {
    iconClass () {
      return this.checked ? 'ios-checkmark-circle' : 'ios-radio-button-off'
    },
    currentValue: {
      get () {
        return this.parent ? this.parent.value : this.value
      },
      set (val) {
        (this.parent || this).$emit('input', val)
      }
    },
    checked () {
      return (this.parent || this).value === this.label
    },
    inputStyle () {
      let style = {}
      if (this.checked && this.checkedColor) {
        style.color = this.checkedColor
      }
      return style
    },
    lableStyle () {
      let style = this.checkedLabelStyle || {}
      return style
    }
  },
  mounted () {
    this.findParent('ym-radio-group')
  }
}
</script>

<style lang="scss" src="./radio.scss"></style>
