<template>
  <div class="ym-canlender">
    <div class="ym-canlender__hd">
      <div class="ym-canlender__year"></div>
      <div class="ym-canlender__month"></div>
    </div>
    <div class="ym-canlender__bd">
      <table>
        <thead>
          <tr>
            <td v-for="item in dayMaps" :key="item" v-text="item"></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in dayRows" :key="item">
            <td v-for="day in 7" :key="day">{{ day }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>

<script>
const dayMaps = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
 
export default {
  data () {
    return {
      dayMaps: dayMaps,
      currentDate: '', //当天的日期
      currentvalue: '',
      currentMonthDays: 0
    }
  },
  props: {
    value: [String], // // 字符串为标准时间(2018-12-12)
    date: [String, Number] // 字符串为标准时间(2018-12-12), Number为时间戳
  },
  computed: {
    dayRows () {
      return parseInt(this.currentMonthDays / 7)
    }
  },
  methods: {
    getCurrentClientDate () {
      const dateObj = new Date()
      const month = dateObj.getMonth()
      const year = dateObj.getUTCFullYear()
      const date = dateObj.getDate()
      console.log(year, month, date)

      const stamp = new Date().setFullYear(year, month + 1, 0) //当前月份最后一刻
      const currentMonthDays = new Date(stamp).getDate() // 当前月份的天数
      const currentMonthFirstDateObj = new Date(new Date().setFullYear(year, month, 1)) // 当前月份的第一天
      const urrentMonthFirstDateDay = currentMonthFirstDateObj.getDay() // 当前月份的第一天是星期几
      this.currentMonthDays = currentMonthDays
    }
  },
  mounted () {
    this.getCurrentClientDate()
  }
}
</script>
