<template>
  <div class="wui-range">
    <slot name="start"></slot>
    <div class="wui-range-content" ref="content" :style="{ height: thick + 'px'}">
      <div class="wui-range__runway" ref="runway"></div>
      <div class="wui-range__track" ref="track" :style="trackStyle"></div>
      <div
        class="wui-range__thumb"
        :class="[{ 'is-active': direction === 'from' }]"
        :style="{ left: left + '%' }"
        @touchstart="onTouchStart('from', $event)"
        @touchmove="onTouchMove('from', $event)"
        @touchend="onTouchEnd('from', $event)"></div>
      <div
        class="wui-range__thumb"
        :class="[{ 'is-active': direction === 'top' }]"
        :style="{ left: (100 - right) + '%' }"
        @touchstart="onTouchStart('to', $event)"
        @touchmove="onTouchMove('to', $event)"
        @touchend="onTouchEnd('to', $event)"></div>
    </div>
    <slot name="end"></slot>
  </div>
</template>

<script>
  export default {
    name: 'wui-range',
    props: {
      value: Array,
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      thick: {
        type: Number,
        default: 2
      },
      step: {
        type: Number,
        default: 1
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        startPoint: null,
        movePoint: null,
        runWidth: 0,
        curDirection: '',
        direction: ''
      }
    },
    computed: {
      ratio () {
        return (this.value[1] - this.value[0]) /  (this.max - this.min) * 100
      },
      left () {
        return (this.value[0] - this.min) /  (this.max - this.min) * 100
      },
      right () {
        return (100 - ((this.value[1] - this.min) /  (this.max - this.min) * 100))
      },
      trackStyle () {
        return {
          left: this.left + '%',
          right: this.right + '%'
        }
      }
    },
    methods: {
      getRect (element) {
        return element.getBoundingClientRect()
      },
      onTouchStart (direction, event) {
        const touch = event.changedTouches[0]
        this.startPoint = touch;
        this.trackRect = this.getRect(this.$refs.track)
        this.contentRect = this.getRect(this.$refs.content)
        this.localLeft = this.left
        this.localRatio = this.ratio
        this.direction = direction
      },
      onTouchMove (direction, event) {
        const touch = event.changedTouches[0]

        let deltaX = touch.pageX - this.startPoint.pageX
        let progress = 0

        /***
         * 这里的算法有多种，但是下面这种最简单，计算量最小
         */
        if (direction === 'from') {
          progress = this.localLeft / 100 + deltaX / this.contentRect.width
        } else {
          progress = this.localLeft / 100 + this.localRatio / 100 + deltaX / this.contentRect.width
        }

        progress = progress < 0 ? 0 : progress
        progress = progress > 1 ? 1 : progress

        let nextValue = progress * (this.max - this.min) + this.min

        if (direction === 'from') {
          nextValue = nextValue > this.value[1] ? this.value[1] : nextValue
        } else {
          nextValue = nextValue < this.value[0] ? this.value[0] : nextValue
        }

        nextValue = Math.round(nextValue)

        if (direction === 'from') {
          this.$emit('input', [nextValue, this.value[1]])
        } else {
          this.$emit('input', [this.value[0], nextValue])
        }

        this.movePoint = touch
      },
      onTouchEnd (direction, event) {
        this.startPoint = null
      }
    }
  }
</script>

<style lang="scss" src="./region-slider.scss"></style>
