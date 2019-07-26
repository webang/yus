<template>
  <div class="yus-demo yus-demo-flow" style="background: #fff">
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">横向步骤条activeIndex={{ activeIndex1 }}</div>
      <div class="yus-demo-block__bd">
        <yus-flow :active-index="activeIndex1">
          <yus-flow-item v-for="(item, index) in list" :key="index">
            <p>{{ item.title }}</p>
            <p>{{ item.content }}</p>
          </yus-flow-item>
        </yus-flow>
        <yus-button
          style="margin-top: 10px"
          size="mini"
          @click="handleNext('activeIndex1', 4)"
        >下一步</yus-button>
      </div>
    </div>

    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">竖向步骤条activeIndex={{ activeIndex2 }}</div>
      <div class="yus-demo-block__bd">
        <yus-flow direction="vertical" :active-index="activeIndex2">
          <yus-flow-item v-for="(item, index) in list" :key="index">
            <p>{{ item.title }}</p>
            <p>{{ item.content }}</p>
          </yus-flow-item>
        </yus-flow>
        <yus-button
          style="margin-top: 10px"
          size="mini"
          @click="handleNext('activeIndex2', 4)"
        >下一步</yus-button>
      </div>
    </div>

    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">自定义ICON</div>
      <div class="yus-demo-block__bd">
        <yus-flow
          :active-index="activeIndex3"
          :finishIcon="'https://avatars0.githubusercontent.com/u/35128?s=64&v=4'"
          :processIcon="'https://avatars3.githubusercontent.com/u/34447750?s=40&v=4'"
        >
          <yus-flow-item v-for="(item, index) in list" :key="index">
            <p>{{ item.title }}</p>
            <p>{{ item.content }}</p>
          </yus-flow-item>
        </yus-flow>
        <yus-button
          style="margin-top: 10px"
          size="mini"
          @click="handleNext('activeIndex3', 4)"
        >下一步</yus-button>
      </div>
      <div class="list"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex1: 1,
      activeIndex2: 1,
      activeIndex3: 1,
      list: [
        {
          title: '用户下单',
          content: '2018-12-21'
        },
        {
          title: '系统接单',
          content: '2018-12-22'
        },
        {
          title: '商家发货',
          content: '2018-12-23'
        },
        {
          title: '客户签收',
          content: '2018-12-24'
        }
      ]
    };
  },
  methods: {
    handleNext(key, length) {
      let value = this[key] + 1;
      if (value > length) value = 0;
      this[key] = value;
    }
  }
};
</script>
