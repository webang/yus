<template>
  <div class="page-marquee">
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">基础用法</div>
      <div class="yus-demo-block__bd">
        <yus-marquee class="item">
          <yus-marquee-item v-for="(item, index) in list2" :key="index">
            <p>{{ item }}</p>
          </yus-marquee-item>
        </yus-marquee>
      </div>

      <div class="yus-demo-block__hd">设置左侧图标</div>
      <div class="yus-demo-block__bd">
        <yus-marquee class="item" showHeader>
          <yus-marquee-item v-for="(item, index) in list2" :key="index">
            <p>{{ item }}</p>
          </yus-marquee-item>
        </yus-marquee>
      </div>

      <div class="yus-demo-block__hd">设置方向向下</div>
      <div class="yus-demo-block__bd">
        <yus-marquee class="item" direction="down">
          <yus-marquee-item v-for="(item, index) in list2" :key="index">
            <p>{{ item }}</p>
          </yus-marquee-item>
        </yus-marquee>
      </div>

      <div class="yus-demo-block__hd">itemHeight=60, show-header=false</div>
      <div class="yus-demo-block__bd">
        <div class="item" style="height: 60px">
          <yus-marquee direction="down" :show-header="false">
            <yus-marquee-item v-for="(item, index) in list3" :key="index">
              <p>{{ item }}</p>
              <p>{{ item }}</p>
            </yus-marquee-item>
          </yus-marquee>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list2: [
        '降息基点不足周期未起 黄金价格区间大跌',
        '故此我们重点关注周五的大非农数据的实际影响黄金价格区间大跌'
      ],
      list3: [
        '构建用户界面体验Weex',
        '构建用户界面体验Flutter',
        '构建用户界面体验RN',
        '构建用户界面体验kotlin'
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.item {
  box-sizing: border-box;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #ed6a0c;
  font-size: 14px;
  background-color: #fffbe8;
}

p {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
