<template>
  <div class="ym-notice-bar" @click="emit('click')">
    <div class="ym-notice-bar__hd">
      <slot name="head">
        <i class="iconfont icon-voice"></i>
      </slot>
    </div>
    <div class="ym-notice-bar__bd" ref="barContent">
      <div class="ym-notice-bar__marquee-wrap" ref="marqueeWrap" :style="style">
        <slot></slot>
      </div>
    </div>
    <div class="ym-notice-bar__ft">
      <slot name="foot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ym-notice-bar',
  data () {
    return {
      offset: 0,
      currentOffset: 0,
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
      default: 40
    },
    loop: {
      type: Boolean,
      default: true
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
      this.currentOffset--
      if (this.currentOffset < this.offset) {
        if (this.loop) {
          this.timeId = setTimeout(() => {
            this.currentOffset = 0
            this.play()
          }, this.wait)
        }
      } else {
        this.timeId = setTimeout(() => {
          this.play()
        }, this.frequence)
      }
    }
  },
  mounted () {
    this.caclSize()
    this.play()
  },
  beforeDestroy () {
    clearTimeout(this.timeId)
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
