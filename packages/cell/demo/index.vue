<template>
  <div class="yus-demo yus-demo-navbar">
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">基本用法</div>
      <div class="yus-demo-block__bd">
        <div class="yus-demo-row" style="margin-top: 10px">
          <yus-cell title="支付宝到账" value="+500"></yus-cell>
        </div>
        <yus-cell title="标题" value="链接模式" is-link></yus-cell>
      </div>

      <div class="yus-demo-block__hd">底部边框</div>
      <div class="yus-demo-block__bd">
        <div class="yus-demo-row" style="margin-top: 10px">
          <yus-cell title="标题" value="底部边框" is-link border></yus-cell>
          <yus-cell title="标题" value="底部无边框" is-link></yus-cell>
        </div>
      </div>

      <div class="yus-demo-block__hd">设置箭头方向</div>
      <div class="yus-demo-block__bd">
        <div class="yus-demo-row" style="margin-top: 10px">
          <yus-cell title="方向向右" arrowDirection="right" is-link border></yus-cell>
          <yus-cell title="方向向上" arrowDirection="top" is-link border></yus-cell>
          <yus-cell title="方向向下" arrowDirection="down" is-link></yus-cell>
        </div>
      </div>

      <div class="yus-demo-block__hd">渲染为a标签</div>
      <div class="yus-demo-block__bd">
        <yus-cell
          title="标题"
          value="使用URL渲染为a标签"
          is-link
          url="https://mobile.ant.design/kitchen-sink/?lang=zh-CN"
        />
      </div>
      <div class="yus-demo-block__hd">展示描述信息</div>
      <div class="yus-demo-block__bd">
        <yus-cell
          title="标题"
          border
          label="2019-08-05"
          value="展示描述信息"
          is-link
          style="align-items: flex-start"
        />
        <yus-cell title="标题" label="2019-08-05" value="展示描述信息" is-link />
      </div>

      <div class="yus-demo-block__hd">使用图标</div>
      <div class="yus-demo-block__bd">
        <yus-cell title="标题" value="内置图标" is-link border>
          <yus-icon slot="icon" name="ios-alarm-outline"></yus-icon>
        </yus-cell>
        <yus-cell title="标题" value="自定义图标" is-link border>
          <img
            slot="icon"
            width="24"
            height="24"
            src="https://gitmoji.carloscuesta.me/static/favicon-32x32.png"
            alt
          />
        </yus-cell>
        <yus-cell
          title="标题"
          value="自定义图标"
          icon="https://gitmoji.carloscuesta.me/static/favicon-32x32.png"
          is-link
          border
        />
      </div>
    </div>
  </div>
</template>
