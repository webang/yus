<template>
  <div class="yus-demo page-yus-field">
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">基本用法</div>
      <div class="yus-demo-block__bd">
        <yus-cell-group title="基础用法">
          <yus-field label="登录账户" placeholder="输入账户" v-model="demo1.v1" />
          <yus-field label="登录密码" type="password" placeholder="输入密码" v-model="demo1.v2" />
        </yus-cell-group>
      </div>

      <div class="yus-demo-block__hd">显示清除按钮</div>
      <div class="yus-demo-block__bd">
        <yus-cell-group>
          <yus-field label="默认显示" placeholder="输入账户" v-model="demo3.v1" />
          <yus-field
            label="clearable=false"
            placeholder="输入账户"
            :clearable="false"
            v-model="demo3.v2"
          />
        </yus-cell-group>
      </div>

      <div class="yus-demo-block__hd">不使用label</div>
      <div class="yus-demo-block__bd">
        <yus-cell-group>
          <yus-field placeholder="输入账户" v-model="demo4.v1"></yus-field>
        </yus-cell-group>
      </div>

      <div class="yus-demo-block__hd">禁用输入框</div>
      <div class="yus-demo-block__bd">
        <yus-cell-group title="禁用输入框">
          <yus-field placeholder="输入账户" v-model="demo5.v1" disabled></yus-field>
        </yus-cell-group>
      </div>

      <div class="yus-demo-block__hd">长度限制</div>
      <div class="yus-demo-block__bd">
        <yus-cell-group>
          <yus-field
            label="max=10"
            placeholder="请输入手机号码"
            :max="10"
            v-model="demo6.v1"
            type="number"
          />
        </yus-cell-group>
      </div>

      <div class="yus-demo-block__hd">autosize</div>
      <div class="yus-demo-block__bd">
        <yus-cell-group>
          <yus-field
            label="autosize=true"
            :autosize="true"
            placeholder="个人简介"
            v-model="demo7.v1"
            type="textarea"
          />
          <yus-field
            label="autosize=false"
            :autosize="false"
            placeholder="个人简介"
            v-model="demo7.v2"
            type="textarea"
          />
        </yus-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
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
        v1: ''
      },
      demo6: {
        v1: ''
      },
      demo7: {
        v1: '',
        v2: ''
      },
      rule: [
        {
          rule: /\^1[0-9]{10}/,
          error: '手机号码不正确'
        }
      ]
    };
  },
  watch: {
    'demo6.v1'(val) {
      console.log(val);
    }
  }
};
</script>


<style lang="scss" scoped>
.yus-demo {
  padding-bottom: 15px;
}
</style>
