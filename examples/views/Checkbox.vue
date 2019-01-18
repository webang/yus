<template>
  <div class="page-checkbox">

    <div class="checkbox-demo-01">
      <div class="ymu-doc-block__hd">基础用法</div>
      <div class="ymu-doc-block__bd">
        <Checkbox label="深圳" v-model="checkboxGroupValue1"></Checkbox>
      </div>
    </div>

    <div class="checkbox-demo-02">
      <div class="ymu-doc-block__hd">文字在左边</div>
      <div class="ymu-doc-block__bd">
        <Checkbox label="深圳" :label-left="true" v-model="checkboxGroupValue1"></Checkbox>
      </div>
    </div>

    <div class="checkbox-demo-03">
      <div class="ymu-doc-block__hd">禁用状态</div>
      <div class="ymu-doc-block__bd">
        <Checkbox label="深圳" :disabled="true" v-model="checkboxGroupValue4"></Checkbox>
        <Checkbox label="深圳" :disabled="true" v-model="checkboxGroupValue5"></Checkbox>
      </div>
    </div>

    <div class="checkbox-demo-04">
      <div class="ymu-doc-block__hd">复选框组(最多选2个，最少选1个)</div>
      <div class="ymu-doc-block__bd">
        <CheckboxGroup v-model="groupValue1" :min="1" :max="2">
          <Checkbox label="深圳"></Checkbox>
          <Checkbox label="珠海"></Checkbox>
        </CheckboxGroup>
        <p>{{ groupValue1 }}</p>
      </div>
    </div>

    <div class="checkbox-demo-05">
      <div class="ymu-doc-block__hd">使用useCell</div>
      <div class="ymu-doc-block__bd">
        <CheckboxGroup v-model="groupValue5">
          <Checkbox :use-cell="true" :label-left="true" label="香蕉" clickable></Checkbox>
          <Checkbox :use-cell="true" :label-left="true" label="苹果" clickable></Checkbox>
        </CheckboxGroup>
      </div>
    </div>

    <div class="checkbox-demo-06" style="margin-bottom: 10px">
      <div class="ymu-doc-block__hd">更改Icon</div>
      <div class="ymu-doc-block__bd">
        <CheckboxGroup v-model="groupValue5">
          <Checkbox :use-cell="true" :label-left="true" label="香蕉" clickable>
            <template slot="icon" slot-scope="{checked}">
              <i class="ymuicon ios-checkmark" v-if="checked" style="font-size: 32px"></i>
            </template>
          </Checkbox>
          <Checkbox :use-cell="true" :label-left="true" label="苹果" clickable>
            <template slot="icon" slot-scope="{checked}">
              <i class="ymuicon ios-checkmark" v-if="checked" style="font-size: 32px"></i>
            </template>
          </Checkbox>
        </CheckboxGroup>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast, Cell, CellGroup, Button, Field, Checkbox, CheckboxGroup } from 'ymu'
export default {
  components: {
    Cell,
    Field,
    Button,
    Checkbox,
    CellGroup,
    CheckboxGroup
  },
  data () {
    return {
      checkboxGroupValue1: true,
      checkboxGroupValue2: false,
      checkboxGroupValue3: true,
      checkboxGroupValue4: false,
      checkboxGroupValue5: true,
      groupValue1: ['深圳'],
      groupValue2: ['香蕉'],
      groupValue5: ['香蕉']
    }
  }
}
</script>


<style lang="scss" scoped>

.page-checkbox {
  /deep/ .ymu-checkbox {
    display: flex;
    margin-bottom: 10px;
  }
  /deep/ .ymu-cell-group__bd {
    .ymu-checkbox {
      display: flex;
      flex: 1;
      margin-bottom: 0;
      justify-content: space-between;
    }
  }
  /deep/ .ymu-checkbox--cell {
    margin-bottom: 0;
  }
  .checkbox-demo-02 /deep/ .ymu-checkbox {
    display: inline-flex;
    margin-bottom: 0;
  }
}
</style>
