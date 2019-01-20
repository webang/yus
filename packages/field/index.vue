<template>
  <Cell class="ymu-field" :isLink="isLink">
    <template v-if="label || $slots.label" slot="media">
      <div class="ymu-field__hd">
        <slot name="label">
          <label class="ymu-field__label">{{ label }}</label>
        </slot>
      </div>
    </template>
    <div class="ymu-field__bd" slot="label">
      <template v-if="!isTextArea">
        <input
          class="ymu-field__input"
          :placeholder="placeholder"
          :type="type"
          :value="currentValue"
          :disabled="disabled"
          :readonly="readonly"
          @blur="handleBlur"
          @input="handleInput"
          @focus="handleFocus"
        />
      </template>
      <template v-else>
        <textarea
          class="ymu-field__input"
          rows="1"
          :placeholder="placeholder"
          :type="type"
          :value="currentValue"
          :disabled="disabled"
          :readonly="readonly"
          @blur="handleBlur"
          @input="handleInput"
          @focus="handleFocus"
        />
      </template>
    </div>
    <div class="ymu-field__ft" slot="value">
      <Icon
        class="icon"
        name="ios-close-circle"
        v-if="showClear"
        @click="onClear"
      />
      <slot name="footer"></slot>
    </div>
  </Cell>
</template>

<script>
import Cell from '../cell'
import Icon from '../icon'

export default {
  name: 'ymu-field',
  components: {
    Cell,
    Icon
  },
  props: {
    label: String,
    placeholder: String,
    value: [Number, String],
    disabled: Boolean,
    readonly: Boolean,
    errorMessage: String,
    rule: [Array, Object],
    max: Number,
    isLink: Boolean,
    type: {
      type: [String, Number],
      default: 'text'
    },
    clearable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    showClear () {
      return this.clearable && this.value && !this.readonly
    },
    isTextArea () {
      return this.type === 'textarea'
    }
  },
  data () {
    return {
      currentValue: '',
      currentRules: [],
      currentError: '',
      showErrorMsg: false
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    onClear () {
      this.currentValue = ''
    },
    format (value) {
      let formatValue = value
      if (this.max && (this.max < value.length)) {
        formatValue = value.slice(0, this.max)
      }
      return formatValue
    },
    handleInput (event) {
      const formatValue = this.format(event.target.value)
      // 需要手动更改 event.target 值
      event.target.value = formatValue
      this.currentValue = formatValue
      this.$emit('on-change')
    },
    handleBlur (event) {
      this.$emit('on-blur')
    },
    onKeypress (event) {
      this.$emit('on-keypress')
    },
    handleFocus (event) {
      this.$emit('on-focus')
    },
    checkValue (value) {
      let index = 0
      let rules = this.currentRules
      for (; index < rules.length; index++) {
        console.log(rules[index].rule.test(value))
      }
    }
  },
  created () {
    if (this.value) {
      this.currentValue = this.value
    }
    if (this.rule) {
      if (Array.isArray(this.rule)) {
        this.currentRules = this.rule
      } else if (typeof this.rule === 'object') {
        this.currentRules = [this.rule]
      }
    }
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
