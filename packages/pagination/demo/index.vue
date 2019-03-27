<template>
  <div class="demo-pagination">
    <div class="ymu-doc-block__hd">默认</div>
    <div class="ymu-doc-block__bd">
      <ymu-pagination :total=30 :pageIndex=2 :pageSize=5 />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      v4: false
    }
  }
}
</script>

<style lang="scss" scoped>
.ymu-doc-block__bd {
  background: #fff;
}

.menu {
  width: 100px;
  line-height: 40px;
  li {
    font-size: 14px;
    color: #666;
    text-align: center;
    border-bottom: 1px #ffeeff solid;
  }
}

.demo-01,
.demo-02 {
  .trigger {
    display: block;
    height: 40px;
    line-height: 40px;
    color: #999;
  }
}

.demo-04,
.demo-03  {
  .trigger {
    display: block;
    width: 50px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    color: #999;
    text-align: center;
  }
}
</style>
