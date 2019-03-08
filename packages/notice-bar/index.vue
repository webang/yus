<template>
  <div class="ymu-notice-bar" @click="$emit('click')">
    <div class="ymu-notice-bar__hd">
      <slot name="header">
        <Icon name="ios-megaphone"></Icon>
      </slot>
    </div>
    <div class="ymu-notice-bar__bd" ref="barContent">
      <div class="ymu-notice-bar__marquee-wrap" ref="marqueeWrap" :style="style">
        <slot></slot>
      </div>
    </div>
    <div class="ymu-notice-bar__ft">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import Icon from '../icon'
import use from '../../src/utils/use'
const [useName, useBem] = use('notice-bar')

export default useName({
  components: {
    Icon
  },
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
})
</script>

index.scss
