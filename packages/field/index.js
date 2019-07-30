import Cell from '../cell';
import Icon from '../icon';
import { isPlainObject } from '../utils/isType';
import { use } from '../utils/use';
const [useName, useBem] = use('field');

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
    showClear() {
      return this.clearable && this.value !== '';
    },
    isTextArea() {
      return this.type === 'textarea';
    }
  },
  data() {
    return {
      currentValue: this.value !== undefined ? this.value : ''
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$nextTick(this.adjustSize);
      this.$emit('input', val);
    }
  },
  mounted() {
    this.$nextTick(this.adjustSize);
  },
  methods: {
    onClear() {
      this.currentValue = '';
    },
    format(value) {
      let formatValue = value;
      if (this.max && this.max < value.length) {
        formatValue = value.slice(0, this.max);
      }
      return formatValue;
    },
    handleInput(event) {
      const formatValue = this.format(event.target.value);
      // 需要手动更改 event.target 值
      event.target.value = formatValue;
      this.currentValue = formatValue;
      this.$emit('on-change');
    },
    handleBlur(event) {
      this.$emit('on-blur');
    },
    onKeypress(event) {
      this.$emit('on-keypress');
    },
    handleFocus(event) {
      this.$emit('on-focus');
    },
    adjustSize() {
      const { input } = this.$refs;
      if (!this.isTextArea || !this.autosize || !input) {
        return;
      }
      input.style.height = 'auto';
      let height = input.scrollHeight;
      if (isPlainObject(this.autosize)) {
        const { maxHeight, minHeight } = this.autosize;
        if (maxHeight) height = Math.min(height, maxHeight);
        if (minHeight) height = Math.max(height, minHeight);
      }
      if (height) input.style.height = height + 'px';
    }
  },
  render() {
    // 左侧
    let media = null;
    if (this.label || this.$slots.label) {
      media = (
        <div class="yus-field__hd">
          {this.$slots.label ? (
            this.$slots.label
          ) : (
            <label class="yus-field__label">{this.label}</label>
          )}
        </div>
      );
    }
    media = this.$slots.media || media;

    // 输出框
    let input = (
      <input
        ref="input"
        class="yus-field__input"
        placeholder={this.placeholder}
        type={this.type}
        value={this.currentValue}
        disabled={this.disabled}
        readonly={this.readonly}
        v-on:blur={this.handleBlur}
        v-on:input={this.handleInput}
        v-on:focus={this.handleFocus}
      />
    );

    // textarea
    let textarea = (
      <textarea
        ref="input"
        class="yus-field__input"
        rows="1"
        value={this.currentValue}
        disabled={this.disabled}
        readonly={this.readonly}
        v-on:blur={this.handleBlur}
        v-on:input={this.handleInput}
        v-on:focus={this.handleFocus}
      />
    );

    return (
      <div class="yus-field" isLink={this.isLink}>
        <div class="yus-field-container">
          {media}
          <div class="yus-field__bd" slot="title">
            {this.isTextArea ? textarea : input}
          </div>
          <div class="yus-field__ft" slot="value">
            {this.showClear ? (
              <Icon
                class="yus-field__clear icon"
                name="ios-close-circle"
                v-on:click={this.onClear}
              />
            ) : null}
            {this.$slots.footer}
          </div>
          
        </div>
      </div>
    );
  }
});
