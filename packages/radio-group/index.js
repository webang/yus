import use from '../utils/use';
const [useName] = use('radio-group');

export default useName({
  props: {
    value: [String, Number, Boolean]
  },
  computed: {
    radioGroupCls() {
      return ['yus-radio-group'];
    }
  },
  render() {
    return <div class={this.radioGroupCls}>{this.$slots.default}</div>;
  }
});
