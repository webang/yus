<template>
  <div class="demo-pull-refresh">
    <ymu-pull-refresh @on-refresh="handleRefresh">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
        <ul class="list">
          <li v-for="(item, index) in list" :key="index">哈哈，我是{{ index }}</li>
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
      list: []
    }
  },
  methods: {
    handleRefresh (down) {
      setTimeout(() => {
        this.getData(true)
        down()
      }, 1000)
    },
    loadMore () {
      this.busy = true
      setTimeout(() => {
        this.getData()
        this.busy = false
      }, 300)
    },
    getData (init) {
      if (init) {
        this.list = []
      }
      for (let index = 0; index < 20; index++) {
        this.list.push(this.list.length + index)
      }
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.list {
  padding: 12px 12px;
  padding-top: 0px;
  line-height: 30px;
  font-size: 14px;
}
li {
  line-height: 40px;
}
</style>
