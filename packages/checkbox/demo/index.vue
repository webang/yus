<template>
  <div class="yus-demo yus-demo-checkbox">
    <div class="yus-demo-block__hd">基础用法</div>
    <div class="yus-demo-block__bd">
      <yus-checkbox label="深圳" v-model="v1" />
    </div>

    <div class="yus-demo-block__hd">文字在左边</div>
    <div class="yus-demo-block__bd">
      <yus-checkbox label="深圳" :label-left="true" v-model="v2" />
    </div>

    <div class="yus-demo-block__hd">自定义内容</div>
    <div class="yus-demo-block__bd">
      <yus-checkbox label="深圳" :label-left="true" v-model="v3">
        <span>同意用户协议</span>
      </yus-checkbox>
    </div>

    <div class="yus-demo-block__hd">禁用状态</div>
    <div class="yus-demo-block__bd">
      <yus-checkbox label="深圳" :disabled="true" v-model="checkboxGroupValue4" />
      <yus-checkbox label="深圳" :disabled="true" v-model="checkboxGroupValue5" />
    </div>

    <div class="yus-demo-block__hd">复选框组(最多选2个，最少选1个)</div>
    <div class="yus-demo-block__bd">
      <yus-checkbox-group v-model="groupValue1" :min="1" :max="2">
        <yus-checkbox label="深圳" />
        <yus-checkbox label="珠海" />
      </yus-checkbox-group>
      <p>{{ groupValue1 }}</p>
    </div>

    <div class="yus-demo-block__hd">使用useCell</div>
    <div class="yus-demo-block__bd">
      <yus-checkbox-group v-model="groupValue5">
        <yus-checkbox :use-cell="true" :label-left="true" label="香蕉" clickable />
        <yus-checkbox :use-cell="true" :label-left="true" label="苹果" clickable />
      </yus-checkbox-group>
    </div>

    <div class="checkbox-demo-06" style="margin-bottom: 10px">
      <div class="yus-demo-block__hd">更改Icon</div>
      <div class="yus-demo-block__bd">
        <yus-checkbox-group v-model="groupValue5">
          <yus-checkbox :use-cell="true" :label-left="true" label="香蕉" clickable>
            <template slot="icon" slot-scope="{checked}">
              <i class="yusicon ios-checkmark" v-if="checked" style="font-size: 32px"></i>
            </template>
          </yus-checkbox>
          <yus-checkbox :use-cell="true" :label-left="true" label="苹果" clickable>
            <template slot="icon" slot-scope="{checked}">
              <i class="yusicon ios-checkmark" v-if="checked" style="font-size: 32px"></i>
            </template>
          </yus-checkbox>
        </yus-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      v1: false,
      v2: false,
      v3: false,
      checkboxGroupValue1: true,
      checkboxGroupValue2: false,
      checkboxGroupValue3: true,
      checkboxGroupValue4: false,
      checkboxGroupValue5: true,
      groupValue1: ['深圳'],
      groupValue2: ['香蕉'],
      groupValue5: ['香蕉']
    };
  }
};
</script>


<style lang="scss" scoped>
.demo-checkbox {
  /deep/ .yus-checkbox {
    display: flex;
    margin-bottom: 10px;
  }
  /deep/ .yus-cell-group__bd {
    .yus-checkbox {
      display: flex;
      flex: 1;
      margin-bottom: 0;
      justify-content: space-between;
    }
  }
  /deep/ .yus-checkbox--cell {
    margin-bottom: 0;
  }
  .checkbox-demo-02 /deep/ .yus-checkbox {
    display: inline-flex;
    margin-bottom: 0;
  }
}
</style>
