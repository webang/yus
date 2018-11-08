<template>
  <div class="page-field">
    <CellGroup title="基础用法">
      <Field label="账户" placeholder="请输入账户" v-model="demo1.v1"></Field>
    </CellGroup>
    <CellGroup title="自定义类型">
      <Field label="number" placeholder="请输入账户" type="number" v-model="demo2.v2"></Field>
      <Field label="password" placeholder="请输入密码" type="password" v-model="demo2.v3"></Field>
    </CellGroup>
    <CellGroup title="显示清除按钮">
      <Field label="true" placeholder="请输入账户" type="number" clearable v-model="demo2.v2"></Field>
    </CellGroup>
    <CellGroup title="禁用输入框">
      <Field label="true" placeholder="请输入账户" type="text" disabled></Field>
    </CellGroup>
    <CellGroup title="长度限制">
      <Field
        label="手机号码"
        placeholder="请输入手机号码"
        :min="5"
        :max="10"
        v-model="demo2.v3"
        type="number"></Field>
    </CellGroup>
    <CellGroup title="设置错误提示">
      <Field
        label="手机号码"
        errorMessage="手机号码格式不正确"
        placeholder="请输入手机号码"
        type="number"></Field>
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


<style lang="scss" scoped></style>
