<template>
  <div class="demo-pull-refresh">
    <ymu-pull-refresh @on-refresh="handleRefresh">
      <ul class="list">
        <li v-for="(item, index) in list" :key="index">哈哈，我是{{ item }}</li>
      </ul>
    </ymu-pull-refresh>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    handleRefresh (down) {
      setTimeout(() => {
        this.getData()
        down()
      }, 300)
    },
    getData () {
      for (let index = 0; index < 10; index++) {
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
</style>
