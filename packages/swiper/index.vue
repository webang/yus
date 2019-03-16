<template>
  <div
    :class="swiperCls"
    :style="wrapperStl"
    ref="wrapper"
    @touchstart="_onTouchStart"
    @touchmove="_onTouchMove"
    @touchend="_onTouchEnd"
  >
    <div class="ymu-swiper-slides" :style="slideStl" ref="slides">
      <slot></slot>
    </div>
    <slot name="indicator">
      <div class="ymu-swiper-indicators">
        <span class="ymu-swiper-indicator" :class="{'ymu-swiper-indicator--active': index===currentIndex}" v-for="(item, index) in swipes.length" :key="index"></span>
      </div>
    </slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
import { getTranslate } from './util'
const [useName, useBem] = use('swiper')
const now = () => +new Date()

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
        return ['horizontal', 'vertical'].indexOf(value) !== -1
      }
    },
    // 动画时长
    duration: {
      type: Number,
      default: 400
    },
    // 自动轮播间隔
    interval: {
      type: Number,
      default: 3000
    },
    // 是否自动播放
    autoplay: {
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
      swipes: [],
      wrapperStl: {},
      slideStl: {},
      calcWidth: undefined,
      calcHeight: undefined,
      currentIndex: this.active,
      useAnimation: false,
      translate: 0,
      state: {
        touchStartTime: undefined,
        touchStartScreen: undefined,
        touchStartOffset: undefined,
        touchMoveTime: undefined,
        touchMoveScreen: undefined,
        touchMoveOffset: undefined,
        touchEndTime: undefined,
        touchEndScreen: undefined,
        isTouchStarted: false,
        isTouchMoved: false,
        diff: 0
      }
    }
  },
  computed: {
    swiperCls () {
      return [`ymu-swiper`, `ymu-swiper--${this.direction}`]
    },
    indicatorCls () {
    },
    isVertical () {
      return this.direction === 'vertical'
    },
    slideLen () {
      return this.swipes.length
    },
    isUseLoopMode () {
      return this.loop && this.swipes.length > 1
    }
  },
  watch: {
    currentIndex (val) {
      this.$emit('on-index-change', val)
    },
    active (val) {
      this.currentIndex = val
    }
  },
  mounted() {
    this.calcElSize()
    // this.autoPlay()
  },
  methods: {
    calcElSize() {
      const el = this.$refs.wrapper
      const rect = this.$refs.wrapper.getBoundingClientRect()
      this.calcWidth = this.width || rect.width
      this.calcHeight = this.height || rect.height
      this.wrapperStl = {
        width: `${this.calcWidth}px`,
        height: `${this.calcHeight}px`
      }
      this.updateSlideStl()
      this.swipes.forEach(element => {
        element.translate = 0
      })
    },
    autoPlay () {
      if (this.autoplay && this.slideLen > 0) {
        setTimeout(() => {
          this.currentIndex++
          this.slideTo(this.currentIndex)
          setTimeout(() => {
            if (this.currentIndex >= this.swipes.length-1) {
              // if 
            } else {
              this.autoPlay()
            }
          }, this.duration)
        }, this.interval)
      }
    },

    /**
     * 不决定是否使用动画
     */
    updateSlideStl () {
      this.slideStl = {
        width: `${this.calcWidth * this.swipes.length}px`,
        height: `${this.calcHeight}px`,
        transform: `translate${this.isVertical ? 'Y' : 'X'}(${this.translate}px)`,
        transitionDuration: `${this.useAnimation ? this.duration : 0}ms`,
      }
    },

    /**
     * 滑动到指定索引
     * 不涉及 currentIndex 计算
     * 但是需要对 index 做有效校验
     */
    slideTo (index, useAnimation = true) {
      if (this.isUseLoopMode) {
        if (index > this.swipes.length) {
          throw 'invalid slide index'
        }
      } else {
        if (index > this.swipes.length -1) {
          throw 'invalid slide index'
        }
      }
      // if (this.animating) {
      //   return
      // }
      this.animating = true
      setTimeout(() => {
        this.animating = false
        if (!this.isUseLoopMode) {
          this.currentIndex = index
          return
        }
        if (index >= this.swipes.length) {
          this.slideTo(0, false)
          this.swipes[0].translate = 0
          this.currentIndex = 0
        } else if (index < 0) {
          this.slideTo(this.swipes.length - 1, false)
          this.swipes[this.swipes.length - 1].translate = 0
          this.currentIndex = this.swipes.length - 1
        } else {
          this.currentIndex = index
        }
      }, this.duration)
      this.translate = -this.calcWidth * index
      this.useAnimation = useAnimation
      this.updateSlideStl()
    },

    /**
     * 以当前的索引为参数，向右滑动一个单位
     */
    slideNext () {
      const index = this.currentIndex + 1
      if (this.isUseLoopMode) {
        if (index >= this.swipes.length) {
          this.swipes[0].translate = this.swipes.length * this.calcWidth
        }
        this.slideTo(index, index <= this.swipes.length)
      } else {
        if (index <= this.swipes.length - 1) {
          this.slideTo(index)
        }
      }
    },

    /**
     * 以当前的索引为参数，向左滑动一个单位
     */
    slidePrev () {
      const index = this.currentIndex - 1
      if (this.isUseLoopMode) {
        if (index < 0) {
          this.swipes[this.swipes.length - 1].translate = -this.swipes.length * this.calcWidth
        }
        this.slideTo(index)
      }
      if (index < 0) {
      } else {
        this.slideTo(index)
      }
    },

    getTranslate () {
      return getTranslate(
        this.$refs.slides,
        this.isVertical ? 'y' : 'x'
      );
    },

    /**
     * handle touchstart
     */
    _onTouchStart (event) {
      const touch = event.changedTouches[0];
      if (!touch) throw 'error';

      this.state.isTouchStarted = true;
      this.state.touchStartTime = now();
      this.state.touchStartPoint = touch;
      this.state.touchStartTranslate = this.getTranslate();
    },

    /**
     * handle toucmove
     */
    _onTouchMove (event) {
      const touch = event.changedTouches[0];
      if (!touch) throw 'error';

      const translate = getTranslate(
        this.$refs.slides,
        this.isVertical ? 'y' : 'x'
      );
      let diffX = 0;
      let diffY = 0;
      let deltaX = 0;
      let deltaY = 0;

      deltaX = touch.pageX - this.state.touchStartPoint.pageX;
      deltaY = touch.pageY - this.state.touchStartPoint.pageY;

      if (this.isVertical) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          return;
        }
      } else {
        if (Math.abs(deltaX) < Math.abs(deltaY)) {
          return;
        }
      }

      if (this.state.touchMovePoint) {
        diffX = touch.pageX - this.state.touchMovePoint.pageX;
        diffY = touch.pageY - this.state.touchMovePoint.pageY;
      } else {
        diffX = touch.pageX - this.state.touchStartPoint.pageX;
        diffY = touch.pageY - this.state.touchStartPoint.pageY;
      }

      let diff = this.isVertical ? diffY : diffX;

      // valid max translate
      let newTranslate = translate + diff;
      if (newTranslate > 0) {
        if (this.loop && this.swipes.length > 1) {
          this.swipes[this.swipes.length - 1].translate = -this.swipes.length * this.calcWidth;
        } else {
          // 阻尼函数
        }
      }

      // valid min translate
      if (newTranslate < -(this.slideLen - 1) * this.calcWidth) {
        if (this.loop && this.swipes.length > 1) {
          this.swipes[0].translate = this.swipes.length * this.calcWidth;
        } else {
          // 阻尼函数
        }
      }

      // update state
      this.translate = newTranslate;
      this.useAnimation = false;
      this.state.isTouchMoved = true;
      this.state.touchMovePoint = touch;
      this.state.diffX = diffX;
      this.state.diffY = diffY;
      this.state.deltaX = deltaX;
      this.state.deltaY = deltaY;

      if (this.isVertical) {
        this.state.diff = touch.pageY - this.state.touchStartPoint.pageY;
      } else {
        this.state.diff = touch.pageX - this.state.touchStartPoint.pageX;
      }

      // 滑动角度的判断
      if (Math.abs(diffY) > Math.abs(diffX)) return;
      this.updateSlideStl()
    },

    /**
     * handle toucend
     */
    _onTouchEnd (event) {
      if (
        this.state.deltaX === undefined ||
        this.state.deltaY === undefined) {
          return;
      }
      if (this.isVertical) {
        if (Math.abs(this.state.deltaX) > Math.abs(this.state.deltaY)) {
          return;
        }
      } else {
        if (Math.abs(this.state.deltaX) < Math.abs(this.state.deltaY)) {
          return;
        }
      }
      let size = this.isVertical ? this.calcHeight : this.calcWidth
      // 按下到释放之间的时间
      let diffTime = now() - this.state.touchStartTime
      // 计算当前位置
      let index = Math.round(-this.translate / size)
      if (index === this.currentIndex) {
        // 滑动一定距离但是activeIndex未发生改变
        if (diffTime < this.longTouch) {
          // 快速滑动
          if (this.state.diff < 0) {
            index++
          } else {
            index--
          }
        }
      }
      this.slideTo(index)
      this.state.touchStartTime = undefined
      this.state.touchStartPoint = undefined
      this.state.touchMovePoint = undefined
      this.state.isTouchStarted = false
      this.state.isTouchMoved = false
      this.state.diff = 0
      this.state.deltaX = undefined
      this.state.deltaY = undefined
    }
  }
})
</script>
