<template>
  <div class="yus-demo yus-demo-popover">
    <div class="yus-demo-block__hd">默认底部右对齐</div>
    <div class="yus-demo-block__bd">
      <yus-nav-bar title="NavBar" style="margin-bottom: 10px">
        <div slot="right">
          <yus-popover placement="bottom-right" class="demo-01" v-model="v1">
            <span class="trigger">菜单</span>
            <div slot="content">
              <ul class="menu">
                <li>查看订单</li>
                <li>立即登录</li>
                <li>注销登录</li>
              </ul>
            </div>
          </yus-popover>
        </div>
      </yus-nav-bar>
    </div>

    <div class="yus-demo-block__hd">底部左对齐</div>
    <div class="yus-demo-block__bd">
      <yus-popover placement="bottom-left" class="demo-02" v-model="v2">
        <span class="trigger">菜单</span>
        <div slot="content">
          <ul class="menu">
            <li>查看订单</li>
            <li>立即登录</li>
            <li>注销登录</li>
          </ul>
        </div>
      </yus-popover>
    </div>

    <div class="yus-demo-block__hd">底部中对齐</div>
    <div class="yus-demo-block__bd">
      <yus-popover placement="bottom" class="demo-03" v-model="v3">
        <span class="trigger">菜单</span>
        <div slot="content">
          <ul class="menu">
            <li>查看订单</li>
            <li>立即登录</li>
            <li>注销登录</li>
          </ul>
        </div>
      </yus-popover>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      v1: false,
      v2: false,
      v3: false,
      v4: false,
      v5: false
    };
  }
};
</script>

<style lang="scss" scoped>
.yus-doc-block__bd {
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

.trigger {
  padding: 4px 10px;
  background: #fff;
}
</style>
