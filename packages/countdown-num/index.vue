<template>
  <div class="ymu-countdown-num">
    <slot
      :calculator="calculator"
      :isCounting="isCounting"
      :isEnd="isEnd"
      :remain="remain"
      :delay="delay"
    >
      <span>{{ remain }}</span>
    </slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('countdown-num')

export default useName({
  props: {
    count: Number,
    delay: {
      type: Number,
      default: 0
    },
    play: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      timeId: null,
      calculator: 0
    };
  },
  computed: {
    remain () {
      return this.count - this.calculator
    },
    isEnd () {
      return this.calculator >= this.count
    },
    isCounting () {
      return (this.calculator > 0) && (this.calculator < this.count)
    }
  },
  watch: {
    calculator (val) {
      this.$emit('on-change', this.remain)
      if (val >= this.count) {
        this.$emit('on-end')
        this.clearTimeId()
      }
    },
    play (val) {
      if (val) {
        this.initCount()
      } else {
        this.clearTimeId()
      }
    }
  },
  methods: {
    beginCount() {
      this.calculator++
    },
    initCount () {
      if (this.count <= 0) return this.$emit('on-end')
      this.timeId = setInterval(this.beginCount, 1000)
    },
    clearTimeId () {
      clearInterval(this.timeId)
    }
  },
  mounted() {
    setTimeout(() => {
      if (this.play) this.initCount()
    }, this.delay * 1000)
  },
  beforeDestroy() {
    this.clearTimeId()
  }
})
</script>

index.scss
