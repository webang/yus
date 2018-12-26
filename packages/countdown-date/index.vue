<template>
  <div class="ym-countdown-date">
    <slot
      :remain="remain"
      :isCounting="isCounting"
      :isEnd="isEnd"
      :isNotStart="isNotStart"
    >
    <template v-if="isNotStart">
      活动将在 {{ parseTimeStamp(currentStartTime * 1000 - (currentTime + calculator * 1000)) }}
    </template>
    <template v-else>
      <span class="value">{{ countDownData.day }}</span>
      <span class="label">天</span>
      <span class="value">{{ countDownData.hour }}</span>
      <span class="label">时</span>
      <span class="value">{{ countDownData.minute }}</span>
      <span class="label">分</span>
      <span class="value">{{ countDownData.second }}</span>
      <span class="label">秒</span>
    </template>
    </slot>
  </div>
</template>

<script>
import { isType } from '../../src/utils/isType'
import { dateRegExp, parseTimeStamp, parseCountDown } from '../../src/utils/utils'
/**
 * @prop: time 设置当前客户端的时间，当这个时间是从服务端获取，这将很有用
 * @prop: startTime 开始时间
 * @prop: endTime 结束时间
 */
export default {
  name: "ym-clocker",
  props: {
    time: [String, Number],
    startTime: [Number, String],
    endTime: [Number, String],
  },
  data() {
    return {
      timeId: null,
      calculator: 0
    };
  },
  computed: {
    currentTime () {
      let currentTime = 0
      let timeType = typeof this.time
      switch (timeType) {
        case 'undefined':
          currentTime = parseInt(new Date().getTime())
          break
        case 'number':
          currentTime = this.time
          break
        case 'string':
          currentTime = this.formatDate(this.time)
          break
        default:
          break
      }
      return currentTime
    },
    currentStartTime () {
      let timeType = typeof this.startTime
      if (timeType === 'string') {
        return this.formatDate(this.startTime)
      }
      if (timeType === 'number') {
        return this.startTime
      }
    },
    currentEndTime () {
      let timeType = typeof this.endTime
      if (timeType === 'string') {
        return this.formatDate(this.endTime)
      }
      if (timeType === 'number') {
        return this.endTime
      }
    },
    second () {
      return parseInt(this.currentTime / 1000)
    },
    countDownData() {
      return parseCountDown(this.endTime - this.second - this.calculator)
    },
    currentDate() {
      return parseTimeStamp(this.currentTime + this.calculator * 1000)
    },
    remain () {
      return this.second - this.calculator
    },
    isEnd () {
      return this.currentTime >= this.currentEndTime + this.calculator
    },
    isCounting () {
      const conditionOne = this.currentTime > this.currentStartTime + this.calculator
      const conditionTwo = this.currentTime + this.calculator < this.currentEndTime
      return conditionOne && conditionTwo
    },
    isNotStart () {
      console.log(this.currentTime / 1000 + this.calculator < this.currentStartTime)
      return (this.currentTime / 1000 + this.calculator) < this.currentStartTime
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
    }
  },
  methods: {
    parseTimeStamp,
    parseCountDown,
    formatDate (dateStr) {
      const result = dateRegExp.exec(dateStr)
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
      return time
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
};
</script>

<style lang="scss" src="./index.scss"></style>
