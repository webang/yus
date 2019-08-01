import { use } from '../utils/use';
import { ParentMixin } from '../mixins/connection';

const [useName, bem] = use('accordion');

export default useName({
  mixins: [ParentMixin()],
  props: {
    // 是否为手风琴模式
    accordion: {
      type: Boolean,
      default: false
    },
    // 当前激活面板
    value: [String, Number, Array]
  },
  methods: {
    switch(name, isActive, curName) {
      this.children.forEach(child => {
        if (!this.accordion) {
          if (child.curName === name) {
            child.toggleVisible();
          }
        } else {
          if (child.curName === curName) {
            child.toggleVisible();
          }
          if (isActive) {
            if (child.curName !== curName) {
              child.close();
            }
          }
        }
      });
      if (!this.accordion) {
        name = isActive
          ? this.value.concat(name)
          : this.value.filter(key => key !== name);
      }
      this.$emit('input', name);
      this.$emit('change', name);
    }
  },
  render() {
    const cls = bem({
      accordion: this.accordion
    });
    return <div class={cls}>{this.$slots.default}</div>;
  }
});
