<template>
  <div class="ymu-marquee" :style="{height: height + 'px'}">
    <div class="ymu-marquee-box" ref="box" :style="boxStyle">
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
      default: 1000
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
      timeId: null,
      length: 0,
      height: '',
      currentIndex: 0,
      noAnimate: false,
      currenTranslateY: 0,
      currentDuration: 0
    }
  },
  computed: {
    boxStyle () {
      return {
        transform: `translate3d(0, ${this.currenTranslateY}px, 0)`,
        transition: `transform ${this.noAnimate ? 0 : this.duration}ms`
      }
    }
  },
  watch: {
    currentIndex (val) {
      this.$emit('on-index-change', val)
    }
  },
  mounted () {
    this.init();
    this.start();
  },
  beforeDestroy () {
    clearInterval(this.timeId)
  },
  methods: {
    init () {
      const firstItem = this.$refs.box.firstElementChild
      if (!firstItem) {
        return false
      }

      this.noAnimate = true
      this.length = this.$refs.box.children.length
      this.height = this.itemHeight || firstItem.offsetHeight

      if (this.direction === 'up') {
        this.cloneNode = firstItem.cloneNode(true)
        this.$refs.box.appendChild(this.cloneNode)
        this.currenTranslateY = -this.currentIndex * this.height
      } else {
        this.currenTranslateY = -this.height;
        this.cloneNode = this.$refs.box.lastElementChild.cloneNode(true)
        this.$refs.box.insertBefore(this.cloneNode, firstItem)
      }
      return true
    },
    start () {
      this.timeId = setInterval(() => {
        if (this.direction === 'up') {
          this.currentIndex += 1
          this.currenTranslateY = -this.currentIndex * this.height
          if (this.currentIndex === this.length) {
            setTimeout(() => {
              this.noAnimate = true
              this.currentIndex = 0
              this.currenTranslateY = 0
            }, this.duration)
          } else {
            this.noAnimate = false
          }
        } else {
          this.noAnimate = false
          this.currentIndex -= 1
          this.currenTranslateY = -(this.currentIndex + 1) * this.height
          console.log(this.currentIndex)
          if (this.currentIndex === -1) {
            setTimeout(() => {
              this.noAnimate = true
              this.currentIndex = this.length - 1
              this.currenTranslateY = -(this.currentIndex + 1) * this.height
            }, this.duration)
          } else {
            this.noAnimate = false
          }
        }
      }, this.interval + this.duration)
    }
  }
})
</script>

<style lang="scss" src="./index.scss"></style>
