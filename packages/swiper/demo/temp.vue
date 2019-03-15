<template>
  <div class="demo-swiper">
    <van-swipe :autoplay="false" indicator-color="white" ref="swiper">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
    </van-swipe>
    <div>
      <ymu-button @click="onClick01SlideTo">slideTo</ymu-button>
      <ymu-button @click="onClick01SlideNext">slideNext</ymu-button>
      <ymu-button @click="onClick01SlidePrev">slidePrev</ymu-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant)

let index = 0

export default {
  methods: {
    onClick01SlideTo () {
      // console.log(this.$refs.swiper01)
      index++
      this.$refs.swiper.swipeTo(index)
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

/deep/ .van-swipe {
  height: 200px;
}

/deep/ .van-swipe-item {
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
</style>
