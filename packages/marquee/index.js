import { use } from '../utils/use';
import { isDef } from '../utils/isType';
import { ParentMixin } from '../mixins/connection';
import Icon from '../icon';

const [useName, bem] = use('marquee');

export default useName({
  mixins: [ParentMixin()],

  components: {
    Icon
  },

  props: {
    // 启动轮播的延时时间
    delay: {
      type: Number,
      default: 1000
    },

    // 轮播间隔时间
    interval: {
      type: Number,
      default: 2000
    },

    // 一次轮播消耗的时间
    duration: {
      type: Number,
      default: 300
    },

    // 轮播方向
    direction: {
      type: String,
      default: 'up' // down up
    },

    // 是否显示左侧图标
    showHeader: {
      type: Boolean,
      default: false
    },

    // 轮播子项高度
    itemHeight: Number
  },

  data() {
    return {
      curY: 0,
      curIndex: 0,
      height: null,
      curDuration: 0,
      noAnimate: true
    };
  },

  computed: {
    length() {
      return this.children.length;
    },

    isDown() {
      return this.direction === 'down';
    },

    boxStl() {
      return {
        transform: `translateY(${this.curY}px)`,
        transition: `transform ${this.noAnimate ? 0 : this.duration}ms`
      };
    }
  },

  watch: {
    curIndex(val) {
      this.$emit('index-change', val);
    }
  },

  mounted() {
    this.timeId = setTimeout(() => {
      if (this.children.length > 1) {
        this.init();
        this.start();
      }
    }, this.delay);
  },

  beforeDestroy() {
    clearInterval(this.timeId);
  },

  methods: {
    init() {
      const { box } = this.$refs;
      const firstEl = box.firstElementChild;
      this.height = isDef(this.itemHeight) ? this.itemHeight : firstEl.offsetHeight;

      if (!this.isDown) {
        this.cloneNode = firstEl.cloneNode(true);
        box.appendChild(this.cloneNode);
        this.curY = -this.curIndex * this.height;
      } else {
        this.curY = -this.height;
        this.cloneNode = box.lastElementChild.cloneNode(true);
        box.insertBefore(this.cloneNode, firstEl);
      }
    },

    start() {
      this.timeId = setInterval(() => {
        if (!this.isDown) {
          this.curIndex += 1;
          this.curY = -this.curIndex * this.height;
          if (this.curIndex === this.length) {
            setTimeout(() => {
              this.noAnimate = true;
              this.curIndex = 0;
              this.curY = 0;
            }, this.duration);
          } else {
            this.noAnimate = false;
          }
        } else {
          this.curIndex -= 1;
          this.curY = -(this.curIndex + 1) * this.height;
          if (this.curIndex === -1) {
            setTimeout(() => {
              this.noAnimate = true;
              this.curIndex = this.length - 1;
              this.curY = -(this.curIndex + 1) * this.height;
            }, this.duration);
          } else {
            this.noAnimate = false;
          }
        }
      }, this.interval + this.duration);
    }
  },

  render() {
    return (
      <div class={bem()} style={{ height: this.height + 'px' }}>
        {this.showHeader ? (
          <div class={bem('hd')}>
            {this.$slots.header ? (
              this.$slots.header
            ) : (
              <Icon class={bem('icon')} name="ios-megaphone" slot="header" />
            )}
          </div>
        ) : null}
        <div class={bem('bd')} ref="box" style={this.boxStl}>
          {this.$slots.default}
        </div>
      </div>
    );
  }
});
