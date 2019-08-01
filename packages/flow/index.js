import { use } from '../utils/use';
import { ParentMixin } from '../mixins/connection';

const [useName, bem] = use('flow');

export default useName({
  mixins: [ParentMixin()],
  props: {
    // 排列方向
    direction: {
      type: String,
      default: 'horizontal'
    },
    // 
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
