<template>
  <div class="page-marquee">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基础用法</div>
      <div class="ym-doc-block__content">
        <div class="marquee-wrap">
          <i class="iconfont icon-voice"></i>
          <Marquee>
            <MarqueeItem v-for="(item, index) in list" :key="index">
              <p>{{ index+'_'+item }}</p>
            </MarqueeItem>
          </Marquee>
        </div>
      </div>
    </div>
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基础用法</div>
      <div class="ym-doc-block__content">
        <div class="marquee-wrap">
          <i class="iconfont icon-voice"></i>
          <Marquee direction="down">
            <MarqueeItem v-for="(item, index) in list" :key="index">
              <p>{{ index+'_'+item }}</p>
            </MarqueeItem>
          </Marquee>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Marquee from '@/components/marquee'
import MarqueeItem from '@/components/marquee-item'
export default {
  components: {
    Marquee,
    MarqueeItem
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    for (let index = 0; index < 4; index++) {
      this.list.push('基础用法基础用法基础用法基础用法')
    }
  }
}
</script>

<style lang="scss">
.marquee-wrap {
  display: flex;
  height: 30px;
  padding: 0 12px;
  line-height: 30px;
  font-size: 14px;
  color: #ed6a0c;
  background-color: #fffbe8;
}

.icon-voice {
  margin-right: 5px;
}
</style>
