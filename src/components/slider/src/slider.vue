<template>
  <div class="ym-slider" :class="[{'ym-slider--disabled': disabled}]">
    <div class="ym-slider__hd" v-if="$slots.start">
      <slot name="start"></slot>
    </div>
    <div class="ym-slider__bd" ref="content" :style="contentStyle">
      <div class="ym-slider__runway" ref="runway"></div>
      <div class="ym-slider__track" ref="track" :style="{ width: ratio }"></div>
      <div
        class="ym-slider__thumb"
        :style="{ left: ratio }"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"></div>
    </div>
    <div class="ym-slider__ft" v-if="$slots.end">
      <slot name="end"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ym-slider',
  props: {
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    'track-height': {
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
      points: []
    }
  },
  computed: {
    ratio () {
      let value = this.value
      value = value > this.max ? this.max : value
      value = value < this.min ? this.min : value
      return (value - this.min) / (this.max - this.min) * 100 + '%'
    },
    contentStyle () {
      return {
        height: this.trackHeight + 'px'
      }
    }
  },
  methods: {
    getRect (element) {
      return element.getBoundingClientRect()
    },
    onTouchStart (event) {
      const touch = event.changedTouches[0]
      if (this.disabled) {
        return
      }
      this.startPoint = touch
      this.trackRect = this.getRect(this.$refs.track)
      this.contentRect = this.getRect(this.$refs.content)
    },
    onTouchMove (event) {
      const touch = event.changedTouches[0]
      if (this.disabled) {
        return
      }
      let deltaX = touch.pageX - this.startPoint.pageX
      let newWidth = this.trackRect.width + deltaX
      let progress = newWidth / this.contentRect.width

      progress = progress < 0 ? 0 : progress
      progress = progress > 1 ? 1 : progress

      let nextVal = progress * (this.max - this.min) + this.min

      this.movePoint = touch
      this.$emit('input', Math.round(nextVal))
    },
    onTouchEnd (event) {
      if (this.disabled) {
        return
      }
      this.startPoint = null
    }
  }
}
</script>

<style lang="scss" src="./slider.scss"></style>
