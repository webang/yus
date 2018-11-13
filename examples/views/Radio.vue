<template>
  <div class="page-checkbox">

    <div class="ym-doc-title">基础用法</div>
    <Checkbox class="item" name="深圳" v-model="checkboxGroupValue1">深圳</Checkbox>
    <Checkbox class="item" name="珠海" v-model="checkboxGroupValue1">珠海</Checkbox>

    <div class="ym-doc-title">禁用状态</div>
    <CheckboxGroup v-model="checkboxGroupValue2">
      <Checkbox class="item" name="深圳" :disabled="true" v-model="checkboxGroupValue2">深圳</Checkbox>
      <Checkbox class="item" name="珠海" :disabled="true" v-model="checkboxGroupValue2">珠海</Checkbox>
    </CheckboxGroup>

    <Radio v-model="radioValue1">深圳</Radio>
    <Radio v-model="radioValue1">深圳</Radio>

    <CellGroup title="Cell搭配使用">
      <Cell title="深圳">
        <Checkbox slot="value" name="深圳" :disabled="false" v-model="checkboxGroupValue3"></Checkbox>
      </Cell>
      <Cell title="珠海">
        <Checkbox slot="value" name="珠海" :disabled="false" v-model="checkboxGroupValue3"></Checkbox>
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
      radioValue1: true
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
.ym-doc-title {
  padding: 10px 12px;
  color: #999999;
  font-size: 14px;
}

.page-checkbox {
  /deep/ .ym-icon-checkbox {
    /*border-color: #333;*/
  }
}
.item {
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 10px;
}
</style>
