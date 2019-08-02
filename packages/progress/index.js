import { use } from '../utils/use';
const [useName, bem] = use('progress');

export default useName({
  props: {
    // 百分比例
    percent: {
      type: Number,
      default: 0
    },

    // 线条高度
    barHeight: {
      type: String,
      default: '4px'
    },

    // 线条背景色
    barColor: {
      type: String,
      default: ''
    },

    // 高亮颜色
    trackColor: {
      type: String,
      default: ''
    }
  },

  computed: {
    barStl() {
      const stl = {
        height: this.barHeight
      };

      if (this.barColor) {
        stl['backgroundColor'] = this.barColor;
      }

      return stl;
    },

    trackStl() {
      const stl = {
        width: this.percent + '%'
      };

      if (this.trackColor) {
        stl['backgroundColor'] = this.trackColor;
      }

      return stl;
    }
  },
  render() {
    return (
      <div class={bem()}>
        {this.$slots.start}
        <div class={bem('bar')} style={this.barStl}>
          <div class={bem('track')} style={this.trackStl} />
        </div>
        {this.$slots.end}
      </div>
    );
  }
});
