<template>
  <div class="demo-radio">
    <div class="ymu-doc-block__hd">默认用户</div>
    <div class="ymu-doc-block__bd">
      <ymu-radio v-model="radioValue1" label="深圳">深圳</ymu-radio>
      <ymu-radio v-model="radioValue1" label="珠海">珠海</ymu-radio>
      <div class="value">{{ radioValue1 }}</div>
    </div>

    <div class="ymu-doc-block__title">禁用状态</div>
    <div class="ymu-doc-block__bd">
      <ymu-radio v-model="radioValue2" label="深圳" :disabled="true">深圳</ymu-radio>
      <ymu-radio v-model="radioValue2" label="珠海" :disabled="true">深圳</ymu-radio>
      <div class="value">{{ radioValue2 }}</div>
    </div>

    <ymu-cell-group title="RadioGroup搭配使用">
      <ymu-radio-group v-model="radioValue3">
        <ymu-cell label="深圳" clickable @click="radioValue3='深圳'">
          <ymu-radio slot="value" label="深圳"></ymu-radio>
        </ymu-cell>
        <ymu-cell label="珠海" clickable @click="radioValue3='珠海'">
          <ymu-radio slot="value" label="珠海"></ymu-radio>
        </ymu-cell>
        <ymu-cell label="广州" clickable>
          <ymu-radio slot="value" label="广州" :disabled="true"></ymu-radio>
        </ymu-cell>
      </ymu-radio-group>
    </ymu-cell-group>
    <div class="ymu-doc-block__bd">
      <p style="margin-top: 10px">{{ radioValue3 }}</p>
    </div>

    <ymu-cell-group title="自定义选中图标" class="demo-icon">
      <ymu-radio-group v-model="radioValue4">
        <ymu-cell label="香港" clickable @click="radioValue4='香港'">
          <ymu-radio slot="value" label="香港">
            <span slot-scope="labelProps" slot="icon">
              <ymu-icon name="ios-checkmark" v-if="labelProps.checked"/>
            </span>
          </ymu-radio>
        </ymu-cell>
        <ymu-cell label="澳门" clickable @click="radioValue4='澳门'">
          <ymu-radio slot="value" label="澳门" checked-color="red">
            <span slot-scope="labelProps" slot="icon">
              <ymu-icon name="ios-checkmark" v-if="labelProps.checked"/>
            </span>
          </ymu-radio>
        </ymu-cell>
      </ymu-radio-group>
    </ymu-cell-group>
    <div class="ymu-doc-block__bd">
      <p class="value">{{ radioValue4 }}</p>
    </div>
  </div>
</template>

<script>
export default {
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
.demo-radio {
  overflow: hidden;
  /deep/ .ymu-cell-group__title {
    font-size: 14px;
  }
  /deep/ .ymu-doc-block__bd .ymu-radio {
    display: flex;
    margin-bottom: 10px;
  }
}

.value {
  line-height: 40px;
}
</style>
