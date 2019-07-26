import { use } from '../utils/use';
import Marquee from '../marquee';
import findParent from '../mixins/findParent';
const [useName, bem] = use('marquee-item');

export default useName({
  mixins: [findParent],
  computed: {
    stl() {
      return {
        height: this.$parent.height
      };
    }
  },
  created() {
    this.findParent(Marquee.name);
    const { children } = this.parent;
    if (Array.isArray(children)) {
      children.push(this);
    }
  },
  destroyed() {
    const { children } = this.parent;
    if (Array.isArray(children)) {
      children.splice(children.indexOf(this), 1);
    }
  },
  render() {
    const cls = bem();
    return (
      <div class={cls} style={this.stl}>
        {this.$slots.default}
      </div>
    );
  }
});
