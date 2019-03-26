<template>
  <div class="ymu-pull-refresh-wrapper" ref="wrapper">
    <div class="ymu-pull-refresh-container" ref="container" :style="containerStl">
      <slot name="indicator">
        <div class="ymu-pull-refresh-indictor">
          <div>{{ topText }}</div>
        </div>
      </slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('pull-refresh')
import { getTranslate, setTranslate } from './util'

/**
 * 整个拖动过程可以分为3个状态
 * 1. 下拉未到阀值
 * 2. 下拉已到达阀值
 * 3. 处于释放后的加载状态
 */

export default useName({
  props: {
    onRefresh: Function,
    topPullDistance: {
      type: Number,
      default: 50
    },
    loadingText: {
      type: String,
      default: '加载中...'
    },
    pullText: {
      type: String,
      default: '下拉刷新'
    },
    looseText: {
      type: String,
      default: '释放刷新'
    }
  },
  data () {
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
    }
  },
  computed: {
    containerStl () {
      return {
        transform: `translateY(${this.translate}px)`,
        'transition-duration': this.useAnimation ? '300ms' : `0ms`
      }
    },
    topText () {
      if (this.loading) {
        return '正在刷新...';
      } else if (this.translate >= this.topPullDistance) {
        return '释放刷新';
      } else if (this.translate < this.topPullDistance) {
        return '下拉刷新';
      }
    }
  },
  methods: {
    init () {
      this.$scrollTarget = this.getScrollTarget(this.$el)
      if (typeof this.onRefresh === 'function') {
        this.bindTouchEvents()
      }
    },

    /**
     * 初始化 touch 事件
     */
    bindTouchEvents () {
      this.$el.addEventListener('touchstart', this.handleTouchStart)
      this.$el.addEventListener('touchmove', this.handleTouchMove)
      this.$el.addEventListener('touchend', this.handleTouchEnd)
      this.$el.addEventListener('touchend', this.handleTouchCancel)
    },

    /**
     * 查找 scroll event target
     */
    getScrollTarget (element) {
      let currentElement = element
      while ( currentElement && ['HTML', 'BODY'].indexOf(currentElement.tagName) === -1) {
        let overflow = document.defaultView.getComputedStyle(currentElement).overflowY
        if (['scroll', 'auto'].indexOf(overflow) !== -1) {
          return currentElement
        }
        currentElement = currentElement.parentNode
      }
      return window
    },

    /**
     * 获取 scroll top
     */
    getScrollTop (element) {
      if (element === window) {
        return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
      } else {
        return element.scrollTop
      }
    },

    // 手指按下
    handleTouchStart (event) {
      const touch = event.changedTouches[0];
      this.touches = [touch];
      this.useAnimation = false;
      this.touchStartScreenY = touch.clientY;
      this.touchStartTranslateY = this.translate;
      this.startScrollTop = this.getScrollTop(this.$scrollTarget);
    },

    // 手指移动
    handleTouchMove (event) {
      const touch = event.changedTouches[0];
      let delta =  Math.pow((touch.clientY - this.touchStartScreenY), 0.85);
      let diff =  touch.clientY - this.touches[this.touches.length - 1].clientY;
      let direction = diff > 0 ? 'down' : 'up';

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
        this.translate = this.touchStartTranslateY + delta
      }

      this.$emit('on-translate-change', this.translate);
      this.touches.push(touch);
    },

    // 手指拿起
    handleTouchEnd () {
      if (!this.delta) {
        // 未发生移动
        return;
      }
      if (
        this.direction === 'down' &&
        this.getScrollTop(this.$scrollTarget) === 0 &&
        this.translate > this.topPullDistance
      ) {
        this.loading = true;
        this.useAnimation = true;
        this.translate = this.topPullDistance;
        this.onRefresh(this.stopPullRefresh);
      }
    },

    // 手指移出屏幕外
    handleTouchCancel () {
      this.handleTouchEnd();
    },

    // 结束
    stopPullRefresh () {
      this.translate = 0;
      this.loading = false;
      this.useAnimation = false;
    }
  },
  mounted () {
    this.init()
  }
})
</script>
