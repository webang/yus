<template>
  <div class="page-checkbox">
    <div class="ym-doc-block__title">基础用法</div>
    <div class="ym-doc-block__bd">
      <Radio class="radio" v-model="radioValue1" label="深圳">深圳</Radio>
      <Radio class="radio" v-model="radioValue1" label="珠海">珠海</Radio>
      <span>{{ radioValue1 }}</span>
    </div>

    <div class="ym-doc-block__title">禁用状态</div>
    <div class="ym-doc-block__bd">
      <Radio class="radio" v-model="radioValue2" label="深圳" :disabled="true">深圳</Radio>
      <Radio class="radio" v-model="radioValue2" label="珠海" :disabled="true">深圳</Radio>
      <p style="padding-top: 10px;">{{ radioValue2 }}</p>
    </div>

    <CellGroup title="Cell搭配使用">
      <Cell label="深圳">
        <Radio slot="value" v-model="radioValue3" label="深圳"></Radio>
      </Cell>
      <Cell label="珠海">
        <Radio slot="value" v-model="radioValue3" label="珠海"></Radio>
      </Cell>
    </CellGroup>

    <CellGroup title="RadioGroup搭配使用">
      <Cell label="深圳" clickable>
        <Radio slot="value" v-model="radioValue3" label="深圳"></Radio>
      </Cell>
      <Cell label="珠海" clickable>
        <Radio slot="value" v-model="radioValue3" label="珠海"></Radio>
      </Cell>
    </CellGroup>
    <div class="ym-doc-block__bd">
      <p style="margin-top: 10px;">{{ radioValue3 }}</p>
    </div>
  </div>
</template>

<script>
import Toast from '@/components/toast'
import Cell from '@/components/cell'
import CellGroup from '@/components/cell-group'
import Button from '@/components/button'
import Field from '@/components/field'
import CheckboxGroup from '@/components/checkbox-group'
import Radio from '@/components/radio'

export default {
  components: {
    Cell,
    Field,
    Button,
    CellGroup,
    Radio
  },
  data () {
    return {
      checkboxGroupValue1: ['深圳'],
      checkboxGroupValue2: ['珠海'],
      checkboxGroupValue3: ['深圳'],
      radioValue1: '珠海',
      radioValue2: '深圳',
      radioValue3: ''
    }
  },
  watch: {
    checkboxGroupValue (val) {
      console.log(val)
    },
    radioValue1 (val) {
      console.log(val)
    }
  }
}
</script>


<style lang="scss" scoped>
/deep/ .ym-cell-group__title {
  font-size: 16px;
  padding: 20px 12px 15px;
  color: rgba(69, 90, 100, 0.6);
  background-color: #fafafa;
}

.radio {
  display: flex;
  margin-bottom: 10px;
}
</style>
