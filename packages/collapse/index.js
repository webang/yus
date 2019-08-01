import { use } from '../utils/use';
const [useName, bem] = use('collapse');

export default useName({
  props: {
    // 是否为手风琴模式
    accordion: {
      type: Boolean,
      default: false
    },
    // 当前激活 tab 面板的 key
    value: [String, Number]
  },
  data() {
    return {
      children: []
    };
  },
  methods: {
    toggleValue(index) {
      const children = this.$children;
      const nextValue = !children[index].currentValue;
      if (this.accordion) {
        if (nextValue) {
          children.forEach((element, eleIndex) => {
            if (eleIndex !== index && element.currentValue === true) {
              element.toggleValue();
            }
          });
        }
        children[index].toggleValue();
      } else {
        children[index].toggleValue();
      }
    }
  },
  render() {
    const cls = bem([
      {
        accordion: this.accordion
      }
    ]);
    return <div class={cls}>{this.$slots.default}</div>;
  }
});
