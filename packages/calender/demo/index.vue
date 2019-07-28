<template>
  <div class="page-calender">
    <div class="yus-demo-block__hd">基本用法</div>
    <yus-cell-group>
      <yus-cell title="单选" is-link>
        <div slot="value" @click="backdropVisible=!backdropVisible">
          <span v-if="dateValue" v-text="dateValue"></span>
          <span v-else>选择日期</span>
        </div>
      </yus-cell>
      <yus-cell title="多选" is-link>
        <div slot="value" @click="backdropVisible2=!backdropVisible2">
          <span v-if="dateValue2.length" v-text="dateValue2"></span>
          <span v-else>选择日期</span>
        </div>
      </yus-cell>
      <yus-cell title="禁用" is-link>
        <div slot="value" @click="backdropVisible3=!backdropVisible3">
          <span v-if="dateValue3.length" v-text="dateValue3"></span>
          <span v-else>选择日期</span>
        </div>
      </yus-cell>
    </yus-cell-group>

    <yus-calender
      class="yus-calender"
      :visible="backdropVisible"
      v-model="dateValue"
      @on-click-backdrop="backdropVisible=false"/>
    <yus-calender
      class="yus-calender"
      :visible="backdropVisible2"
      v-model="dateValue2"
      @on-click-backdrop="backdropVisible2=false"/>
    <yus-calender
      class="yus-calender"
      :visible="backdropVisible3"
      v-model="dateValue3"
      :disabledFn="disabledFn"
      @on-click-backdrop="backdropVisible3=false"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dateValue: '',
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

<style lang="scss" scoped>
.yus-calender {
  z-index: 1000;
  position: fixed;
  background: #fff;
  bottom: 0;
  width: 100%;
}
</style>
