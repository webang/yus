import { use } from '../utils/use';
const [useName, bem] = use('switch');

export default useName({
  props: {
    value: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit('input', !this.value);
        this.$emit('click');
      }
    }
  },

  render() {
    const cls = bem([
      {
        on: this.value,
        disabled: this.disabled
      }
    ]);

    return (
      <div class={cls} onClick={this.handleClick}>
        <div class={bem('node')} />
      </div>
    );
  }
});
