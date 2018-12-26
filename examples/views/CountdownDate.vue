<template>
  <div class="page-countdown-date">
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

    <div class="ym-doc-block__title">已经开始</div>
    <div class="ym-doc-block__bd">
      <ul>
        <li>
          <p>开始时间：{{ convertToStr(getRelativeDay(-1)) }}</p>
          <p>结束时间：{{ convertToStr(getRelativeDay(1)) }}</p>
          <CountdownDate
            :startTime="getRelativeDay(-1)"
            :endTime="getRelativeDay(1)"
          />
        </li>
      </ul>
    </div>

    <div class="ym-doc-block__title">马上结束</div>
    <div class="ym-doc-block__bd">
      <ul>
        <li>
          <p>开始时间：{{ convertToStr(getRelativeDay(-1)) }}</p>
          <p>结束时间：{{ convertToStr(willBeOvered()) }}</p>
          <CountdownDate
            :startTime="getRelativeDay(-1)"
            :endTime="willBeOvered()"
            @on-end="onEnd"
            @on-change="onChange"
          />
        </li>
      </ul>
    </div>

    <div class="ym-doc-block__title">已经结束</div>
    <div class="ym-doc-block__bd">
      <ul>
        <li>
          <p>开始时间：{{ convertToStr(getRelativeDay(-2)) }}</p>
          <p>结束时间：{{ convertToStr(getRelativeDay(-1)) }}</p>
          <CountdownDate
            :startTime="getRelativeDay(-2)"
            :endTime="getRelativeDay(-1)"
          />
        </li>
      </ul>
    </div>

    <div class="ym-doc-block__title">马上结束</div>
    <div class="ym-doc-block__bd">
      <ul>
        <li>
          <p>开始时间：{{ convertToStr(getRelativeDay(-1)) }}</p>
          <p>结束时间：{{ convertToStr(willBeOvered()) }}</p>
          <CountdownDate
            :startTime="getRelativeDay(-1)"
            :endTime="willBeOvered()">
            <template slot-scope="prop">
              {{ prop }}
            </template>
          </CountdownDate>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { CountdownDate } from "ymu"
export default {
  components: {
    CountdownDate
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    onChange(counter) {
      console.log("on-change", counter)
    },
    onEnd() {
      console.log("on-end")
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
    getRelativeDay (num) {
      const obj = new Date()
      const year = obj.getFullYear()
      const month = obj.getMonth()
      const date = obj.getDate() + num
      return parseInt(new Date().setFullYear(year, month, date) / 1000)
    },
    willBeOvered () {
      return this.getRelativeDay(0) + 10
    }
  }
}
</script>

<style lang="scss" scoped>
.page-countdown-date {
  padding-bottom: 20px;
}
</style>
