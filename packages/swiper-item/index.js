import { use } from '../utils/use';
import { ChildrenMixin } from '../mixins/connection';
import Swiper from '../swiper';

const [useName, bem] = use('swiper-item');

export default useName({
  mixins: [ChildrenMixin(Swiper.name)],

  data() {
    return {
      translate: 0
    };
  },

  computed: {
    itemStl() {
      const { calcWidth, calcHeight } = this.parent;
      const stl = {
        width: `${calcWidth}px`,
        height: `${calcHeight}px`
      };

      stl.transform = this.parent.isVertical
        ? `translateY(${this.translate}px)`
        : `translateX(${this.translate}px)`

      return stl;
    }
  },

  render() {
    return (
      <div class={bem()} style={this.itemStl}>
        {this.$slots.default}
      </div>
    );
  }
});
