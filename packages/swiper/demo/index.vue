<template>
  <div class="yus-demo yus-demo-swiper">
    <yus-swiper class="swiper-4">
      <yus-swiper-item>
        <img
          src="//imgcps.jd.com/ling4/7143389/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5c131e9282acdd181da661ad/25266b31/cr_1125x549_0_72/s1125x690/q70.jpg"
          alt
        >
      </yus-swiper-item>
      <yus-swiper-item>
        <img
          src="//m.360buyimg.com/mobilecms/s750x366_jfs/t1/71917/4/1285/156394/5cf7b0d6E268cad13/143569fc13207d3c.jpg!cr_1125x549_0_72!q70.jpg.dpg"
          alt
        >
      </yus-swiper-item>
      <yus-swiper-item>
        <img
          src="//m.360buyimg.com/mobilecms/s750x366_jfs/t1/67682/18/2272/272049/5d08b596Eb01cb76c/61ac551b76a65fbf.jpg!cr_1125x549_0_72!q70.jpg.dpg"
          alt
        >
      </yus-swiper-item>
    </yus-swiper>

    <div class="yus-demo-block__hd">基本用法</div>
    <div class="yus-demo-block__bd">
      <div class="swiper-01">
        <yus-swiper class="swiper" ref="swiper01" :active="v4" :auto-play="false" :loop="false">
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
      </div>
    </div>

    <div class="yus-demo-block__hd">基本用法</div>
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
    </div>
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
</style>
