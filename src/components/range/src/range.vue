<template>
  <div class="wui-range">
    <slot name="start"></slot>
    <div class="wui-range-content" ref="content" :style="{ height: thick + 'px'}">
      <div class="wui-range__runway" ref="runway"></div>
      <div class="wui-range__track" ref="track" :style="{ width: ratio }"></div>
      <div
        class="wui-range__thumb"
        :style="{ left: ratio }"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"></div>
    </div>
    <slot name="end"></slot>
  </div>
</template>

<script>
  export default {
    name: 'wui-range',
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
        points: []
      }
    },
    computed: {
      ratio () {
        let value = this.value
        value = value > this.max ? this.max : value
        value = value < this.min ? this.min : value
        return (value - this.min) / (this.max - this.min) * 100 + '%'
      }
    },
    methods: {
      getRect (element) {
        return element.getBoundingClientRect()
      },
      onTouchStart (event) {
        const touch = event.changedTouches[0]
        this.startPoint = touch;
        this.trackRect = this.getRect(this.$refs.track)
        this.contentRect = this.getRect(this.$refs.content)
      },
      onTouchMove (event) {
        const touch = event.changedTouches[0]

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
        this.startPoint = null
      }
    }
  }
</script>

<style lang="scss" src="./range.scss"></style>
