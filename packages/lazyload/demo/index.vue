<template>
  <div class="demo-lazyload">
      <!-- <img
        class="lazy-img"
        v-for="img in imageList"
        v-lazy="img"
        :key="10+img"
      > -->
      <div
        class="lazy-bg"
        v-for="img in imageList"
        v-lazy:background-image="img"
        :key="30+img"
      />
      <lazy-component>
        <img
          class="lazy-component"
          v-for="img in imageList"
          v-lazy="img"
          :key="20+img"
        >
      </lazy-component>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageList: [
        'https://www.apple.com/v/home/ea/images/heroes/spring-iphone-xr/iphone_xr_small_2x.jpg',
        'https://www.apple.com/v/home/ea/images/heroes/apple-watch-series-4/apple_watch_series_4_4aeff_small_2x.jpg',
        'https://www.apple.com/v/home/ea/images/heroes/spring-iphone-xs/iphone_xs_small_2x.jpg',
        'https://www.apple.com/v/mac/home/ae/images/overview/imac__dlz2ciyr6hm6_small_2x.jpg',
        'https://www.apple.com/v/watch/home/l/images/hero_small_2x.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.lazy-img {
  width: 100%;
  height: 400px;
}

.lazy-bg {
  width: 100%;
  height: 400px;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
}

.lazy-component {
  // hei
}
</style>
