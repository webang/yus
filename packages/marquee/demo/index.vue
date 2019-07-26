<template>
  <div class="page-marquee">
    <div class="yus-demo-block">

      <div class="yus-demo-block__hd">基础用法</div>
      <div class="yus-demo-block__bd">
        <div class="item">
          <yus-marquee>
            <yus-marquee-item v-for="(item, index) in list2" :key="index">
              <p>{{ item }}</p>
            </yus-marquee-item>
          </yus-marquee>
        </div>
      </div>

      <div class="yus-demo-block__hd">direction=down</div>
      <div class="yus-demo-block__bd">
        <div class="item">
          <yus-marquee direction="down">
            <yus-marquee-item v-for="(item, index) in list2" :key="index">
              <p>{{ index}}-{{ item }}</p>
            </yus-marquee-item>
          </yus-marquee>
        </div>
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
      list: ['构建用户界面体验Weex'],
      list2: ['构建用户界面体验Weex', '构建用户界面体验Flutter'],
      list3: ['构建用户界面体验Weex', '构建用户界面体验Flutter', '构建用户界面体验RN', '构建用户界面体验kotlin']
    };
  }
};
</script>

<style scoped lang="scss">
.item {
  height: 30px;
  padding: 0 10px;
  color: #ed6a0c;
  font-size: 14px;
  line-height: 30px;
  background-color: #fffbe8;
}
</style>
