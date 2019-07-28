import { use } from '../utils/use';
const [useName, bem] = use('badge');

export default useName({
  props: {
    text: [String]
  },
  computed: {
    isSingle() {
      return this.text && this.text.length === 1;
    },
    isDot() {
      return (this.text && this.text.length === 0) || typeof this.text === 'undefined';
    },
    curCls() {
      const cls = bem('')
      return {
        'yus-badge': true,
        'yus-badge--dot': this.isDot,
        'yus-badge--single': this.isSingle
      };
    }
  },
  render() {
    const cls = bem([
      {
        dot: this.isDot,
        single: this.isSingle
      }
    ]);
    return (
      <span class={cls}>{this.text}</span>
    )
  }
});
