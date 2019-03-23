<template>
  <div class="demo-pull-refresh">
    <ymu-pull-refresh @on-refresh="handleRefresh">
      <div
        v-infinite-scroll="loadMore"
        :infinite-scroll-disabled="busy || allLoaded"
        infinite-scroll-distance="10"
        :infinite-scroll-immediate-check="false"
      >
        <ul class="list">
          <li v-for="(item, index) in list" :key="index">哈哈，我是{{ index }}</li>
          <li class="no-more" v-if="allLoaded">我是有底线的</li>
          <li class="no-more" v-if="busy">加载中...</li>
        </ul>
      </div>
    </ymu-pull-refresh>
  </div>
</template>

<script>
import Vue from 'vue'
import InfiniteScroll from 'vue-infinite-scroll'
Vue.use(InfiniteScroll)

export default {
  data () {
    return {
      busy: false,
      list: [],
      allLoaded: false
    }
  },
  methods: {
    handleRefresh (down) {
      setTimeout(() => {
        this.getData(true)
        down()
      }, 2000)
    },
    loadMore () {
      if (this.allLoaded) {
        return
      }
      this.busy = true
      setTimeout(() => {
        this.getData()
        this.busy = false
      }, 2000)
    },
    getData (init) {
      if (init) {
        this.list = []
      }
      for (let index = 0; index < 20; index++) {
        this.list.push(this.list.length + index)
      }
      this.allLoaded = this.list.length >= 60
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.list {
  padding: 0 12px;
  padding-top: 0px;
  line-height: 30px;
  font-size: 14px;
  background: #fff;
}

li {
  padding: 12px 0;
  line-height: 20px;
  border-bottom: 1px solid #e8eef2;
}

.no-more {
  text-align: center;
  background-color: #e2e5e6;
}
</style>
