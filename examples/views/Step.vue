<template>
  <div class="page page-switch">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">基础用法</div>
      <div class="ymu-doc-block__content">
        <div class="list">
          <p>activeIndex 0</p>
          <Step>
            <StepItem>买家下单</StepItem>
            <StepItem>商家接单</StepItem>
            <StepItem>买家提货</StepItem>
            <StepItem>交易完成</StepItem>
          </Step>
        </div>
        <div class="list">
          <p>activeIndex 1</p>
          <Step :active-index="1">
            <StepItem>买家下单</StepItem>
            <StepItem>商家接单</StepItem>
            <StepItem>买家提货</StepItem>
            <StepItem>交易完成</StepItem>
          </Step>
        </div>
      </div>
    </div>
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">竖向步骤条</div>
      <div class="ymu-doc-block__content">
        <div class="list">
          <Step direction="vertical" :active-index="2">
            <StepItem>
              <p>广东-南山科技园</p>
              <p>2016-07-12 12:40</p>
            </StepItem>
            <StepItem>
              <p>深圳-南山科技园</p>
              <p>2016-07-12 12:40</p>
            </StepItem>
            <StepItem>
              <p>福田-南山科技园</p>
              <p>2016-07-12 12:40</p>
            </StepItem>
            <StepItem>
              <p>市民中心-南山科技园</p>
              <p>2016-07-12 12:40</p>
            </StepItem>
          </Step>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import wSwitch from '@/components/switch'
import Cell from '@/components/cell'
import CellGroup from '@/components/cell-group'
import Progress from '@/components/progress'
import Button from '@/components/button'
import Step from '@/components/step'
import StepItem from '@/components/step-item'
export default {
  components: {
    wSwitch,
    Cell,
    CellGroup,
    Progress,
    Button,
    Step,
    StepItem
  },
  data () {
    return {
      percentage: 10
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  margin-right: 5px;
}
.right {
  margin-left: 5px;
}
.list {
  padding: 0 12px;
  margin-bottom: 10px;
}
</style>
