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
          ref="input"
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
          ref="input"
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
import { isPlainObject } from '../../src/utils/isType'
import use from '../../src/utils/use'
const [useName, useBem] = use('field')

export default useName({
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
    errMsg: String,
    max: Number,
    isLink: Boolean,
    type: {
      type: [String, Number],
      default: 'text'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    autosize: [Boolean, Object]
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
      currentValue: ''
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$nextTick(this.adjustSize)
      this.$emit('input', val)
    }
  },
  mounted () {
    this.$nextTick(this.adjustSize)
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
    adjustSize() {
      const { input } = this.$refs;

      if (!this.isTextArea || !this.autosize || !input) {
        return
      }

      input.style.height = 'auto'

      let height = input.scrollHeight

      if (isPlainObject(this.autosize)) {
        const { maxHeight, minHeight } = this.autosize
        if (maxHeight) height = Math.min(height, maxHeight)
        if (minHeight) height = Math.max(height, minHeight)
      }
      if (height) input.style.height = height + 'px'
    }
  }
})
</script>

<style lang="scss" src="./index.scss"></style>
