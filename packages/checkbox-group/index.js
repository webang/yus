import { use } from '../utils/use';
const [useName, useBem] = use('checkbox-group');

export default useName({
  props: {
    value: [Array],
    min: Number,
    max: Number,
    useCell: Boolean
  },
  render() {
    return <div class="ymu-checkbox-group">{this.$slots.default}</div>;
  }
});
