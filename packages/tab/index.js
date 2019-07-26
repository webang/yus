import { use } from '../utils/use';
const [useName, bem] = use('tab');

export default useName({
  data() {
    return {
      children: [],
      childLen: this.$children.length,
      currentIndex: 0
    };
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    lineWidth: {
      type: Number,
      default: 3
    }
  },
  computed: {
    barLeft() {
      if (this.childLen === 0) {
        return;
      }
      const width = this.$refs.wrapper.offsetWidth;
      const itemWidth = this.$children[this.currentIndex].$el.getBoundingClientRect()
        .width;
      const count = this.scrollable ? width / itemWidth : this.childLen;
      return `${this.currentIndex * (100 / count)}%`;
    },
    barRight() {
      if (this.childLen === 0) {
        return;
      }
      const width = this.$refs.wrapper.offsetWidth;
      const itemWidth = this.$children[this.currentIndex].$el.getBoundingClientRect()
        .width;
      const count = this.scrollable ? width / itemWidth : this.childLen;
      return `${(count - this.currentIndex - 1) * (100 / count)}%`;
    },
    barStyle() {
      const commonStyle = {
        left: this.barLeft,
        right: this.barRight,
        height: this.lineWidth + 'px'
      };
      return commonStyle;
    },
    isActive() {
      return this.index === this.parentValue;
    },
    lineStyle() {
      return {
        width: (1 / this.childLen) * 100 + '%',
        left: (this.value / this.childLen) * 100 + '%'
      };
    }
  },
  watch: {
    value(val) {
      this.currentIndex = val;
    }
  },
  mounted() {
    this.currentIndex = this.value;
    this.childLen = this.$children.length;
  },
  methods: {
    scrolltoView(index) {
      const currentChild = this.$children[index].$el;
      const dist = currentChild.offsetLeft - this.$refs.wrapper.offsetWidth;
      this.$refs.scrollBar.scrollLeft = dist + currentChild.offsetWidth;
    }
  },
  render() {
    const cls = bem({
      scrollable: this.scrollable
    });
    return (
      <div class={bem() + '-wrapper'} ref="wrapper">
        <div class={bem() + '-container'} ref="container">
          <div class={cls} ref="scrollBar">
            {this.$slots.default}
            <div class={bem() + '-line'} ref="line" style={this.barStyle} />
          </div>
        </div>
      </div>
    );
  }
});
