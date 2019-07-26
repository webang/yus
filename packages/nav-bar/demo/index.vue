<template>
  <div class="yus-demo yus-demo-navbar">
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">按钮类型</div>
      <div class="yus-demo-block__bd">
        <div class="yus-demo-row">
          <yus-nav-bar title="确认订单"/>
        </div>
        <div class="yus-demo-row">
          <yus-nav-bar title="确认订单" left-text="返回"/>
        </div>
        <div class="yus-demo-row">
          <yus-nav-bar title="确认订单" left-text="返回" right-text="菜单"/>
        </div>
        <div class="yus-demo-row">
          <yus-nav-bar title="确认订单" left-text="返回" right-text="菜单"/>
        </div>
        <div class="yus-demo-row">
          <yus-nav-bar title="确认订单" left-text="返回" right-text="菜单">
            <div slot="left">自定义左侧</div>
          </yus-nav-bar>
        </div>
        <div class="yus-demo-row">
          <yus-nav-bar title="确认订单" left-text="返回" right-text="菜单">
            <div slot="title">自定义标题</div>
          </yus-nav-bar>
        </div>
        <div class="yus-demo-row">
          <yus-nav-bar title="确认订单" left-text="返回" right-text="菜单">
            <div slot="right">自定义右侧</div>
          </yus-nav-bar>
        </div>
        <div class="yus-demo-row">
          <yus-nav-bar mode="dark" title="dark模式" left-text="返回" right-text="菜单"/>
        </div>
      </div>
    </div>
  </div>
</template>
