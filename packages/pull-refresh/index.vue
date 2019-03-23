<template>
  <div class="ymu-pull-refresh-wrapper" ref="wrapper">
    <div
      class="ymu-pull-refresh-container"
      @touchstart="_onTouchStart"
      @touchmove="_onTouchMove"
      @touchend="_onTouchEnd"
      @touchcancel="_touchCancel"
      ref="container"
      :style="containerStl"
    >
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
  data () {
    return {
      touches: [],
      translate: 0,
      wrapperHeight: 0,
      $wrapper: null,
      $container: null,
      $offsetParent: document.documentElement,
      offsetParentHeight: 0
    }
  },
  computed: {
    containerStl () {
      return {
        transform: `translateY(${this.translate}px)`
      }
    }
  },
  methods: {
    $init () {
      this.$wrapper = this.$refs.wrapper
      this.$container = this.$refs.container
      this.wrapperHeight = this.$wrapper.offsetHeight
      this.$offsetParent = document.documentElement
      this.offsetParentHeight = this.$offsetParent.offsetHeight
    },
    _onTouchStart (event) {
      const touch = event.changedTouches[0]
      if (!touch) {
        return
      }
      this.touches = [touch]
    },
    _onTouchMove (event) {
      const touch = event.changedTouches[0]
      if (!touch) {
        return
      }
      /**
       * 获取当前的偏移量，这里为什么不直接从data中获取呢？
       * 但是dom的实际偏移与data中的translate不同步
       */
      const translate = getTranslate(this.$container, 'y')

      /**
       * 起始点与结束点之间的距离
       */
      const delta = touch.pageY - this.touches[0].pageY

      /**
       * 相邻两点之间距离的区别，注意它和(起始点与结束点之间的距离)之间的区别
       */
      const diff = touch.pageY - this.touches[this.touches.length - 1].pageY

      /**
       * 当前scroll 偏移大小
       */
      const scrollTop = this.$offsetParent.scrollTop
      
      if (diff > 0) {
        // 往下拉
        if (scrollTop === 0) {
          this.translate = Math.pow(delta, .85)
        }
      }
      if (diff < 0) {
        // 往上拉
        if (this.translate > 0) {
          this.translate = translate + diff
          // 防止拖动外层
          event.preventDefault()
        }
      }
      this.touches.push(touch)
    },
    _onTouchEnd (event) {
      if (this.translate > 40) {
        this.translate = 40
        this.$emit('on-refresh', this.stopPullRefresh)
      } else {
        this.translate = 0
      }
    },
    _touchCancel (event) {
      if (this.translate > 40) {
        this.translate = 40
        this.$emit('on-refresh', this.stopPullRefresh)
      } else {
        this.translate = 0
      }
    },
    isCanTriggerRefresh () {
    },
    stopPullRefresh (event) {
      this.translate = 0
    }
  },
  mounted () {
    this.$init()
  }
})
</script>

<style lang="scss">
#app {
  height: 100vh;
  // overflow: scroll;
}
</style>
