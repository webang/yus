import { use } from '../utils/use'
const [useName, bem] = use('slider')

export default useName({
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
  data() {
    return {
      startPoint: null,
      movePoint: null,
      runWidth: 0,
      points: []
    }
  },
  computed: {
    ratio() {
      let value = this.value
      value = value > this.max ? this.max : value
      value = value < this.min ? this.min : value
      return (value - this.min) / (this.max - this.min) * 100 + '%'
    },
    contentStyle() {
      return {
        height: `${this.runwayHeight}px`
      }
    },
    trackStyle() {
      return {
        width: this.ratio,
        height: `${this.runwayHeight}px`,
        backgroundColor: this.trackColor
      }
    },
    runwayStyle() {
      return {
        height: `${this.runwayHeight}px`,
        backgroundColor: this.runwayColor
      }
    }
  },
  methods: {
    getRect(element) {
      return element.getBoundingClientRect()
    },
    onTouchStart(event) {
      const touch = event.changedTouches[0]
      if (this.disabled) {
        return
      }
      this.startPoint = touch
      this.trackRect = this.getRect(this.$refs.track)
      this.contentRect = this.getRect(this.$refs.content)
    },
    onTouchMove(event) {
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
    onTouchEnd(event) {
      if (this.disabled) {
        return
      }
      this.startPoint = null
    }
  },
  render() {
    const cls = bem([{
      disabled: this.disabled,
    }])
    const start = <div class="yus-slider__hd">{this.$slots.start}</div>
    const end = <div class="yus-slider__ft">{this.$slots.end}</div>
    return (
      <div class="yus-slider" class={cls}>
        {this.$slots.start ? start : null}
        <div class="yus-slider__bd" ref="content" style={this.contentStyle}>
          <div class="yus-slider__runway" ref="runway" style={this.runwayStyle}></div>
          <div class="yus-slider__track" ref="track" style={this.trackStyle}></div>
          <div
            class="yus-slider__thumb"
            style={{ left: this.ratio, backgroundColor: this.thumbColor }}
            v-on: touchstart={this.onTouchStart}
          v-on:touchmove={this.onTouchMove}
          v-on:touchend={this.onTouchEnd}
          ></div>
        </div>
        {this.$slots.end ? end : null }
      </div>
    )
  }
})