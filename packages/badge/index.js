import { use } from '../utils/use';
const [useName, bem] = use('badge');

export default useName({
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    isSingle() {
      return this.text && this.text.length === 1;
    },
    isDot() {
      return this.text && this.text.length === 0;
    }
  },
  render() {
    const cls = bem([
      {
        dot: this.isDot,
        single: this.isSingle
      }
    ]);
    return <span class={cls}>{this.text}</span>;
  }
});
