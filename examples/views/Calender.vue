<template>
  <div class="page-calender">
    <Cell label="单选" is-link>
      <div slot="value" @click="backdropVisible=!backdropVisible">
        <span v-if="dateValue" v-text="dateValue"></span>
        <span v-else>选择日期</span>
      </div>
    </Cell>
    <Cell label="多选" is-link>
      <div slot="value" @click="backdropVisible2=!backdropVisible2">
        <span v-if="dateValue2.length" v-text="dateValue2"></span>
        <span v-else>选择日期</span>
      </div>
    </Cell>
    <Cell label="禁用" is-link>
      <div slot="value" @click="backdropVisible3=!backdropVisible3">
        <span v-if="dateValue3.length" v-text="dateValue3"></span>
        <span v-else>选择日期</span>
      </div>
    </Cell>
    <calender
      class="ym-calender"
      :visible="backdropVisible"
      v-model="dateValue"
      @on-click-backdrop="backdropVisible=false"></calender>
    <calender
      class="ym-calender"
      :visible="backdropVisible2"
      v-model="dateValue2"
      @on-click-backdrop="backdropVisible2=false"
      ></calender>
    <calender
      class="ym-calender"
      :visible="backdropVisible3"
      v-model="dateValue3"
      @on-click-backdrop="backdropVisible3=false"
      :disabledFn="disabledFn"></calender>
  </div>
</template>

<script>
import { Calender, Backdrop, Cell } from 'ymu'
export default {
  components: {
    Cell,
    Backdrop,
    Calender
  },
  data () {
    return {
      dateValue: '2017-01-1',
      backdropVisible: false,
      dateValue2: ['2018-12-12'],
      backdropVisible2: false,
      dateValue3: ['2018-12-13'],
      backdropVisible3: false
    }
  },
  methods: {
    disabledFn (date) {
      if (!date || date.type !== 'current') return false
      const endStamp = new Date(new Date().setFullYear(2018, 11, 15)).setHours(0, 0, 0, 0) / 1000
      const startStamp = new Date(new Date().setFullYear(2018, 11, 10)).setHours(0, 0, 0, 0) / 1000
      if (date.timestamp > endStamp || date.timestamp < startStamp) {
        return true
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
ul {
  padding: 0 12px;
}

li {
  line-height: 40px;
  font-size: 14px;
  color: #666;
}

.ym-calender {
  z-index: 1000;
  position: fixed;
  background: #fff;
  bottom: 0;
  width: 100%;
}
</style>
