import { use } from '../utils/use';
import findParent from '../mixins/findParent';
const [useName, bem] = use('tab-item');

export default useName({
  mixins: [findParent],
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isActive() {
      return this.$parent.$children.indexOf(this) === this.$parent.value;
    }
  },
  created() {
    if (Array.isArray(this.$parent.children)) {
      this.$parent.children.push(this);
    }
  },
  methods: {
    onClick() {
      if (!this.disabled) {
        const index = this.$parent.$children.indexOf(this);
        this.$parent.$emit('input', index);
        this.$emit('click');
      }
    }
  },
  render() {
    return (
      <div
        class={bem({
          active: this.isActive,
          disabled: this.disabled
        })}
        onClick={this.onClick}
      >
        {this.$slots.default}
      </div>
    );
  }
});
