<template>
  <div class="page page-switch">
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">基础用法</div>
      <div class="yus-demo-block__bd">
        <yus-cell>
          <div slot="title" style="width: 100%">
            <yus-progress :percent="50" style="width: 100%">
              <span slot="start" class="label">提升率</span>
              <span slot="end" class="right">50%</span>
            </yus-progress>
          </div>
        </yus-cell>

        <yus-cell>
          <div slot="title" style="width: 100%">
            <yus-progress :percent="100" style="width: 100%">
              <span slot="start" class="label">提升率</span>
              <span slot="end" class="right">100%</span>
            </yus-progress>
          </div>
        </yus-cell>

        <yus-cell>
          <div slot="title" style="width: 100%">
            <yus-progress :percent="percent" style="width: 100%">
              <span slot="start" class="label">
                <span>提升率</span>
              </span>
              <span slot="end" class="right">
                <span>{{ percent }}%</span>
              </span>
            </yus-progress>
            <div style="height: 8px"></div>
            <div class="yus-demo-row">
              <yus-button type="primary" block @click="percent+=10">+10</yus-button>
            </div>
            <yus-button type="primary" block @click="percent-=10">-10</yus-button>
          </div>
        </yus-cell>
      </div>
    </div>

    <div class="yus-demo-block__hd">设置高度</div>
    <div class="yus-demo-block__bd">
      <yus-cell>
        <div slot="title" style="width: 100%">
          <yus-progress :percent="percent" barHeight="8px" style="width: 100%">
            <span slot="start" class="label">提升率</span>
            <span slot="end" class="right">{{ percent }}%</span>
          </yus-progress>
        </div>
      </yus-cell>
    </div>

    <div class="yus-demo-block__hd">设置颜色</div>
    <div class="yus-demo-block__bd">
      <yus-cell>
        <div slot="title" style="width: 100%">
          <yus-progress :percent="percent" barHeight="10px" barColor="#caad84" trackColor="red" style="width: 100%">
            <span slot="start" class="label">提升率</span>
            <span slot="end" class="right">{{ percent }}%</span>
          </yus-progress>
        </div>
      </yus-cell>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      percent: 10
    };
  }
};
</script>

<style lang="scss" scoped>
.label {
  margin-right: 5px;
}
.right {
  margin-left: 5px;
}
</style>
