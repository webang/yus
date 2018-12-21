<template>
  <div class="ym-canlender">
    <div class="ym-canlender__hd">
      <div class="ym-canlender__year"></div>
      <div class="ym-canlender__month"></div>
    </div>
    <div class="ym-canlender__bd">
      <div class="ym-canlender__row">
        <div class="ym-canlender__col" v-for="item in dayMaps" :key="item" v-text="item"></div>
      </div>
      <div class="ym-canlender__row" v-for="item in dayRows" :key="item">
        <div class="ym-canlender__col" v-for="(item, index) in dayMaps" :key="index" v-text="index"></div>
      </div>
    </div>
  </div>
</template>

<script>
const dayMaps = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
console.log(dayMaps)
export default {
  data () {
    return {
      dayMaps: dayMaps,
      currentDate: '', //当天的日期
      currentvalue: '', // 当前选择的值
      monthDays: 0, // 当月的天数
      year: 0,
      month: 0,
      monthDateList: []
    }
  },
  props: {
    value: [String], // 字符串为标准时间(2018-12-12)
    // date: [String, Number] // 字符串为标准时间(2018-12-12), Number为时间戳
  },
  computed: {
    dayRows () {
      return parseInt(this.currentMonthDays / 7)
    },
    currentDateObj () {
      const dateObj = new Date()
      return {
      }
    }
  },
  methods: {
    getCurrentClientDate () {
      const dateObj = new Date()
      const year = dateObj.getUTCFullYear()
      const month = dateObj.getMonth()
      const date = dateObj.getDate()

      this.year = year
      this.month = month

      const stamp = new Date().setFullYear(year, month + 1, 0) //当前月份最后一刻
      const monthDays = new Date(stamp).getDate() // 当前月份的天数
      
      const currentMonthFirstDateObj = new Date(new Date().setFullYear(year, month, 1)) // 当前月份的第一天
      const currentMonthFirstDateDay = currentMonthFirstDateObj.getDay() // 当前月份的第一天是星期几

      const monthDateList = []
      for (let index = 1; index++; index < monthDays) {
        monthDateList.push({
          name: index
        })
      }

      const prevMonthDateList = []
      for (let index = 1; index < currentMonthFirstDateDay; index++) {
        prevMonthDateList.push()
      }

      this.monthDays = monthDays
      this.monthDateList = monthDateList
      this.prevMonthDateList = prevMonthDateList
    }
  },
  mounted () {
    this.getCurrentClientDate()
  }
}
</script>

<style lang="scss">
.ym-canlender__bd {
  // font-size: 14px;
}

.ym-canlender {
  &__row {
    display: flex;
    align-items: center;
  }
  &__col {
    flex: 1;
    font-size: 12px;
    line-height: 30px;
    text-align: center;
  }
}
</style>
