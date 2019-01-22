<template>
  <div class="ymu-marquee">
    <div class="ymu-marquee-box" ref="box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('marquee')

export default useName({
  props: {
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
    itemHeight: Number
  },
  data () {
    return {
      len: 0,
      timeId: null,
      currentHeight: 0,
      currentDuration: 0,
      currentItemHeight: 0,

      length: 0,
      height: '',
      currentIndex: 0,
      noAnimate: false,
      currenTranslateY: 0
    }
  },
  watch: {
    currentIndex (val) {
      this.$emit('on-index-change', val)
    }
  },
  methods: {
    setTransition (duration) {
      const $box = this.$refs.box
      $box.style['transition-duration'] = `${duration}ms`
    },
    setTransform () {
      const $box = this.$refs.box
      if (this.direction === 'up') {
        const offset = -this.currentItemHeight * (this.currentIndex + 1)
        $box.style.transform = `translate3d(0, ${offset}px, 0)`
      }
      if (this.direction === 'down') {
        const offset = -this.currentItemHeight * (-this.currentIndex + 1 + this.len)
        $box.style.transform = `translate3d(0, ${offset}px, 0)`
      }
    },
    play () {
      this.setTransition(this.duration)
      this.currentIndex++
      this.setTransform()
      if (this.currentIndex === this.len) {
        setTimeout(() => {
          this.setTransition(0)
          this.currentIndex = 0
          this.setTransform()
        }, this.duration)
      }
    }
  },
  mounted () {
    const $box = this.$refs.box
    const $children = this.$refs.box.children
    const $firstItem = $children[0]
    const $lastItem = $box.lastChild
    this.len = $children.length
    this.currentHeight = $box.offsetHeight
    this.currentItemHeight = $firstItem.offsetHeight
    this.setTransform()
    $box.appendChild($firstItem.cloneNode(true))
    $box.insertBefore($lastItem.cloneNode(true), $firstItem)
    this.timeId = setInterval(() => {
      this.play()
    }, this.interval)
  },
  beforeDestroy () {
    clearInterval(this.timeId)
  }
})
</script>

<style lang="scss" src="./index.scss"></style>
