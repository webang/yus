import parentMixin from '../mixins/findParent';
import CheckboxGroup from '../checkbox-group';
import Icon from '../icon';
import { use } from '../utils/use';
const [useName, useBem] = use('checkbox');

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
    iconClass() {
      return this.isChecked ? 'ios-checkmark-circle' : 'ios-radio-button-off';
    },
    currentValue: {
      get() {
        if (this.parent) {
          return this.parent.value.indexOf(this.label) !== -1;
        } else {
          return this.value;
        }
      },
      set(val) {
        if (this.parent) {
          this.updateParentNodeValue(val);
        } else {
          this.$emit('input', val);
        }
      }
    },
    isChecked() {
      return !!this.currentValue;
    },
    isDisabled() {
      if (this.parent) {
        const length = this.parent.value.length;
        return this.disabled || length < this.parent.min || length > this.parent.max;
      }
      return this.disabled;
    },
    inputStyle() {
      return this.isChecked && this.checkedColor ? { color: this.checkedColor } : {};
    },
    lableStyle() {
      return this.checkedLabelStyle || {};
    }
  },
  methods: {
    updateParentNodeValue(val) {
      const copyValue = this.parent.value.slice();
      const parentValueLength = this.parent.value.length;
      const isDefinedMax = typeof this.parent.max !== 'undefined';
      const isDefinedMin = typeof this.parent.min !== 'undefined';

      if (val) {
        if (copyValue.indexOf(this.label) === -1) {
          if ((isDefinedMax && parentValueLength < this.parent.max) || !isDefinedMax) {
            copyValue.push(this.label);
          }
        }
      } else {
        if ((isDefinedMin && parentValueLength > this.parent.min) || !isDefinedMin) {
          const index = copyValue.indexOf(this.label);
          copyValue.splice(index, 1);
        }
      }
      this.parent.$emit('input', copyValue);
    },
    toggleValue() {
      if (!this.disabled) {
        this.currentValue = !this.currentValue;
        this.$emit('click');
      }
    }
  },
  mounted() {
    this.findParent(CheckboxGroup.name);
  },
  render() {
    const cls = useBem({
      cell: this.useCell,
      checked: this.currentValue,
      disabled: this.disabled,
      'label-left': this.labelLeft,
      clickable: !this.disabled && this.clickable
    });
    return (
      <label class={cls} v-on:click={this.toggleValue}>
        <div class="yus-checkbox__input" style={this.inputStyle}>
          <input
            class="yus-checkbox__control"
            type="checkbox"
            value={this.label}
            v-model={this.currentValue}
            disabled={this.disabled}
          />
          {this.$slots.icon ? (
            this.$slots.icon
          ) : (
            <Icon class="yus-checkbox__icon yusicon" class={this.iconClass} />
          )}
        </div>
        <div class="yus-checkbox__label" style={this.lableStyle}>
          {this.$slots.default ? (
            this.$slots.default
          ) : (
            <span class="yus-checkbox__text">{this.label}</span>
          )}
        </div>
      </label>
    );
  }
});
