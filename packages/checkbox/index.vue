<template>
  <label
    class="ymu-checkbox"
    :class="[{
      'ymu-checkbox--cell': useCell,
      'ymu-checkbox--checked': currentValue,
      'ymu-checkbox--disabled': disabled,
      'ymu-checkbox--label-left': labelLeft,
      'ymu-checkbox--clickable': !disabled && clickable
    }]"
    @click="toggleValue"
  >
    <div class="ymu-checkbox__input" :style="inputStyle">
      <input
        class="ymu-checkbox__control"
        type="checkbox"
        :value="label"
        v-model="currentValue"
        :disabled="disabled"
      >
      <slot name="icon" :checked="currentValue">
        <i class="ymu-checkbox__icon ymuicon" :class="iconClass"></i>
      </slot>
    </div>
    <div class="ymu-checkbox__label" :style="lableStyle">
      <slot>
        <span class="ymu-checkbox__text" v-text="label"></span>
      </slot>
    </div>
  </label>
</template>

<script>
import parentMixin from '../../src/mixins/findParent'
import CheckboxGroup from '../checkbox-group'
import use from '../../src/utils/use'
const [useName, useBem] = use('checkbox')

export default useName({
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
    this.findParent(CheckboxGroup.name)
  }
})
</script>

<style lang="scss" src="./index.scss"></style>
