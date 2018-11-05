<template>
  <div class="ymu-notice-bar">
    <div class="ymu-notice-bar__left-icon">
      <slot name="icon-left">
        <i class="iconfont icon-voice"></i>
      </slot>
    </div>
    <div class="ymu-notice-bar__content" ref="barContent">
      <div class="ymu-notice-bar__marquee-wrap" ref="marqueeWrap" :style="style">
        <slot></slot>
      </div>
    </div>
    <div class="ymu-notice-bar__right-icon">
      <slot name="icon-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ymu-notice-bar',
  data () {
    return {
      offset: 0,
      currentOffset: 0,
      loop: true,
      timeId: null
    }
  },
  props: {
    wait: {
      type: Number,
      default: 2000
    },
    frequence: {
      type: Number,
      default: 1000
    }
  },
  computed: {
    style () {
      return {
        left: this.currentOffset + 'px'
      }
    }
  },
  methods: {
    caclSize () {
      const barContent = this.$refs.barContent
      const marqueeWrap = this.$refs.marqueeWrap
      const pWidth = barContent.clientWidth
      const cWidth = marqueeWrap.offsetWidth
      this.offset = pWidth - cWidth
    },
    play () {
      console.log('play')
      this.currentOffset--
      if (this.currentOffset < this.offset) {
        this.timeId = setTimeout(() => {
          this.currentOffset = 0
          this.play()
        }, this.wait)
        return
      }
      this.timeId = setTimeout(() => {
        this.play()
      }, this.frequence)
    }
  },
  mounted () {
    this.caclSize()
    this.play()
    this.time = setTimeout(() => {
      console.log('time')
    }, 2000)
  },
  beforeDestroy () {
    console.log('beforeDestroy')
    this.timeId = null
    clearTimeout(this.timeId)
    this.time = null
  }
}
</script>

<style lang="scss" src="./notice-bar.scss"></style>
