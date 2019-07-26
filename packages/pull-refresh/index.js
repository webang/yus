import { use } from '../utils/use';

const [useName, bem] = use('pull-refresh');

export default useName({
  props: {
    onRefresh: Function,
    topPullDistance: {
      type: Number,
      default: 50
    },
    loadingText: {
      type: String,
      default: '正在刷新'
    },
    pullText: {
      type: String,
      default: '下拉刷新'
    },
    looseText: {
      type: String,
      default: '释放刷新'
    },
    topMaxPullDistance: {
      type: Number,
      default: 80
    }
  },
  data() {
    return {
      // touch 与 touch 之间的距离
      diff: 0,
      // start 与 当前点之间的距离
      delta: 0,
      // touch list
      touches: [],
      translate: 0,
      useAnimation: false,
      loading: false
    };
  },
  computed: {
    containerStl() {
      return {
        transform: `translateY(${this.translate}px)`,
        'transition-duration': this.useAnimation ? '300ms' : `0ms`
      };
    },
    topText() {
      if (this.loading) {
        return this.loadingText;
      } else if (this.translate >= this.topPullDistance) {
        return this.looseText;
      } else if (this.translate < this.topPullDistance) {
        return this.pullText;
      }
    }
  },
  methods: {
    init() {
      this.$scrollTarget = this.getScrollTarget(this.$el);
      if (typeof this.onRefresh === 'function') {
        this.bindTouchEvents();
      }
    },
    /**
     * 初始化 touch 事件
     */
    bindTouchEvents() {
      this.$el.addEventListener('touchstart', this.handleTouchStart);
      this.$el.addEventListener('touchmove', this.handleTouchMove);
      this.$el.addEventListener('touchend', this.handleTouchEnd);
      this.$el.addEventListener('touchend', this.handleTouchCancel);
    },
    /**
     * 查找 scroll event target
     */
    getScrollTarget(element) {
      let currentElement = element;
      while (currentElement && ['HTML', 'BODY'].indexOf(currentElement.tagName) === -1) {
        let overflow = document.defaultView.getComputedStyle(currentElement).overflowY;
        if (['scroll', 'auto'].indexOf(overflow) !== -1) {
          return currentElement;
        }
        currentElement = currentElement.parentNode;
      }
      return window;
    },
    /**
     * 获取 scroll top
     */
    getScrollTop(element) {
      if (element === window) {
        return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
      } else {
        return element.scrollTop;
      }
    },
    // 手指按下
    handleTouchStart(event) {
      const touch = event.changedTouches[0];
      this.touches = [touch];
      this.useAnimation = false;
      this.touchStartScreenY = touch.clientY;
      this.touchStartTranslateY = this.translate;
      this.startScrollTop = this.getScrollTop(this.$scrollTarget);
    },
    // 手指移动
    handleTouchMove(event) {
      const touch = event.changedTouches[0];
      let delta = Math.pow(touch.clientY - this.touchStartScreenY, 0.85);
      let diff = touch.clientY - this.touches[this.touches.length - 1].clientY;
      this.currentScreenY = touch.clientY;
      this.direction = delta > 0 ? 'down' : 'up';
      this.delta = delta;
      this.diff = diff;
      if (
        typeof this.onRefresh === 'function' &&
        this.direction === 'down' &&
        this.getScrollTop(this.$scrollTarget) === 0
      ) {
        // 滑动方向总体是向下的
        event.preventDefault();
        event.stopPropagation();

        let newTranslate = this.touchStartTranslateY + delta;
        if (newTranslate > this.topMaxPullDistance) {
          newTranslate = this.topMaxPullDistance;
        }
        this.translate = newTranslate;
      }
      this.$emit('on-translate-change', this.translate);
      this.touches.push(touch);
    },
    // 手指拿起
    handleTouchEnd() {
      if (!this.delta) {
        // 未发生移动
        return;
      }
      if (
        this.direction === 'down' &&
        this.getScrollTop(this.$scrollTarget) === 0 &&
        this.translate >= this.topPullDistance
      ) {
        // 满足触发刷新的条件
        this.loading = true;
        this.useAnimation = true;
        this.translate = this.topPullDistance;
        this.onRefresh(this.stopPullRefresh);
      }
      if (this.translate < this.topPullDistance && !this.loading) {
        // 不满足触发刷新的条件
        this.useAnimation = true;
        this.translate = 0;
      }
    },
    // 手指移出屏幕外
    handleTouchCancel() {
      this.handleTouchEnd();
    },
    // 结束
    stopPullRefresh() {
      this.translate = 0;
      this.loading = false;
      this.useAnimation = false;
    }
  },
  mounted() {
    this.init();
  },
  render() {
    return (
      <div class={bem() + '-wrapper'} ref="wrapper">
        <div class={bem() + '-container'} style={this.containerStl} ref="container">
          {this.$slots.indicator ? (
            this.$slots.indicator
          ) : (
            <div class={bem() + '-indictor'}>
              <div>{this.topText}</div>
            </div>
          )}
          {this.$slots.default}
        </div>
      </div>
    );
  }
});
