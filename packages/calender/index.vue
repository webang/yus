<template>
  <div class="ym-calender">
    <div class="ym-calender__hd">
      <div class="ym-calender__year">
        <span @click="onClickPrevYear">&lt;</span>
        <span v-text="showYear"></span>
        <span @click="onClickNextYear">&gt;</span>
      </div>
      <div class="ym-calender__month">
        <span @click="onClickPrevMonth">&lt;</span>
        <span v-text="showMonth"></span>
        <span @click="onClickNextMonth">&gt;</span>
      </div>
    </div>
    <div class="ym-calender__bd">
      <div class="ym-calender__row">
        <div class="ym-calender__col" v-for="item in dayMaps" :key="item" v-text="item"></div>
      </div>
      <div class="ym-calender__row" v-for="(row, rowIndex) in dateRows" :key="rowIndex">
        <div
          class="ym-calender__col"
          v-for="(dateItem, dateIndex) in dayMaps"
          :key="dateIndex"
          :class="[{
            'is-selected': isSelected(dateList[rowIndex*7+dateIndex])
          }]"
          @click="onClickDate(dateList[rowIndex*7+dateIndex])"
        >
          <template v-if="dateList[rowIndex*7+dateIndex] && dateList[rowIndex*7+dateIndex].type==='current'">
            <span>{{ dateList[rowIndex*7+dateIndex].date }}</span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addZero2SingleNum } from '../../src/utils/utils'
const dayMaps = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
const dateReg = /^(\d{4})\-(\d{1,2})\-(\d{1,2})$/

export default {
  data () {
    return {
      dayMaps: dayMaps,
      showYear: 0,
      showMonth: 0,
      curMonthShowDateList: [], // 当前选择的月份对应的日期列表
      prevShowDateList: [] // 左补全
    }
  },
  props: {
    value: [String, Array], // 字符串为标准时间(2018-12-12)
    useFormatNum: {
      type: Boolean,
      default: true
    }
    // date: [String, Number] // 字符串为标准时间(2018-12-12), Number为时间戳
  },
  computed: {
    curDateObj () {
      const dateObj = new Date();
      return {
        year: dateObj.getUTCFullYear(),
        month: dateObj.getMonth() + 1,
        date: dateObj.getDate()
      }
    },
    isToday (year, month, date) {
      const curDateObj = this.curDateObj
      return year === curDateObj.year && month === curDateObj.month & date === curDateObj.date
    },
    dateList () {
      return this.prevShowDateList.concat(this.curMonthShowDateList)
    },
    dateRows () {
      return Math.ceil(this.dateList.length / 7)
    }
  },
  methods: {
    onClickNextMonth () {
      let year = this.showYear
      let month = this.showMonth + 1
      if (month > 12) {
        month = 1
        year++
      }
      this.getShowDateList(year, month)
    },
    onClickPrevMonth () {
      let year = this.showYear
      let month = this.showMonth - 1
      if (month < 1) {
        month = 12
        year--
      }
      this.getShowDateList(year, month)
    },
    onClickNextYear () {
      let year = this.showYear + 1
      this.getShowDateList(year, this.showMonth)
    },
    onClickPrevYear () {
      let year = this.showYear - 1
      this.getShowDateList(year, this.showMonth)
    },
    onClickDate (date) {
      if (!date) return
      const formatDate = `${date.year}-${addZero2SingleNum(date.month)}-${addZero2SingleNum(date.date)}`
      console.log(formatDate)


      if (typeof this.value === 'string') {
        this.$emit('input', formatDate) 
      } else {
        const index = this.value.indexOf(formatDate)
        if (index === -1) {
          this.$emit('input', this.value.concat(formatDate))
        } else {
          const copyList = this.value.slice()
          copyList.splice(index, 1)
          this.$emit('input', copyList)
        }
      }
    },
    isSelected (date) {
      if (!this.value) return false
      if (date && date.type === 'current') {
        if (typeof this.value === 'string') {
          const result = dateReg.exec(this.value)
          return +result[1] === date.year && +result[2] === date.month && +result[3] === date.date
        } else if (Array.isArray(this.value)) {
          for (let index = 0; index < this.value.length; index++) {
            const result = dateReg.exec(this.value[index])
            if (+result[1] === date.year && +result[2] === date.month && +result[3] === date.date) {
              return true
              break
            }
          }
        }
      }
    },
    getShowDateList (year, month, date) {
      /**
       * 获取当前月份的天数
       */
      const stamp = new Date().setFullYear(year, month, 0)
      const days = new Date(stamp).getDate()

      /**
       * 创建当前选择月份对应的日前列表
       */
      const curMonthShowDateList = []
      for (let index = 1; index < days; index ++) {
        curMonthShowDateList.push({
          year: year,
          month: month,
          date: index,
          type: 'current'
        })
      }

      /**
       * 1. 获取当前月份第一天是星期几
       * 2. 左侧补全数据
       */
      const curMonthFirstDay = new Date(new Date().setFullYear(year, month - 1, 1)).getDay()
      const prevShowDateList = []
      for (let index = 0; index < curMonthFirstDay; index++) {
        prevShowDateList.push({
          type: 'prev'
        })
      }

      /**
       * 右侧补全数据
       */
      console.log(prevShowDateList)

      this.showYear = year
      this.showMonth = month
      this.prevShowDateList = prevShowDateList
      this.curMonthShowDateList = curMonthShowDateList
    }
  },
  mounted () {
    if (this.value) {
      /**
       * @example 2018-12-12
       * @note 这里的month为 1-12
       */
      const result = dateReg.exec(this.value)
      console.log(result)
      if (!result) {
        throw 'value is not a valid date format'
      } else {
        this.getShowDateList(+result[1], +result[2], +result[3])
      }
    } else {
      const { year, month, date } = this.curDateObj
      this.getShowDateList(year, month, date)
    }
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
