<template>
  <div class="demo-swiper">
    <div class="ymu-doc-block__hd">基本用法</div>
    <div class="ymu-doc-block__bd">
      <ymu-swiper class="swiper swiper-01" ref="swiper01" :autoplay="false">
        <ymu-swiper-item>
          <div class="item">1</div>
        </ymu-swiper-item>
        <ymu-swiper-item>
          <div class="item">2</div>
        </ymu-swiper-item>
        <ymu-swiper-item>
          <div class="item">3</div>
        </ymu-swiper-item>
      </ymu-swiper>
      <div class="col">
        <ymu-button size="small" type="primary" @click="onClick01SlideTo">slideTo</ymu-button>
        <input type="text" v-model="v1">
      </div>
      <div class="col">
        <ymu-button size="small" type="primary" @click="onClick01SlideNext">slideNext</ymu-button>
        <ymu-button size="small" type="primary" @click="onClick01SlidePrev">slidePrev</ymu-button>
      </div>
    </div>
    <div class="ymu-doc-block__hd">自定义指示器</div>
    <div class="ymu-doc-block__bd">
      <ymu-swiper class="swiper swiper-02" ref="swiper02" :autoplay="false" :active="v2" @on-index-change="($event, index) => v2=index">
        <ymu-swiper-item>
          <div class="item">1</div>
        </ymu-swiper-item>
        <ymu-swiper-item>
          <div class="item">2</div>
        </ymu-swiper-item>
        <div slot="indictor"></div>
      </ymu-swiper>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      v1: 0,
      v2: 0
    }
  },
  methods: {
    onClick01SlideTo () {
      this.$refs.swiper01.slideTo(this.v1);
    },
    onClick01SlideNext () {
      this.$refs.swiper01.slideNext()
    },
    onClick01SlidePrev () {
      this.$refs.swiper01.slidePrev()
    }
  }
}
</script>

<style lang="scss" scoped>
.col {
  padding-top: 10px;
}

.swiper-01 {
  height: 130px;
  .item {
    font-size: 30px;
    line-height: 130px;
    text-align: center;
  }
  /deep/ .ymu-swiper-slide {
    &:nth-child(1) {
      background: #f8591a;
    }
    &:nth-child(2) {
      background: #03a9f4;
    }
    &:nth-child(3) {
      background: #00bcd4;
    }
  }
}

.swiper-02 {
  height: 130px;
  .item {
    font-size: 30px;
    line-height: 130px;
    text-align: center;
  }
  /deep/ .ymu-swiper-slide {
    &:nth-child(1) {
      background: #f8591a;
    }
    &:nth-child(2) {
      background: #03a9f4;
    }
    &:nth-child(3) {
      background: #00bcd4;
    }
  }
}
</style>
