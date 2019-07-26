<template>
  <div
    v-infinite-scroll="loadMore"
    :infinite-scroll-disabled="busy || allLoaded"
    infinite-scroll-distance="10"
    :infinite-scroll-immediate-check="false"
  >
    <yus-pull-refresh :on-refresh="handleRefresh">
      <ul class="list">
        <li v-for="(item, index) in list" :key="index">哈哈，我是{{ index }}</li>
        <li class="no-more" v-if="!allLoaded" :style="noMoreStl">加载中...</li>
        <li class="no-more" v-if="allLoaded && !this.busy">我是有底线的</li>
      </ul>
    </yus-pull-refresh>
  </div>
</template>

<script>
import Vue from 'vue';
import InfiniteScroll from 'vue-infinite-scroll';

Vue.use(InfiniteScroll);

export default {
  data() {
    return {
      busy: false,
      list: [],
      allLoaded: false
    };
  },
  watch: {},
  computed: {
    noMoreStl() {
      if (!this.busy) {
        return {
          visibility: 'hidden'
        };
      }
    }
  },
  methods: {
    handleRefresh(down) {
      setTimeout(() => {
        this.getData(true);
        down();
      }, 1500);
    },
    loadMore() {
      if (this.allLoaded) {
        return;
      }
      if (this.busy) {
        return;
      }
      this.busy = true;
      setTimeout(() => {
        this.getData();
        this.busy = false;
      }, 2000);
    },
    getData(init) {
      if (init) {
        this.list = [];
      }
      for (let index = 0; index < 20; index++) {
        this.list.push(this.list.length + index);
      }
      this.allLoaded = this.list.length >= 60;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.list {
  padding-top: 0px;
  line-height: 30px;
  font-size: 14px;
  background: #fff;
}
li {
  padding: 20px 12px;
  line-height: 20px;
  border-bottom: 1px solid #e2e5e6;
}
.no-more {
  text-align: center;
}
</style>