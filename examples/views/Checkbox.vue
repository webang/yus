<template>
  <div class="page-checkbox">
    <div class="ym-doc-title">基础用法</div>
    <Checkbox class="item" v-model="demo1.v1" :label="demo1.k1" name="深圳">深圳</Checkbox>
    <Checkbox class="item" v-model="demo1.v2" :label="demo1.k1" name="珠海">珠海</Checkbox>

    {{ demo1.k1 }}

    <div class="ym-doc-title">禁用状态</div>
    <Checkbox class="item" v-model="demo2.v1" :disabled="demo2.disabled">深圳</Checkbox>
    <Checkbox class="item" v-model="demo2.v2" :disabled="demo2.disabled">珠海</Checkbox>

    <div id='example-3'>
      <input type="checkbox" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>

  </div>
</template>

<script>
import Toast from '@/components/toast'
import Cell from '@/components/cell'
import CellGroup from '@/components/cell-group'
import Button from '@/components/button'
import Field from '@/components/field'
import Checkbox from '@/components/Checkbox'

export default {
  components: {
    Cell,
    Field,
    Button,
    Checkbox,
    CellGroup
  },
  data () {
    return {
      checkedNames: ['Jack'],
      demo1: {
        v1: false,
        v2: true,
        k1: ['深圳']
      },
      demo2: {
        v1: false,
        v2: true,
        disabled: true
      },
      rule: [{
        rule: /\^1[0-9]{10}/,
        error: '手机号码不正确'
      }]
    }
  },
  methods: {
    show () {
      Toast({
        message: '请勿重复提交订单'
      })
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
