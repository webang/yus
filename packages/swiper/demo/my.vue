<template>
  <div class="demo-swiper">
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
    <div>
      <ymu-button @click="onClick01SlideTo">slideTo</ymu-button>
      <ymu-button @click="onClick01SlideNext">slideNext</ymu-button>
      <ymu-button @click="onClick01SlidePrev">slidePrev</ymu-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClick01SlideTo () {
      console.log(this.$refs.swiper01)
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
.swiper-01 {
  height: 200px;
  .item {
    font-size: 30px;
    line-height: 200px;
    text-align: center;
  }
  /deep/ .ymu-swiper-slide {
    &:nth-child(1) {
      background: #4caf50;
    }
    &:nth-child(2) {
      background: #03a9f4;
    }
    &:nth-child(3) {
      background: #f44336;
    }
  }
}
</style>
