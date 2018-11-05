<template>
  <div class="ymu-marquee">
    <div class="ymu-marquee-box" ref="marqueeBox" :style="boxStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ymu-marquee',
  props: {
    interval: {
      type: Number,
      default: 20000
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
  computed: {
    boxStyle () {
      const currentDuration = this.currentDuration
      let offset = -this.currentItemHeight * this.currentIndex
      if (this.direction !== 'up') {
        offset = this.currentItemHeight * this.currentIndex - this.currentItemHeight * this.len
      }
      return {
        transform: `translate3d(0, ${offset}px, 0)`,
        transition: `transform ${currentDuration}ms ease 0s`
      }
    }
  },
  methods: {
    setTransition (duration) {
      const $marqueeBox = this.$refs.marqueeBox
      $marqueeBox.style.transition = `transform ${duration}ms ease 0s`
    },
    playUp () {
      this.currentDuration = this.duration
      this.currentIndex++
      if (this.currentIndex === this.len) {
        this.currentDuration = 0
        this.currentIndex = 0
      }
      if (this.currentIndex) {
      }
    },
    playDown () {
      this.currentDuration = this.duration
      this.currentIndex++
      if (this.currentIndex === this.len) {
        this.currentDuration = 0
        this.currentIndex = 0
      }
      if (this.currentIndex) {
      }
    }
  },
  mounted () {
    const $marqueeBox = this.$refs.marqueeBox
    const $children = this.$refs.marqueeBox.children
    const $firstItem = $children[0]
    const $lastItem = $marqueeBox.lastChild

    $marqueeBox.appendChild($firstItem.cloneNode(true))
    $marqueeBox.insertBefore($lastItem.cloneNode(true), $firstItem)

    this.currentHeight = $marqueeBox.offsetHeight
    this.currentItemHeight = $firstItem.offsetHeight
    this.len = $children.length

    this.timeId = setInterval(() => {
      if (this.direction === 'up') {
        this.playUp()
      } else {
        this.playDown()
      }
    }, this.interval)
  }
}
</script>

<style lang="scss" src="./marquee.scss"></style>
