<template>
  <div class="page page-switch">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">竖向步骤条</div>
      <div class="ymu-doc-block__content">
        <div class="list">
          <Flow :active-index="0">
            <FlowItem>
              <p>用户下单</p>
            </FlowItem>
            <FlowItem>
              <p>系统接单</p>
            </FlowItem>
            <FlowItem>
              <p>商家发货</p>
            </FlowItem>
            <FlowItem>
              <p>付款成功</p>
            </FlowItem>
          </Flow>
        </div>
        <div class="list">
          <Flow :active-index="1">
            <FlowItem>
              <p>用户下单</p>
            </FlowItem>
            <FlowItem>
              <p>系统接单</p>
            </FlowItem>
            <FlowItem>
              <p>商家发货</p>
            </FlowItem>
            <FlowItem>
              <p>付款成功</p>
            </FlowItem>
          </Flow>
        </div>
      </div>
    </div>
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">竖向步骤条</div>
      <div class="ymu-doc-block__content">
        <div class="list">
          <Flow direction="vertical" :active-index="0">
            <FlowItem>
              <p>广东-南山科技园</p>
              <p>2016-07-12 12:40</p>
            </FlowItem>
            <FlowItem>
              <p>深圳-南山科技园</p>
              <p>2016-07-12 12:40</p>
            </FlowItem>
            <FlowItem>
              <p>福田-南山科技园</p>
              <p>2016-07-12 12:40</p>
            </FlowItem>
            <FlowItem>
              <p>市民中心-南山科技园</p>
              <p>2016-07-12 12:40</p>
            </FlowItem>
          </Flow>
        </div>
        <div class="list">
          <Flow direction="vertical" :active-index="2">
            <FlowItem>
              <p>广东-南山科技园</p>
              <p>2016-07-12 12:40</p>
            </FlowItem>
            <FlowItem>
              <p>深圳-南山科技园</p>
              <p>2016-07-12 12:40</p>
            </FlowItem>
            <FlowItem>
              <p>福田-南山科技园</p>
              <p>2016-07-12 12:40</p>
            </FlowItem>
            <FlowItem>
              <p>市民中心-南山科技园</p>
              <p>2016-07-12 12:40</p>
            </FlowItem>
          </Flow>
        </div>
        <div class="list">
          <Flow direction="vertical" :active-index="4">
            <FlowItem>
              <p>广东-南山科技园</p>
              <p>2016-07-12 12:40</p>
            </FlowItem>
            <FlowItem>
              <p>深圳-南山科技园</p>
              <p>2016-07-12 12:40</p>
            </FlowItem>
            <FlowItem>
              <p>福田-南山科技园</p>
              <p>2016-07-12 12:40</p>
            </FlowItem>
            <FlowItem>
              <p>市民中心-南山科技园</p>
              <p>2016-07-12 12:40</p>
            </FlowItem>
          </Flow>
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
import Flow from '@/components/flow'
import FlowItem from '@/components/flow-item'

export default {
  components: {
    wSwitch,
    Cell,
    CellGroup,
    Progress,
    Button,
    Flow,
    FlowItem
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
  padding: 10px 12px;
  margin-bottom: 10px;
  // background: #fff;
}
</style>
