import { use } from '../utils/use';
const [useName, bem] = use('icon');

export default useName({
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  render() {
    const cls = bem();
    return <i class={[cls, cls + '-' + this.name]} onClick={() => this.$emit('click')} />;
  }
});
