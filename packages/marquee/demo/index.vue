<template>
  <div class="page-marquee">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">基础用法</div>
      <div class="ymu-doc-block__bd">
        <div class="item">
          <ymu-marquee>
            <ymu-marquee-item v-for="(item, index) in list" :key="index">
              <p>{{ item }}</p>
            </ymu-marquee-item>
          </ymu-marquee>
        </div>
      </div>

      <div class="ymu-doc-block__hd">设置header</div>
      <div class="ymu-doc-block__bd">
        <div class="item">
          <ymu-marquee>
            <ymu-icon name="ios-megaphone" slot="header"/>
            <ymu-marquee-item v-for="(item, index) in list" :key="index">
              <p>{{ item }}</p>
            </ymu-marquee-item>
          </ymu-marquee>
        </div>
      </div>

      <div class="ymu-doc-block__hd">direction=down</div>
      <div class="ymu-doc-block__bd">
        <div class="item">
          <ymu-marquee direction="down">
            <ymu-icon name="ios-megaphone" slot="header"/>
            <ymu-marquee-item v-for="(item, index) in list" :key="index">
              <p>{{ item }}</p>
            </ymu-marquee-item>
          </ymu-marquee>
        </div>
      </div>

      <div class="ymu-doc-block__hd">设置高度itemHeight=60</div>
      <div class="ymu-doc-block__bd">
        <div class="item">
          <ymu-marquee direction="down">
            <ymu-icon name="ios-megaphone" slot="header"/>
            <ymu-marquee-item v-for="(item, index) in list" :key="index">
              <p>{{ item }}</p>
              <p>{{ item }}</p>
            </ymu-marquee-item>
          </ymu-marquee>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        '构建用户界面体验Weex',
        '构建用户界面体验Flutter',
        '构建用户界面体验ReactNative'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.item {
  height: 30px;
  padding: 0 10px;
  color: #ed6a0c;
  font-size: 14px;
  line-height: 30px;
  background-color: #fffbe8;
  .ymuicon {
    line-height: 30px;
    margin-right: 4px;
  }
}
</style>
