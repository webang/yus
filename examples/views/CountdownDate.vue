<template>
  <div class="view-clokcer">

    <div class="ym-doc-block__title">基本信息</div>
    <div class="ym-doc-block__bd">
      <p>当前时间-时间戳： {{ currentTime }}</p>
      <p>当前时间-格式化: {{ convertToStr(currentDay) }}</p>

      <p>两天以后-时间戳: {{ getNextTwoDay() }}</p>
      <p>两天以后-格式化: {{ convertToStr(getNextTwoDay()) }}</p>

      <p>两天之前-时间戳： {{ getPrevTwoDay() }}</p>
      <p>两天之前-格式化： {{ convertToStr(getPrevTwoDay()) }}</p>
    </div>

<!--     <div class="ym-doc-block__title">已经开始</div>
    <div class="ym-doc-block__bd">
      <ul>
        <li>
          <p>开始时间：{{ convertToStr(getPrevTwoDay()) }}</p>
          <p>结束时间：{{ convertToStr(getNextTwoDay()) }}</p>
          <CountdownDate
            :startTime="getPrevTwoDay()"
            :endTime="getNextTwoDay()"
          />
        </li>
      </ul>
    </div> -->

    <div class="ym-doc-block__title">还未开始</div>
    <div class="ym-doc-block__bd">
      <ul>
        <li>
          <p>开始时间：{{ convertToStr(getRelativeDay(2)) }}</p>
          <p>结束时间：{{ convertToStr(getRelativeDay(4)) }}</p>
          <CountdownDate
            :startTime="getRelativeDay(2)"
            :endTime="getRelativeDay(4)"
          />
        </li>
      </ul>
    </div>

<!--     <div class="ym-doc-block__title">slot-scope</div>
    <div class="ym-doc-block__bd">
      <ul>
        <li>
          <p>开始时间：{{ convertToStr(getRelativeDay(2)) }}</p>
          <p>结束时间：{{ convertToStr(getRelativeDay(4)) }}</p></p>
          <CountdownDate :startTime="startTime" :endTime="endTime">
            <template slot-scope="prop">
              {{ prop }}
            </template>
          </CountdownDate>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import { Badge, Cell, Clocker, CountdownDate, CellGroup } from "ymu";
export default {
  components: {
    Cell,
    Badge,
    Clocker,
    CountdownDate,
    CellGroup
  },
  data() {
    return {
      startTime: 0,
      endTime: 0,
      beginTime: 0,
      overTime: 0,
      twoDaysBefore: 0,
      twoDaysAfter: 0,
      currentDay: 0,
      counter: 0
    };
  },
  methods: {
    onChange1(counter) {
      console.log("01: on-change", counter)
    },
    onEnd1() {
      console.log("01: on-end")
    },
    onChange2(counter) {
      console.log("02: on-change", counter)
    },
    onEnd2() {
      console.log("02: on-end")
    },
    getCurrentDay (isNumber = true) {
      const time = new Date()
      if (isNumber) {
        return new Date(time).getTime()
      }
    },
    convertToStr (time) {
      const obj = new Date(time * 1000)
      const year = obj.getFullYear()
      const month = obj.getMonth() + 1
      const date = obj.getDate()
      const hour = obj.getHours()
      const minute = obj.getMinutes()
      const second = obj.getSeconds()
      return `${year}-${month}-${date} ${hour}:${minute}:${second}`
    },
    getNextTwoDay () {
      const obj = new Date()
      const year = obj.getFullYear()
      const month = obj.getMonth()
      const date = obj.getDate() + 2
      return parseInt(new Date().setFullYear(year, month, date) / 1000)
    },
    getPrevTwoDay () {
      const obj = new Date()
      const year = obj.getFullYear()
      const month = obj.getMonth()
      const date = obj.getDate() - 2
      return parseInt(new Date().setFullYear(year, month, date) / 1000)
    },
    getRelativeDay (num) {
      const obj = new Date()
      const year = obj.getFullYear()
      const month = obj.getMonth()
      const date = obj.getDate() + num
      return parseInt(new Date().setFullYear(year, month, date) / 1000)
    }
  },
  computed: {
    currentTime: {
      get (time) {
        return new Date().getTime()
      }
    }
  },
  mounted() {
    const startTime =
      new Date(new Date().setFullYear(2018, 11, 12)).setHours(0, 0, 0, 0) /
      1000
    const endTime =
      new Date(new Date().setFullYear(2018, 11, 30)).setHours(0, 0, 0, 0) /
      1000

    const beginTime =  new Date(new Date().setFullYear(2019, 1, 1)).setHours(0, 0, 0, 0) /
      1000
    this.endTime = endTime
    this.startTime = startTime
    this.overTime = endTime
    this.beginTime = beginTime

    this.currentDay = this.getCurrentDay()
  }
};
</script>

<style lang="scss" scoped>
.page-badge {
  /deep/ .ym-badge {
    margin-left: 5px;
  }
  /deep/ .ym-cell__value {
    color: #999;
  }
}
</style>
