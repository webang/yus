import { use } from '../utils/use';
import Icon from '../icon';
import {
  Tween,
  animation
} from '../utils/tween';
const [useName, bem] = use('backtop');

console.log(Tween);

/*
 * t: current time（当前时间）；
 * b: beginning value（初始值）；
 * c: change in value（变化量）；
 * d: duration（持续时间
*/

// 此处还缺一些动画的算法
// const moveJS = {
//   linear: function (t, b, c, d) {
//     return c * t / d + b
//   }
// }
export default useName({
  components: {
    Icon
  },

  props: {
    // 是否显示
    value: {
      type: Boolean,
      default: true
    },

    // 文本
    text: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleClick() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      animation(scrollTop, 0, function (value) {
        document.body.scrollTop = value;
        document.documentElement.scrollTop = value;
      }, 'Quart.easeOut', 300);
      this.$emit('click');
    }
  },

  render() {
    return (
      <div class={bem()} vShow={this.value} onClick={this.handleClick}>
        <Icon class={bem('icon')} name="ios-backtop-outline" />
        <span class={bem('text')}>{this.text}</span>
      </div>
    );
  }
});
