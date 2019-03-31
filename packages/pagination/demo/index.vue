<template>
  <div class="demo-pagination">
    <div class="ymu-doc-block__hd">默认</div>
    <div class="ymu-doc-block__bd">
      <ymu-pagination
        :total=300
        :pageIndex=pageIndex
        :pageSize=5
        :perSize=5
        @on-index-change=onIndexChange />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      v4: false,
      pageIndex: 2
    }
  },
  methods: {
    onIndexChange (index) {
      this.pageIndex = index;
    }
  }
}
</script>

<style lang="scss" scoped>
.ymu-doc-block__bd {
  background: #fff;
}
/deep/ .ymu-pagination {
  margin: 0 auto;
}
</style>
