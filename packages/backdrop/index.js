import { use } from '../utils/use';
const [useName, bem] = use('backdrop');

export default useName({
  props: {
    value: {
      type: Boolean,
      default: false
    },
    stopPropagation: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClick(event) {
      if (this.stopPropagation) {
        event.stopPropagation();
      }
      this.$emit('click', event);
    }
  },
  render() {
    const cls = bem();
    return (
      <transition name="fade">
        <div vShow={this.value} class={cls} onClick={this.handleClick}>
          {this.$slots.default}
        </div>
      </transition>
    );
  }
});
