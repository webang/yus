<template>
  <div class="page-checkbox">

    <div class="ym-doc-title">基础用法</div>
    <Radio class="item" v-model="radioValue1">深圳</Radio>
    <Radio class="item" v-model="radioValue2">深圳</Radio>

    <div class="ym-doc-title">禁用状态</div>
    <Radio class="item" v-model="radioValue1" :disabled="true">深圳</Radio>
    <Radio class="item" v-model="radioValue2" :disabled="true">深圳</Radio>

    <CellGroup title="Cell搭配使用">
      <Cell title="深圳">
        <Radio slot="value" v-model="radioValue1"></Radio>
      </Cell>
      <Cell title="珠海">
        <Radio slot="value" v-model="radioValue2"></Radio>
      </Cell>
    </CellGroup>
  </div>
</template>

<script>
import Toast from '@/components/toast'
import Cell from '@/components/cell'
import CellGroup from '@/components/cell-group'
import Button from '@/components/button'
import Field from '@/components/field'
import Checkbox from '@/components/Checkbox'
import CheckboxGroup from '@/components/checkbox-group'
import Radio from '@/components/radio'

export default {
  components: {
    Cell,
    Field,
    Button,
    Checkbox,
    CellGroup,
    CheckboxGroup,
    Radio
  },
  data () {
    return {
      checkboxGroupValue1: ['深圳'],
      checkboxGroupValue2: ['珠海'],
      checkboxGroupValue3: ['深圳'],
      radioValue1: true,
      radioValue2: false
    }
  },
  watch: {
    checkboxGroupValue (val) {
      console.log(val)
    }
  }
}
</script>


<style lang="scss" scoped>
.item {
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 10px;
}
</style>
