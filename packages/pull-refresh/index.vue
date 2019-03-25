<template>
  <div class="ymu-pull-refresh-wrapper" ref="wrapper">
    <div class="ymu-pull-refresh-container" ref="container" :style="containerStl">
      <div class="ymu-pull-refresh-indictor">
        <div>加载中..</div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('pull-refresh')
import { getTranslate, setTranslate } from './util'

export default useName({
  props: {
    onRefresh: Function,
    topPullDistance: {
      typeof: Number,
      default: 50
    }
  },
  data () {
    return {
      touches: [],
      translate: 0,
      $wrapper: null,
      $container: null,
      delta: 0,
      diff: 0,
      useAnimation: false
    }
  },
  computed: {
    containerStl () {
      return {
        transform: `translateY(${this.translate}px)`,
        'transition-duration': this.useAnimation ? '300ms' : `0ms`
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
      let delta =  (touch.clientY - this.touchStartScreenY) / 2;

      this.touches.push(touch);
      this.currentScreenY = touch.clientY;
      this.direction = delta > 0 ? 'down' : 'up';
      this.delta = delta

      if (
        typeof this.onRefresh === 'function' &&
        this.direction === 'down' &&
        this.getScrollTop(this.$scrollTarget) === 0 && !this.loading
      ) {
        event.preventDefault();
        event.stopPropagation();
        this.translate = this.touchStartTranslateY + delta
      }
      this.$emit('on-translate-change', this.translate);
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

<style lang="scss">
#app {
  height: 100vh;
  // overflow: scroll;
}
</style>
