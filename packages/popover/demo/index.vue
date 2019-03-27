<template>
  <div class="demo-popover">
    <div class="ymu-doc-block__hd">默认底部右对齐</div>
    <div class="ymu-doc-block__bd">
      <ymu-navbar title="NavBar">
        <div slot="right">
          <ymu-popover placement="bottom-right" class="demo-01">
            <span class="trigger">菜单</span>
            <div slot="content">
              <ul class="menu">
                <li>查看订单</li>
                <li>立即登录</li>
                <li>注销登录</li>
              </ul>
            </div>
          </ymu-popover>
        </div>
      </ymu-navbar>
    </div>

    <div class="ymu-doc-block__hd">底部左对齐</div>
    <div class="ymu-doc-block__bd">
      <ymu-popover placement="bottom-left" class="demo-02">
        <span class="trigger">菜单</span>
        <div slot="content">
          <ul class="menu">
            <li>查看订单</li>
            <li>立即登录</li>
            <li>注销登录</li>
          </ul>
        </div>
      </ymu-popover>
    </div>
  

    <div class="ymu-doc-block__hd">底部中对齐</div>
    <div class="ymu-doc-block__bd">
      <ymu-popover placement="bottom" class="demo-03">
        <span class="trigger">菜单</span>
        <div slot="content">
          <ul class="menu">
            <li>查看订单</li>
            <li>立即登录</li>
            <li>注销登录</li>
          </ul>
        </div>
      </ymu-popover>
    </div>

    <div class="ymu-doc-block__hd">支持自动触发</div>
    <div class="ymu-doc-block__bd">
      <ymu-popover placement="bottom" class="demo-04" v-model="v4">
        <span class="trigger">菜单</span>
        <div slot="content">
          <ul class="menu">
            <li>查看订单</li>
            <li>立即登录</li>
            <li>注销登录</li>
          </ul>
        </div>
      </ymu-popover>
      <ymu-switch v-model="v4"></ymu-switch>
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
