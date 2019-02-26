<template>
  <div class="ymu-docs-container">
    <div class="header">
      <div class="ymu-docs-row">
        <span class="text">Ymu</span>
      </div>
    </div>
    <div class="ymu-docs-row">
      <div class="ymu-docs-nav">
        <div class="menu" v-for="(group, index) in config.nav" :key="'i' + index">
          <div class="menu__title">{{ group.name }}</div>
          <template v-for="(child, childIndex) in group.groups">
            <div
              class="menu__item menu__item-title"
              v-if="child.name"
              :key="'j' + childIndex"
              v-text="child.name"
            ></div>
            <router-link
              class="menu__item"
              v-for="(kItem, kIndex) in child.list"
              :key="'k'+ kIndex"
              :to="kItem.path"
              v-text="kItem.title"
            />
          </template>
        </div>
        <!-- <div class="menu">
          <div class="menu__title">组件</div>
          <router-link
            class="menu__item"
            v-for="(item, index) in componentConf"
            :to="'/'+item.name"
            :key="index"
          >
            <span>{{ item.title ? item.title : item.name }}</span>
          </router-link>
        </div> -->
      </div>
      <div class="ymu-docs-main">
        <div class="markdown-wrapper">
          <router-view></router-view>
        </div>
        <div class="simulator-wrapper">
          <iframe class="simulator" :src="mobileUrl" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import componentConf from "./config/component";
import config from "./nav.config";

export default {
  data() {
    return {
      config,
      componentConf,
      mobileUrl: "/mobile.html"
    };
  }
};
</script>


<style lang="scss" scoped>
.ymu-docs-root {
  -webkit-font-smoothing: antialiased;
  font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
}
.header {
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid #f1f4f8;
  .text {
    font-size: 24px;
    font-family: Dosis, Source Sans Pro, Helvetica Neue, Arial, sans-serif;
  }
}

.ymu-docs-nav {
  float: left;
  width: 200px;
  font-size: 14px;
  padding-top: 10px;
  box-sizing: border-box;
  color: #455a64;
  border-right: 1px solid #f1f4f8;
  .menu__item,
  .menu__title {
    display: block;
    padding: 12px;
    padding-left: 0;
    color: inherit;
  }
  .menu__title {
    font-size: 16px;
    font-weight: 700;
  }
  /deep/ .router-link-active {
    color: #0079f3;
  }
  .menu__item-title {
    font-size: 12px;
    color: rgba(69, 90, 100, 0.6);
  }
}

.ymu-docs-main {
  display: flex;
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
  margin-top: 20px;
}

.simulator {
  width: 375px;
  height: 667px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2);
}
}
</style>
