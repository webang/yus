import { use } from '../utils/use';
import Swiper from '../swiper';
import findParent from '../mixins/findParent';
const [useName, bem] = use('swiper-item');

export default useName({
  mixins: [findParent],
  data() {
    return {
      translate: 0
    };
  },
  computed: {
    width() {
      return this.parent.calcWidth;
    },
    height() {
      return this.parent.calcHeight;
    },
    itemStyle() {
      const result = {
        width: `${this.width}px`,
        height: `${this.height}px`
      };
      if (this.$parent.isVertical) {
        result.transform = `translateY(${this.translate}px)`;
      } else {
        result.transform = `translateX(${this.translate}px)`;
      }
      return result;
    }
  },
  created() {
    this.findParent(Swiper.name);
    this.parent.children.push(this);
  },
  destroyed() {
    this.parent.children.splice(this.parent.children.indexOf(this), 1);
  },
  render() {
    return (
      <div class={bem()} style={this.itemStyle}>
        {this.$slots.default}
      </div>
    );
  }
});
