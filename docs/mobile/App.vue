<template>
  <div id="yus-demo">
    <!-- <yus-nav-bar
      v-if="$route.meta.title"
      :title="$route.meta.title"
      left-text="返回"
      @click-left="$router.go(-1)"
    ></yus-nav-bar> -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#yus-demo {
  /deep/ .yus-nav-bar__left-text {
    color: #404040;
  }
}

* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-size: 14px;
  background: #f5f5f9;
}

.yus-demo {
  padding-bottom: 12px;
}

.yus-demo-block__hd {
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  color: rgba(69, 90, 100, 0.6);
  padding: 25px 15px 15px;
}

.yus-demo-block__bd {
  padding: 0 15px;
}

.yus-demo-row {
  margin-bottom: 10px;
}

.yus-demo-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.yus-demo-mb {
  margin-bottom: 10px;
}

.yus-demo-mt {
  margin-top: 10px;
}
</style>
