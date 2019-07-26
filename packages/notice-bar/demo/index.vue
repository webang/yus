<template>
  <div class="page-notice-bar">
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">基础用法</div>
      <div class="yus-demo-block__bd">
        <yus-notice-bar>
          <p>受隔夜消息面利好及欧美股市大涨等利多因素推动，A股市场在经过之前连续的地量震荡后终于出现放量上涨，上证综指、深证成指均刷新了近一个月左右的盘中新高。</p>
        </yus-notice-bar>
      </div>
    </div>

    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">调整移动速度</div>
      <div class="yus-demo-block__bd">
        <yus-notice-bar :frequence="20">
          <p>The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day.</p>
        </yus-notice-bar>
      </div>
    </div>

    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">禁用loop模式</div>
      <div class="yus-demo-block__bd">
        <yus-notice-bar :loop="false" :frequence="10">
          <p>A股市场在经过之前连续的地量震荡后终于出现放量上涨</p>
        </yus-notice-bar>
      </div>
    </div>

    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">自定义头部</div>
      <div class="yus-demo-block__bd">
        <yus-notice-bar :loop="false" :frequence="10">
          <span slot="header">公告:</span>
          <p>A股市场在经过之前连续的地量震荡后终于出现放量上涨</p>
        </yus-notice-bar>
      </div>
    </div>

    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">自定义尾部</div>
      <div class="yus-demo-block__bd">
        <yus-notice-bar :loop="false" :frequence="10">
          <span slot="header">公告:</span>
          <span slot="footer" class="close">不再显示</span>
          <p>A股市场在经过之前连续的地量震荡后终于出现放量上涨</p>
        </yus-notice-bar>
      </div>
    </div>

    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">不显示头部或尾部</div>
      <div class="yus-demo-block__bd">
        <yus-notice-bar :loop="false" :frequence="10" :show-header="false" :show-footer="false">
          <p>A股市场在经过之前连续的地量震荡后终于出现放量上涨</p>
        </yus-notice-bar>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.close {
  padding-right: 6px;
  font-size: 12px;
  color: #a1a1a1;
}
</style>
