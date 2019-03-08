<template>
  <div class="page-ymu-field">
    <ymu-cell-group title="基础用法">
      <ymu-field label="登录账户" placeholder="输入账户" v-model="demo1.v1"/>
      <ymu-field label="登录密码" type="password" placeholder="输入密码" v-model="demo1.v2"/>
    </ymu-cell-group>
    <div class="value">{{ demo1 }}</div>

    <ymu-cell-group title="自定义类型">
      <ymu-field label="text" placeholder="输入账户" type="text" v-model="demo2.v1"/>
      <ymu-field label="number" placeholder="输入账户" type="number" v-model="demo2.v2"/>
      <ymu-field label="password" placeholder="请输入密码" type="password" v-model="demo2.v3"/>
      <ymu-field label="textarea" placeholder="个人简介" type="textarea" v-model="demo2.v4"/>
    </ymu-cell-group>
    <div class="value">{{ demo2 }}</div>

    <ymu-cell-group title="显示清除按钮">
      <ymu-field label="默认显示" placeholder="输入账户" v-model="demo3.v1"/>
      <ymu-field label="clearable=false" placeholder="输入账户" :clearable="false" v-model="demo3.v2"/>
    </ymu-cell-group>
    <div class="value">{{ demo3 }}</div>

    <ymu-cell-group title="不使用label">
      <ymu-field placeholder="不使用label" v-model="demo4.v1"></ymu-field>
    </ymu-cell-group>
    <div class="value">{{ demo4 }}</div>

    <ymu-cell-group title="禁用输入框">
      <ymu-field placeholder="输入账户" v-model="demo5.v1" disabled></ymu-field>
    </ymu-cell-group>
    <div class="value">{{ demo5 }}</div>
    
    <ymu-cell-group title="长度限制">
      <ymu-field
        label="max=10"
        placeholder="请输入手机号码"
        :max="10"
        v-model="demo6.v1"
        type="number"
      />
    </ymu-cell-group>

    <ymu-cell-group title="autosize">
      <ymu-field
        label="autosize=true"
        :autosize="true"
        placeholder="个人简介"
        v-model="demo7.v1"
        type="textarea"
      />
      <ymu-field
        label="autosize=false"
        :autosize="false"
        placeholder="个人简介"
        v-model="demo7.v2"
        type="textarea"
      />
    </ymu-cell-group>
  </div>
</template>

<script>
export default {
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
