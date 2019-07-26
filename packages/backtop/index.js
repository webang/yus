import { use } from '../utils/use';
import Icon from '../icon';

const [useName, bem] = use('backtop');

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
    value: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.$emit('click');
    }
  },
  render() {
    return (
      <div class={bem()} vShow={this.value} onClick={this.handleClick}>
        <Icon class={bem('icon')} name="ios-backtop-outline" />
        <span class={bem('text')}>{ this.text }</span>
      </div>
    );
  }
});
