<template>
  <div class="ymu-countdown-date">
    <slot
      :remain="remain"
      :isCounting="isCounting"
      :isEnd="isEnd"
      :isNotStart="isNotStart"
      :second="second"
      :beforeStart="remainDate"
      :beforeEnd="countDownData"
      :calculator="calculator"
    >
    <!-- 未开始 -->
    <template v-if="isNotStart">
      <span>距离活动开始：</span>
      <span class="value">{{ remainDate.day }}</span>
      <span class="label">天</span>
      <span class="value">{{ remainDate.hour }}</span>
      <span class="label">时</span>
      <span class="value">{{ remainDate.minute }}</span>
      <span class="label">分</span>
      <span class="value">{{ remainDate.second }}</span>
      <span class="label">秒</span>
    </template>
    <!-- 进行中 -->
    <template v-else-if="isCounting">
      <span>距离活动结束：</span>
      <span class="value">{{ countDownData.day }}</span>
      <span class="label">天</span>
      <span class="value">{{ countDownData.hour }}</span>
      <span class="label">时</span>
      <span class="value">{{ countDownData.minute }}</span>
      <span class="label">分</span>
      <span class="value">{{ countDownData.second }}</span>
      <span class="label">秒</span>
    </template>
    <!-- 已结束 -->
    <template v-else>
      <span>活动已结束</span>
    </template>
    </slot>
  </div>
</template>

<script>
import { isType } from '../../src/utils/isType'
import { dateReg } from '../../src/utils/date'
import { parseTimeStamp, parseCountDown } from '../../src/utils/utils'
import use from '../../src/utils/use'
const [useName, useBem] = use('countdown-date')

export default useName({
  props: {
    time: [String, Number],
    endTime: [Number, String],
    startTime: [Number, String]
  },
  data() {
    return {
      timeId: null,
      calculator: 0
    };
  },
  computed: {
    remainDate () {
      return parseCountDown(this.currentStartTime - this.calculator - this.currentTime)
    },
    currentTime () {
      let result = 0
      const type = typeof this.time
      switch (type) {
        case 'undefined':
          result = parseInt(new Date().getTime() / 1000)
          break
        case 'number':
          result = this.time
          break
        case 'string':
          result = this.formatDate(this.time)
          break
        default:
          break
      }
      return result
    },
    currentStartTime () {
      const type = typeof this.startTime
      let result
      if (type === 'string') {
        result = this.formatDate(this.startTime)
      }
      if (type === 'number') {
        result = this.startTime
      }
      return result
    },
    currentEndTime () {
      let type = typeof this.endTime
      if (type === 'string') {
        return this.formatDate(this.endTime)
      }
      if (type === 'number') {
        return this.endTime
      }
    },
    second () {
      return parseInt(this.currentTime)
    },
    countDownData() {
      return parseCountDown(this.endTime - this.second - this.calculator)
    },
    currentDate() {
      return parseTimeStamp(this.currentTime + this.calculator)
    },
    remain () {
      return this.second - this.calculator
    },
    isEnd () {
      return this.currentTime + this.calculator >= this.currentEndTime
    },
    hasStarted () {
      let hasStarted
      if (isType(this.startTime, 'Undefined')) {
        hasStarted = true
      } else {
        hasStarted = this.currentTime > (this.currentStartTime + this.calculator)
      }
      return hasStarted
    },
    isCounting () {
      return this.hasStarted && !this.isEnd
    },
    isNotStart () {
      return (this.second + this.calculator) < this.currentStartTime
    }
  },
  watch: {
    startTime(val) {
      this.clearTimeId()
      this.initCount()
    },
    endTime(val) {
      this.clearTimeId()
      this.initCount()
    },
    calculator (val) {
      if (val >= this.second) {
        this.clearTimeId()
        this.$emit('on-change', this.remain)
        this.$emit('on-end')
      } else {
        this.$emit('on-change', this.remain)
      }
    },
    isEnd (val) {
      if (val) {
        this.$emit('on-end')
        this.clearTimeId()
      }
    }
  },
  methods: {
    parseTimeStamp,
    parseCountDown,
    formatDate (dateStr) {
      const result = dateReg.exec(dateStr)
      let time
      if (result) {
        const temp = new Date().setFullYear(+result[1], +result[2] - 1, +result[3])
        if (result[4]) {
          time = new Date(temp).setHours(0, 0, 0, 0)
        } else {
          time = new Date(temp).setHours(result[6], result[7], result[8], 0)
        }
      } else {
        throw new Error(`${dateStr} is not a valid date format`)
      }
      return time / 1000
    },
    beginCount() {
      this.calculator++
    },
    initCount () {
      this.calculator = 0
      if (this.second <= 0) {
        this.$emit('on-end')
        return
      }
      this.timeId = setInterval(this.beginCount, 1000)
    },
    clearTimeId () {
      clearInterval(this.timeId)
    }
  },
  mounted() {
    this.initCount()
  },
  beforeDestroy() {
    this.clearTimeId()
  }
})
</script>

index.scss
