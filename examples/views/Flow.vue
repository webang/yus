<template>
  <div class="page page-flow">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">横向步骤条activeIndex={{ activeIndex1 }}</div>
      <div class="ymu-doc-block__bd">
        <div class="list">
          <Flow :active-index="activeIndex1">
            <FlowItem>
              <p>用户下单</p>
              <p>2018-12-25</p>
            </FlowItem>
            <FlowItem>
              <p>系统接单</p>
              <p>2018-12-26</p>
            </FlowItem>
            <FlowItem>
              <p>商家发货</p>
              <p>2018-12-27</p>
            </FlowItem>
            <FlowItem>
              <p>付款成功</p>
              <p>2018-12-28</p>
            </FlowItem>
          </Flow>
        </div>
      </div>
      <button @click="handleNext('activeIndex1', 4)">下一步</button>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">竖向步骤条activeIndex={{ activeIndex2 }}</div>
      <div class="list">
        <Flow direction="vertical" :active-index="activeIndex2">
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
      <button @click="handleNext('activeIndex2', 4)">下一步</button>
    </div>


    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">自定义ICON</div>
      <div class="list">
        <Flow
          :active-index="activeIndex3"
          :finishIcon="'https://avatars0.githubusercontent.com/u/35128?s=64&v=4'"
          :processIcon="'https://avatars3.githubusercontent.com/u/34447750?s=40&v=4'"
        >
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
        <Flow
          direction="vertical"
          :active-index="activeIndex3"
          :finishIcon="'https://avatars0.githubusercontent.com/u/35128?s=64&v=4'"
          :processIcon="'https://avatars3.githubusercontent.com/u/34447750?s=40&v=4'"
        >
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
      <button @click="handleNext('activeIndex3', 4)">下一步</button>
    </div>
  </div>
</template>

<script type="text/javascript">
import { FlowItem, Flow } from 'ymu'
export default {
  components: {
    Flow,
    FlowItem
  },
  data () {
    return {
      activeIndex1: 1,
      activeIndex2: 1,
      activeIndex3: 1
    }
  },
  methods: {
    handleNext (key, length) {
      let value = this[key] + 1
      if (value > length) value = 0
      this[key] = value
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
  padding: 10px 0;
  margin-bottom: 10px;
  // background: #fff;
}
</style>
