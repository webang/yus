<template>
  <div class="page-marquee">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">基础用法</div>
      <div class="ymu-doc-block__content">
        <div class="marquee-wrap">
          <Icon name="ios-megaphone"></Icon>
          <Marquee>
            <MarqueeItem v-for="(item, index) in list" :key="index">
              <p>{{ item }}</p>
            </MarqueeItem>
          </Marquee>
        </div>
      </div>

      <div class="ymu-doc-block__title">设置方向direction=down</div>
      <div class="ymu-doc-block__content">
        <div class="marquee-wrap">
          <Icon name="ios-megaphone"></Icon>
          <Marquee direction="down">
            <MarqueeItem v-for="(item, index) in list" :key="index">
              <p>{{ item }}</p>
            </MarqueeItem>
          </Marquee>
        </div>
      </div>

      <div class="ymu-doc-block__title">设置高度itemHeight=60</div>
      <div class="ymu-doc-block__content">
        <div class="marquee-wrap">
          <Icon name="ios-megaphone"></Icon>
          <Marquee direction="down">
            <MarqueeItem v-for="(item, index) in list" :key="index">
              <p>{{ item }}</p>
              <p>{{ item }}</p>
            </MarqueeItem>
          </Marquee>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Marquee, MarqueeItem, Icon } from 'ymu'
export default {
  components: {
    Icon,
    Marquee,
    MarqueeItem
  },
  data () {
    return {
      list: [
        '构建用户界面体验Flutter',
        '构建用户界面体验ReactNative',
        '构建用户界面体验Weex'
      ]
    }
  }
}
</script>

<style lang="scss">
.marquee-wrap {
  display: flex;
  height: 30px;
  padding: 0 12px;
  color: #ed6a0c;
  font-size: 14px;
  line-height: 30px;
  background-color: #fffbe8;
  .ymuicon {
    line-height: 30px;
    margin-right: 4px;
  }
}

.icon-voice {
  margin-right: 5px;
}
</style>
