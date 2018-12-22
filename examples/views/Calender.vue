<template>
  <div class="page-calender">
    <Backdrop v-model="backdropVisible" @click="backdropVisible=false"></Backdrop>
    <Cell label="选择日期" is-link>
      <div slot="value" @click="backdropVisible=true">
        <span v-if="dateValue" v-text="dateValue"></span>
        <span v-else>选择日期</span>
      </div>
    </Cell>
    <Cell label="选择日期" is-link>
      <div slot="value" @click="backdropVisible2=true">
        <span v-if="dateValue2.length" v-text="dateValue2"></span>
        <span v-else>选择日期</span>
      </div>
    </Cell>
    <calender class="ym-calender" v-if="backdropVisible" v-model="dateValue"></calender>
    <calender class="ym-calender" v-if="backdropVisible2" v-model="dateValue2"></calender>
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
      backdropVisible2: false
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
