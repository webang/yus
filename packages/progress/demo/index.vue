<template>
  <div class="page page-switch">
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">基础用法</div>
      <div class="yus-demo-block__bd">
        <yus-cell>
          <div slot="title" style="width: 100%">
            <yus-progress :percentage="50" style="width: 100%">
              <span slot="start" class="label">提升率</span>
              <span slot="end" class="right">50%</span>
            </yus-progress>
          </div>
        </yus-cell>

        <yus-cell>
          <div slot="title" style="width: 100%">
            <yus-progress :percentage="100" style="width: 100%">
              <span slot="start" class="label">提升率</span>
              <span slot="end" class="right">100%</span>
            </yus-progress>
          </div>
        </yus-cell>

        <yus-cell>
          <div slot="title" style="width: 100%">
            <yus-progress :percentage="percentage" style="width: 100%">
              <span slot="start" class="label">
                <span>提升率</span>
              </span>
              <span slot="end" class="right">
                <span>{{ percentage }}%</span>
              </span>
            </yus-progress>
            <div style="height: 8px"></div>
            <div class="yus-demo-row">
              <yus-button type="primary" block @click="percentage+=10">+10</yus-button>
            </div>
            <yus-button type="primary" block @click="percentage-=10">-10</yus-button>
          </div>
        </yus-cell>
      </div>
    </div>
    <div class="yus-demo-block__hd">设置高度</div>
    <div class="yus-demo-block__bd">
      <yus-cell>
        <div slot="title" style="width: 100%">
          <yus-progress :percentage="40" :bar-height="8" style="width: 100%">
            <span slot="start" class="label">提升率</span>
            <span slot="end" class="right">100%</span>
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
      percentage: 10
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
