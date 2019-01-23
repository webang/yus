<template>
  <label
    :class="radioCls"
    @click="$emit('click')"
  >
    <span class="ymu-radio__input" :style="inputStyle">
      <input
        class="ymu-radio__control"
        type="radio"
        :name="name"
        :value="label"
        v-model="currentValue"
        :disabled="disabled"
      >
      <slot name="icon" :checked="checked">
        <Icon :name="iconName"></Icon>
      </slot>
    </span>
    <span
      class="ymu-radio__label"
      v-if="$slots.default || $scopedSlots.default"
      :style="lableStyle"
    >
      <slot :checked="checked"></slot>
      <template v-if="!$slots.default && !$scopedSlots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
import findParentMixin from '../../src/mixins/findParent'
import Icon from '../icon'
import RadioGroup from '../radio-group'
import use from '../../src/utils/use'
const [useName, useBem] = use('radio')

export default useName({
  components: {
    Icon
  },
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
    radioCls () {
      return {
        'ymu-radio': true,
        'ymu-radio--checked': this.checked,
        'ymu-radio--disabled': this.disabled
      }
    },
    iconName () {
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
    this.findParent(RadioGroup.name)
  }
})
</script>

<style lang="scss" src="./index.scss"></style>
