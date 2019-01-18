<template>
  <div class="ymu-slider" :class="[{'ymu-slider--disabled': disabled}]">
    <div class="ymu-slider__hd" v-if="$slots.start">
      <slot name="start"></slot>
    </div>
    <div class="ymu-slider__bd" ref="content" :style="contentStyle">
      <div class="ymu-slider__runway" ref="runway" :style="runwayStyle"></div>
      <div class="ymu-slider__track" ref="track" :style="trackStyle"></div>
      <div
        class="ymu-slider__thumb"
        :style="{ left: ratio, backgroundColor: thumbColor}"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"></div>
    </div>
    <div class="ymu-slider__ft" v-if="$slots.end">
      <slot name="end"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ymu-slider',
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
    runwayHeight: {
      type: Number,
      default: 2
    },
    runwayColor: String,
    trackColor: String,
    thumbColor: String,
    step: {
      type: Number,
      default: 1
    },
    disabled: Boolean
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
        height: `${this.runwayHeight}px`
      }
    },
    trackStyle () {
      return {
        width: this.ratio,
        height: `${this.runwayHeight}px`,
        backgroundColor: this.trackColor
      }
    },
    runwayStyle () {
      return {
        height: `${this.runwayHeight}px`,
        backgroundColor: this.runwayColor
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

<style lang="scss" src="./index.scss"></style>
