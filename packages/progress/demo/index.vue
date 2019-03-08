<template>
  <div class="page page-switch">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">基础用法</div>
      <div class="ymu-doc-block__bd">
        <ymu-cell-group>
          <ymu-cell>
            <div slot="label" class="ymu-ui-flex" style="width: 100%">
              <ymu-progress :percentage="10" style="width: 100%">
                <span slot="start" class="label">提升率</span>
              </ymu-progress>
            </div>
          </ymu-cell>
          <ymu-cell>
            <div slot="label" class="ymu-ui-flex" style="width: 100%">
              <ymu-progress :percentage="50" style="width: 100%">
                <span slot="start" class="label">提升率</span>
                <span slot="end" class="right">50%</span>
              </ymu-progress>
            </div>
          </ymu-cell>
          <ymu-cell>
            <div slot="label" class="ymu-ui-flex" style="width: 100%">
              <ymu-progress :percentage="100" style="width: 100%">
                <span slot="start" class="label">提升率</span>
                <span slot="end" class="right">100%</span>
              </ymu-progress>
            </div>
          </ymu-cell>
          <ymu-cell>
            <div slot="label" class="ymu-ui-flex" style="width: 100%">
              <ymu-progress :percentage="percentage" style="width: 100%">
                <span slot="start" class="label">
                  <ymu-button size="mini" type="primary" plain @click="percentage-=10">-10</ymu-button>
                  <span>提升率</span>
                </span>
                <span slot="end" class="right">
                  <span>{{ percentage }}%</span>
                  <ymu-button size="mini" type="primary" plain @click="percentage+=10">+10</ymu-button>
                </span>
              </ymu-progress>
            </div>
          </ymu-cell>
        </ymu-cell-group>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      percentage: 10
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  margin-right: 5px;
}
.right {
  margin-left: 5px;
}
</style>
