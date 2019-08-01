import { use } from '../utils/use';
const [useName, bem] = use('accordion');

export default useName({
  props: {
    // 是否为手风琴模式
    accordion: {
      type: Boolean,
      default: false
    },
    // 当前激活 tab 面板的 key
    value: [String, Number, Array],
    border: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      children: []
    };
  },
  methods: {
    toggle(name, expanded) {
      if (!this.accordion) {
        name = expanded
          ? this.value.concat(name)
          : this.value.filter(key => key !== name);
      }
      this.$emit('change', name);
      this.$emit('input', name);
    }
  },
  render() {
    const cls = bem({
      accordion: this.accordion
    });
    return <div class={cls}>{this.$slots.default}</div>;
  }
});
