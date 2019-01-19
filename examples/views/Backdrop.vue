<template>
  <div class="page-backtop">
    <div class="ymu-doc-block__hd">基本用法</div>
    <CellGroup>
      <Cell label="显示">
        <YSwitch slot="value" v-model="show01"></YSwitch>
      </Cell>
    </CellGroup>
    <Backdrop v-model="show01" @click="show01=false"></Backdrop>
  </div>
</template>

<script>
import {
  Backdrop,
  Cell,
  CellGroup,
  Switch as YSwitch
} from 'ymu'

export default {
  components: {
    Cell,
    CellGroup,
    Backdrop,
    YSwitch
  },
  data () {
    return {
      show01: false
    }
  }
}
</script>