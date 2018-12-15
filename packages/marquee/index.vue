<template>
  <div class="ym-marquee">
    <div class="ym-marquee-box" ref="marqueeBox">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ym-marquee',
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
    }
  },
  data () {
    return {
      len: 0,
      timeId: null,
      currentIndex: 0,
      currentHeight: 0,
      currentDuration: 0,
      currentItemHeight: 0
    }
  },
  watch: {
    currentIndex (val) {
      this.$emit('on-index-change', val)
    }
  },
  methods: {
    setTransition (duration) {
      const $marqueeBox = this.$refs.marqueeBox
      $marqueeBox.style['transition-duration'] = `${duration}ms`
    },
    setTransform () {
      const $marqueeBox = this.$refs.marqueeBox
      if (this.direction === 'up') {
        const offset = -this.currentItemHeight * (this.currentIndex + 1)
        $marqueeBox.style.transform = `translate3d(0, ${offset}px, 0)`
      }
      if (this.direction === 'down') {
        const offset = -this.currentItemHeight * (-this.currentIndex + 1 + this.len)
        $marqueeBox.style.transform = `translate3d(0, ${offset}px, 0)`
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
    const $marqueeBox = this.$refs.marqueeBox
    const $children = this.$refs.marqueeBox.children
    const $firstItem = $children[0]
    const $lastItem = $marqueeBox.lastChild
    this.len = $children.length
    this.currentHeight = $marqueeBox.offsetHeight
    this.currentItemHeight = $firstItem.offsetHeight
    this.setTransform()
    $marqueeBox.appendChild($firstItem.cloneNode(true))
    $marqueeBox.insertBefore($lastItem.cloneNode(true), $firstItem)
    this.timeId = setInterval(() => {
      this.play()
    }, this.interval)
  },
  beforeDestroy () {
    clearInterval(this.timeId)
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
