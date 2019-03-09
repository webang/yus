<template>
  <div class="demo-flow">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">横向步骤条activeIndex={{ activeIndex1 }}</div>
      <div class="ymu-doc-block__bd">
        <div class="list">
          <ymu-flow :active-index="activeIndex1">
            <ymu-flow-item>
              <p>用户下单</p>
              <p>2018-12-25</p>
            </ymu-flow-item>
            <ymu-flow-item>
              <p>系统接单</p>
              <p>2018-12-26</p>
            </ymu-flow-item>
            <ymu-flow-item>
              <p>商家发货</p>
              <p>2018-12-27</p>
            </ymu-flow-item>
            <ymu-flow-item>
              <p>付款成功</p>
              <p>2018-12-28</p>
            </ymu-flow-item>
          </ymu-flow>
        </div>
      </div>
      <button @click="handleNext('activeIndex1', 4)">下一步</button>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">竖向步骤条activeIndex={{ activeIndex2 }}</div>
      <div class="list">
        <ymu-flow direction="vertical" :active-index="activeIndex2">
          <ymu-flow-item>
            <p>广东-南山科技园</p>
            <p>2016-07-12 12:40</p>
          </ymu-flow-item>
          <ymu-flow-item>
            <p>深圳-南山科技园</p>
            <p>2016-07-12 12:40</p>
          </ymu-flow-item>
          <ymu-flow-item>
            <p>福田-南山科技园</p>
            <p>2016-07-12 12:40</p>
          </ymu-flow-item>
          <ymu-flow-item>
            <p>市民中心-南山科技园</p>
            <p>2016-07-12 12:40</p>
          </ymu-flow-item>
        </ymu-flow>
      </div>
      <button @click="handleNext('activeIndex2', 4)">下一步</button>
    </div>


    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">自定义ICON</div>
      <div class="list">
        <ymu-flow
          :active-index="activeIndex3"
          :finishIcon="'https://avatars0.githubusercontent.com/u/35128?s=64&v=4'"
          :processIcon="'https://avatars3.githubusercontent.com/u/34447750?s=40&v=4'"
        >
          <ymu-flow-item>
            <p>广东-南山科技园</p>
            <p>2016-07-12 12:40</p>
          </ymu-flow-item>
          <ymu-flow-item>
            <p>深圳-南山科技园</p>
            <p>2016-07-12 12:40</p>
          </ymu-flow-item>
          <ymu-flow-item>
            <p>福田-南山科技园</p>
            <p>2016-07-12 12:40</p>
          </ymu-flow-item>
          <ymu-flow-item>
            <p>市民中心-南山科技园</p>
            <p>2016-07-12 12:40</p>
          </ymu-flow-item>
        </ymu-flow>
      </div>
      <div class="list">
        <ymu-flow
          direction="vertical"
          :active-index="activeIndex3"
          :finishIcon="'https://avatars0.githubusercontent.com/u/35128?s=64&v=4'"
          :processIcon="'https://avatars3.githubusercontent.com/u/34447750?s=40&v=4'"
        >
          <ymu-flow-item>
            <p>广东-南山科技园</p>
            <p>2016-07-12 12:40</p>
          </ymu-flow-item>
          <ymu-flow-item>
            <p>深圳-南山科技园</p>
            <p>2016-07-12 12:40</p>
          </ymu-flow-item>
          <ymu-flow-item>
            <p>福田-南山科技园</p>
            <p>2016-07-12 12:40</p>
          </ymu-flow-item>
          <ymu-flow-item>
            <p>市民中心-南山科技园</p>
            <p>2016-07-12 12:40</p>
          </ymu-flow-item>
        </ymu-flow>
      </div>
      <button @click="handleNext('activeIndex3', 4)">下一步</button>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
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
}
</style>
