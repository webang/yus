<template>
  <div class="demo-swiper">
    <div class="ymu-doc-block__hd">基本用法</div>
    <div class="ymu-doc-block__bd">
      <div class="swiper-01">
        <ymu-swiper class="swiper" ref="swiper01" :autoplay="false" :active="v1" @on-index-change="onIndexChange1">
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
          <div class="input-wrap">
            <ymu-field type="text" v-model="v1"/>
          </div>
        </div>
        <div class="col">
          <ymu-button size="small" type="primary" @click="onClick01SlideNext">slideNext</ymu-button>
          <ymu-button size="small" type="primary" @click="onClick01SlidePrev">slidePrev</ymu-button>
        </div>
      </div>
    </div>

    <div class="ymu-doc-block__hd">自定义指示器</div>
    <div class="ymu-doc-block__bd">
      <ymu-swiper class="swiper swiper-02" ref="swiper02" :autoplay="false" :active="v2" @on-index-change="onIndexChange2">
        <ymu-swiper-item>
          <div class="item">1</div>
        </ymu-swiper-item>
        <ymu-swiper-item>
          <div class="item">2</div>
        </ymu-swiper-item>
        <div class="indicator" slot="indicator">{{ v2 + 1 }}/2</div>
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
    },
    onIndexChange2 (index) {
      this.v2 = index
    },
    onIndexChange1 (index) {
      this.v1 = index
    }
  }
}
</script>

<style lang="scss" scoped>
.col {
  padding-top: 10px;
}

.swiper-01 {
  .swiper {
    height: 130px;
  }
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
  .input-wrap {
    display: inline-block;
  }
}

.swiper-02 {
  height: 150px;
  .item {
    font-size: 30px;
    line-height: 150px;
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
  .indicator {
    position: absolute;
    right: 10px;
    bottom: 10px;
    padding: 3px 8px;
    font-size: 12px;
    color: #fff;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
}
</style>
