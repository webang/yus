import { use } from '../utils/use';

const now = () => +new Date();
const [useName, bem] = use('swiper');

export default useName({
  props: {
    // 容器宽度
    width: Number,
    // 容器高度
    height: Number,
    // 轮播方向
    direction: {
      default: 'horizontal',
      validator: function(value) {
        return ['horizontal', 'vertical'].indexOf(value) !== -1;
      }
    },
    // 动画时长
    duration: {
      type: Number,
      default: 300
    },
    // 自动轮播间隔
    interval: {
      type: Number,
      default: 4000
    },
    // 是否自动播放
    autoPlay: {
      type: Boolean,
      default: true
    },
    // 是否开启循环播放
    loop: {
      type: Boolean,
      default: true
    },
    // 初始位置索引值
    active: {
      type: Number,
      default: 0
    },
    longTouch: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      children: [],
      wrapperStl: {},
      slideStl: {},
      calcWidth: undefined,
      calcHeight: undefined,
      currentIndex: this.active,
      useAnimation: false,
      translate: 0,
      // touch相关数据
      touchData: {
        points: [],
        touchStartTime: undefined,
        isTouchStarted: false,
        isTouchMoved: false,
        delta: undefined
      }
    };
  },
  computed: {
    isVertical() {
      return this.direction === 'vertical';
    },
    isLoopMode() {
      return this.loop && this.children.length > 1;
    },
    size() {
      return this.isVertical ? this.calcHeight : this.calcWidth;
    }
  },
  watch: {
    currentIndex(val) {
      this.$emit('index-change', val);
    },
    active(val) {
      this.currentIndex = val;
    }
  },
  mounted() {
    this._initRectSize();
    this._createAutoPlay();
  },
  methods: {
    /**
     * 初始化wrapper容器的大小
     */
    _initRectSize() {
      const rect = this.$refs.wrapper.getBoundingClientRect();
      this.calcWidth = this.width || rect.width;
      this.calcHeight = this.height || rect.height;
      this.wrapperStl = {
        width: `${this.calcWidth}px`,
        height: `${this.calcHeight}px`
      };
      this._updateSlideStl();
    },

    /**
     * 更新container容器样式
     */
    _updateSlideStl() {
      const result = {
        transform: `translate${this.isVertical ? 'Y' : 'X'}(${this.translate}px)`,
        transitionDuration: `${this.useAnimation ? this.duration : 0}ms`,
        width: `${this.calcWidth}px`,
        height: `${this.calcHeight}px`
      };
      if (this.isVertical) {
        result.height = `${this.calcHeight * this.children.length}px`;
      } else {
        result.width = `${this.calcWidth * this.children.length}px`;
      }
      this.slideStl = result;
    },

    /**
     * 创建自动播放
     */
    _createAutoPlay() {
      if (!this.autoPlay || this.children.length < 1) {
        return;
      }
      this.autoPlayTimeId = setInterval(() => {
        this.slideNext();
      }, this.interval);
    },

    /**
     * 销毁自动播放
     */
    _destoryAutoPlay() {
      clearInterval(this.autoPlayTimeId);
    },

    /**
     * @desc 判断滑动方向是否符合预期
     * @param {Number} deltaX
     * @param {Number} deltaY
     */
    _validDirection(deltaX, deltaY) {
      const abs = Math.abs;
      return this.isVertical ? abs(deltaX) < abs(deltaY) : abs(deltaX) > abs(deltaY);
    },

    /**
     * @desc touch start handler
     * @param {Event} event
     */
    _onTouchStart(event) {
      const touch = event.changedTouches[0];
      this._destoryAutoPlay();
      this.touchData.points = [touch];
      this.touchData.isTouchStarted = true;
      this.touchData.touchStartTime = now();
      this.touchData.touchStartTranslate = this.translate;
    },

    /**
     * @desc touchmove handler
     * @param {TouchEvent} event
     */
    _onTouchMove(event) {
      const { children } = this;
      const touch = event.changedTouches[0];
      const points = this.touchData.points;

      // 上一点到当前点的距离
      let diffX = touch.pageX - points[points.length - 1].pageX;
      let diffY = touch.pageY - points[points.length - 1].pageY;

      // 开始点到当前点的距离
      let deltaX = touch.pageX - points[0].pageX;
      let deltaY = touch.pageY - points[0].pageY;

      // 判断角度是否符合预期
      if (this._validDirection(deltaX, deltaY)) {
        this.touchData.validDirection = true;
      } else {
        return;
      }

      // 滑动方向为垂直滑动时，阻止页面滚动
      // if (this.isVertical && Math.abs(deltaY) > Math.abs(deltaX)) {
      //   event.preventDefault();
      // }
      event.preventDefault();

      let diff = this.isVertical ? diffY : diffX;
      let delta = this.isVertical ? deltaY : deltaX;

      // 计算新的位置, 这里有两种计算方式,
      // 1. newTranslate = this.translate + diff;
      // 2. newTranslate = this.touchData.touchStartTranslate + delta;
      let newTranslate = this.touchData.touchStartTranslate + delta;

      // 超出最大偏移范围(从左向右滑动)
      if (newTranslate > 0) {
        if (this.isLoopMode && children.length > 1) {
          // 无缝轮播模式，将最后一个盒子移动到最左侧的位置
          children[children.length - 1].translate = -children.length * this.size;
        } else {
          // 阻尼函数待补充
        }
      }

      // 超出最小偏移范围(从右向左滑动)
      if (newTranslate < -(children.length - 1) * this.size) {
        if (this.loop && this.children.length > 1) {
          // 无缝轮播模式，将第一个盒子移动到最右侧的位置
          children[0].translate = children.length * this.size;
        } else {
          // 阻尼函数待补充
        }
      }

      this.useAnimation = false;
      this.translate = newTranslate;
      Object.assign(this.touchData, {
        diff,
        delta,
        isTouchMoved: true
      });
      this.touchData.points.push(touch);
      this._updateSlideStl();
    },

    /**
     * @desc touchend handler
     * @param {TouchEvent} event
     */
    _onTouchEnd(event) {
      const touchData = this.touchData;
      // 判断是否有 touchmove 被触发, 包括了判断滑动方向的判断
      if (touchData.validDirection === undefined) {
        return;
      }
      // 是否满足长按时间要求
      const isLongTouch = now() - this.touchData.touchStartTime >= this.longTouch;

      // 计算当前位置
      let index = Math.round(-this.translate / this.size);

      // 当index与当前的index一致时，则不需要判断长按实践
      if (index === this.currentIndex && !isLongTouch) {
        if (touchData.delta < 0) {
          index++;
        } else {
          index--;
        }
      }

      Object.assign(this.touchData, {
        isTouchStarted: false,
        isTouchMoved: false,
        points: [],
        delta: undefined,
        validDirection: undefined
      });

      this.slideTo(this._validIndex(index), true, () => {
        this._createAutoPlay();
      });
    },

    /**
     * @desc 校验轮播索引
     * @param index 轮播索引
     */
    _validIndex(index) {
      if (!this.isLoopMode) {
        index = this._validRealIndex(index);
      } else {
        if (index < -1) {
          index = -1;
        }
        if (index > this.children.length) {
          index = this.children.length;
        }
      }
      return index;
    },

    _validRealIndex(index) {
      if (index < 0) {
        index = 0;
      }
      if (index > this.children.length - 1) {
        index = this.children.length - 1;
      }
      return index;
    },

    /**
     * @desc slideTo 结束回调
     * @param {Number} index 滑动索引
     * @param {Function} callback 回调函数
     */
    _onSlideAnimationEnd(index, callback) {
      this.animating = false;
      if (!this.isLoopMode) {
        this.currentIndex = index;
      } else {
        if (index >= this.children.length) {
          this.slideTo(0, false);
          this.children[0].translate = 0;
          this.currentIndex = 0;
        } else if (index < 0) {
          this.slideTo(this.children.length - 1, false);
          this.children[this.children.length - 1].translate = 0;
          this.currentIndex = this.children.length - 1;
        } else {
          this.currentIndex = index;
        }
      }
      callback && callback();
    },

    /**
     * @desc 滑动到指定索引
     * @param {Number} index 轮播索引
     * @param {Boolean} useAnimation 是否使用动画
     * @note 不涉及 currentIndex 计算, 但是需要对 index 做有效校验
     */
    slideTo(index, useAnimation = true, callback) {
      if (useAnimation) {
        this.animating = true;
        setTimeout(() => {
          this._onSlideAnimationEnd(index, callback);
        }, this.duration);
      }
      this.useAnimation = useAnimation;
      this.translate = -this.size * index;
      this._updateSlideStl();
    },

    /**
     * 以当前的索引为参数，向右滑动一个单位
     */
    slideNext() {
      const { children } = this;
      const index = this.currentIndex + 1;
      if (this.isLoopMode) {
        if (index >= children.length) {
          children[0].translate = children.length * this.size;
        }
        this.slideTo(index, index <= children.length);
      } else {
        this.slideTo(this._validIndex(index));
      }
    },

    /**
     * 以当前的索引为参数，向左滑动一个单位
     */
    slidePrev() {
      const { children } = this;
      const index = this.currentIndex - 1;
      if (this.isLoopMode && index < 0) {
        children[children.length - 1].translate = -children.length * this.size;
        this.slideTo(index);
      } else {
        this.slideTo(this._validIndex(index));
      }
    }
  },
  render() {
    return (
      <div
        class={bem([this.direction])}
        style={this.wrapperStl}
        ref="wrapper"
        ontouchstart={this._onTouchStart}
        ontouchmove={this._onTouchMove}
        ontouchend={this._onTouchEnd}
      >
        <div class={bem('slides')} style={this.slideStl} ref="slides">
          {this.$slots.default}
        </div>
        {this.$slots.indicator ? (
          this.$slots.indicator
        ) : (
          <div class={bem('indicators')}>
            {this.children.map((element, index) => {
              return (
                <span
                  class={bem('indicator', {
                    active: this.currentIndex === index
                  })}
                  key={index}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
});
