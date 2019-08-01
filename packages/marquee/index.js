import { use } from '../utils/use';
import { ParentMixin } from '../mixins/connection';
import Icon from '../icon';

const [useName, bem] = use('marquee');

export default useName({
  mixins: [ParentMixin()],

  components: {
    Icon
  },

  props: {
    delay: {
      type: Number,
      default: 1000
    },
    interval: {
      type: Number,
      default: 2000
    },
    duration: {
      type: Number,
      default: 300
    },
    direction: {
      type: String,
      default: 'up'
    },
    showHeader: {
      type: Boolean,
      default: false
    },
    itemHeight: Number
  },

  data() {
    return {
      curY: 0,
      curIndex: 0,
      height: null,
      curDuration: 0,
      noAnimate: false
    };
  },

  computed: {
    length() {
      return this.children.length;
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
      const firstItem = this.$refs.box.firstElementChild;
      if (!firstItem) {
        return false;
      }
      this.noAnimate = true;
      this.height = this.itemHeight || firstItem.offsetHeight;

      if (this.direction === 'up') {
        this.cloneNode = firstItem.cloneNode(true);
        this.$refs.box.appendChild(this.cloneNode);
        this.curY = -this.curIndex * this.height;
      } else {
        this.curY = -this.height;
        this.cloneNode = this.$refs.box.lastElementChild.cloneNode(true);
        this.$refs.box.insertBefore(this.cloneNode, firstItem);
      }
    },

    start() {
      this.timeId = setInterval(() => {
        if (this.direction === 'up') {
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
          this.noAnimate = false;
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
