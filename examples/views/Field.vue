<template>
  <div class="page-field">
    <CellGroup title="基础用法">
      <Field label="登录账户" placeholder="输入账户" v-model="demo1.v1"></Field>
      <Field label="登录密码" type="password" placeholder="输入密码" v-model="demo1.v2"></Field>
    </CellGroup>
    <div class="value">{{ demo1 }}</div>

    <CellGroup title="自定义类型">
      <Field label="text" placeholder="输入账户" type="text" v-model="demo2.v1"></Field>
      <Field label="number" placeholder="输入账户" type="number" v-model="demo2.v2"></Field>
      <Field label="password" placeholder="请输入密码" type="password" v-model="demo2.v3"></Field>
      <Field label="textarea" placeholder="个人简介" type="textarea" v-model="demo2.v4"></Field>
    </CellGroup>
    <div class="value">{{ demo2 }}</div>

    <CellGroup title="显示清除按钮">
      <Field label="默认显示" placeholder="输入账户" v-model="demo3.v1"></Field>
      <Field label="clearable=false" placeholder="输入账户" :clearable="false" v-model="demo3.v2"></Field>
    </CellGroup>
    <div class="value">{{ demo3 }}</div>

    <CellGroup title="不使用label">
      <Field placeholder="不使用label" v-model="demo4.v1"></Field>
    </CellGroup>
    <div class="value">{{ demo4 }}</div>

    <CellGroup title="禁用输入框">
      <Field placeholder="输入账户" v-model="demo5.v1" disabled></Field>
    </CellGroup>
    <div class="value">{{ demo5 }}</div>
    
    <CellGroup title="长度限制">
      <Field
        label="max=10"
        placeholder="请输入手机号码"
        :max="10"
        v-model="demo6.v1"
        type="number"
      />
    </CellGroup>

    <CellGroup title="autosize">
      <Field
        label="autosize=true"
        :autosize="true"
        placeholder="个人简介"
        v-model="demo7.v1"
        type="textarea"
      />
      <Field
        label="autosize=false"
        :autosize="false"
        placeholder="个人简介"
        v-model="demo7.v2"
        type="textarea"
      />
    </CellGroup>
  </div>
</template>

<script>
import { Alert, Cell, CellGroup, Confirm, Field, Button } from 'ymu'

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
        v1: '',
        v2: ''
      },
      demo2: {
        v1: '',
        v2: '',
        v3: '',
        v4: ''
      },
      demo3: {
        v1: '',
        v2: ''
      },
      demo4: {
        v1: ''
      },
      demo5: {
        v2: ''
      },
      demo6: {
        v1: ''
      },
      demo7: {
        v1: '',
        v2: ''
      },
      rule: [{
        rule: /\^1[0-9]{10}/,
        error: '手机号码不正确'
      }]
    }
  },
  watch: {
    'demo6.v1' (val) {
      console.log(val)
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
.value {
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  color: #ccc;
  background-color: #fff;
}
</style>
