import Icon from '../icon'
import Popup from '../popup'
import Backdrop from '../backdrop'

import { addZero } from '../utils'
import { dateReg, dayMap } from '../utils/date'
import { use } from '../utils/use';

const [useName, bem] = use('calender')

export default useName({
  components: {
    Icon,
    Popup,
    Backdrop
  },

  data() {
    return {
      dayMap: dayMap,
      showYear: 0,
      showMonth: 0,
      curMonthShowDateList: [], // 当前选择的月份对应的日期列表
      prevShowDateList: [], // 左补全
      nextShowDateList: [] // 右补全
    }
  },

  props: {
    visible: {
      type: Boolean,
      default: false
    },

    // 字符串为标准时间(2018-12-12)
    value: [String, Array],

    // 字符串为标准时间(2018-12-12), Number为时间戳
    currentDate: [String, Number],

    useFormatNum: {
      type: Boolean,
      default: true
    },

    disabledFn: {
      type: Function
    },

    closeOnClickBackdrop: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    visible(val) {
      if (val) {
        this.initData()
      }
    }
  },

  computed: {
    curDateObj() {
      const dateObj = new Date();
      return {
        year: dateObj.getUTCFullYear(),
        month: dateObj.getMonth() + 1,
        date: dateObj.getDate()
      }
    },

    isToday(year, month, date) {
      const curDateObj = this.curDateObj
      return year === curDateObj.year && month === curDateObj.month & date === curDateObj.date
    },

    dateList() {
      return this.prevShowDateList.concat(this.curMonthShowDateList)
    },

    dateRows() {
      return Math.ceil(this.dateList.length / 7)
    },

    getDateRow() {
      return new Array(this.dateRows);
    }
  },

  methods: {
    addZero,

    dateCls(date) {
      return {
        'is-selected': this.isSelected(date),
        'is-disabled': this.disabledFn ? this.disabledFn(date) : false
      }
    },

    onClickBackdrop() {
      this.$emit('on-click-backdrop')
    },

    onClickNextMonth() {
      let year = this.showYear
      let month = this.showMonth + 1
      if (month > 12) {
        month = 1
        year++
      }
      this.getShowDateList(year, month)
    },

    onClickPrevMonth() {
      let year = this.showYear
      let month = this.showMonth - 1
      if (month < 1) {
        month = 12
        year--
      }
      this.getShowDateList(year, month)
    },

    onClickNextYear() {
      let year = this.showYear + 1
      this.getShowDateList(year, this.showMonth)
    },

    onClickPrevYear() {
      let year = this.showYear - 1
      this.getShowDateList(year, this.showMonth)
    },

    onClickDate(date) {
      if (!date) {
        return
      };

      // 禁用选项
      if (this.disabledFn && this.disabledFn(date)) {
        return;
      }

      const formatDate = `${date.year}-${addZero(date.month)}-${addZero(date.date)}`

      if (typeof this.value === 'string') {
        this.$emit('input', formatDate)
      } else {
        const index = this.value.indexOf(formatDate)
        if (index === -1) {
          this.$emit('input', this.value.concat(formatDate).sort())
        } else {
          let copyList = this.value.slice()
          copyList.splice(index, 1).sort()
          this.$emit('input', copyList)
        }
      }
    },

    isSelected(date) {
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

    getShowDateList(year, month, date) {
      // 获取当前月份的天数
      const stamp = new Date().setFullYear(year, month, 0)
      const days = new Date(stamp).getDate()

      // 创建当前选择月份对应的日前列表
      const curMonthShowDateList = []
      for (let index = 0; index < days; index++) {
        curMonthShowDateList.push({
          year: year,
          month: month,
          date: index + 1,
          type: 'current',
          timestamp: new Date(new Date().setFullYear(year, month - 1, index + 1)).setHours(0, 0, 0, 0) / 1000
        })
      }

      // 获取当前月份第一天是星期几 左侧补全数据
      const curMonthFirstDay = new Date(new Date().setFullYear(year, month - 1, 1)).getDay()
      const prevShowDateList = []
      for (let index = 0; index < curMonthFirstDay; index++) {
        prevShowDateList.push({
          type: 'prev'
        })
      }

      // 右侧补全数据
      const remain = 42 - curMonthShowDateList.length - prevShowDateList.length
      const nextShowDateList = []
      {
        let curMonthLastDate = curMonthShowDateList[curMonthShowDateList.length - 1]
        let stamp = new Date().setFullYear(curMonthLastDate.year, curMonthLastDate.month - 1, curMonthLastDate.date)
        stamp = new Date(stamp).setHours(0, 0, 0, 0)
        stamp += 24 * 3600 * 1000

        let dateObj = new Date(stamp)

        const year = dateObj.getFullYear()
        const month = dateObj.getMonth()

        for (let index = 0; index < remain; index++) {
          nextShowDateList.push({
            year: year,
            month: month + 1,
            date: index + 1
          })
        }
      }

      this.showYear = year
      this.showMonth = month
      this.prevShowDateList = prevShowDateList
      this.nextShowDateList = nextShowDateList
      this.curMonthShowDateList = curMonthShowDateList
    },

    initData() {
      if (this.value) {
        /**
         * @example 2018-12-12
         * @note 这里的month为 1-12
         * @note 如果this.value是一个数组，那么取第一个
         */
        const value = (Array.isArray(this.value) && this.value.length)
          ? this.value[0] : this.value
        const result = dateReg.exec(value)

        if (!result) {
          throw 'value is not a valid date format'
        } else {
          this.getShowDateList(+result[1], +result[2], +result[3])
        }
      } else {
        const { year, month, date } = this.curDateObj
        this.getShowDateList(year, month, date)
      }
    },

    renderDataRows() {

    },

    getDateRows() {
      const groups = []
      const array7 = new Array()
      const dateList = this.dateList;

      for (let index = 0; index < this.dateRows; index++) {
        groups.push({})
      }

      for (let index = 0; index < 7; index++) {
        array7.push({})
      }

      return groups.map((row, rowIndex) => {
        return (
          <div class="yus-calender__row" key={rowIndex}>
            {array7.map((dateItem, dateIndex) => {
              const flag = dateList[rowIndex * 7 + dateIndex] && dateList[rowIndex * 7 + dateIndex].type === 'current'
              const clsObj = this.dateCls(dateList[rowIndex * 7 + dateIndex])
              const cls = ['yus-calender__col']

              Object.keys(clsObj).forEach(key => {
                if (clsObj[key]) {
                  cls.push(key);
                }
              })

              return (
                <div class={cls} key={dateIndex} v-on: click={() => {
                  this.onClickDate(dateList[rowIndex * 7 + dateIndex])
                }}>
                  {flag ? <span>{dateList[rowIndex * 7 + dateIndex].date}</span> : null}
          </div>
        )
      })
    }
          </div>
        )
      })
    }
  },

mounted() {
  this.initData()
},

render() {
  return (
    <div class="v-dom">
      <Popup v-model={this.visible} close-on-click-backdrop={false} vOn: click-backdrop={this.onClickBackdrop}>
          <div class="yus-calender">
        {/* header */}
        <div class="yus-calender__hd">
          <div class="yus-calender__year">
            <Icon name="ios-arrow-back" v-on: click={this.onClickPrevYear}/>
                <span>{this.showYear}</span>
            <Icon name="ios-arrow-forward" vOn: click={this.onClickNextYear}/>
              </div>
          <div class="yus-calender__month">
            <Icon name="ios-arrow-back" vOn: click={this.onClickPrevMonth}/>
                <span>{this.addZero(this.showMonth)}</span>
            <Icon name="ios-arrow-forward" vOn: click={this.onClickNextMonth}/>
              </div>
        </div>
      </div>
      <div class="yus-calender__bd">
        <div class="yus-calender__row">
          {
            this.dayMap.map(item => {
              return <div class="yus-calender__col" key={item}>{item}</div>
            })
          }
        </div>
        {this.getDateRows()}
      </div>
        </Popup>
      </div >
    )
}
});