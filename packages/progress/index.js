import { use } from '../utils/use';
const [useName, bem] = use('progress');

export default useName({
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    'bar-height': {
      type: Number,
      default: 4
    }
  },
  render() {
    return (
      <div class={bem()}>
        {this.$slots.start}
        <div class={bem('bar')} style={{ height: this.barHeight + 'px' || 'auto' }}>
          <div class={bem('track')} style={{ width: this.percentage + '%' }} />
        </div>
        {this.$slots.end}
      </div>
    );
  }
});
