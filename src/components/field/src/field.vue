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
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        maxlength="5"
        v-on="listeners"
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
      currentValue: ''
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
  created () {
    if (this.value) {
      this.currentValue = this.value
    }
  },
  methods: {
    onClear () {
      this.currentValue = ''
    },
    format (target) {
      const { value } = target
      let formatValue = value
      if (this.max && this.max < value.length) {
        target.value = formatValue = value.slice(0, this.max)
      }
      return formatValue
    },
    onInput (event) {
      this.$emit('input', this.format(event.target))
    },
    onBlur (event) {
      console.log(event)
    },
    onKeypress (event) {
      console.log(event)
    },
    onFocus (event) {
      console.log(event)
    }
  }
}
</script>

<style lang="scss" src="./field.scss"></style>
