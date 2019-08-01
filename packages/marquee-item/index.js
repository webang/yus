import { use } from '../utils/use';
import Marquee from '../marquee';
import { ChildrenMixin } from '../mixins/connection';

const [useName, bem] = use('marquee-item');

export default useName({
  mixins: [ChildrenMixin(Marquee.name)],
  computed: {
    stl() {
      return {
        height: this.parent.height
      };
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
