<template>
  <div class="ymu-docs-root home">
    <div class="header">
      <span>ymu1.0.0</span>
    </div>
    <div class="container">
      <div class="side-menu">
        <router-link
        v-for="(item, index) in componentConf"
        :to="'/'+item.name"
        :key="index"
      >
        <span>{{ item.name }}</span>
      </router-link>
      </div>
      <div class="markdown-wrapper">
        <router-view></router-view>
      </div>
      <div class="simulator-wrapper">
        <iframe class="simulator" src="http://localhost:8090" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import componentConf from './config/component'
export default {
  data () {
    return {
      componentConf
    }
  }
}
</script>


<style lang="scss" scoped>
.header {
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid #f1f4f8;
}

.container {
  display: flex;
}

.side-menu {
  width: 200px;
  padding: 20px;
  padding-top: 10px;
  box-sizing: border-box;
  border-right: 1px solid #f1f4f8;
  /deep/ a {
    display: block;
    line-height: 36px;
    color: #455a64;
  }
  /deep/ .router-link-active {
    color: #0079f3;
  }
}

.markdown-wrapper {
  flex: 1;
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 100px;
}

.simulator-wrapper {
  width: 375px;
  padding-right: 20px;
}

.simulator {
  width: 375px;
  height: 667px;
  box-shadow: 0 1px 4px rgba(0,0,0,.2), 0 1px 2px rgba(0,0,0,.2);
}
</style>
