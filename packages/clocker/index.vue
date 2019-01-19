<template>
  <div class="ymu-clocker">
    <slot :date="currentDate">
      <template v-if="!isCountDay">
        <div>
          <span class="ymu-clocker__year">{{ currentDate.year }}</span>
          <span class="ymu-clocker__divider">-</span>
          <span class="ymu-clocker__month">{{ currentDate.month + 1 }}</span>
          <span class="ymu-clocker__divider">-</span>
          <span class="ymu-clocker__date">{{ currentDate.date }}</span>
        </div>
        <div>
          <span class="ymu-clocker__hour">{{ currentDate.hour }}</span>
          <span class="ymu-clocker__divider">:</span>
          <span class="ymu-clocker__minute">{{ currentDate.minute }}</span>
          <span class="ymu-clocker__divider">:</span>
          <span class="ymu-clocker__second">{{ currentDate.second }}</span>
        </div>
      </template>
      <template v-else>
        <span class="ymu-clocker__hour">{{ countDownData.day }}</span>天
        <span class="ymu-clocker__hour">{{ countDownData.hour }}</span>时
        <span class="ymu-clocker__minute">{{ countDownData.minute }}</span>分
        <span class="ymu-clocker__second">{{ countDownData.second }}</span>秒
      </template>
    </slot>
  </div>
</template>

<script>
import { dateReg } from '../../src/utils/date'
import use from '../../src/utils/use'
const [useName, useBem] = use('clocker')

export default useName({
  props: {
    time: [String, Number],
    startTime: Number,
    endTime: Number
  },
  data() {
    return {
      timeId: null,
      calculator: 0
    }
  },
  computed: {
    isCountDay() {
      return (
        typeof this.startTime !== 'undefined' &&
        typeof this.endTime !== 'undefined'
      )
    },
    currentStamp() {
      let curStamp = 0
      const typeResult = typeof this.time
      if (typeResult !== 'undefined') {
        if (typeResult === 'number') {
          curStamp = this.time
        }
        if (typeResult === "string") {
          const result = dateReg.exec(this.time)
          if (result) {
            if (!result[4]) {
              curStamp = new Date(
                new Date().setFullYear(+result[1], +result[2] - 1, +result[3])
              ).setHours(0, 0, 0, 0)
            } else {
              curStamp = new Date(
                new Date().setFullYear(+result[1], +result[2] - 1, +result[3])
              ).setHours(result[6], result[7], result[8], 0)
            }
          }
        }
      } else {
        curStamp = parseInt(new Date().getTime())
      }
      return curStamp
    },
    countDownData() {
      const diff =
        this.endTime - parseInt(this.currentStamp / 1000) - this.calculator
      const day = parseInt(diff / 24 / 3600)
      const hour = parseInt((diff - day * 24 * 3600) / 3600)
      const minute = parseInt((diff - day * 24 * 3600 - hour * 3600) / 60)
      const second = parseInt(
        diff - day * 24 * 3600 - hour * 3600 - minute * 60
      )
      return {
        day,
        hour,
        minute,
        second
      }
    },
    currentDate() {
      const dateObj = new Date(this.currentStamp + this.calculator * 1000)
      const year = dateObj.getFullYear()
      const month = dateObj.getMonth()
      const date = dateObj.getDate()
      const hour = dateObj.getHours()
      const minute = dateObj.getMinutes()
      const second = dateObj.getSeconds()
      return {
        year,
        month,
        date,
        hour,
        minute,
        second
      }
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
      }, 1000)
    }
  },
  mounted() {
    this.initCount()
  },
  beforeDestroy() {
    clearInterval(this.timeId)
  }
})
</script>

<style lang="scss" src="./index.scss"></style>
