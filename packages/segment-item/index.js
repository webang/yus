import { use } from '../utils/use';
const [useName, bem] = use('segment-item');

export default useName({
  props: {
    disabled: Boolean
  },
  data() {
    return {
      parent: null
    };
  },
  computed: {
    isActive() {
      return this.$parent.value === this.index;
    },
    isDisabled() {
      return !!this.disabled;
    },
    index() {
      return this.$parent.$children.indexOf(this);
    },
    isFirstChild() {
      return this.index === 0;
    },
    isLastChild() {
      return this.index === this.$parent.$children.length - 1;
    },
    isMiddleChild() {
      return !this.isFirstChild && !this.isLastChild;
    }
  },
  methods: {
    handleClick() {
      if (!this.isDisabled && this.$parent.value !== this.index) {
        this.$parent.toggleValue(this.index);
      }
      this.$emit('on-click');
    }
  },
  render() {
    return (
      <div
        class={bem({
          first: this.isFirstChild,
          last: this.isLastChild,
          middle: this.isMiddleChild,
          active: this.isActive,
          disabled: this.isDisabled
        })}
        onClick={this.handleClick}
      >
        {this.$slots.default}
      </div>
    );
  }
});
