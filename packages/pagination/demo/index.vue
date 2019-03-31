<template>
  <div class="demo-pagination">
    <div class="ymu-doc-block__hd">show-break-view=true</div>
    <div class="ymu-doc-block__bd">
      <ymu-pagination
        :total-items=300
        :page-index=pageIndex
        :page-size=5
        :page-range=5
        @on-index-change=onIndexChange />
    </div>

    <div class="ymu-doc-block__hd">show-break-view=true</div>
    <div class="ymu-doc-block__bd">
      <ymu-pagination
        :total-items=300
        :page-index=pageIndex
        :page-size=5
        :page-range=5
        :show-break-view="true"
        :marginPages=0
        @on-index-change=onIndexChange />
    </div>

    <div class="ymu-doc-block__hd">marginPages=1</div>
    <div class="ymu-doc-block__bd">
      <ymu-pagination
        :total-items=300
        :page-index=pageIndex
        :page-size=5
        :page-range=5
        :show-break-view="true"
        :marginPages=1
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
  text-align: center;
}
/deep/ .ymu-pagination {
  margin: 0 auto;
}
</style>
