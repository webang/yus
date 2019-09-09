import { use } from '../utils/use';
import Icon from '../icon';
import { animation } from '../utils/tween';
const [useName, bem] = use('backtop');

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
      animation(
        scrollTop,
        0,
        function(value) {
          document.body.scrollTop = value;
          document.documentElement.scrollTop = value;
        },
        'Quart.easeOut',
        300
      );
      this.$emit('click');
    }
  },

  render() {
    return (
      <div class={bem()} vShow={this.value} onClick={this.handleClick}>
        <Icon class={bem('icon')} name="backtop" />
        <span class={bem('text')}>{this.text}</span>
      </div>
    );
  }
});
