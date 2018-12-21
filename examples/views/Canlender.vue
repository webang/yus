<template>
  <div class="page-canlender">
    <Backdrop v-model="backdropVisible"></Backdrop>
    <Canlender class="ym-canlender"></Canlender>
  </div>
</template>

<script>
import { Canlender, Backdrop } from 'ymu'

export default {
  components: {
    Backdrop,
    Canlender
  },
  data () {
    return {
      list: [],
      backdropVisible: true
    }
  },
  created () {
    for (let index = 0; index < 50; index++) {
      this.list.push(index);
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
