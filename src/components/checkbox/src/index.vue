<template>
  <label
    class="ym-checkbox"
    :class="[{
      'ym-checkbox--cell': useCell,
      'ym-checkbox--checked': currentValue,
      'ym-checkbox--disabled': disabled,
      'ym-checkbox--label-left': labelLeft,
      'ym-checkbox--clickable': !disabled && clickable
    }]"
    @click="toggleValue"
  >
    <div class="ym-checkbox__input" :style="inputStyle">
      <input
        class="ym-checkbox__control"
        type="checkbox"
        :value="label"
        v-model="currentValue"
        :disabled="disabled"
      >
      <slot name="icon" :checked="currentValue">
        <i class="ym-checkbox__icon ymuicon" :class="iconClass"></i>
      </slot>
    </div>
    <div class="ym-checkbox__label" :style="lableStyle">
      <slot>
        <span class="ym-checkbox__text" v-text="label"></span>
      </slot>
    </div>
  </label>
</template>

<script>
import parentMixin from '../../../mixins/findParent'
export default {
  name: 'ym-checkbox',
  mixins: [parentMixin],
  props: {
    label: [String, Object, Number],
    value: Boolean,
    disabled: Boolean,
    checkedColor: String,
    checkedLabelStyle: Object,
    labelLeft: Boolean,
    useCell: Boolean,
    clickable: Boolean
  },
  computed: {
    iconClass () {
      return this.isChecked ? 'ios-checkmark-circle' : 'ios-radio-button-off'
    },
    currentValue: {
      get () {
        if (this.parent) {
          return this.parent.value.indexOf(this.label) !== -1
        } else {
          return this.value
        }
      },
      set (val) {
        if (this.parent) {
          this.updateParentNodeValue(val)
        } else {
          this.$emit('input', val)
        }
      }
    },
    isChecked () {
      return !!this.currentValue
    },
    isDisabled () {
      if (this.parent) {
        const length = this.parent.value.length
        return this.disabled || length < this.parent.min || length > this.parent.max
      }
      return this.disabled
    },
    inputStyle () {
      return this.isChecked && this.checkedColor ? {color: this.checkedColor} : {}
    },
    lableStyle () {
      return this.checkedLabelStyle || {}
    }
  },
  methods: {
    updateParentNodeValue (val) {
      const copyValue = this.parent.value.slice()
      const parentValueLength = this.parent.value.length
      const isDefinedMax = typeof this.parent.max !== 'undefined'
      const isDefinedMin = typeof this.parent.min !== 'undefined'

      if (val) {
        if (copyValue.indexOf(this.label) === -1) {
          if ((isDefinedMax && (parentValueLength < this.parent.max)) || !isDefinedMax) {
            copyValue.push(this.label)
          }
        }
      } else {
        if ((isDefinedMin && (parentValueLength > this.parent.min)) ||
          !isDefinedMin) {
          const index = copyValue.indexOf(this.label)
          copyValue.splice(index, 1)
        }
      }
      this.parent.$emit('input', copyValue)
    },
    toggleValue () {
      if (!this.disabled) {
        this.currentValue = !this.currentValue
        this.$emit('click')
      }
    }
  },
  mounted () {
    this.findParent('ym-checkbox-group')
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
