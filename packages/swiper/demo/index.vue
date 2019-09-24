<template>
  <div class="yus-demo yus-demo-swiper">
    <a href="http://static.airtlab.com">立即前往</a>
    <!-- <iframe src="http://static.airtlab.com"></iframe> -->
    <!-- <div class="yus-demo-block__hd">基本用法</div>
    <div class="yus-demo-block__bd">
      <div class="swiper-01">
        <yus-swiper
          class="swiper"
          ref="swiper01"
          :auto-play="false"
          :active="v1"
          @index-change="onIndexChange1"
        >
          <yus-swiper-item>
            <div class="item">1</div>
          </yus-swiper-item>
          <yus-swiper-item>
            <div class="item">2</div>
          </yus-swiper-item>
          <yus-swiper-item>
            <div class="item">3</div>
          </yus-swiper-item>
        </yus-swiper>
        <div class="yus-demo-row" style="margin-top: 10px">
          <yus-button block type="primary" @click="onClick01SlideNext">slideNext</yus-button>
        </div>
        <div class="yus-demo-row">
          <yus-button block type="primary" @click="onClick01SlidePrev">slidePrev</yus-button>
        </div>
      </div>
    </div>

    <div class="yus-demo-block__hd">自定义指示器</div>
    <div class="yus-demo-block__bd">
      <yus-swiper
        class="swiper swiper-02"
        ref="swiper02"
        :auto-play="false"
        :active="v2"
        @index-change="onIndexChange2"
      >
        <yus-swiper-item>
          <div class="item">1</div>
        </yus-swiper-item>
        <yus-swiper-item>
          <div class="item">2</div>
        </yus-swiper-item>
        <div class="indicator" slot="indicator">{{ v2 + 1 }}/2</div>
      </yus-swiper>
    </div>

    <div class="yus-demo-block__hd">垂直方向</div>
    <div class="yus-demo-block__bd">
      <yus-swiper
        class="swiper swiper-03"
        ref="swiper03"
        direction="vertical"
        :auto-play="false"
        :active="v3"
        @index-change="onIndexChange3"
      >
        <yus-swiper-item>
          <div class="item">1</div>
        </yus-swiper-item>
        <yus-swiper-item>
          <div class="item">2</div>
        </yus-swiper-item>
        <div class="indicator" slot="indicator">{{ v3 + 1 }}/2</div>
      </yus-swiper>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      v1: 0,
      v2: 0,
      v3: 0,
      v4: 0
    };
  },
  methods: {
    onClick01SlideTo() {
      this.$refs.swiper01.slideTo(this.v1);
    },
    onClick01SlideNext() {
      this.$refs.swiper01.slideNext();
    },
    onClick01SlidePrev() {
      this.$refs.swiper01.slidePrev();
    },
    onIndexChange3(index) {
      this.v3 = index;
    },
    onIndexChange2(index) {
      this.v2 = index;
    },
    onIndexChange1(index) {
      this.v1 = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-4 {
  width: 100%;
  height: 180px;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.swiper-01 {
  .swiper {
    height: 150px;
  }
  .item {
    font-size: 30px;
    line-height: 150px;
    text-align: center;
  }
  /deep/ .yus-swiper-item {
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
  /deep/ .yus-swiper-item {
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

.swiper-03 {
  height: 150px;
  .item {
    font-size: 30px;
    line-height: 150px;
    text-align: center;
  }
  /deep/ .yus-swiper-item {
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

.yus-demo {
  height: 100vh;
}

iframe {
  width: 100%;
  height: 100%;
}
</style>
