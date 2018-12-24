<template>
  <div class="ym-clocker">
    <slot :date="currentDate">
      <span class="value">{{ countDownData.day }}</span>
      <span class="label">天</span>
      <span class="value">{{ countDownData.hour }}</span>
      <span class="label">时</span>
      <span class="value">{{ countDownData.minute }}</span>
      <span class="label">分</span>
      <span class="value">{{ countDownData.second }}</span>
      <span class="label">秒</span>
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
 * @prop: mode 倒计时模式，可选值为 number, date
 */
export default {
  name: "ym-clocker",
  props: {
    time: [String, Number],
    startTime: Number,
    endTime: Number,
    mode: {
      type: String,
      default: 'number'
    }
  },
  data() {
    return {
      timeId: null,
      calculator: 0
    };
  },
  computed: {
    isCountNum () {
      return this.mode === 'number'
    },
    isCountDate () {
      return this.mode === 'date'
    },
    currentStamp() {
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
          const result = dateRegExp.exec(this.time)
          if (result) {
            const temp = new Date().setFullYear(+result[1], +result[2] - 1, +result[3])
            if (result[4]) {
              currentTime = new Date(temp).setHours(0, 0, 0, 0)
            } else {
              currentTime = new Date(temp).setHours(result[6], result[7], result[8], 0)
            }
          } else {
            throw new Rrror('time is not a valid date format')
          }
          break
      }
    },
    countDownData() {
      return parseCountDown(this.endTime - parseInt(this.currentStamp / 1000) - this.calculator)
    },
    currentDate() {
      return parseTimeStamp(this.currentStamp + this.calculator * 1000)
    }
  },
  watch: {
    startTime(val) {
      clearInterval(this.timeId)
      this.initCount()
    },
    endTime(val) {
      clearInterval(this.timeId)
      this.initCount()
    }
  },
  methods: {
    beginCount() {
      this.calculator++
    },
    initCount () {
      this.calculator = 0
      this.beginCount()
      this.timeId = setInterval(() => {
        this.beginCount()
      }, 1000);      
    }
  },
  mounted() {
    this.initCount()
  },
  beforeDestroy() {
    clearInterval(this.timeId)
  }
};
</script>

<style lang="scss" src="./index.scss"></style>