<template>
  <div class="page-popup">
    <CellGroup title="基本用法">
      <Cell label="从底部弹出">
        <XSwitch slot="value" v-model="demo1.value"></XSwitch>
      </Cell>
      <Cell label="从顶部弹出">
        <XSwitch slot="value" v-model="demo2.value"></XSwitch>
      </Cell>
      <Cell label="从左边弹出">
        <XSwitch slot="value" v-model="demo3.value"></XSwitch>
      </Cell>
      <Cell label="从右边弹出">
        <XSwitch slot="value" v-model="demo4.value"></XSwitch>
      </Cell>
    </CellGroup>
    <Popup v-model="demo1.value">
      <div>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
      </div>
    </Popup>
    <Popup v-model="demo2.value" position="top">
      <div>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
      </div>
    </Popup>
    <Popup v-model="demo3.value" position="left">
      <div>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
      </div>
    </Popup>
    <Popup v-model="demo4.value" position="right">
      <div>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
      </div>
    </Popup>
  </div>
</template>

<script>
import Popup from '@/components/popup'
import Cell from '@/components/cell'
import CellGroup from '@/components/cell-group'
import XSwitch from '@/components/switch'
export default {
  components: {
    Cell,
    Popup,
    XSwitch,
    CellGroup
  },
  data () {
    return {
      demo1: {
        value: false
      },
      demo2: {
        value: false
      },
      demo3: {
        value: false
      },
      demo4: {
        value: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
