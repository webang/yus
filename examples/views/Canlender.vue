<template>
  <div class="page-canlender">
    <Backdrop v-model="backdropVisible" @click="backdropVisible=false"></Backdrop>
    <Cell label="选择日期" is-link>
      <div slot="value" @click="backdropVisible=true">
        <span v-if="dateValue" v-text="dateValue"></span>
        <span v-else>选择日期</span>
      </div>
    </Cell>
    <Canlender class="ym-canlender" v-if="backdropVisible" v-model="dateValue"></Canlender>
  </div>
</template>

<script>
import { Canlender, Backdrop, Cell } from 'ymu'
export default {
  components: {
    Cell,
    Backdrop,
    Canlender
  },
  data () {
    return {
      dateValue: '2017-01-1',
      backdropVisible: false
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

.ym-canlender {
  z-index: 1000;
  position: fixed;
  background: #fff;
  bottom: 0;
  width: 100%;
}
</style>
