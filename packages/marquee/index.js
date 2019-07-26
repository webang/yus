import { use } from '../utils/use';
import Icon from '../icon';
const [useName, bem] = use('marquee');

export default useName({
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
      default: 1000
    },
    duration: {
      type: Number,
      default: 300
    },
    direction: {
      type: String,
      default: 'up'
    },
    'show-header': {
      type: Boolean,
      default: true
    },
    itemHeight: Number
  },
  data() {
    return {
      children: [],
      timeId: null,
      length: 0,
      height: '',
      currentIndex: 0,
      noAnimate: false,
      currenTranslateY: 0,
      currentDuration: 0
    };
  },
  computed: {
    boxStyle() {
      return {
        transform: `translate3d(0, ${this.currenTranslateY}px, 0)`,
        transition: `transform ${this.noAnimate ? 0 : this.duration}ms`
      };
    }
  },
  watch: {
    currentIndex(val) {
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
      this.length = this.$refs.box.children.length;
      this.height = this.itemHeight || firstItem.offsetHeight;

      if (this.direction === 'up') {
        this.cloneNode = firstItem.cloneNode(true);
        this.$refs.box.appendChild(this.cloneNode);
        this.currenTranslateY = -this.currentIndex * this.height;
      } else {
        this.currenTranslateY = -this.height;
        this.cloneNode = this.$refs.box.lastElementChild.cloneNode(true);
        this.$refs.box.insertBefore(this.cloneNode, firstItem);
      }
    },
    start() {
      this.timeId = setInterval(() => {
        if (this.direction === 'up') {
          this.currentIndex += 1;
          this.currenTranslateY = -this.currentIndex * this.height;
          if (this.currentIndex === this.length) {
            setTimeout(() => {
              this.noAnimate = true;
              this.currentIndex = 0;
              this.currenTranslateY = 0;
            }, this.duration);
          } else {
            this.noAnimate = false;
          }
        } else {
          this.noAnimate = false;
          this.currentIndex -= 1;
          this.currenTranslateY = -(this.currentIndex + 1) * this.height;
          if (this.currentIndex === -1) {
            setTimeout(() => {
              this.noAnimate = true;
              this.currentIndex = this.length - 1;
              this.currenTranslateY = -(this.currentIndex + 1) * this.height;
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
        <div class={bem('bd')} ref="box" style={this.boxStyle}>
          {this.$slots.default}
        </div>
      </div>
    );
  }
});
