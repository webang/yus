import { use } from '../utils/use';
const [useName, bem] = use('backdrop');

export default useName({
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  },
  render() {
    const cls = bem();
    const backdrop = (
      <div vShow={this.value} class={cls} onClick={this.handleClick}>
        {this.$slots.default}
      </div>
    );
    return <transition name="fade">{backdrop}</transition>;
  }
});
