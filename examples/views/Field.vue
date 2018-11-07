<template>
  <div class="page-field">
    <CellGroup title="基础用法">
      <Field label="账户" placeholder="请输入账户" v-model="demo1.v1"></Field>
      <Field placeholder="请输入密码" v-model="demo1.v2"></Field>
    </CellGroup>
    <CellGroup title="设置type">
      <Field label="text" placeholder="请输入账户" type="text" v-model="demo2.v1"></Field>
      <Field label="number" placeholder="请输入账户" type="number" v-model="demo2.v2"></Field>
      <Field label="password" placeholder="请输入密码" type="password" v-model="demo2.v3"></Field>
    </CellGroup>
    <CellGroup title="设置clear">
      <Field label="text" placeholder="请输入账户" type="text" clear></Field>
      <Field label="number" placeholder="请输入账户" type="number" clear></Field>
      <Field label="password" placeholder="请输入密码" type="password" clear></Field>
    </CellGroup>
  </div>
</template>

<script>
import Toast from '@/components/toast'
import Cell from '@/components/cell'
import CellGroup from '@/components/cell-group'
import Button from '@/components/button'
import Field from '@/components/field'

export default {
  components: {
    Cell,
    Field,
    Button,
    CellGroup
  },
  data () {
    return {
      demo1: {
        v1: '测试小雄',
        v2: '111'
      },
      demo2: {
        v1: '',
        v2: '',
        v3: ''
      }
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
.ymu-doc-block {
  /*background-color: #fff;*/
}
</style>
