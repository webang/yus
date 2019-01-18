<template>
  <div class="ymu-field">
    <div class="ymu-field__hd">
      <slot name="header">
        <label class="ymu-field__label" v-if="label" v-text="label"></label>
      </slot>
    </div>
    <div class="ymu-field__bd">
      <input
        class="ymu-field__input"
        :placeholder="placeholder"
        :type="type"
        v-model="currentValue"
        :disabled="disabled"
        :readonly="readonly"
        maxlength="5"
        @blur="onBlur"
      >
      <div
        v-if="errorMessage"
        v-text="errorMessage"
        class="ymu-field__error-message"></div>
    </div>
    <div class="ymu-field__ft">
      <i
        class="ymu-icon ymu-icon-clear"
        v-if="showClear"
        @click="onClear"></i>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ymu-field',
  props: {
    label: String,
    placeholder: String,
    value: [Number, String],
    clearable: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    errorMessage: String,
    type: {
      type: String,
      default: 'text'
    },
    rule: [Array, Object],
    min: Number,
    max: Number
  },
  computed: {
    showClear () {
      return this.clearable && this.value !== '' && !this.readonly
    },
    listeners () {
      return {
        ...this.$listeners,
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      }
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
      const formatValue = this.format(val)
      this.checkValue(formatValue)
      this.$emit('input', formatValue)
    }
  },
  methods: {
    onClear () {
      this.currentValue = ''
    },
    format (value) {
      let formatValue = value
      if (this.max && this.max < value.length) {
        formatValue = value.slice(0, this.max)
      }
      return formatValue
    },
    onInput (event) {
      const formatValue = this.format(event.target)
      this.currentValue = formatValue
      this.$emit('input', formatValue)
    },
    onBlur (event) {
      console.log(111)
      this.$emit('on-blur')
    },
    onKeypress (event) {
      this.$emit('on-keypress')
    },
    onFocus (event) {
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
