<template>
  <div class="page-radio">
    <div class="ym-doc-block__title">基础用法</div>
    <div class="ym-doc-block__bd">
      <Radio v-model="radioValue1" label="深圳">深圳</Radio>
      <Radio v-model="radioValue1" label="珠海">
        <span slot-scope="labelProps">
          <span>珠海</span>
        </span>
      </Radio>
      <span>{{ radioValue1 }}</span>
    </div>

    <div class="ym-doc-block__title">禁用状态</div>
    <div class="ym-doc-block__bd">
      <Radio v-model="radioValue2" label="深圳" :disabled="true">深圳</Radio>
      <Radio v-model="radioValue2" label="珠海" :disabled="true">深圳</Radio>
      <p>{{ radioValue2 }}</p>
    </div>

    <CellGroup title="RadioGroup搭配使用">
      <RadioGroup v-model="radioValue3">
        <Cell label="深圳" clickable @click="radioValue3='深圳'">
          <Radio slot="value" label="深圳"></Radio>
        </Cell>
        <Cell label="珠海" clickable @click="radioValue3='珠海'">
          <Radio slot="value" label="珠海"></Radio>
        </Cell>
        <Cell label="广州" clickable>
          <Radio slot="value" label="广州" :disabled="true"></Radio>
        </Cell>
      </RadioGroup>
    </CellGroup>
    <div class="ym-doc-block__bd">
      <p style="margin-top: 10px">{{ radioValue3 }}</p>
    </div>

    <CellGroup title="自定义选中图标">
      <RadioGroup v-model="radioValue4">
        <Cell label="香港" clickable @click="radioValue4='香港'">
          <Radio slot="value" label="香港">
            <span slot-scope="labelProps" slot="icon">
              <i class="ym-icon" :class="{'icon-checkmark': labelProps.checked}"></i>
            </span>
          </Radio>
        </Cell>
        <Cell label="澳门" clickable @click="radioValue4='澳门'">
          <Radio slot="value" label="澳门" checked-color="red">
            <span slot-scope="labelProps" slot="icon">
              <i class="ym-icon" :class="{'icon-checkmark': labelProps.checked}"></i>
            </span>
          </Radio>
        </Cell>
      </RadioGroup>
    </CellGroup>
    <div class="ym-doc-block__bd">
      <p style="margin-bottom: 10px; margin-top: 10px">{{ radioValue4 }}</p>
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
import RadioGroup from '@/components/radio-group'

export default {
  components: {
    Cell,
    Field,
    Button,
    CellGroup,
    Radio,
    RadioGroup
  },
  data () {
    return {
      checkboxGroupValue1: ['深圳'],
      checkboxGroupValue2: ['珠海'],
      checkboxGroupValue3: ['深圳'],
      radioValue1: '珠海',
      radioValue2: '深圳',
      radioValue3: '',
      radioValue4: ''
    }
  },
  watch: {
    checkboxGroupValue (val) {
      console.log(val)
    },
    radioValue1 (val) {
      console.log(val)
    },
    radioValue3 (val) {
      console.log(val)
    }
  },
  created () {
  }
}
</script>


<style lang="scss" scoped>

.page-radio {
  /deep/ .ym-cell-group__title {
    font-size: 16px;
    padding: 20px 12px 15px;
    color: rgba(69, 90, 100, 0.6);
    background-color: #fafafa;
  }
  /deep/ .ym-doc-block__bd .ym-radio {
    display: flex;
    margin-bottom: 10px;
  }
}
</style>
