import { use } from '../utils/use';
const [useName, bem] = use('flow');

export default useName({
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    finishIcon: String,
    processIcon: String,
    waitingIcon: String
  },
  render() {
    const cls = bem([
      this.direction
    ]);
    return (
      <div class={cls}>{ this.$slots.default }</div>
    );
  }
});
