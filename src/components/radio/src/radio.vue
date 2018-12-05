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
        :name="name"
        v-model="vModel"
        :value="label"
        :disabled="disabled"
      >
      <slot name="icon">
        <i class="ym-icon" :class="iconClass"></i>
      </slot>
    </span>
    {{ !!$slots.default }}
    <span class="ym-radio__label" v-if="$slots.default">
      <slot :checked="checked"></slot>
      <template v-if="!$slots.default">{{ label }}</template>
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
    name: [String, Number, Boolean]
  },
  computed: {
    iconClass () {
      return this.checked ? 'icon-radio-fill' : 'icon-radio-outline'
    },
    vModel: {
      get () {
        return this.parent ? this.parent.value : this.value
      },
      set (val) {
        (this.parent || this).$emit('input', val)
      }
    },
    checked () {
      return (this.parent || this).value === this.label
    }
  },
  mounted () {
    this.findParent('ym-radio-group')
  }
}
</script>

<style lang="scss" src="./radio.scss"></style>
