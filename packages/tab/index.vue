<template>
  <div class="ymu-tab-wrapper">
    <div class="ymu-tab-container">
      <div class="ymu-tab" :class="tabCls">
        <slot></slot>
        <div class="ymu-tab-line" :style="barStyle" :data-barLeft="barLeft"></div>
      </div>
    </div>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('tab')

export default useName({
  data () {
    return {
      childLen: this.$children.length,
      currentIndex: 0
    }
  },
  props: {
    value: Number,
    disabled: Boolean,
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
    barLeft () {
      if (this.childLen === 0) return
      const width = window.innerWidth
      const itemWidth = this.$children[this.currentIndex].$el.getBoundingClientRect().width
      const count = this.scrollable ? (width / itemWidth) : this.childLen
      return `${this.currentIndex * (100 / count)}%`
    },
    barRight () {
      if (this.childLen === 0) return
      const width = window.innerWidth
      const itemWidth = this.$children[this.currentIndex].$el.getBoundingClientRect().width
      const count = this.scrollable ? (width / itemWidth) : this.childLen
      return `${(count - this.currentIndex - 1) * (100 / count)}%`
    },
    barStyle () {
      const commonStyle = {
        left: this.barLeft,
        right: this.barRight,
        height: this.lineWidth + 'px'
      }
      return commonStyle
    },
    isActive () {
      return this.index === this.parentValue
    },
    tabCls () {
      return {
        'ymu-tab--scrollable': this.scrollable
      }
    },
    lineStyle () {
      return {
        width: (1 / this.childLen) * 100 + '%',
        left: (this.value / this.childLen) * 100 + '%'
      }
    }
  },
  watch: {
    value (val) {
      this.currentIndex = val
    }
  },
  mounted () {
    this.currentIndex = this.value
    this.childLen = this.$children.length
  }
})
</script>
